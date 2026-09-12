import { CapaPointChart } from '@/components/CapaPointChart';
import { CountUp } from '@/components/ui/CountUp';
import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionHeader } from '@/components/ui/Section';
import { capaMath } from '@/lib/capa';
import { formatFr } from '@/lib/format';
import { businessCase } from '@/content/site';

export function CapaPointGraph() {
  const { breakeven, chart } = businessCase;

  return (
    <Section id="business-case" className="graph-paper">
      <div className="shell">
        <SectionHeader
          index={businessCase.index}
          label={businessCase.sectionLabel}
          note="CAS ILLUSTRATIF"
        />

        <div className="grid12 pt-10 md:pt-16">
          <div className="col-span-4 md:col-span-8">
            <h3 className="display display-lg">
              <Reveal>{businessCase.title}</Reveal>
            </h3>
          </div>
          <div className="col-span-4 mt-6 md:col-span-3 md:col-start-10 md:mt-2">
            <Reveal delay={140}>
              <p className="label leading-relaxed text-signal">
                <span aria-hidden="true">✳ </span>
                {businessCase.disclaimer}
              </p>
            </Reveal>
          </div>
        </div>

        {/* ── Bandeau du cas ──────────────────────────────────────────────── */}
        <div className="mt-12 flex flex-col gap-1 border-y border-[var(--rule-strong)] py-3 md:mt-20 md:flex-row md:items-baseline md:justify-between md:gap-4">
          <span className="label text-blue">
            {businessCase.caseLabel} <span aria-hidden="true">✳</span>
          </span>
          <span className="label text-ink">{businessCase.caseRef}</span>
        </div>

        <div className="grid12">
          {/* ── Relevé chiffré ──────────────────────────────────────────── */}
          <dl className="col-span-4 md:col-span-5">
            {/* Colonnes fixes : les chiffres s'alignent sur un même fer à
                droite, les unités sur un même fer à gauche. */}
            {businessCase.rows.map((row, i) => (
              <Reveal
                as="div"
                key={row.label}
                delay={i * 60}
                className="grid grid-cols-[1fr_auto_4.5rem] items-baseline gap-x-3 border-b border-rule py-4 md:gap-x-4 md:py-5"
              >
                <dt className="label max-w-[16ch] leading-relaxed text-ink-soft md:max-w-[20ch]">
                  {row.label}
                </dt>
                <dd className="figure-lg text-right">
                  <CountUp value={row.value} />
                </dd>
                <dd className="label text-ink-mute">{row.unit}</dd>
              </Reveal>
            ))}
          </dl>

          {/* ── Point de rentabilité ────────────────────────────────────── */}
          <div className="col-span-4 mt-12 md:col-span-6 md:col-start-7 md:mt-4">
            <Reveal>
              <span className="label text-ink-soft">{breakeven.label}</span>
            </Reveal>
            <Reveal delay={120} className="mt-4 flex items-baseline gap-4">
              <span className="figure-xl text-blue">
                <CountUp value={breakeven.value} decimals={1} duration={1400} />
              </span>
              <span className="label text-ink">{breakeven.unit}</span>
            </Reveal>

            <Reveal mode="rule-x" delay={240} className="mt-6 h-[2px] w-full bg-ink md:mt-8">
              <span className="sr-only" />
            </Reveal>

            <Reveal delay={300} className="mt-4">
              <div className="flex items-baseline gap-3">
                <span className="label text-blue">{chart.name}</span>
                <span className="label text-ink-mute">/ {chart.nameEn}</span>
              </div>
              <p className="body-text mt-3 max-w-measure">{chart.definition}</p>
            </Reveal>

            {/* Le calcul est écrit en clair : rien à croire sur parole. */}
            <Reveal delay={360} className="mt-8 border-t border-rule pt-4 md:mt-10">
              <span className="label text-ink-mute">Calcul</span>
              <p className="mt-3 font-mono text-[clamp(0.9375rem,1.2vw,1.1875rem)] leading-relaxed">
                {formatFr(capaMath.investment)} €
                <span className="text-blue"> ÷ </span>
                {formatFr(capaMath.monthlyValue)} € / mois
                <span className="text-blue"> = </span>
                {formatFr(capaMath.breakevenMonths, 1)} mois
              </p>
            </Reveal>
          </div>
        </div>

        {/* ── Graphique ───────────────────────────────────────────────────── */}
        <div className="pb-16 pt-16 md:pb-24 md:pt-24">
          <div className="flex flex-col gap-1 border-b border-ink pb-3 md:flex-row md:items-baseline md:justify-between md:gap-4">
            <span className="label text-ink">
              FIG. {businessCase.index} — {chart.name}
            </span>
            <span className="label text-ink-mute">
              VALEUR NETTE CUMULÉE / {chart.horizonMonths} MOIS
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
                <span className="label text-ink-soft">{chart.beforeLabel}</span>
              </li>
              <li className="flex items-center gap-3">
                <span aria-hidden="true" className="h-3 w-8 shrink-0 bg-blue" />
                <span className="label text-ink-soft">{chart.afterLabel}</span>
              </li>
            </ul>
            <p className="label max-w-[44ch] leading-relaxed text-ink-mute md:text-right">
              Hypothèses : investissement {formatFr(capaMath.investment)} €, valeur récupérée{' '}
              {formatFr(capaMath.monthlyValue)} € / mois. {businessCase.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
