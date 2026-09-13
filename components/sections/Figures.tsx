import { CountUp } from '@/components/ui/CountUp';
import { Reveal } from '@/components/ui/Reveal';
import { Sheet, SheetRef } from '@/components/ui/Sheet';
import { figure } from '@/content/site';
import { timeMath } from '@/lib/capa';
import { formatFr } from '@/lib/format';

/**
 * § 03 — Le calcul.
 *
 * La signature visuelle de la page : une multiplication posée comme sur un
 * cahier, puis deux chiffres énormes. Le calcul est vrai et vérifiable ; les
 * valeurs d'entrée sont un exemple, et c'est écrit en rouge.
 *
 * Rien d'autre dans cette section : aucune conversion, aucun graphique,
 * aucune explication du retour sur investissement.
 */
export function Figures() {
  const terms = [
    { value: formatFr(timeMath.minutes), unit: figure.terms[0] },
    { value: formatFr(timeMath.perDay), unit: figure.terms[1] },
    { value: formatFr(timeMath.daysPerYear), unit: figure.terms[2] },
  ];

  return (
    <Sheet id="le-calcul" className="graph-paper">
      <div className="shell">
        <SheetRef index={figure.ref} label={figure.label} note={figure.note} />

        <div className="flex justify-end pt-6">
          <span className="label text-signal">✳ {figure.disclaimer}</span>
        </div>

        {/* ── La multiplication ─────────────────────────────────────────── */}
        <div className="grid12 pt-6 md:pt-10">
          <div className="col-span-4 md:col-span-7">
            {/* Le premier terme n'a pas d'opérateur, mais la colonne de
                l'opérateur reste réservée : les trois chiffres s'alignent. */}
            {terms.map((term, i) => (
              <Reveal
                as="div"
                key={term.unit}
                delay={i * 110}
                className="flex items-baseline gap-4 border-t border-[var(--rule-strong)] py-4 first:border-t-0 md:gap-7 md:py-6"
              >
                <span aria-hidden="true" className="figure-md w-5 shrink-0 text-blue md:w-8">
                  {i === 0 ? '' : '×'}
                </span>
                <span className="figure-md">{term.value}</span>
                <span className="label text-ink-mute">{term.unit}</span>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── Le résultat ──────────────────────────────────────────────── */}
        <Reveal mode="rule-x" className="mt-8 h-0.5 w-full bg-ink md:mt-10">
          <span className="sr-only" />
        </Reveal>

        <div className="grid12 pt-8 md:pt-12">
          <div className="col-span-4 md:col-span-5">
            {/* Le signe d'égalité tient la même colonne que les opérateurs :
                la somme se lit comme posée à la main. */}
            <div className="flex items-start gap-4 md:gap-7">
              <span aria-hidden="true" className="figure-md w-5 shrink-0 text-blue md:w-8">
                =
              </span>
              <div>
                <p className="figure-xl">
                  <CountUp value={timeMath.hoursPerYear} />
                </p>
                <p className="label mt-3 text-ink">{figure.hoursUnit}</p>
              </div>
            </div>
          </div>

          <div className="col-span-4 mt-10 md:col-span-6 md:col-start-7 md:mt-0">
            <p className="label text-ink-mute">{figure.rateLabel}</p>
            <p className="figure-xl mt-3 text-blue">
              <CountUp value={timeMath.costPerYear} />
            </p>
            <p className="label mt-3 text-ink">{figure.costUnit}</p>
          </div>
        </div>

        {/* ── La seule phrase ──────────────────────────────────────────── */}
        <div className="grid12 pt-14 md:pt-24">
          <div className="col-span-4 md:col-span-8 md:col-start-5">
            <Reveal>
              <p className="display display-md">{figure.closing}</p>
            </Reveal>
          </div>
        </div>

        <div className="h-16 md:h-28" />
      </div>
    </Sheet>
  );
}
