import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionFoot, SectionHeader } from '@/components/ui/Section';
import { recognition } from '@/content/site';

/**
 * § 03 — Vous vous reconnaissez ?
 *
 * La section de reconnaissance : six lignes que le dirigeant vit chaque
 * semaine. Aucune explication, aucune théorie — juste la liste, puis
 * « c'est là que je commence ».
 */
export function Recognition() {
  return (
    <Section id="reconnaissance">
      <div className="shell">
        <SectionHeader
          index={recognition.index}
          label={recognition.sectionLabel}
          note={recognition.note}
        />

        <div className="grid12 pt-10 md:pt-16">
          <div className="col-span-4 md:col-span-9">
            <h3 className="display display-xl">
              <Reveal>{recognition.title}</Reveal>
            </h3>
          </div>
        </div>

        <div className="grid12 pt-12 md:pt-20">
          <div className="col-span-4 md:col-span-5">
            {recognition.lines.map((line, i) => (
              <Reveal as="p" key={line} delay={i * 110} className="display display-md mb-4 md:mb-6">
                {line}
              </Reveal>
            ))}
          </div>

          <div className="col-span-4 mt-10 md:col-span-6 md:col-start-7 md:mt-0">
            <span className="label text-ink-mute">{recognition.lossesLabel}</span>
            <ul className="mt-4 border-b-2 border-ink">
              {recognition.losses.map((loss, i) => (
                <li key={loss} className="border-t border-[var(--rule-strong)]">
                  <Reveal delay={i * 60} className="flex items-baseline gap-4 py-3">
                    <span aria-hidden="true" className="label w-4 shrink-0 text-signal">
                      —
                    </span>
                    <span className="display display-sm">{loss}</span>
                  </Reveal>
                </li>
              ))}
            </ul>
            <Reveal delay={200} className="mt-6">
              <p className="display display-sm text-ink-soft">{recognition.unknown}</p>
            </Reveal>
          </div>
        </div>

        {/* ── C'est là que je commence ──────────────────────────────────── */}
        <div className="pb-14 pt-14 md:pb-20 md:pt-24">
          <p className="display display-lg inline-block">
            <Reveal>{recognition.closing}</Reveal>
            <Reveal mode="rule-x" delay={280} className="mt-3 h-[3px] w-full bg-blue">
              <span className="sr-only" />
            </Reveal>
          </p>
        </div>

        <SectionFoot index={recognition.index} />
      </div>
    </Section>
  );
}
