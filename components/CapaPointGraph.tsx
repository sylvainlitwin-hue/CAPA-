import { CapaPointChart } from '@/components/CapaPointChart';
import { CountUp } from '@/components/ui/CountUp';
import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionFoot, SectionHeader } from '@/components/ui/Section';
import { capaMath } from '@/lib/capa';
import { formatFr } from '@/lib/format';
import { businessCase } from '@/content/site';

/**
 * § 05 — Le Point CAPA.
 *
 * Cette section explique une philosophie de travail, pas une offre : trois
 * chiffres d'ordre de grandeur, le tracé, et rien qui ressemble à un devis.
 */
function KeyFigure({
  label,
  value,
  unit,
  decimals = 0,
  prefix,
  accent = false,
  delay = 0,
}: {
  label: string;
  value: number;
  unit: string;
  decimals?: number;
  prefix?: string;
  accent?: boolean;
  delay?: number;
}) {
  return (
    <Reveal as="div" delay={delay} className="border-t-2 border-ink pt-4">
      <span className="label text-ink-soft">{label}</span>
      <p className={`figure-xl mt-4 ${accent ? 'text-blue' : ''}`}>
        {prefix ? <span aria-hidden="true">{prefix}</span> : null}
        <CountUp value={value} decimals={decimals} duration={decimals ? 1400 : 1100} />
      </p>
      <span className="label mt-3 block text-ink">{unit}</span>
    </Reveal>
  );
}

export function CapaPointGraph() {
  const { chart, figures } = businessCase;

  return (
    <Section id="point-capa" className="graph-paper">
      <div className="shell">
        <SectionHeader
          index={businessCase.index}
          label={businessCase.sectionLabel}
          note={businessCase.note}
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

        {/* ── La philosophie, énoncée avant tout chiffre ─────────────────── */}
        <div className="grid12 pt-12 md:pt-20">
          <div className="col-span-4 md:col-span-8 md:col-start-3">
            <Reveal>
              <p className="display display-md">{businessCase.philosophy}</p>
            </Reveal>
          </div>
        </div>

        {/* ── Trois ordres de grandeur ──────────────────────────────────── */}
        <div className="mt-14 flex items-baseline justify-between gap-4 border-b border-[var(--rule-strong)] pb-3 md:mt-24">
          <span className="label text-blue">
            {businessCase.caseLabel} <span aria-hidden="true">✳</span>
          </span>
          <span className="label hidden text-ink-mute md:block">
            {chart.name} / {chart.nameEn}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 pt-8 sm:grid-cols-3 md:pt-12">
          <KeyFigure label={figures.investment} value={capaMath.investment} unit="€" />
          <KeyFigure
            label={figures.monthly}
            value={capaMath.monthlyValue}
            unit="€ / mois"
            delay={120}
          />
          <KeyFigure
            label={figures.breakeven}
            value={capaMath.breakevenMonths}
            decimals={1}
            prefix="≈ "
            unit="mois"
            accent
            delay={240}
          />
        </div>

        <div className="grid12 pt-10 md:pt-14">
          <div className="col-span-4 md:col-span-6">
            <Reveal delay={120} className="border-t border-rule pt-4">
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
          <div className="col-span-4 mt-8 md:col-span-5 md:col-start-8 md:mt-0">
            <Reveal delay={200} className="border-t border-rule pt-4">
              <span className="label text-blue">{chart.name}</span>
              <p className="body-text mt-3 max-w-measure">{chart.definition}</p>
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
              {businessCase.disclaimer}
            </p>
          </div>
        </div>

        <SectionFoot index={businessCase.index} />
      </div>
    </Section>
  );
}
