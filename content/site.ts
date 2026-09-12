/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  CAPA — FICHIER CENTRAL DE CONTENU
 * ─────────────────────────────────────────────────────────────────────────────
 *  Tous les textes, chiffres illustratifs, liens et images de la page sont
 *  définis ici. Aucun contenu éditorial ne doit être écrit en dur dans les
 *  composants.
 *
 *  RÈGLE D'ÉCRITURE — LA PAGE PARLE À UNE SEULE PERSONNE.
 *  Un dirigeant de PME, assis en face. Donc : « je » et « vous ».
 *  Jamais « nous », jamais « les entreprises », jamais « vos équipes » en
 *  permanence. Chaque phrase doit pouvoir être dite à voix haute, en
 *  rendez-vous. Moins de texte, plus de reconnaissance, plus de chiffres.
 *
 *  AUCUN PRIX. Un seul appel à l'action : « Évaluer mon entreprise ».
 *
 *  ORDRE DE LECTURE
 *  01 Accroche · 02 Moi · 03 Vous vous reconnaissez ? · 04 Ce que coûtent
 *  15 minutes · 05 L'IA est déjà là · 06 Repères chiffrés · 07 Ma méthode ·
 *  08 Votre propre IA · 09 Pas de prix avant le problème ·
 *  10 Commencez simplement
 *
 *  DEUX SORTES DE CHIFFRES, JAMAIS MÉLANGÉES.
 *  — Les chiffres CALCULÉS (§ 04) : dérivés de `timeCost.params` dans
 *    lib/capa.ts. Arithmétique vérifiable, présentée comme un exemple.
 *  — Les chiffres SOURCÉS (§ 06) : statistiques publiques, avec l'organisme,
 *    l'année, le périmètre et le lien. Ne jamais ajouter de statistique sans
 *    ces quatre éléments, et ne jamais présenter un ordre de grandeur
 *    d'exemple comme une donnée d'enquête.
 * ─────────────────────────────────────────────────────────────────────────────
 */

/** Chiffre sourcé du § 06. `accent` met le chiffre en bleu technique. */
export type Benchmark = {
  value: number;
  unit: string;
  label: string;
  /** Année ou période de l'enquête — toujours affichée sous le chiffre. */
  ref: string;
  prefix?: string;
  accent?: boolean;
};

export const brand = {
  name: 'CAPA',
  wordmark: 'CAPA.',
  signature: 'Plus de capacité. Pas nécessairement plus de salariés.',
  signatureMono: 'PLUS DE CAPACITÉ. PAS NÉCESSAIREMENT PLUS DE SALARIÉS.',
  baseline: 'BUILD CAPACITY. MEASURE VALUE.',
  baselineParts: ['BUILD CAPACITY.', 'MEASURE VALUE.'],
  location: 'France / Remote',
  edition: '2026',
  /** Mention portée par le folio de bas de section, comme sur un rapport. */
  documentTitle: 'Note d’orientation',
} as const;

/**
 * Liens. Le diagnostic pointera vers un formulaire Tally :
 * remplacer `diagnostic.href` par l'URL Tally (ex. https://tally.so/r/xxxxxx)
 * — ou renseigner `diagnostic.tallyFormId` pour l'afficher en embed en § 10.
 */
export const links = {
  diagnostic: {
    href: '#diagnostic',
    /** ex. 'w7XYZ1' — laisser null pour n'afficher que le bouton. */
    tallyFormId: null as string | null,
  },
  legal: [
    { label: 'Mentions légales', href: '/mentions-legales' },
    { label: 'Confidentialité', href: '/confidentialite' },
    { label: 'Contact', href: 'mailto:contact@capa.fr' },
  ],
} as const;

export const nav = {
  items: [
    { label: 'Ma méthode', href: '#methode' },
    { label: 'Private AI', href: '#private-ai' },
    { label: 'Pourquoi CAPA', href: '#pourquoi-capa' },
    { label: 'Diagnostic', href: '#diagnostic' },
  ],
  cta: { label: 'Diagnostic gratuit', href: '#diagnostic' },
} as const;

/** L'appel à l'action unique, répété sur toute la page. */
export const cta = {
  label: 'Évaluer mon entreprise',
  href: '#diagnostic',
  microcopy: '5 minutes · Aucun document confidentiel nécessaire',
} as const;

/* ── 01 — ACCROCHE ───────────────────────────────────────────────────────── */

export const hero = {
  index: '01',
  kicker: 'Intelligence artificielle · PME · France',
  /** Le constat qu'il accepte déjà. */
  titleA: 'Vous savez que l’IA peut vous faire gagner du temps.',
  /** La question qu'il ne s'est pas encore posée. C'est le crochet. */
  titleB: 'Mais savez-vous où elle peut réellement vous faire gagner de l’argent ?',
  subtitle:
    'Avant de vous vendre un outil, je cherche où votre entreprise perd du temps, de la capacité et de l’argent — puis je regarde ce que l’IA peut réellement améliorer.',
  secondaryCta: { label: 'Voir ma méthode', href: '#methode' },
  panel: {
    title: 'CE QUE JE REGARDE',
    ref: '5 POINTS',
    rows: [
      { n: '01', label: 'Temps', unit: 'h / mois' },
      { n: '02', label: 'Coûts', unit: '€' },
      { n: '03', label: 'Capacité', unit: '%' },
      { n: '04', label: 'Opportunités', unit: 'liste' },
      { n: '05', label: 'Retour', unit: 'mois' },
    ],
    footer: 'SORTIE : UN CHIFFRE, PAS UNE DÉMO',
  },
} as const;

/* ── 02 — MOI ────────────────────────────────────────────────────────────── */

export const me = {
  index: '02',
  sectionLabel: 'Moi',
  note: 'QUI VOUS PARLE',
  /**
   * PORTRAIT — remplaçable sans toucher au code.
   * Déposer la photographie dans `public/images/fondateur.jpg`, puis
   * renseigner `src: '/images/fondateur.jpg'`. Tant que `src` vaut `null`,
   * un emplacement réservé au format 4:5 est affiché (convention de
   * maquette imprimée), avec le chemin attendu.
   *
   * Direction : portrait réel, naturel, noir et blanc ou monochrome,
   * regard caméra ou situation de travail. Pas de portrait de banque
   * d'images, pas d'image générée.
   */
  portrait: {
    src: null as string | null,
    expectedPath: '/images/fondateur.jpg',
    alt: 'Portrait de Sylvain.',
    caption: 'Sylvain.',
    ratio: '4:5',
  },
  name: 'Sylvain',
  role: 'Entrepreneur',
  lines: [
    'Je suis entrepreneur.',
    'J’ai construit cette méthode d’abord pour mes propres entreprises.',
  ],
  emphasis: ['Je ne cherche pas à mettre de l’IA partout.', 'Je cherche à savoir où elle mérite vraiment sa place.'],
} as const;

/* ── 03 — VOUS VOUS RECONNAISSEZ ? ───────────────────────────────────────── */

export const recognition = {
  index: '03',
  sectionLabel: 'Reconnaissance',
  note: 'VOUS',
  title: 'Vous vous reconnaissez ?',
  lines: [
    'Vous utilisez déjà ChatGPT de temps en temps.',
    'Vos salariés aussi, probablement.',
  ],
  lossesLabel: 'Vous perdez encore du temps à',
  losses: [
    'chercher des informations',
    'refaire les mêmes réponses',
    'relancer manuellement',
    'préparer des documents',
    'ressaisir des données',
    'suivre des tâches qui devraient être simples',
  ],
  unknown: 'Et vous ne savez pas vraiment ce que tout cela vous coûte.',
  closing: 'C’est là que je commence.',
} as const;

/* ── 04 — CE QUE COÛTENT 15 MINUTES ──────────────────────────────────────── */

/**
 * ⚠ CHIFFRES ILLUSTRATIFS — mais le calcul est vrai et vérifiable :
 * 15 min × 10 fois par jour × 220 jours = 550 h / an, soit 16 500 € à 30 €/h.
 * Les valeurs sont dérivées dans lib/capa.ts : modifier ici suffit.
 */
export const timeCost = {
  index: '04',
  sectionLabel: 'Arithmétique',
  note: 'CALCUL SIMPLE',
  title: '15 minutes peuvent coûter très cher.',
  /** Les paramètres du calcul. Tout le reste en est dérivé (lib/capa.ts). */
  params: { minutes: 15, perDay: 10, daysPerYear: 220, hourlyRate: 30 },
  termUnits: ['min', 'fois par jour', 'jours'],
  hoursLabel: 'Soit',
  hoursUnit: 'heures / an',
  costUnit: '€ / an',
  disclaimer: 'Exemple illustratif. Vos chiffres seront différents.',
  /** Les mêmes heures, dites autrement : c'est là que ça devient concret. */
  conversions: {
    label: 'Les mêmes heures, autrement',
    perDay: 'par jour',
    perWeek: 'par semaine',
    fte: 'd’un poste à temps plein',
    fteBasis: 'base 1 607 h / an',
  },
  lines: [
    'Le problème n’est souvent pas une grosse perte.',
    'Ce sont des petites pertes répétées toute l’année.',
  ],
  /**
   * Abaque : le lecteur se situe lui-même. Toutes les cases sont calculées
   * (minutes / 60 × jours × personnes × taux horaire) — aucune n'est saisie
   * à la main. La case correspondant à l'exemple ci-dessus ressort en bleu.
   */
  table: {
    label: 'Et si ce n’est pas 15 minutes',
    rowsLabel: 'Temps perdu par jour, par personne',
    colsUnit: 'personne',
    colsUnitPlural: 'personnes',
    minutesPerDay: [30, 60, 120, 150],
    people: [1, 3, 10],
    note: 'Coût annuel estimé au même taux horaire. La case bleue est l’exemple ci-dessus.',
  },
  /** Le Point CAPA, réduit à l'essentiel : la façon dont je juge un investissement. */
  capaPoint: {
    label: 'Point CAPA',
    intro: 'Et quand un investissement se présente, voici comment je le juge.',
    definition:
      'J’estime le moment où la valeur cumulée récupérée compense l’investissement.',
    chart: {
      name: 'POINT CAPA',
      investment: 6000,
      monthlyValue: 1400,
      horizonMonths: 12,
      beforeLabel: 'Investissement à récupérer',
      afterLabel: 'Valeur nette produite',
      axisLabel: 'Mois',
    },
    disclaimer: 'Exemple illustratif. Chaque entreprise nécessite sa propre analyse.',
  },
} as const;

/* ── 05 — L’IA EST DÉJÀ LÀ ───────────────────────────────────────────────── */

export const shadow = {
  index: '05',
  sectionLabel: 'Gouvernance',
  note: 'ÉTAT DES LIEUX',
  title: 'Et l’IA est peut-être déjà dans votre entreprise.',
  usages: [
    'Un salarié copie un devis dans ChatGPT.',
    'Un autre résume un document.',
    'Un autre prépare une réponse client.',
  ],
  statement: 'Le problème n’est pas qu’ils utilisent l’IA.',
  unknownsLabel: 'Le problème est que vous ne savez pas toujours',
  unknowns: [
    'avec quelles données',
    'avec quels outils',
    'pour quels usages',
    'avec quelles règles',
  ],
  /** La phrase que le lecteur doit retenir. */
  slogan: 'L’IA sauvage n’est pas une stratégie.',
} as const;

/* ── 06 — REPÈRES CHIFFRÉS ───────────────────────────────────────────────── */

/**
 * ⚠ STATISTIQUES PUBLIQUES — à vérifier avant mise en ligne, et à mettre à
 * jour à chaque nouvelle vague d'enquête. Chaque chiffre porte son organisme,
 * son année et son périmètre ; le lien renvoie à la publication.
 *
 * Aucune statistique ne doit figurer ici sans source vérifiable. En cas de
 * doute sur un chiffre : le retirer, pas l'arrondir.
 */
export const benchmarks = {
  index: '06',
  sectionLabel: 'Repères',
  note: 'CHIFFRES SOURCÉS',
  title: 'Où en sont les autres ?',
  figures: [
    {
      value: 18,
      unit: '%',
      label: 'des entreprises implantées en France utilisent au moins une technologie d’IA',
      ref: '2025',
    },
    {
      value: 15,
      unit: '%',
      label: 'chez les entreprises de 10 à 49 salariés',
      ref: '2025',
      accent: true,
    },
    {
      value: 58,
      unit: '%',
      label: 'chez les entreprises de 250 salariés et plus',
      ref: '2025',
    },
    {
      value: 8,
      prefix: '+',
      unit: 'points',
      label: 'de progression en un an, toutes tailles confondues',
      ref: '2024 → 2025',
    },
  ] as Benchmark[],
  source: {
    label: 'Source',
    text: 'Insee, enquête TIC 2025 — entreprises de 10 salariés ou plus. Moyenne de l’Union européenne : 20 %.',
    href: 'https://www.insee.fr/fr/statistiques/9025878',
    linkLabel: 'Insee Première n° 2120',
  },
  /** Ma lecture de ces chiffres — en « je », comme le reste de la page. */
  reading: [
    'Les grandes entreprises ont pris de l’avance.',
    'Ce n’est pas une raison de copier ce qu’elles font : leurs problèmes ne sont pas les vôtres.',
  ],
} as const;

/* ── 07 — MA MÉTHODE ─────────────────────────────────────────────────────── */

export const method = {
  index: '07',
  sectionLabel: 'Ma méthode',
  note: '3 ÉTAPES',
  title: 'Ma méthode est simple.',
  steps: [
    { n: '01', title: 'Mesurer', text: 'Où perdez-vous du temps, de l’argent ou de la capacité ?' },
    { n: '02', title: 'Prioriser', text: 'Qu’est-ce qui mérite vraiment d’être amélioré ?' },
    {
      n: '03',
      title: 'Construire',
      text: 'Seulement ensuite, on choisit l’outil, l’automatisation ou l’IA privée.',
    },
  ],
  /** Aucun dogme : la bonne réponse est parfois l'absence de projet. */
  answers: [
    'Parfois la bonne réponse est ChatGPT.',
    'Parfois une automatisation.',
    'Parfois une IA locale.',
    'Parfois… rien de plus.',
  ],
} as const;

/* ── 08 — VOTRE PROPRE IA ────────────────────────────────────────────────── */

export const privateAi = {
  index: '08',
  sectionLabel: 'Private AI',
  note: 'SI CELA A DU SENS',
  title: 'Et si cela a du sens, votre entreprise peut posséder sa propre IA.',
  lines: [
    'Une IA privée qui connaît vos documents, vos procédures, vos produits et votre façon de travailler.',
  ],
  emphasis: ['Pas pour remplacer vos salariés.', 'Pour leur éviter une partie du travail inutile.'],
  /**
   * VISUEL — remplaçable sans toucher au code.
   * `src: null` affiche le schéma technique vectoriel intégré.
   * La machine n'est jamais le sujet : elle reste une planche annexe.
   */
  figure: {
    src: null as string | null,
    alt: 'Schéma d’une unité de calcul installée dans les locaux de l’entreprise.',
    caption: 'Une machine chez vous, rien de plus.',
    aside: 'Pas de jargon ici : ce qui compte est ce que vous en faites.',
  },
} as const;

/* ── 09 — PAS DE PRIX AVANT LE PROBLÈME ──────────────────────────────────── */

export const noPrice = {
  index: '09',
  sectionLabel: 'Pourquoi CAPA',
  note: 'AUCUN PRIX STANDARD',
  title: 'Je ne vous donne pas un prix avant de savoir ce qu’il y a à résoudre.',
  lines: [
    'Une entreprise de 6 personnes et une entreprise de 30 personnes n’ont pas les mêmes besoins.',
    'Je préfère d’abord comprendre votre situation.',
    'Ensuite seulement, si cela a du sens, je vous fais une recommandation.',
  ],
  /** La phrase qui vaut engagement. */
  promise: 'Si je pense que l’investissement n’est pas justifié, je vous le dirai.',
} as const;

/* ── 10 — COMMENCEZ SIMPLEMENT ───────────────────────────────────────────── */

export const start = {
  index: '10',
  sectionLabel: 'Diagnostic',
  note: 'GRATUIT / 5 MIN',
  title: 'Commencez simplement.',
  lines: ['Répondez à quelques questions sur votre entreprise.'],
  excludes: ['Aucun document.', 'Aucun accès à vos systèmes.', 'Aucune donnée client nécessaire.'],
  microcopy: 'Gratuit · 5 minutes · Sans engagement',
} as const;

/* ── PIED DE PAGE ────────────────────────────────────────────────────────── */

export const footer = {
  gridHint: 'GRILLE ÉDITORIALE — TOUCHE [G]',
} as const;

export const meta = {
  title: 'CAPA — Où l’IA peut-elle vraiment vous faire gagner de l’argent ?',
  description:
    'Avant de vous vendre un outil, je cherche où votre entreprise perd du temps, de la capacité et de l’argent. Diagnostic gratuit en 5 minutes, pour dirigeants de PME.',
  url: 'https://capa.fr',
  locale: 'fr_FR',
} as const;
