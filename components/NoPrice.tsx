import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionFoot, SectionHeader } from '@/components/ui/Section';
import { noPrice } from '@/content/site';

/**
 * § 08 — Pas de prix avant le problème.
 *
 * La section de confiance. Elle se ferme sur un engagement, composé comme
 * une affiche : c'est la phrase qui doit rester en tête avant le diagnostic.
 */
export function NoPrice() {
  return (
    <Section id="pourquoi-capa">
      <div className="shell">
        <SectionHeader index={noPrice.index} label={noPrice.sectionLabel} note={noPrice.note} />

        <div className="grid12 pt-10 md:pt-16">
          <div className="col-span-4 md:col-span-9">
            <h3 className="display display-lg">
              <Reveal>{noPrice.title}</Reveal>
            </h3>
          </div>
        </div>

        <div className="grid12 pt-12 md:pt-20">
          <div className="col-span-4 md:col-span-7 md:col-start-3">
            {noPrice.lines.map((line, i) => (
              <Reveal
                as="p"
                key={line}
                delay={i * 110}
                className="display display-md mb-5 last:mb-0 md:mb-7"
              >
                {line}
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── L'engagement ─────────────────────────────────────────────── */}
        <div className="mt-16 border-t-2 border-ink pt-10 md:mt-24 md:pt-14">
          <div className="grid12">
            <div className="col-span-4 md:col-span-11">
              <p className="display display-xl text-blue">
                <Reveal>{noPrice.promise}</Reveal>
              </p>
            </div>
          </div>
        </div>

        <div className="h-16 md:h-24" />
        <SectionFoot index={noPrice.index} />
      </div>
    </Section>
  );
}
