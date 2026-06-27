'use strict';

// True seulement si firebase-config.js a été rempli avec de vraies valeurs
const FIREBASE_READY = typeof FIREBASE_CONFIG !== 'undefined'
  && !FIREBASE_CONFIG.apiKey.startsWith('YOUR_');

if (FIREBASE_READY) {
  firebase.initializeApp(FIREBASE_CONFIG);
}

/* ── Auth ── */
function fbOnAuthChange(cb) {
  if (!FIREBASE_READY) { cb(null); return; }
  firebase.auth().onAuthStateChanged(cb);
}

async function fbSignInGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  await firebase.auth().signInWithPopup(provider);
}

async function fbSignOut() {
  await firebase.auth().signOut();
}

/* ── Firestore ── */
async function fbLoad(uid) {
  try {
    const snap = await firebase.firestore().collection('users').doc(uid).get();
    return snap.exists ? snap.data() : null;
  } catch (e) {
    console.warn('[Firestore] lecture impossible :', e.message);
    return null;
  }
}

function fbSave(uid, data) {
  if (!FIREBASE_READY) return;
  firebase.firestore()
    .collection('users').doc(uid)
    .set(data, { merge: true })
    .catch(e => console.warn('[Firestore] écriture impossible :', e.message));
}
