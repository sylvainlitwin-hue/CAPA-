import { businessCase } from '@/content/site';

/**
 * Dérivations de l'exemple illustratif du Point CAPA. Un seul endroit pour
 * le calcul : les chiffres affichés, le graphique et le texte ne peuvent pas
 * se contredire.
 *
 * ⚠ Ce ne sont pas des tarifs. L'investissement est un ordre de grandeur
 * d'exemple servant à montrer la forme du raisonnement.
 */
const { investment, monthlyValue, horizonMonths } = businessCase.chart;

export const capaMath = {
  investment,
  /** Valeur mensuelle récupérée. */
  monthlyValue,
  horizonMonths,
  /** POINT CAPA : mois où la valeur cumulée compense l'investissement. */
  breakevenMonths: investment / monthlyValue,
  /** Valeur nette cumulée à l'horizon retenu. */
  netAtHorizon: monthlyValue * horizonMonths - investment,
} as const;
