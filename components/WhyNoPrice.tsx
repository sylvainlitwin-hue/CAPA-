import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionFoot, SectionHeader } from '@/components/ui/Section';
import { whyNoPrice } from '@/content/site';

/**
 * § 17 — Pourquoi CAPA.
 *
 * La section qui assume l'absence de prix affiché, et qui retourne la
 * question. Composée comme une affiche : deux questions, l'une barrée au
 * rouge signal, l'autre en bleu technique.
 */
export function WhyNoPrice() {
  const { flip } = whyNoPrice;

  return (
    <Section id="pourquoi-capa">
      <div className="shell">
        <SectionHeader
          index={whyNoPrice.index}
          label={whyNoPrice.sectionLabel}
          note={whyNoPrice.note}
        />

        <div className="grid12 pt-10 md:pt-16">
          <div className="col-span-4 md:col-span-9">
            <h3 className="display display-lg">
              <Reveal>{whyNoPrice.title}</Reveal>
            </h3>
          </div>
        </div>

        <div className="grid12 pt-12 md:pt-20">
          <div className="col-span-4 md:col-span-6">
            <Reveal>
              <p className="display display-md">{whyNoPrice.reason}</p>
            </Reveal>
            <Reveal delay={200} className="mt-10 border-t-2 border-ink pt-5 md:mt-14">
              <p className="display display-sm">{whyNoPrice.method}</p>
            </Reveal>
          </div>

          {/* L'éventail des réponses possibles — « rien de plus » inclus. */}
          <div className="col-span-4 mt-12 md:col-span-5 md:col-start-8 md:mt-2">
            <span className="label text-ink-mute">{whyNoPrice.needsLabel}</span>
            <ul className="mt-4 border-b border-[var(--rule-strong)]">
              {whyNoPrice.needs.map((need, i) => (
                <li key={need} className="border-t border-rule first:border-[var(--rule-strong)]">
                  <Reveal delay={i * 60} className="flex items-baseline gap-4 py-3">
                    <span className="label w-6 shrink-0 text-ink-mute">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`text-[1.0625rem] leading-snug ${
                        i === whyNoPrice.needs.length - 1 ? 'text-blue' : ''
                      }`}
                    >
                      {need}
                    </span>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── L'affiche : le renversement de la question ─────────────────── */}
        <div className="mt-16 border-t-2 border-ink pt-10 md:mt-28 md:pt-16">
          <div className="grid12">
            <div className="col-span-4 md:col-span-11">
              <span className="label text-ink-mute">{flip.badLabel}</span>
              <p className="display display-xl mt-4 text-ink-mute">
                <Reveal>
                  <span
                    style={{
                      textDecoration: 'line-through',
                      textDecorationColor: 'var(--signal)',
                      textDecorationThickness: '4px',
                    }}
                  >
                    {flip.bad}
                  </span>
                </Reveal>
              </p>
            </div>
          </div>

          <div className="grid12 mt-12 md:mt-20">
            <div className="col-span-4 md:col-span-11">
              <span className="label text-blue">{flip.goodLabel}</span>
              <p className="display display-xl mt-4 text-blue">
                <Reveal>{flip.good}</Reveal>
              </p>
            </div>
          </div>
        </div>

        <div className="h-16 md:h-24" />
        <SectionFoot index={whyNoPrice.index} />
      </div>
    </Section>
  );
}
