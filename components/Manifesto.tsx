import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionFoot, SectionHeader } from '@/components/ui/Section';
import { manifesto } from '@/content/site';

export function Manifesto() {
  return (
    <Section id="ennemi">
      <div className="shell">
        <SectionHeader index={manifesto.index} label={manifesto.sectionLabel} note="POSITION" />

        <div className="grid12 pb-14 pt-10 md:pb-20 md:pt-16">
          <div className="col-span-4 md:col-span-9">
            <h3 className="display display-lg">
              <Reveal>{manifesto.titleA}</Reveal>
            </h3>
          </div>

          {/* Décrochement : la contre-proposition entre en retrait, en bleu. */}
          <div className="col-span-4 mt-6 md:col-span-9 md:col-start-4 md:mt-8">
            <h3 className="display display-lg text-blue">
              <Reveal delay={120}>{manifesto.titleB}</Reveal>
            </h3>
          </div>
        </div>

        <div className="grid12 border-t border-[var(--rule-strong)] pb-14 pt-8 md:pb-20 md:pt-10">
          <div className="col-span-4 md:col-span-4">
            <ul className="space-y-3">
              {manifesto.lines.map((line, i) => (
                <Reveal as="li" key={line} delay={i * 90} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[0.52em] h-[2px] w-4 shrink-0 bg-signal"
                  />
                  <span className="display-sm font-medium">{line}</span>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="col-span-4 mt-10 md:col-span-7 md:col-start-6 md:mt-0">
            <p className="display display-md">
              <Reveal delay={200}>{manifesto.closing}</Reveal>
            </p>
          </div>
        </div>
      </div>

      {/* ── Déclaration ─────────────────────────────────────────────────── */}
      <div className="bg-ink text-paper">
        <div className="shell">
          <div className="grid12 py-12 md:py-20">
            <div className="col-span-4 md:col-span-10">
              <p className="display display-lg">
                <Reveal>{manifesto.declaration}</Reveal>
              </p>
            </div>
            <div className="col-span-4 mt-6 md:col-span-2 md:mt-0 md:text-right">
              <span className="label text-paper/55">DÉCLARATION / 01</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Cinq règles ─────────────────────────────────────────────────── */}
      <div className="shell">
        <div className="pb-16 pt-10 md:pb-24 md:pt-14">
          <span className="label text-ink-mute">{manifesto.principlesLabel}</span>

          <ol className="mt-6 border-b border-[var(--rule-strong)]">
            {manifesto.principles.map((principle, i) => (
              <li key={principle} className="border-t border-[var(--rule-strong)]">
                <Reveal
                  delay={i * 70}
                  className="grid grid-cols-[auto_1fr] items-baseline gap-x-4 py-5 md:grid-cols-12 md:gap-x-6 md:py-7"
                >
                  <span className="label text-blue md:col-span-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="display display-poster uppercase md:col-span-10">{principle}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
        <SectionFoot index={manifesto.index} />
      </div>
    </Section>
  );
}
