# Painel Logístico · Mercado Livre — Guia de Publicação

Este é o painel reconstruído com: login individual por colega (Firebase
Authentication), dados sincronizados em tempo real entre toda a equipe
(Firestore), exportação em PDF, validação de campos, comparação de meses
no dashboard e meta de OOT/SLA editável.

## Arquivos do projeto

```
painel-ml-v2/
├── index.html              → estrutura da página (login + app)
├── style.css                → todo o visual
├── firebase-config.js       → conexão com o Firebase (já com sua config)
├── auth.js                  → login, cadastro e logout
├── app.js                   → toda a lógica do painel
├── firestore.rules.txt      → regras de segurança (colar no console)
└── assets/
    ├── logo-ml.svg           → logo usada no cabeçalho e tela de login
    └── favicon.svg           → ícone da aba do navegador
```

## Passo 1 — Ativar login por e-mail/senha no Firebase

1. Acesse https://console.firebase.google.com e abra o projeto
   `painel-ml-logistica`.
2. No menu lateral: **Build → Authentication**.
3. Clique em **Get started** (se for a primeira vez).
4. Na aba **Sign-in method**, clique em **E-mail/senha** e ative o
   primeiro toggle ("Ativar"). Clique em **Salvar**.

Sem esse passo, ninguém conseguirá criar conta ou entrar.

## Passo 2 — Aplicar as Regras de Segurança do Firestore

1. No mesmo console: **Build → Firestore Database → aba Regras**.
2. Apague o conteúdo atual e cole o conteúdo do arquivo
   `firestore.rules.txt` deste projeto.
3. Clique em **Publicar**.

Isso garante que só quem tem login consegue ler ou escrever dados —
sem essa regra, o banco fica exposto a qualquer pessoa com a URL.

## Passo 3 — Criar o primeiro acesso

1. Abra o `index.html` (local ou já publicado).
2. Na tela de login, clique em **"Ainda não tem conta? Criar acesso"**.
3. Cadastre seu e-mail e uma senha (mínimo 6 caracteres).
4. Repita esse passo para cada colega que for usar o painel — cada
   pessoa cria a própria conta na primeira vez que acessar.

## Passo 4 — Publicar no Netlify

1. Acesse https://app.netlify.com.
2. Arraste a pasta `painel-ml-v2` (com todos os arquivos, incluindo a
   pasta `assets`) para a área de upload ("Deploy manually" / arrastar
   e soltar), **ou** conecte um repositório do GitHub com esses
   arquivos para deploy automático a cada alteração.
3. O Netlify gera um link público (ex: `seu-painel.netlify.app`) — é
   esse link que você compartilha com a equipe.

Não é necessário configurar build command nem variável de ambiente:
são arquivos estáticos, e a chave do Firebase já está no código (o que
é seguro, pois a proteção real está nas Regras de Segurança do Passo 2).

## Sobre a meta editável

A meta de OOT/SLA (hoje 99%) pode ser alterada em qualquer momento na
aba **Meta & Preferências** do painel. Essa configuração é
compartilhada — vale para todos os colegas e para os relatórios
antigos exibidos no histórico/dashboard.

## Sobre a sincronização em tempo real

Sempre que alguém gera ou apaga um relatório, todos os colegas
conectados ao painel veem a atualização automaticamente, sem precisar
atualizar a página — isso é feito pelo Firestore (`onSnapshot`).

O ícone de nuvem no canto superior direito mostra o status:
- ☁️✓ verde/cinza: tudo sincronizado
- ☁️↑ pulsando: enviando dados agora
- ☁️✗ ou wifi cortado: problema de conexão (os dados ficam só no seu
  navegador até a conexão voltar)

## Plano gratuito do Firebase

O plano Spark (gratuito, sem cartão de crédito) do Firebase aguenta
tranquilamente o uso de uma equipe pequena/média: 50.000 leituras e
20.000 escritas por dia no Firestore, e contas de login ilimitadas.
Não há necessidade de upgrade a menos que o painel cresça muito além
de um único setor.
