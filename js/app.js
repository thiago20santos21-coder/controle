/* ============================================================
   app.js — gerado automaticamente a partir do código-fonte React/JSX
   do Painel Despacho de Docas. Já vem compilado para JavaScript puro
   (sem JSX, sem necessidade de Babel no navegador), pronto para rodar
   direto como arquivo estático — inclusive no GitHub Pages.

   Não precisa editar este arquivo. Para configurar o Firebase, edite
   js/firebase-config.js. Para mudanças de funcionalidade, peça ao Claude.
   ============================================================ */
const { useState, useEffect, useRef } = React;
const Trash2 = ({ size = 24, className = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React.createElement("path", { d: "M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2M10 11v6M14 11v6" }));
const User = ({ size = 24, className = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React.createElement("path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }), /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "7", r: "4" }));
const Package = ({ size = 24, className = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React.createElement("path", { d: "m7.5 4.27 9 5.15M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" }), /* @__PURE__ */ React.createElement("path", { d: "m3.3 7 8.7 5 8.7-5M12 22V12" }));
const Box = ({ size = 24, className = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React.createElement("path", { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }), /* @__PURE__ */ React.createElement("polyline", { points: "3.27 6.96 12 12.01 20.73 6.96" }), /* @__PURE__ */ React.createElement("line", { x1: "12", y1: "22.08", x2: "12", y2: "12" }));
const MapPin = ({ size = 24, className = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React.createElement("path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" }), /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "10", r: "3" }));
const Zap = ({ size = 24, className = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React.createElement("polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2" }));
const LayoutGrid = ({ size = 24, className = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React.createElement("rect", { x: "3", y: "3", width: "7", height: "9", rx: "1" }), /* @__PURE__ */ React.createElement("rect", { x: "14", y: "3", width: "7", height: "5", rx: "1" }), /* @__PURE__ */ React.createElement("rect", { x: "14", y: "12", width: "7", height: "9", rx: "1" }), /* @__PURE__ */ React.createElement("rect", { x: "3", y: "16", width: "7", height: "5", rx: "1" }));
const Container = ({ size = 24, className = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React.createElement("path", { d: "M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9c-.5-.3-1.1-.3-1.6 0L7 6.2M22 7.7v8.8c0 .8-.5 1.5-1.1 1.8l-6.3 3.4c-.6.3-1.2.3-1.8 0L6.5 18.3c-.6-.3-1-1-1-1.8V7.7M22 7.7l-8.5 4.6c-.3.2-.7.2-1 0L4 7.7M12 12.3v9.3" }));
const Save = ({ size = 24, className = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React.createElement("path", { d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" }), /* @__PURE__ */ React.createElement("polyline", { points: "17 21 17 13 7 13 7 21" }), /* @__PURE__ */ React.createElement("polyline", { points: "7 3 7 8 15 8" }));
const Clipboard = ({ size = 24, className = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React.createElement("rect", { x: "8", y: "2", width: "8", height: "4", rx: "1", ry: "1" }), /* @__PURE__ */ React.createElement("path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }));
const LogOut = ({ size = 24, className = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React.createElement("path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }), /* @__PURE__ */ React.createElement("polyline", { points: "16 17 21 12 16 7" }), /* @__PURE__ */ React.createElement("line", { x1: "21", y1: "12", x2: "9", y2: "12" }));
const LogIn = ({ size = 24, className = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React.createElement("path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" }), /* @__PURE__ */ React.createElement("polyline", { points: "10 17 15 12 10 7" }), /* @__PURE__ */ React.createElement("line", { x1: "15", y1: "12", x2: "3", y2: "12" }));
const UserPlus = ({ size = 24, className = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React.createElement("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }), /* @__PURE__ */ React.createElement("circle", { cx: "9", cy: "7", r: "4" }), /* @__PURE__ */ React.createElement("line", { x1: "19", y1: "8", x2: "19", y2: "14" }), /* @__PURE__ */ React.createElement("line", { x1: "22", y1: "11", x2: "16", y2: "11" }));
const AlertTriangle = ({ size = 24, className = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React.createElement("path", { d: "m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" }), /* @__PURE__ */ React.createElement("path", { d: "M12 9v4" }), /* @__PURE__ */ React.createElement("path", { d: "M12 17h.01" }));
const CheckCircle = ({ size = 24, className = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React.createElement("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }), /* @__PURE__ */ React.createElement("polyline", { points: "22 4 12 14.01 9 11.01" }));
const Shield = ({ size = 24, className = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React.createElement("path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }));
const Mail = ({ size = 24, className = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React.createElement("rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }), /* @__PURE__ */ React.createElement("path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }));
const Lock = ({ size = 24, className = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React.createElement("rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2" }), /* @__PURE__ */ React.createElement("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" }));
const Eye = ({ size = 24, className = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React.createElement("path", { d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" }), /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "3" }));
const EyeOff = ({ size = 24, className = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React.createElement("path", { d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" }), /* @__PURE__ */ React.createElement("path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242" }), /* @__PURE__ */ React.createElement("path", { d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" }), /* @__PURE__ */ React.createElement("path", { d: "m2 2 20 20" }));
const History = ({ size = 24, className = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React.createElement("path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }), /* @__PURE__ */ React.createElement("path", { d: "M3 3v5h5" }), /* @__PURE__ */ React.createElement("path", { d: "M12 7v5l4 2" }));
const Loader2 = ({ size = 24, className = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React.createElement("path", { d: "M21 12a9 9 0 1 1-6.219-8.56" }));
const Pencil = ({ size = 24, className = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React.createElement("path", { d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .622.622l4.353-1.32a2 2 0 0 0 .83-.497z" }), /* @__PURE__ */ React.createElement("path", { d: "m15 5 4 4" }));
const XCircle = ({ size = 24, className = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "10" }), /* @__PURE__ */ React.createElement("path", { d: "m15 9-6 6" }), /* @__PURE__ */ React.createElement("path", { d: "m9 9 6 6" }));
const Plus = ({ size = 24, className = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React.createElement("path", { d: "M5 12h14" }), /* @__PURE__ */ React.createElement("path", { d: "M12 5v14" }));
const X = ({ size = 24, className = "" }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, /* @__PURE__ */ React.createElement("path", { d: "M18 6 6 18" }), /* @__PURE__ */ React.createElement("path", { d: "m6 6 12 12" }));
const firebaseConfigured = !!(firebaseConfig.apiKey && firebaseConfig.apiKey !== "SUA_API_KEY");
let auth = null;
let db = null;
if (firebaseConfigured) {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  auth = firebase.auth();
  db = firebase.firestore();
}
const COL_USERS = "controleCarga_users";
const COL_DOCAS = "controleCarga_docas";
const COL_CHAMADOS = "controleCarga_chamados";
const COL_ALTERACOES = "controleCarga_alteracoes";
function traduzirErroAuth(codigo) {
  const mapa = {
    "auth/email-already-in-use": "Este usu\xE1rio j\xE1 est\xE1 cadastrado.",
    "auth/invalid-email": "Usu\xE1rio inv\xE1lido. Use apenas letras, n\xFAmeros, ponto, h\xEDfen ou sublinhado.",
    "auth/weak-password": "A senha precisa ter pelo menos 6 caracteres.",
    "auth/user-not-found": "Usu\xE1rio ou senha incorretos.",
    "auth/wrong-password": "Usu\xE1rio ou senha incorretos.",
    "auth/invalid-credential": "Usu\xE1rio ou senha incorretos.",
    "auth/too-many-requests": "Muitas tentativas. Tente novamente em alguns minutos."
  };
  return mapa[codigo] || "Ocorreu um erro. Tente novamente.";
}
function formatarData(iso) {
  if (!iso) return "\u2014";
  try {
    return new Date(iso).toLocaleString("pt-BR", { day: "2-digit", month: "2-digit", year: "2-digit", hour: "2-digit", minute: "2-digit" });
  } catch (e) {
    return "\u2014";
  }
}
function badgeChamado(status) {
  if (status === "aberto") return { texto: "Aberto", dot: "bg-[var(--red)]", classe: "bg-[var(--red-bg)] text-[var(--red)] border-[var(--red)]/30" };
  if (status === "atendendo") return { texto: "Em Atendimento", dot: "bg-[var(--amber)]", classe: "bg-[var(--amber-bg)] text-[var(--amber)] border-[var(--amber)]/30" };
  if (status === "cancelado") return { texto: "Cancelado", dot: "bg-[var(--text-faint)]", classe: "bg-white/5 text-[var(--text-faint)] border-[var(--border)]" };
  return { texto: "Resolvido", dot: "bg-[var(--green)]", classe: "bg-[var(--green-bg)] text-[var(--green)] border-[var(--green)]/30" };
}
function chamadoEstaAtivo(c) {
  return c.status !== "resolvido" && c.status !== "cancelado";
}
const CAMPOS_DOCA = [
  { campo: "numeroDoca", label: "N\xFAmero da Doca", icon: MapPin, tipo: "text" },
  { campo: "posicoes", label: "Posi\xE7\xF5es", icon: LayoutGrid, tipo: "number" },
  { campo: "mangas", label: "Mangas", icon: Zap, tipo: "number" },
  { campo: "paletes", label: "Paletes", icon: Box, tipo: "number" },
  { campo: "gaylord", label: "Gaylord", icon: Container, tipo: "number" },
  { campo: "pacotes", label: "Total Pacotes", icon: Package, tipo: "number" },
  { campo: "canalizacao", label: "Canaliza\xE7\xE3o", icon: Zap, tipo: "text" }
];
function diffCampos(antigo, novo) {
  const mudancas = [];
  CAMPOS_DOCA.forEach(({ campo, label }) => {
    var _a, _b;
    const valorAntigo = ((_a = antigo[campo]) != null ? _a : "").toString();
    const valorNovo = ((_b = novo[campo]) != null ? _b : "").toString();
    if (valorAntigo !== valorNovo) {
      mudancas.push({ campo: label, valorAnterior: valorAntigo || "\u2014", valorNovo: valorNovo || "\u2014" });
    }
  });
  return mudancas;
}
function diffComResponsavel(antigo, novo) {
  var _a, _b;
  const mudancas = diffCampos(antigo, novo);
  const respAntigo = ((_a = antigo.donoNome) != null ? _a : "").toString();
  const respNovo = ((_b = novo.donoNome) != null ? _b : "").toString();
  if (respAntigo !== respNovo) {
    mudancas.push({ campo: "Respons\xE1vel", valorAnterior: respAntigo || "\u2014", valorNovo: respNovo || "\u2014" });
  }
  return mudancas;
}
async function registrarAlteracao(dados) {
  return;
}
function tocarAlertaEmergencia() {
  try {
    const AudioContextClasse = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClasse) return;
    const ctx = new AudioContextClasse();
    const tempos = [0, 0.22, 0.44];
    tempos.forEach((t) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "square";
      osc.frequency.value = 880;
      gain.gain.setValueAtTime(1e-4, ctx.currentTime + t);
      gain.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + t + 0.02);
      gain.gain.exponentialRampToValueAtTime(1e-4, ctx.currentTime + t + 0.18);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + t);
      osc.stop(ctx.currentTime + t + 0.2);
    });
    setTimeout(() => ctx.close(), 900);
  } catch (e) {
    console.error("Erro ao tocar alerta sonoro:", e);
  }
}
function ConfirmModal({ titulo, mensagem, textoConfirmar = "Confirmar", onConfirmar, onCancelar }) {
  return /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" }, /* @__PURE__ */ React.createElement("div", { className: "bg-[var(--surface)] rounded-2xl p-6 max-w-sm w-full shadow-2xl border border-[var(--border)]" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3 text-[var(--red)] mb-4" }, /* @__PURE__ */ React.createElement(AlertTriangle, { size: 26 }), /* @__PURE__ */ React.createElement("h3", { className: "font-display font-bold text-lg text-[var(--text)]" }, titulo)), /* @__PURE__ */ React.createElement("p", { className: "text-[var(--text-muted)] text-sm mb-6 leading-relaxed" }, mensagem), /* @__PURE__ */ React.createElement("div", { className: "flex gap-3" }, /* @__PURE__ */ React.createElement("button", { onClick: onCancelar, className: "flex-grow py-3 bg-[var(--surface-2)] text-[var(--text-muted)] font-semibold rounded-xl hover:bg-[var(--border)] transition-all text-sm border border-[var(--border)]" }, "Cancelar"), /* @__PURE__ */ React.createElement("button", { onClick: onConfirmar, className: "flex-grow py-3 bg-[var(--red)] text-white font-semibold rounded-xl hover:brightness-110 transition-all text-sm shadow-md" }, textoConfirmar))));
}
function EmergencyModal({ doca, onConfirm, onCancel, enviando }) {
  const motivos = ["Falta de paletes", "Equipamento com defeito", "Atraso na carga", "Risco de seguran\xE7a", "Outro"];
  const [motivo, setMotivo] = useState(motivos[0]);
  const [mensagem, setMensagem] = useState("");
  return /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4" }, /* @__PURE__ */ React.createElement("div", { className: "bg-[var(--surface)] rounded-2xl max-w-sm w-full shadow-2xl border border-[var(--red)]/40 overflow-hidden shake-once" }, /* @__PURE__ */ React.createElement("div", { className: "bg-gradient-to-r from-[var(--red)] to-[#A8201A] px-6 py-5 relative overflow-hidden" }, /* @__PURE__ */ React.createElement("div", { className: "absolute -right-4 -top-4 w-20 h-20 rounded-full bg-white/10 ping-ring" }), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3 relative" }, /* @__PURE__ */ React.createElement(AlertTriangle, { size: 30, className: "text-white shrink-0" }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-white/80 text-[11px] font-bold uppercase tracking-[0.2em]" }, "Chamado de Emerg\xEAncia"), /* @__PURE__ */ React.createElement("h3", { className: "font-display font-bold text-xl text-white leading-tight" }, "Doca ", doca.numeroDoca)))), /* @__PURE__ */ React.createElement("div", { className: "p-6" }, /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[var(--text-muted)] mb-4" }, "O chamado \xE9 enviado em tempo real para todos os administradores, com sinal sonoro de alerta."), /* @__PURE__ */ React.createElement("label", { className: "block text-xs font-bold text-[var(--text-faint)] uppercase tracking-wide mb-1" }, "Motivo"), /* @__PURE__ */ React.createElement("select", { className: "w-full bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text)] rounded-lg p-2.5 mb-3 outline-none focus:border-[var(--gold)]", value: motivo, onChange: (e) => setMotivo(e.target.value) }, motivos.map((m) => /* @__PURE__ */ React.createElement("option", { key: m, value: m }, m))), /* @__PURE__ */ React.createElement("label", { className: "block text-xs font-bold text-[var(--text-faint)] uppercase tracking-wide mb-1" }, "Detalhes (opcional)"), /* @__PURE__ */ React.createElement(
    "textarea",
    {
      className: "w-full bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text)] rounded-lg p-2.5 mb-5 outline-none focus:border-[var(--gold)] text-sm",
      rows: "3",
      placeholder: "Descreva rapidamente o que est\xE1 acontecendo...",
      value: mensagem,
      onChange: (e) => setMensagem(e.target.value)
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "flex gap-3" }, /* @__PURE__ */ React.createElement("button", { onClick: onCancel, disabled: enviando, className: "flex-grow py-3 bg-[var(--surface-2)] text-[var(--text-muted)] font-semibold rounded-xl hover:bg-[var(--border)] text-sm disabled:opacity-50 border border-[var(--border)]" }, "Cancelar"), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => onConfirm(motivo, mensagem),
      disabled: enviando,
      className: "flex-grow py-3 bg-[var(--red)] text-white font-bold rounded-xl hover:brightness-110 text-sm shadow-lg disabled:opacity-50 flex items-center justify-center gap-2"
    },
    enviando ? /* @__PURE__ */ React.createElement(Loader2, { size: 18, className: "animate-spin" }) : /* @__PURE__ */ React.createElement(AlertTriangle, { size: 18 }),
    enviando ? "Enviando..." : "Abrir Chamado Agora"
  )))));
}
function ReportModal({ titulo, conteudo, onFechar }) {
  const [copiado, setCopiado] = useState(false);
  return /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" }, /* @__PURE__ */ React.createElement("div", { className: "bg-[var(--surface)] rounded-2xl p-6 max-w-sm w-full border border-[var(--border)] shadow-2xl" }, /* @__PURE__ */ React.createElement("h2", { className: "font-display font-bold text-lg text-[var(--text)] mb-4" }, titulo), /* @__PURE__ */ React.createElement("textarea", { readOnly: true, className: "w-full h-64 bg-[var(--surface-2)] p-3 rounded-lg text-xs font-data mb-4 border border-[var(--border)] text-[var(--text-muted)]", value: conteudo }), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => {
        navigator.clipboard.writeText(conteudo);
        setCopiado(true);
        setTimeout(() => setCopiado(false), 2e3);
      },
      className: `w-full py-3 rounded-xl font-bold text-white transition-all ${copiado ? "bg-[var(--green)]" : "bg-[var(--gold)] text-[#1A1404]"}`
    },
    copiado ? "Copiado!" : "Copiar Relat\xF3rio"
  ), /* @__PURE__ */ React.createElement("button", { onClick: onFechar, className: "w-full mt-2 py-2 text-[var(--text-faint)] font-semibold hover:text-[var(--text)]" }, "Fechar")));
}
function DocaDetailModal({ doca, chamadoAtivo, ehAdmin, onClose, onEditar, onExcluir, onEmergencia }) {
  const linhasPadrao = [
    { label: "Posi\xE7\xF5es", valor: doca.posicoes || "0" },
    { label: "Mangas", valor: doca.mangas || "0" },
    { label: "Paletes", valor: doca.paletes || "0" },
    { label: "Gaylord", valor: doca.gaylord || "0" },
    { label: "Total Pacotes", valor: doca.pacotes || "0" }
  ];
  const linhaPacotes = { label: "Total Pacotes", valor: doca.pacotes || "0" };
  const linhas = ehAdmin ? [linhaPacotes, ...linhasPadrao.slice(0, 4)] : linhasPadrao;
  return /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" }, /* @__PURE__ */ React.createElement("div", { className: "bg-[var(--surface)] rounded-2xl max-w-sm w-full border border-[var(--border)] shadow-2xl overflow-hidden" }, /* @__PURE__ */ React.createElement("div", { className: "bg-[var(--bg-elevated)] px-6 py-5 border-b border-[var(--border)] flex items-start justify-between" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text-faint)] mb-1" }, "Doca"), /* @__PURE__ */ React.createElement("span", { className: "font-data inline-flex items-center px-3 py-1 rounded-md bg-[var(--surface-2)] border border-[var(--border)] text-[var(--gold-soft)] text-lg tracking-wider" }, doca.numeroDoca)), /* @__PURE__ */ React.createElement("button", { onClick: onClose, className: "p-1.5 text-[var(--text-faint)] hover:text-[var(--text)] hover:bg-white/5 rounded-lg" }, /* @__PURE__ */ React.createElement(X, { size: 20 }))), /* @__PURE__ */ React.createElement("div", { className: "p-6" }, chamadoAtivo && /* @__PURE__ */ React.createElement("div", { className: `mb-4 px-3 py-2 rounded-lg border text-xs font-bold flex items-center gap-2 ${badgeChamado(chamadoAtivo.status).classe}` }, /* @__PURE__ */ React.createElement(AlertTriangle, { size: 14 }), " Chamado ", badgeChamado(chamadoAtivo.status).texto.toLowerCase(), ": ", chamadoAtivo.motivo), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-3 mb-5" }, linhas.map((l) => /* @__PURE__ */ React.createElement("div", { key: l.label, className: "bg-[var(--surface-2)] border border-[var(--border-soft)] rounded-lg p-3" }, /* @__PURE__ */ React.createElement("p", { className: "text-[10px] font-bold uppercase tracking-wide text-[var(--text-faint)] mb-1" }, l.label), /* @__PURE__ */ React.createElement("p", { className: "font-data text-[var(--text)] text-base" }, l.valor)))), /* @__PURE__ */ React.createElement("div", { className: "space-y-1.5 text-sm border-t border-[var(--border-soft)] pt-4 mb-6" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between" }, /* @__PURE__ */ React.createElement("span", { className: "text-[var(--text-faint)]" }, "Respons\xE1vel"), /* @__PURE__ */ React.createElement("span", { className: "text-[var(--text)] font-semibold" }, doca.donoNome || "\u2014")), /* @__PURE__ */ React.createElement("div", { className: "flex justify-between" }, /* @__PURE__ */ React.createElement("span", { className: "text-[var(--text-faint)]" }, "Canaliza\xE7\xE3o"), /* @__PURE__ */ React.createElement("span", { className: "text-[var(--text)] font-semibold" }, doca.canalizacao || "\u2014")), /* @__PURE__ */ React.createElement("div", { className: "flex justify-between" }, /* @__PURE__ */ React.createElement("span", { className: "text-[var(--text-faint)]" }, "Cadastrada em"), /* @__PURE__ */ React.createElement("span", { className: "text-[var(--text-muted)] font-data text-xs" }, formatarData(doca.criadoEm))), /* @__PURE__ */ React.createElement("div", { className: "flex justify-between" }, /* @__PURE__ */ React.createElement("span", { className: "text-[var(--text-faint)]" }, "\xDAltima atualiza\xE7\xE3o"), /* @__PURE__ */ React.createElement("span", { className: "text-[var(--text-muted)] font-data text-xs" }, formatarData(doca.atualizadoEm)))), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("button", { onClick: onEditar, className: "w-full py-3 bg-[var(--gold)] text-[#1A1404] rounded-lg font-bold text-base flex items-center justify-center gap-2 hover:brightness-110 transition-all" }, /* @__PURE__ */ React.createElement(Pencil, { size: 18 }), " Editar Doca"), !ehAdmin && onEmergencia && /* @__PURE__ */ React.createElement("button", { onClick: onEmergencia, className: "w-full py-3 bg-[var(--red)] text-white rounded-lg font-bold text-base flex items-center justify-center gap-2 hover:brightness-110 emergency-pulse" }, /* @__PURE__ */ React.createElement(AlertTriangle, { size: 18 }), " Abrir Chamado"), ehAdmin && onExcluir && /* @__PURE__ */ React.createElement("button", { onClick: onExcluir, className: "w-full py-2.5 bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text-faint)] rounded-lg font-semibold text-sm flex items-center justify-center gap-1.5 hover:text-[var(--red)] hover:border-[var(--red)]/40" }, /* @__PURE__ */ React.createElement(Trash2, { size: 16 }), " Excluir doca")))));
}
function usuarioParaEmail(usuario) {
  const limpo = usuario.trim().toLowerCase().replace(/[^a-z0-9._-]/g, "");
  return `${limpo}@despacho.local`;
}
function AuthScreen() {
  const [modo, setModo] = useState("login");
  const [nome, setNome] = useState("");
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);
  const alternarModo = (novoModo) => {
    setModo(novoModo);
    setErro("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro("");
    if (!usuario.trim() || !senha) {
      setErro("Preencha usu\xE1rio e senha.");
      return;
    }
    if (modo === "cadastro" && !nome.trim()) {
      setErro("Informe seu nome.");
      return;
    }
    setCarregando(true);
    try {
      const emailSintetico = usuarioParaEmail(usuario);
      if (modo === "cadastro") {
        const credencial = await auth.createUserWithEmailAndPassword(emailSintetico, senha);
        await db.collection(COL_USERS).doc(credencial.user.uid).set({
          nome: nome.trim(),
          usuario: usuario.trim().toLowerCase(),
          role: "user",
          criadoEm: (/* @__PURE__ */ new Date()).toISOString()
        });
      } else {
        await auth.signInWithEmailAndPassword(emailSintetico, senha);
      }
    } catch (err) {
      console.error(err);
      setErro(traduzirErroAuth(err.code));
    } finally {
      setCarregando(false);
    }
  };
  return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-[var(--bg)] flex items-center justify-center p-4" }, /* @__PURE__ */ React.createElement("div", { className: "w-full max-w-sm" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col items-center mb-8" }, /* @__PURE__ */ React.createElement("div", { className: "bg-[var(--surface)] border border-[var(--border)] p-4 rounded-2xl mb-4 shadow-lg" }, /* @__PURE__ */ React.createElement(Container, { size: 30, className: "text-[var(--gold)]" })), /* @__PURE__ */ React.createElement("h1", { className: "font-display text-3xl font-bold text-[var(--text)] tracking-wide" }, "DESPACHO"), /* @__PURE__ */ React.createElement("p", { className: "text-[var(--text-faint)] text-xs font-bold uppercase tracking-[0.25em] mt-1" }, "Controle de Carga \xB7 Docas")), /* @__PURE__ */ React.createElement("div", { className: "bg-[var(--surface)] rounded-2xl shadow-2xl border border-[var(--border)] p-6" }, /* @__PURE__ */ React.createElement("div", { className: "flex mb-6 bg-[var(--bg-elevated)] rounded-xl p-1 border border-[var(--border-soft)]" }, /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => alternarModo("login"), className: `flex-1 py-2 rounded-lg font-semibold text-sm transition-all ${modo === "login" ? "bg-[var(--gold)] text-[#1A1404]" : "text-[var(--text-faint)]"}` }, "Entrar"), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => alternarModo("cadastro"), className: `flex-1 py-2 rounded-lg font-semibold text-sm transition-all ${modo === "cadastro" ? "bg-[var(--gold)] text-[#1A1404]" : "text-[var(--text-faint)]"}` }, "Cadastrar")), /* @__PURE__ */ React.createElement("form", { onSubmit: handleSubmit, className: "space-y-4" }, modo === "cadastro" && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "flex items-center gap-2 text-xs font-bold text-[var(--text-faint)] uppercase tracking-wide mb-1" }, /* @__PURE__ */ React.createElement(User, { size: 14 }), " Nome"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      className: "w-full bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text)] rounded-lg p-3 outline-none focus:border-[var(--gold)]",
      placeholder: "Seu nome completo",
      value: nome,
      onChange: (e) => setNome(e.target.value)
    }
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "flex items-center gap-2 text-xs font-bold text-[var(--text-faint)] uppercase tracking-wide mb-1" }, /* @__PURE__ */ React.createElement(User, { size: 14 }), " Usu\xE1rio"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      autoCapitalize: "none",
      autoCorrect: "off",
      spellCheck: false,
      className: "w-full bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text)] rounded-lg p-3 outline-none focus:border-[var(--gold)]",
      placeholder: "seu.usuario",
      value: usuario,
      onChange: (e) => setUsuario(e.target.value)
    }
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "flex items-center gap-2 text-xs font-bold text-[var(--text-faint)] uppercase tracking-wide mb-1" }, /* @__PURE__ */ React.createElement(Lock, { size: 14 }), " Senha"), /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: mostrarSenha ? "text" : "password",
      className: "w-full bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text)] rounded-lg p-3 pr-10 outline-none focus:border-[var(--gold)]",
      placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
      value: senha,
      onChange: (e) => setSenha(e.target.value)
    }
  ), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => setMostrarSenha(!mostrarSenha), className: "absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-faint)]" }, mostrarSenha ? /* @__PURE__ */ React.createElement(EyeOff, { size: 18 }) : /* @__PURE__ */ React.createElement(Eye, { size: 18 })))), erro && /* @__PURE__ */ React.createElement("p", { className: "text-[var(--red)] text-sm font-semibold bg-[var(--red-bg)] border border-[var(--red)]/30 rounded-lg p-2" }, erro), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "submit",
      disabled: carregando,
      className: "w-full py-3 bg-[var(--gold)] text-[#1A1404] rounded-lg font-bold flex items-center justify-center gap-2 hover:brightness-110 transition-all disabled:opacity-60"
    },
    carregando ? /* @__PURE__ */ React.createElement(Loader2, { size: 20, className: "animate-spin" }) : modo === "login" ? /* @__PURE__ */ React.createElement(LogIn, { size: 20 }) : /* @__PURE__ */ React.createElement(UserPlus, { size: 20 }),
    carregando ? "Aguarde..." : modo === "login" ? "Entrar" : "Criar Conta"
  ))), /* @__PURE__ */ React.createElement("p", { className: "text-center text-xs text-[var(--text-faint)] mt-5" }, "Acesso restrito a operadores autorizados.")));
}
function UserPanel({ user, profile, onLogout }) {
  const docaVazia = { numeroDoca: "", posicoes: "", mangas: "", paletes: "", gaylord: "", pacotes: "", canalizacao: "" };
  const [docas, setDocas] = useState([]);
  const [chamados, setChamados] = useState([]);
  const [activeDoca, setActiveDoca] = useState(docaVazia);
  const [editingId, setEditingId] = useState(null);
  const [originalDoca, setOriginalDoca] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [docaToDelete, setDocaToDelete] = useState(null);
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);
  const [docaEmergencia, setDocaEmergencia] = useState(null);
  const [enviandoChamado, setEnviandoChamado] = useState(false);
  const [aviso, setAviso] = useState("");
  const [docaDetalhe, setDocaDetalhe] = useState(null);
  const [chamadoCancelando, setChamadoCancelando] = useState(null);
  const [salvando, setSalvando] = useState(false);
  const [salvoOk, setSalvoOk] = useState(false);
  const [confirmandoApagarTodas, setConfirmandoApagarTodas] = useState(false);
  const ultimoSalvoRef = useRef("");
  const editingIdRef = useRef(null);
  const salvandoRef = useRef(false);
  useEffect(() => {
    if (!db) return;
    const unsub = db.collection(COL_DOCAS).where("donoUid", "==", user.uid).onSnapshot(
      (snap) => {
        const dados = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        dados.sort((a, b) => (b.atualizadoEm || "").localeCompare(a.atualizadoEm || ""));
        setDocas(dados);
      },
      (e) => console.error(e)
    );
    return unsub;
  }, [user.uid]);
  useEffect(() => {
    if (!db) return;
    const unsub = db.collection(COL_CHAMADOS).where("donoUid", "==", user.uid).onSnapshot(
      (snap) => {
        const dados = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        dados.sort((a, b) => (b.criadoEm || "").localeCompare(a.criadoEm || ""));
        setChamados(dados);
      },
      (e) => console.error(e)
    );
    return unsub;
  }, [user.uid]);
  useEffect(() => {
    if (!docaDetalhe) return;
    const atualizado = docas.find((d) => d.id === docaDetalhe.id);
    if (atualizado) setDocaDetalhe(atualizado);
  }, [docas]);
  const chamadoAbertoDaDoca = (docaId) => chamados.find((c) => c.docaId === docaId && c.status !== "resolvido" && c.status !== "cancelado");
  const autoSalvar = async () => {
    if (!db || !activeDoca.numeroDoca.trim() || salvandoRef.current) return;
    const snapshot = JSON.stringify(activeDoca);
    if (snapshot === ultimoSalvoRef.current) return;
    salvandoRef.current = true;
    setSalvando(true);
    setSalvoOk(false);
    const agora = (/* @__PURE__ */ new Date()).toISOString();
    try {
      if (editingIdRef.current) {
        const mudancas = originalDoca ? diffCampos(originalDoca, activeDoca) : [];
        await db.collection(COL_DOCAS).doc(editingIdRef.current).update({ ...activeDoca, atualizadoEm: agora });
        for (const m of mudancas) {
          await registrarAlteracao({ docaId: editingIdRef.current, numeroDoca: activeDoca.numeroDoca, autorUid: user.uid, autorNome: profile.nome, tipo: "edicao", campo: m.campo, valorAnterior: m.valorAnterior, valorNovo: m.valorNovo });
        }
        setOriginalDoca({ ...activeDoca });
      } else {
        const ref = await db.collection(COL_DOCAS).add({ ...activeDoca, donoUid: user.uid, donoNome: profile.nome, criadoEm: agora, atualizadoEm: agora });
        editingIdRef.current = ref.id;
        setEditingId(ref.id);
        setOriginalDoca({ ...activeDoca });
        await registrarAlteracao({ docaId: ref.id, numeroDoca: activeDoca.numeroDoca, autorUid: user.uid, autorNome: profile.nome, tipo: "criacao", campo: "Doca", valorAnterior: "\u2014", valorNovo: "cadastrada" });
      }
      ultimoSalvoRef.current = snapshot;
      setSalvoOk(true);
    } catch (e) {
      console.error("Erro ao salvar doca:", e);
    } finally {
      salvandoRef.current = false;
      setSalvando(false);
    }
  };
  useEffect(() => {
    if (!activeDoca.numeroDoca.trim()) return;
    if (JSON.stringify(activeDoca) === ultimoSalvoRef.current) return;
    const t = setTimeout(() => {
      autoSalvar();
    }, 1e3);
    return () => clearTimeout(t);
  }, [activeDoca]);
  const handleStartEdit = (doca) => {
    setDocaDetalhe(null);
    const carregado = { numeroDoca: doca.numeroDoca || "", posicoes: doca.posicoes || "", mangas: doca.mangas || "", paletes: doca.paletes || "", gaylord: doca.gaylord || "", pacotes: doca.pacotes || "", canalizacao: doca.canalizacao || "" };
    setEditingId(doca.id);
    editingIdRef.current = doca.id;
    setOriginalDoca(carregado);
    setActiveDoca(carregado);
    ultimoSalvoRef.current = JSON.stringify(carregado);
    setSalvoOk(false);
  };
  const handleCancelEdit = () => {
    setEditingId(null);
    editingIdRef.current = null;
    setOriginalDoca(null);
    setActiveDoca(docaVazia);
    ultimoSalvoRef.current = "";
    setSalvoOk(false);
  };
  const handleApagarTodasMinhas = async () => {
    try {
      await Promise.all(docas.map(async (d) => {
        await db.collection(COL_DOCAS).doc(d.id).delete();
        await registrarAlteracao({ docaId: d.id, numeroDoca: d.numeroDoca, autorUid: user.uid, autorNome: profile.nome, tipo: "exclusao", campo: "Doca", valorAnterior: "cadastrada", valorNovo: "exclu\xEDda" });
      }));
    } catch (e) {
      console.error(e);
    }
    handleCancelEdit();
    setConfirmandoApagarTodas(false);
  };
  const handleDeleteClick = (doca) => {
    setDocaDetalhe(null);
    setDocaToDelete(doca);
    setShowDeleteModal(true);
  };
  const confirmDelete = async () => {
    if (!docaToDelete) return;
    try {
      await db.collection(COL_DOCAS).doc(docaToDelete.id).delete();
      await registrarAlteracao({
        docaId: docaToDelete.id,
        numeroDoca: docaToDelete.numeroDoca,
        autorUid: user.uid,
        autorNome: profile.nome,
        tipo: "exclusao",
        campo: "Doca",
        valorAnterior: "cadastrada",
        valorNovo: "exclu\xEDda"
      });
    } catch (e) {
      console.error(e);
    }
    if (editingId === docaToDelete.id) handleCancelEdit();
    setShowDeleteModal(false);
    setDocaToDelete(null);
  };
  const handleAbrirChamado = (doca) => {
    setDocaDetalhe(null);
    setDocaEmergencia(doca);
    setShowEmergencyModal(true);
  };
  const confirmarChamado = async (motivo, mensagem) => {
    if (!docaEmergencia) return;
    setEnviandoChamado(true);
    try {
      await db.collection(COL_CHAMADOS).add({
        docaId: docaEmergencia.id,
        numeroDoca: docaEmergencia.numeroDoca,
        donoUid: user.uid,
        donoNome: profile.nome,
        motivo,
        mensagem,
        status: "aberto",
        criadoEm: (/* @__PURE__ */ new Date()).toISOString()
      });
      tocarAlertaEmergencia();
      setShowEmergencyModal(false);
      setDocaEmergencia(null);
      setAviso("Chamado aberto! Os administradores foram notificados.");
      setTimeout(() => setAviso(""), 4e3);
    } catch (e) {
      console.error(e);
      alert("N\xE3o foi poss\xEDvel abrir o chamado. Tente novamente.");
    } finally {
      setEnviandoChamado(false);
    }
  };
  const handleCancelarChamado = async () => {
    if (!chamadoCancelando) return;
    try {
      await db.collection(COL_CHAMADOS).doc(chamadoCancelando.id).update({
        status: "cancelado",
        canceladoEm: (/* @__PURE__ */ new Date()).toISOString()
      });
      await registrarAlteracao({
        docaId: chamadoCancelando.docaId,
        numeroDoca: chamadoCancelando.numeroDoca,
        autorUid: user.uid,
        autorNome: profile.nome,
        tipo: "chamado_cancelado",
        campo: "Chamado",
        valorAnterior: chamadoCancelando.status,
        valorNovo: "cancelado"
      });
    } catch (e) {
      console.error(e);
    }
    setChamadoCancelando(null);
  };
  return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-[var(--bg)] pb-12 font-sans" }, /* @__PURE__ */ React.createElement("header", { className: "bg-[var(--bg-elevated)] border-b border-[var(--border)] px-4 py-3 sticky top-0 z-10" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-2xl mx-auto flex items-center justify-between" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2.5" }, /* @__PURE__ */ React.createElement("div", { className: "bg-[var(--surface)] border border-[var(--border)] p-1.5 rounded-lg" }, /* @__PURE__ */ React.createElement(Container, { className: "w-5 h-5 text-[var(--gold)]" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", { className: "text-[var(--text)] font-display text-base font-bold tracking-wide leading-none" }, "DESPACHO"), /* @__PURE__ */ React.createElement("p", { className: "text-[var(--text-faint)] text-[10px] font-bold uppercase tracking-wider mt-0.5" }, "Opera\xE7\xE3o de Docas"))), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ React.createElement("span", { className: "text-[var(--text-muted)] text-sm font-semibold hidden sm:inline" }, profile.nome), /* @__PURE__ */ React.createElement("button", { onClick: onLogout, className: "p-2 bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--gold)]/50 rounded-lg text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors", title: "Sair" }, /* @__PURE__ */ React.createElement(LogOut, { size: 17 }))))), /* @__PURE__ */ React.createElement("main", { className: "max-w-2xl mx-auto px-4 pt-6" }, aviso && /* @__PURE__ */ React.createElement("div", { className: "bg-[var(--green-bg)] border border-[var(--green)]/30 text-[var(--green)] font-semibold text-sm rounded-lg p-3 mb-4 flex items-center gap-2" }, /* @__PURE__ */ React.createElement(CheckCircle, { size: 18 }), " ", aviso), /* @__PURE__ */ React.createElement("div", { className: "bg-[var(--surface)] p-4 rounded-xl shadow-sm border border-[var(--border)] mb-6" }, /* @__PURE__ */ React.createElement("h2", { className: "text-base font-display font-bold text-[var(--text)] mb-4 flex items-center gap-2" }, /* @__PURE__ */ React.createElement(Box, { size: 17, className: "text-[var(--gold)]" }), " ", editingId ? "Editar Doca" : "Cadastrar Nova Doca"), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-3 mb-4" }, CAMPOS_DOCA.map((item) => /* @__PURE__ */ React.createElement("div", { key: item.campo }, /* @__PURE__ */ React.createElement("label", { className: "flex items-center gap-1 text-[11px] font-bold text-[var(--text-faint)] uppercase tracking-wide mb-1" }, /* @__PURE__ */ React.createElement(item.icon, { size: 13, className: "text-[var(--gold)]/80" }), " ", item.label), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: item.tipo,
      className: "w-full bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text)] rounded-lg p-2 outline-none focus:border-[var(--gold)]",
      value: activeDoca[item.campo],
      onChange: (e) => setActiveDoca({ ...activeDoca, [item.campo]: e.target.value })
    }
  )))), /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between gap-2" }, /* @__PURE__ */ React.createElement("span", { className: "text-xs font-semibold flex items-center gap-1.5 " + (salvando ? "text-[var(--amber)]" : salvoOk ? "text-[var(--green)]" : "text-[var(--text-faint)]") }, salvando ? /* @__PURE__ */ React.createElement(Loader2, { size: 14, className: "animate-spin" }) : salvoOk ? /* @__PURE__ */ React.createElement(CheckCircle, { size: 14 }) : null, salvando ? "Salvando\u2026" : salvoOk ? "Salvo automaticamente" : activeDoca.numeroDoca ? "As altera\xE7\xF5es salvam sozinhas" : "Preencha o n\xFAmero da doca"), /* @__PURE__ */ React.createElement("button", { onClick: handleCancelEdit, className: "py-2 px-4 bg-[var(--gold)] text-[#1A1404] rounded-lg font-bold text-sm flex items-center justify-center gap-1.5 hover:brightness-110" }, /* @__PURE__ */ React.createElement(XCircle, { size: 16 }), " Sair"))), /* @__PURE__ */ React.createElement("div", { className: "space-y-3 mb-6" }, /* @__PURE__ */ React.createElement("h2", { className: "text-lg font-display font-bold text-[var(--text)]" }, "Minhas Docas"), docas.length === 0 && /* @__PURE__ */ React.createElement("p", { className: "text-[var(--text-faint)] text-center py-4 italic text-sm" }, "Nenhuma doca cadastrada."), docas.map((h) => {
    const chamadoAtivo = chamadoAbertoDaDoca(h.id);
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        key: h.id,
        className: `bg-[var(--surface)] p-4 rounded-xl shadow-sm border-l-4 transition-all ${editingId === h.id ? "border-l-[var(--gold)] bg-[var(--gold)]/[0.04]" : chamadoAtivo ? "border-l-[var(--red)]" : "border-l-[var(--border)]"} border-y border-r border-[var(--border-soft)]`
      },
      /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-start gap-2" }, /* @__PURE__ */ React.createElement("button", { onClick: () => setDocaDetalhe(h), className: "text-left cursor-pointer flex-grow" }, /* @__PURE__ */ React.createElement("p", { className: "font-semibold text-[var(--text)] flex items-center gap-2" }, /* @__PURE__ */ React.createElement("span", { className: "font-data text-[var(--gold-soft)]" }, "Doca ", h.numeroDoca), editingId === h.id && /* @__PURE__ */ React.createElement("span", { className: "text-[10px] text-[var(--gold)] font-bold uppercase" }, "editando")), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[var(--text-faint)]" }, h.pacotes || 0, " pacotes \u2022 ", h.posicoes || 0, " posi\xE7\xF5es"), chamadoAtivo && /* @__PURE__ */ React.createElement("span", { className: `inline-flex items-center gap-1.5 mt-1.5 text-xs font-bold px-2 py-0.5 rounded-full border ${badgeChamado(chamadoAtivo.status).classe}` }, /* @__PURE__ */ React.createElement("span", { className: `w-1.5 h-1.5 rounded-full ${badgeChamado(chamadoAtivo.status).dot} ${chamadoAtivo.status === "aberto" ? "emergency-pulse" : ""}` }), chamadoAtivo.status === "aberto" ? "Chamado aberto" : "Em atendimento")), /* @__PURE__ */ React.createElement("div", { className: "flex gap-1 shrink-0" }, /* @__PURE__ */ React.createElement("button", { onClick: (e) => {
        e.stopPropagation();
        handleStartEdit(h);
      }, className: "p-2 text-[var(--text-faint)] hover:text-[var(--gold)] hover:bg-white/5 rounded-lg", title: "Editar" }, /* @__PURE__ */ React.createElement(Pencil, { size: 16 })), /* @__PURE__ */ React.createElement("button", { onClick: (e) => {
        e.stopPropagation();
        handleAbrirChamado(h);
      }, className: "py-2 px-3 bg-[var(--red)] text-white rounded-lg font-bold text-xs flex items-center gap-1.5 hover:brightness-110 emergency-pulse", title: "Abrir chamado de emerg\xEAncia" }, /* @__PURE__ */ React.createElement(AlertTriangle, { size: 15 }), " Chamado"), /* @__PURE__ */ React.createElement("button", { onClick: (e) => { e.stopPropagation(); handleDeleteClick(h); }, className: "p-2 text-[var(--text-faint)] hover:bg-white/5 hover:text-[var(--red)] rounded-lg", title: "Excluir" }, /* @__PURE__ */ React.createElement(Trash2, { size: 16 }))))
    );
  })), chamados.filter(chamadoEstaAtivo).length > 0 && /* @__PURE__ */ React.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ React.createElement("h2", { className: "text-lg font-display font-bold text-[var(--text)]" }, "Meus Chamados"), chamados.filter(chamadoEstaAtivo).map((c) => {
    const b = badgeChamado(c.status);
    const podeCancelar = c.status === "aberto" || c.status === "atendendo";
    return /* @__PURE__ */ React.createElement("div", { key: c.id, className: "bg-[var(--surface)] p-4 rounded-xl shadow-sm border border-[var(--border-soft)]" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-start mb-1 gap-2" }, /* @__PURE__ */ React.createElement("p", { className: "font-semibold text-[var(--text)]" }, /* @__PURE__ */ React.createElement("span", { className: "font-data text-[var(--gold-soft)]" }, "Doca ", c.numeroDoca), " \u2022 ", c.motivo), /* @__PURE__ */ React.createElement("span", { className: `inline-flex items-center gap-1.5 text-xs font-bold px-2 py-0.5 rounded-full border whitespace-nowrap ${b.classe}` }, /* @__PURE__ */ React.createElement("span", { className: `w-1.5 h-1.5 rounded-full ${b.dot}` }), " ", b.texto)), c.mensagem && /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[var(--text-muted)] mb-1" }, c.mensagem), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[var(--text-faint)] mb-2" }, "Aberto em ", formatarData(c.criadoEm), c.atendidoPor ? ` \u2022 Atendido por ${c.atendidoPor}` : ""), podeCancelar && /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setChamadoCancelando(c),
        className: "mt-2 py-2 px-4 bg-[var(--red-bg)] border border-[var(--red)]/50 text-[var(--red)] rounded-lg font-bold text-sm flex items-center gap-1.5 hover:bg-[var(--red)]/20"
      },
      /* @__PURE__ */ React.createElement(XCircle, { size: 16 }),
      " Cancelar chamado"
    ));
  }))), showDeleteModal && docaToDelete && /* @__PURE__ */ React.createElement(
    ConfirmModal,
    {
      titulo: "Excluir Registro",
      mensagem: `Tem certeza que deseja remover a Doca ${docaToDelete.numeroDoca}? Esta a\xE7\xE3o \xE9 permanente.`,
      textoConfirmar: "Excluir",
      onConfirmar: confirmDelete,
      onCancelar: () => {
        setShowDeleteModal(false);
        setDocaToDelete(null);
      }
    }
  ), showEmergencyModal && docaEmergencia && /* @__PURE__ */ React.createElement(
    EmergencyModal,
    {
      doca: docaEmergencia,
      enviando: enviandoChamado,
      onConfirm: confirmarChamado,
      onCancel: () => {
        setShowEmergencyModal(false);
        setDocaEmergencia(null);
      }
    }
  ), chamadoCancelando && /* @__PURE__ */ React.createElement(
    ConfirmModal,
    {
      titulo: "Cancelar Chamado",
      mensagem: `Cancelar o chamado de emerg\xEAncia da Doca ${chamadoCancelando.numeroDoca}? Os administradores ser\xE3o avisados que n\xE3o \xE9 mais necess\xE1rio.`,
      textoConfirmar: "Cancelar Chamado",
      onConfirmar: handleCancelarChamado,
      onCancelar: () => setChamadoCancelando(null)
    }
  ), confirmandoApagarTodas && /* @__PURE__ */ React.createElement(ConfirmModal, { titulo: "Excluir todas as docas", mensagem: `Isso vai excluir TODAS as suas ${docas.length} docas. Esta a\xE7\xE3o n\xE3o pode ser desfeita.`, textoConfirmar: "Excluir todas", onConfirmar: handleApagarTodasMinhas, onCancelar: () => setConfirmandoApagarTodas(false) }), docaDetalhe && /* @__PURE__ */ React.createElement(
    DocaDetailModal,
    {
      doca: docaDetalhe,
      chamadoAtivo: chamadoAbertoDaDoca(docaDetalhe.id),
      ehAdmin: false,
      onClose: () => setDocaDetalhe(null),
      onEditar: () => handleStartEdit(docaDetalhe),
      onExcluir: () => handleDeleteClick(docaDetalhe),
      onEmergencia: () => handleAbrirChamado(docaDetalhe)
    }
  ));
}
function AdminPanel({ user, profile, onLogout }) {
  const docaVazia = { numeroDoca: "", posicoes: "", mangas: "", paletes: "", gaylord: "", pacotes: "", canalizacao: "" };
  const [docas, setDocas] = useState([]);
  const [chamados, setChamados] = useState([]);
  const [alteracoes, setAlteracoes] = useState([]);
  const [aba, setAba] = useState("chamados");
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportContent, setReportContent] = useState("");
  const [docaDetalhe, setDocaDetalhe] = useState(null);
  const [mostrarForm, setMostrarForm] = useState(false);
  const [formDoca, setFormDoca] = useState(docaVazia);
  const [responsavelForm, setResponsavelForm] = useState("");
  const [editandoDocaId, setEditandoDocaId] = useState(null);
  const [docaOriginalAdmin, setDocaOriginalAdmin] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [docaToDelete, setDocaToDelete] = useState(null);
  const [alteracaoParaApagar, setAlteracaoParaApagar] = useState(null);
  const [confirmandoLimparHistorico, setConfirmandoLimparHistorico] = useState(false);
  const [confirmandoApagarTodasDocas, setConfirmandoApagarTodasDocas] = useState(false);
  const chamadosVistosRef = useRef(/* @__PURE__ */ new Set());
  const primeiraCargaRef = useRef(true);
  useEffect(() => {
    if (!db) return;
    const unsub = db.collection(COL_DOCAS).onSnapshot(
      (snap) => {
        const dados = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        dados.sort((a, b) => (b.atualizadoEm || "").localeCompare(a.atualizadoEm || ""));
        setDocas(dados);
      },
      (e) => console.error(e)
    );
    return unsub;
  }, []);
  useEffect(() => {
    if (!db) return;
    const unsub = db.collection(COL_CHAMADOS).onSnapshot(
      (snap) => {
        const dados = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        const peso = { aberto: 0, atendendo: 1, cancelado: 2, resolvido: 3 };
        dados.sort((a, b) => peso[a.status] - peso[b.status] || (b.criadoEm || "").localeCompare(a.criadoEm || ""));
        setChamados(dados);
      },
      (e) => console.error(e)
    );
    return unsub;
  }, []);
  useEffect(() => {
    if (!db) return;
    const unsub = db.collection(COL_ALTERACOES).orderBy("criadoEm", "desc").limit(150).onSnapshot(
      (snap) => setAlteracoes(snap.docs.map((d) => ({ id: d.id, ...d.data() }))),
      (e) => console.error(e)
    );
    return unsub;
  }, []);
  useEffect(() => {
    const idsAbertos = new Set(chamados.filter((c) => c.status === "aberto").map((c) => c.id));
    if (!primeiraCargaRef.current) {
      let temNovo = false;
      idsAbertos.forEach((id) => {
        if (!chamadosVistosRef.current.has(id)) temNovo = true;
      });
      if (temNovo) tocarAlertaEmergencia();
    }
    chamadosVistosRef.current = idsAbertos;
    primeiraCargaRef.current = false;
  }, [chamados]);
  useEffect(() => {
    if (!docaDetalhe) return;
    const atualizado = docas.find((d) => d.id === docaDetalhe.id);
    if (atualizado) setDocaDetalhe(atualizado);
  }, [docas]);
  const totalAbertos = chamados.filter((c) => c.status !== "resolvido" && c.status !== "cancelado").length;
  const handleAtender = async (c) => {
    try {
      await db.collection(COL_CHAMADOS).doc(c.id).update({ status: "atendendo", atendidoPor: profile.nome, atendidoEm: (/* @__PURE__ */ new Date()).toISOString() });
      await registrarAlteracao({
        docaId: c.docaId,
        numeroDoca: c.numeroDoca,
        autorUid: user.uid,
        autorNome: profile.nome,
        tipo: "chamado_atendido",
        campo: "Chamado",
        valorAnterior: "aberto",
        valorNovo: "em atendimento"
      });
    } catch (e) {
      console.error(e);
    }
  };
  const handleLiberar = async (c) => {
    try {
      await db.collection(COL_CHAMADOS).doc(c.id).update({ status: "aberto", atendidoPor: "", atendidoEm: "" });
      await registrarAlteracao({
        docaId: c.docaId,
        numeroDoca: c.numeroDoca,
        autorUid: user.uid,
        autorNome: profile.nome,
        tipo: "chamado_liberado",
        campo: "Chamado",
        valorAnterior: "em atendimento",
        valorNovo: "aberto (liberado)"
      });
    } catch (e) {
      console.error(e);
    }
  };
  const handleResolver = async (c) => {
    try {
      await db.collection(COL_CHAMADOS).doc(c.id).update({ status: "resolvido", resolvidoEm: (/* @__PURE__ */ new Date()).toISOString() });
      await registrarAlteracao({
        docaId: c.docaId,
        numeroDoca: c.numeroDoca,
        autorUid: user.uid,
        autorNome: profile.nome,
        tipo: "chamado_resolvido",
        campo: "Chamado",
        valorAnterior: "em atendimento",
        valorNovo: "resolvido"
      });
    } catch (e) {
      console.error(e);
    }
  };
  const abrirNovaDoca = () => {
    setEditandoDocaId(null);
    setDocaOriginalAdmin(null);
    setFormDoca(docaVazia);
    setResponsavelForm("");
    setMostrarForm(true);
    setDocaDetalhe(null);
  };
  const abrirEdicaoDoca = (doca) => {
    setEditandoDocaId(doca.id);
    setDocaOriginalAdmin(doca);
    setFormDoca({
      numeroDoca: doca.numeroDoca || "",
      posicoes: doca.posicoes || "",
      mangas: doca.mangas || "",
      paletes: doca.paletes || "",
      gaylord: doca.gaylord || "",
      pacotes: doca.pacotes || "",
      canalizacao: doca.canalizacao || ""
    });
    setResponsavelForm(doca.donoNome || "");
    setMostrarForm(true);
    setDocaDetalhe(null);
  };
  const fecharFormDoca = () => {
    setMostrarForm(false);
    setEditandoDocaId(null);
    setDocaOriginalAdmin(null);
    setFormDoca(docaVazia);
    setResponsavelForm("");
  };
  const handleSalvarDocaAdmin = async () => {
    if (!formDoca.numeroDoca.trim()) {
      alert("Por favor, informe o n\xFAmero da doca.");
      return;
    }
    const agora = (/* @__PURE__ */ new Date()).toISOString();
    const nomeResponsavel = responsavelForm.trim() || profile.nome;
    try {
      if (editandoDocaId) {
        const novoEstado = { ...formDoca, donoNome: nomeResponsavel };
        const mudancas = diffComResponsavel(docaOriginalAdmin, novoEstado);
        await db.collection(COL_DOCAS).doc(editandoDocaId).update({ ...formDoca, donoNome: nomeResponsavel, atualizadoEm: agora });
        for (const m of mudancas) {
          await registrarAlteracao({
            docaId: editandoDocaId,
            numeroDoca: formDoca.numeroDoca,
            autorUid: user.uid,
            autorNome: profile.nome,
            tipo: "edicao",
            campo: m.campo,
            valorAnterior: m.valorAnterior,
            valorNovo: m.valorNovo
          });
        }
      } else {
        const ref = await db.collection(COL_DOCAS).add({
          ...formDoca,
          donoUid: user.uid,
          donoNome: nomeResponsavel,
          criadoEm: agora,
          atualizadoEm: agora
        });
        await registrarAlteracao({
          docaId: ref.id,
          numeroDoca: formDoca.numeroDoca,
          autorUid: user.uid,
          autorNome: profile.nome,
          tipo: "criacao",
          campo: "Doca",
          valorAnterior: "\u2014",
          valorNovo: "cadastrada"
        });
      }
      fecharFormDoca();
    } catch (e) {
      console.error("Erro ao salvar doca:", e);
      alert("N\xE3o foi poss\xEDvel salvar. Tente novamente.");
    }
  };
  const handleDeleteClick = (doca) => {
    setDocaDetalhe(null);
    setDocaToDelete(doca);
    setShowDeleteModal(true);
  };
  const confirmDelete = async () => {
    if (!docaToDelete) return;
    try {
      await db.collection(COL_DOCAS).doc(docaToDelete.id).delete();
      await registrarAlteracao({
        docaId: docaToDelete.id,
        numeroDoca: docaToDelete.numeroDoca,
        autorUid: user.uid,
        autorNome: profile.nome,
        tipo: "exclusao",
        campo: "Doca",
        valorAnterior: "cadastrada",
        valorNovo: "exclu\xEDda"
      });
    } catch (e) {
      console.error(e);
    }
    if (editandoDocaId === docaToDelete.id) fecharFormDoca();
    setShowDeleteModal(false);
    setDocaToDelete(null);
  };
  const handleApagarAlteracao = async () => {
    if (!alteracaoParaApagar) return;
    try {
      await db.collection(COL_ALTERACOES).doc(alteracaoParaApagar.id).delete();
    } catch (e) {
      console.error(e);
    }
    setAlteracaoParaApagar(null);
  };
  const handleLimparHistorico = async () => {
    try {
      await Promise.all(alteracoes.map((a) => db.collection(COL_ALTERACOES).doc(a.id).delete()));
    } catch (e) {
      console.error(e);
    }
    setConfirmandoLimparHistorico(false);
  };
  const handleApagarTodasDocas = async () => {
    try {
      await Promise.all(docas.map(async (d) => {
        await db.collection(COL_DOCAS).doc(d.id).delete();
        await registrarAlteracao({ docaId: d.id, numeroDoca: d.numeroDoca, autorUid: user.uid, autorNome: profile.nome, tipo: "exclusao", campo: "Doca", valorAnterior: "cadastrada", valorNovo: "exclu\xEDda" });
      }));
    } catch (e) {
      console.error(e);
    }
    setConfirmandoApagarTodasDocas(false);
  };
  const handleGerarRelatorio = () => {
    const dataAtual = (/* @__PURE__ */ new Date()).toLocaleDateString("pt-BR");
    let text = `\u{1F4CB} RELAT\xD3RIO GERAL DE MOVIMENTA\xC7\xC3O
\u{1F4C5} Data: ${dataAtual}
\u{1F464} Gerado por: ${profile.nome}

`;
    const totais = { posicoes: 0, mangas: 0, paletes: 0, gaylord: 0, pacotes: 0 };
    docas.forEach((d) => {
      text += `\u{1F69B} DOCA ${d.numeroDoca || "..."}  (Respons\xE1vel: ${d.donoNome || "\u2014"})
`;
      text += `\u{1F4E6} Pacotes: ${d.pacotes || 0} | \u{1F522} Posi\xE7\xF5es: ${d.posicoes || 0} | \u{1F6E1}\uFE0F Mangas: ${d.mangas || 0} | \u{1F3D7}\uFE0F Paletes: ${d.paletes || 0} | \u{1F4E6} Gaylord: ${d.gaylord || 0}

`;
      totais.posicoes += Number(d.posicoes) || 0;
      totais.mangas += Number(d.mangas) || 0;
      totais.paletes += Number(d.paletes) || 0;
      totais.gaylord += Number(d.gaylord) || 0;
      totais.pacotes += Number(d.pacotes) || 0;
    });
    text += `\u2014 TOTAIS \u2014
Pacotes: ${totais.pacotes} | Posi\xE7\xF5es: ${totais.posicoes} | Mangas: ${totais.mangas} | Paletes: ${totais.paletes} | Gaylord: ${totais.gaylord}

`;
    const abertos = chamados.filter((c) => c.status !== "resolvido" && c.status !== "cancelado");
    text += `\u{1F6A8} CHAMADOS PENDENTES: ${abertos.length}
`;
    abertos.forEach((c) => {
      text += `- Doca ${c.numeroDoca} (${c.donoNome}): ${c.motivo}
`;
    });
    setReportContent(text);
    setShowReportModal(true);
  };
  const abrirDetalheDePorId = (docaId) => {
    const d = docas.find((x) => x.id === docaId);
    if (d) setDocaDetalhe(d);
  };
  return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-[var(--bg)] pb-12 font-sans" }, /* @__PURE__ */ React.createElement("header", { className: "bg-[var(--bg-elevated)] border-b border-[var(--border)] px-4 py-3 sticky top-0 z-10" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-2xl mx-auto flex items-center justify-between" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2.5" }, /* @__PURE__ */ React.createElement("div", { className: "bg-[var(--surface)] border border-[var(--gold)]/30 p-1.5 rounded-lg" }, /* @__PURE__ */ React.createElement(Shield, { className: "w-5 h-5 text-[var(--gold)]" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement("h1", { className: "text-[var(--text)] font-display text-base font-bold tracking-wide leading-none" }, "DESPACHO"), /* @__PURE__ */ React.createElement("span", { className: "text-[9px] font-bold uppercase tracking-wider text-[var(--gold)] border border-[var(--gold)]/40 rounded px-1.5 py-0.5" }, "Admin")), /* @__PURE__ */ React.createElement("p", { className: "text-[var(--text-faint)] text-[10px] font-bold uppercase tracking-wider mt-0.5" }, "Painel Administrativo"))), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ React.createElement("a", { href: "report.html", className: "text-xs font-bold px-3 py-1.5 bg-[var(--gold)] text-[#1A1404] rounded-lg hover:brightness-110 transition-all" }, "Report"), /* @__PURE__ */ React.createElement("span", { className: "text-[var(--text-muted)] text-sm font-semibold hidden sm:inline" }, profile.nome), /* @__PURE__ */ React.createElement("button", { onClick: onLogout, className: "p-2 bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--gold)]/50 rounded-lg text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors", title: "Sair" }, /* @__PURE__ */ React.createElement(LogOut, { size: 17 }))))), /* @__PURE__ */ React.createElement("main", { className: "max-w-2xl mx-auto px-4 pt-6" }, /* @__PURE__ */ React.createElement("button", { onClick: handleGerarRelatorio, className: "w-full py-3 bg-[var(--gold)] text-[#1A1404] rounded-xl font-bold mb-6 flex items-center justify-center gap-2 hover:brightness-110 shadow-md" }, /* @__PURE__ */ React.createElement(Clipboard, { size: 18 }), " Gerar Relat\xF3rio Geral"), /* @__PURE__ */ React.createElement("div", { className: "flex bg-[var(--surface)] rounded-xl p-1 mb-6 gap-1 border border-[var(--border-soft)]" }, /* @__PURE__ */ React.createElement("button", { onClick: () => setAba("chamados"), className: `flex-1 py-2 rounded-lg font-bold text-xs flex items-center justify-center gap-1 transition-all ${aba === "chamados" ? "bg-[var(--bg-elevated)] text-[var(--gold)] border border-[var(--border)]" : "text-[var(--text-faint)]"}` }, /* @__PURE__ */ React.createElement(AlertTriangle, { size: 14 }), " Chamados", totalAbertos > 0 && /* @__PURE__ */ React.createElement("span", { className: "bg-[var(--red)] text-white rounded-full w-5 h-5 text-[10px] flex items-center justify-center ml-1" }, totalAbertos)), /* @__PURE__ */ React.createElement("button", { onClick: () => setAba("docas"), className: `flex-1 py-2 rounded-lg font-bold text-xs flex items-center justify-center gap-1 transition-all ${aba === "docas" ? "bg-[var(--bg-elevated)] text-[var(--gold)] border border-[var(--border)]" : "text-[var(--text-faint)]"}` }, /* @__PURE__ */ React.createElement(Box, { size: 14 }), " Docas"), /* @__PURE__ */ React.createElement("button", { onClick: () => setAba("historico"), className: `flex-1 py-2 rounded-lg font-bold text-xs flex items-center justify-center gap-1 transition-all ${aba === "historico" ? "bg-[var(--bg-elevated)] text-[var(--gold)] border border-[var(--border)]" : "text-[var(--text-faint)]"}` }, /* @__PURE__ */ React.createElement(History, { size: 14 }), " Hist\xF3rico")), aba === "chamados" && /* @__PURE__ */ React.createElement("div", { className: "space-y-3" }, chamados.filter(chamadoEstaAtivo).length === 0 && /* @__PURE__ */ React.createElement("p", { className: "text-[var(--text-faint)] text-center py-4 italic text-sm" }, "Nenhum chamado ativo no momento."), chamados.filter(chamadoEstaAtivo).map((c) => {
    const b = badgeChamado(c.status);
    const corBorda = c.status === "aberto" ? "border-l-[var(--red)]" : c.status === "atendendo" ? "border-l-[var(--amber)]" : c.status === "cancelado" ? "border-l-[var(--border)]" : "border-l-[var(--green)]";
    return /* @__PURE__ */ React.createElement("div", { key: c.id, className: `bg-[var(--surface)] p-4 rounded-xl shadow-sm border-l-4 ${corBorda} border-y border-r border-[var(--border-soft)]` }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-start mb-1 gap-2" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", { onClick: () => abrirDetalheDePorId(c.docaId), className: "font-semibold text-[var(--text)] text-left hover:underline" }, /* @__PURE__ */ React.createElement("span", { className: "font-data text-[var(--gold-soft)]" }, "Doca ", c.numeroDoca), " \u2022 ", c.motivo), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[var(--text-faint)]" }, "Aberto por ", c.donoNome)), /* @__PURE__ */ React.createElement("span", { className: `inline-flex items-center gap-1.5 text-xs font-bold px-2 py-0.5 rounded-full border whitespace-nowrap ${b.classe}` }, /* @__PURE__ */ React.createElement("span", { className: `w-1.5 h-1.5 rounded-full ${b.dot} ${c.status === "aberto" ? "emergency-pulse" : ""}` }), " ", b.texto)), c.mensagem && /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[var(--text-muted)] mb-2" }, c.mensagem), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[var(--text-faint)] mb-2" }, formatarData(c.criadoEm), c.atendidoPor ? ` \u2022 Atendido por ${c.atendidoPor}` : ""), c.status === "aberto" && /* @__PURE__ */ React.createElement("button", { onClick: () => handleAtender(c), className: "w-full py-2 bg-[var(--amber)] text-[#1A1404] rounded-lg font-bold text-sm hover:brightness-110" }, "Atender Chamado"), c.status === "atendendo" && /* @__PURE__ */ React.createElement("div", { className: "flex gap-2" }, /* @__PURE__ */ React.createElement("button", { onClick: () => handleResolver(c), className: "flex-grow py-2 bg-[var(--green)] text-[#08210F] rounded-lg font-bold text-sm hover:brightness-110 flex items-center justify-center gap-2" }, /* @__PURE__ */ React.createElement(CheckCircle, { size: 16 }), " Marcar como Resolvido"), /* @__PURE__ */ React.createElement("button", { onClick: () => handleLiberar(c), className: "py-2 px-3 bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text-muted)] rounded-lg font-semibold text-sm hover:text-[var(--amber)] hover:border-[var(--amber)]/40 flex items-center justify-center gap-1.5", title: "Liberar para outro admin atender" }, /* @__PURE__ */ React.createElement(XCircle, { size: 15 }), " Liberar")));
  })), aba === "docas" && /* @__PURE__ */ React.createElement("div", { className: "space-y-3" }, !mostrarForm && /* @__PURE__ */ React.createElement("button", { onClick: abrirNovaDoca, className: "w-full py-3 bg-[var(--surface)] border border-dashed border-[var(--gold)]/40 text-[var(--gold)] rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-[var(--gold)]/5" }, /* @__PURE__ */ React.createElement(Plus, { size: 17 }), " Nova Doca"), !mostrarForm && docas.length > 0 && /* @__PURE__ */ React.createElement("button", { onClick: () => setConfirmandoApagarTodasDocas(true), className: "w-full py-2.5 bg-[var(--red-bg)] border border-[var(--red)]/40 text-[var(--red)] rounded-lg font-semibold text-sm flex items-center justify-center gap-1.5 hover:bg-[var(--red)]/20" }, /* @__PURE__ */ React.createElement(Trash2, { size: 15 }), " Apagar todas as docas"), mostrarForm && /* @__PURE__ */ React.createElement("div", { className: "bg-[var(--surface)] p-4 rounded-xl shadow-sm border border-[var(--gold)]/30" }, /* @__PURE__ */ React.createElement("h2", { className: "text-base font-display font-bold text-[var(--text)] mb-4 flex items-center gap-2" }, /* @__PURE__ */ React.createElement(Box, { size: 17, className: "text-[var(--gold)]" }), " ", editandoDocaId ? "Editar Doca" : "Cadastrar Nova Doca"), /* @__PURE__ */ React.createElement("div", { className: "mb-3" }, /* @__PURE__ */ React.createElement("label", { className: "flex items-center gap-1 text-[11px] font-bold text-[var(--text-faint)] uppercase tracking-wide mb-1" }, /* @__PURE__ */ React.createElement(User, { size: 13, className: "text-[var(--gold)]/80" }), " Respons\xE1vel"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      className: "w-full bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text)] rounded-lg p-2 outline-none focus:border-[var(--gold)]",
      placeholder: "Nome do operador respons\xE1vel",
      value: responsavelForm,
      onChange: (e) => setResponsavelForm(e.target.value)
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-3 mb-4" }, CAMPOS_DOCA.map((item) => /* @__PURE__ */ React.createElement("div", { key: item.campo }, /* @__PURE__ */ React.createElement("label", { className: "flex items-center gap-1 text-[11px] font-bold text-[var(--text-faint)] uppercase tracking-wide mb-1" }, /* @__PURE__ */ React.createElement(item.icon, { size: 13, className: "text-[var(--gold)]/80" }), " ", item.label), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: item.tipo,
      className: "w-full bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text)] rounded-lg p-2 outline-none focus:border-[var(--gold)]",
      value: formDoca[item.campo],
      onChange: (e) => setFormDoca({ ...formDoca, [item.campo]: e.target.value })
    }
  )))), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2" }, /* @__PURE__ */ React.createElement("button", { onClick: handleSalvarDocaAdmin, className: "flex-grow py-3 bg-[var(--gold)] text-[#1A1404] rounded-lg font-bold flex items-center justify-center gap-2 hover:brightness-110 transition-all" }, /* @__PURE__ */ React.createElement(Save, { size: 19 }), " ", editandoDocaId ? "Atualizar Doca" : "Salvar Doca"), /* @__PURE__ */ React.createElement("button", { onClick: fecharFormDoca, className: "py-3 px-4 bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text-muted)] rounded-lg font-semibold hover:bg-[var(--border)] transition-all text-sm" }, "Sair"))), docas.length === 0 && !mostrarForm && /* @__PURE__ */ React.createElement("p", { className: "text-[var(--text-faint)] text-center py-4 italic text-sm" }, "Nenhuma doca cadastrada."), docas.map((d) => /* @__PURE__ */ React.createElement("div", { key: d.id, className: "bg-[var(--surface)] p-4 rounded-xl shadow-sm border border-[var(--border-soft)] flex justify-between items-start gap-2" }, /* @__PURE__ */ React.createElement("button", { onClick: () => setDocaDetalhe(d), className: "text-left flex-grow" }, /* @__PURE__ */ React.createElement("p", { className: "font-semibold text-[var(--text)]" }, /* @__PURE__ */ React.createElement("span", { className: "font-data text-[var(--gold-soft)]" }, "Doca ", d.numeroDoca)), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-[var(--text-faint)]" }, d.pacotes || 0, " pacotes \u2022 ", d.posicoes || 0, " posi\xE7\xF5es \u2022 Respons\xE1vel: ", d.donoNome), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[var(--text-faint)] mt-1" }, "Atualizado em ", formatarData(d.atualizadoEm))), /* @__PURE__ */ React.createElement("div", { className: "flex gap-1 shrink-0" }, /* @__PURE__ */ React.createElement("button", { onClick: (e) => {
    e.stopPropagation();
    abrirEdicaoDoca(d);
  }, className: "p-2 text-[var(--text-faint)] hover:text-[var(--gold)] hover:bg-white/5 rounded-lg", title: "Editar" }, /* @__PURE__ */ React.createElement(Pencil, { size: 16 })), /* @__PURE__ */ React.createElement("button", { onClick: (e) => {
    e.stopPropagation();
    handleDeleteClick(d);
  }, className: "p-2 text-[var(--text-faint)] hover:bg-white/5 hover:text-[var(--red)] rounded-lg", title: "Excluir" }, /* @__PURE__ */ React.createElement(Trash2, { size: 16 })))))), aba === "historico" && /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, alteracoes.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "flex justify-end mb-1" }, /* @__PURE__ */ React.createElement("button", { onClick: () => setConfirmandoLimparHistorico(true), className: "text-xs font-semibold text-[var(--text-faint)] hover:text-[var(--red)] flex items-center gap-1.5" }, /* @__PURE__ */ React.createElement(Trash2, { size: 13 }), " Limpar hist\xF3rico")), alteracoes.length === 0 && /* @__PURE__ */ React.createElement("p", { className: "text-[var(--text-faint)] text-center py-4 italic text-sm" }, "Nenhuma altera\xE7\xE3o registrada."), alteracoes.map((a) => {
    const ehAcaoAdmin = a.tipo === "chamado_atendido" || a.tipo === "chamado_resolvido" || a.tipo === "chamado_liberado";
    const ehCancelamento = a.tipo === "chamado_cancelado";
    return /* @__PURE__ */ React.createElement("div", { key: a.id, className: `bg-[var(--surface)] p-3 rounded-lg shadow-sm border text-sm flex items-start justify-between gap-2 ${ehAcaoAdmin ? "border-[var(--gold)]/20" : "border-[var(--border-soft)]"}` }, /* @__PURE__ */ React.createElement("div", { className: "flex-grow" }, /* @__PURE__ */ React.createElement("p", { className: "text-[var(--text-muted)]" }, /* @__PURE__ */ React.createElement("span", { className: "font-semibold text-[var(--text)]" }, a.autorNome), ehAcaoAdmin && /* @__PURE__ */ React.createElement("span", { className: "ml-1 text-[10px] font-bold uppercase tracking-wide text-[var(--gold)] border border-[var(--gold)]/30 px-1.5 py-0.5 rounded" }, "admin"), " ", a.tipo === "criacao" && /* @__PURE__ */ React.createElement(React.Fragment, null, "cadastrou a Doca ", /* @__PURE__ */ React.createElement("span", { className: "font-data text-[var(--text)]" }, a.numeroDoca)), a.tipo === "exclusao" && /* @__PURE__ */ React.createElement(React.Fragment, null, "excluiu a Doca ", /* @__PURE__ */ React.createElement("span", { className: "font-data text-[var(--text)]" }, a.numeroDoca)), a.tipo === "edicao" && /* @__PURE__ */ React.createElement(React.Fragment, null, "alterou ", /* @__PURE__ */ React.createElement("span", { className: "font-semibold text-[var(--text)]" }, a.campo), " da Doca ", /* @__PURE__ */ React.createElement("span", { className: "font-data text-[var(--text)]" }, a.numeroDoca), ": ", a.valorAnterior, " \u2192 ", a.valorNovo), a.tipo === "chamado_atendido" && /* @__PURE__ */ React.createElement(React.Fragment, null, "passou a atender o chamado da Doca ", /* @__PURE__ */ React.createElement("span", { className: "font-data text-[var(--text)]" }, a.numeroDoca)), a.tipo === "chamado_resolvido" && /* @__PURE__ */ React.createElement(React.Fragment, null, "resolveu o chamado da Doca ", /* @__PURE__ */ React.createElement("span", { className: "font-data text-[var(--text)]" }, a.numeroDoca)), a.tipo === "chamado_liberado" && /* @__PURE__ */ React.createElement(React.Fragment, null, "liberou o chamado da Doca ", /* @__PURE__ */ React.createElement("span", { className: "font-data text-[var(--text)]" }, a.numeroDoca)), ehCancelamento && /* @__PURE__ */ React.createElement(React.Fragment, null, "cancelou o chamado da Doca ", /* @__PURE__ */ React.createElement("span", { className: "font-data text-[var(--text)]" }, a.numeroDoca))), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-[var(--text-faint)] mt-0.5" }, formatarData(a.criadoEm))), /* @__PURE__ */ React.createElement("button", { onClick: () => setAlteracaoParaApagar(a), className: "p-1.5 text-[var(--text-faint)] hover:text-[var(--red)] hover:bg-white/5 rounded-lg shrink-0", title: "Apagar do hist\xF3rico" }, /* @__PURE__ */ React.createElement(Trash2, { size: 14 })));
  }))), showReportModal && /* @__PURE__ */ React.createElement(ReportModal, { titulo: "Relat\xF3rio Geral", conteudo: reportContent, onFechar: () => setShowReportModal(false) }), showDeleteModal && docaToDelete && /* @__PURE__ */ React.createElement(
    ConfirmModal,
    {
      titulo: "Excluir Registro",
      mensagem: `Tem certeza que deseja remover a Doca ${docaToDelete.numeroDoca}? Esta a\xE7\xE3o \xE9 permanente.`,
      textoConfirmar: "Excluir",
      onConfirmar: confirmDelete,
      onCancelar: () => {
        setShowDeleteModal(false);
        setDocaToDelete(null);
      }
    }
  ), alteracaoParaApagar && /* @__PURE__ */ React.createElement(
    ConfirmModal,
    {
      titulo: "Apagar do Hist\xF3rico",
      mensagem: "Esta entrada do hist\xF3rico de altera\xE7\xF5es ser\xE1 apagada permanentemente para todos os administradores.",
      textoConfirmar: "Apagar",
      onConfirmar: handleApagarAlteracao,
      onCancelar: () => setAlteracaoParaApagar(null)
    }
  ), confirmandoLimparHistorico && /* @__PURE__ */ React.createElement(
    ConfirmModal,
    {
      titulo: "Limpar Hist\xF3rico",
      mensagem: `Isso vai apagar todas as ${alteracoes.length} entradas do hist\xF3rico de altera\xE7\xF5es, para todos os administradores. Esta a\xE7\xE3o n\xE3o pode ser desfeita.`,
      textoConfirmar: "Limpar Tudo",
      onConfirmar: handleLimparHistorico,
      onCancelar: () => setConfirmandoLimparHistorico(false)
    }
  ), confirmandoApagarTodasDocas && /* @__PURE__ */ React.createElement(ConfirmModal, { titulo: "Apagar todas as docas", mensagem: `Isso vai apagar TODAS as ${docas.length} docas de todos os operadores. Esta a\xE7\xE3o n\xE3o pode ser desfeita.`, textoConfirmar: "Apagar tudo", onConfirmar: handleApagarTodasDocas, onCancelar: () => setConfirmandoApagarTodasDocas(false) }), docaDetalhe && /* @__PURE__ */ React.createElement(
    DocaDetailModal,
    {
      doca: docaDetalhe,
      chamadoAtivo: chamados.find((c) => c.docaId === docaDetalhe.id && c.status !== "resolvido" && c.status !== "cancelado"),
      ehAdmin: true,
      onClose: () => setDocaDetalhe(null),
      onEditar: () => abrirEdicaoDoca(docaDetalhe),
      onExcluir: () => handleDeleteClick(docaDetalhe)
    }
  ));
}
function App() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [carregandoAuth, setCarregandoAuth] = useState(true);
  useEffect(() => {
    if (!auth) {
      setCarregandoAuth(false);
      return;
    }
    const unsub = auth.onAuthStateChanged((u) => {
      setUser(u);
      if (!u) setProfile(null);
      setCarregandoAuth(false);
    });
    return unsub;
  }, []);
  useEffect(() => {
    if (!user || !db) return;
    const unsub = db.collection(COL_USERS).doc(user.uid).onSnapshot(
      (doc) => setProfile(doc.exists ? doc.data() : null),
      (e) => console.error(e)
    );
    return unsub;
  }, [user]);
  const handleLogout = () => {
    if (auth) auth.signOut();
  };
  if (!firebaseConfigured) {
    return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen flex items-center justify-center bg-[var(--bg)] p-6 text-center" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-md" }, /* @__PURE__ */ React.createElement(AlertTriangle, { className: "mx-auto text-[var(--amber)] mb-4", size: 48 }), /* @__PURE__ */ React.createElement("h1", { className: "text-xl font-display font-bold text-[var(--text)] mb-2" }, "Firebase n\xE3o configurado"), /* @__PURE__ */ React.createElement("p", { className: "text-[var(--text-muted)] text-sm" }, "Edite o objeto ", /* @__PURE__ */ React.createElement("code", { className: "bg-[var(--surface)] border border-[var(--border)] px-1 rounded text-[var(--gold-soft)]" }, "firebaseConfig"), " em js/firebase-config.js com as credenciais do seu projeto Firebase.")));
  }
  if (carregandoAuth || user && !profile) {
    return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen flex items-center justify-center bg-[var(--bg)]" }, /* @__PURE__ */ React.createElement(Loader2, { size: 32, className: "animate-spin text-[var(--gold)]" }));
  }
  if (!user) return /* @__PURE__ */ React.createElement(AuthScreen, null);
  if (profile.role !== "admin") {
    return /* @__PURE__ */ React.createElement(UserPanel, { user, profile, onLogout: handleLogout });
  }
  return /* @__PURE__ */ React.createElement(AdminPanel, { user, profile, onLogout: handleLogout });
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(/* @__PURE__ */ React.createElement(App, null));
