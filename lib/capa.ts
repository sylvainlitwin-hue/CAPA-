import { businessCase } from '@/content/site';

/**
 * Dérivations du cas illustratif. Un seul endroit pour le calcul :
 * le tableau, le graphique et le texte ne peuvent pas se contredire.
 */
const { investment, annualValue, horizonMonths } = businessCase.chart;

export const capaMath = {
  investment,
  annualValue,
  horizonMonths,
  /** Valeur mensuelle récupérée. */
  monthlyValue: annualValue / horizonMonths,
  /** POINT CAPA : mois où la valeur cumulée compense l'investissement. */
  breakevenMonths: investment / (annualValue / horizonMonths),
  /** Valeur nette cumulée à l'horizon retenu. */
  netAtHorizon: (annualValue / horizonMonths) * horizonMonths - investment,
} as const;
