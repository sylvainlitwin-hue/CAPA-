# CAPA.

**Plus de capacité. Pas nécessairement plus de salariés.**

Landing page CAPA — intelligence artificielle pour les PME françaises.
Next.js 15 (App Router) · TypeScript · Tailwind CSS. Aucune bibliothèque
d’animation : les micro-interactions sont en CSS + un observateur
d’intersection de quelques lignes.

## Les trois règles qui gouvernent tout le contenu

**1. La page parle à une seule personne.** Un dirigeant de PME, assis en
face. Donc « je » et « vous » — jamais « nous », jamais « les entreprises »,
jamais « les organisations », jamais « nos clients ». Test avant d’écrire une
phrase : *un patron de PME peut-il la relier immédiatement à quelque chose
qu’il vit ?* Si non, on la supprime.

**2. La home n’explique pas tout le business.** Elle a exactement cinq
rôles : faire reconnaître le problème (§ 01–02), montrer qu’il coûte de
l’argent (§ 03), introduire une approche différente (§ 04–06), donner
confiance (§ 07), pousser vers le diagnostic (§ 08). Tout le reste — prix,
offres, architecture, détails techniques, RGPD, statistiques de marché,
local / cloud / hybride, Shadow AI développé — appartient à une **page
dédiée**, pas à la home. Avant d’ajouter un bloc : *est-ce que cela sert
directement le diagnostic ?*

**3. Aucun prix ne figure sur cette page.** Le parcours est intérêt →
diagnostic → qualification → recommandation → proposition personnalisée. Le
diagnostic est la seule porte d’entrée, et l’appel à l’action est toujours le
même : « Évaluer mon entreprise » (`cta` dans `content/site.ts`). Ne pas
réintroduire de grille tarifaire, de mention « à partir de », ni de « nous
contacter pour connaître nos tarifs ».

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
lecture :

| § | Export | Rôle |
| --- | --- | --- |
| 01 | `hero` | la question qui arrête le lecteur + portrait |
| 02 | `recognition` | cinq situations qu’il vit |
| 03 | `timeCost` | ce que coûtent 15 minutes |
| 04 | `method` | mesurer · prioriser · mettre en place |
| 05 | `control` | l’IA est peut-être déjà là — une phrase |
| 06 | `privateAi` | teaser, sans jargon |
| 07 | `why` | pourquoi je travaille là-dessus |
| 08 | `start` | l’unique appel à l’action |

Plus `brand`, `links`, `nav`, `cta`, `founder`, `footer`, `meta`.

### Les deux blocs de réserve

En fin de fichier, deux blocs sont explicitement marqués
**⚠ CE BLOC N’EST PLUS AFFICHÉ SUR LA HOME** :

- **`capaPoint`** — le POINT CAPA, l’élément graphique propriétaire. Retiré
  parce qu’il relève de la « longue explication du retour sur
  investissement ». Le composant reste prêt et fonctionnel
  ([`components/CapaPointChart.tsx`](components/CapaPointChart.tsx)) : il
  suffit de l’importer dans la future page méthode ou Private AI.
- **`benchmarks`** — les repères chiffrés sourcés (Insee, enquête TIC 2025).
  Retirés de la home au titre des statistiques de marché. Le composant
  `Benchmarks.tsx` est récupérable dans l’historique git.
  **Les quatre valeurs doivent être confirmées sur la publication d’origine
  avant toute remise en ligne.**

De même côté code, deux figures sont conservées mais non utilisées :
[`components/CapaPointChart.tsx`](components/CapaPointChart.tsx) et
[`components/figures/LocalUnitSchematic.tsx`](components/figures/LocalUnitSchematic.tsx)
(le schéma de l’unité locale, pour la page Private AI). Dans
[`lib/capa.ts`](lib/capa.ts), les trois conversions (heures par jour, par
semaine, en fraction de poste), `annualCost()` et `formatDuration()` sont
également marquées « hors home ».

### Deux règles sur les chiffres

1. **Les nombres sont stockés en valeurs brutes** (`minutes: 15`), pas en
   chaînes. Le formatage français (espace fine insécable, virgule décimale)
   est fait à l’affichage par [`lib/format.ts`](lib/format.ts) — volontairement
   sans `Intl`, pour que le rendu serveur et le rendu navigateur soient
   identiques au caractère près.
2. **Deux sortes de chiffres, jamais mélangées.**

   - **Les chiffres CALCULÉS (§ 03)** sont tous dérivés de `timeCost.params`
     dans [`lib/capa.ts`](lib/capa.ts) : la multiplication et les deux grands
     chiffres (550 h/an, 16 500 €/an). Changer `minutes: 15` met tout à jour
     d’un coup ; aucune valeur n’est saisie à la main, donc rien ne peut se
     contredire. Ce sont des ordres de grandeur d’exemple, pas des tarifs, et
     la mention « exemple illustratif » ne doit pas être retirée.
   - **Les chiffres SOURCÉS** (bloc `benchmarks`, hors home) sont des
     statistiques publiques. Chacun porte son organisme, son année, son
     périmètre et un lien cliquable vers la publication. **Ne jamais ajouter
     de statistique sans ces quatre éléments**, ne jamais présenter un ordre
     de grandeur d’exemple comme une donnée d’enquête, et en cas de doute sur
     un chiffre : le retirer, pas l’arrondir.

### Brancher le diagnostic (Tally)

Dans `content/site.ts` :

```ts
export const links = {
  diagnostic: {
    href: 'https://tally.so/r/XXXXXX', // tous les CTA pointent ici
    tallyFormId: 'XXXXXX',             // optionnel : formulaire en embed § 08
  },
  …
};
```

- `href` seul : les appels à l’action ouvrent le formulaire Tally (le lien
  externe reçoit automatiquement `target="_blank" rel="noopener"`).
- `tallyFormId` renseigné : le formulaire est en plus affiché en `iframe`
  (chargement différé) directement dans la section § 08.

### Les deux liens en attente

`control.link.href` et `privateAi.link.href` valent `null` : les deux liens
(« Comprendre les enjeux de confidentialité », « Découvrir Private AI ») ne
sont **pas rendus** tant que leur page dédiée n’existe pas — pas de lien mort.
Renseigner l’URL suffit à les faire apparaître.

### Poser la photographie

Le portrait (§ 01 en grand, § 07 en vignette) est un **emplacement réservé**
tant que `founder.portrait.src` vaut `null` : cadre au format 4:5, diagonales,
équerres d’imprimeur et chemin du fichier attendu. Aucun visage n’est inventé,
aucune image n’est générée. Pour poser la vraie photographie : déposer le
fichier dans `public/images/fondateur.jpg`, puis renseigner
`src: '/images/fondateur.jpg'`.

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
repères `§ 03 — LE CHIFFRE … CALCUL SIMPLE`, et se ferme par un folio
d’imprimé (`CAPA · NOTE D’ORIENTATION 2026 — 03 —`).

**Touche `G` : affiche la grille de contrôle** (outil de vérification des
alignements, jamais visible sans action de l’utilisateur).

Angles vifs (0 px), aucune ombre, aucune carte arrondie, icônes remplacées par
des chiffres, des filets et des flèches.

### Élément propriétaire : le POINT CAPA (hors home)

[`components/CapaPointChart.tsx`](components/CapaPointChart.tsx) trace la valeur
nette cumulée : la droite part sous zéro (l’investissement), traverse l’axe —
le **POINT CAPA** — puis produit de la valeur nette. Zone hachurée =
investissement à récupérer ; aplat bleu = valeur nette produite. Une seule
échelle pour le positif et le négatif : le graphique reste honnête. Il se trace
à la progression du défilement (avec cliquet : il ne se « détrace » jamais) et
existe en deux variantes de composition, large et étroite, pour rester lisible
sur téléphone. **Il n’est plus monté sur la home** : voir les blocs de réserve.

---

## 3. Architecture

```
app/
  layout.tsx              polices, métadonnées, repli <noscript>
  page.tsx                assemblage des 8 sections
  globals.css             design system (palette, échelles, grille, animations)
  mentions-legales/       gabarit légal (à compléter, aucune mention inventée)
  confidentialite/
components/
  Navigation.tsx          barre collante + repère d’avancement + menu mobile
  Hero.tsx                01 — la question + le portrait + l’unique CTA
  Recognition.tsx         02 — « vous vous reconnaissez ? », cinq points
  TimeCost.tsx            03 — l’arithmétique : 550 h/an, 16 500 €/an
  Method.tsx              04 — mesurer, prioriser, mettre en place
  Control.tsx             05 — l’IA est peut-être déjà là (une phrase)
  PrivateAI.tsx           06 — sa propre IA, en teaser
  Why.tsx                 07 — pourquoi je travaille là-dessus (signé)
  DiagnosticCTA.tsx       08 — l’unique appel à l’action + signature
  Footer.tsx              pied de page + ligne de base
  CapaPointChart.tsx      hors home — le graphique POINT CAPA (SVG, client)
  figures/                Portrait, LocalUnitSchematic (hors home)
  ui/                     Section, SectionHeader, SectionFoot, Reveal, CountUp
content/site.ts           ← tout le contenu (+ blocs de réserve)
lib/                      format.ts (nombres FR), capa.ts (calculs), useInView.ts
```

---

## 4. Micro-interactions

Trois gestes, pas plus, et tous liés à une lecture :

- apparition par **masque vertical** (`Reveal`) ;
- **tracé de filet** horizontal ou vertical ;
- **compteur** sur les chiffres (`CountUp`, une seule passe, courbe décélérée).

Aucun parallax. `prefers-reduced-motion: reduce` neutralise la totalité des
animations. Sans JavaScript, une feuille `<noscript>` neutralise les états
masqués : le document reste intégralement lisible.

> Note d’implémentation : `Reveal` rend un `<span>` par défaut (un `<div>`
> dans un `<p>` ou un `<h1>` est du HTML invalide — le navigateur le sort du
> paragraphe et le texte perd ses classes au premier rendu). Le
> `display: block` correspondant est déclaré dans `@layer components`, pour
> que les utilitaires Tailwind (`grid`, `flex`, `hidden`) gardent la main.

---

## 5. Performance et accessibilité

- Pages 100 % statiques (`○ Static`), ~116 kB de JS au premier chargement,
  aucune dépendance d’animation, aucune image bitmap par défaut (les figures
  sont des SVG en ligne).
- Polices auto-hébergées par `next/font` (`display: swap`, préchargées).
- HTML sémantique, hiérarchie de titres continue `h1 → h2 → h3 → h4`,
  `lang="fr"`, lien d’évitement, focus visible, `aria-label` sur les figures.
- Aucun débordement horizontal de 320 px à 1920 px (vérifié à 10 largeurs).
- Hauteur du document : 7 676 px en poste de travail, 6 992 px sur téléphone.

---

## 6. Points volontairement laissés ouverts

- Les **mentions légales** et la **politique de confidentialité** sont des
  gabarits : les champs à renseigner sont marqués « À compléter » en rouge.
  Aucune information d’entreprise n’a été inventée.
- Aucun témoignage, aucun logo client, aucune statistique de marché sur la
  home : elle ne contient que des chiffres explicitement présentés comme
  illustratifs.
- Aucun prix, aucune offre, aucun nombre de places : voir les trois règles en
  tête de ce fichier.
- Le portrait est un emplacement réservé jusqu’au dépôt d’une photographie
  réelle (voir plus haut). C’est le seul élément visuel manquant.
- Les deux pages dédiées (confidentialité / Shadow AI et Private AI) restent
  à écrire ; leurs liens n’apparaîtront qu’à ce moment-là.
- L’adresse de contact (`contact@capa.fr`) et l’URL canonique
  (`meta.url` dans `content/site.ts`) sont des valeurs de travail à confirmer.
