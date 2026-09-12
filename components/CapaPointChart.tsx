'use client';

import { capaMath } from '@/lib/capa';
import { formatFr } from '@/lib/format';
import { useScrollProgress } from '@/lib/useInView';
import { timeCost } from '@/content/site';

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  POINT CAPA — graphique propriétaire
 * ─────────────────────────────────────────────────────────────────────────────
 *  Une seule droite : la valeur nette cumulée.
 *  Elle part sous zéro (l'investissement), traverse l'axe (le POINT CAPA),
 *  puis produit de la valeur nette.
 *
 *  Zone hachurée  = investissement à récupérer.
 *  Zone bleue     = valeur nette produite.
 *
 *  Toutes les valeurs proviennent de content/site.ts et sont illustratives.
 * ─────────────────────────────────────────────────────────────────────────────
 */

const { beforeLabel, afterLabel, axisLabel } = timeCost.capaPoint.chart;
const { investment, horizonMonths, breakevenMonths, netAtHorizon } = capaMath;

type Variant = 'wide' | 'narrow';

type Spec = {
  w: number;
  h: number;
  fs: number;
  fsBig: number;
  labelStep: number;
  annotations: boolean;
};

const SPECS: Record<Variant, Spec> = {
  wide: { w: 1200, h: 430, fs: 13, fsBig: 19, labelStep: 1, annotations: true },
  narrow: { w: 640, h: 500, fs: 19, fsBig: 26, labelStep: 3, annotations: false },
};

function geometry(spec: Spec) {
  const x0 = spec.w * 0.075;
  const x1 = spec.w * 0.965;
  const top = spec.h * 0.11;
  const bottom = spec.h * 0.74;
  const axisY = spec.h * 0.86;
  // Échelle unique pour le positif et le négatif : le graphique reste honnête.
  const scale = (bottom - top) / (netAtHorizon + investment);
  const zeroY = top + netAtHorizon * scale;

  const x = (m: number) => x0 + (m / horizonMonths) * (x1 - x0);
  const y = (v: number) => zeroY - v * scale;

  return { x0, x1, top, bottom, axisY, zeroY, x, y };
}

export function CapaPointChart() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();

  return (
    <div ref={ref}>
      <div className="hidden md:block">
        <Plot variant="wide" progress={progress} />
      </div>
      <div className="md:hidden">
        <Plot variant="narrow" progress={progress} />
      </div>
    </div>
  );
}

function Plot({ variant, progress }: { variant: Variant; progress: number }) {
  const spec = SPECS[variant];
  const g = geometry(spec);
  const clipId = `capa-clip-${variant}`;
  const hatchId = `capa-hatch-${variant}`;

  const xBreak = g.x(breakevenMonths);
  const revealX = g.x0 + (g.x1 - g.x0) * progress;
  const markerShown = progress >= breakevenMonths / horizonMonths;

  const ticks = Array.from({ length: horizonMonths + 1 }, (_, i) => i);

  return (
    <svg
      viewBox={`0 0 ${spec.w} ${spec.h}`}
      className="w-full"
      role="img"
      aria-label={`Graphique : valeur nette cumulée. L'investissement de ${formatFr(
        investment,
      )} euros est compensé au bout de ${formatFr(breakevenMonths, 1)} mois, puis la valeur nette atteint ${formatFr(
        netAtHorizon,
      )} euros à ${horizonMonths} mois. Exemple illustratif.`}
    >
      <defs>
        <pattern
          id={hatchId}
          width="7"
          height="7"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(-45)"
        >
          <line x1="0" y1="0" x2="0" y2="7" stroke="#141414" strokeWidth="1.2" opacity="0.5" />
        </pattern>
        <clipPath id={clipId}>
          <rect
            x={g.x0 - 2}
            y="0"
            width={Math.max(0, revealX - g.x0 + 2)}
            height={spec.h}
            className="capa-chart-anim"
            style={{ transition: 'width 120ms linear' }}
          />
        </clipPath>
      </defs>

      {/* Axe des mois */}
      <line
        x1={g.x0}
        y1={g.axisY}
        x2={g.x1}
        y2={g.axisY}
        stroke="#141414"
        strokeWidth="1"
        opacity="0.45"
      />
      {ticks.map((m) => (
        <g key={m}>
          <line
            x1={g.x(m)}
            y1={g.axisY}
            x2={g.x(m)}
            y2={g.axisY + (m % spec.labelStep === 0 ? 7 : 4)}
            stroke="#141414"
            strokeWidth="1"
            opacity="0.45"
          />
          {m % spec.labelStep === 0 ? (
            <text
              x={g.x(m)}
              y={g.axisY + spec.fs + 12}
              className="font-mono"
              fontSize={spec.fs}
              fill="#6E6B63"
              textAnchor="middle"
              letterSpacing="0.06em"
            >
              {m}
            </text>
          ) : null}
        </g>
      ))}
      <text
        x={g.x1}
        y={g.axisY + spec.fs * 2 + 22}
        className="font-mono"
        fontSize={spec.fs}
        fill="#6E6B63"
        textAnchor="end"
        letterSpacing="0.14em"
      >
        {axisLabel.toUpperCase()}
      </text>

      {/* Ligne de zéro : seuil de récupération */}
      <line
        x1={g.x0}
        y1={g.zeroY}
        x2={g.x1}
        y2={g.zeroY}
        stroke="#141414"
        strokeWidth="1"
        strokeDasharray="2 4"
      />
      <text
        x={g.x0 - 8}
        y={g.zeroY + spec.fs / 3}
        className="font-mono"
        fontSize={spec.fs}
        fill="#141414"
        textAnchor="end"
      >
        0
      </text>

      {/* Surfaces */}
      <g clipPath={`url(#${clipId})`}>
        <polygon
          points={`${g.x0},${g.zeroY} ${g.x0},${g.y(-investment)} ${xBreak},${g.zeroY}`}
          fill={`url(#${hatchId})`}
        />
        <polygon
          points={`${xBreak},${g.zeroY} ${g.x1},${g.y(netAtHorizon)} ${g.x1},${g.zeroY}`}
          fill="#1358D8"
          opacity="0.92"
        />
        <line
          x1={g.x0}
          y1={g.y(-investment)}
          x2={g.x1}
          y2={g.y(netAtHorizon)}
          stroke="#141414"
          strokeWidth="2.5"
        />
      </g>

      {/* Point CAPA */}
      <g opacity={markerShown ? 1 : 0} style={{ transition: 'opacity 260ms ease' }}>
        <line
          x1={xBreak}
          y1={g.top - 4}
          x2={xBreak}
          y2={g.axisY}
          stroke="#1358D8"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <circle cx={xBreak} cy={g.zeroY} r={spec.fs * 0.55} fill="#F2EFE6" />
        <circle
          cx={xBreak}
          cy={g.zeroY}
          r={spec.fs * 0.42}
          fill="#1358D8"
          stroke="#141414"
          strokeWidth="1"
        />
        <text
          x={xBreak + 12}
          y={g.top + spec.fs}
          className="font-mono"
          fontSize={spec.fs}
          fill="#1358D8"
          letterSpacing="0.14em"
        >
          POINT CAPA
        </text>
        <text
          x={xBreak + 12}
          y={g.top + spec.fs + spec.fsBig + 6}
          className="font-mono"
          fontSize={spec.fsBig}
          fill="#141414"
          letterSpacing="-0.02em"
        >
          MOIS {formatFr(breakevenMonths, 1)}
        </text>
      </g>

      {/* Annotations (desktop uniquement) : posées dans les zones vides,
          jamais par-dessus une hachure ni par-dessus l'aplat bleu. */}
      {spec.annotations ? (
        <g>
          {/* Avant le point : ce qu'il reste à récupérer. */}
          <text
            x={g.x0 + 10}
            y={g.zeroY - 92}
            className="font-mono"
            fontSize={spec.fs}
            fill="#141414"
            letterSpacing="0.12em"
          >
            {beforeLabel.toUpperCase()}
          </text>
          <text
            x={g.x0 + 10}
            y={g.zeroY - 92 + spec.fsBig + 6}
            className="font-mono"
            fontSize={spec.fsBig}
            fill="#C62D16"
            letterSpacing="-0.02em"
          >
            −{formatFr(investment)} €
          </text>

          {/* Après le point : valeur nette, au-dessus de la droite, là où
              le dégagement est suffisant (≈ 87 % de l'axe). */}
          <text
            x={g.x0 + (g.x1 - g.x0) * 0.87}
            y={g.top + 26}
            className="font-mono"
            fontSize={spec.fs}
            fill="#1358D8"
            textAnchor="end"
            letterSpacing="0.12em"
          >
            {afterLabel.toUpperCase()}
          </text>
          <text
            x={g.x1}
            y={g.y(netAtHorizon) - 14}
            className="font-mono"
            fontSize={spec.fsBig}
            fill="#141414"
            textAnchor="end"
            letterSpacing="-0.02em"
          >
            +{formatFr(netAtHorizon)} €
          </text>
        </g>
      ) : null}
    </svg>
  );
}
