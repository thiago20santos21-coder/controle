// ════════════════════════════════════════════════════════
// app.js — armazenamento local (localStorage), sem Firebase
// ════════════════════════════════════════════════════════

const STORAGE_KEY = 'painel_ml_relatorios';
const metaAtual = 99;
let reportsCache = [];

/* ── PERSISTÊNCIA LOCAL ─────────────────────────────── */
function carregarDados() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    reportsCache = raw ? JSON.parse(raw) : [];
  } catch { reportsCache = []; }
}
function salvarDados() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reportsCache));
}
carregarDados();

/* ── TOAST ──────────────────────────────────────────── */
function showToast(message, type = 'success') {
  const icons = { success: 'circle-check', error: 'circle-x', warning: 'alert-triangle', info: 'info-circle' };
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <div class="toast-icon"><i class="ti ti-${icons[type] || 'info-circle'}"></i></div>
    <div class="toast-message">${message}</div>
    <button class="toast-close" aria-label="Fechar"><i class="ti ti-x"></i></button>`;
  toast.querySelector('.toast-close').addEventListener('click', () => toast.remove());
  container.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

/* ── MODAL DE CONFIRMAÇÃO ───────────────────────────── */
const modalOverlay   = document.getElementById('confirm-modal');
const modalTitleEl   = document.getElementById('modal-title-el');
const modalMsgEl     = document.getElementById('modal-message-el');
const modalCancelBtn = document.getElementById('modal-cancel-btn');
const modalConfirmBtn = document.getElementById('modal-confirm-btn');
let modalCallback = null;

function abrirModalConfirmacao(titulo, mensagem, callback) {
  modalTitleEl.innerHTML = `<i class="ti ti-alert-triangle" style="color:var(--err);font-size:18px;"></i>${titulo}`;
  modalMsgEl.textContent = mensagem;
  modalCallback = callback;
  modalOverlay.classList.add('show');
}
function closeConfirmModal(confirmado) {
  modalOverlay.classList.remove('show');
  if (confirmado && modalCallback) modalCallback();
  modalCallback = null;
}
modalCancelBtn.addEventListener('click', () => closeConfirmModal(false));
modalConfirmBtn.addEventListener('click', () => closeConfirmModal(true));
modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeConfirmModal(false); });

/* ── NAVEGAÇÃO ──────────────────────────────────────── */
function switchTab(t) {
  ['form', 'hist'].forEach(id => {
    const panel = document.getElementById('panel-' + id);
    if (panel) panel.classList.toggle('active', id === t);
    const nav = document.getElementById('nav-' + id);
    if (nav) nav.classList.toggle('active', id === t);
    const mnav = document.getElementById('mnav-' + id);
    if (mnav) mnav.classList.toggle('active', id === t);
  });
  if (t === 'hist') renderHist();
}
document.querySelectorAll('[data-tab]').forEach(el => {
  el.addEventListener('click', () => switchTab(el.dataset.tab));
});

/* ── RELÓGIO E DATA ─────────────────────────────────── */
function updateHeaderClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  const clockEl = document.getElementById('header-clock');
  if (clockEl) clockEl.textContent = `${h}:${m}:${s}`;
}
function updateDateDisplay() {
  const now = new Date();
  const dias = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'];
  const meses = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
  const dataFormatada = `${dias[now.getDay()]}, ${now.getDate()} de ${meses[now.getMonth()]} de ${now.getFullYear()}`;
  const dateEl = document.getElementById('header-date');
  if (dateEl) dateEl.textContent = dataFormatada;
  const pgDateEl = document.getElementById('pg-date-display');
  if (pgDateEl) pgDateEl.textContent = dataFormatada;
}
function scheduleNextDateUpdate() {
  const now = new Date();
  const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 5);
  setTimeout(() => {
    updateDateDisplay();
    setInterval(updateDateDisplay, 24 * 60 * 60 * 1000);
  }, nextMidnight - now);
}
updateDateDisplay();
scheduleNextDateUpdate();
updateHeaderClock();
setInterval(updateHeaderClock, 1000);
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') updateDateDisplay();
});

/* ── VALIDAÇÃO ──────────────────────────────────────── */
const REQUIRED_FIELDS = ['totalPedidos', 'totalShippados', 'oot', 'sla'];

function validarFormulario() {
  let vazios = 0;
  REQUIRED_FIELDS.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    const vazio = el.value.trim() === '';
    if (vazio) vazios++;
    const fld = el.closest('.fld') || el.closest('.kpi-meta-card') || el.closest('.kpi-info-card');
    if (fld) fld.classList.toggle('fld-missing', vazio);
  });

  const btn = document.getElementById('btnGerar');
  const counter = document.getElementById('validationCounter');
  const counterText = document.getElementById('validationText');

  if (vazios === 0) {
    btn.disabled = false;
    counter.className = 'validation-counter complete';
    counter.querySelector('i').className = 'ti ti-circle-check';
    counterText.textContent = 'Campos essenciais preenchidos ✓';
  } else {
    btn.disabled = true;
    counter.className = 'validation-counter';
    counter.querySelector('i').className = 'ti ti-alert-circle';
    counterText.textContent = `Falta${vazios > 1 ? 'm' : ''} ${vazios} campo${vazios > 1 ? 's' : ''} essencial${vazios > 1 ? 'is' : ''} para gerar`;
  }
}
document.getElementById('panel-form').addEventListener('input', validarFormulario);
document.getElementById('panel-form').addEventListener('change', validarFormulario);

/* ── FLAGS DE META AO VIVO ──────────────────────────── */
// Verde: todos os 4 >= 99 | Amarelo: todos >= 98 mas algum < 99 | Vermelho: algum < 98
function calcStatus(vals) {
  if (!vals.length) return null;
  if (vals.some(v => v < 98)) return 'err';
  if (vals.some(v => v < 99)) return 'warn';
  return 'ok';
}
function dotCls(v) {
  if (v === null || isNaN(v)) return '';
  if (v >= 99) return 'ok';
  if (v >= 98) return 'warn';
  return 'err';
}
function tagHTML(v) {
  if (v === null || isNaN(v)) return '';
  if (v >= 99) return '<span class="meta-tag ok"><i class="ti ti-circle-check"></i>Na meta</span>';
  if (v >= 98) return '<span class="meta-tag warn"><i class="ti ti-alert-triangle"></i>Atenção</span>';
  return '<span class="meta-tag err"><i class="ti ti-circle-x"></i>Abaixo da meta</span>';
}
function liveFlags() {
  ['oot', 'sla'].forEach(id => {
    const v = parseFloat(document.getElementById(id).value);
    document.getElementById('d-' + id).className = 'kpi-dot ' + (isNaN(v) ? '' : dotCls(v));
    document.getElementById('tag-' + id).innerHTML = isNaN(v) ? '' : tagHTML(v);
  });
  const vals = ['oot', 'sla', 'cot', 'dot']
    .map(id => parseFloat(document.getElementById(id).value))
    .filter(v => !isNaN(v));
  const el = document.getElementById('liveStatus');
  if (!vals.length) { el.style.display = 'none'; return; }
  const status = calcStatus(vals);
  const cls = status;
  const ico = status === 'ok' ? 'ti-circle-check' : status === 'warn' ? 'ti-alert-triangle' : 'ti-circle-x';
  const msg = status === 'ok'
    ? 'Todos os indicadores dentro do objetivo (≥ 99%)'
    : status === 'warn'
    ? 'Indicador(es) entre 98% e 99% — atenção'
    : 'Indicador(es) abaixo de 98% — fora da meta';
  el.style.display = 'flex';
  el.className = 'status-bar ' + cls;
  el.innerHTML = `<i class="ti ${ico}"></i>${msg}`;
}
['oot', 'sla', 'cot', 'dot'].forEach(id => document.getElementById(id).addEventListener('input', liveFlags));

/* ── TAXA DE SHIPAGEM ───────────────────────────────── */
function calcShip() {
  const tot  = parseFloat(document.getElementById('totalPedidos').value);
  const ship = parseFloat(document.getElementById('totalShippados').value);
  const el = document.getElementById('taxaShip');
  if (tot > 0 && ship >= 0) {
    const p = (ship / tot * 100);
    el.textContent = p.toFixed(2) + '%';
    el.style.color = p >= metaAtual ? 'var(--ok)' : p >= metaAtual - 1 ? 'var(--warn)' : 'var(--err)';
  } else {
    el.textContent = '—';
    el.style.color = '';
  }
}
['totalPedidos', 'totalShippados'].forEach(id => document.getElementById(id).addEventListener('input', calcShip));

/* ── BOTÕES DE INCREMENTO RÁPIDO ────────────────────── */
function setQuickVal(id, val) {
  const el = document.getElementById(id);
  el.value = val;
  el.dispatchEvent(new Event('input', { bubbles: true }));
}
function addQuickVal(id, amount) {
  const el = document.getElementById(id);
  const atual = parseInt(el.value, 10) || 0;
  el.value = atual + amount;
  el.dispatchEvent(new Event('input', { bubbles: true }));
}
document.querySelectorAll('.btn-quick-inc').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.target;
    if (btn.dataset.val !== undefined) setQuickVal(target, Number(btn.dataset.val));
    else addQuickVal(target, Number(btn.dataset.add));
  });
});

/* ── CSV PARA SPP REAL ──────────────────────────────── */
function limparNumeroCsv(valor) {
  if (!valor) return 0;
  valor = valor.replace(/"/g, '').trim();
  if (valor === '') return 0;
  valor = valor.replace(/\./g, '');
  valor = valor.replace(',', '.');
  const numero = parseFloat(valor);
  return isNaN(numero) ? 0 : numero;
}

function processarCSVParaSPP(inputEl) {
  const arquivo = inputEl.files[0];
  if (!arquivo) return;

  const leitor = new FileReader();
  leitor.onload = function (e) {
    const textoCsv = e.target.result;
    const linhas = textoCsv.split('\n');
    if (linhas.length < 2) {
      showToast('Arquivo vazio ou sem dados suficientes.', 'error');
      inputEl.value = '';
      return;
    }

    const cabecalho = linhas[0].split(';');
    let indicePacotes = -1, indicePosicoes = -1;
    for (let i = 0; i < cabecalho.length; i++) {
      const nomeColuna = cabecalho[i].replace(/"/g, '').trim();
      if (nomeColuna === 'QTDE PACOTES') indicePacotes = i;
      if (nomeColuna === 'QTDE DE POSIÇÕES') indicePosicoes = i;
    }

    if (indicePacotes === -1 || indicePosicoes === -1) {
      showToast('Colunas "QTDE PACOTES" ou "QTDE DE POSIÇÕES" não encontradas no CSV.', 'error');
      inputEl.value = '';
      return;
    }

    let somaPacotes = 0, somaPosicoes = 0;
    for (let i = 1; i < linhas.length; i++) {
      const linha = linhas[i].trim();
      if (!linha) continue;
      const colunas = linha.split(';');
      if (colunas.length > Math.max(indicePacotes, indicePosicoes)) {
        somaPacotes  += limparNumeroCsv(colunas[indicePacotes]);
        somaPosicoes += limparNumeroCsv(colunas[indicePosicoes]);
      }
    }

    let media = somaPosicoes > 0 ? somaPacotes / somaPosicoes : 0;
    const mediaFormatada = media.toFixed(2);

    const sppRealEl = document.getElementById('sppReal');
    sppRealEl.value = mediaFormatada;
    sppRealEl.dispatchEvent(new Event('input', { bubbles: true }));

    const resultEl = document.getElementById('sppCsvResult');
    resultEl.innerHTML = `
      <div class="csv-detail">
        <span>📦 Pacotes: <strong>${somaPacotes.toLocaleString('pt-BR')}</strong></span>
        <span>📍 Posições: <strong>${somaPosicoes.toLocaleString('pt-BR')}</strong></span>
      </div>
      <div style="margin-top:4px;">📊 Média: <strong>${media.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong> pacotes/posição → preenchido como SPP Real</div>`;
    resultEl.style.display = 'block';

    showToast(`SPP Real preenchido automaticamente: ${mediaFormatada}%`, 'success');
    inputEl.value = '';
  };
  leitor.readAsText(arquivo, 'utf-8');
}
document.getElementById('btn-csv-spp').addEventListener('click', () => document.getElementById('csvSppFile').click());
document.getElementById('csvSppFile').addEventListener('change', (e) => processarCSVParaSPP(e.target));

/* ── GERAR RELATÓRIO E SALVAR ───────────────────────── */
function gerarRelatorio() {
  const data = new Date().toLocaleDateString('pt-BR');
  const etd = document.getElementById('etd').value;
  const oot = document.getElementById('oot').value;
  const sla = document.getElementById('sla').value;
  const cot = document.getElementById('cot').value;
  const dot = document.getElementById('dot').value;
  const allVals = [oot, sla, cot, dot].map(Number).filter(v => !isNaN(v) && v > 0);
  const status = calcStatus(allVals);
  const si = status === 'ok' ? '✅✅✅' : status === 'warn' ? '⚠️⚠️⚠️' : '❌❌❌';

  const v = id => document.getElementById(id).value;

  const txt =
    `${si}🏁\n${data}\nETD de :${etd}:00\n\n` +
    `Total de Pedidos: ${v('totalPedidos')}\n` +
    `Total de Pedidos Shippados: ${v('totalShippados')}\n\n` +
    `Total de Ruptura: ${v('ruptura')}\n\n` +
    `Pedidos em Packed: ${v('packedDesvio')}\nMotivo: Desvio Operacional\n\n` +
    `Pedidos em Packed: ${v('packedAtraso')}\nMotivo: Atraso Fluxo OUT\n\n` +
    `Pedidos em Packed: ${v('packedTravado')}\nMotivo: Travado\n\n` +
    `Pedidos em RTP: ${v('rtpRtp')}\nMotivo: Atraso de Fluxo OUT\n\n` +
    `Pedidos em RTW: ${v('rtwReplen')}\nMotivo: Replen\n\n` +
    `Pedidos em HU In: ${v('huIn')}\n` +
    `Pedidos em HU Closed: ${v('huClosed')}\n\n` +
    `🚚 Single Dispatch: 100,00%\n` +
    `SPP PROJETADO: ${v('sppProj')}%\n` +
    `SPP REAL: ${v('sppReal')}%\n` +
    `📏 LITRAGEM: ${v('litragem')}\n` +
    `⌚ CPT: 100,00%\n` +
    `⏳ COT: ${cot}%\n⏳ SLA/WMS: ${sla}%\n⏰ DOT: ${dot}%\n🕰 OOT: ${oot}%\n` +
    `🔑 LAST KEY 🚚: ${v('lastKey')}`;

  document.getElementById('output').value = txt;
  document.getElementById('outWrap').style.display = 'block';
  setTimeout(() => document.getElementById('outWrap').scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);

  const rec = {
    id: Date.now().toString(),
    data, etd,
    oot: parseFloat(oot) || null, sla: parseFloat(sla) || null,
    cot: parseFloat(cot) || null, dot: parseFloat(dot) || null,
    totalPedidos: v('totalPedidos'), totalShippados: v('totalShippados'),
    ruptura: v('ruptura'), sppProj: v('sppProj'), sppReal: v('sppReal'),
    litragem: v('litragem'), lastKey: v('lastKey'), txt,
    isoLocal: new Date().toISOString(),
  };

  reportsCache.unshift(rec);
  salvarDados();
  showToast('Relatório gerado e salvo!', 'success');
  validarFormulario();
}
document.getElementById('btnGerar').addEventListener('click', gerarRelatorio);

function copiar() {
  const ta = document.getElementById('output');
  navigator.clipboard.writeText(ta.value).catch(() => { ta.select(); document.execCommand('copy'); });
  showToast('Texto copiado para a área de transferência!', 'success');
}
document.getElementById('btn-copiar').addEventListener('click', copiar);

function enviarWA() {
  showToast('Redirecionando para o WhatsApp...', 'info');
  window.open('https://wa.me/?text=' + encodeURIComponent(document.getElementById('output').value), '_blank');
}
document.getElementById('btn-whatsapp').addEventListener('click', enviarWA);

/* ── LIMPAR CAMPOS ──────────────────────────────────── */
function limparCampos() {
  abrirModalConfirmacao('Limpar Formulário', 'Tem certeza que deseja limpar todos os campos preenchidos?', () => {
    REQUIRED_FIELDS.concat([
      'ruptura','packedDesvio','packedAtraso','packedTravado','rtpRtp','rtwReplen',
      'huIn','huClosed','sppProj','sppReal','litragem','cot','dot','lastKey'
    ]).forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = '';
    });
    document.getElementById('etd').selectedIndex = 0;
    document.getElementById('sppCsvResult').style.display = 'none';
    document.getElementById('outWrap').style.display = 'none';
    const taxaEl = document.getElementById('taxaShip');
    taxaEl.textContent = '—';
    taxaEl.style.color = '';
    ['oot', 'sla'].forEach(id => {
      document.getElementById('d-' + id).className = 'kpi-dot';
      document.getElementById('tag-' + id).innerHTML = '';
    });
    document.getElementById('liveStatus').style.display = 'none';
    validarFormulario();
    showToast('Todos os campos foram limpos!', 'info');
  });
}
document.getElementById('btn-limpar-campos').addEventListener('click', limparCampos);

/* ── HISTÓRICO ──────────────────────────────────────── */
function pillCls(v) { return v === null ? 'pill-gray' : v >= metaAtual ? 'pill-ok' : v >= metaAtual - 1 ? 'pill-warn' : 'pill-err'; }

function renderHist() {
  const arr = reportsCache;
  document.getElementById('histCount').textContent =
    arr.length + ' relatório' + (arr.length !== 1 ? 's' : '') + ' salvo' + (arr.length !== 1 ? 's' : '');
  const el = document.getElementById('histList');
  if (!arr.length) {
    el.innerHTML = '<div class="empty-state"><i class="ti ti-inbox"></i><strong>Nenhum relatório salvo</strong><p>Gere o primeiro relatório na aba "Novo relatório".</p></div>';
    return;
  }
  el.innerHTML = arr.map(r => {
    const kpis = [{ k: 'OOT', v: r.oot }, { k: 'SLA', v: r.sla }, { k: 'COT', v: r.cot }, { k: 'DOT', v: r.dot }]
      .map(x => `<span class="pill ${pillCls(x.v)}">${x.k} ${x.v !== null ? x.v.toFixed(1) + '%' : '—'}</span>`).join('');
    return `<div class="hist-item" data-id="${r.id}">
      <div class="hist-icon"><i class="ti ti-file-text"></i></div>
      <div style="flex:1;">
        <div class="hist-date">${r.data} · ETD ${r.etd}:00</div>
        <div class="hist-meta">Pedidos: ${r.totalPedidos || '—'} &nbsp;·&nbsp; Shippados: ${r.totalShippados || '—'} &nbsp;·&nbsp; Ruptura: ${r.ruptura || '0'}</div>
        <div class="hist-pills">${kpis}</div>
      </div>
      <button class="hist-del" data-id="${r.id}" aria-label="Deletar"><i class="ti ti-trash"></i></button>
    </div>`;
  }).join('');

  el.querySelectorAll('.hist-item').forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.closest('.hist-del')) return;
      verRel(item.dataset.id);
    });
  });
  el.querySelectorAll('.hist-del').forEach(btn => {
    btn.addEventListener('click', (e) => { e.stopPropagation(); deletar(btn.dataset.id); });
  });
}

function verRel(id) {
  const r = reportsCache.find(x => x.id === id);
  if (!r) return;
  document.getElementById('output').value = r.txt;
  document.getElementById('outWrap').style.display = 'block';
  switchTab('form');
  setTimeout(() => document.getElementById('outWrap').scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 120);
}

function deletar(id) {
  abrirModalConfirmacao('Remover Relatório', 'Tem certeza que deseja remover este relatório?', () => {
    reportsCache = reportsCache.filter(r => r.id !== id);
    salvarDados();
    renderHist();
    showToast('Relatório removido!', 'success');
  });
}

function limparTudo() {
  abrirModalConfirmacao('Limpar Histórico', 'ATENÇÃO: isso apagará TODOS os relatórios. Esta ação não pode ser desfeita. Deseja continuar?', () => {
    reportsCache = [];
    salvarDados();
    renderHist();
    showToast('Histórico limpo!', 'info');
  });
}
document.getElementById('btn-limpar-tudo').addEventListener('click', limparTudo);

/* ── EXPORTAÇÃO CSV ─────────────────────────────────── */
function dlCSV(content, fname) {
  const blob = new Blob(['﻿' + content], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = fname;
  a.click();
  URL.revokeObjectURL(url);
}
function obterDataAtualParaNome() {
  const d = new Date();
  return `${String(d.getDate()).padStart(2, '0')}-${String(d.getMonth() + 1).padStart(2, '0')}-${d.getFullYear()}`;
}
function exportarCSV() {
  const arr = reportsCache;
  if (!arr.length) { showToast('Não há relatórios para exportar.', 'warning'); return; }
  const cols = ['Data','ETD','Total Pedidos','Total Shippados','Ruptura','SPP Proj','SPP Real','Litragem','OOT','SLA','COT','DOT','Last Key'];
  const rows = arr.map(r => [r.data, r.etd, r.totalPedidos, r.totalShippados, r.ruptura, r.sppProj, r.sppReal, r.litragem, r.oot, r.sla, r.cot, r.dot, r.lastKey]
    .map(v => `"${(v ?? '').toString().replace(/"/g, '""')}"`).join(';'));
  dlCSV([cols.join(';'), ...rows].join('\n'), `relatorios_${obterDataAtualParaNome()}.csv`);
  showToast('CSV exportado!', 'success');
}
document.getElementById('btn-export-csv').addEventListener('click', exportarCSV);


/* ── INIT ───────────────────────────────────────────── */
validarFormulario();
