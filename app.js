import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBm04pX_eaq3lexsySmrX-6ItaY328Pxi8",
  authDomain: "educonnect-africa-31051.firebaseapp.com",
  projectId: "educonnect-africa-31051",
  storageBucket: "educonnect-africa-31051.firebasestorage.app",
  messagingSenderId: "514604938605",
  appId: "1:514604938605:web:353b1941e3758ebcf71664"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("signupBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => alert("Account created successfully!"))
    .catch((e) => alert("Error: " + e.message));
});

document.getElementById("loginBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then(() => alert("Logged in successfully!"))
    .catch((e) => alert("Error: " + e.message));
});