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

// Apple Sign-In
// Setup : Firebase Console → Authentication → Sign-in method → Apple → Enable
// Puis : developer.apple.com → Certificates → Services IDs → configure domaine + redirect URL
async function fbSignInApple() {
  const provider = new firebase.auth.OAuthProvider('apple.com');
  provider.addScope('email');
  provider.addScope('name');
  await firebase.auth().signInWithPopup(provider);
}

// Email / mot de passe
// Setup : Firebase Console → Authentication → Sign-in method → Email/Password → Enable
async function fbSignInEmail(email, password) {
  await firebase.auth().signInWithEmailAndPassword(email, password);
}

async function fbCreateAccount(email, password, displayName) {
  const cred = await firebase.auth().createUserWithEmailAndPassword(email, password);
  if (displayName) await cred.user.updateProfile({ displayName });
}

async function fbResetPassword(email) {
  await firebase.auth().sendPasswordResetEmail(email);
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

function fbUpdateActivity(uid, xpEarned) {
  if (!FIREBASE_READY) return;
  const today = new Date().toISOString().slice(0, 10);
  firebase.firestore().collection('users').doc(uid).set({
    activityDates: firebase.firestore.FieldValue.arrayUnion(today),
    lastActivityDate: today,
  }, { merge: true }).catch(e => console.warn('[Firestore] activité :', e.message));
}

/* ── Friends ── */
const FRIEND_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
function _genCode() {
  return Array.from({ length: 6 }, () => FRIEND_CHARS[Math.floor(Math.random() * FRIEND_CHARS.length)]).join('');
}
function _friendshipId(a, b) { return [a, b].sort().join('_'); }

async function fbInitUserProfile(uid, displayName, photoURL) {
  if (!FIREBASE_READY) return null;
  await firebase.firestore().collection('users').doc(uid)
    .set({ displayName, photoURL }, { merge: true });
  return fbEnsureFriendCode(uid);
}

async function fbEnsureFriendCode(uid) {
  if (!FIREBASE_READY) return null;
  const snap = await firebase.firestore().collection('users').doc(uid).get();
  if (snap.exists && snap.data().friendCode) return snap.data().friendCode;
  let code, taken = true;
  while (taken) {
    code = _genCode();
    const cs = await firebase.firestore().collection('friendCodes').doc(code).get();
    taken = cs.exists;
  }
  await firebase.firestore().collection('friendCodes').doc(code).set({ uid });
  await firebase.firestore().collection('users').doc(uid).set({ friendCode: code }, { merge: true });
  return code;
}

async function fbGetUserByCode(code) {
  if (!FIREBASE_READY) return null;
  const cs = await firebase.firestore().collection('friendCodes').doc(code).get();
  if (!cs.exists) return null;
  const us = await firebase.firestore().collection('users').doc(cs.data().uid).get();
  return us.exists ? { uid: us.id, ...us.data() } : null;
}

async function fbGetUserPublic(uid) {
  if (!FIREBASE_READY) return null;
  const snap = await firebase.firestore().collection('users').doc(uid).get();
  return snap.exists ? { uid: snap.id, ...snap.data() } : null;
}

async function fbGetFriendship(uid1, uid2) {
  if (!FIREBASE_READY) return null;
  const snap = await firebase.firestore().collection('friendships').doc(_friendshipId(uid1, uid2)).get();
  return snap.exists ? snap.data() : null;
}

async function fbSendFriendRequest(fromUid, toUid) {
  if (!FIREBASE_READY) return;
  await firebase.firestore().collection('friendships').doc(_friendshipId(fromUid, toUid)).set({
    uids: [fromUid, toUid],
    status: 'pending',
    requestedBy: fromUid,
    requestedAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
}

async function fbAcceptFriendRequest(myUid, friendUid) {
  if (!FIREBASE_READY) return;
  await firebase.firestore().collection('friendships')
    .doc(_friendshipId(myUid, friendUid))
    .update({ status: 'accepted' });
}

async function fbGetFriendships(uid) {
  if (!FIREBASE_READY) return [];
  const snap = await firebase.firestore().collection('friendships')
    .where('uids', 'array-contains', uid).get();
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}
