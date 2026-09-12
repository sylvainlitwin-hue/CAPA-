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

/**
 * Durée annuelle de référence du travail en France (35 h hebdomadaires
 * annualisées). Sert uniquement à convertir des heures en fraction de poste.
 */
export const FTE_HOURS_PER_YEAR = 1607;

export const timeMath = {
  minutes,
  perDay,
  daysPerYear,
  hourlyRate,
  /** 15 × 10 × 220 / 60 = 550 heures par an. */
  hoursPerYear,
  /** 550 × 30 = 16 500 € par an. */
  costPerYear: hoursPerYear * hourlyRate,
  /** 550 / 220 = 2,5 h par jour. */
  hoursPerDay: hoursPerYear / daysPerYear,
  /** 220 jours ≈ 44 semaines travaillées, soit 12,5 h par semaine. */
  hoursPerWeek: hoursPerYear / (daysPerYear / 5),
  /** 550 / 1 607 ≈ 34 % d'un poste à temps plein. */
  fteShare: hoursPerYear / FTE_HOURS_PER_YEAR,
} as const;

/** Coût annuel d'un temps perdu quotidien, pour un effectif donné. */
export function annualCost(minutesPerDay: number, people: number): number {
  return (minutesPerDay / 60) * daysPerYear * people * hourlyRate;
}

/** « 30 min », « 1 h », « 2 h 30 » — pour les libellés de l'abaque. */
export function formatDuration(minutesTotal: number): string {
  if (minutesTotal < 60) return `${minutesTotal} min`;
  const h = Math.floor(minutesTotal / 60);
  const m = minutesTotal % 60;
  return m === 0 ? `${h} h` : `${h} h ${m}`;
}

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
