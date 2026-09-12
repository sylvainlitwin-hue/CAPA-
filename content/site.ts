/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  CAPA — FICHIER CENTRAL DE CONTENU
 * ─────────────────────────────────────────────────────────────────────────────
 *  Tous les textes, chiffres et images de la page sont définis ici. Aucun
 *  contenu éditorial ne doit être écrit en dur dans les composants.
 *
 *  RÈGLE D'ÉCRITURE — LA PAGE PARLE À UNE SEULE PERSONNE.
 *  Un dirigeant de PME, assis en face. Donc « je » et « vous ». Jamais
 *  « nous », jamais « les entreprises », jamais « les organisations ».
 *  Test à appliquer à chaque phrase : un patron de PME peut-il la relier
 *  immédiatement à quelque chose qu'il vit ? Si non, on la supprime.
 *
 *  RÈGLE DE PÉRIMÈTRE — LA HOME N'EXPLIQUE PAS TOUT LE BUSINESS.
 *  Elle a cinq rôles, dans cet ordre : faire reconnaître le problème,
 *  montrer qu'il coûte de l'argent, introduire une approche différente,
 *  donner confiance, pousser vers le diagnostic. Tout le reste appartient
 *  à une page dédiée ou à l'après-qualification : prix, offres, programme,
 *  architecture local/cloud, détails techniques, RGPD, longue explication
 *  du retour sur investissement.
 *
 *  UN SEUL APPEL À L'ACTION : « Évaluer mon entreprise ».
 *
 *  ORDRE DE LECTURE
 *  01 Accroche · 02 Vous vous reconnaissez ? · 03 Le chiffre ·
 *  04 Ma méthode · 05 Le contrôle · 06 Private AI ·
 *  07 Pourquoi je travaille là-dessus · 08 Commencez par mesurer
 * ─────────────────────────────────────────────────────────────────────────────
 */

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
 * — ou renseigner `diagnostic.tallyFormId` pour l'afficher en embed en § 08.
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
    { label: 'Diagnostic', href: '#diagnostic' },
  ],
  cta: { label: 'Diagnostic gratuit', href: '#diagnostic' },
} as const;

/** L'appel à l'action unique, répété sur toute la page. */
export const cta = {
  label: 'Évaluer mon entreprise',
  href: '#diagnostic',
  microcopy: 'Gratuit · 5 minutes · Aucun document confidentiel nécessaire',
} as const;

/**
 * LE PORTRAIT — remplaçable sans toucher au code.
 *
 * Déposer la photographie dans `public/images/fondateur.jpg`, puis renseigner
 * `src: '/images/fondateur.jpg'`. Tant que `src` vaut `null`, un emplacement
 * réservé au format 4:5 est affiché (convention de maquette imprimée), avec
 * le chemin attendu.
 *
 * Direction : portrait réel, naturel, noir et blanc ou monochrome, regard
 * caméra ou situation de travail. Pas de portrait de banque d'images, pas
 * d'image générée, pas de machine, pas de visuel futuriste.
 */
export const founder = {
  portrait: {
    src: null as string | null,
    expectedPath: '/images/fondateur.jpg',
    alt: 'Portrait de Sylvain.',
    caption: 'Sylvain.',
    ratio: '4:5',
  },
  name: 'Sylvain',
  role: 'Entrepreneur',
} as const;

/* ── 01 — ACCROCHE ───────────────────────────────────────────────────────── */

export const hero = {
  index: '01',
  kicker: 'Intelligence artificielle · PME · France',
  title: 'Combien vous coûte ce que votre entreprise fait encore à la main ?',
  subtitle:
    'Je vous aide à identifier où vous perdez du temps, de la capacité et de l’argent — avant de parler d’IA.',
} as const;

/* ── 02 — VOUS VOUS RECONNAISSEZ ? ───────────────────────────────────────── */

export const recognition = {
  index: '02',
  sectionLabel: 'Reconnaissance',
  note: 'VOUS',
  title: 'Vous vous reconnaissez ?',
  /** Cinq points, pas six. Chacun doit être vécu, pas expliqué. */
  points: [
    'Vous cherchez trop longtemps certaines informations.',
    'Vos équipes répètent encore les mêmes tâches.',
    'Des prospects, devis ou actions passent parfois entre les mailles.',
    'Vos salariés utilisent probablement déjà ChatGPT ou d’autres IA.',
    'Vous savez que l’IA devient importante mais vous ne savez pas par quoi commencer.',
  ],
  closing:
    'Si vous vous reconnaissez dans 2 ou 3 points, cela mérite probablement d’être mesuré.',
} as const;

/* ── 03 — LE CHIFFRE ─────────────────────────────────────────────────────── */

/**
 * ⚠ CHIFFRES ILLUSTRATIFS — mais le calcul est vrai et vérifiable :
 * 15 min × 10 fois par jour × 220 jours = 550 h / an, soit 16 500 € à 30 €/h.
 * Tout est dérivé de `params` dans lib/capa.ts : modifier ici suffit.
 *
 * Cette section ne porte AUCUNE autre explication. Les conversions, l'abaque
 * et le graphique du Point CAPA en ont été retirés : ils appartiennent à une
 * page dédiée, pas à la home.
 */
export const timeCost = {
  index: '03',
  sectionLabel: 'Le chiffre',
  note: 'CALCUL SIMPLE',
  title: '15 minutes peuvent coûter très cher.',
  params: { minutes: 15, perDay: 10, daysPerYear: 220, hourlyRate: 30 },
  termUnits: ['min', 'fois / jour', 'jours'],
  hoursUnit: 'heures / an',
  costUnit: '€ / an',
  rateLabel: 'À 30 € / heure',
  disclaimer: 'Exemple illustratif',
  closing:
    'Les grosses pertes sont souvent constituées de petites pertes répétées toute l’année.',
} as const;

/* ── 04 — MA MÉTHODE ─────────────────────────────────────────────────────── */

export const method = {
  index: '04',
  sectionLabel: 'Ma méthode',
  note: '3 ÉTAPES',
  title: ['Je commence par le problème.', 'Pas par l’outil.'],
  steps: [
    {
      n: '01',
      title: 'Mesurer',
      text: 'Où perdez-vous réellement du temps, de l’argent ou de la capacité ?',
    },
    { n: '02', title: 'Prioriser', text: 'Qu’est-ce qui mérite vraiment d’être amélioré ?' },
    {
      n: '03',
      title: 'Mettre en place',
      text: 'Ensuite seulement, nous choisissons la meilleure solution.',
    },
  ],
  answers: ['Parfois la réponse est un outil existant.', 'Parfois une automatisation.', 'Parfois votre propre IA privée.'],
  /** La phrase qui vaut engagement. Mise en avant maximale. */
  verdict: 'Et parfois, l’investissement ne vaut tout simplement pas le coup.',
} as const;

/* ── 05 — LE CONTRÔLE ────────────────────────────────────────────────────── */

/**
 * L'ancienne grande section Shadow AI tient désormais en une phrase.
 * Le lien ne s'affiche que si `href` est renseigné : pas de lien mort tant
 * que la page dédiée n'existe pas.
 */
export const control = {
  index: '05',
  sectionLabel: 'Contrôle',
  note: 'UNE QUESTION',
  /** Deux temps : le constat, puis la question. */
  statement: [
    'Vos salariés utilisent peut-être déjà l’IA avec des informations professionnelles.',
    'La question n’est donc plus seulement « faut-il utiliser l’IA ? », mais « comment voulez-vous la contrôler ? »',
  ],
  link: { label: 'Comprendre les enjeux de confidentialité', href: null as string | null },
} as const;

/* ── 06 — PRIVATE AI ─────────────────────────────────────────────────────── */

/**
 * Teaser seulement. Aucun détail technique : pas de RAG, pas de Docker,
 * pas de GPU, aucune caractéristique matérielle.
 */
export const privateAi = {
  index: '06',
  sectionLabel: 'Private AI',
  note: 'SI CELA A DU SENS',
  title: 'Et lorsque cela a du sens, votre entreprise peut posséder sa propre IA.',
  text: 'Une IA privée qui connaît vos documents, vos procédures et votre façon de travailler — sans dépendre uniquement d’outils génériques externes.',
  link: { label: 'Découvrir Private AI', href: null as string | null },
} as const;

/* ── 07 — POURQUOI JE TRAVAILLE LÀ-DESSUS ───────────────────────────────── */

export const why = {
  index: '07',
  sectionLabel: 'Pourquoi',
  note: 'QUI VOUS PARLE',
  title: 'Pourquoi je travaille là-dessus.',
  lines: [
    'Je suis entrepreneur.',
    'J’ai commencé à construire ce type de système pour mes propres entreprises.',
    'Mon objectif n’est pas de mettre de l’IA partout.',
  ],
  emphasis: [
    'Je veux savoir où elle peut réellement améliorer une entreprise',
    'et où elle ne sert à rien.',
  ],
} as const;

/* ── 08 — COMMENCEZ PAR MESURER ─────────────────────────────────────────── */

export const start = {
  index: '08',
  sectionLabel: 'Diagnostic',
  note: 'GRATUIT / 5 MIN',
  title: 'Commencez par mesurer.',
  text: 'Quelques questions suffisent pour identifier les premières zones à étudier.',
  excludes: ['Aucun document.', 'Aucun accès à vos systèmes.', 'Aucune donnée client nécessaire.'],
  microcopy: 'Gratuit · environ 5 minutes',
} as const;

/* ── PIED DE PAGE ────────────────────────────────────────────────────────── */

export const footer = {
  gridHint: 'GRILLE ÉDITORIALE — TOUCHE [G]',
} as const;

/* ── HORS HOME : RÉSERVE ─────────────────────────────────────────────────── */

/**
 * ⚠ CE BLOC N'EST PLUS AFFICHÉ SUR LA HOME.
 *
 * Statistiques publiques, conservées ici parce qu'elles sont sourcées et
 * coûteuses à retrouver. Elles ont leur place sur une page dédiée
 * (« l'IA dans les PME », page méthode…), pas sur la home : « 18 % des
 * entreprises » n'est pas quelque chose qu'un dirigeant vit, donc cela
 * échoue au test d'écriture énoncé en tête de fichier.
 *
 * Le composant qui les affichait (components/Benchmarks.tsx) reste
 * récupérable dans l'historique git.
 *
 * À VÉRIFIER avant toute publication : ouvrir le lien et confirmer les
 * quatre valeurs. À réactualiser à chaque nouvelle vague d'enquête.
 */
/**
 * ⚠ CE BLOC N'EST PLUS AFFICHÉ SUR LA HOME.
 *
 * Le POINT CAPA — l'élément graphique propriétaire de la marque. Retiré de
 * la home parce qu'il relève de la « longue explication du retour sur
 * investissement » : sa place est sur la page méthode ou Private AI.
 *
 * Le composant est prêt et fonctionnel : `components/CapaPointChart.tsx`
 * (tracé au défilement, deux variantes de composition). Il suffit de
 * l'importer dans la future page dédiée.
 *
 * Chiffres illustratifs, dérivés dans lib/capa.ts.
 */
export const capaPoint = {
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
} as const;

export const benchmarks = {
  title: 'Où en sont les autres ?',
  figures: [
    { value: 18, unit: '%', label: 'des entreprises implantées en France utilisent au moins une technologie d’IA', ref: '2025' },
    { value: 15, unit: '%', label: 'chez les entreprises de 10 à 49 salariés', ref: '2025' },
    { value: 58, unit: '%', label: 'chez les entreprises de 250 salariés et plus', ref: '2025' },
    { value: 8, prefix: '+', unit: 'points', label: 'de progression en un an', ref: '2024 → 2025' },
  ],
  source: {
    text: 'Insee, enquête TIC 2025 — entreprises de 10 salariés ou plus. Moyenne de l’Union européenne : 20 %.',
    href: 'https://www.insee.fr/fr/statistiques/9025878',
    linkLabel: 'Insee Première n° 2120',
  },
} as const;

export const meta = {
  title: 'CAPA — Combien vous coûte ce que vous faites encore à la main ?',
  description:
    'Je vous aide à identifier où votre entreprise perd du temps, de la capacité et de l’argent — avant de parler d’IA. Diagnostic gratuit en 5 minutes, pour dirigeants de PME.',
  url: 'https://capa.fr',
  locale: 'fr_FR',
} as const;
