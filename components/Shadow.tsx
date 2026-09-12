import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionFoot, SectionHeader } from '@/components/ui/Section';
import { shadow } from '@/content/site';

/**
 * § 05 — L'IA est peut-être déjà là.
 *
 * Trois scènes concrètes, quatre inconnues, et la phrase à retenir sur un
 * aplat graphite. Ton factuel : le problème n'est pas l'usage, c'est de ne
 * pas savoir.
 */
export function Shadow() {
  return (
    <Section id="gouvernance">
      <div className="shell">
        <SectionHeader index={shadow.index} label={shadow.sectionLabel} note={shadow.note} />

        <div className="grid12 pt-10 md:pt-16">
          <div className="col-span-4 md:col-span-9">
            <h3 className="display display-lg">
              <Reveal>{shadow.title}</Reveal>
            </h3>
          </div>
        </div>

        <div className="grid12 pt-12 md:pt-20">
          {/* Trois scènes. */}
          <div className="col-span-4 md:col-span-5">
            <ol className="border-b-2 border-ink">
              {shadow.usages.map((usage, i) => (
                <li key={usage} className="border-t border-[var(--rule-strong)]">
                  <Reveal delay={i * 90} className="flex items-baseline gap-4 py-4">
                    <span className="label w-6 shrink-0 text-ink-mute">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="display display-sm">{usage}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>

          {/* Ce que vous ne savez pas. */}
          <div className="col-span-4 mt-12 md:col-span-6 md:col-start-7 md:mt-0">
            <Reveal>
              <p className="display display-md">{shadow.statement}</p>
            </Reveal>

            <Reveal delay={140} className="mt-8 border-t-2 border-ink pt-5 md:mt-12">
              <p className="body-text max-w-measure">{shadow.unknownsLabel} :</p>
            </Reveal>

            <ul className="mt-4">
              {shadow.unknowns.map((item, i) => (
                <Reveal as="li" key={item} delay={200 + i * 80} className="py-1">
                  <span className="display display-sm text-blue">{item}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-14 md:h-20" />
      </div>

      {/* ── La phrase à retenir ───────────────────────────────────────────── */}
      <div className="bg-ink text-paper">
        <div className="shell">
          <div className="py-14 md:py-24">
            <p className="display display-xl">
              <Reveal>{shadow.slogan}</Reveal>
            </p>
          </div>
          <SectionFoot index={shadow.index} invert />
        </div>
      </div>
    </Section>
  );
}
