import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionFoot, SectionHeader } from '@/components/ui/Section';
import { shadowAi } from '@/content/site';

export function ShadowAI() {
  return (
    <Section id="shadow-ai">
      <div className="shell">
        <SectionHeader index={shadowAi.index} label={shadowAi.sectionLabel} note={shadowAi.note} />

        <div className="grid12 pt-10 md:pt-16">
          <div className="col-span-4 md:col-span-9">
            <h3 className="display display-lg">
              <Reveal>{shadowAi.title}</Reveal>
            </h3>
          </div>
        </div>

        {/* La question entre en retrait, sur toute la hauteur d'un titre. */}
        <div className="grid12 pt-8 md:pt-12">
          <div className="col-span-4 md:col-span-10 md:col-start-3">
            <p className="display display-xl text-blue">
              <Reveal>{shadowAi.question}</Reveal>
            </p>
          </div>
        </div>

        <div className="grid12 pt-14 md:pt-24">
          {/* Relevé d'usages observés — présenté comme un journal de bord. */}
          <div className="col-span-4 md:col-span-5">
            <span className="label text-ink-mute">Usages courants</span>
            <ol className="mt-5 border-b border-[var(--rule-strong)]">
              {shadowAi.usages.map((usage, i) => (
                <li key={usage} className="border-t border-rule first:border-[var(--rule-strong)]">
                  <Reveal delay={i * 70} className="flex items-baseline gap-4 py-4">
                    <span className="label w-6 shrink-0 text-ink-mute">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-[1.0625rem] leading-snug md:text-[1.125rem]">{usage}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
            <p className="label mt-4 leading-relaxed text-signal">
              <span aria-hidden="true">✳ </span>
              {shadowAi.hedge}
            </p>
          </div>

          <div className="col-span-4 mt-12 md:col-span-6 md:col-start-7 md:mt-0">
            <Reveal>
              <p className="display display-md">{shadowAi.statement}</p>
            </Reveal>

            <Reveal delay={140} className="mt-10 border-t-2 border-ink pt-6 md:mt-14">
              <p className="body-text max-w-measure">{shadowAi.openingLine}</p>
            </Reveal>

            <ul className="mt-5">
              {shadowAi.unknowns.map((item, i) => (
                <Reveal as="li" key={item} delay={200 + i * 80} className="py-1">
                  <span className="display display-sm text-blue">{item}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-16 md:h-24" />
      </div>

      {/* ── L'expression ──────────────────────────────────────────────────── */}
      <div className="bg-ink text-paper">
        <div className="shell">
          <div className="grid12 py-12 md:py-20">
            <div className="col-span-4 md:col-span-2">
              <span className="label text-paper/55">{shadowAi.term.label}</span>
            </div>
            <div className="col-span-4 mt-6 md:col-span-10 md:col-start-3 md:mt-0">
              <Reveal>
                <p className="font-mono text-[clamp(2.25rem,7vw,6rem)] font-medium leading-[0.9] tracking-[-0.03em]">
                  {shadowAi.term.name}
                </p>
              </Reveal>
              <Reveal delay={160} className="mt-8 md:mt-10">
                <p className="display display-sm max-w-measure font-normal text-paper/80">
                  {shadowAi.term.definition}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      {/* ── Le cadre : ce qu'une entreprise doit trancher ───────────────── */}
      <div className="shell">
        <div className="grid12 pt-14 md:pt-24">
          <div className="col-span-4 md:col-span-2">
            <span className="label text-blue">{shadowAi.framework.label}</span>
            <span className="label mt-2 block text-ink-mute">{shadowAi.framework.name}</span>
          </div>
          <div className="col-span-4 mt-6 md:col-span-9 md:col-start-4 md:mt-0">
            <h4 className="display display-md">
              <Reveal>{shadowAi.framework.title}</Reveal>
            </h4>

            <ul className="mt-8 grid grid-cols-1 border-b-2 border-ink md:grid-cols-2 md:gap-x-12">
              {shadowAi.framework.items.map((item, i) => (
                <li
                  key={item}
                  className="border-t border-rule first:border-[var(--rule-strong)] md:[&:nth-child(2)]:border-[var(--rule-strong)]"
                >
                  <Reveal delay={(i % 5) * 50} className="flex items-baseline gap-4 py-3">
                    <span className="label w-6 shrink-0 text-ink-mute">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[1rem] leading-snug">{item}</span>
                  </Reveal>
                </li>
              ))}
            </ul>

            <Reveal delay={200} className="mt-8 md:mt-10">
              <p className="display display-md text-blue">{shadowAi.framework.benefit}</p>
            </Reveal>
          </div>
        </div>

        <div className="h-16 md:h-24" />
        <SectionFoot index={shadowAi.index} />
      </div>
    </Section>
  );
}
