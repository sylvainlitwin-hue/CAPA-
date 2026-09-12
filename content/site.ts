/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  CAPA — FICHIER CENTRAL DE CONTENU
 * ─────────────────────────────────────────────────────────────────────────────
 *  Tous les textes, chiffres illustratifs, liens et images de la page sont
 *  définis ici. Aucun contenu éditorial ne doit être écrit en dur dans les
 *  composants.
 *
 *  Les nombres sont stockés en valeurs brutes (number) et formatés à
 *  l'affichage (séparateur de milliers français, unités). Voir lib/format.ts.
 * ─────────────────────────────────────────────────────────────────────────────
 */

/** Ligne de titre. `accent: true` passe la ligne en bleu technique. */
export type TitleLine = { text: string; accent?: boolean };

export const brand = {
  name: 'CAPA',
  wordmark: 'CAPA.',
  signature: 'Plus de capacité. Pas nécessairement plus de salariés.',
  signatureMono: 'PLUS DE CAPACITÉ. PAS NÉCESSAIREMENT PLUS DE SALARIÉS.',
  baseline: 'BUILD CAPACITY. MEASURE VALUE.',
  baselineParts: ['BUILD CAPACITY.', 'MEASURE VALUE.'],
  location: 'France / Remote',
  /** Année de référence affichée dans les repères techniques du document. */
  edition: '2026',
} as const;

/**
 * Liens. Le diagnostic pointera vers un formulaire Tally :
 * il suffit de remplacer `diagnostic.href` par l'URL Tally (ex.
 * https://tally.so/r/xxxxxx) — ou de renseigner `diagnostic.tallyFormId`
 * pour afficher le formulaire en embed dans la section 09.
 */
export const links = {
  diagnostic: {
    href: '#diagnostic',
    /** ex. 'w7XYZ1' — laisser null pour n'afficher que le bouton. */
    tallyFormId: null as string | null,
  },
  apply: { href: '#offre-fondateur' },
  legal: [
    { label: 'Mentions légales', href: '/mentions-legales' },
    { label: 'Confidentialité', href: '/confidentialite' },
    { label: 'Contact', href: 'mailto:contact@capa.fr' },
  ],
} as const;

export const nav = {
  items: [
    { label: 'Méthode', href: '#methode' },
    { label: 'Private AI', href: '#private-ai' },
    { label: 'Diagnostic', href: '#diagnostic' },
    { label: 'À propos', href: '#manifeste' },
  ],
  cta: { label: 'Évaluer mon entreprise', href: '#diagnostic' },
} as const;

/* ── 01 — HERO ────────────────────────────────────────────────────────────── */

export const hero = {
  index: '01',
  kicker: 'Intelligence artificielle privée pour PME · France',
  /**
   * Variante A (active). La variante B est conservée pour test A/B :
   * il suffit d'échanger `title` et `titleAlt`.
   */
  title: [
    { text: 'L’IA n’a aucune valeur' },
    { text: 'si elle ne crée pas' },
    { text: 'de valeur.', accent: true },
  ] as TitleLine[],
  titleAlt: [
    { text: 'Avant d’investir dans l’IA,' },
    { text: 'calculez ce qu’elle doit' },
    { text: 'vous rapporter.', accent: true },
  ] as TitleLine[],
  subtitle:
    'Nous aidons les dirigeants de PME à identifier où l’intelligence artificielle peut réellement leur faire gagner du temps, récupérer de la capacité et améliorer leur entreprise — avant de choisir la technologie.',
  /**
   * Le principe commercial. C'est LE message central de la marque :
   * il est posé dès le premier écran, sous la fiche technique.
   */
  principle: {
    label: 'Principe',
    text: 'Avant de vous vendre de l’IA, nous calculons si elle peut réellement vous rapporter davantage qu’elle ne vous coûte.',
  },
  primaryCta: { label: 'Faire le diagnostic gratuit', href: '#diagnostic' },
  secondaryCta: { label: 'Comprendre la méthode', href: '#methode' },
  microcopy: '5 minutes · Aucun document confidentiel nécessaire',
  panel: {
    title: 'ANALYSE',
    ref: 'CAPA / PROTOCOLE 5 POINTS',
    rows: [
      { n: '01', label: 'Temps', unit: 'h / mois' },
      { n: '02', label: 'Coûts', unit: '€' },
      { n: '03', label: 'Capacité', unit: '%' },
      { n: '04', label: 'Opportunités', unit: 'liste' },
      { n: '05', label: 'ROI', unit: 'mois' },
    ],
    footer: 'SORTIE : BUSINESS CASE CHIFFRÉ',
  },
} as const;

/* ── 02 — ENNEMI COMMUN ──────────────────────────────────────────────────── */

export const manifesto = {
  index: '02',
  sectionLabel: 'Ennemi commun',
  titleA: 'Le problème n’est pas le manque d’IA.',
  titleB: 'Le problème, c’est l’IA gadget.',
  lines: ['Des abonnements.', 'Des outils.', 'Des prompts.', 'Des démonstrations impressionnantes.'],
  closing: 'Et personne ne sait vraiment ce que cela rapporte.',
  declaration: 'Nous refusons l’IA pour faire de l’IA.',
  principlesLabel: 'Règles de travail',
  principles: [
    'Pas de technologie sans problème à résoudre.',
    'Pas d’automatisation sans valeur.',
    'Pas de données partagées sans raison.',
    'Pas de nouvel outil si l’ancien suffit.',
    'Pas d’investissement sans business case.',
  ],
} as const;

/* ── 03 — COÛTS INVISIBLES ───────────────────────────────────────────────── */

export const hiddenCosts = {
  index: '03',
  sectionLabel: 'Coûts invisibles',
  title: 'Une entreprise perd rarement de l’argent uniquement dans sa comptabilité.',
  intro: 'Elle en perd surtout là où personne ne mesure.',
  items: [
    { figure: '12 minutes', text: 'perdues pour retrouver un document.' },
    { figure: null, text: 'Un devis jamais relancé.' },
    { figure: null, text: 'Une réunion sans suivi.' },
    { figure: '4×', text: 'le même email réécrit.' },
    { figure: null, text: 'Un salarié qualifié sur une tâche mécanique.' },
    { figure: null, text: 'Un rapport jamais produit faute de temps.' },
    { figure: '1', text: 'seule personne détient la connaissance.' },
    { figure: null, text: 'Un recrutement envisagé pour absorber une surcharge évitable.' },
  ],
  equation: {
    terms: ['Temps', 'Fréquence', 'Coût humain'],
    result: 'Coût réel',
    note: 'Aucune de ces lignes n’apparaît dans un compte de résultat.',
  },
  closing: 'C’est ici que commence notre travail.',
} as const;

/* ── 04 — BUSINESS CASE / POINT CAPA ─────────────────────────────────────── */

/**
 * ⚠ DONNÉES STRICTEMENT ILLUSTRATIVES.
 * Elles servent à montrer la forme du raisonnement, pas à promettre un
 * résultat. Le disclaimer est affiché à l'écran et ne doit pas être retiré.
 */
export const businessCase = {
  index: '04',
  sectionLabel: 'Business case',
  title: 'L’IA doit pouvoir expliquer comment elle compte se rembourser.',
  caseLabel: 'Cas illustratif',
  caseRef: 'PME · 14 salariés · services',
  disclaimer: 'Exemple illustratif — les résultats réels dépendent de chaque entreprise.',
  rows: [
    { label: 'Temps identifié', value: 118, unit: 'h / mois', kind: 'int' as const },
    { label: 'Valeur horaire moyenne', value: 31, unit: '€', kind: 'int' as const },
    { label: 'Coût théorique étudié', value: 3658, unit: '€ / mois', kind: 'int' as const },
    { label: 'Capacité raisonnablement récupérable', value: 22, unit: '%', kind: 'int' as const },
    { label: 'Valeur annuelle potentielle', value: 9657, unit: '€', kind: 'int' as const },
    { label: 'Investissement initial', value: 4900, unit: '€', kind: 'int' as const },
  ],
  breakeven: {
    label: 'Point de rentabilité estimé',
    value: 6.1,
    unit: 'mois',
  },
  /** Paramètres du graphique propriétaire. */
  chart: {
    name: 'POINT CAPA',
    nameEn: 'THE CAPA POINT',
    definition:
      'Le moment estimé où la valeur cumulée récupérée compense l’investissement initial.',
    investment: 4900,
    annualValue: 9657,
    horizonMonths: 12,
    beforeLabel: 'Investissement à récupérer',
    afterLabel: 'Valeur nette produite',
    axisLabel: 'Mois',
  },
} as const;

/* ── 05 — MÉTHODE ────────────────────────────────────────────────────────── */

export const method = {
  index: '05',
  sectionLabel: 'Méthode',
  title: ['Nous commençons par votre entreprise.', 'Pas par nos outils.'],
  steps: [
    {
      n: '01',
      title: 'Diagnostiquer',
      text: 'Où partent réellement le temps, l’argent et la capacité ?',
      tag: 'Entrée',
    },
    {
      n: '02',
      title: 'Prioriser',
      text: 'Quels usages ont le meilleur rapport impact / difficulté / risque ?',
      tag: 'Filtre',
    },
    {
      n: '03',
      title: 'Construire',
      text: 'Mettre en place uniquement les capacités IA qui se justifient.',
      tag: 'Mise en œuvre',
    },
    {
      n: '04',
      title: 'Mesurer',
      text: 'Comparer avant / après : temps, coûts, capacité, résultats.',
      tag: 'Preuve',
    },
  ],
  flowNote: 'Une étape ne s’ouvre que si la précédente a produit un chiffre.',
} as const;

/* ── 06 — PRIVATE AI ─────────────────────────────────────────────────────── */

export const privateAi = {
  index: '06',
  sectionLabel: 'Private AI',
  title: ['Et lorsque les chiffres le justifient :', 'votre entreprise peut posséder sa propre IA.'],
  subtitle:
    'Une infrastructure d’intelligence artificielle privée, adaptée à vos connaissances, à vos utilisateurs et à vos processus.',
  statement: 'Elle travaille chez vous.',
  owned: [
    'Vos documents.',
    'Vos procédures.',
    'Votre savoir.',
    'Vos utilisateurs.',
    'Vos modèles.',
    'Vos règles.',
  ],
  closing: ['Pas seulement un nouvel abonnement SaaS.', 'Une capacité qui appartient à votre entreprise.'],
  link: { label: 'Voir les principes techniques', href: '#principes-techniques' },
  /**
   * VISUEL — remplaçable sans toucher au code.
   * `src: null` affiche le schéma technique vectoriel intégré (dessin au trait,
   * style manuel d'exploitation). Pour utiliser une photographie :
   *   src: '/images/private-ai.webp'  (noir et blanc, 4:5, ≥ 1200px de large)
   */
  figure: {
    src: null as string | null,
    alt: 'Schéma technique d’une unité de calcul locale installée dans les locaux de l’entreprise.',
    caption: 'FIG. 06 — Unité de calcul locale, installée dans vos locaux.',
    ref: 'Implantation',
    state: 'Projet',
  },
  principles: [
    'Les données restent sur une machine que vous possédez ; aucune donnée d’entreprise n’est envoyée à un service tiers pour être entraînée.',
    'Les modèles sont exécutés localement ; ils peuvent être remplacés ou mis à jour sans changer vos usages.',
    'Les droits d’accès suivent votre organisation réelle : par personne, par fonction, par document.',
    'Chaque réponse peut citer la source interne dont elle provient.',
    'Tout ce qui est mis en place doit rester compréhensible et administrable par une personne non technicienne.',
  ],
} as const;

/* ── 07 — CE QU’ELLE PEUT FAIRE ──────────────────────────────────────────── */

export const useCases = {
  index: '07',
  sectionLabel: 'Usages',
  title: ['Une capacité.', 'Plusieurs métiers.'],
  items: [
    {
      n: '01',
      title: 'Direction',
      text: 'Résumer l’activité, détecter les problèmes et préparer les décisions.',
    },
    {
      n: '02',
      title: 'Connaissance',
      text: 'Transformer documents et procédures en mémoire d’entreprise consultable.',
    },
    {
      n: '03',
      title: 'Commercial',
      text: 'Détecter les leads oubliés, préparer les relances et analyser le pipeline.',
    },
    {
      n: '04',
      title: 'SAV',
      text: 'Retrouver instantanément les bonnes réponses et réduire le travail répétitif.',
    },
    {
      n: '05',
      title: 'Marketing',
      text: 'Transformer l’expertise interne en contenu et en actifs commerciaux.',
    },
    {
      n: '06',
      title: 'Opportunités',
      text: 'Chercher régulièrement où l’entreprise peut gagner du temps, réduire ses coûts ou créer davantage de valeur.',
    },
  ],
} as const;

/* ── 08 — CAPACITÉ VS RECRUTEMENT ────────────────────────────────────────── */

export const capacity = {
  index: '08',
  sectionLabel: 'Capacité',
  title: 'Vous n’avez peut-être pas besoin d’embaucher.',
  subtitle:
    'Vous avez peut-être besoin d’augmenter la capacité de l’entreprise que vous avez déjà.',
  disclaimer: 'Exemple illustratif — ordres de grandeur, non transposables tels quels.',
  left: {
    label: 'Recrutement',
    value: 45000,
    unit: '€ / an',
    note: 'Coût annuel récurrent, avant montée en compétence.',
  },
  right: {
    label: 'Récupération de capacité',
    value: 4900,
    unit: '€',
    note: 'Investissement initial de l’exemple § 04.',
  },
  vs: 'VS',
  statement: [
    'L’objectif n’est pas de remplacer les personnes.',
    'L’objectif est d’éviter qu’elles consacrent leur valeur à des tâches qui n’en ont pas.',
  ],
} as const;

/* ── 09 — DIAGNOSTIC ─────────────────────────────────────────────────────── */

export const diagnostic = {
  index: '09',
  sectionLabel: 'Diagnostic',
  title: 'Votre entreprise est-elle prête ?',
  text: 'En 5 minutes, identifiez les zones où l’IA pourrait présenter le plus de potentiel économique.',
  excludes: ['Aucun document confidentiel', 'Aucun accès CRM', 'Aucune donnée client'],
  includesLabel: 'Questions générales',
  includes: ['Effectifs', 'CA par tranche', 'Activité', 'Processus', 'Temps', 'Maturité IA'],
  cta: { label: 'Évaluer mon entreprise', href: '#diagnostic' },
  microcopy: 'Gratuit · 5 minutes · Sans engagement',
} as const;

/* ── 10 — OFFRE FONDATEUR ────────────────────────────────────────────────── */

export const founder = {
  index: '10',
  sectionLabel: 'Offre fondateur',
  title: 'Nous recherchons 5 PME fondatrices.',
  text: 'Nous ouvrons actuellement le programme à un nombre volontairement limité d’entreprises afin de finaliser la méthode sur des situations réelles.',
  seats: 5,
  seatsLabel: 'Places ouvertes',
  offer: {
    name: 'Private AI Builder',
    priceLabel: 'Tarif fondateur',
    price: 1490,
    priceUnit: '€ HT',
    includes: [
      'Diagnostic approfondi',
      'Cartographie des opportunités',
      'Roadmap IA personnalisée',
      'Architecture recommandée',
      'Formation',
      'Accompagnement à l’installation',
      'Premiers usages métier',
      'Suivi de mise en place',
    ],
    exclusion: 'Matériel non compris.',
    reserved: 'Tarif réservé aux premières entreprises participant à la phase fondatrice.',
  },
  cta: { label: 'Candidater au programme', href: '#diagnostic' },
} as const;

/* ── 11 — MANIFESTE FINAL ────────────────────────────────────────────────── */

export const finalManifesto = {
  index: '11',
  sectionLabel: 'Manifeste',
  opening: [
    'Nous croyons que l’avenir de l’IA en entreprise',
    'ne sera pas une collection infinie d’outils.',
  ],
  pivot: 'Ce sera une capacité.',
  lines: [
    'Une capacité qui connaît l’entreprise.',
    'Une capacité qui travaille avec ses équipes.',
    'Une capacité que l’entreprise peut contrôler.',
    'Une capacité dont on peut mesurer la valeur.',
  ],
  cta: { label: 'Faire le diagnostic', href: '#diagnostic' },
} as const;

/* ── 12 — FOOTER ─────────────────────────────────────────────────────────── */

export const footer = {
  index: '12',
  gridHint: 'GRILLE ÉDITORIALE — TOUCHE [G]',
} as const;

export const meta = {
  title: 'CAPA — Plus de capacité. Pas nécessairement plus de salariés.',
  description:
    'Avant de vous vendre de l’IA, nous calculons si elle peut réellement vous rapporter davantage qu’elle ne vous coûte. Diagnostic, business case et IA privée pour les PME françaises.',
  url: 'https://capa.fr',
  locale: 'fr_FR',
} as const;
