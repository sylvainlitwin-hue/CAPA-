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
 *
 *  ORDRE DE LECTURE DU DOCUMENT
 *  01 Hero · 02 Point de vue (fondateur) · 03 Ennemi commun ·
 *  04 Coûts invisibles · 05 Business case · 06 Méthode ·
 *  07 Shadow AI · 08 Frontière · 09 Données sensibles ·
 *  [intertitre] · 10 Deux questions · 11 Architecture · [parole] ·
 *  12 Private AI · 13 Usages · 14 Capacité · 15 Diagnostic ·
 *  16 Offre fondateur · 17 Manifeste · Pied de page
 * ─────────────────────────────────────────────────────────────────────────────
 */

/** Ligne de titre. `accent: true` passe la ligne en bleu technique. */
export type TitleLine = { text: string; accent?: boolean };

/** Colonne d'architecture. `quote` remplace la liste (cas « hybride »). */
export type ArchColumn = {
  n: string;
  title: string;
  items: readonly string[];
  quote?: string;
};

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
  /** Mention portée par le folio de bas de section, comme sur un rapport. */
  documentTitle: 'Rapport d’orientation',
} as const;

/**
 * Liens. Le diagnostic pointera vers un formulaire Tally :
 * il suffit de remplacer `diagnostic.href` par l'URL Tally (ex.
 * https://tally.so/r/xxxxxx) — ou de renseigner `diagnostic.tallyFormId`
 * pour afficher le formulaire en embed dans la section 15.
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
    { label: 'Gouvernance', href: '#shadow-ai' },
    { label: 'Private AI', href: '#private-ai' },
    { label: 'Diagnostic', href: '#diagnostic' },
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

/* ── 02 / interstitiels — LA PAROLE DU FONDATEUR ──────────────────────────
   L'humain reste visuellement dominant : il parle avant la technologie,
   au milieu du document, puis en conclusion.
   ──────────────────────────────────────────────────────────────────────── */

export const founderVoice = {
  /**
   * PORTRAIT — remplaçable sans toucher au code.
   * Déposer la photographie dans `public/images/fondateur.jpg`, puis
   * renseigner `src: '/images/fondateur.jpg'`. Tant que `src` vaut `null`,
   * un emplacement réservé au format 4:5 est affiché (convention de
   * maquette imprimée), avec le chemin attendu.
   *
   * Direction : portrait réel, naturel, noir et blanc ou monochrome,
   * regard caméra ou situation de travail. Pas de portrait corporate de
   * banque d'images, pas d'image générée.
   */
  portrait: {
    src: null as string | null,
    expectedPath: '/images/fondateur.jpg',
    alt: 'Portrait de Sylvain, fondateur de CAPA.',
    caption: 'Sylvain, fondateur.',
    ratio: '4:5',
  },
  name: 'Sylvain',
  role: 'Entrepreneur',

  intro: {
    index: '02',
    sectionLabel: 'Point de vue',
    note: 'LE FONDATEUR',
    lines: [
      'Je suis entrepreneur avant d’être technicien.',
      'Je construis cette approche parce que je veux savoir ce que l’IA peut réellement apporter à une entreprise — et ce qu’elle ne devrait surtout pas faire.',
    ],
    emphasis: ['La technologie doit augmenter les personnes.', 'Pas leur compliquer la vie.'],
  },

  /** Intertitre humain, juste avant l'apparition de l'infrastructure. */
  mid: {
    label: 'Rappel',
    lines: [
      'Une entreprise n’est pas une collection de processus.',
      'Ce sont des personnes, des connaissances, des décisions et une histoire.',
    ],
    closing: ['L’IA doit travailler autour de cela.', 'Pas l’inverse.'],
  },

  close: {
    label: 'Pour finir',
    lines: [
      'Je ne pense pas que chaque entreprise ait besoin de davantage d’IA.',
      'Je pense qu’elle a besoin de mieux choisir où elle l’utilise.',
      'Et lorsque l’IA peut réellement améliorer son fonctionnement, elle doit pouvoir le faire sans lui faire perdre le contrôle de ce qui fait sa valeur.',
    ],
    cta: { label: 'Évaluer mon entreprise', href: '#diagnostic' },
  },
} as const;

/* ── 03 — ENNEMI COMMUN ──────────────────────────────────────────────────── */

export const manifesto = {
  index: '03',
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

/* ── 04 — COÛTS INVISIBLES ───────────────────────────────────────────────── */

export const hiddenCosts = {
  index: '04',
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

/* ── 05 — BUSINESS CASE / POINT CAPA ─────────────────────────────────────── */

/**
 * ⚠ DONNÉES STRICTEMENT ILLUSTRATIVES.
 * Elles servent à montrer la forme du raisonnement, pas à promettre un
 * résultat. Le disclaimer est affiché à l'écran et ne doit pas être retiré.
 */
export const businessCase = {
  index: '05',
  sectionLabel: 'Business case',
  title: 'L’IA doit pouvoir expliquer comment elle compte se rembourser.',
  caseLabel: 'Cas illustratif',
  caseRef: 'PME · 14 salariés · services',
  disclaimer: 'Exemple illustratif — les résultats réels dépendent de chaque entreprise.',
  rows: [
    { label: 'Temps identifié', value: 118, unit: 'h / mois' },
    { label: 'Valeur horaire moyenne', value: 31, unit: '€' },
    { label: 'Coût théorique étudié', value: 3658, unit: '€ / mois' },
    { label: 'Capacité raisonnablement récupérable', value: 22, unit: '%' },
    { label: 'Valeur annuelle potentielle', value: 9657, unit: '€' },
    { label: 'Investissement initial', value: 4900, unit: '€' },
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

/* ── 06 — MÉTHODE ────────────────────────────────────────────────────────── */

export const method = {
  index: '06',
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

/* ── 07 — SHADOW AI ──────────────────────────────────────────────────────── */

export const shadowAi = {
  index: '07',
  sectionLabel: 'Gouvernance',
  note: 'ÉTAT DES LIEUX',
  title: 'L’IA est probablement déjà dans votre entreprise.',
  question: 'Mais qui la contrôle ?',
  usages: [
    'Un collaborateur résume un document.',
    'Un commercial améliore une proposition.',
    'Un responsable copie un tableau.',
    'Une équipe demande à une IA d’analyser un texte.',
    'Un salarié cherche une réponse dans un contrat.',
  ],
  hedge: 'Cela peut déjà se produire aujourd’hui.',
  statement: 'Le problème n’est pas que vos équipes utilisent l’IA.',
  openingLine: 'Le problème commence lorsque l’entreprise ne sait pas :',
  unknowns: ['où,', 'comment,', 'avec quelles données,', 'avec quelles règles,', 'et avec quels outils elle est utilisée.'],
  term: {
    name: 'SHADOW AI',
    label: 'Définition',
    definition:
      'Des usages d’intelligence artificielle réalisés en dehors d’un cadre défini par l’entreprise.',
  },
} as const;

/* ── 08 — FRONTIÈRE DE L’ENTREPRISE ──────────────────────────────────────── */

/**
 * Formulation volontairement mesurée : on ne prétend pas que ces
 * informations sont exploitées, publiques ou utilisées pour entraîner des
 * modèles. On constate seulement qu'elles sortent du périmètre technique
 * direct de l'entreprise, ce qui appelle une décision.
 */
export const frontier = {
  index: '08',
  sectionLabel: 'Frontière',
  note: 'PÉRIMÈTRE',
  title: 'Ce qui peut sortir de l’entreprise.',
  inside: 'Votre entreprise',
  boundary: 'Frontière de l’entreprise',
  outside: 'Services externes non gouvernés',
  items: [
    'Email client',
    'Contrat',
    'Marge produit',
    'Devis',
    'Procédure interne',
    'Données RH',
    'Code / documentation technique',
    'Stratégie commerciale',
    'Tarifs fournisseurs',
    'Données comptables',
    'Roadmap produit',
    'Compte-rendu de direction',
    'Identifiants / clés API',
    'Propriété intellectuelle',
  ],
  statement: [
    'Le problème n’est pas nécessairement le fournisseur utilisé.',
    'Le problème est l’absence de décision consciente de l’entreprise.',
  ],
  caution:
    'Une information envoyée dans un service externe sort du périmètre technique direct de l’entreprise et doit donc faire l’objet d’un choix, de règles et de garanties adaptées.',
} as const;

/* ── 09 — DONNÉES SENSIBLES ──────────────────────────────────────────────── */

export const sensitiveData = {
  index: '09',
  sectionLabel: 'Inventaire',
  note: '8 FAMILLES',
  title: 'Les données les plus sensibles ne sont pas toujours celles auxquelles on pense.',
  groups: [
    { n: '01', title: 'Clients', items: ['coordonnées', 'historique', 'commandes', 'réclamations', 'contrats'] },
    { n: '02', title: 'Finance', items: ['marges', 'prix d’achat', 'trésorerie', 'prévisions', 'factures', 'comptabilité'] },
    { n: '03', title: 'Stratégie', items: ['roadmaps', 'lancements', 'marchés', 'positionnement', 'analyses concurrentielles'] },
    { n: '04', title: 'Commercial', items: ['CRM', 'leads', 'devis', 'négociations', 'prix spécifiques'] },
    { n: '05', title: 'RH', items: ['salaires', 'évaluations', 'CV', 'situations individuelles', 'documents internes'] },
    { n: '06', title: 'Savoir interne', items: ['procédures', 'méthodes', 'documents techniques', 'expertise accumulée'] },
    { n: '07', title: 'Technologie', items: ['code', 'architecture', 'credentials', 'clés API', 'documentation technique'] },
    { n: '08', title: 'Direction', items: ['notes', 'réunions', 'arbitrages', 'acquisitions', 'projets confidentiels'] },
  ],
  conclusion: 'L’intelligence de votre entreprise est aussi constituée de ces informations.',
  resolution:
    'CAPA est conçu pour permettre à l’entreprise de décider où son intelligence doit être traitée.',
} as const;

/* ── INTERTITRE — POSITIONNEMENT ─────────────────────────────────────────── */

export const positioning = {
  label: 'Position',
  lines: [
    'L’enjeu n’est plus de savoir si vos salariés utiliseront l’IA.',
    'Ils l’utilisent déjà ou l’utiliseront.',
  ],
  emphasis: 'L’enjeu est de décider comment votre entreprise veut l’utiliser.',
  conditions: ['Avec quelles données.', 'Avec quelles règles.', 'Pour quels résultats.', 'Et sous quel contrôle.'],
} as const;

/* ── 10 — DEUX QUESTIONS ─────────────────────────────────────────────────── */

export const twoQuestions = {
  index: '10',
  sectionLabel: 'Arbitrage',
  note: 'PRINCIPE CAPA',
  title: 'Deux questions avant chaque usage IA.',
  questions: [
    { n: '01', text: 'Est-ce que cela crée assez de valeur ?', tag: 'Économie' },
    { n: '02', text: 'Est-ce que nous acceptons la façon dont les données sont traitées ?', tag: 'Contrôle' },
  ],
  rule: ['Si l’une des deux réponses est non,', 'nous cherchons une autre solution.'],
} as const;

/* ── 11 — ARCHITECTURE : LOCAL, CLOUD, HYBRIDE ───────────────────────────── */

export const architecture = {
  index: '11',
  sectionLabel: 'Architecture',
  note: 'AUCUN DOGME',
  title: ['Local quand cela a du sens.', 'Cloud quand cela a du sens.'],
  intro: 'Nous ne défendons pas le local par idéologie.',
  criteriaLabel: 'Nous choisissons l’architecture selon',
  criteria: [
    'la sensibilité des données',
    'le volume',
    'les coûts',
    'la performance',
    'la fréquence d’utilisation',
    'les contraintes réglementaires',
    'le besoin de contrôle',
  ],
  columns: [
    {
      n: '01',
      title: 'Local',
      items: ['Données sensibles', 'Connaissance interne', 'Traitements récurrents', 'Contrôle élevé'],
    },
    {
      n: '02',
      title: 'Cloud',
      items: ['Puissance ponctuelle', 'Modèles spécialisés', 'Services externes', 'Besoins occasionnels'],
    },
    {
      n: '03',
      title: 'Hybride',
      items: [],
      quote: 'Souvent la meilleure réponse.',
    },
  ] as ArchColumn[],
} as const;

/* ── 12 — PRIVATE AI ─────────────────────────────────────────────────────── */

export const privateAi = {
  index: '12',
  sectionLabel: 'Private AI',
  note: 'CONSÉQUENCE',
  /** La transition : l'infrastructure n'arrive qu'en réponse à un constat. */
  transition: {
    label: 'Transition',
    lines: [
      'Pour certaines entreprises, la réponse est simple :',
      'certaines connaissances sont trop importantes, trop fréquentes, ou trop sensibles pour dépendre uniquement de services externes.',
      'C’est là qu’une infrastructure privée prend son sens.',
    ],
  },
  title: ['Private AI'],
  subtitle:
    'Une partie de l’intelligence artificielle de votre entreprise peut fonctionner directement dans votre infrastructure.',
  hybridNote:
    'Pièce centrale d’une architecture hybride : elle ne remplace pas tout, elle prend en charge ce qui doit rester chez vous.',
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
   * `src: null` affiche le schéma technique vectoriel intégré (dessin au
   * trait, style manuel d'exploitation). Pour une photographie :
   *   src: '/images/private-ai.webp'  (noir et blanc, 4:5, ≥ 1200px de large)
   *
   * La machine n'est jamais le sujet : elle est présentée petite, comme une
   * infrastructure silencieuse.
   */
  figure: {
    src: null as string | null,
    alt: 'Schéma technique d’une unité de calcul locale installée dans les locaux de l’entreprise.',
    caption: 'Unité de calcul locale, installée dans vos locaux.',
    ref: 'Implantation',
    state: 'Projet',
    aside: 'L’infrastructure n’est pas le sujet. Elle est le moyen.',
  },
  principles: [
    'Les données restent sur une machine que vous possédez ; aucune donnée d’entreprise n’est envoyée à un service tiers pour être entraînée.',
    'Les modèles sont exécutés localement ; ils peuvent être remplacés ou mis à jour sans changer vos usages.',
    'Les droits d’accès suivent votre organisation réelle : par personne, par fonction, par document.',
    'Chaque réponse peut citer la source interne dont elle provient.',
    'Tout ce qui est mis en place doit rester compréhensible et administrable par une personne non technicienne.',
  ],
} as const;

/* ── 13 — CE QU’ELLE PEUT FAIRE ──────────────────────────────────────────── */

export const useCases = {
  index: '13',
  sectionLabel: 'Usages',
  note: '6 DOMAINES',
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

/* ── 14 — CAPACITÉ VS RECRUTEMENT ────────────────────────────────────────── */

export const capacity = {
  index: '14',
  sectionLabel: 'Capacité',
  note: 'ARBITRAGE',
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
    note: 'Investissement initial de l’exemple § 05.',
  },
  vs: 'VS',
  statement: [
    'L’objectif n’est pas de remplacer les personnes.',
    'L’objectif est d’éviter qu’elles consacrent leur valeur à des tâches qui n’en ont pas.',
  ],
} as const;

/* ── 15 — DIAGNOSTIC ─────────────────────────────────────────────────────── */

export const diagnostic = {
  index: '15',
  sectionLabel: 'Diagnostic',
  note: 'GRATUIT / 5 MIN',
  title: 'Votre entreprise est-elle prête ?',
  text: 'En 5 minutes, identifiez les zones où l’IA pourrait présenter le plus de potentiel économique.',
  excludes: ['Aucun document confidentiel', 'Aucun accès CRM', 'Aucune donnée client'],
  includesLabel: 'Questions générales',
  includes: ['Effectifs', 'CA par tranche', 'Activité', 'Processus', 'Temps', 'Maturité IA'],
  cta: { label: 'Évaluer mon entreprise', href: '#diagnostic' },
  microcopy: 'Gratuit · 5 minutes · Sans engagement',
} as const;

/* ── 16 — OFFRE FONDATEUR ────────────────────────────────────────────────── */

export const founder = {
  index: '16',
  sectionLabel: 'Offre fondateur',
  note: 'PHASE FONDATRICE',
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
      'Charte IA — CAPA AI Policy',
      'Architecture recommandée',
      'Formation',
      'Accompagnement à l’installation',
      'Premiers usages métier',
      'Suivi de mise en place',
    ],
    exclusion: 'Matériel non compris.',
    reserved: 'Tarif réservé aux premières entreprises participant à la phase fondatrice.',
  },
  /** La charte : le volet gouvernance du programme. */
  policy: {
    name: 'CAPA AI POLICY',
    label: 'Charte IA',
    intro: 'Le programme aide également l’entreprise à définir :',
    items: [
      'quelles IA sont autorisées',
      'quels usages sont autorisés',
      'quelles informations peuvent être envoyées à un service externe',
      'quelles informations doivent rester privées',
      'quels utilisateurs ont accès à quoi',
      'quand une validation humaine est obligatoire',
      'comment tracer les usages importants',
      'comment gérer départs et changements de salariés',
      'comment conserver les connaissances internes',
    ],
    benefit: 'Passer de l’IA sauvage à une IA gouvernée.',
  },
  cta: { label: 'Candidater au programme', href: '#diagnostic' },
} as const;

/* ── 17 — MANIFESTE FINAL ────────────────────────────────────────────────── */

export const finalManifesto = {
  index: '17',
  sectionLabel: 'Manifeste',
  note: 'POSITION / 02',
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

/* ── PIED DE PAGE ────────────────────────────────────────────────────────── */

export const footer = {
  gridHint: 'GRILLE ÉDITORIALE — TOUCHE [G]',
} as const;

export const meta = {
  title: 'CAPA — Plus de capacité. Pas nécessairement plus de salariés.',
  description:
    'Avant de vous vendre de l’IA, nous calculons si elle peut réellement vous rapporter davantage qu’elle ne vous coûte. Diagnostic, gouvernance des usages et IA privée pour les PME françaises.',
  url: 'https://capa.fr',
  locale: 'fr_FR',
} as const;
