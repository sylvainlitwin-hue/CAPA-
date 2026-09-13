# CAPA.

**Je ne vous aide pas à mettre plus d’IA dans votre entreprise.
Je vous aide à savoir où elle vaut réellement le coup.**

Landing page CAPA — six feuilles, un seul lecteur : un dirigeant-propriétaire
de PME française de 5 à 30 salariés. Next.js 15 (App Router) · TypeScript ·
Tailwind CSS. Aucune bibliothèque d’animation : les micro-interactions sont en
CSS + un observateur d’intersection de quelques lignes.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # export statique de toutes les pages
npm run typecheck
```

## Les quatre règles qui gouvernent la page

**1. Elle parle à une seule personne.** Un patron, assis en face. Donc « je »
et « vous » — jamais « les entreprises », « les organisations », « les
décideurs », « nos clients ». Test avant d’écrire : *Sylvain peut-il dire
cette phrase à voix haute, dans l’atelier ou le bureau de ce patron ?* Si elle
sonne brochure, cabinet de conseil ou startup, on la réécrit. Si elle ne se
relie à rien de vécu, on la supprime.

**2. Elle ne vend pas de l’IA, elle vend une question.** « Combien vous coûte
encore ce que votre entreprise fait mal, lentement ou inutilement à la main ? »
Puis seulement : « est-ce que l’IA mérite d’intervenir ici ? » L’ennemi n’est
pas ChatGPT, c’est l’**IA gadget** — des outils ajoutés sans savoir pourquoi.
La page assume donc de dire que parfois la bonne décision est de ne rien
acheter (§ 04) : c’est la phrase la plus importante du document, et elle est
composée comme telle.

**3. Elle ne vend pas tout CAPA.** Elle vend la curiosité de savoir ce que le
statu quo coûte, et le diagnostic est ce qui résout cette tension. N’ont donc
pas leur place ici : prix, abonnements, modules, packs, formation, matériel,
RAG, Docker, GPU, comparatif local/cloud, longue section sécurité ou RGPD,
marketplace, témoignages, logos, FAQ, listes de bénéfices ou de
fonctionnalités. Ces sujets auront leurs propres pages, ou viendront après
qualification.

**4. Un seul appel à l’action, un seul libellé :** « Évaluer mon entreprise »
(`cta` dans `content/site.ts`) — barre de tête comprise.

---

## 1. Où modifier le contenu

**Tout le contenu éditorial est dans un seul fichier : [`content/site.ts`](content/site.ts).**
Rien n’est écrit en dur dans les composants.

| § | Export | Rôle | Composant |
| --- | --- | --- | --- |
| 01 | `hero`, `positioning` | la question, l’homme qui la pose, la phrase clivante | [`sections/Hero.tsx`](components/sections/Hero.tsx) |
| 02 | `recognition` | cinq choses qu’il paie déjà | [`sections/Recognition.tsx`](components/sections/Recognition.tsx) |
| 03 | `figure` | le calcul : 550 h/an, 16 500 €/an | [`sections/Figures.tsx`](components/sections/Figures.tsx) |
| 04 | `provocation` | « vous n’avez pas besoin de plus d’IA » | [`sections/Provocation.tsx`](components/sections/Provocation.tsx) |
| 05 | `capacity` | l’intrigue : une IA qui vous appartient | [`sections/Capacity.tsx`](components/sections/Capacity.tsx) |
| 06 | `close` | le diagnostic, en très grand | [`sections/Close.tsx`](components/sections/Close.tsx) |

Plus `brand`, `links`, `cta`, `founder`, `colophon`, `meta`.

### Les chiffres

Les nombres sont stockés en **valeurs brutes** (`minutes: 15`), jamais en
chaînes. Le formatage français (espace fine insécable, virgule décimale) est
fait à l’affichage par [`lib/format.ts`](lib/format.ts) — volontairement sans
`Intl`, pour que le rendu serveur et le rendu navigateur soient identiques au
caractère près.

Les chiffres de la § 03 sont tous dérivés de `figure.params` dans
[`lib/capa.ts`](lib/capa.ts) : la multiplication et les deux grands totaux.
Changer `minutes: 15` met tout à jour d’un coup ; rien n’est saisi à la main,
donc rien ne peut se contredire. **Ce sont des ordres de grandeur d’exemple,
pas des tarifs : la mention « exemple illustratif » ne doit pas être retirée.**

Aucune statistique de marché ne figure sur la page. Si l’on en ajoute un jour
sur une autre page : organisme, année, périmètre et lien vers la publication,
les quatre à la fois — sinon on ne la publie pas.

### Brancher le diagnostic (Tally)

```ts
export const links = {
  diagnostic: {
    href: 'https://tally.so/r/XXXXXX', // le bouton pointe ici
    tallyFormId: 'XXXXXX',             // optionnel : formulaire en embed § 06
  },
  …
};
```

`href` seul : les deux boutons ouvrent le formulaire (un lien externe reçoit
automatiquement `target="_blank" rel="noopener"`). `tallyFormId` renseigné :
le formulaire est en plus affiché en `iframe` (chargement différé) dans la § 06.

### Le lien en attente

`capacity.link.href` vaut `null` : le lien « Pourquoi l’IA privée ? → » n’est
**pas rendu** tant que sa page n’existe pas — pas de lien mort. Renseigner
l’URL suffit à le faire apparaître.

### Poser la photographie

Le portrait de la § 01 est un **emplacement réservé** tant que
`founder.portrait.src` vaut `null` : cadre 4:5, diagonales, équerres
d’imprimeur et chemin du fichier attendu. Aucun visage n’est inventé, aucune
image n’est générée. Déposer le fichier dans `public/images/sylvain.jpg`, puis
renseigner `src: '/images/sylvain.jpg'`.

Direction de prise de vue : photographie réelle, **pas** un portrait corporate
parfait. Entrepreneur, naturel, noir et blanc. Pas de banque d’images, pas de
machine, pas de décor futuriste.

---

## 2. Le système graphique

**CORPORATE INTELLIGENCE 1979 / 2026** — publicité informatique B2B des années
70–80, rapport annuel industriel, Swiss International Style. La page doit
pouvoir être reconnue sans son logo.

### Palette — quatre encres, pas une cinquième

| Rôle | Valeur | Usage |
| --- | --- | --- |
| Papier | `#F2EFE6` (`#E8E4D8` en variante) | fond |
| Encre graphite | `#141414` | texte, filets, sections de rupture |
| Bleu technique | `#1358D8` | accent unique : chiffres clés, réponses, aplats |
| Rouge signal | `#C62D16` | mentions illustratives, refus, l’ennemi — rien d’autre |

Elles sont rappelées en bas de page sous forme de **gamme de contrôle**, cette
bande d’encres que les imprimeurs laissent en marge de la feuille.

Contrastes vérifiés WCAG AA : bleu sur papier 5,3:1 · gris de note 4,6:1 ·
rouge signal 4,8:1. Sur fond graphite, le bleu n’est employé **qu’en grand
corps** (≥ 24 px) : en petit il ne passerait pas (3,1:1), l’emphase y est donc
portée par la taille.

### Typographie

- **Inter Tight** pour le titrage et le texte : néo-grotesque libre, proche des
  grotesques suisses du design corporate de l’époque.
- **IBM Plex Mono** pour les chiffres, les repères de régie, les unités et les
  boutons.

Échelles dans [`app/globals.css`](app/globals.css) : `.display-hero`
(l’ouverture), `.display-xl` → `.display-sm`, `.figure-xl` / `.figure-md`
(chiffres, toujours tabulaires), `.label` (monospace, capitales, 0,14 em).

> `.display-hero` est dimensionné pour que les **trois lignes composées** du
> titre d’ouverture tiennent chacune sur une ligne à l’écran, de 390 px à
> 1920 px. Si l’on change la longueur de ces lignes, c’est ici qu’on vérifie.

### Grille et mobilier

`.shell` (marges) + `.grid12` : 12 colonnes au-delà de 768 px, 4 en dessous.
Chaque section s’ouvre par un filet, un numéro, un intitulé, une annotation et
une **croix de repérage** — c’est tout le mobilier de la page
([`ui/Sheet.tsx`](components/ui/Sheet.tsx)). Il n’y a volontairement rien
d’autre à décorer : pas de cartes, pas d’icônes, pas d’ombres, 0 px d’arrondi.

Matérialité : un **grain de papier** à 3,5 % d’opacité en produit sur toute la
page (trame de bruit SVG, aucune requête réseau), le papier millimétré très
pâle de la § 03, et les équerres de montage du portrait.

**Touche `G` : affiche la grille de contrôle** (outil de vérification des
alignements, jamais visible sans action de l’utilisateur).

---

## 3. Architecture

```
app/
  layout.tsx              polices, métadonnées, repli <noscript>
  page.tsx                assemblage des 6 sections
  globals.css             design system (palette, échelles, grille, grain)
  mentions-legales/       gabarit légal (à compléter, aucune mention inventée)
  confidentialite/
components/
  Masthead.tsx            sigle + l’unique appel à l’action (pas de menu)
  Colophon.tsx            pied de page + gamme de contrôle
  LegalPage.tsx           gabarit des deux pages légales
  sections/               les six feuilles, dans l’ordre de lecture
  figures/Portrait.tsx    photographie ou emplacement réservé
  ui/                     Sheet (mobilier), Reveal, CountUp, GridOverlay
content/site.ts           ← tout le contenu (+ blocs de réserve)
lib/                      format.ts (nombres FR), capa.ts (calculs), useInView.ts
```

### Ce qui est conservé mais non affiché

- `capaPoint` dans `content/site.ts` + [`components/CapaPointChart.tsx`](components/CapaPointChart.tsx) :
  le **POINT CAPA**, graphique propriétaire de la valeur nette cumulée (il part
  sous zéro, traverse l’axe, puis produit de la valeur ; une seule échelle pour
  le positif et le négatif, le graphique reste honnête). Il relève de la longue
  explication du retour sur investissement : sa place est sur une page méthode.
- `benchmarks` dans `content/site.ts` : statistiques publiques sourcées (Insee,
  enquête TIC 2025). **Les quatre valeurs sont à confirmer sur la publication
  d’origine avant toute mise en ligne.**
- [`components/figures/LocalUnitSchematic.tsx`](components/figures/LocalUnitSchematic.tsx) :
  schéma au trait d’une unité de calcul dans les locaux, pour la future page
  Private AI.

Les composants des versions précédentes de la page restent récupérables dans
l’historique git.

---

## 4. Micro-interactions

Trois gestes, tous liés à une lecture :

- apparition par **masque vertical** (`Reveal`) ;
- **tracé de filet** horizontal ou vertical ;
- **compteur** sur les deux grands chiffres (`CountUp`, une passe, décélérée).

Aucun parallax, aucun défilement détourné. `prefers-reduced-motion: reduce`
neutralise la totalité des animations. Sans JavaScript, une feuille
`<noscript>` neutralise les états masqués : le document reste intégralement
lisible.

> Deux pièges déjà payés, à ne pas réintroduire :
> 1. `Reveal` rend un `<span>` par défaut — un `<div>` dans un `<p>` ou un
>    `<h1>` est du HTML invalide, le navigateur le sort du paragraphe et le
>    texte perd ses classes au premier rendu.
> 2. Le `display: block` de `.reveal` est déclaré **en premier** dans
>    `@layer components` : à spécificité égale la dernière règle gagne, donc
>    une classe de disposition définie plus bas (`.grid12`) doit pouvoir
>    reprendre la main sur un élément qui porte aussi `.reveal`.

---

## 5. Performance et accessibilité

- Pages 100 % statiques (`○ Static`), ~112 kB de JS au premier chargement,
  aucune dépendance d’animation, aucune image bitmap par défaut.
- Polices auto-hébergées par `next/font` (`display: swap`, préchargées).
- HTML sémantique, hiérarchie de titres continue `h1 → h2 → h3 → h4`,
  `lang="fr"`, lien d’évitement, focus visible, `aria-label` sur les figures.
- Aucun débordement horizontal de 320 px à 1920 px (vérifié à 10 largeurs).
- Hauteur du document : ~6 970 px en poste de travail, ~6 320 px sur téléphone.

---

## 6. Points volontairement laissés ouverts

- La **photographie de Sylvain** : c’est le seul élément visuel manquant.
- Les **mentions légales** et la **politique de confidentialité** sont des
  gabarits ; les champs à renseigner sont marqués « À compléter » en rouge.
  Aucune information d’entreprise n’a été inventée.
- L’**URL du diagnostic** (Tally) et la page « Pourquoi l’IA privée ? ».
- L’adresse de contact (`contact@capa.fr`) et l’URL canonique (`meta.url`)
  sont des valeurs de travail à confirmer.
- Aucun témoignage, aucun logo client, aucune statistique présentée comme
  réelle : la page ne contient que des chiffres explicitement illustratifs.
