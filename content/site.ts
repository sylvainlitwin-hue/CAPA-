/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  CAPA — FICHIER CENTRAL DE CONTENU
 *  CORPORATE INTELLIGENCE 1979 / 2026
 * ─────────────────────────────────────────────────────────────────────────────
 *  Tous les textes et tous les chiffres de la page sont ici. Aucun contenu
 *  éditorial ne doit être écrit en dur dans un composant.
 *
 *  À QUI LA PAGE PARLE — À UNE SEULE PERSONNE.
 *  Un dirigeant-propriétaire de PME française, 5 à 30 salariés, assis en face
 *  de Sylvain. Donc « je » et « vous ». Jamais « les entreprises », jamais
 *  « les organisations », jamais « les décideurs », jamais « nos clients ».
 *  Test d'écriture : cette phrase, Sylvain peut-il la dire à voix haute à un
 *  patron, dans son atelier ou son bureau ? Si elle sonne brochure, cabinet
 *  de conseil ou startup, on la réécrit. Si elle ne se relie à rien de vécu,
 *  on la supprime.
 *
 *  CE QUE LA PAGE VEND — UNE QUESTION, PAS DE L'IA.
 *  « Combien vous coûte encore ce que votre entreprise fait mal, lentement ou
 *  inutilement à la main ? » Puis seulement : « est-ce que l'IA mérite
 *  réellement d'intervenir ici ? » L'ennemi n'est pas ChatGPT, c'est l'IA
 *  gadget : des outils ajoutés sans savoir pourquoi.
 *
 *  CE QUI N'A PAS SA PLACE ICI : prix, abonnements, modules, packs,
 *  formation, matériel, RAG, Docker, GPU, comparatif local/cloud, longue
 *  section sécurité ou RGPD, marketplace, témoignages, logos, FAQ, listes de
 *  bénéfices ou de fonctionnalités. Cette page ne vend pas tout CAPA : elle
 *  vend la curiosité de savoir ce que le statu quo coûte.
 *
 *  SIX SECTIONS, UN SEUL APPEL À L'ACTION : « Évaluer mon entreprise ».
 *  01 Ouverture · 02 Reconnaissance · 03 Le calcul ·
 *  04 La position · 05 La capacité · 06 Le diagnostic
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const brand = {
  name: 'CAPA',
  wordmark: 'CAPA.',
  /** Ligne de régie, en monospace, dans les repères d'imprimé. */
  documentRef: 'CAPA / NOTE D’ORIENTATION',
  edition: '2026',
  location: 'France',
} as const;

/**
 * Liens. Le diagnostic pointera vers un formulaire Tally : remplacer
 * `diagnostic.href` par l'URL Tally (ex. https://tally.so/r/xxxxxx) — ou
 * renseigner `diagnostic.tallyFormId` pour l'afficher en § 06.
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

/** L'appel à l'action unique. Un seul libellé sur toute la page. */
export const cta = {
  label: 'Évaluer mon entreprise',
  href: '#diagnostic',
} as const;

/**
 * LE PORTRAIT — remplaçable sans toucher au code.
 *
 * Déposer la photographie dans `public/images/sylvain.jpg`, puis renseigner
 * `src`. Tant que `src` vaut `null`, un emplacement réservé au format 4:5 est
 * affiché (convention de maquette d'imprimeur), avec le chemin attendu.
 *
 * Direction : photographie réelle, pas un portrait corporate parfait.
 * Entrepreneur, naturel, noir et blanc. Pas de banque d'images, pas d'image
 * générée, pas de machine, pas de décor futuriste.
 */
export const founder = {
  portrait: {
    src: null as string | null,
    expectedPath: '/images/sylvain.jpg',
    alt: 'Portrait de Sylvain.',
    ratio: '4:5',
  },
  name: 'Sylvain',
  role: 'Entrepreneur',
} as const;

/* ── 01 — OUVERTURE ──────────────────────────────────────────────────────── */

export const hero = {
  ref: '01',
  label: 'Ouverture',
  note: 'PME · 5 À 30 SALARIÉS · FRANCE',
  /** Trois lignes, composées telles quelles. */
  title: ['Combien vous coûte', 'ce que votre entreprise', 'fait encore à la main ?'],
  subtitle: [
    'Je commence par mesurer vos pertes de temps, de capacité et d’argent.',
    'Ensuite seulement, je regarde si l’IA mérite d’intervenir.',
  ],
  microcopy: 'Gratuit · 5 minutes · Aucun document confidentiel',
  /** Ce que Sylvain dit de lui, à côté de sa photographie. */
  statement: [
    'Je suis entrepreneur.',
    'J’ai commencé à construire ce système pour mes propres entreprises.',
    'Je ne veux pas plus d’IA.',
  ],
  statementStrong: 'Je veux une IA qui serve réellement à quelque chose.',
} as const;

/**
 * La bande de position — la phrase clivante de la marque. Elle ferme
 * l'ouverture et sert de signature à toute la page.
 */
export const positioning = {
  lines: [
    'Je ne vous aide pas à mettre plus d’IA dans votre entreprise.',
    'Je vous aide à savoir où elle vaut réellement le coup.',
  ],
} as const;

/* ── 02 — RECONNAISSANCE ─────────────────────────────────────────────────── */

/**
 * Cinq affirmations. Pas des bénéfices, pas des fonctionnalités : des choses
 * que le lecteur paie déjà, sans les avoir jamais chiffrées.
 */
export const recognition = {
  ref: '02',
  label: 'Reconnaissance',
  note: 'CINQ AFFIRMATIONS',
  title: 'Peut-être que vous payez déjà pour ça.',
  statements: [
    'Vous payez quelqu’un pour rechercher une information que votre entreprise possède déjà.',
    'Vous payez quelqu’un pour refaire une réponse déjà faite vingt fois.',
    'Vous perdez des devis ou des actions parce que personne n’a le temps de tout suivre.',
    'Vos salariés utilisent probablement déjà ChatGPT sans vraie règle commune.',
    'Vous envisagez parfois de recruter alors qu’une partie du problème est peut-être simplement une mauvaise circulation de l’information.',
  ],
  closing: [
    'Ce ne sont pas forcément de gros problèmes.',
    'C’est justement pour ça qu’ils coûtent cher longtemps.',
  ],
} as const;

/* ── 03 — LE CALCUL ──────────────────────────────────────────────────────── */

/**
 * ⚠ CHIFFRES ILLUSTRATIFS — mais le calcul est vrai et vérifiable :
 * 15 min × 10 fois par jour × 220 jours = 550 h / an, soit 16 500 € à 30 €/h.
 * Tout est dérivé de `params` dans lib/capa.ts : modifier ici suffit, rien
 * n'est saisi à la main, donc rien ne peut se contredire.
 *
 * La mention « exemple illustratif » ne doit jamais être retirée, et cette
 * section ne porte aucune autre explication.
 */
export const figure = {
  ref: '03',
  label: 'Le calcul',
  note: 'ORDRE DE GRANDEUR',
  params: { minutes: 15, perDay: 10, daysPerYear: 220, hourlyRate: 30 },
  terms: ['minutes', 'fois / jour', 'jours'],
  hoursUnit: 'heures / an',
  rateLabel: 'À 30 € / heure',
  costUnit: '€ / an',
  disclaimer: 'Exemple illustratif',
  closing: 'Les grosses pertes sont souvent faites de petites pertes répétées.',
} as const;

/* ── 04 — LA POSITION ────────────────────────────────────────────────────── */

export const provocation = {
  ref: '04',
  label: 'La position',
  note: 'TROIS TEMPS',
  title: 'Vous n’avez probablement pas besoin de plus d’IA.',
  answer: 'Vous avez besoin de savoir où elle mérite sa place.',
  steps: [
    { n: '01', title: 'Mesurer', text: 'Ce que le problème vous coûte.' },
    { n: '02', title: 'Prioriser', text: 'Ce qui mérite réellement d’être amélioré.' },
    { n: '03', title: 'Agir', text: 'Avec la solution la plus simple qui fonctionne.' },
  ],
  options: [
    'Parfois c’est ChatGPT.',
    'Parfois une automatisation.',
    'Parfois votre propre IA privée.',
  ],
  /** La phrase qui vaut engagement. Mise en avant maximale. */
  verdict: 'Et parfois la bonne décision est de ne rien acheter.',
  /** L'ennemi commun, nommé une seule fois. */
  enemy: {
    label: 'L’ennemi : l’IA gadget',
    line: 'Automatiser une mauvaise façon de travailler la rend simplement mauvaise plus vite.',
  },
} as const;

/* ── 05 — LA CAPACITÉ ────────────────────────────────────────────────────── */

/**
 * L'intrigue, pas la démonstration. Aucun détail technique : pas de RAG, pas
 * de Docker, pas de GPU, aucune caractéristique matérielle, aucun comparatif
 * local/cloud. Une seule phrase sur la confidentialité.
 *
 * Le lien ne s'affiche que si `href` est renseigné : pas de lien mort tant
 * que la page dédiée n'existe pas.
 */
export const capacity = {
  ref: '05',
  label: 'La capacité',
  note: 'PRIVATE AI',
  title: 'Et si votre entreprise possédait son intelligence artificielle ?',
  text: [
    'Une IA privée qui connaît vos documents, vos procédures, vos produits et votre manière de travailler.',
    'Pas un chatbot de plus.',
  ],
  textStrong: 'Une capacité qui appartient à votre entreprise.',
  confidentiality: [
    'Vos salariés utilisent peut-être déjà l’IA avec des informations professionnelles.',
    'La vraie question est maintenant : qui décide où ces informations peuvent aller ?',
  ],
  link: { label: 'Pourquoi l’IA privée ?', href: null as string | null },
} as const;

/* ── 06 — LE DIAGNOSTIC ──────────────────────────────────────────────────── */

export const close = {
  ref: '06',
  label: 'Le diagnostic',
  note: 'GRATUIT / 5 MIN',
  title: 'Commencez par savoir si ça vaut le coup.',
  text: 'Quelques questions suffisent pour identifier les premières zones à étudier.',
  excludes: ['Aucun document.', 'Aucun accès à vos outils.', 'Aucune donnée client nécessaire.'],
  microcopy: 'Gratuit · environ 5 minutes',
} as const;

/* ── PIED DE PAGE ────────────────────────────────────────────────────────── */

export const colophon = {
  gridHint: 'GRILLE ÉDITORIALE — TOUCHE [G]',
  /** Gamme de contrôle d'imprimeur : les quatre encres de la page. */
  inks: [
    { name: 'Papier', value: '#F2EFE6' },
    { name: 'Graphite', value: '#141414' },
    { name: 'Bleu', value: '#1358D8' },
    { name: 'Signal', value: '#C62D16' },
  ],
} as const;

export const meta = {
  title: 'CAPA — Combien vous coûte ce que votre entreprise fait encore à la main ?',
  description:
    'Je mesure d’abord ce que vous perdez en temps, en capacité et en argent. Ensuite seulement, je regarde si l’IA mérite d’intervenir. Diagnostic gratuit en 5 minutes, pour dirigeants de PME.',
  url: 'https://capa.fr',
  locale: 'fr_FR',
} as const;

/* ── HORS PAGE : RÉSERVE ─────────────────────────────────────────────────── */

/**
 * ⚠ CES DEUX BLOCS NE SONT PAS AFFICHÉS.
 *
 * Ils appartiennent à des pages dédiées (méthode, Private AI, « l'IA dans les
 * PME ») et sont conservés ici parce qu'ils sont coûteux à reconstituer.
 *
 * 1. LE POINT CAPA — l'élément graphique propriétaire : la valeur nette
 *    cumulée qui part sous zéro, traverse l'axe, puis produit de la valeur.
 *    Le composant est prêt : `components/CapaPointChart.tsx`. Il relève de la
 *    « longue explication du retour sur investissement » : pas sur cette page.
 *
 * 2. LES REPÈRES CHIFFRÉS — statistiques publiques sourcées. « 18 % des
 *    entreprises » n'est pas quelque chose qu'un dirigeant vit : cela échoue
 *    au test d'écriture énoncé en tête de fichier.
 *    À VÉRIFIER avant toute publication : ouvrir le lien et confirmer les
 *    quatre valeurs. À réactualiser à chaque nouvelle vague d'enquête.
 */
export const capaPoint = {
  label: 'Point CAPA',
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
    {
      value: 18,
      unit: '%',
      label: 'des entreprises implantées en France utilisent au moins une technologie d’IA',
      ref: '2025',
    },
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
