# CAPA.

**Plus de capacité. Pas nécessairement plus de salariés.**

Landing page CAPA — intelligence artificielle pour les PME françaises.
Next.js 15 (App Router) · TypeScript · Tailwind CSS. Aucune bibliothèque
d’animation : les micro-interactions sont en CSS + un observateur
d’intersection de quelques lignes.

## Les deux règles qui gouvernent tout le contenu

**1. La page parle à une seule personne.** Un dirigeant de PME, assis en
face. Donc « je » et « vous » — jamais « nous », jamais « les entreprises »,
jamais « vos équipes » en permanence. Chaque phrase doit pouvoir être dite à
voix haute en rendez-vous. Moins de texte, plus de reconnaissance, plus de
chiffres, plus d’humain.

**2. Aucun prix ne figure sur cette page.** Le parcours est intérêt →
diagnostic → qualification → recommandation → proposition personnalisée. Le
diagnostic est la seule porte d’entrée, et l’appel à l’action est toujours le
même : « Évaluer mon entreprise » (`cta` dans `content/site.ts`). Ne pas
réintroduire de grille tarifaire, de mention « à partir de », ni de « nous
contacter pour connaître nos tarifs » : la section § 08 explique pourquoi il
n’existe pas de prix standard.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # export statique de toutes les pages
npm run typecheck
```

---

## 1. Où modifier le contenu

**Tout le contenu éditorial est dans un seul fichier : [`content/site.ts`](content/site.ts).**

Rien n’est écrit en dur dans les composants : textes, titres, chiffres
illustratifs, listes, liens, libellés de boutons, mentions légales de la page
de gabarit. Le fichier est commenté section par section et suit l’ordre de
lecture (`hero`, `me`, `recognition`, `timeCost`, `shadow`, `method`,
`privateAi`, `noPrice`, `start`).

Deux règles à respecter :

1. **Les nombres sont stockés en valeurs brutes** (`minutes: 15`), pas en
   chaînes. Le formatage français (espace fine insécable, virgule décimale)
   est fait à l’affichage par [`lib/format.ts`](lib/format.ts) — volontairement
   sans `Intl`, pour que le rendu serveur et le rendu navigateur soient
   identiques au caractère près.
2. **Les deux calculs de la page sont dérivés dans un seul fichier**,
   [`lib/capa.ts`](lib/capa.ts) : l’arithmétique du § 04 (15 min × 10 fois ×
   220 jours = 550 h/an, soit 16 500 € à 30 €/h) et le Point CAPA. Modifier
   `timeCost.params` suffit — les chiffres affichés, le graphique et les
   libellés suivent et ne peuvent pas se contredire. Ce sont des ordres de
   grandeur, pas des tarifs ; les mentions « exemple illustratif » sont
   affichées à l’écran et ne doivent pas être retirées.

### Brancher le diagnostic (Tally)

Dans `content/site.ts` :

```ts
export const links = {
  diagnostic: {
    href: 'https://tally.so/r/XXXXXX', // tous les CTA pointent ici
    tallyFormId: 'XXXXXX',             // optionnel : formulaire en embed § 09
  },
  …
};
```

- `href` seul : tous les appels à l’action (une dizaine sur la page) ouvrent
  le formulaire Tally
  (le lien externe reçoit automatiquement `target="_blank" rel="noopener"`).
- `tallyFormId` renseigné : le formulaire est en plus affiché en `iframe`
  (chargement différé) directement dans la section 09.

### Poser la photographie

Le portrait de la section § 02 est un **emplacement réservé** tant que
`me.portrait.src` vaut `null` : cadre au format 4:5, diagonales, équerres
d’imprimeur et chemin du fichier attendu. Aucun visage n’est inventé, aucune
image n’est générée. Pour poser la vraie photographie : déposer le fichier
dans `public/images/fondateur.jpg`, puis renseigner
`src: '/images/fondateur.jpg'`.

### Remplacer le visuel de la section Private AI

Par défaut, la section affiche un **schéma technique vectoriel** dessiné au
trait ([`components/figures/LocalUnitSchematic.tsx`](components/figures/LocalUnitSchematic.tsx)) :
une unité de calcul dans les locaux de l’entreprise, entourée du périmètre en
pointillé. C’est un choix éditorial — il évite la photo d’illustration
générique et porte lui-même le message de la section.

Pour utiliser une photographie noir et blanc à la place, déposer le fichier
dans `public/images/` et renseigner :

```ts
figure: {
  src: '/images/private-ai.webp', // 4:5, ≥ 1200 px de large, WebP ou AVIF
  alt: '…',
  caption: '…',
  …
}
```

Le composant bascule alors sur `next/image` (formats AVIF/WebP, `loading="lazy"`,
filtre noir et blanc appliqué). Le cartouche du plan reste identique.

---

## 2. Le système graphique

**CORPORATE INTELLIGENCE 1979 / 2026** — la page doit se lire comme un rapport
stratégique très bien composé, pas comme un site SaaS.

### Palette (4 couleurs, pas plus)

| Rôle | Valeur | Usage |
| --- | --- | --- |
| Papier | `#F2EFE6` (`#E8E4D8` en variante) | fond |
| Encre graphite | `#141414` | texte, filets, sections de rupture |
| Bleu technique | `#1358D8` | accent unique : accroches, chiffres clés, aplats |
| Rouge signal | `#C62D16` | alertes, mentions illustratives, annotations — uniquement |

Contrastes vérifiés WCAG AA : bleu sur papier 5,3:1 · gris de note 4,6:1 ·
rouge signal 4,8:1. Le bleu n’est jamais utilisé en petit corps sur fond
graphite (3,1:1) — l’emphase y est inversée.

### Typographie

- **Inter Tight** (libre) pour le titrage et le texte : néo-grotesque proche
  des grotesques suisses employées par le design corporate de l’époque.
- **IBM Plex Mono** (libre) pour les chiffres, les repères, les numéros de
  section, les annotations et les boutons.

Échelles dans [`app/globals.css`](app/globals.css) : `.display-xl` → `.display-sm`,
`.display-poster` (listes de principes), `.figure-xl` / `.figure-lg` (chiffres,
toujours tabulaires), `.label` (monospace, capitales, interlettrage 0,14 em).

### Grille

`.shell` (marges) + `.grid12` : 12 colonnes au-delà de 768 px, 4 colonnes en
dessous. Chaque section s’ouvre par un filet pleine largeur et une ligne de
repères `§ 04 — ARITHMÉTIQUE … CALCUL SIMPLE`, et se ferme par un folio
d’imprimé (`CAPA · NOTE D’ORIENTATION 2026 — 04 —`).

**Touche `G` : affiche la grille de contrôle** (outil de vérification des
alignements, jamais visible sans action de l’utilisateur).

Angles vifs (0 px), aucune ombre, aucune carte arrondie, icônes remplacées par
des chiffres, des filets et des flèches.

### Élément propriétaire : le POINT CAPA

[`components/CapaPointChart.tsx`](components/CapaPointChart.tsx) trace la valeur
nette cumulée : la droite part sous zéro (l’investissement), traverse l’axe —
le **POINT CAPA** — puis produit de la valeur nette. Zone hachurée =
investissement à récupérer ; aplat bleu = valeur nette produite. Une seule
échelle pour le positif et le négatif : le graphique reste honnête. Il se trace
à la progression du défilement (avec cliquet : il ne se « détrace » jamais) et
existe en deux variantes de composition, large et étroite, pour rester lisible
sur téléphone.

---

## 3. Architecture

```
app/
  layout.tsx              polices, métadonnées, repli <noscript>
  page.tsx                assemblage des 9 sections
  globals.css             design system (palette, échelles, grille, animations)
  mentions-legales/       gabarit légal (à compléter, aucune mention inventée)
  confidentialite/
components/
  Navigation.tsx          barre collante + repère d’avancement + menu mobile
  Hero.tsx                01 — ce qu’il sait, puis ce qu’il ne sait pas
  Me.tsx                  02 — qui lui parle (portrait + signature)
  Recognition.tsx         03 — « vous vous reconnaissez ? »
  TimeCost.tsx            04 — l’arithmétique + le Point CAPA
  CapaPointChart.tsx      04 — le graphique (SVG, client)
  Shadow.tsx              05 — l’IA déjà présente, sans gouvernance
  Method.tsx              06 — mesurer, prioriser, construire
  PrivateAI.tsx           07 — sa propre IA, sans jargon
  NoPrice.tsx             08 — pas de prix avant le problème
  DiagnosticCTA.tsx       09 — l’unique appel à l’action + signature
  Footer.tsx              pied de page + ligne de base
  figures/                portrait, schéma de l’unité locale
  ui/                     Section, SectionHeader, SectionFoot, Reveal, CountUp
content/site.ts           ← tout le contenu
lib/                      format.ts (nombres FR), capa.ts (calculs), useInView.ts
```

---

## 4. Micro-interactions

Quatre gestes, pas plus, et tous liés à une lecture :

- apparition par **masque vertical** (`Reveal`) ;
- **tracé de filet** horizontal ou vertical ;
- **compteur** sur les chiffres (`CountUp`, une seule passe, courbe décélérée) ;
- **curseur de terminal** — un seul sur toute la page, dans la fiche technique.

Le graphique POINT CAPA progresse au défilement. Aucun parallax.

`prefers-reduced-motion: reduce` neutralise la totalité des animations (vérifié :
0 élément masqué sur 126). Sans JavaScript, une feuille `<noscript>` neutralise
les états masqués : le document reste intégralement lisible.

---

## 5. Performance et accessibilité

- Pages 100 % statiques (`○ Static`), ~116 kB de JS au premier chargement,
  aucune dépendance d’animation, aucune image bitmap par défaut (les figures
  sont des SVG en ligne).
- Polices auto-hébergées par `next/font` (`display: swap`, préchargées).
- HTML sémantique, hiérarchie de titres continue `h1 → h2 → h3 → h4`,
  `lang="fr"`, lien d’évitement, focus visible, `aria-label` sur les figures,
  `<details>` natif pour les principes techniques.
- Aucun débordement horizontal de 320 px à 1920 px (vérifié à 10 largeurs).

---

## 6. Points volontairement laissés ouverts

- Les **mentions légales** et la **politique de confidentialité** sont des
  gabarits : les champs à renseigner sont marqués « À compléter » en rouge.
  Aucune information d’entreprise n’a été inventée.
- Aucun témoignage, aucun logo client, aucune statistique de marché : la page
  ne contient que des chiffres explicitement présentés comme illustratifs.
- Aucun prix, aucune offre, aucun nombre de places : voir les deux règles en
  tête de ce fichier.
- Le portrait est un emplacement réservé jusqu’au dépôt d’une photographie
  réelle (voir plus haut). C’est le seul élément visuel manquant.
- L’adresse de contact (`contact@capa.fr`) et l’URL canonique
  (`meta.url` dans `content/site.ts`) sont des valeurs de travail à confirmer.
