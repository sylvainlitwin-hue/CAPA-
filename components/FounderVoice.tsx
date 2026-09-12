import { Portrait } from '@/components/figures/Portrait';
import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionFoot, SectionHeader } from '@/components/ui/Section';
import { founderVoice } from '@/content/site';

/** Signature typographique — pas de fac-similé inventé. */
function Signature({ small = false }: { small?: boolean }) {
  return (
    <div className="mt-8 border-t-2 border-ink pt-4 md:mt-10">
      <p className={`display ${small ? 'display-sm' : 'display-md'} leading-none`}>
        {founderVoice.name}
      </p>
      <p className="label mt-3 text-ink-mute">{founderVoice.role}</p>
    </div>
  );
}

/* ── 02 — Le fondateur parle avant la technologie ─────────────────────────── */

export function FounderIntro() {
  const { intro, portrait } = founderVoice;

  return (
    <Section id="point-de-vue">
      <div className="shell">
        <SectionHeader index={intro.index} label={intro.sectionLabel} note={intro.note} />

        <div className="grid12 pt-10 md:pt-16">
          {/* Le portrait occupe un tiers de la largeur : l'humain domine. */}
          <div className="col-span-4 md:col-span-4">
            <Reveal>
              <figure>
                <Portrait />
                <figcaption className="mt-3 flex items-baseline justify-between gap-4 border-t border-ink pt-2">
                  <span className="label text-ink">{portrait.caption}</span>
                  <span className="label text-ink-mute">FIG. {intro.index}</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>

          {/* Asymétrie : la parole démarre à la colonne 6. */}
          <div className="col-span-4 mt-10 md:col-span-7 md:col-start-6 md:mt-0">
            <blockquote>
              {intro.lines.map((line, i) => (
                <Reveal
                  as="p"
                  key={line}
                  delay={i * 120}
                  className="display display-md mb-6 last:mb-0 md:mb-8"
                >
                  {line}
                </Reveal>
              ))}

              <Reveal delay={280} className="mt-8 border-t border-rule pt-6 md:mt-10">
                <p className="display display-md">
                  {intro.emphasis[0]}
                  <br />
                  <span className="text-blue">{intro.emphasis[1]}</span>
                </p>
              </Reveal>
            </blockquote>

            <Signature />
          </div>
        </div>

        <div className="h-14 md:h-20" />
        <SectionFoot index={intro.index} />
      </div>
    </Section>
  );
}

/* ── Intertitre humain, juste avant l'infrastructure ─────────────────────── */

export function FounderInterlude() {
  const { mid } = founderVoice;

  return (
    <section className="border-y-2 border-ink">
      <div className="shell">
        <div className="grid12 py-12 md:py-20">
          <div className="col-span-4 md:col-span-2">
            <span className="label text-blue">{mid.label}</span>
          </div>
          <div className="col-span-4 mt-6 md:col-span-9 md:col-start-4 md:mt-0">
            {mid.lines.map((line, i) => (
              <Reveal as="p" key={line} delay={i * 110} className="display display-md">
                {line}
              </Reveal>
            ))}
            <Reveal delay={240} className="mt-8 md:mt-10">
              <p className="display display-md">
                {mid.closing[0]}
                <br />
                <span className="text-blue">{mid.closing[1]}</span>
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Conclusion : la dernière parole est humaine ─────────────────────────── */

export function FounderClose() {
  const { close } = founderVoice;

  return (
    <section id="conclusion" className="border-t border-[var(--rule-strong)]">
      <div className="shell">
        <div className="grid12 py-14 md:py-24">
          <div className="col-span-2 md:col-span-2">
            <Reveal>
              <Portrait small />
            </Reveal>
            <span className="label mt-3 block text-ink-mute">{close.label}</span>
          </div>

          <div className="col-span-4 mt-8 md:col-span-8 md:col-start-5 md:mt-0">
            <blockquote>
              {close.lines.map((line, i) => (
                <Reveal
                  as="p"
                  key={line}
                  delay={i * 120}
                  className="display display-md mb-6 last:mb-0 md:mb-8"
                >
                  {line}
                </Reveal>
              ))}
            </blockquote>

            <Signature small />

            <Reveal delay={200} className="mt-10">
              <a href={close.cta.href} className="btn btn-primary">
                {close.cta.label}
                <span aria-hidden="true">→</span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
