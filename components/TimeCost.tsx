import { CountUp } from '@/components/ui/CountUp';
import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionFoot, SectionHeader } from '@/components/ui/Section';
import { timeMath } from '@/lib/capa';
import { formatFr } from '@/lib/format';
import { timeCost } from '@/content/site';

/**
 * § 03 — Le chiffre.
 *
 * La multiplication, les deux chiffres, la mention, une phrase. Rien d'autre.
 * Les conversions, l'abaque et le graphique du Point CAPA ont été retirés de
 * la home : ils appartiennent à une page dédiée.
 *
 * Tout est dérivé de `timeCost.params` (voir lib/capa.ts) : changer
 * `minutes: 15` met à jour la multiplication et les deux chiffres ensemble.
 */
export function TimeCost() {
  const { termUnits } = timeCost;
  const terms = [
    `${timeMath.minutes} ${termUnits[0]}`,
    `${timeMath.perDay} ${termUnits[1]}`,
    `${timeMath.daysPerYear} ${termUnits[2]}`,
  ];

  return (
    <Section id="le-chiffre" className="graph-paper">
      <div className="shell">
        <SectionHeader index={timeCost.index} label={timeCost.sectionLabel} note={timeCost.note} />

        <div className="grid12 pt-10 md:pt-16">
          <div className="col-span-4 md:col-span-8">
            <h3 className="display display-xl">
              <Reveal>{timeCost.title}</Reveal>
            </h3>
          </div>
          <div className="col-span-4 mt-6 md:col-span-3 md:col-start-10 md:mt-2">
            <Reveal delay={140}>
              <p className="label text-signal">
                <span aria-hidden="true">✳ </span>
                {timeCost.disclaimer}
              </p>
            </Reveal>
          </div>
        </div>

        {/* ── La multiplication ─────────────────────────────────────────── */}
        <div className="pt-14 md:pt-24">
          <div className="grid12 gap-y-4">
            {terms.map((term, i) => (
              <div key={term} className="col-span-4 flex items-baseline gap-4 md:gap-6">
                {i > 0 ? (
                  <span
                    aria-hidden="true"
                    className="font-mono text-2xl font-normal text-blue md:text-4xl"
                  >
                    ×
                  </span>
                ) : null}
                <Reveal delay={i * 110}>
                  <span className="display display-md uppercase">{term}</span>
                </Reveal>
              </div>
            ))}
          </div>

          <Reveal mode="rule-x" delay={260} className="mt-5 h-[2px] w-full bg-ink md:mt-7">
            <span className="sr-only" />
          </Reveal>

          {/* ── Les deux chiffres ──────────────────────────────────────── */}
          <div className="grid12 mt-8 md:mt-14">
            <div className="col-span-4 md:col-span-5">
              <Reveal delay={320}>
                <p className="figure-xl">
                  <CountUp value={timeMath.hoursPerYear} />
                </p>
                <span className="label mt-3 block text-ink">{timeCost.hoursUnit}</span>
              </Reveal>
            </div>

            <div className="col-span-4 mt-10 md:col-span-6 md:col-start-7 md:mt-0">
              <Reveal delay={420}>
                <span className="label text-ink-soft">{timeCost.rateLabel}</span>
                <p className="figure-xl mt-3 text-blue">
                  <CountUp value={timeMath.costPerYear} />
                </p>
                <span className="label mt-3 block text-ink">{timeCost.costUnit}</span>
              </Reveal>
            </div>
          </div>
        </div>

        {/* ── Une seule phrase ─────────────────────────────────────────── */}
        <div className="grid12 pb-14 pt-14 md:pb-20 md:pt-24">
          <div className="col-span-4 md:col-span-9">
            <p className="display display-md">
              <Reveal>{timeCost.closing}</Reveal>
            </p>
          </div>
        </div>

        <SectionFoot index={timeCost.index} />
      </div>
    </Section>
  );
}
