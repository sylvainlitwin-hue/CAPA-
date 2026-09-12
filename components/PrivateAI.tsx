import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionFoot, SectionHeader } from '@/components/ui/Section';
import { privateAi } from '@/content/site';

/**
 * § 06 — Private AI.
 *
 * Teaser seulement : aucun détail technique, aucune caractéristique
 * matérielle, aucun schéma d'implantation. Le sujet appartient à sa page
 * dédiée — le lien s'affichera dès que son URL sera renseignée.
 *
 * (Le schéma de l'unité locale reste disponible dans
 * components/figures/LocalUnitSchematic.tsx pour cette future page.)
 */
export function PrivateAI() {
  return (
    <Section id="private-ai" className="bg-paper-deep">
      <div className="shell">
        <SectionHeader index={privateAi.index} label={privateAi.sectionLabel} note={privateAi.note} />

        <div className="grid12 py-14 md:py-24">
          <div className="col-span-4 md:col-span-9">
            <h3 className="display display-lg">
              <Reveal>{privateAi.title}</Reveal>
            </h3>
          </div>

          <div className="col-span-4 mt-8 md:col-span-7 md:col-start-3 md:mt-12">
            <Reveal delay={160}>
              <p className="display display-sm max-w-measure font-normal text-ink-soft">
                {privateAi.text}
              </p>
            </Reveal>

            {privateAi.link.href ? (
              <Reveal delay={240} className="mt-8 md:mt-10">
                <a
                  href={privateAi.link.href}
                  className="label inline-flex items-baseline gap-2 border-b border-[var(--rule-strong)] pb-1 text-blue transition-colors hover:border-blue"
                >
                  {privateAi.link.label}
                  <span aria-hidden="true">→</span>
                </a>
              </Reveal>
            ) : null}
          </div>
        </div>

        <SectionFoot index={privateAi.index} />
      </div>
    </Section>
  );
}
