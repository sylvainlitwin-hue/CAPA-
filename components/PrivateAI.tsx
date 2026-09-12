import Image from 'next/image';
import { LocalUnitSchematic } from '@/components/figures/LocalUnitSchematic';
import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionFoot, SectionHeader } from '@/components/ui/Section';
import { privateAi } from '@/content/site';

/**
 * § 12 — Private AI.
 *
 * L'infrastructure n'arrive qu'ici, et seulement comme conséquence du
 * raisonnement précédent. Deux règles de composition :
 *   — la machine n'est jamais le héros : elle est petite, en bas de page,
 *     traitée comme une planche technique annexe ;
 *   — on ne promet ni « 100 % local » ni la disparition du cloud : c'est
 *     la pièce centrale d'une architecture hybride.
 */
export function PrivateAI() {
  const { figure, transition } = privateAi;

  return (
    <Section id="private-ai" className="bg-paper-deep">
      <div className="shell">
        <SectionHeader index={privateAi.index} label={privateAi.sectionLabel} note={privateAi.note} />

        {/* ── La transition : un constat, pas une offre ──────────────────── */}
        <div className="grid12 pt-10 md:pt-16">
          <div className="col-span-4 md:col-span-2">
            <span className="label text-ink-mute">{transition.label}</span>
          </div>
          <div className="col-span-4 mt-6 md:col-span-8 md:col-start-4 md:mt-0">
            {transition.lines.map((line, i) => (
              <Reveal
                as="p"
                key={line}
                delay={i * 110}
                className={`display display-md mb-5 last:mb-0 md:mb-7 ${
                  i === transition.lines.length - 1 ? 'text-blue' : ''
                }`}
              >
                {line}
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── Le nom, en page de titre ──────────────────────────────────── */}
        <div className="mt-16 border-t-2 border-ink pt-8 md:mt-28 md:pt-12">
          <div className="grid12">
            <div className="col-span-4 md:col-span-7">
              <h3 className="display display-xl uppercase">
                <Reveal>{privateAi.title[0]}</Reveal>
              </h3>
            </div>
            <div className="col-span-4 mt-6 md:col-span-5 md:mt-3">
              <Reveal delay={140}>
                <p className="body-text max-w-measure">{privateAi.subtitle}</p>
              </Reveal>
              <Reveal delay={200} className="mt-5 border-t border-rule pt-4">
                <p className="label leading-relaxed text-ink-soft">{privateAi.hybridNote}</p>
              </Reveal>
            </div>
          </div>
        </div>

        {/* ── Ce qui appartient à l'entreprise : le sujet réel ──────────── */}
        <div className="grid12 pt-16 md:pt-24">
          <div className="col-span-4 md:col-span-8">
            <h4 className="display display-lg">
              <Reveal>{privateAi.statement}</Reveal>
            </h4>

            <ul className="mt-8 border-b-2 border-ink md:mt-12">
              {privateAi.owned.map((item, i) => (
                <li key={item} className="border-t border-[var(--rule-strong)]">
                  <Reveal delay={i * 60} className="flex items-baseline gap-4 py-4">
                    <span className="label w-6 text-blue">{String(i + 1).padStart(2, '0')}</span>
                    <span className="display display-poster uppercase">{item}</span>
                  </Reveal>
                </li>
              ))}
            </ul>

            <Reveal delay={160} className="mt-8 md:mt-10">
              <p className="display display-md max-w-measure">
                {privateAi.closing[0]}
                <br />
                <span className="text-blue">{privateAi.closing[1]}</span>
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

                {/* Cartouche, comme sur un plan. */}
                <figcaption className="border-t border-[var(--rule-strong)]">
                  <div className="border-b border-rule px-3 py-3">
                    <span className="label text-ink">
                      FIG. {privateAi.index} — {figure.caption}
                    </span>
                  </div>
                  <div>
                    {[
                      { k: 'Réf.', v: `${privateAi.index}.1`, accent: false },
                      { k: 'Nature', v: figure.ref, accent: false },
                      { k: 'État', v: figure.state, accent: true },
                    ].map((field) => (
                      <div
                        key={field.k}
                        className="flex items-baseline justify-between gap-3 border-t border-rule px-3 py-2 first:border-t-0"
                      >
                        <span className="label text-ink-mute">{field.k}</span>
                        <span className={`label ${field.accent ? 'text-blue' : 'text-ink'}`}>
                          {field.v}
                        </span>
                      </div>
                    ))}
                  </div>
                </figcaption>
              </figure>
            </Reveal>

            <p className="label mt-4 leading-relaxed text-ink-mute">{figure.aside}</p>

            {/* ── Principes techniques, en repli ──────────────────────── */}
            <details id="principes-techniques" className="group mt-8 border-t border-ink pt-4">
              <summary className="label flex cursor-pointer items-center justify-between gap-3 text-ink transition-colors hover:text-blue">
                {privateAi.link.label}
                <span aria-hidden="true" className="group-open:hidden">
                  →
                </span>
                <span aria-hidden="true" className="hidden group-open:inline">
                  ×
                </span>
              </summary>
              <ol className="mt-5">
                {privateAi.principles.map((principle, i) => (
                  <li key={principle} className="flex gap-4 border-t border-rule py-3">
                    <span className="label pt-1 text-ink-mute">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="body-text text-[0.9375rem]">{principle}</p>
                  </li>
                ))}
              </ol>
            </details>
          </div>
        </div>

        <div className="h-16 md:h-24" />
        <SectionFoot index={privateAi.index} />
      </div>
    </Section>
  );
}
