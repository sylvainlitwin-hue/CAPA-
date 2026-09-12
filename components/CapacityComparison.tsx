import { CountUp } from '@/components/ui/CountUp';
import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionFoot, SectionHeader } from '@/components/ui/Section';
import { formatFr } from '@/lib/format';
import { capacity } from '@/content/site';

export function CapacityComparison() {
  const ratio = capacity.right.value / capacity.left.value;
  const ratioPct = Math.round(ratio * 100);

  return (
    <Section id="capacite">
      <div className="shell">
        <SectionHeader index={capacity.index} label={capacity.sectionLabel} note={capacity.note} />

        <div className="grid12 pt-10 md:pt-16">
          <div className="col-span-4 md:col-span-11">
            <h3 className="display display-xl">
              <Reveal>{capacity.title}</Reveal>
            </h3>
          </div>
          <div className="col-span-4 mt-6 md:col-span-7 md:mt-10">
            <Reveal delay={160}>
              <p className="display display-sm font-normal text-ink-soft">{capacity.subtitle}</p>
            </Reveal>
          </div>
        </div>

        {/* ── Arbitrage chiffré ───────────────────────────────────────────── */}
        <div className="mt-14 border-t border-[var(--rule-strong)] pt-3 md:mt-24">
          <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
            <span className="label text-blue">
              {capacity.sectionLabel} <span aria-hidden="true">✳</span>
            </span>
            <span className="label text-signal">{capacity.disclaimer}</span>
          </div>

          <div className="grid12 mt-8 md:mt-12">
            {/* Recrutement */}
            <div className="col-span-4 md:col-span-5">
              <Reveal>
                <span className="label text-ink-soft">{capacity.left.label}</span>
                <p className="figure-xl mt-4">
                  <CountUp value={capacity.left.value} />
                </p>
                <span className="label mt-3 block text-ink">{capacity.left.unit}</span>
              </Reveal>
              <div className="mt-6 h-5 w-full border border-[var(--rule)]">
                <Reveal mode="rule-x" delay={200} className="hatch h-full w-full">
                  <span className="sr-only" />
                </Reveal>
              </div>
              <p className="label mt-3 max-w-[34ch] leading-relaxed text-ink-mute">
                {capacity.left.note}
              </p>
            </div>

            {/* Séparateur */}
            <div className="col-span-4 my-8 md:col-span-1 md:col-start-6 md:my-0">
              <div className="flex items-center gap-4 md:h-full md:flex-col">
                <span className="label border border-ink px-2 py-1.5">{capacity.vs}</span>
                <span
                  aria-hidden="true"
                  className="h-px flex-1 bg-[var(--rule)] md:mt-3 md:h-auto md:w-px md:flex-1"
                />
              </div>
            </div>

            {/* Récupération de capacité */}
            <div className="col-span-4 md:col-span-5 md:col-start-8">
              <Reveal delay={120}>
                <span className="label text-blue">{capacity.right.label}</span>
                <p className="figure-xl mt-4 text-blue">
                  <CountUp value={capacity.right.value} />
                </p>
                <span className="label mt-3 block text-ink">{capacity.right.unit}</span>
              </Reveal>
              {/* Largeur proportionnelle au coût annuel d'un recrutement. */}
              <div className="mt-6 h-5 w-full border border-[var(--rule)]">
                <div className="h-full" style={{ width: `${ratio * 100}%` }}>
                  <Reveal mode="rule-x" delay={320} className="h-full w-full bg-blue">
                    <span className="sr-only" />
                  </Reveal>
                </div>
              </div>
              <p className="label mt-3 max-w-[38ch] leading-relaxed text-ink-mute">
                Soit ≈ {ratioPct} % du coût annuel d’un recrutement ({formatFr(capacity.left.value)}{' '}
                €). {capacity.right.note}
              </p>
            </div>
          </div>
        </div>

        {/* ── Position ────────────────────────────────────────────────────── */}
        <div className="pb-14 pt-14 md:pb-20 md:pt-24">
          <div className="grid12">
            <div className="col-span-4 border-t-2 border-ink pt-6 md:col-span-9">
              <p className="display display-md">
                <Reveal className="block">{capacity.statement[0]} </Reveal>
                <Reveal delay={140} className="mt-2 block text-blue">
                  {capacity.statement[1]}
                </Reveal>
              </p>
            </div>
          </div>
        </div>
        <SectionFoot index={capacity.index} />
      </div>
    </Section>
  );
}
