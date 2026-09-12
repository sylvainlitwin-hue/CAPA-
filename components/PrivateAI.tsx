import Image from 'next/image';
import { LocalUnitSchematic } from '@/components/figures/LocalUnitSchematic';
import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionHeader } from '@/components/ui/Section';
import { privateAi } from '@/content/site';

export function PrivateAI() {
  const { figure } = privateAi;

  return (
    <Section id="private-ai" className="bg-paper-deep">
      <div className="shell">
        <SectionHeader index={privateAi.index} label={privateAi.sectionLabel} note="INFRASTRUCTURE" />

        <div className="grid12 pt-10 md:pt-16">
          <div className="col-span-4 md:col-span-10">
            <h3 className="display display-lg">
              <Reveal className="block">{privateAi.title[0]} </Reveal>
              <Reveal delay={120} className="block text-blue">
                {privateAi.title[1]}
              </Reveal>
            </h3>
          </div>
          <div className="col-span-4 mt-6 md:col-span-6 md:mt-10">
            <Reveal delay={200}>
              <p className="body-text max-w-measure">{privateAi.subtitle}</p>
            </Reveal>
          </div>
        </div>

        <div className="grid12 pb-16 pt-12 md:pb-24 md:pt-20">
          {/* ── Planche technique ──────────────────────────────────────── */}
          <div className="col-span-4 md:col-span-5">
            <Reveal>
              <figure className="border border-[var(--rule-strong)] bg-paper">
                <div className="px-4 pb-2 pt-4 md:px-6 md:pt-6">
                  {figure.src ? (
                    <Image
                      src={figure.src}
                      alt={figure.alt}
                      width={1200}
                      height={1500}
                      sizes="(min-width: 768px) 40vw, 90vw"
                      className="w-full grayscale"
                      loading="lazy"
                    />
                  ) : (
                    <LocalUnitSchematic />
                  )}
                </div>

                {/* Cartouche, comme sur un plan. */}
                <figcaption className="grid grid-cols-3 border-t border-[var(--rule-strong)]">
                  <div className="col-span-3 border-b border-rule px-4 py-3 md:px-6">
                    <span className="label text-ink">{figure.caption}</span>
                  </div>
                  <div className="border-r border-rule px-4 py-2.5 md:px-6">
                    <span className="label block text-ink-mute">Réf.</span>
                    <span className="label mt-1 block text-ink">06.1</span>
                  </div>
                  <div className="border-r border-rule px-4 py-2.5">
                    <span className="label block text-ink-mute">Nature</span>
                    <span className="label mt-1 block text-ink">{figure.ref}</span>
                  </div>
                  <div className="px-4 py-2.5">
                    <span className="label block text-ink-mute">État</span>
                    <span className="label mt-1 block text-blue">{figure.state}</span>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          </div>

          {/* ── Propriété ──────────────────────────────────────────────── */}
          <div className="col-span-4 mt-12 md:col-span-6 md:col-start-7 md:mt-0">
            <h4 className="display display-lg">
              <Reveal>{privateAi.statement}</Reveal>
            </h4>

            <ul className="mt-8 border-b border-[var(--rule-strong)] md:mt-12">
              {privateAi.owned.map((item, i) => (
                <li key={item} className="border-t border-[var(--rule-strong)]">
                  <Reveal delay={i * 60} className="flex items-baseline gap-4 py-3.5">
                    <span className="label w-6 text-blue">{String(i + 1).padStart(2, '0')}</span>
                    <span className="display-sm font-medium uppercase">{item}</span>
                  </Reveal>
                </li>
              ))}
            </ul>

            <Reveal delay={160} className="mt-8 md:mt-10">
              <p className="display display-sm max-w-measure font-medium">
                {privateAi.closing[0]}
                <br />
                <span className="text-blue">{privateAi.closing[1]}</span>
              </p>
            </Reveal>

            {/* ── Principes techniques, en repli ──────────────────────── */}
            <details id="principes-techniques" className="group mt-8 border-t border-ink pt-4">
              <summary className="label flex cursor-pointer items-center justify-between text-ink transition-colors hover:text-blue">
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
      </div>
    </Section>
  );
}
