/**
 * FIG. 06 — Schéma d'implantation d'une unité de calcul locale.
 *
 * Dessin au trait, style manuel d'exploitation : aucune image générique,
 * aucun rendu « futuriste ». Le périmètre en pointillé bleu porte le message
 * de la section : la donnée reste à l'intérieur de l'entreprise.
 *
 * Pour remplacer ce schéma par une photographie noir et blanc, renseigner
 * `privateAi.figure.src` dans content/site.ts.
 */
export function LocalUnitSchematic() {
  const ink = '#141414';
  const blue = '#1358D8';
  const signal = '#C62D16';

  return (
    <svg
      viewBox="0 0 700 780"
      className="w-full"
      role="img"
      aria-label="Schéma : une unité de calcul installée dans les locaux de l’entreprise. Le périmètre de l’entreprise est tracé en pointillé ; aucune donnée n’en sort pour entraîner un service tiers."
    >
      {/* ── Périmètre de l'entreprise ─────────────────────────────────── */}
      <text
        x="60"
        y="150"
        className="font-mono"
        fontSize="17"
        fill={blue}
        letterSpacing="0.14em"
      >
        PÉRIMÈTRE DE L’ENTREPRISE
      </text>
      <rect
        x="60"
        y="168"
        width="580"
        height="470"
        fill="none"
        stroke={blue}
        strokeWidth="1.5"
        strokeDasharray="7 6"
      />

      {/* ── Châssis, vue axonométrique ────────────────────────────────── */}
      {/* face supérieure */}
      <polygon
        points="140,260 200,215 460,215 400,260"
        fill="none"
        stroke={ink}
        strokeWidth="1.5"
      />
      {/* face latérale */}
      <polygon
        points="400,260 460,215 460,535 400,580"
        fill="none"
        stroke={ink}
        strokeWidth="1.5"
      />
      {/* face avant */}
      <rect x="140" y="260" width="260" height="320" fill="none" stroke={ink} strokeWidth="1.5" />

      {/* ventilation */}
      {Array.from({ length: 7 }).map((_, i) => (
        <line
          key={i}
          x1="165"
          y1={292 + i * 9}
          x2="375"
          y2={292 + i * 9}
          stroke={ink}
          strokeWidth="1"
          opacity="0.55"
        />
      ))}

      {/* baies de stockage */}
      <rect x="165" y="378" width="210" height="38" fill="none" stroke={ink} strokeWidth="1" />
      <line x1="165" y1="397" x2="375" y2="397" stroke={ink} strokeWidth="1" opacity="0.35" />
      <rect x="165" y="428" width="210" height="38" fill="none" stroke={ink} strokeWidth="1" />
      <line x1="165" y1="447" x2="375" y2="447" stroke={ink} strokeWidth="1" opacity="0.35" />

      {/* témoin d'alimentation + plaque */}
      <rect x="165" y="500" width="28" height="28" fill="none" stroke={ink} strokeWidth="1" />
      <circle cx="179" cy="514" r="5" fill={signal} />
      <rect x="300" y="500" width="75" height="28" fill="none" stroke={ink} strokeWidth="1" />
      <text
        x="337"
        y="519"
        className="font-mono"
        fontSize="15"
        fill={ink}
        textAnchor="middle"
        letterSpacing="0.06em"
      >
        CAPA.
      </text>

      {/* ── Sol ───────────────────────────────────────────────────────── */}
      <line x1="90" y1="580" x2="560" y2="580" stroke={ink} strokeWidth="1.5" />
      {Array.from({ length: 24 }).map((_, i) => (
        <line
          key={i}
          x1={92 + i * 20}
          y1="580"
          x2={82 + i * 20}
          y2="594"
          stroke={ink}
          strokeWidth="1"
          opacity="0.4"
        />
      ))}

      {/* ── Raccordement au réseau interne ───────────────────────────── */}
      <polyline points="140,556 108,556 108,566" fill="none" stroke={ink} strokeWidth="1" />
      <rect x="98" y="566" width="20" height="14" fill="none" stroke={ink} strokeWidth="1" />

      {/* ── Renvois ──────────────────────────────────────────────────── */}
      <g>
        <polyline points="497,243 445,243 420,255" fill="none" stroke={ink} strokeWidth="1" />
        <text x="505" y="248" className="font-mono" fontSize="17" fill={ink} letterSpacing="0.12em">
          CALCUL
        </text>

        <polyline points="497,395 400,395" fill="none" stroke={ink} strokeWidth="1" />
        <text x="505" y="390" className="font-mono" fontSize="17" fill={ink} letterSpacing="0.12em">
          VOS
        </text>
        <text x="505" y="412" className="font-mono" fontSize="17" fill={ink} letterSpacing="0.12em">
          DONNÉES
        </text>

        <polyline points="497,514 400,514" fill="none" stroke={ink} strokeWidth="1" />
        <text x="505" y="509" className="font-mono" fontSize="17" fill={ink} letterSpacing="0.12em">
          ADMINIS-
        </text>
        <text x="505" y="531" className="font-mono" fontSize="17" fill={ink} letterSpacing="0.12em">
          TRATION
        </text>
      </g>

      <g className="hidden md:block">
        <text
          x="92"
          y="488"
          className="font-mono"
          fontSize="17"
          fill={ink}
          textAnchor="end"
          letterSpacing="0.12em"
        >
          RÉSEAU
        </text>
        <text
          x="92"
          y="510"
          className="font-mono"
          fontSize="17"
          fill={ink}
          textAnchor="end"
          letterSpacing="0.12em"
        >
          INTERNE
        </text>
        <line x1="100" y1="522" x2="100" y2="562" stroke={ink} strokeWidth="1" />
      </g>

      <text x="90" y="619" className="font-mono" fontSize="17" fill={ink} letterSpacing="0.14em">
        VOS LOCAUX
      </text>

      {/* ── Ce qui ne sort pas ───────────────────────────────────────── */}
      <g>
        <line x1="360" y1="690" x2="600" y2="690" stroke={signal} strokeWidth="1.5" />
        <polyline points="590,682 600,690 590,698" fill="none" stroke={signal} strokeWidth="1.5" />
        <line x1="465" y1="672" x2="495" y2="708" stroke={signal} strokeWidth="2.5" />
        <line x1="495" y1="672" x2="465" y2="708" stroke={signal} strokeWidth="2.5" />
        <text
          x="360"
          y="670"
          className="font-mono"
          fontSize="17"
          fill={signal}
          letterSpacing="0.12em"
        >
          SORTIE VERS UN TIERS
        </text>
        <text x="360" y="735" className="font-mono" fontSize="17" fill={ink} letterSpacing="0.1em">
          AUCUNE DONNÉE ENVOYÉE
        </text>
        <text x="360" y="757" className="font-mono" fontSize="17" fill={ink} letterSpacing="0.1em">
          POUR ENTRAÎNER UN SERVICE
        </text>
      </g>
    </svg>
  );
}
