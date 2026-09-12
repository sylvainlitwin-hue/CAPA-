import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionFoot, SectionHeader } from '@/components/ui/Section';
import { hiddenCosts } from '@/content/site';

export function CostEquation() {
  return (
    <Section id="couts">
      <div className="shell">
        <SectionHeader index={hiddenCosts.index} label={hiddenCosts.sectionLabel} note="MESURE" />

        <div className="grid12 pt-10 md:pt-16">
          <div className="col-span-4 md:col-span-8">
            <h3 className="display display-lg">
              <Reveal>{hiddenCosts.title}</Reveal>
            </h3>
          </div>
          <div className="col-span-4 mt-6 md:col-span-3 md:col-start-10 md:mt-2">
            <Reveal delay={140}>
              <p className="body-text max-w-measure-sm">{hiddenCosts.intro}</p>
            </Reveal>
          </div>
        </div>

        {/* ── Relevé ──────────────────────────────────────────────────────── */}
        <ul className="mt-12 grid grid-cols-1 border-b border-[var(--rule-strong)] md:mt-16 md:grid-cols-2 md:gap-x-14">
          {hiddenCosts.items.map((item, i) => (
            <li
              key={item.text + i}
              className="border-t border-rule first:border-[var(--rule-strong)] md:[&:nth-child(2)]:border-[var(--rule-strong)]"
            >
              <Reveal delay={(i % 4) * 70} className="flex items-baseline gap-4 py-4 md:gap-6">
                <span className="label w-6 shrink-0 text-ink-mute">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-[1.0625rem] leading-snug md:text-[1.125rem]">
                  {item.figure ? (
                    <span className="font-mono font-medium text-signal">{item.figure} </span>
                  ) : null}
                  {item.text}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>

        {/* ── Équation ────────────────────────────────────────────────────── */}
        <div className="pb-16 pt-16 md:pb-24 md:pt-24">
          {/* Les trois termes occupent 4 colonnes chacun : l'opérateur tombe
              exactement sur une ligne de grille. */}
          <div className="grid12 gap-y-4">
            {hiddenCosts.equation.terms.map((term, i) => (
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

          <div className="mt-5 flex flex-col gap-4 md:mt-7 md:flex-row md:items-end md:justify-between">
            <Reveal delay={320}>
              <p className="display display-lg text-blue">{hiddenCosts.equation.result}</p>
            </Reveal>
            <Reveal delay={380}>
              <p className="label max-w-[34ch] leading-relaxed text-ink-mute md:text-right">
                {hiddenCosts.equation.note}
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* ── Bascule vers le travail ─────────────────────────────────────── */}
      <div className="border-t border-[var(--rule-strong)]">
        <div className="shell">
          <div className="py-12 md:py-16">
            <p className="display display-lg inline-block">
              <Reveal>{hiddenCosts.closing}</Reveal>
              <Reveal mode="rule-x" delay={280} className="mt-3 h-[3px] w-full bg-blue">
                <span className="sr-only" />
              </Reveal>
            </p>
          </div>
          <SectionFoot index={hiddenCosts.index} />
        </div>
      </div>
    </Section>
  );
}
