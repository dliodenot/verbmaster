'use strict';

/* ══════════════════════════════════════════
   VERB DATA
══════════════════════════════════════════ */
const CHAPTERS = [
  { id: 1, name: 'Chapitre 1', subtitle: 'Les essentiels',   emoji: '📗', desc: '50 verbes incontournables' },
  { id: 2, name: 'Chapitre 2', subtitle: 'Intermédiaire',    emoji: '📘', desc: '50 verbes pour aller plus loin' },
  { id: 3, name: 'Chapitre 3', subtitle: 'Maîtrise totale',  emoji: '📕', desc: '50 verbes pour tout couvrir' },
];

const LEVELS = [
  // ── Chapitre 1 ──
  { id: 1,  chapter: 1, name: 'Débutant',      emoji: '🌱', color: '#00b894' },
  { id: 2,  chapter: 1, name: 'En route !',    emoji: '🚀', color: '#0984e3' },
  { id: 3,  chapter: 1, name: 'En progrès',    emoji: '⚡', color: '#6c5ce7' },
  { id: 4,  chapter: 1, name: 'Avancé',        emoji: '🔥', color: '#e17055' },
  { id: 5,  chapter: 1, name: 'Champion !',    emoji: '👑', color: '#fdcb6e' },
  // ── Chapitre 2 ──
  { id: 6,  chapter: 2, name: 'Bâtisseur',     emoji: '🏗️', color: '#e17055' },
  { id: 7,  chapter: 2, name: 'Explorateur',   emoji: '🧭', color: '#fd79a8' },
  { id: 8,  chapter: 2, name: 'Conquérant',    emoji: '⚔️', color: '#a29bfe' },
  { id: 9,  chapter: 2, name: 'Maestro',       emoji: '🎯', color: '#55efc4' },
  { id: 10, chapter: 2, name: 'Légende',       emoji: '🌟', color: '#ffeaa7' },
  // ── Chapitre 3 ──
  { id: 11, chapter: 3, name: 'Virtuose',      emoji: '🎼', color: '#fab1a0' },
  { id: 12, chapter: 3, name: 'Encyclopédiste',emoji: '📚', color: '#81ecec' },
  { id: 13, chapter: 3, name: 'Expert',        emoji: '🧠', color: '#6c5ce7' },
  { id: 14, chapter: 3, name: 'Élite',         emoji: '💎', color: '#2d3436' },
  { id: 15, chapter: 3, name: 'Ultime',        emoji: '🏅', color: '#fdcb6e' },
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
  { id: 50, level: 5,  inf: 'throw',      v2: 'threw',      v3: 'thrown',    fr: 'lancer / jeter' },
  // ── NIVEAU 6 ──
  { id: 51, level: 6,  inf: 'beat',       v2: 'beat',       v3: 'beaten',    fr: 'battre', note: 'v1 = v2 : beat / beat / beaten' },
  { id: 52, level: 6,  inf: 'bend',       v2: 'bent',       v3: 'bent',      fr: 'plier / courber' },
  { id: 53, level: 6,  inf: 'build',      v2: 'built',      v3: 'built',     fr: 'construire' },
  { id: 54, level: 6,  inf: 'burn',       v2: 'burned / burnt', v3: 'burned / burnt', fr: 'brûler' },
  { id: 55, level: 6,  inf: 'cut',        v2: 'cut',        v3: 'cut',       fr: 'couper', note: 'Toutes les formes identiques !' },
  { id: 56, level: 6,  inf: 'deal',       v2: 'dealt',      v3: 'dealt',     fr: 'traiter / distribuer' },
  { id: 57, level: 6,  inf: 'dig',        v2: 'dug',        v3: 'dug',       fr: 'creuser' },
  { id: 58, level: 6,  inf: 'feed',       v2: 'fed',        v3: 'fed',       fr: 'nourrir' },
  { id: 59, level: 6,  inf: 'fight',      v2: 'fought',     v3: 'fought',    fr: 'se battre' },
  { id: 60, level: 6,  inf: 'hang',       v2: 'hung',       v3: 'hung',      fr: 'accrocher / pendre' },
  // ── NIVEAU 7 ──
  { id: 61, level: 7,  inf: 'hold',       v2: 'held',       v3: 'held',      fr: 'tenir' },
  { id: 62, level: 7,  inf: 'hurt',       v2: 'hurt',       v3: 'hurt',      fr: 'blesser / faire mal', note: 'Toutes les formes identiques !' },
  { id: 63, level: 7,  inf: 'lay',        v2: 'laid',       v3: 'laid',      fr: 'poser / pondre' },
  { id: 64, level: 7,  inf: 'lead',       v2: 'led',        v3: 'led',       fr: 'diriger / mener' },
  { id: 65, level: 7,  inf: 'lend',       v2: 'lent',       v3: 'lent',      fr: 'prêter' },
  { id: 66, level: 7,  inf: 'let',        v2: 'let',        v3: 'let',       fr: 'laisser / permettre', note: 'Toutes les formes identiques !' },
  { id: 67, level: 7,  inf: 'lie',        v2: 'lay',        v3: 'lain',      fr: 's\'allonger', note: 'Ne pas confondre avec "lay" !' },
  { id: 68, level: 7,  inf: 'lose',       v2: 'lost',       v3: 'lost',      fr: 'perdre' },
  { id: 69, level: 7,  inf: 'mean',       v2: 'meant',      v3: 'meant',     fr: 'signifier / vouloir dire' },
  { id: 70, level: 7,  inf: 'pay',        v2: 'paid',       v3: 'paid',      fr: 'payer' },
  // ── NIVEAU 8 ──
  { id: 71, level: 8,  inf: 'rise',       v2: 'rose',       v3: 'risen',     fr: 'se lever / monter' },
  { id: 72, level: 8,  inf: 'set',        v2: 'set',        v3: 'set',       fr: 'fixer / régler', note: 'Toutes les formes identiques !' },
  { id: 73, level: 8,  inf: 'shake',      v2: 'shook',      v3: 'shaken',    fr: 'secouer' },
  { id: 74, level: 8,  inf: 'shine',      v2: 'shone',      v3: 'shone',     fr: 'briller' },
  { id: 75, level: 8,  inf: 'sit',        v2: 'sat',        v3: 'sat',       fr: 's\'asseoir' },
  { id: 76, level: 8,  inf: 'sleep',      v2: 'slept',      v3: 'slept',     fr: 'dormir' },
  { id: 77, level: 8,  inf: 'slide',      v2: 'slid',       v3: 'slid',      fr: 'glisser' },
  { id: 78, level: 8,  inf: 'spend',      v2: 'spent',      v3: 'spent',     fr: 'dépenser / passer (du temps)' },
  { id: 79, level: 8,  inf: 'spread',     v2: 'spread',     v3: 'spread',    fr: 'répandre / étaler', note: 'Toutes les formes identiques !' },
  { id: 80, level: 8,  inf: 'stand',      v2: 'stood',      v3: 'stood',     fr: 'se tenir debout' },
  // ── NIVEAU 9 ──
  { id: 81, level: 9,  inf: 'strike',     v2: 'struck',     v3: 'struck',    fr: 'frapper' },
  { id: 82, level: 9,  inf: 'sweep',      v2: 'swept',      v3: 'swept',     fr: 'balayer' },
  { id: 83, level: 9,  inf: 'swing',      v2: 'swung',      v3: 'swung',     fr: 'se balancer' },
  { id: 84, level: 9,  inf: 'teach',      v2: 'taught',     v3: 'taught',    fr: 'enseigner' },
  { id: 85, level: 9,  inf: 'tear',       v2: 'tore',       v3: 'torn',      fr: 'déchirer' },
  { id: 86, level: 9,  inf: 'understand', v2: 'understood', v3: 'understood', fr: 'comprendre' },
  { id: 87, level: 9,  inf: 'wake',       v2: 'woke',       v3: 'woken',     fr: 'se réveiller' },
  { id: 88, level: 9,  inf: 'wear',       v2: 'wore',       v3: 'worn',      fr: 'porter (vêtement)' },
  { id: 89, level: 9,  inf: 'weep',       v2: 'wept',       v3: 'wept',      fr: 'pleurer' },
  { id: 90, level: 9,  inf: 'win',        v2: 'won',        v3: 'won',       fr: 'gagner' },
  // ── NIVEAU 10 ──
  { id: 91,  level: 10, inf: 'cast',      v2: 'cast',       v3: 'cast',      fr: 'lancer / projeter', note: 'Toutes les formes identiques !' },
  { id: 92,  level: 10, inf: 'forbid',    v2: 'forbade',    v3: 'forbidden', fr: 'interdire' },
  { id: 93,  level: 10, inf: 'freeze',    v2: 'froze',      v3: 'frozen',    fr: 'geler / congeler' },
  { id: 94,  level: 10, inf: 'leap',      v2: 'leapt',      v3: 'leapt',     fr: 'bondir / sauter' },
  { id: 95,  level: 10, inf: 'shed',      v2: 'shed',       v3: 'shed',      fr: 'perdre (poils, larmes)', note: 'Toutes les formes identiques !' },
  { id: 96,  level: 10, inf: 'shoot',     v2: 'shot',       v3: 'shot',      fr: 'tirer (arme)' },
  { id: 97,  level: 10, inf: 'show',      v2: 'showed',     v3: 'shown',     fr: 'montrer' },
  { id: 98,  level: 10, inf: 'split',     v2: 'split',      v3: 'split',     fr: 'diviser / fendre', note: 'Toutes les formes identiques !' },
  { id: 99,  level: 10, inf: 'wind',      v2: 'wound',      v3: 'wound',     fr: 'enrouler / remonter' },
  { id: 100, level: 10, inf: 'withdraw',  v2: 'withdrew',   v3: 'withdrawn', fr: 'retirer / se retirer' },
  // ── NIVEAU 11 ──
  { id: 101, level: 11, inf: 'arise',     v2: 'arose',      v3: 'arisen',    fr: 'survenir / se lever' },
  { id: 102, level: 11, inf: 'bear',      v2: 'bore',       v3: 'borne',     fr: 'porter / supporter' },
  { id: 103, level: 11, inf: 'bind',      v2: 'bound',      v3: 'bound',     fr: 'lier / attacher' },
  { id: 104, level: 11, inf: 'breed',     v2: 'bred',       v3: 'bred',      fr: 'élever (animaux) / reproduire' },
  { id: 105, level: 11, inf: 'burst',     v2: 'burst',      v3: 'burst',     fr: 'éclater / exploser', note: 'Toutes les formes identiques !' },
  { id: 106, level: 11, inf: 'creep',     v2: 'crept',      v3: 'crept',     fr: 'ramper / se glisser' },
  { id: 107, level: 11, inf: 'dream',     v2: 'dreamt',     v3: 'dreamt',    fr: 'rêver' },
  { id: 108, level: 11, inf: 'flee',      v2: 'fled',       v3: 'fled',      fr: 'fuir / s\'enfuir' },
  { id: 109, level: 11, inf: 'fling',     v2: 'flung',      v3: 'flung',     fr: 'jeter violemment' },
  { id: 110, level: 11, inf: 'kneel',     v2: 'knelt',      v3: 'knelt',     fr: 's\'agenouiller' },
  // ── NIVEAU 12 ──
  { id: 111, level: 12, inf: 'lean',      v2: 'leant',      v3: 'leant',     fr: 's\'appuyer / se pencher' },
  { id: 112, level: 12, inf: 'light',     v2: 'lit',        v3: 'lit',       fr: 'allumer / éclairer' },
  { id: 113, level: 12, inf: 'overcome',  v2: 'overcame',   v3: 'overcome',  fr: 'surmonter / vaincre' },
  { id: 114, level: 12, inf: 'prove',     v2: 'proved',     v3: 'proven',    fr: 'prouver' },
  { id: 115, level: 12, inf: 'seek',      v2: 'sought',     v3: 'sought',    fr: 'chercher / rechercher' },
  { id: 116, level: 12, inf: 'smell',     v2: 'smelt',      v3: 'smelt',     fr: 'sentir (odeur)' },
  { id: 117, level: 12, inf: 'speed',     v2: 'sped',       v3: 'sped',      fr: 'aller vite / accélérer' },
  { id: 118, level: 12, inf: 'spill',     v2: 'spilt',      v3: 'spilt',     fr: 'renverser / répandre' },
  { id: 119, level: 12, inf: 'spoil',     v2: 'spoilt',     v3: 'spoilt',    fr: 'gâter / abîmer' },
  { id: 120, level: 12, inf: 'spring',    v2: 'sprang',     v3: 'sprung',    fr: 'jaillir / bondir' },
  // ── NIVEAU 13 ──
  { id: 121, level: 13, inf: 'stick',     v2: 'stuck',      v3: 'stuck',     fr: 'coller / être coincé' },
  { id: 122, level: 13, inf: 'sting',     v2: 'stung',      v3: 'stung',     fr: 'piquer (insecte)' },
  { id: 123, level: 13, inf: 'stink',     v2: 'stank',      v3: 'stunk',     fr: 'puer / sentir mauvais' },
  { id: 124, level: 13, inf: 'stride',    v2: 'strode',     v3: 'stridden',  fr: 'marcher à grands pas' },
  { id: 125, level: 13, inf: 'string',    v2: 'strung',      v3: 'strung',   fr: 'enfiler / tendre (une corde)' },
  { id: 126, level: 13, inf: 'swear',     v2: 'swore',      v3: 'sworn',     fr: 'jurer / promettre' },
  { id: 127, level: 13, inf: 'swell',     v2: 'swelled',    v3: 'swollen',   fr: 'gonfler / enfler' },
  { id: 128, level: 13, inf: 'tread',     v2: 'trod',       v3: 'trodden',   fr: 'marcher sur / fouler' },
  { id: 129, level: 13, inf: 'upset',     v2: 'upset',      v3: 'upset',     fr: 'bouleverser / contrarier', note: 'Toutes les formes identiques !' },
  { id: 130, level: 13, inf: 'weave',     v2: 'wove',       v3: 'woven',     fr: 'tisser' },
  // ── NIVEAU 14 ──
  { id: 131, level: 14, inf: 'bet',       v2: 'bet',        v3: 'bet',       fr: 'parier', note: 'Toutes les formes identiques !' },
  { id: 132, level: 14, inf: 'bid',       v2: 'bid',        v3: 'bid',       fr: 'offrir (enchère) / faire une mise', note: 'Toutes les formes identiques !' },
  { id: 133, level: 14, inf: 'fit',       v2: 'fitted',     v3: 'fitted',    fr: 'aller (taille) / adapter' },
  { id: 134, level: 14, inf: 'grind',     v2: 'ground',     v3: 'ground',    fr: 'moudre / grincer' },
  { id: 135, level: 14, inf: 'knit',      v2: 'knit',       v3: 'knit',      fr: 'tricoter' },
  { id: 136, level: 14, inf: 'mistake',   v2: 'mistook',    v3: 'mistaken',  fr: 'confondre / se tromper' },
  { id: 137, level: 14, inf: 'quit',      v2: 'quit',       v3: 'quit',      fr: 'quitter / arrêter', note: 'Toutes les formes identiques !' },
  { id: 138, level: 14, inf: 'rid',       v2: 'rid',        v3: 'rid',       fr: 'se débarrasser de', note: 'Toutes les formes identiques !' },
  { id: 139, level: 14, inf: 'shrink',    v2: 'shrank',     v3: 'shrunk',    fr: 'rétrécir' },
  { id: 140, level: 14, inf: 'spell',     v2: 'spelt',      v3: 'spelt',     fr: 'épeler' },
  // ── NIVEAU 15 ──
  { id: 141, level: 15, inf: 'spin',      v2: 'spun',       v3: 'spun',      fr: 'tourner / faire pivoter' },
  { id: 142, level: 15, inf: 'spit',      v2: 'spat',       v3: 'spat',      fr: 'cracher' },
  { id: 143, level: 15, inf: 'strive',    v2: 'strove',     v3: 'striven',   fr: 's\'efforcer / s\'évertuer' },
  { id: 144, level: 15, inf: 'undertake', v2: 'undertook',  v3: 'undertaken', fr: 'entreprendre / se charger de' },
  { id: 145, level: 15, inf: 'withstand', v2: 'withstood',  v3: 'withstood', fr: 'résister à / supporter' },
  { id: 146, level: 15, inf: 'forsake',   v2: 'forsook',    v3: 'forsaken',  fr: 'abandonner / renoncer à' },
  { id: 147, level: 15, inf: 'undergo',   v2: 'underwent',  v3: 'undergone', fr: 'subir / se soumettre à' },
  { id: 148, level: 15, inf: 'wring',     v2: 'wrung',      v3: 'wrung',     fr: 'tordre / essorer' },
  { id: 149, level: 15, inf: 'mislead',   v2: 'misled',     v3: 'misled',    fr: 'induire en erreur / égarer' },
  { id: 150, level: 15, inf: 'sow',       v2: 'sowed',      v3: 'sown',      fr: 'semer' },
];

// 3 sentence complements per verb – used to build fill-in-the-blank sentences.
// Subjects: index 0 → "I", index 1 → "She", index 2 → "He"
const VERB_COMPS = {
  // Level 1
  1:  ['very happy last night', 'at home all day', 'tired after school'],
  2:  ['a lot of fun', 'a great idea', 'lunch with the family'],
  3:  ['my homework quickly', 'the dishes after dinner', 'his best in the exam'],
  4:  ['to the park with friends', 'home early', 'to school by bike'],
  5:  ['home very late', 'to the party with us', 'back with great news'],
  6:  ['a great movie', 'her old friend at the market', 'something incredible'],
  7:  ['a birthday present', 'really tired', 'a perfect score'],
  8:  ['her a wonderful gift', 'a long speech', 'some good advice'],
  9:  ['the bus to school', 'a beautiful photo', 'the last book on the shelf'],
  10: ['the right answer', 'his name immediately', 'the whole truth'],
  // Level 2
  11: ['hello to everyone', 'the truth out loud', 'something funny'],
  12: ['a big mistake', 'her lunch herself', 'some new friends at school'],
  13: ['about the problem all day', 'it was very funny', 'of a good solution'],
  14: ['my lost keys', 'the answer easily', 'a great hiding spot'],
  15: ['her a big secret', 'the whole story', 'everyone the exciting news'],
  16: ['very famous overnight', 'a great teacher', 'best friends'],
  17: ['the house at 7am', 'her bag at school again', 'the party early'],
  18: ['the book on the table', 'her coat on the chair', 'the plates in the cupboard'],
  19: ['a delicious cake to share', 'her dog to the park', 'some great news'],
  20: ['a long letter to my friend', 'her name on the board', 'a short story'],
  // Level 3
  21: ['a new bike for Christmas', 'some chocolate at the shop', 'a birthday gift'],
  22: ['the ball perfectly', 'a bad cold', 'the last train home'],
  23: ['a huge pizza', 'all her vegetables', 'at the new restaurant'],
  24: ['off my bike in the park', 'asleep during the film', 'into the cold water'],
  25: ['really happy about the result', 'a bit sick in the morning', 'very proud'],
  26: ['a very loud noise outside', 'some great news', 'his favourite song on the radio'],
  27: ['a diary for one year', 'her promise to her friend', 'all the old photos'],
  28: ['an old friend by accident', 'someone very interesting', 'his new teacher'],
  29: ['very fast to win the race', 'to the station', 'five kilometres without stopping'],
  30: ['a message to my mum', 'some beautiful flowers', 'an important email'],
  // Level 4
  31: ['a world record', 'her phone by accident', 'the classroom window'],
  32: ['the red one in the end', 'a completely different path', 'the best answer'],
  33: ['to the beach for the day', 'very carefully in the rain', 'all night to get there'],
  34: ['to Paris for the weekend', 'over the mountains', 'for the very first time'],
  35: ['my password again', 'to bring her keys', 'everything he had learned'],
  36: ['very tall that summer', 'tomatoes in the garden', 'so fast it was amazing'],
  37: ['under the bed', 'the present very carefully', 'behind the big tree'],
  38: ['the whole book in one day', 'a great adventure story', 'every page carefully'],
  39: ['in English to the class', 'very slowly and clearly', 'to the headteacher'],
  40: ['across the lake in record time', 'very fast', 'for one hour without stopping'],
  // Level 5
  41: ['a brand new chapter', 'to understand the lesson', 'working hard every day'],
  42: ['into the juicy apple', 'her lip nervously', 'the cookie in one go'],
  43: ['out all the candles in one breath', 'very hard into the microphone', 'a huge bubble'],
  44: ['a beautiful picture of the sea', 'her portrait from memory', 'a detailed map'],
  45: ['a big glass of cold water', 'hot chocolate by the fire', 'too much juice'],
  46: ['my new bike around the block', 'a horse for the very first time', 'to school every morning'],
  47: ['the doorbell twice', 'her friend after school', 'at midnight and woke everyone up'],
  48: ['a beautiful song for the audience', 'very loudly in the shower', 'on stage for the first time'],
  49: ['the ball from the defender', 'a cookie from the jar', 'first place in the race'],
  50: ['the ball far across the field', 'her coat on the chair', 'a perfect pass to his teammate'],
  // Level 6
  51: ['the other team by three goals', 'her personal best record', 'everyone at the board game'],
  52: ['the metal bar in half', 'her knees to stretch before running', 'the rules just a little'],
  53: ['a giant sandcastle on the beach', 'a birdhouse with her dad', 'a robot from cardboard boxes'],
  54: ['the toast again', 'her hand on the hot stove', 'all the old letters in the fireplace'],
  55: ['the bread into thick slices', 'her finger by accident', 'the rope with scissors'],
  56: ['with the problem calmly', 'the cards to everyone at the table', 'with a difficult customer'],
  57: ['a deep hole in the sand', 'in the garden all afternoon', 'for buried treasure'],
  58: ['the ducks at the pond', 'her baby brother his dinner', 'the animals at the zoo'],
  59: ['for my right to be heard', 'against injustice at school', 'very bravely to the end'],
  60: ['the painting on the living room wall', 'her coat on the hook by the door', 'the decorations for the party'],
  // Level 7
  61: ['the door open for everyone', 'her little sister\'s hand tightly', 'the world record for three years'],
  62: ['my ankle badly during the match', 'her feelings without meaning to', 'nobody in the end'],
  63: ['the table carefully for dinner', 'the baby down gently in the cot', 'all the cards on the table'],
  64: ['the team to a great victory', 'the way through the dark forest', 'a double life for years'],
  65: ['her my favourite pencil', 'her bike to a friend for the day', 'some money to help out'],
  66: ['the dog out into the garden', 'her stay up late on Friday', 'everyone down in the end'],
  67: ['on the grass and looked at the clouds', 'on her bed all afternoon', 'under the stars all night'],
  68: ['the game in the last minute', 'her keys again', 'the race by just one second'],
  69: ['every single word', 'something very important by that', 'well but still failed'],
  70: ['for the cinema tickets', 'close attention in class', 'a very high price in the end'],
  // Level 8
  71: ['early that morning to see the sunrise', 'above the horizon slowly', 'to meet the challenge'],
  72: ['the table for eight people', 'a new world record in the final', 'his alarm for 7 in the morning'],
  73: ['his hand very firmly', 'the bottle well before opening it', 'with cold in the wind'],
  74: ['a torch into the dark cave', 'on the stage during the show', 'like a true star'],
  75: ['next to her best friend in class', 'in the very front row', 'quietly for hours without moving'],
  76: ['for ten hours straight', 'right through the alarm', 'like a baby all night'],
  77: ['down the snowy hill on a tray', 'on the ice across the lake', 'under the fence carefully'],
  78: ['the whole day at the beach', 'all her pocket money at once', 'a week in London with his class'],
  79: ['butter on the toast', 'the news very quickly', 'a blanket on the grass for the picnic'],
  80: ['on top of the hill and looked around', 'in a long queue for hours', 'up for his friend bravely'],
  // Level 9
  81: ['the ball perfectly into the top corner', 'a great deal with the seller', 'the clock at exactly midnight'],
  82: ['the kitchen floor after dinner', 'all the leaves from the path', 'her completely off her feet'],
  83: ['happily on the swings in the park', 'the bat but missed the ball', 'back and forth on the hammock'],
  84: ['English to young students abroad', 'herself to play the guitar', 'the whole class something new'],
  85: ['the paper carefully in half', 'her favourite dress on the fence', 'open the envelope impatiently'],
  86: ['the lesson straight away', 'exactly what he meant', 'everything about the situation'],
  87: ['up very early to catch the train', 'her little sister gently', 'at the sound of thunder'],
  88: ['a warm coat to school', 'her favourite dress to the party', 'his school uniform proudly'],
  89: ['when I heard the sad news', 'with joy at the end of the film', 'all night long'],
  90: ['the national competition', 'the gold medal at the championships', 'against a much stronger team'],
  // Level 10
  91: ['a long shadow across the field', 'her vote in the election', 'serious doubt on the result'],
  92: ['anyone from entering the room', 'her children to watch TV after 9pm', 'the use of phones in class'],
  93: ['solid overnight in the cold spell', 'on the spot when she saw the spider', 'the leftover soup for later'],
  94: ['over the big puddle easily', 'with joy when she heard the news', 'as high as he possibly could'],
  95: ['a few quiet tears', 'light on the mystery', 'tears of joy'],
  96: ['the ball straight into the net', 'a perfect score at the competition', 'a beautiful short film'],
  97: ['us the quickest way there', 'great courage in a difficult moment', 'his new drawings to the class'],
  98: ['the bill equally between them', 'into two groups for the activity', 'the difference fairly'],
  99: ['the old clock carefully every morning', 'the scarf around her neck', 'up the toy for his brother'],
  100: ['some money from the bank', 'from the competition at the last minute', 'his application after all'],
  // Level 11
  101: ['from my seat to speak', 'early and prepared breakfast', 'at just the right moment'],
  102: ['the pain very bravely', 'the weight of the heavy bag', 'good news from afar'],
  103: ['the books together with string', 'the wound carefully with a bandage', 'them together with a rope'],
  104: ['champion horses on the farm', 'rabbits as a hobby', 'a spirit of loyalty in his team'],
  105: ['into the room suddenly', 'out laughing at the joke', 'with pride at her success'],
  106: ['into the room so as not to wake anyone', 'slowly along the wall', 'up quietly behind her'],
  107: ['of flying over the mountains', 'about her future every night', 'of a much better world'],
  108: ['the country in fear for my life', 'the burning building in time', 'as fast as he possibly could'],
  109: ['the door wide open', 'her arms around him happily', 'the ball far across the field'],
  110: ['on the soft damp grass', 'before the queen to receive the honour', 'to tie his shoelace'],
  // Level 12
  111: ['against the wall to catch my breath', 'out of the window to look', 'on his best friend for support'],
  112: ['the candles on the birthday cake', 'a small fire in the garden', 'the whole room with fairy lights'],
  113: ['my fear of heights at last', 'every single obstacle in her way', 'the challenge completely alone'],
  114: ['my point very clearly', 'everyone wrong in the end', 'his innocence at last'],
  115: ['a better life in a new country', 'the truth about her past', 'shelter from the heavy rain'],
  116: ['the beautiful fresh flowers', 'something burning in the kitchen', 'absolutely amazing'],
  117: ['down the empty highway', 'past everyone else on the track', 'through the exam in record time'],
  118: ['juice all over the clean tablecloth', 'the beans completely by accident', 'his drink all over the table'],
  119: ['the ending of the film for everyone', 'the big surprise her family had planned', 'his little sister terribly'],
  120: ['straight into action', 'over the fence in one jump', 'a total surprise on all his friends'],
  // Level 13
  121: ['the poster firmly on the wall', 'to her decision no matter what', 'out of the crowd immediately'],
  122: ['him painfully on the arm', 'her hand as she reached into the bush', 'really badly and made her cry'],
  123: ['of old fish all day', 'up the whole kitchen terribly', 'so badly that everyone left the room'],
  124: ['confidently onto the stage', 'across the muddy field', 'into the room and took control'],
  125: ['the fairy lights along the wall', 'her guitar perfectly before the show', 'the colourful beads together'],
  126: ['to tell the whole truth', 'she would never ever give up', 'an oath of loyalty to the team'],
  127: ['with pride when I heard my name', 'up badly after the bee sting', 'with pride after the victory'],
  128: ['carefully on the icy pavement', 'on a sharp stone with bare feet', 'softly so as not to wake the baby'],
  129: ['the whole team with my words', 'her stomach badly', 'the balance of power completely'],
  130: ['a beautiful and colourful carpet', 'her way skillfully through the crowd', 'a basket from river reeds'],
  // Level 14
  131: ['everything on the last race', 'that she would definitely win', 'on completely the wrong horse'],
  132: ['on the rare painting at the auction', 'a fond farewell to all her friends', 'the highest price of all'],
  133: ['perfectly into the small box', 'all her clothes into one tiny bag', 'into the new team instantly'],
  134: ['the fresh coffee beans', 'her teeth in her sleep', 'the metal down to a fine powder'],
  135: ['a warm scarf for the cold winter', 'him a pair of thick woollen socks', 'by the fire all evening'],
  136: ['him for someone else entirely', 'the salt for sugar in the recipe', 'the path in the dark forest'],
  137: ['my job to travel the world', 'the team after the big argument', 'school and started his own business'],
  138: ['myself of all distractions to focus', 'the house of mice at last', 'his life of all negativity'],
  139: ['in the very hot wash', 'back in fear from the loud noise', 'to less than half its original size'],
  140: ['every single word correctly', 'her unusual name on the board slowly', 'the long word out loud'],
  // Level 15
  141: ['around quickly on the dance floor', 'the wheel as fast as she could', 'in endless circles'],
  142: ['out the bitter medicine immediately', 'watermelon seeds across the garden', 'in anger at the unfair result'],
  143: ['to do my absolute best every day', 'for excellence in everything she did', 'to make a real difference'],
  144: ['a very dangerous mission alone', 'the huge project entirely on her own', 'a long and difficult journey'],
  145: ['the pressure of the final exam', 'the freezing cold winter', 'every challenge thrown at him'],
  146: ['all my old bad habits at once', 'her old friends for money and fame', 'the busy city for a quiet life'],
  147: ['major and unexpected changes', 'a very difficult test of her strength', 'surgery and made a full recovery'],
  148: ['the soaking wet towel completely dry', 'her hands nervously while waiting', 'every last drop of water out'],
  149: ['everyone with false information', 'the investigators completely', 'the whole class by mistake'],
  150: ['seeds carefully in the vegetable garden', 'doubt in the minds of the jury', 'wild oats in his youth'],
};

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
  if (state.user) fbSave(state.user.uid, state.save);
}

const state = {
  save: loadState(),
  screen: 'home',
  levelId: null,
  mode: null,
  flashcardIndex: 0,
  quiz: null,
  matching: null,
  user: null,             // { uid, name, photo, friendCode, activityDates }
  pendingInviteCode: null,
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

function isChapterComplete(chapterId) {
  return LEVELS.filter(l => l.chapter === chapterId).every(l => getStars(l.id) >= 3);
}

function isLevelUnlocked(levelId) {
  if (levelId === 1) return true;
  const level = LEVELS.find(l => l.id === levelId);
  const chapterLevels = LEVELS.filter(l => l.chapter === level.chapter).map(l => l.id);
  const firstOfChapter = Math.min(...chapterLevels);
  if (levelId === firstOfChapter) {
    return isChapterComplete(level.chapter - 1);
  }
  // Within a chapter: need 2 stars on previous level
  return getStars(levelId - 1) >= 2;
}

function getTotalMastered() {
  return VERBS.filter(v => getMastery(v.id) >= 4).length;
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
  FILL_BLANK:      'FILL_BLANK',      // Phrase à trou – choisir le prétérit
};

// Returns the first (singular) form of v2, e.g. "was / were" → "was"
function sentV2(verb) { return verb.v2.split('/')[0].trim(); }

// Returns 1 random sentence object from a verb's 3 complements
function randomVerbSentence(verb) {
  const comps = VERB_COMPS[verb.id];
  if (!comps) return null;
  const subs = ['I', 'She', 'He'];
  const i    = Math.floor(Math.random() * comps.length);
  return { full: `${subs[i]} ___ ${comps[i]}.`, correct: sentV2(verb), verb };
}

// Builds a FILL_BLANK quiz question for use in daily quiz
function buildFillBlankQ(verb, allVerbs) {
  const sent = randomVerbSentence(verb);
  if (!sent) return null;
  const correct     = sent.correct;
  const distractors = pickRandom(
    allVerbs.filter(v => v.id !== verb.id && sentV2(v) !== correct), 3
  ).map(v => sentV2(v));
  const choices = [correct, ...distractors].sort(() => Math.random() - .5);
  return { type: Q_TYPES.FILL_BLANK, verb, text: sent.full, correct, choices, question: '', highlight: '' };
}

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
    ? VERBS.filter(v => v.level < levelId && getMastery(v.id) < 5).slice(0, 5)
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
  const xp = `<div class="xp-badge">⭐ ${state.save.xp} XP</div>`;

  const authArea = state.user
    ? `<div class="header-right">
         ${xp}
         <img src="${state.user.photo || ''}" class="user-avatar"
              onerror="this.style.display='none'"
              title="${state.user.name || 'Connecté'}">
         <button class="logout-btn" onclick="handleLogout()">Déco</button>
       </div>`
    : `<div class="header-right">
         ${xp}
         ${FIREBASE_READY
           ? `<button class="login-btn-small" onclick="showLoginScreen()">🔐 Connexion</button>`
           : ''}
       </div>`;

  return `
    <div class="header">
      <div class="logo">📚</div>
      <div>
        <h1>VerbMaster</h1>
        ${subtitle ? `<div class="subtitle">${subtitle}</div>` : ''}
      </div>
      ${authArea}
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
  const { current: streak } = calcPersonalStreak(state.user?.activityDates || []);

  const chaptersHTML = CHAPTERS.map(ch => {
    const chLocked = ch.id > 1 && !isChapterComplete(ch.id - 1);
    const chDone   = isChapterComplete(ch.id);
    const levelsHTML = LEVELS.filter(lv => lv.chapter === ch.id).map(lv => {
      const verbs    = VERBS.filter(v => v.level === lv.id);
      const unlocked = !chLocked && isLevelUnlocked(lv.id);
      const stars    = getStars(lv.id);
      return `
        <div class="level-card ${unlocked ? '' : 'locked'} ${stars > 0 ? 'active' : ''}"
             onclick="${unlocked ? `selectLevel(${lv.id})` : 'showLocked()'}">
          <div class="level-ribbon" style="background:${lv.color}">${lv.emoji}</div>
          <div class="level-num">Niveau ${lv.id}</div>
          <div class="level-name">${lv.name}</div>
          <div class="level-count">${verbs.length} verbes</div>
          <div class="stars">${starsHTML(stars)}</div>
          ${!unlocked ? '<div class="lock-icon">🔒</div>' : ''}
        </div>`;
    }).join('');

    return `
      <div class="chapter-block ${chLocked ? 'chapter-locked' : ''} ${chDone ? 'chapter-done' : ''}">
        <div class="chapter-header">
          <span class="chapter-emoji">${ch.emoji}</span>
          <div class="chapter-titles">
            <div class="chapter-name">${ch.name} — ${ch.subtitle}</div>
            <div class="chapter-desc">${ch.desc}</div>
          </div>
          ${chLocked ? '<span class="chapter-lock">🔒 Terminer le chapitre précédent</span>' : ''}
          ${chDone   ? '<span class="chapter-badge">✅ Complété !</span>' : ''}
        </div>
        <div class="levels-grid">${levelsHTML}</div>
      </div>`;
  }).join('');

  app().innerHTML = `
    ${renderHeader('Verbes irréguliers anglais')}
    <div class="home-container">
      <div class="home-hero">
        <div class="big-emoji">🏆</div>
        <h2>Apprends les verbes irréguliers !</h2>
        <p>3 chapitres · 15 niveaux · 150 verbes</p>
      </div>

      <div class="stats-bar">
        <div class="stat-card">
          <div class="stat-value">${state.save.xp}</div>
          <div class="stat-label">points XP</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${totalStars}</div>
          <div class="stat-label">étoiles</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${streak > 0 ? '🔥' : '💤'} ${streak}</div>
          <div class="stat-label">série en cours</div>
        </div>
      </div>

      <div class="daily-challenge-wrap">
        ${(() => {
          const done    = hasDoneDaily();
          const typeLabel = _dailyTypeLabel();
          const unlockedCount = VERBS.filter(v => isLevelUnlocked(v.level)).length;
          if (unlockedCount < 5) return '';
          return `
            <button class="daily-challenge-btn ${done ? 'done' : ''}"
                    onclick="${done ? '' : 'startDailyChallenge()'}">
              <span class="daily-challenge-icon">⚡</span>
              <div class="daily-challenge-text">
                <div class="daily-challenge-title">Défi du jour</div>
                <div class="daily-challenge-sub">${done ? '✅ Complété ! Reviens demain' : typeLabel + ' · 20 questions · ' + unlockedCount + ' verbes'}</div>
              </div>
              ${done ? '' : '<span class="daily-challenge-arrow">→</span>'}
            </button>`;
        })()}
      </div>

      <div class="home-action-btns">
        ${state.user ? `
          <button class="home-action-btn" onclick="renderStatsScreen()">📊 Mes stats</button>
          <button class="home-action-btn" onclick="renderFriendsScreen()">👥 Mes amis</button>
        ` : ''}
      </div>

      <div class="section-title">📖 Choisis ton niveau</div>
      ${chaptersHTML}
    </div>`;
}

function showLocked() {
  alert('🔒 Débloque ce niveau en progressant dans les niveaux précédents !\n\nÀ l\'intérieur d\'un chapitre : 2⭐ dans le niveau précédent.\nPour passer au chapitre suivant : 3⭐ sur tous les niveaux du chapitre actuel.');
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
      <div class="mode-choice mt-16">
        <div class="mode-card" onclick="startMatching(${levelId})">
          <div class="mode-icon">🔗</div>
          <div class="mode-name">Relier les mots</div>
          <div class="mode-desc">Relie les verbes à leur traduction</div>
        </div>
        <div class="mode-card" onclick="startFillBlank(${levelId})">
          <div class="mode-icon">✍️</div>
          <div class="mode-name">Texte à trou</div>
          <div class="mode-desc">Choisis le bon verbe dans la phrase</div>
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
    [Q_TYPES.FILL_BLANK]:   '✍️ Texte à trou',
  }[q.type];

  // FILL_BLANK in daily quiz: choice buttons + sentence display
  if (q.type === Q_TYPES.FILL_BLANK) {
    const letters = ['A', 'B', 'C', 'D'];
    questionBody = `
      <div class="choices">
        ${q.choices.map((c, i) => `
          <button class="choice-btn" onclick="handleChoice(this, '${escapeQuote(c)}')" data-val="${escapeAttr(c)}">
            <span class="choice-letter">${letters[i]}</span>${c}
          </button>`).join('')}
      </div>`;
  }

  const questionCard = q.type === Q_TYPES.FILL_BLANK
    ? `<div class="question-card fill-blank-card">
         <div class="question-type-label">${typeLabel}</div>
         <div class="fill-blank-sentence">${q.text.replace('___', '<span class="fill-blank-gap">___</span>')}</div>
       </div>`
    : `<div class="question-card">
         <div class="question-type-label">${typeLabel}</div>
         <div class="question-text">
           ${q.question} <span style="color:var(--purple)">${q.highlight}</span> ?
         </div>
       </div>`;

  const isDaily = state.mode === 'daily';
  const headerTitle = isDaily ? '⚡ Défi du jour' : `Niveau ${state.levelId} – S'entraîner`;
  const backBtn     = isDaily
    ? `<button class="back-btn" onclick="confirmQuitDaily()">← Quitter</button>`
    : `<button class="back-btn" onclick="renderLevelMenu(${state.levelId})">← Retour</button>`;
  const timerHTML   = isDaily
    ? `<span class="daily-timer-live" id="daily-timer">⏱ 0:00</span>`
    : '';

  app().innerHTML = `
    ${renderHeader(headerTitle)}
    <div class="screen-container">
      ${backBtn}

      <div class="quiz-header">
        <div class="quiz-progress-bar">
          <div class="quiz-progress-fill" style="width:${pct}%"></div>
        </div>
        <div class="quiz-meta">
          <span class="quiz-question-num">Question ${quiz.currentIndex + 1} / ${quiz.questions.length}</span>
          <span class="quiz-score-live">
            ✅ ${quiz.correctCount} correctes
            ${streakHTML}
            ${timerHTML}
          </span>
        </div>
      </div>

      ${questionCard}

      ${questionBody}

      <div id="feedbackArea"></div>
      <div id="nextArea"></div>
    </div>`;

  if (isDaily) _tickDailyTimer();

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
  const endFn  = state.mode === 'daily' ? 'showDailyResults()' : 'showResults()';
  nextArea.innerHTML = `
    <button class="next-btn mt-8" onclick="${isLast ? endFn : 'nextQuestion()'}">
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

  recordActivity(quiz.xpEarned);
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
   DAILY CHALLENGE
══════════════════════════════════════════ */
const DAILY_QUESTIONS = 20;

function getDailyType() {
  const d = new Date();
  const day = Math.floor((d - new Date(d.getFullYear(), 0, 0)) / 86400000);
  return day % 3; // 0=traduction, 1=prétérit, 2=participe passé
}

function _dailyTypeWeights() {
  const t = getDailyType();
  if (t === 1) return [
    { type: Q_TYPES.TYPE_V2,    w: 3 }, { type: Q_TYPES.V2_QCM,      w: 3 },
    { type: Q_TYPES.FILL_BLANK, w: 3 }, { type: Q_TYPES.TRANSL_FR_EN, w: 1 },
  ];
  if (t === 2) return [
    { type: Q_TYPES.TYPE_V3,    w: 4 }, { type: Q_TYPES.V3_QCM,      w: 4 },
    { type: Q_TYPES.TRANSL_FR_EN, w: 1 },
  ];
  return [
    { type: Q_TYPES.TRANSL_FR_EN, w: 3 }, { type: Q_TYPES.TRANSL_EN_FR, w: 3 },
    { type: Q_TYPES.FILL_BLANK,   w: 2 }, { type: Q_TYPES.V2_QCM,       w: 1 },
  ];
}

function _dailyTypeLabel() {
  const t = getDailyType();
  return t === 1 ? '⚡ Jour Prétérit' : t === 2 ? '📝 Jour Participe passé' : '🌍 Jour Traduction';
}

function generateDailyQuiz() {
  const pool = shuffleArr(VERBS.filter(v => isLevelUnlocked(v.level))).slice(0, DAILY_QUESTIONS);
  const allVerbs = VERBS;
  const typeWeights = _dailyTypeWeights();
  const typePool = typeWeights.flatMap(t => Array(t.w).fill(t.type));

  const questions = pool.map(verb => {
    const qtype = typePool[Math.floor(Math.random() * typePool.length)];
    let q = { type: qtype, verb };
    if (qtype === Q_TYPES.TRANSL_FR_EN) {
      const { choices, correct } = buildChoices(verb, 'inf', allVerbs);
      return { ...q, choices, correct, question: 'Comment dit-on en anglais :', highlight: verb.fr };
    } else if (qtype === Q_TYPES.TRANSL_EN_FR) {
      const { choices, correct } = buildChoices(verb, 'fr', allVerbs);
      return { ...q, choices, correct, question: 'Que veut dire ce verbe en français ?', highlight: verb.inf };
    } else if (qtype === Q_TYPES.V2_QCM) {
      const { choices, correct } = buildChoices(verb, 'v2', allVerbs);
      return { ...q, choices, correct, question: 'Quel est le prétérit de', highlight: verb.inf };
    } else if (qtype === Q_TYPES.V3_QCM) {
      const { choices, correct } = buildChoices(verb, 'v3', allVerbs);
      return { ...q, choices, correct, question: 'Quel est le participe passé de', highlight: verb.inf };
    } else if (qtype === Q_TYPES.TYPE_V2) {
      return { ...q, correct: verb.v2, question: 'Écris le prétérit de', highlight: verb.inf };
    } else if (qtype === Q_TYPES.TYPE_V3) {
      return { ...q, correct: verb.v3, question: 'Écris le participe passé de', highlight: verb.inf };
    } else if (qtype === Q_TYPES.FILL_BLANK) {
      const fq = buildFillBlankQ(verb, allVerbs);
      if (fq) return fq;
      // fallback if verb has no comps
      const { choices, correct } = buildChoices(verb, 'v2', allVerbs);
      return { ...q, type: Q_TYPES.V2_QCM, choices, correct, question: 'Quel est le prétérit de', highlight: verb.inf };
    } else {
      return { ...q, correct: verb.v3, question: 'Écris le participe passé de', highlight: verb.inf };
    }
  });

  return {
    levelId: null,
    questions,
    currentIndex: 0,
    correctCount: 0,
    streak: 0,
    maxStreak: 0,
    xpEarned: 0,
    answered: false,
  };
}

function hasDoneDaily() {
  return state.save.lastDailyDate === todayStr();
}

function startDailyChallenge() {
  if (hasDoneDaily()) { alert('✅ Tu as déjà fait le défi du jour ! Reviens demain.'); return; }
  state.mode = 'daily';
  state.quiz = generateDailyQuiz();
  state.dailyTimer = { startTime: Date.now(), elapsed: 0, interval: null };
  state.dailyTimer.interval = setInterval(() => {
    state.dailyTimer.elapsed = Math.floor((Date.now() - state.dailyTimer.startTime) / 1000);
  }, 1000);
  renderQuizQuestion();
}

function _tickDailyTimer() {
  clearInterval(_tickDailyTimer._id);
  _tickDailyTimer._id = setInterval(() => {
    const el = document.getElementById('daily-timer');
    if (!el) { clearInterval(_tickDailyTimer._id); return; }
    const s = Math.floor((Date.now() - state.dailyTimer.startTime) / 1000);
    const m = Math.floor(s / 60);
    el.textContent = `⏱ ${m}:${String(s % 60).padStart(2, '0')}`;
  }, 1000);
}

function _stopDailyTimer() {
  clearInterval(_tickDailyTimer._id);
  if (state.dailyTimer) {
    state.dailyTimer.elapsed = Math.floor((Date.now() - state.dailyTimer.startTime) / 1000);
    clearInterval(state.dailyTimer.interval);
  }
}

function calcDailyXP(correct, total, maxStreak, elapsed) {
  const pct = correct / total;
  const base = correct * 5;
  const accuracy = pct >= 0.9 ? 50 : pct >= 0.7 ? 25 : 0;
  const streak   = Math.max(0, maxStreak - 5) * 3;
  const speed    = elapsed < 60 ? 30 : elapsed < 90 ? 20 : elapsed < 120 ? 10 : 0;
  return { base, accuracy, streak, speed, total: base + accuracy + streak + speed };
}

function confirmQuitDaily() {
  if (confirm('Abandonner le défi du jour ? Ta progression ne sera pas sauvegardée.')) {
    _stopDailyTimer();
    state.mode = null;
    renderHome();
  }
}

function showDailyResults() {
  _stopDailyTimer();
  const quiz    = state.quiz;
  const total   = quiz.questions.length;
  const correct = quiz.correctCount;
  const pct     = Math.round((correct / total) * 100);
  const elapsed = state.dailyTimer?.elapsed || 0;
  const xp      = calcDailyXP(correct, total, quiz.maxStreak, elapsed);

  // Mark daily done + save XP
  state.save.lastDailyDate = todayStr();
  addXP(xp.total);
  recordActivity(xp.total);
  state.mode = null;

  const emoji = pct >= 90 ? '🏆' : pct >= 70 ? '🎉' : pct >= 50 ? '👍' : '💪';
  const title = pct >= 90 ? 'Parfait !' : pct >= 70 ? 'Bien joué !' : pct >= 50 ? 'Pas mal !' : 'Continue !';
  const elapsedFmt = `${Math.floor(elapsed / 60)}:${String(elapsed % 60).padStart(2, '0')}`;

  const bonusRows = [
    { label: 'Base (réponses)', val: `+${xp.base} XP` },
    xp.accuracy ? { label: 'Bonus précision', val: `+${xp.accuracy} XP 🎯` } : null,
    xp.streak   ? { label: 'Bonus série',      val: `+${xp.streak} XP 🔥` }  : null,
    xp.speed    ? { label: 'Bonus vitesse',    val: `+${xp.speed} XP ⚡` }   : null,
  ].filter(Boolean).map(r => `
    <div class="breakdown-row">
      <span class="breakdown-label">${r.label}</span>
      <span class="breakdown-value" style="color:var(--purple)">${r.val}</span>
    </div>`).join('');

  app().innerHTML = `
    ${renderHeader('Défi du jour – Résultats')}
    <div class="screen-container">
      <div class="results-card">
        <div class="daily-badge">${_dailyTypeLabel()}</div>
        <div class="results-emoji">${emoji}</div>
        <div class="results-title">${title}</div>

        <div class="results-score-big">${pct}%</div>
        <div class="results-score-label">${correct} / ${total} bonnes réponses · ⏱ ${elapsedFmt}</div>

        <div class="daily-xp-total">+${xp.total} XP</div>

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
            <span class="breakdown-label">Temps</span>
            <span class="breakdown-value">⏱ ${elapsedFmt}</span>
          </div>
        </div>

        <div class="results-breakdown" style="margin-top:8px">
          <div class="breakdown-row" style="font-weight:700;color:var(--purple)">
            <span>Total XP gagné</span><span>+${xp.total}</span>
          </div>
          ${bonusRows}
        </div>

        <div class="results-btns">
          <button class="btn btn-secondary" onclick="renderHome()">🏠 Accueil</button>
          <button class="btn btn-secondary" onclick="renderStatsScreen()">📊 Mes stats</button>
        </div>
      </div>
    </div>`;
}

/* ══════════════════════════════════════════
   FILL-IN-THE-BLANK EXERCISE (standalone)
══════════════════════════════════════════ */
const FILL_BLANK_COUNT = 10;

function startFillBlank(levelId) {
  const verbs    = shuffleArr(VERBS.filter(v => v.level === levelId && VERB_COMPS[v.id]));
  const allSents = verbs.flatMap(v => {
    const comps = VERB_COMPS[v.id];
    const subs  = ['I', 'She', 'He'];
    const v2    = sentV2(v);
    return comps.map((c, i) => ({ full: `${subs[i]} ___ ${c}.`, correct: v2, verb: v }));
  });
  const selected = shuffleArr(allSents).slice(0, FILL_BLANK_COUNT);

  state.mode    = 'fillblank';
  state.levelId = levelId;
  state.fillBlank = {
    levelId,
    sentences: selected.map(s => {
      const distractors = pickRandom(
        VERBS.filter(v => v.id !== s.verb.id && sentV2(v) !== s.correct), 3
      ).map(v => sentV2(v));
      return { ...s, choices: [s.correct, ...distractors].sort(() => Math.random() - .5), answered: false };
    }),
    currentIndex: 0,
    correctCount: 0,
    streak: 0,
    maxStreak: 0,
    xpEarned: 0,
  };
  renderFillBlank();
}

function renderFillBlank() {
  const fb   = state.fillBlank;
  const sent = fb.sentences[fb.currentIndex];
  const pct  = Math.round((fb.currentIndex / fb.sentences.length) * 100);
  const letters  = ['A', 'B', 'C', 'D'];
  const streakHTML = fb.streak >= 2 ? `<span class="streak-badge">🔥 ${fb.streak}</span>` : '';
  const sentHTML = sent.full.replace('___', '<span class="fill-blank-gap">___</span>');

  app().innerHTML = `
    ${renderHeader(`Niveau ${state.levelId} – Texte à trou`)}
    <div class="screen-container">
      <button class="back-btn" onclick="renderLevelMenu(${state.levelId})">← Retour</button>

      <div class="quiz-header">
        <div class="quiz-progress-bar">
          <div class="quiz-progress-fill" style="width:${pct}%"></div>
        </div>
        <div class="quiz-meta">
          <span class="quiz-question-num">Phrase ${fb.currentIndex + 1} / ${fb.sentences.length}</span>
          <span class="quiz-score-live">✅ ${fb.correctCount} correctes ${streakHTML}</span>
        </div>
      </div>

      <div class="question-card fill-blank-card">
        <div class="question-type-label">✍️ Complète la phrase</div>
        <div class="fill-blank-sentence">${sentHTML}</div>
      </div>

      <div class="choices">
        ${sent.choices.map((c, i) => `
          <button class="choice-btn" onclick="handleFillBlank(this,'${escapeQuote(c)}')" data-val="${escapeAttr(c)}">
            <span class="choice-letter">${letters[i]}</span>${c}
          </button>`).join('')}
      </div>

      <div id="feedbackArea"></div>
      <div id="nextArea"></div>
    </div>`;
}

function handleFillBlank(btn, value) {
  const fb   = state.fillBlank;
  const sent = fb.sentences[fb.currentIndex];
  if (sent.answered) return;
  sent.answered = true;

  const isRight = value.toLowerCase().trim() === sent.correct.toLowerCase().trim();

  document.querySelectorAll('.choice-btn').forEach(b => {
    b.disabled = true;
    if (b.dataset.val === sent.correct) b.classList.add('correct');
  });
  if (!isRight) btn.classList.add('wrong');

  if (isRight) {
    fb.correctCount++;
    fb.streak++;
    fb.maxStreak = Math.max(fb.maxStreak, fb.streak);
    const xp = 10 + (fb.streak >= 3 ? 5 : 0);
    fb.xpEarned += xp;
    addXP(xp);
    updateMastery(sent.verb.id, true);
  } else {
    fb.streak = 0;
    updateMastery(sent.verb.id, false);
  }

  const msg      = isRight ? pick(MESSAGES_CORRECT) : pick(MESSAGES_WRONG);
  const isLast   = fb.currentIndex === fb.sentences.length - 1;
  const filledHTML = sent.full.replace('___',
    `<strong style="color:${isRight ? 'var(--green)' : 'var(--red)'}">${isRight ? value : value}</strong>`);

  document.getElementById('feedbackArea').innerHTML = `
    <div class="feedback-bar ${isRight ? 'correct' : 'wrong'} mt-16">
      <span class="fb-icon">${isRight ? '🎉' : '😬'}</span>
      <div>
        <div>${msg}</div>
        ${!isRight ? `<div class="fb-answer">Bonne réponse : <strong>${sent.correct}</strong></div>` : ''}
        <div class="fb-sentence-filled">${filledHTML}</div>
      </div>
    </div>`;

  document.getElementById('nextArea').innerHTML = `
    <button class="next-btn mt-8" onclick="${isLast ? 'showFillBlankResults()' : 'nextFillBlank()'}">
      ${isLast ? 'Voir mon score 🏆' : 'Phrase suivante →'}
    </button>`;
}

function nextFillBlank() {
  state.fillBlank.currentIndex++;
  renderFillBlank();
}

function showFillBlankResults() {
  const fb    = state.fillBlank;
  const total = fb.sentences.length;
  const pct   = Math.round((fb.correctCount / total) * 100);

  recordActivity(fb.xpEarned);
  state.mode = null;

  const emoji = pct >= 90 ? '🏆' : pct >= 65 ? '🎉' : pct >= 40 ? '👍' : '💪';
  const title = pct >= 90 ? 'Parfait !' : pct >= 65 ? 'Bien joué !' : pct >= 40 ? 'Pas mal !' : 'Continue !';

  app().innerHTML = `
    ${renderHeader('Texte à trou – Résultats')}
    <div class="screen-container">
      <div class="results-card">
        <div class="results-emoji">${emoji}</div>
        <div class="results-title">${title}</div>
        <div class="results-score-big">${pct}%</div>
        <div class="results-score-label">${fb.correctCount} / ${total} phrases correctes</div>

        <div class="results-breakdown">
          <div class="breakdown-row">
            <span class="breakdown-label">Bonnes réponses</span>
            <span class="breakdown-value" style="color:var(--green)">✅ ${fb.correctCount}</span>
          </div>
          <div class="breakdown-row">
            <span class="breakdown-label">Erreurs</span>
            <span class="breakdown-value" style="color:var(--red)">❌ ${total - fb.correctCount}</span>
          </div>
          <div class="breakdown-row">
            <span class="breakdown-label">Meilleure série</span>
            <span class="breakdown-value">🔥 ${fb.maxStreak}</span>
          </div>
          <div class="breakdown-row">
            <span class="breakdown-label">XP gagnés</span>
            <span class="breakdown-value" style="color:var(--purple)">⭐ +${fb.xpEarned}</span>
          </div>
        </div>

        <div class="results-btns">
          <button class="btn btn-primary" onclick="startFillBlank(${fb.levelId})">🔄 Réessayer</button>
          <button class="btn btn-secondary" onclick="renderLevelMenu(${fb.levelId})">← Niveau ${fb.levelId}</button>
          <button class="btn btn-secondary" onclick="renderHome()">🏠 Accueil</button>
        </div>
      </div>
    </div>`;
}

/* ══════════════════════════════════════════
   MATCHING EXERCISE
══════════════════════════════════════════ */
const MATCH_VISIBLE = 5;

function shuffleArr(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startMatching(levelId) {
  // Pool: all verbs from levels 1 → levelId, shuffled, capped at 20
  const pool = shuffleArr(VERBS.filter(v => v.level <= levelId)).slice(0, 20);
  const initVisible = pool.splice(0, Math.min(MATCH_VISIBLE, pool.length));

  // direction: which language is on which side (random each game)
  const dir = Math.random() < .5 ? 'fr_en' : 'en_fr';

  state.matching = {
    levelId,
    pool,
    left:     [...initVisible],
    right:    shuffleArr([...initVisible]),
    selLeft:  null,
    selRight: null,
    total:    initVisible.length + pool.length,
    matched:  0,
    errors:   0,
    locked:   false,
    dir,
  };

  renderMatching();
}

function renderMatching() {
  const m = state.matching;
  const pct = m.total ? Math.round((m.matched / m.total) * 100) : 0;
  const leftLabel  = m.dir === 'fr_en' ? '🇫🇷 Français'  : '🇬🇧 Anglais';
  const rightLabel = m.dir === 'fr_en' ? '🇬🇧 Anglais'   : '🇫🇷 Français';

  const itemHTML = (verb, i, side) => {
    const text = (side === 'left')
      ? (m.dir === 'fr_en' ? verb.fr : verb.inf)
      : (m.dir === 'fr_en' ? verb.inf : verb.fr);
    const sel = side === 'left' ? m.selLeft === i : m.selRight === i;
    return `
      <div class="matching-item${sel ? ' selected' : ''}"
           id="m${side[0]}-${i}"
           onclick="selectMatch${side === 'left' ? 'Left' : 'Right'}(${i})">
        ${text}
      </div>`;
  };

  app().innerHTML = `
    ${renderHeader('Relier les mots')}
    <div class="screen-container">
      <button class="back-btn" onclick="renderLevelMenu(${m.levelId})">← Retour</button>

      <div class="matching-stats">
        <span style="color:var(--green);font-weight:800">✅ ${m.matched} / ${m.total}</span>
        <span class="pill">Niv. 1–${m.levelId}</span>
        ${m.errors > 0
          ? `<span style="color:var(--red)">❌ ${m.errors} erreur${m.errors > 1 ? 's' : ''}</span>`
          : '<span></span>'}
      </div>
      <div class="matching-progress">
        <div class="matching-progress-fill" style="width:${pct}%"></div>
      </div>

      <div class="matching-hint">
        Clique un mot à gauche, puis son équivalent à droite.
      </div>

      <div class="matching-columns">
        <div class="matching-col">
          <div class="matching-col-header">${leftLabel}</div>
          ${m.left.map((v, i) => itemHTML(v, i, 'left')).join('')}
        </div>
        <div class="matching-col">
          <div class="matching-col-header">${rightLabel}</div>
          ${m.right.map((v, i) => itemHTML(v, i, 'right')).join('')}
        </div>
      </div>
    </div>`;
}

function selectMatchLeft(idx) {
  const m = state.matching;
  if (m.locked) return;
  // deselect if same item clicked again
  if (m.selLeft === idx) { m.selLeft = null; renderMatching(); return; }
  m.selLeft = idx;
  if (m.selRight !== null) checkMatchingPair();
  else renderMatching();
}

function selectMatchRight(idx) {
  const m = state.matching;
  if (m.locked) return;
  if (m.selRight === idx) { m.selRight = null; renderMatching(); return; }
  m.selRight = idx;
  if (m.selLeft !== null) checkMatchingPair();
  else renderMatching();
}

function checkMatchingPair() {
  const m = state.matching;
  const leftVerb  = m.left[m.selLeft];
  const rightVerb = m.right[m.selRight];
  const correct   = leftVerb.id === rightVerb.id;

  m.locked = true;

  // Highlight selections before adding result class
  renderMatching();

  const leftEl  = document.getElementById(`ml-${m.selLeft}`);
  const rightEl = document.getElementById(`mr-${m.selRight}`);
  if (leftEl)  leftEl.classList.add(correct ? 'match-correct' : 'match-wrong');
  if (rightEl) rightEl.classList.add(correct ? 'match-correct' : 'match-wrong');

  setTimeout(() => {
    if (correct) {
      m.matched++;
      addXP(15);
      updateMastery(leftVerb.id, true);

      // Remove matched pair
      m.left.splice(m.selLeft, 1);
      m.right.splice(m.selRight, 1);

      // Refill from pool
      if (m.pool.length > 0) {
        const newVerb = m.pool.shift();
        m.left.push(newVerb);
        // Insert at random position in right column
        const pos = Math.floor(Math.random() * (m.right.length + 1));
        m.right.splice(pos, 0, newVerb);
      }
    } else {
      m.errors++;
      // Shuffle right column on error to mix things up
      m.right = shuffleArr(m.right);
    }

    m.selLeft  = null;
    m.selRight = null;
    m.locked   = false;

    if (m.left.length === 0) showMatchingResults();
    else renderMatching();
  }, correct ? 600 : 750);
}

function showMatchingResults() {
  const m = state.matching;
  const attempts  = m.matched + m.errors;
  const accuracy  = attempts > 0 ? Math.round((m.matched / attempts) * 100) : 100;
  const xpEarned  = m.matched * 15;
  recordActivity(xpEarned);
  const emoji     = m.errors === 0 ? '🏆' : accuracy >= 80 ? '🎉' : accuracy >= 60 ? '👍' : '💪';
  const title     = m.errors === 0 ? 'Parfait, zéro erreur !' : accuracy >= 80 ? 'Excellent !' : 'Bien joué !';
  const subtitle  = `Tu as relié ${m.matched} verbe${m.matched > 1 ? 's' : ''} sur ${m.total} !`;

  app().innerHTML = `
    ${renderHeader('Résultats – Relier les mots')}
    <div class="screen-container">
      <div class="results-card">
        <div class="results-emoji">${emoji}</div>
        <div class="results-title">${title}</div>
        <div class="results-subtitle">${subtitle}</div>

        <div class="results-score-big">${accuracy}%</div>
        <div class="results-score-label">de précision</div>

        <div class="results-breakdown">
          <div class="breakdown-row">
            <span class="breakdown-label">Paires trouvées</span>
            <span class="breakdown-value" style="color:var(--green)">✅ ${m.matched}</span>
          </div>
          <div class="breakdown-row">
            <span class="breakdown-label">Erreurs</span>
            <span class="breakdown-value" style="color:${m.errors > 0 ? 'var(--red)' : 'var(--green)'}">
              ${m.errors === 0 ? '✅ Aucune' : `❌ ${m.errors}`}
            </span>
          </div>
          <div class="breakdown-row">
            <span class="breakdown-label">XP gagnés</span>
            <span class="breakdown-value" style="color:var(--purple)">⭐ +${xpEarned}</span>
          </div>
        </div>

        <div class="results-btns">
          <button class="btn btn-primary" onclick="startMatching(${m.levelId})">
            🔄 Rejouer (nouvelles paires)
          </button>
          <button class="btn btn-secondary" onclick="renderLevelMenu(${m.levelId})">
            ← Niveau ${m.levelId}
          </button>
          <button class="btn btn-secondary" onclick="renderHome()">
            🏠 Accueil
          </button>
        </div>
      </div>
    </div>`;
}

function renderStatsScreen() {
  const dates    = state.user?.activityDates || [];
  const { current, best } = calcPersonalStreak(dates);
  const mastered   = getTotalMastered();
  const totalStars = Object.values(state.save.stars).reduce((a, b) => a + b, 0);

  // Progression par chapitre + niveau
  const chaptersHTML = CHAPTERS.map(ch => {
    const chLocked = ch.id > 1 && !isChapterComplete(ch.id - 1);
    const chDone   = isChapterComplete(ch.id);
    const chVerbs  = VERBS.filter(v => {
      const lv = LEVELS.find(l => l.id === v.level);
      return lv && lv.chapter === ch.id;
    });
    const chMastered = chVerbs.filter(v => getMastery(v.id) >= 4).length;
    const chPct = Math.round((chMastered / chVerbs.length) * 100);

    const levelsHTML = LEVELS.filter(lv => lv.chapter === ch.id).map(lv => {
      const verbs      = VERBS.filter(v => v.level === lv.id);
      const stars      = getStars(lv.id);
      const masteredLv = verbs.filter(v => getMastery(v.id) >= 4).length;
      const unlocked   = !chLocked && isLevelUnlocked(lv.id);
      const pct        = Math.round((masteredLv / verbs.length) * 100);
      return `
        <div class="stats-level-row ${unlocked ? '' : 'locked'}">
          <div class="stats-level-label">
            <span class="stats-level-emoji">${lv.emoji}</span>
            <span class="stats-level-name">Niv. ${lv.id} ${lv.name}</span>
          </div>
          <div class="stats-level-right">
            <div class="stars" style="font-size:14px">${starsHTML(stars)}</div>
            <div class="stats-level-mastery">${masteredLv}/${verbs.length}</div>
            <div class="stats-mini-bar">
              <div class="stats-mini-fill" style="width:${unlocked ? pct : 0}%"></div>
            </div>
          </div>
        </div>`;
    }).join('');

    return `
      <div class="stats-chapter-block ${chLocked ? 'chapter-locked' : ''}">
        <div class="stats-chapter-header">
          <span>${ch.emoji} ${ch.name} — ${ch.subtitle}</span>
          <span class="stats-chapter-pct">${chLocked ? '🔒' : chPct + '%'}</span>
        </div>
        <div class="stats-levels-card">${levelsHTML}</div>
      </div>`;
  }).join('');

  app().innerHTML = `
    ${renderHeader('Mes statistiques')}
    <div class="screen-container" style="padding-bottom:48px">
      <button class="back-btn" onclick="renderHome()">← Accueil</button>
      <div class="screen-title">📊 Mes statistiques</div>

      <!-- Chiffres clés -->
      <div class="stats-bar" style="margin-bottom:20px">
        <div class="stat-card">
          <div class="stat-value">${state.save.xp}</div>
          <div class="stat-label">points XP</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${totalStars}</div>
          <div class="stat-label">étoiles</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${mastered}</div>
          <div class="stat-label">maîtrisés</div>
        </div>
      </div>

      <!-- Régularité -->
      <div class="stats-section-title">🔥 Régularité</div>
      ${renderStreakCard()}

      <!-- Progression par chapitre -->
      <div class="stats-section-title mt-16">📚 Progression par chapitre</div>
      ${chaptersHTML}
    </div>`;
}

/* ══════════════════════════════════════════
   FRIENDS
══════════════════════════════════════════ */
function todayStr() { return new Date().toISOString().slice(0, 10); }

function calcPersonalStreak(dates = []) {
  if (!dates.length) return { current: 0, best: 0 };
  const sorted = [...new Set(dates)].sort().reverse(); // newest first
  const today     = todayStr();
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);

  // Série en cours (doit inclure aujourd'hui ou hier)
  let current = 0;
  if (sorted[0] === today || sorted[0] === yesterday) {
    current = 1;
    for (let i = 1; i < sorted.length; i++) {
      if ((new Date(sorted[i - 1]) - new Date(sorted[i])) / 86400000 === 1) current++;
      else break;
    }
  }

  // Meilleure série (scan complet)
  const asc = [...sorted].reverse();
  let best = asc.length ? 1 : 0, run = 1;
  for (let i = 1; i < asc.length; i++) {
    if ((new Date(asc[i]) - new Date(asc[i - 1])) / 86400000 === 1) { run++; if (run > best) best = run; }
    else run = 1;
  }

  return { current, best };
}

function renderStreakCard() {
  const dates   = state.user?.activityDates || [];
  const { current, best } = calcPersonalStreak(dates);
  const activeSet = new Set(dates);

  // 35 derniers jours (5 semaines)
  const todayDate = new Date(); todayDate.setHours(0, 0, 0, 0);
  const cells = Array.from({ length: 35 }, (_, i) => {
    const d = new Date(todayDate); d.setDate(d.getDate() - (34 - i));
    const str = d.toISOString().slice(0, 10);
    return { str, isToday: i === 34, active: activeSet.has(str) };
  });

  // Décalage : quel jour de semaine (Lun=0) commence la grille ?
  const firstDay = new Date(todayDate); firstDay.setDate(firstDay.getDate() - 34);
  const offset   = (firstDay.getDay() + 6) % 7;

  const gridHTML = [
    ...Array(offset).fill('<div class="cal-day empty"></div>'),
    ...cells.map(c => `<div class="cal-day${c.active ? ' active' : ''}${c.isToday ? ' today' : ''}" title="${c.str}"></div>`),
  ].join('');

  const streakEmoji = current === 0 ? '💤' : current < 3 ? '✨' : current < 7 ? '⚡' : '🔥';
  const streakMsg   = current === 0
    ? 'Reviens aujourd\'hui pour lancer ta série !'
    : current === 1 ? 'C\'est parti ! Reviens demain 💪'
    : `${current} jour${current > 1 ? 's' : ''} d'affilée, continue !`;

  return `
    <div class="streak-card">
      <div class="streak-card-title">📅 Ma régularité</div>

      <div class="streak-stats-row">
        <div class="streak-stat-block">
          <div class="streak-big-num">${streakEmoji} ${current}</div>
          <div class="streak-stat-label">Série en cours</div>
        </div>
        <div class="streak-sep"></div>
        <div class="streak-stat-block">
          <div class="streak-big-num">🏆 ${best}</div>
          <div class="streak-stat-label">Meilleure série</div>
        </div>
      </div>

      <p class="streak-msg">${streakMsg}</p>

      <div class="cal-week-header">
        ${['L','M','M','J','V','S','D'].map(l => `<span>${l}</span>`).join('')}
      </div>
      <div class="cal-grid">${gridHTML}</div>

      <div class="cal-legend">
        <span class="cal-legend-dot"></span> Pas d'exercice &nbsp;
        <span class="cal-legend-dot active"></span> Exercice fait !
      </div>
    </div>`;
}

function recordActivity(xpEarned) {
  if (!state.user) return;
  const today = todayStr();
  if (!state.user.activityDates.includes(today)) state.user.activityDates.push(today);
  fbUpdateActivity(state.user.uid, xpEarned);
}

function checkInviteCode() {
  const params = new URLSearchParams(window.location.search);
  const code = params.get('invite');
  if (code) {
    state.pendingInviteCode = code.toUpperCase();
    const url = new URL(window.location);
    url.searchParams.delete('invite');
    window.history.replaceState({}, '', url);
  }
}

function calcSharedStreak(myDates = [], friendDates = []) {
  const fSet = new Set(friendDates);
  const shared = [...new Set(myDates.filter(d => fSet.has(d)))].sort().reverse();
  if (!shared.length) return 0;
  const today = todayStr();
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  if (shared[0] !== today && shared[0] !== yesterday) return 0;
  let streak = 1;
  for (let i = 1; i < shared.length; i++) {
    if ((new Date(shared[i - 1]) - new Date(shared[i])) / 86400000 === 1) streak++;
    else break;
  }
  return streak;
}

async function renderFriendsScreen() {
  if (!state.user) { showLoginScreen(); return; }

  app().innerHTML = `
    ${renderHeader('Amis')}
    <div class="screen-container">
      <button class="back-btn" onclick="renderHome()">← Accueil</button>
      <div style="text-align:center;padding:48px"><div class="spinner"></div></div>
    </div>`;

  try {
    const friendships = await fbGetFriendships(state.user.uid);
    const incoming  = friendships.filter(f => f.status === 'pending' && f.requestedBy !== state.user.uid);
    const accepted  = friendships.filter(f => f.status === 'accepted');

    const loadFriend = async f => {
      const fuid = f.uids.find(u => u !== state.user.uid);
      const data = await fbGetUserPublic(fuid);
      return { f, data };
    };
    const allData = await Promise.all([...incoming, ...accepted].map(loadFriend));

    const incomingHTML = allData
      .filter(({ f }) => f.status === 'pending')
      .map(({ f, data }) => {
        if (!data) return '';
        return `
          <div class="friend-card pending-card">
            <img src="${data.photoURL || ''}" class="friend-avatar" onerror="this.style.display='none'">
            <div class="friend-info">
              <div class="friend-name">${data.displayName || 'Ami'}</div>
              <div class="friend-sub">veut être ton ami !</div>
            </div>
            <button class="btn btn-green btn-small" onclick="handleAcceptFriend('${data.uid}')">✓ Accepter</button>
          </div>`;
      }).join('');

    const acceptedHTML = allData
      .filter(({ f }) => f.status === 'accepted')
      .map(({ data }) => {
        if (!data) return '';
        const streak  = calcSharedStreak(state.user.activityDates, data.activityDates || []);
        const combXP  = (state.save.xp || 0) + (data.xp || 0);
        const fStars  = Object.values(data.stars || {}).reduce((a, b) => a + b, 0);
        return `
          <div class="friend-card">
            <img src="${data.photoURL || ''}" class="friend-avatar" onerror="this.style.display='none'">
            <div class="friend-info">
              <div class="friend-name">${data.displayName || 'Ami'}</div>
              <div class="friend-stats-row">
                <span>⭐ ${data.xp || 0} XP</span>
                <span>★ ${fStars}</span>
              </div>
            </div>
            <div class="friend-right">
              ${streak > 0 ? `<div class="shared-streak">🔥 ${streak}j</div>` : ''}
              <div class="combined-xp">🤝 ${combXP} XP</div>
            </div>
          </div>`;
      }).join('');

    app().innerHTML = `
      ${renderHeader('👥 Amis')}
      <div class="screen-container">
        <button class="back-btn" onclick="renderHome()">← Accueil</button>
        <div class="screen-title">👥 Mes amis</div>

        ${incoming.length ? `<div class="section-title mt-16">🔔 Demandes reçues</div>${incomingHTML}` : ''}

        ${accepted.length
          ? `<div class="section-title mt-16">🤝 Amis (${accepted.length})</div>${acceptedHTML}`
          : `<div class="empty-state">
               <div style="font-size:48px;margin-bottom:12px">👋</div>
               <p>Pas encore d'amis.<br>Ajoute quelqu'un pour vous comparer !</p>
             </div>`}

        <button class="btn btn-primary mt-24" onclick="renderAddFriendScreen()">
          ➕ Ajouter un ami
        </button>
      </div>`;
  } catch (e) {
    app().innerHTML = `
      ${renderHeader('Amis')}
      <div class="screen-container">
        <button class="back-btn" onclick="renderHome()">← Accueil</button>
        <p style="color:var(--red);margin-top:24px">Erreur : ${e.message}</p>
        <button class="btn btn-primary mt-16" onclick="renderFriendsScreen()">Réessayer</button>
      </div>`;
  }
}

async function renderAddFriendScreen() {
  if (!state.user) { showLoginScreen(); return; }

  // Attendre que le code ami soit prêt si nécessaire
  if (!state.user.friendCode) {
    state.user.friendCode = await fbEnsureFriendCode(state.user.uid);
  }

  const code = state.user.friendCode || '...';
  const inviteUrl = `https://dliodenot.github.io/verbmaster/?invite=${code}`;
  const prefill   = state.pendingInviteCode || '';
  if (prefill) state.pendingInviteCode = null;

  app().innerHTML = `
    ${renderHeader('Ajouter un ami')}
    <div class="screen-container">
      <button class="back-btn" onclick="renderFriendsScreen()">← Amis</button>
      <div class="screen-title">Ajouter un ami</div>

      <div class="my-code-card">
        <div class="section-title" style="margin-bottom:12px">Mon code ami</div>
        <div class="friend-code-display">${code}</div>
        <div class="code-actions">
          <button class="btn btn-secondary btn-small" onclick="copyFriendCode('${code}')">📋 Code</button>
          <button class="btn btn-secondary btn-small" onclick="copyFriendLink('${inviteUrl}')">🔗 Lien</button>
        </div>
        <div class="qr-wrap">
          <div class="qr-label">QR code à scanner</div>
          <div id="qr-box"></div>
        </div>
      </div>

      <div class="section-title mt-24">Entrer le code d'un ami</div>
      <input type="text" id="friendCodeInput" class="type-in-input friend-code-input"
             placeholder="ex: ABC123" maxlength="6" value="${prefill}"
             oninput="this.value=this.value.toUpperCase().replace(/[^A-Z0-9]/g,'')">
      <button class="btn btn-primary mt-8" style="width:100%" onclick="handleSendFriendRequest()">
        Envoyer la demande 🤝
      </button>
      <div id="friendReqStatus"></div>
    </div>`;

  if (typeof QRCode !== 'undefined') {
    new QRCode(document.getElementById('qr-box'), {
      text: inviteUrl, width: 160, height: 160,
      colorDark: '#6c5ce7', colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.M,
    });
  }
  if (prefill) document.getElementById('friendCodeInput')?.focus();
}

async function handleSendFriendRequest() {
  const input  = document.getElementById('friendCodeInput');
  const code   = (input?.value || '').trim().toUpperCase();
  const status = document.getElementById('friendReqStatus');

  if (code.length !== 6) {
    status.innerHTML = `<p class="req-error">Le code doit faire 6 caractères.</p>`;
    return;
  }
  status.innerHTML = `<div class="spinner" style="margin:16px auto"></div>`;

  try {
    const friend = await fbGetUserByCode(code);
    if (!friend) { status.innerHTML = `<p class="req-error">Code introuvable. Vérifie et réessaie !</p>`; return; }
    if (friend.uid === state.user.uid) { status.innerHTML = `<p class="req-error">C'est ton propre code 😄</p>`; return; }

    const existing = await fbGetFriendship(state.user.uid, friend.uid);
    if (existing) {
      status.innerHTML = existing.status === 'accepted'
        ? `<p class="req-ok">Vous êtes déjà amis ! 🎉</p>`
        : `<p class="req-warn">Demande déjà envoyée ⏳</p>`;
      return;
    }

    await fbSendFriendRequest(state.user.uid, friend.uid);
    status.innerHTML = `
      <div class="feedback-bar correct mt-16">
        <span class="fb-icon">🎉</span>
        <div>Demande envoyée à <strong>${friend.displayName || 'ton ami'}</strong> !</div>
      </div>`;
    if (input) input.value = '';
  } catch (e) {
    status.innerHTML = `<p class="req-error">Erreur : ${e.message}</p>`;
  }
}

async function handleAcceptFriend(friendUid) {
  try {
    await fbAcceptFriendRequest(state.user.uid, friendUid);
    renderFriendsScreen();
  } catch (e) { alert('Erreur : ' + e.message); }
}

function copyFriendCode(code) {
  navigator.clipboard.writeText(code)
    .then(() => alert(`Code copié : ${code} 📋`))
    .catch(() => alert(`Ton code : ${code}`));
}

function copyFriendLink(url) {
  navigator.clipboard.writeText(url)
    .then(() => alert('Lien d\'invitation copié ! 🔗'))
    .catch(() => alert(`Lien : ${url}`));
}

/* ══════════════════════════════════════════
   AUTH & INIT
══════════════════════════════════════════ */
function renderLoading() {
  app().innerHTML = `
    ${renderHeader('')}
    <div style="display:flex;flex-direction:column;align-items:center;
                justify-content:center;height:60vh;gap:16px">
      <div class="spinner"></div>
      <p style="color:var(--muted);font-weight:600">Chargement…</p>
    </div>`;
}

let _emailMode = 'login';

function showLoginScreen() {
  _emailMode = 'login';
  _renderLoginScreen();
}

function setEmailMode(mode) {
  _emailMode = mode;
  _renderLoginScreen();
}

function _renderLoginScreen() {
  const reg = _emailMode === 'register';
  const GOOGLE_SVG = `<svg width="18" height="18" viewBox="0 0 18 18" style="flex-shrink:0">
    <path fill="#4285F4" d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 002.38-5.88c0-.57-.05-.66-.15-1.18z"/>
    <path fill="#34A853" d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 01-7.18-2.54H1.83v2.07A8 8 0 008.98 17z"/>
    <path fill="#FBBC05" d="M4.5 10.52a4.8 4.8 0 010-3.04V5.41H1.83a8 8 0 000 7.18l2.67-2.07z"/>
    <path fill="#EA4335" d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 001.83 5.4L4.5 7.49a4.77 4.77 0 014.48-3.31z"/>
  </svg>`;
  const APPLE_SVG = `<svg width="16" height="19" viewBox="0 0 17 20" fill="white" style="flex-shrink:0">
    <path d="M13.35 10.37c-.02-2.17 1.77-3.21 1.85-3.27-1.01-1.47-2.58-1.68-3.14-1.7-1.34-.14-2.61.79-3.29.79-.68 0-1.73-.77-2.85-.75-1.46.02-2.81.85-3.56 2.15C.79 10.15 1.8 14.1 3.33 16.22c.76 1.09 1.66 2.31 2.84 2.27 1.14-.05 1.57-.73 2.95-.73s1.77.73 2.97.71c1.23-.02 2.01-1.11 2.76-2.2.87-1.26 1.23-2.48 1.25-2.54-.03-.01-2.73-1.04-2.75-4.16zM11.29 3.82c.63-.76 1.05-1.82.93-2.88-.9.04-1.98.6-2.63 1.35-.58.67-1.08 1.74-.94 2.77.99.08 2.01-.5 2.64-1.24z"/>
  </svg>`;

  app().innerHTML = `
    ${renderHeader('Connexion')}
    <div class="screen-container">
      <div class="login-card">
        <div style="font-size:56px;margin-bottom:12px">☁️</div>
        <h2 class="screen-title">Synchronise ta progression</h2>
        <p class="screen-subtitle">Retrouve tes étoiles et ton XP sur tous tes appareils.</p>

        <div class="social-btns">
          <button class="btn-google" onclick="handleGoogleLogin()">
            ${GOOGLE_SVG} Continuer avec Google
          </button>
        </div>

        <div class="auth-divider"><span>ou</span></div>

        <div class="auth-tabs">
          <button class="auth-tab ${!reg ? 'active' : ''}" onclick="setEmailMode('login')">Se connecter</button>
          <button class="auth-tab ${reg ? 'active' : ''}"  onclick="setEmailMode('register')">Créer un compte</button>
        </div>

        <div class="auth-form">
          ${reg ? `<input type="text"  id="authName"     class="auth-input" placeholder="Ton prénom">` : ''}
          <input  type="email"         id="authEmail"    class="auth-input" placeholder="Adresse e-mail">
          <input  type="password"      id="authPassword" class="auth-input" placeholder="Mot de passe (6 caractères min.)">
          ${reg ? `<input type="password" id="authConfirm" class="auth-input" placeholder="Confirme le mot de passe">` : ''}
          <div id="loginError"></div>
          <button class="btn btn-primary" style="width:100%;margin-top:4px" onclick="handleEmailAuth()">
            ${reg ? 'Créer mon compte →' : 'Se connecter →'}
          </button>
          ${!reg ? `<button class="btn-forgot" onclick="handleResetPassword()">Mot de passe oublié ?</button>` : ''}
        </div>

        <div class="auth-divider"></div>
        <button class="btn btn-secondary" onclick="renderHome()" style="width:100%">
          Continuer sans compte
        </button>
      </div>
    </div>`;
}

async function handleGoogleLogin() {
  try {
    await fbSignInGoogle();
  } catch (e) {
    if (e.code !== 'auth/popup-closed-by-user') _showLoginError(e.message);
  }
}

async function handleAppleLogin() {
  try {
    await fbSignInApple();
  } catch (e) {
    if (e.code !== 'auth/popup-closed-by-user') _showLoginError(e.message);
  }
}

async function handleEmailAuth() {
  const email    = document.getElementById('authEmail')?.value.trim();
  const password = document.getElementById('authPassword')?.value;
  const confirm  = document.getElementById('authConfirm')?.value;
  const name     = document.getElementById('authName')?.value.trim();

  if (!email || !password) { _showLoginError('Remplis tous les champs.'); return; }

  if (_emailMode === 'register') {
    if (password.length < 6) { _showLoginError('Le mot de passe doit faire au moins 6 caractères.'); return; }
    if (password !== confirm) { _showLoginError('Les mots de passe ne correspondent pas.'); return; }
    try {
      await fbCreateAccount(email, password, name);
    } catch (e) { _showLoginError(_friendlyAuthError(e)); }
  } else {
    try {
      await fbSignInEmail(email, password);
    } catch (e) { _showLoginError(_friendlyAuthError(e)); }
  }
}

async function handleResetPassword() {
  const email = document.getElementById('authEmail')?.value.trim();
  if (!email) { _showLoginError('Entre ton adresse e-mail d\'abord.'); return; }
  try {
    await fbResetPassword(email);
    _showLoginError('✅ E-mail de réinitialisation envoyé !', true);
  } catch (e) { _showLoginError(_friendlyAuthError(e)); }
}

function _showLoginError(msg, success = false) {
  const el = document.getElementById('loginError');
  if (el) el.innerHTML = `<p class="${success ? 'req-ok' : 'req-error'}" style="margin:8px 0">${msg}</p>`;
}

function _friendlyAuthError(e) {
  const map = {
    'auth/user-not-found':       'Aucun compte avec cet e-mail.',
    'auth/wrong-password':       'Mot de passe incorrect.',
    'auth/email-already-in-use': 'Cet e-mail est déjà utilisé.',
    'auth/invalid-email':        'Adresse e-mail invalide.',
    'auth/weak-password':        'Mot de passe trop faible.',
    'auth/invalid-credential':   'E-mail ou mot de passe incorrect.',
  };
  return map[e.code] || e.message;
}

async function handleLogout() {
  if (confirm('Te déconnecter ? Ta progression reste sauvegardée.')) {
    await fbSignOut();
    // onAuthChange repassera avec user=null → renderHome()
  }
}

function mergeRemoteState(remote) {
  state.save.xp = Math.max(state.save.xp || 0, remote.xp || 0);
  Object.entries(remote.stars   || {}).forEach(([k, v]) => {
    state.save.stars[k]   = Math.max(state.save.stars[k]   || 0, v);
  });
  Object.entries(remote.mastery || {}).forEach(([k, v]) => {
    state.save.mastery[k] = Math.max(state.save.mastery[k] || 0, v);
  });
  saveState();
}

function initApp() {
  checkInviteCode();
  if (FIREBASE_READY) renderLoading();

  fbOnAuthChange(async user => {
    if (user) {
      state.user = { uid: user.uid, name: user.displayName, photo: user.photoURL,
                     friendCode: null, activityDates: [] };
      const remote = await fbLoad(user.uid);
      if (remote) {
        mergeRemoteState(remote);
        state.user.activityDates = remote.activityDates || [];
      } else {
        saveState();
      }
      // Génère le code ami si pas encore fait, sauvegarde le profil Google
      fbInitUserProfile(user.uid, user.displayName, user.photoURL).then(code => {
        state.user.friendCode = code;
      });
    } else {
      state.user = null;
    }
    renderHome();
  });
}

initApp();
