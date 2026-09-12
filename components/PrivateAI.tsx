import Image from 'next/image';
import { LocalUnitSchematic } from '@/components/figures/LocalUnitSchematic';
import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionFoot, SectionHeader } from '@/components/ui/Section';
import { privateAi } from '@/content/site';

/**
 * § 07 — Votre propre IA.
 *
 * Deux règles : aucun jargon (ni RAG, ni Docker, ni GPU, ni LLM), et la
 * machine n'est jamais le héros — elle reste une planche annexe, à droite.
 */
export function PrivateAI() {
  const { figure } = privateAi;

  return (
    <Section id="private-ai" className="bg-paper-deep">
      <div className="shell">
        <SectionHeader index={privateAi.index} label={privateAi.sectionLabel} note={privateAi.note} />

        <div className="grid12 pt-10 md:pt-16">
          <div className="col-span-4 md:col-span-9">
            <h3 className="display display-lg">
              <Reveal>{privateAi.title}</Reveal>
            </h3>
          </div>
        </div>

        <div className="grid12 pt-12 md:pt-20">
          <div className="col-span-4 md:col-span-7">
            {privateAi.lines.map((line, i) => (
              <Reveal as="p" key={line} delay={i * 110} className="display display-md">
                {line}
              </Reveal>
            ))}

            <Reveal delay={200} className="mt-10 border-t-2 border-ink pt-6 md:mt-14">
              <p className="display display-md">
                {privateAi.emphasis[0]}
                <br />
                <span className="text-blue">{privateAi.emphasis[1]}</span>
              </p>
            </Reveal>
          </div>

          {/* ── La machine : planche annexe, volontairement petite ──────── */}
          <div className="col-span-4 mt-14 md:col-span-3 md:col-start-10 md:mt-2">
            <Reveal>
              <figure className="border-t-2 border-ink bg-paper">
                <div className="px-3 pb-2 pt-4">
                  {figure.src ? (
                    <Image
                      src={figure.src}
                      alt={figure.alt}
                      width={1200}
                      height={1500}
                      sizes="(min-width: 768px) 24vw, 90vw"
                      className="w-full grayscale"
                      loading="lazy"
                    />
                  ) : (
                    <LocalUnitSchematic />
                  )}
                </div>
                <figcaption className="border-t border-[var(--rule-strong)] px-3 py-3">
                  <span className="label text-ink">
                    FIG. {privateAi.index} — {figure.caption}
                  </span>
                </figcaption>
              </figure>
            </Reveal>

            <p className="label mt-4 leading-relaxed text-ink-mute">{figure.aside}</p>
          </div>
        </div>

        <div className="h-14 md:h-20" />
        <SectionFoot index={privateAi.index} />
      </div>
    </Section>
  );
}
