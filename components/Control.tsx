import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionFoot, SectionHeader } from '@/components/ui/Section';
import { control } from '@/content/site';

/**
 * § 05 — Le contrôle.
 *
 * L'ancienne grande section Shadow AI tient désormais en une phrase, posée
 * sur un aplat graphite. Le lien vers la page dédiée ne s'affiche que si son
 * URL est renseignée dans content/site.ts : pas de lien mort en attendant.
 */
export function Control() {
  return (
    <Section id="controle" invert>
      <div className="shell">
        <SectionHeader
          index={control.index}
          label={control.sectionLabel}
          note={control.note}
          invert
        />

        <div className="grid12 py-14 md:py-24">
          <div className="col-span-4 md:col-span-10">
            <Reveal as="p" className="display display-md text-paper/70">
              {control.statement[0]}
            </Reveal>
            <Reveal as="p" delay={160} className="display display-md mt-6 text-paper md:mt-8">
              {control.statement[1]}
            </Reveal>

            {control.link.href ? (
              <Reveal delay={260} className="mt-10 md:mt-12">
                <a
                  href={control.link.href}
                  className="label inline-flex items-baseline gap-2 border-b border-rule-invert pb-1 text-paper transition-colors hover:border-paper"
                >
                  {control.link.label}
                  <span aria-hidden="true">→</span>
                </a>
              </Reveal>
            ) : null}
          </div>
        </div>

        <SectionFoot index={control.index} invert />
      </div>
    </Section>
  );
}
