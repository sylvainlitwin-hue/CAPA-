import { Portrait } from '@/components/figures/Portrait';
import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionFoot, SectionHeader } from '@/components/ui/Section';
import { me } from '@/content/site';

/**
 * § 02 — Moi.
 *
 * Placé juste sous l'accroche : le lecteur sait immédiatement qui lui parle.
 * Signature typographique — pas de fac-similé inventé.
 */
export function Me() {
  return (
    <Section id="moi">
      <div className="shell">
        <SectionHeader index={me.index} label={me.sectionLabel} note={me.note} />

        <div className="grid12 pt-10 md:pt-16">
          <div className="col-span-4 md:col-span-3">
            <Reveal>
              <figure>
                <Portrait />
                <figcaption className="mt-3 flex items-baseline justify-between gap-4 border-t border-ink pt-2">
                  <span className="label text-ink">{me.portrait.caption}</span>
                  <span className="label text-ink-mute">FIG. {me.index}</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>

          {/* Asymétrie : la parole démarre à la colonne 5. */}
          <div className="col-span-4 mt-10 md:col-span-7 md:col-start-5 md:mt-0">
            <blockquote>
              {me.lines.map((line, i) => (
                <Reveal
                  as="p"
                  key={line}
                  delay={i * 120}
                  className="display display-md mb-5 last:mb-0 md:mb-7"
                >
                  {line}
                </Reveal>
              ))}

              <Reveal delay={260} className="mt-8 border-t border-rule pt-6 md:mt-10">
                <p className="display display-md">
                  {me.emphasis[0]}
                  <br />
                  <span className="text-blue">{me.emphasis[1]}</span>
                </p>
              </Reveal>
            </blockquote>

            <div className="mt-8 border-t-2 border-ink pt-4 md:mt-10">
              <p className="display display-md leading-none">{me.name}</p>
              <p className="label mt-3 text-ink-mute">{me.role}</p>
            </div>
          </div>
        </div>

        <div className="h-14 md:h-20" />
        <SectionFoot index={me.index} />
      </div>
    </Section>
  );
}
