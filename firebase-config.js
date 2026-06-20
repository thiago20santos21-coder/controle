// ════════════════════════════════════════════════════════
// firebase-config.js
// Inicialização do Firebase (App + Auth + Firestore).
// Outros módulos importam `auth` e `db` a partir deste arquivo.
// ════════════════════════════════════════════════════════

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

// Configuração do projeto Firebase (painel-ml-logistica).
// A apiKey do Firebase não é secreta — a segurança real vem das
// Regras de Segurança do Firestore (ver firestore.rules.txt),
// por isso é normal e seguro ela aparecer aqui no código-fonte.
const firebaseConfig = {
  apiKey: "AIzaSyC0k4gsBJiIDVvmIr9UwIYtSkKrJp6YTbk",
  authDomain: "painel-ml-logistica.firebaseapp.com",
  projectId: "painel-ml-logistica",
  storageBucket: "painel-ml-logistica.firebasestorage.app",
  messagingSenderId: "814809332914",
  appId: "1:814809332914:web:bc8d48e9bf919b84105dab",
  measurementId: "G-KY2EF95JB9"
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
