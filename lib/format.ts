/**
 * Formatage numérique français, sans Intl : le rendu serveur et le rendu
 * client doivent produire exactement la même chaîne (pas d'écart ICU,
 * donc pas d'erreur d'hydratation).
 *
 * Séparateur de milliers : espace fine insécable (U+202F).
 * Séparateur décimal : virgule.
 */

const THIN_NBSP = ' ';

export function groupFr(value: number): string {
  const negative = value < 0;
  const digits = Math.abs(Math.trunc(value)).toString();
  let out = '';
  for (let i = 0; i < digits.length; i += 1) {
    if (i > 0 && (digits.length - i) % 3 === 0) out += THIN_NBSP;
    out += digits[i];
  }
  return negative ? `-${out}` : out;
}

export function formatFr(value: number, decimals = 0): string {
  if (decimals === 0) return groupFr(Math.round(value));
  const factor = 10 ** decimals;
  const rounded = Math.round(value * factor) / factor;
  const whole = Math.trunc(Math.abs(rounded));
  const frac = Math.round((Math.abs(rounded) - whole) * factor)
    .toString()
    .padStart(decimals, '0');
  const sign = rounded < 0 ? '-' : '';
  return `${sign}${groupFr(whole)},${frac}`;
}

/** Espace insécable avant l'unité, comme en typographie française. */
export function withUnit(value: string, unit?: string): string {
  return unit ? `${value} ${unit}` : value;
}

export const NBSP = ' ';
