// ════════════════════════════════════════════════════════
// auth.js
// Login, cadastro e logout de colegas via Firebase Authentication.
// Controla a troca entre a tela de login e o app principal.
// ════════════════════════════════════════════════════════

import { auth } from "./firebase-config.js";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

const loginScreen   = document.getElementById('login-screen');
const appRoot        = document.getElementById('app-root');
const loginForm      = document.getElementById('login-form');
const loginEmailEl   = document.getElementById('login-email');
const loginPassEl    = document.getElementById('login-password');
const loginErrorEl   = document.getElementById('login-error');
const loginSubmitBtn = document.getElementById('login-submit-btn');
const toggleModeBtn  = document.getElementById('login-toggle-mode');
const logoutBtn      = document.getElementById('logout-btn');
const headerEmailEl  = document.getElementById('header-user-email');

// Alterna entre "Entrar" e "Criar acesso" no mesmo formulário,
// evitando duas telas separadas para o mesmo fluxo simples.
let isSignupMode = false;

function setMode(signup) {
  isSignupMode = signup;
  loginSubmitBtn.innerHTML = signup
    ? '<i class="ti ti-user-plus"></i>Criar conta'
    : '<i class="ti ti-login-2"></i>Entrar';
  toggleModeBtn.textContent = signup
    ? 'Já tem conta? Entrar'
    : 'Ainda não tem conta? Criar acesso';
  loginErrorEl.style.display = 'none';
}

toggleModeBtn.addEventListener('click', () => setMode(!isSignupMode));

function mensagemDeErro(code) {
  const mapa = {
    'auth/invalid-email': 'E-mail inválido.',
    'auth/user-not-found': 'Não existe conta com esse e-mail.',
    'auth/wrong-password': 'Senha incorreta.',
    'auth/invalid-credential': 'E-mail ou senha incorretos.',
    'auth/email-already-in-use': 'Já existe uma conta com esse e-mail.',
    'auth/weak-password': 'A senha precisa ter pelo menos 6 caracteres.',
    'auth/too-many-requests': 'Muitas tentativas. Aguarde um pouco e tente de novo.',
    'auth/network-request-failed': 'Falha de conexão. Verifique sua internet.',
  };
  return mapa[code] || 'Não foi possível entrar. Tente novamente.';
}

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = loginEmailEl.value.trim();
  const senha = loginPassEl.value;
  loginErrorEl.style.display = 'none';
  loginSubmitBtn.disabled = true;

  try {
    if (isSignupMode) {
      await createUserWithEmailAndPassword(auth, email, senha);
    } else {
      await signInWithEmailAndPassword(auth, email, senha);
    }
    // onAuthStateChanged cuida de exibir o app depois do sucesso.
  } catch (err) {
    loginErrorEl.textContent = mensagemDeErro(err.code);
    loginErrorEl.style.display = 'block';
  } finally {
    loginSubmitBtn.disabled = false;
  }
});

logoutBtn.addEventListener('click', () => signOut(auth));

// Observa o estado de login em tempo real e troca a tela.
// Outros módulos (app.js) escutam este mesmo evento via onAuthStateChanged
// para saber quando podem começar a carregar dados do Firestore.
onAuthStateChanged(auth, (user) => {
  if (user) {
    loginScreen.style.display = 'none';
    appRoot.style.display = '';
    headerEmailEl.textContent = user.email;
    loginForm.reset();
  } else {
    appRoot.style.display = 'none';
    loginScreen.style.display = 'flex';
  }
});

export { auth };
