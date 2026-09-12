# Images

Déposer ici les photographies noir et blanc (WebP ou AVIF, ≥ 1200 px de large),
puis renseigner leur chemin dans `content/site.ts`.

Exemple — visuel de la section Private AI :

```ts
// content/site.ts → privateAi.figure
src: '/images/private-ai.webp',
```

Tant que `src` vaut `null`, la section affiche le schéma technique vectoriel
intégré (`components/figures/LocalUnitSchematic.tsx`).

Direction artistique : bureaux réels, dirigeants, ingénieurs, documents,
serveurs, détails industriels, mains, machines. Pas de photographie de stock
souriante devant un écran.
