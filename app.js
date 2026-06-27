'use strict';

/* ══════════════════════════════════════════
   VERB DATA
══════════════════════════════════════════ */
const LEVELS = [
  { id: 1, name: 'Débutant',      emoji: '🌱', color: '#00b894', min_stars_prev: 0 },
  { id: 2, name: 'En route !',    emoji: '🚀', color: '#0984e3', min_stars_prev: 1 },
  { id: 3, name: 'En progrès',    emoji: '⚡', color: '#6c5ce7', min_stars_prev: 1 },
  { id: 4, name: 'Avancé',        emoji: '🔥', color: '#e17055', min_stars_prev: 2 },
  { id: 5, name: 'Champion !',    emoji: '👑', color: '#fdcb6e', min_stars_prev: 2 },
];

const VERBS = [
  // ── NIVEAU 1 ──
  { id: 1,  level: 1, inf: 'be',      v2: 'was / were', v3: 'been',    fr: 'être',                note: 'I was, you were, he was…' },
  { id: 2,  level: 1, inf: 'have',    v2: 'had',        v3: 'had',     fr: 'avoir'   },
  { id: 3,  level: 1, inf: 'do',      v2: 'did',        v3: 'done',    fr: 'faire'   },
  { id: 4,  level: 1, inf: 'go',      v2: 'went',       v3: 'gone',    fr: 'aller'   },
  { id: 5,  level: 1, inf: 'come',    v2: 'came',       v3: 'come',    fr: 'venir',   note: 'v1 = v3 : come / came / come' },
  { id: 6,  level: 1, inf: 'see',     v2: 'saw',        v3: 'seen',    fr: 'voir'    },
  { id: 7,  level: 1, inf: 'get',     v2: 'got',        v3: 'got',     fr: 'obtenir / devenir' },
  { id: 8,  level: 1, inf: 'give',    v2: 'gave',       v3: 'given',   fr: 'donner'  },
  { id: 9,  level: 1, inf: 'take',    v2: 'took',       v3: 'taken',   fr: 'prendre' },
  { id: 10, level: 1, inf: 'know',    v2: 'knew',       v3: 'known',   fr: 'savoir / connaître' },
  // ── NIVEAU 2 ──
  { id: 11, level: 2, inf: 'say',     v2: 'said',       v3: 'said',    fr: 'dire'    },
  { id: 12, level: 2, inf: 'make',    v2: 'made',       v3: 'made',    fr: 'fabriquer / faire' },
  { id: 13, level: 2, inf: 'think',   v2: 'thought',    v3: 'thought', fr: 'penser'  },
  { id: 14, level: 2, inf: 'find',    v2: 'found',      v3: 'found',   fr: 'trouver' },
  { id: 15, level: 2, inf: 'tell',    v2: 'told',       v3: 'told',    fr: 'dire / raconter' },
  { id: 16, level: 2, inf: 'become',  v2: 'became',     v3: 'become',  fr: 'devenir', note: 'v1 = v3 : become / became / become' },
  { id: 17, level: 2, inf: 'leave',   v2: 'left',       v3: 'left',    fr: 'partir / laisser' },
  { id: 18, level: 2, inf: 'put',     v2: 'put',        v3: 'put',     fr: 'mettre',  note: 'Toutes les formes sont identiques !' },
  { id: 19, level: 2, inf: 'bring',   v2: 'brought',    v3: 'brought', fr: 'apporter' },
  { id: 20, level: 2, inf: 'write',   v2: 'wrote',      v3: 'written', fr: 'écrire'  },
  // ── NIVEAU 3 ──
  { id: 21, level: 3, inf: 'buy',     v2: 'bought',     v3: 'bought',  fr: 'acheter' },
  { id: 22, level: 3, inf: 'catch',   v2: 'caught',     v3: 'caught',  fr: 'attraper' },
  { id: 23, level: 3, inf: 'eat',     v2: 'ate',        v3: 'eaten',   fr: 'manger'  },
  { id: 24, level: 3, inf: 'fall',    v2: 'fell',       v3: 'fallen',  fr: 'tomber'  },
  { id: 25, level: 3, inf: 'feel',    v2: 'felt',       v3: 'felt',    fr: 'ressentir' },
  { id: 26, level: 3, inf: 'hear',    v2: 'heard',      v3: 'heard',   fr: 'entendre' },
  { id: 27, level: 3, inf: 'keep',    v2: 'kept',       v3: 'kept',    fr: 'garder'  },
  { id: 28, level: 3, inf: 'meet',    v2: 'met',        v3: 'met',     fr: 'rencontrer' },
  { id: 29, level: 3, inf: 'run',     v2: 'ran',        v3: 'run',     fr: 'courir',  note: 'v1 = v3 : run / ran / run' },
  { id: 30, level: 3, inf: 'send',    v2: 'sent',       v3: 'sent',    fr: 'envoyer' },
  // ── NIVEAU 4 ──
  { id: 31, level: 4, inf: 'break',   v2: 'broke',      v3: 'broken',  fr: 'casser'  },
  { id: 32, level: 4, inf: 'choose',  v2: 'chose',      v3: 'chosen',  fr: 'choisir' },
  { id: 33, level: 4, inf: 'drive',   v2: 'drove',      v3: 'driven',  fr: 'conduire' },
  { id: 34, level: 4, inf: 'fly',     v2: 'flew',       v3: 'flown',   fr: 'voler'   },
  { id: 35, level: 4, inf: 'forget',  v2: 'forgot',     v3: 'forgotten', fr: 'oublier' },
  { id: 36, level: 4, inf: 'grow',    v2: 'grew',       v3: 'grown',   fr: 'grandir / pousser' },
  { id: 37, level: 4, inf: 'hide',    v2: 'hid',        v3: 'hidden',  fr: 'cacher'  },
  { id: 38, level: 4, inf: 'read',    v2: 'read',       v3: 'read',    fr: 'lire',    note: 'Même orthographe mais se prononce "red" au passé !' },
  { id: 39, level: 4, inf: 'speak',   v2: 'spoke',      v3: 'spoken',  fr: 'parler'  },
  { id: 40, level: 4, inf: 'swim',    v2: 'swam',       v3: 'swum',    fr: 'nager'   },
  // ── NIVEAU 5 ──
  { id: 41, level: 5, inf: 'begin',   v2: 'began',      v3: 'begun',   fr: 'commencer' },
  { id: 42, level: 5, inf: 'bite',    v2: 'bit',        v3: 'bitten',  fr: 'mordre'  },
  { id: 43, level: 5, inf: 'blow',    v2: 'blew',       v3: 'blown',   fr: 'souffler' },
  { id: 44, level: 5, inf: 'draw',    v2: 'drew',       v3: 'drawn',   fr: 'dessiner' },
  { id: 45, level: 5, inf: 'drink',   v2: 'drank',      v3: 'drunk',   fr: 'boire'   },
  { id: 46, level: 5, inf: 'ride',    v2: 'rode',       v3: 'ridden',  fr: 'faire du vélo / cheval' },
  { id: 47, level: 5, inf: 'ring',    v2: 'rang',       v3: 'rung',    fr: 'sonner'  },
  { id: 48, level: 5, inf: 'sing',    v2: 'sang',       v3: 'sung',    fr: 'chanter' },
  { id: 49, level: 5, inf: 'steal',   v2: 'stole',      v3: 'stolen',  fr: 'voler (dérober)' },
  { id: 50, level: 5, inf: 'throw',   v2: 'threw',      v3: 'thrown',  fr: 'lancer / jeter' },
];

const QUESTIONS_PER_QUIZ = 12;

const MESSAGES_CORRECT = [
  'Excellent ! 🎉', 'Bravo ! 👏', 'C\'est parfait ! ⭐', 'Super ! 🔥',
  'Génial ! 🚀', 'Bien joué ! 💪', 'Parfait ! 🏆', 'Impressionnant ! 😎',
];
const MESSAGES_WRONG = [
  'Pas tout à fait…', 'Presque ! Continue…', 'Oups !', 'Essaie encore !',
];

/* ══════════════════════════════════════════
   STATE & PERSISTENCE
══════════════════════════════════════════ */
const STORAGE_KEY = 'verbmaster_v1';

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (_) {}
  return { xp: 0, stars: {}, mastery: {} };
}

function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state.save)); } catch (_) {}
}

const state = {
  save: loadState(),
  screen: 'home',
  levelId: null,
  mode: null,
  flashcardIndex: 0,
  quiz: null,
};

function getStars(levelId) { return state.save.stars[levelId] || 0; }
function getMastery(verbId) { return state.save.mastery[verbId] || 0; }

function setStars(levelId, n) {
  const prev = getStars(levelId);
  if (n > prev) {
    state.save.stars[levelId] = n;
    saveState();
    return true; // new record
  }
  return false;
}

function addXP(n) { state.save.xp += n; saveState(); }

function updateMastery(verbId, correct) {
  const cur = getMastery(verbId);
  state.save.mastery[verbId] = correct ? Math.min(5, cur + 1) : Math.max(0, cur - 1);
  saveState();
}

function isLevelUnlocked(levelId) {
  if (levelId === 1) return true;
  const prev = levelId - 1;
  const required = LEVELS[levelId - 1].min_stars_prev;
  return getStars(prev) >= required;
}

function getTotalMastered() {
  return VERBS.filter(v => getMastery(v.id) >= 3).length;
}

/* ══════════════════════════════════════════
   QUIZ GENERATION
══════════════════════════════════════════ */
const Q_TYPES = {
  TRANSL_FR_EN:    'TRANSL_FR_EN',    // "Comment dit-on X en anglais ?"
  TRANSL_EN_FR:    'TRANSL_EN_FR',    // "Que veut dire X en français ?"
  V2_QCM:          'V2_QCM',          // "Quel est le prétérit de X ?"
  V3_QCM:          'V3_QCM',          // "Quel est le participe passé de X ?"
  TYPE_V2:         'TYPE_V2',         // Écrire le prétérit
  TYPE_V3:         'TYPE_V3',         // Écrire le participe passé
};

function pickRandom(arr, n, exclude = []) {
  const pool = arr.filter(x => !exclude.includes(x));
  const shuffled = [...pool].sort(() => Math.random() - .5);
  return shuffled.slice(0, n);
}

function buildChoices(correctVerb, field, allVerbs, n = 3) {
  const correctVal = correctVerb[field];
  const distractors = pickRandom(
    allVerbs.filter(v => v.id !== correctVerb.id && v[field] !== correctVal),
    n,
  ).map(v => v[field]);
  const all = [correctVal, ...distractors].sort(() => Math.random() - .5);
  return { choices: all, correct: correctVal };
}

function generateQuiz(levelId) {
  const levelVerbs = VERBS.filter(v => v.level === levelId);
  // also pull a few from previous levels for review
  const reviewVerbs = levelId > 1
    ? VERBS.filter(v => v.level < levelId && getMastery(v.id) < 4).slice(0, 5)
    : [];
  const pool = [...levelVerbs, ...reviewVerbs];
  const allVerbs = VERBS;

  const typeWeights = [
    { type: Q_TYPES.TRANSL_FR_EN, w: 2 },
    { type: Q_TYPES.TRANSL_EN_FR, w: 1 },
    { type: Q_TYPES.V2_QCM,       w: 3 },
    { type: Q_TYPES.V3_QCM,       w: 2 },
    { type: Q_TYPES.TYPE_V2,      w: 2 },
    { type: Q_TYPES.TYPE_V3,      w: 2 },
  ];
  const typePool = typeWeights.flatMap(t => Array(t.w).fill(t.type));

  const questions = [];
  const verbUsage = {};

  for (let i = 0; i < QUESTIONS_PER_QUIZ; i++) {
    // prefer less-mastered verbs
    const sorted = [...pool].sort((a, b) => {
      const useA = (verbUsage[a.id] || 0) * 10 + getMastery(a.id);
      const useB = (verbUsage[b.id] || 0) * 10 + getMastery(b.id);
      return useA - useB;
    });
    const verb = sorted[Math.floor(Math.random() * Math.min(4, sorted.length))];
    verbUsage[verb.id] = (verbUsage[verb.id] || 0) + 1;

    const qtype = typePool[Math.floor(Math.random() * typePool.length)];

    let q = { type: qtype, verb };

    if (qtype === Q_TYPES.TRANSL_FR_EN) {
      const { choices, correct } = buildChoices(verb, 'inf', allVerbs);
      q = { ...q, choices, correct, question: `Comment dit-on en anglais :`, highlight: verb.fr };
    } else if (qtype === Q_TYPES.TRANSL_EN_FR) {
      const { choices, correct } = buildChoices(verb, 'fr', allVerbs);
      q = { ...q, choices, correct, question: `Que veut dire ce verbe en français ?`, highlight: verb.inf };
    } else if (qtype === Q_TYPES.V2_QCM) {
      const { choices, correct } = buildChoices(verb, 'v2', allVerbs);
      q = { ...q, choices, correct, question: `Quel est le prétérit de`, highlight: verb.inf };
    } else if (qtype === Q_TYPES.V3_QCM) {
      const { choices, correct } = buildChoices(verb, 'v3', allVerbs);
      q = { ...q, choices, correct, question: `Quel est le participe passé de`, highlight: verb.inf };
    } else if (qtype === Q_TYPES.TYPE_V2) {
      q = { ...q, correct: verb.v2, question: `Écris le prétérit de`, highlight: verb.inf };
    } else if (qtype === Q_TYPES.TYPE_V3) {
      q = { ...q, correct: verb.v3, question: `Écris le participe passé de`, highlight: verb.inf };
    }

    questions.push(q);
  }

  return {
    levelId,
    questions,
    currentIndex: 0,
    correctCount: 0,
    streak: 0,
    maxStreak: 0,
    answered: false,
    xpEarned: 0,
  };
}

function checkAnswer(quiz, answer) {
  const q = quiz.questions[quiz.currentIndex];
  const correct = q.correct;
  const norm = s => s.toLowerCase().trim().replace(/^to /, '').replace(/\s*\/\s*/g, ' / ');
  const given = norm(answer);
  // Accept full string match (e.g. "was / were")
  if (given === norm(correct)) return true;
  // Accept any individual part (e.g. "was" or "were" alone)
  return correct.split('/').map(s => norm(s.trim())).some(c => c === given);
}

/* ══════════════════════════════════════════
   RENDER HELPERS
══════════════════════════════════════════ */
const $ = s => document.querySelector(s);
const app = () => document.getElementById('app');

function renderHeader(subtitle = '') {
  return `
    <div class="header">
      <div class="logo">📚</div>
      <div>
        <h1>VerbMaster</h1>
        ${subtitle ? `<div class="subtitle">${subtitle}</div>` : ''}
      </div>
      <div class="xp-badge">⭐ ${state.save.xp} XP</div>
    </div>`;
}

function starsHTML(n, max = 3) {
  return Array.from({ length: max }, (_, i) =>
    `<span class="star${i < n ? ' filled' : ''}">★</span>`
  ).join('');
}

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

/* ══════════════════════════════════════════
   HOME SCREEN
══════════════════════════════════════════ */
function renderHome() {
  const totalStars = Object.values(state.save.stars).reduce((a, b) => a + b, 0);
  const mastered = getTotalMastered();

  const levelsHTML = LEVELS.map(lv => {
    const verbs = VERBS.filter(v => v.level === lv.id);
    const unlocked = isLevelUnlocked(lv.id);
    const stars = getStars(lv.id);
    const prevCompleted = lv.id > 1 && getStars(lv.id - 1) > 0;

    return `
      <div class="level-card ${unlocked ? '' : 'locked'} ${stars > 0 ? 'active' : ''}"
           onclick="${unlocked ? `selectLevel(${lv.id})` : 'showLocked()'}">
        <div class="level-ribbon" style="background:${lv.color}">
          ${lv.emoji}
        </div>
        <div class="level-num">Niveau ${lv.id}</div>
        <div class="level-name">${lv.name}</div>
        <div class="level-count">${verbs.length} verbes</div>
        <div class="stars">${starsHTML(stars)}</div>
        ${!unlocked ? '<div class="lock-icon">🔒</div>' : ''}
      </div>`;
  }).join('');

  app().innerHTML = `
    ${renderHeader('Verbes irréguliers anglais')}
    <div class="home-container">
      <div class="home-hero">
        <div class="big-emoji">🏆</div>
        <h2>Apprends les verbes irréguliers !</h2>
        <p>5 niveaux · 50 verbes · Des défis amusants</p>
      </div>

      <div class="stats-bar">
        <div class="stat-card">
          <div class="stat-value">${mastered}</div>
          <div class="stat-label">verbes maîtrisés</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${totalStars}</div>
          <div class="stat-label">étoiles gagnées</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${state.save.xp}</div>
          <div class="stat-label">points XP</div>
        </div>
      </div>

      <div class="section-title">📖 Choisis ton niveau</div>
      <div class="levels-grid">${levelsHTML}</div>
    </div>`;
}

function showLocked() {
  alert('🔒 Débloque ce niveau en obtenant au moins ⭐ dans le niveau précédent !');
}

function selectLevel(levelId) {
  state.levelId = levelId;
  renderLevelMenu(levelId);
}

/* ══════════════════════════════════════════
   LEVEL MENU (Study or Quiz)
══════════════════════════════════════════ */
function renderLevelMenu(levelId) {
  const lv = LEVELS[levelId - 1];
  const stars = getStars(levelId);
  const verbs = VERBS.filter(v => v.level === levelId);

  app().innerHTML = `
    ${renderHeader(`Niveau ${levelId} – ${lv.name}`)}
    <div class="screen-container">
      <button class="back-btn" onclick="renderHome()">← Accueil</button>
      <div class="screen-title">${lv.emoji} Niveau ${levelId} – ${lv.name}</div>
      <div class="screen-subtitle">
        ${verbs.length} verbes à apprendre &nbsp;·&nbsp;
        <span class="stars">${starsHTML(stars)}</span>
      </div>

      <div class="mode-choice">
        <div class="mode-card" onclick="startStudy(${levelId})">
          <div class="mode-icon">📖</div>
          <div class="mode-name">Apprendre</div>
          <div class="mode-desc">Fiche mémo avec toutes les formes</div>
        </div>
        <div class="mode-card" onclick="startQuiz(${levelId})">
          <div class="mode-icon">⚡</div>
          <div class="mode-name">S'entraîner</div>
          <div class="mode-desc">${QUESTIONS_PER_QUIZ} questions – gagne des étoiles !</div>
        </div>
      </div>

      <div class="section-title mt-24">📋 Liste des verbes</div>
      <div class="verb-table-wrap">
        <table class="verb-table">
          <thead>
            <tr>
              <th>Infinitif</th>
              <th>Prétérit</th>
              <th>Participe passé</th>
              <th>Français</th>
              <th>Maîtrise</th>
            </tr>
          </thead>
          <tbody>
            ${verbs.map(v => {
              const m = getMastery(v.id);
              const dots = Array.from({ length: 5 }, (_, i) =>
                `<span class="mastery-dot${i < m ? ' filled' : ''}"></span>`
              ).join('');
              return `
                <tr>
                  <td class="td-inf">to ${v.inf}</td>
                  <td class="td-past">${v.v2}</td>
                  <td class="td-pp">${v.v3}</td>
                  <td class="td-fr">${v.fr}</td>
                  <td class="td-mastery">${dots}</td>
                </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>`;
}

/* ══════════════════════════════════════════
   STUDY MODE (Flashcards)
══════════════════════════════════════════ */
function startStudy(levelId) {
  state.levelId = levelId;
  state.flashcardIndex = 0;
  renderFlashcard();
}

function renderFlashcard() {
  const verbs = VERBS.filter(v => v.level === state.levelId);
  const idx   = state.flashcardIndex;
  const verb  = verbs[idx];
  const lv    = LEVELS[state.levelId - 1];
  const total = verbs.length;
  const pct   = Math.round(((idx + 1) / total) * 100);

  const isFirst = idx === 0;
  const isLast  = idx === total - 1;

  app().innerHTML = `
    ${renderHeader(`Niveau ${state.levelId} – Apprendre`)}
    <div class="screen-container">
      <button class="back-btn" onclick="renderLevelMenu(${state.levelId})">← Retour</button>

      <div class="flashcard-nav">
        <span class="flashcard-counter">${idx + 1} / ${total}</span>
        <div class="fc-progress">
          <div class="fc-progress-fill" style="width:${pct}%"></div>
        </div>
        <span class="pill">${lv.emoji} Niv. ${state.levelId}</span>
      </div>

      <div class="flashcard">
        <div class="fc-french">🇫🇷 En français</div>
        <div class="fc-translation">${verb.fr}</div>
        <div class="fc-infinitive">to ${verb.inf}</div>
        <div class="fc-type">verbe irrégulier</div>

        <div class="fc-forms">
          <div class="fc-form v1">
            <div class="form-label">Infinitif</div>
            <div class="form-value">${verb.inf}</div>
          </div>
          <div class="fc-form v2">
            <div class="form-label">Prétérit</div>
            <div class="form-value">${verb.v2}</div>
          </div>
          <div class="fc-form v3">
            <div class="form-label">Participe passé</div>
            <div class="form-value">${verb.v3}</div>
          </div>
        </div>

        ${verb.note ? `<div class="fc-note">💡 ${verb.note}</div>` : ''}
      </div>

      <div class="flashcard-btns mt-16">
        <button class="btn btn-secondary" onclick="prevCard()" ${isFirst ? 'disabled style="opacity:.4"' : ''}>
          ← Précédent
        </button>
        ${isLast
          ? `<button class="btn btn-green" onclick="startQuiz(${state.levelId})">
               S'entraîner ⚡
             </button>`
          : `<button class="btn btn-primary" onclick="nextCard()">
               Suivant →
             </button>`
        }
      </div>
    </div>`;
}

function prevCard() {
  if (state.flashcardIndex > 0) { state.flashcardIndex--; renderFlashcard(); }
}
function nextCard() {
  const verbs = VERBS.filter(v => v.level === state.levelId);
  if (state.flashcardIndex < verbs.length - 1) { state.flashcardIndex++; renderFlashcard(); }
}

/* ══════════════════════════════════════════
   QUIZ MODE
══════════════════════════════════════════ */
function startQuiz(levelId) {
  state.levelId = levelId;
  state.quiz = generateQuiz(levelId);
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const quiz = state.quiz;
  const q    = quiz.questions[quiz.currentIndex];
  const pct  = Math.round((quiz.currentIndex / quiz.questions.length) * 100);

  const streakHTML = quiz.streak >= 2
    ? `<span class="streak-badge">🔥 ${quiz.streak}</span>`
    : '';

  let questionBody = '';

  if (q.type === Q_TYPES.TYPE_V2 || q.type === Q_TYPES.TYPE_V3) {
    questionBody = `
      <div class="type-in-form">
        <input type="text" class="type-in-input" id="typeInput"
               placeholder="Tape ta réponse…"
               autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
               onkeydown="if(event.key==='Enter') submitTypeIn()">
        <button class="type-in-submit" id="submitBtn" onclick="submitTypeIn()">Valider ✓</button>
      </div>`;
  } else {
    const letters = ['A', 'B', 'C', 'D'];
    questionBody = `
      <div class="choices">
        ${q.choices.map((c, i) => `
          <button class="choice-btn" onclick="handleChoice(this, '${escapeQuote(c)}')" data-val="${escapeAttr(c)}">
            <span class="choice-letter">${letters[i]}</span>
            ${c}
          </button>`).join('')}
      </div>`;
  }

  const typeLabel = {
    [Q_TYPES.TRANSL_FR_EN]: '🇬🇧 Traduction FR → EN',
    [Q_TYPES.TRANSL_EN_FR]: '🇫🇷 Traduction EN → FR',
    [Q_TYPES.V2_QCM]:       '📝 Prétérit (passé simple)',
    [Q_TYPES.V3_QCM]:       '📝 Participe passé',
    [Q_TYPES.TYPE_V2]:      '✏️ Écris le prétérit',
    [Q_TYPES.TYPE_V3]:      '✏️ Écris le participe passé',
  }[q.type];

  app().innerHTML = `
    ${renderHeader(`Niveau ${state.levelId} – S'entraîner`)}
    <div class="screen-container">
      <button class="back-btn" onclick="renderLevelMenu(${state.levelId})">← Retour</button>

      <div class="quiz-header">
        <div class="quiz-progress-bar">
          <div class="quiz-progress-fill" style="width:${pct}%"></div>
        </div>
        <div class="quiz-meta">
          <span class="quiz-question-num">Question ${quiz.currentIndex + 1} / ${quiz.questions.length}</span>
          <span class="quiz-score-live">
            ✅ ${quiz.correctCount} correctes
            ${streakHTML}
          </span>
        </div>
      </div>

      <div class="question-card">
        <div class="question-type-label">${typeLabel}</div>
        <div class="question-text">
          ${q.question} <span style="color:var(--purple)">${q.highlight}</span> ?
        </div>
      </div>

      ${questionBody}

      <div id="feedbackArea"></div>
      <div id="nextArea"></div>
    </div>`;

  if (q.type === Q_TYPES.TYPE_V2 || q.type === Q_TYPES.TYPE_V3) {
    document.getElementById('typeInput')?.focus();
  }
}

function escapeQuote(s) { return s.replace(/'/g, "\\'"); }
function escapeAttr(s)  { return s.replace(/"/g, '&quot;'); }

function handleChoice(btn, value) {
  const quiz = state.quiz;
  if (quiz.answered) return;
  quiz.answered = true;

  const q       = quiz.questions[quiz.currentIndex];
  const isRight = checkAnswer(quiz, value);

  document.querySelectorAll('.choice-btn').forEach(b => {
    b.disabled = true;
    if (b.dataset.val === q.correct) b.classList.add('correct');
  });
  if (!isRight) btn.classList.add('wrong');

  showFeedback(isRight, q.correct);
}

function submitTypeIn() {
  const quiz = state.quiz;
  if (quiz.answered) return;

  const input = document.getElementById('typeInput');
  const value = input.value.trim();
  if (!value) return;

  quiz.answered = true;
  const q       = quiz.questions[quiz.currentIndex];
  const isRight = checkAnswer(quiz, value);

  input.disabled = true;
  document.getElementById('submitBtn').disabled = true;
  input.classList.add(isRight ? 'correct' : 'wrong');

  showFeedback(isRight, q.correct);
}

function showFeedback(isRight, correctAnswer) {
  const quiz = state.quiz;
  const q    = quiz.questions[quiz.currentIndex];

  if (isRight) {
    quiz.correctCount++;
    quiz.streak++;
    quiz.maxStreak = Math.max(quiz.maxStreak, quiz.streak);
    const xp = 10 + (quiz.streak >= 3 ? 5 : 0);
    quiz.xpEarned += xp;
    addXP(xp);
    updateMastery(q.verb.id, true);
  } else {
    quiz.streak = 0;
    updateMastery(q.verb.id, false);
  }

  const msg = isRight ? pick(MESSAGES_CORRECT) : pick(MESSAGES_WRONG);

  const area = document.getElementById('feedbackArea');
  area.innerHTML = `
    <div class="feedback-bar ${isRight ? 'correct' : 'wrong'} mt-16">
      <span class="fb-icon">${isRight ? '🎉' : '😬'}</span>
      <div>
        <div>${msg}</div>
        ${!isRight ? `<div class="fb-answer">Bonne réponse : <strong>${correctAnswer}</strong></div>` : ''}
      </div>
    </div>`;

  const nextArea = document.getElementById('nextArea');
  const isLast = quiz.currentIndex === quiz.questions.length - 1;
  nextArea.innerHTML = `
    <button class="next-btn mt-8" onclick="${isLast ? 'showResults()' : 'nextQuestion()'}">
      ${isLast ? 'Voir mon score 🏆' : 'Question suivante →'}
    </button>`;
}

function nextQuestion() {
  const quiz = state.quiz;
  quiz.currentIndex++;
  quiz.answered = false;
  renderQuizQuestion();
}

/* ══════════════════════════════════════════
   RESULTS
══════════════════════════════════════════ */
function showResults() {
  const quiz    = state.quiz;
  const total   = quiz.questions.length;
  const correct = quiz.correctCount;
  const pct     = Math.round((correct / total) * 100);

  const earnedStars = pct >= 90 ? 3 : pct >= 65 ? 2 : pct >= 40 ? 1 : 0;
  const newRecord   = setStars(quiz.levelId, earnedStars);
  const nextLevel   = quiz.levelId + 1;
  const justUnlocked = earnedStars >= 1 && nextLevel <= 5 && !isLevelUnlocked(nextLevel)
    ? false // will be unlocked now
    : false;
  // re-check after setting stars
  const unlockedNext = nextLevel <= 5 && isLevelUnlocked(nextLevel) && getStars(quiz.levelId - 1 || 1) >= 0;

  const emoji = pct >= 90 ? '🏆' : pct >= 65 ? '🎉' : pct >= 40 ? '👍' : '💪';
  const title = pct >= 90 ? 'Parfait !' : pct >= 65 ? 'Bien joué !' : pct >= 40 ? 'Pas mal !' : 'Continue !';
  const subtitle = pct >= 90
    ? 'Tu maîtrises ces verbes !'
    : pct >= 65
    ? 'Tu progresses vraiment bien !'
    : pct >= 40
    ? 'Encore un peu d\'entraînement !'
    : 'Revois les fiches et réessaie !';

  const starsAnim = Array.from({ length: 3 }, (_, i) =>
    `<span class="results-star${i < earnedStars ? ' filled' : ''}" style="animation-delay:${i * .15}s">⭐</span>`
  ).join('');

  const nextLevelData = nextLevel <= 5 ? LEVELS[nextLevel - 1] : null;
  const showUnlock = nextLevelData && isLevelUnlocked(nextLevel) && newRecord && earnedStars >= 1;

  app().innerHTML = `
    ${renderHeader('Résultats')}
    <div class="screen-container">
      <div class="results-card">
        <div class="results-emoji">${emoji}</div>
        <div class="results-title">${title}</div>
        <div class="results-subtitle">${subtitle}</div>

        <div class="results-stars">${starsAnim}</div>

        <div class="results-score-big">${pct}%</div>
        <div class="results-score-label">${correct} / ${total} réponses correctes</div>

        ${showUnlock ? `
          <div class="unlock-banner">
            <span class="unlock-icon">🔓</span>
            <div>
              <div>Niveau ${nextLevel} débloqué !</div>
              <div style="font-size:13px;font-weight:500;opacity:.9">${nextLevelData.emoji} ${nextLevelData.name}</div>
            </div>
          </div>` : ''}

        <div class="results-breakdown">
          <div class="breakdown-row">
            <span class="breakdown-label">Bonnes réponses</span>
            <span class="breakdown-value" style="color:var(--green)">✅ ${correct}</span>
          </div>
          <div class="breakdown-row">
            <span class="breakdown-label">Erreurs</span>
            <span class="breakdown-value" style="color:var(--red)">❌ ${total - correct}</span>
          </div>
          <div class="breakdown-row">
            <span class="breakdown-label">Meilleure série</span>
            <span class="breakdown-value">🔥 ${quiz.maxStreak}</span>
          </div>
          <div class="breakdown-row">
            <span class="breakdown-label">XP gagnés</span>
            <span class="breakdown-value" style="color:var(--purple)">⭐ +${quiz.xpEarned}</span>
          </div>
        </div>

        <div class="results-btns">
          <button class="btn btn-primary" onclick="startQuiz(${quiz.levelId})">
            🔄 Réessayer
          </button>
          <button class="btn btn-secondary" onclick="startStudy(${quiz.levelId})">
            📖 Revoir les fiches
          </button>
          <button class="btn btn-secondary" onclick="renderHome()">
            🏠 Accueil
          </button>
        </div>
      </div>
    </div>`;
}

/* ══════════════════════════════════════════
   INIT
══════════════════════════════════════════ */
renderHome();
