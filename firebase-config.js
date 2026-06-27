// ─────────────────────────────────────────────────────────────
//  ÉTAPES DE CONFIGURATION
//
//  1. Va sur https://console.firebase.google.com
//  2. Crée un projet (ex: "verbmaster")
//  3. Authentication → Sign-in method → Google → Activer
//  4. Firestore Database → Créer une base → Mode production
//  5. Firestore → Onglet Rules → colle ces règles :
//
//     rules_version = '2';
//     service cloud.firestore {
//       match /databases/{database}/documents {
//         match /users/{userId} {
//           allow read, write: if request.auth.uid == userId;
//         }
//       }
//     }
//
//  6. Project Settings (⚙️) → Your apps → </> Add web app
//     → copie la config firebaseConfig ci-dessous
// ─────────────────────────────────────────────────────────────

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyC5P5eqWupaRxLOAmgH0BWso2vlmTTpf5o",
  authDomain: "verbmaster-8b11b.firebaseapp.com",
  projectId: "verbmaster-8b11b",
  storageBucket: "verbmaster-8b11b.firebasestorage.app",
  messagingSenderId: "876909949310",
  appId: "1:876909949310:web:6fe4f8d798ed8cd26b032f",
  measurementId: "G-47Z4R2BPW0"
};
