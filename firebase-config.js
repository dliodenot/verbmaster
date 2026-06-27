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
  apiKey:            'YOUR_API_KEY',
  authDomain:        'YOUR_PROJECT.firebaseapp.com',
  projectId:         'YOUR_PROJECT_ID',
  storageBucket:     'YOUR_PROJECT.appspot.com',
  messagingSenderId: 'YOUR_SENDER_ID',
  appId:             'YOUR_APP_ID',
};
