import { Portrait } from '@/components/figures/Portrait';
import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionFoot, SectionHeader } from '@/components/ui/Section';
import { founder, why } from '@/content/site';

/**
 * § 07 — Pourquoi je travaille là-dessus.
 *
 * Ton volontairement plat : pas de storytelling, pas de promesse. Une
 * photographie, quatre phrases, une signature.
 */
export function Why() {
  return (
    <Section id="pourquoi">
      <div className="shell">
        <SectionHeader index={why.index} label={why.sectionLabel} note={why.note} />

        <div className="grid12 pt-10 md:pt-16">
          <div className="col-span-2 md:col-span-3">
            <Reveal>
              <Portrait small />
            </Reveal>
          </div>

          <div className="col-span-4 mt-8 md:col-span-8 md:col-start-5 md:mt-0">
            <h3 className="display display-lg">
              <Reveal>{why.title}</Reveal>
            </h3>

            <blockquote className="mt-8 md:mt-12">
              {why.lines.map((line, i) => (
                <Reveal as="p" key={line} delay={i * 110} className="display display-sm mb-4 md:mb-5">
                  {line}
                </Reveal>
              ))}
              <Reveal delay={340} className="mt-6 md:mt-8">
                <p className="display display-md">
                  {why.emphasis[0]}
                  <br />
                  <span className="text-blue">{why.emphasis[1]}</span>
                </p>
              </Reveal>
            </blockquote>

            <div className="mt-8 border-t-2 border-ink pt-4 md:mt-10">
              <p className="display display-md leading-none">{founder.name}</p>
            </div>
          </div>
        </div>

        <div className="h-14 md:h-20" />
        <SectionFoot index={why.index} />
      </div>
    </Section>
  );
}
