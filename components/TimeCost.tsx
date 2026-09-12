import { CapaPointChart } from '@/components/CapaPointChart';
import { CountUp } from '@/components/ui/CountUp';
import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionFoot, SectionHeader } from '@/components/ui/Section';
import { capaMath, timeMath } from '@/lib/capa';
import { formatFr } from '@/lib/format';
import { timeCost } from '@/content/site';

/**
 * § 04 — Ce que coûtent 15 minutes.
 *
 * Une multiplication que le dirigeant peut refaire de tête, deux chiffres
 * énormes, et la façon dont je juge un investissement (le Point CAPA),
 * réduite à une phrase et un tracé.
 */
export function TimeCost() {
  const { capaPoint, termUnits } = timeCost;
  const terms = [
    `${timeMath.minutes} ${termUnits[0]}`,
    `${timeMath.perDay} ${termUnits[1]}`,
    `${timeMath.daysPerYear} ${termUnits[2]}`,
  ];

  return (
    <Section id="arithmetique" className="graph-paper">
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
              <p className="label leading-relaxed text-signal">
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

          {/* ── Les deux chiffres qui comptent ─────────────────────────── */}
          <div className="grid12 mt-8 md:mt-12">
            <div className="col-span-4 md:col-span-5">
              <Reveal delay={320}>
                <span className="label text-ink-soft">{timeCost.hoursLabel}</span>
                <p className="figure-xl mt-3">
                  <CountUp value={timeMath.hoursPerYear} />
                </p>
                <span className="label mt-3 block text-ink">{timeCost.hoursUnit}</span>
              </Reveal>
            </div>

            <div className="col-span-4 mt-10 md:col-span-6 md:col-start-7 md:mt-0">
              <Reveal delay={420}>
                <span className="label text-ink-soft">
                  À {formatFr(timeMath.hourlyRate)} € de l’heure
                </span>
                <p className="figure-xl mt-3 text-blue">
                  <CountUp value={timeMath.costPerYear} />
                </p>
                <span className="label mt-3 block text-ink">{timeCost.costUnit}</span>
              </Reveal>
            </div>
          </div>
        </div>

        {/* ── La leçon ──────────────────────────────────────────────────── */}
        <div className="grid12 pt-14 md:pt-24">
          <div className="col-span-4 md:col-span-8">
            <p className="display display-md">
              <Reveal className="block">{timeCost.lines[0]} </Reveal>
              <Reveal delay={140} className="mt-3 block text-blue">
                {timeCost.lines[1]}
              </Reveal>
            </p>
          </div>
        </div>

        {/* ── Le Point CAPA, réduit à l'essentiel ───────────────────────── */}
        <div className="mt-16 border-t-2 border-ink pt-8 md:mt-28 md:pt-12">
          <div className="grid12">
            <div className="col-span-4 md:col-span-2">
              <span className="label text-blue">{capaPoint.label}</span>
            </div>
            <div className="col-span-4 mt-4 md:col-span-9 md:col-start-4 md:mt-0">
              <Reveal>
                <p className="display display-md">{capaPoint.intro}</p>
              </Reveal>
              <Reveal delay={140} className="mt-5">
                <p className="body-text max-w-measure">{capaPoint.definition}</p>
              </Reveal>
            </div>
          </div>

          <div className="mt-10 md:mt-14">
            <div className="flex flex-col gap-1 border-b border-ink pb-3 md:flex-row md:items-baseline md:justify-between md:gap-4">
              <span className="label text-ink">
                FIG. {timeCost.index} — {capaPoint.chart.name}
              </span>
              <span className="label text-ink-mute">
                {formatFr(capaMath.investment)} € · {formatFr(capaMath.monthlyValue)} € / MOIS ·{' '}
                {formatFr(capaMath.breakevenMonths, 1)} MOIS
              </span>
            </div>

            <div className="mt-6 md:mt-10">
              <CapaPointChart />
            </div>

            <div className="mt-6 flex flex-col gap-4 border-t border-rule pt-4 md:flex-row md:items-start md:justify-between">
              <ul className="flex flex-col gap-3 md:flex-row md:gap-8">
                <li className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="hatch h-3 w-8 shrink-0 border border-[var(--rule-strong)]"
                  />
                  <span className="label text-ink-soft">{capaPoint.chart.beforeLabel}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span aria-hidden="true" className="h-3 w-8 shrink-0 bg-blue" />
                  <span className="label text-ink-soft">{capaPoint.chart.afterLabel}</span>
                </li>
              </ul>
              <p className="label max-w-[44ch] leading-relaxed text-ink-mute md:text-right">
                {capaPoint.disclaimer}
              </p>
            </div>
          </div>
        </div>

        <div className="h-14 md:h-20" />
        <SectionFoot index={timeCost.index} />
      </div>
    </Section>
  );
}
