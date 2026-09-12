import { timeCost } from '@/content/site';

/**
 * Les deux calculs de la page, dérivés une seule fois.
 *
 * ⚠ Ce ne sont pas des tarifs : ce sont des ordres de grandeur illustratifs
 * servant à montrer la forme du raisonnement. Les mentions « exemple
 * illustratif » affichées à l'écran ne doivent pas être retirées.
 */

/* ── § 04 — Ce que coûtent 15 minutes ──────────────────────────────────── */

const { minutes, perDay, daysPerYear, hourlyRate } = timeCost.params;
const hoursPerYear = (minutes * perDay * daysPerYear) / 60;

export const timeMath = {
  minutes,
  perDay,
  daysPerYear,
  hourlyRate,
  /** 15 × 10 × 220 / 60 = 550 heures par an. */
  hoursPerYear,
  /** 550 × 30 = 16 500 € par an. */
  costPerYear: hoursPerYear * hourlyRate,
} as const;

/* ── § 04 — Le Point CAPA ──────────────────────────────────────────────── */

const { investment, monthlyValue, horizonMonths } = timeCost.capaPoint.chart;

export const capaMath = {
  investment,
  monthlyValue,
  horizonMonths,
  /** POINT CAPA : mois où la valeur cumulée compense l'investissement. */
  breakevenMonths: investment / monthlyValue,
  /** Valeur nette cumulée à l'horizon retenu. */
  netAtHorizon: monthlyValue * horizonMonths - investment,
} as const;
