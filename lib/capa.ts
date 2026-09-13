import { capaPoint, figure } from '@/content/site';

/**
 * Les calculs de la page, dérivés une seule fois.
 *
 * ⚠ Ce ne sont pas des tarifs : ce sont des ordres de grandeur illustratifs
 * servant à montrer la forme du raisonnement. La mention « exemple
 * illustratif » affichée à l'écran ne doit pas être retirée.
 */

/* ── § 03 — Ce que coûtent 15 minutes ──────────────────────────────────── */

const { minutes, perDay, daysPerYear, hourlyRate } = figure.params;
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

/* ── Hors page — Le Point CAPA ─────────────────────────────────────────── */

/* Conservé pour une page dédiée : le graphique n'est pas sur cette page. */

const { investment, monthlyValue, horizonMonths } = capaPoint.chart;

export const capaMath = {
  investment,
  monthlyValue,
  horizonMonths,
  /** POINT CAPA : mois où la valeur cumulée compense l'investissement. */
  breakevenMonths: investment / monthlyValue,
  /** Valeur nette cumulée à l'horizon retenu. */
  netAtHorizon: monthlyValue * horizonMonths - investment,
} as const;
