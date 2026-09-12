import { Reveal } from '@/components/ui/Reveal';
import { brand, cta, hero } from '@/content/site';

/**
 * § 01 — L'accroche.
 *
 * Deux phrases : le constat qu'il accepte déjà, puis la question qu'il ne
 * s'est pas posée. La seconde est en bleu — c'est le crochet.
 */
export function Hero() {
  return (
    <section id="top" className="relative">
      <div className="shell">
        <div className="grid12 items-start pb-10 pt-10 md:pb-16 md:pt-20">
          <div className="col-span-4 md:col-span-8">
            <Reveal className="flex items-baseline gap-3">
              <span className="label text-blue">{hero.index}</span>
              <p className="label text-ink-mute">{hero.kicker}</p>
            </Reveal>

            <h1 className="mt-6 md:mt-10">
              <Reveal as="span" className="display display-lg block">
                {hero.titleA}{' '}
              </Reveal>
              <Reveal as="span" delay={140} className="display display-lg mt-6 block text-blue">
                {hero.titleB}
              </Reveal>
            </h1>

            <Reveal delay={300} className="mt-8 md:mt-12">
              <p className="body-text max-w-measure">{hero.subtitle}</p>
            </Reveal>

            <Reveal delay={380} className="mt-8 md:mt-10">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
                <a href={cta.href} className="btn btn-primary">
                  {cta.label}
                  <span aria-hidden="true">→</span>
                </a>
                <a href={hero.secondaryCta.href} className="btn btn-ghost">
                  {hero.secondaryCta.label}
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
              <p className="label mt-4 text-ink-mute">{cta.microcopy}</p>
            </Reveal>
          </div>

          {/* ── Ce que je regarde : un tableau, pas une promesse ─────────── */}
          <div className="col-span-4 mt-12 md:col-span-3 md:col-start-10 md:mt-2">
            <Reveal delay={200}>
              <div className="border-t-2 border-ink">
                <div className="flex items-baseline justify-between gap-3 bg-ink px-2 py-2.5 text-paper">
                  <span className="label">{hero.panel.title}</span>
                  <span className="label text-paper/55">{hero.panel.ref}</span>
                </div>

                <dl>
                  {hero.panel.rows.map((row) => (
                    <div
                      key={row.n}
                      className="flex items-baseline justify-between gap-4 border-b border-rule px-2 py-3"
                    >
                      <dt className="flex items-baseline gap-3">
                        <span className="label text-blue">{row.n}</span>
                        <span className="text-[0.9375rem] font-medium leading-none">
                          {row.label}
                        </span>
                      </dt>
                      <dd className="label text-ink-mute">{row.unit}</dd>
                    </div>
                  ))}
                </dl>

                <div className="px-2 py-2.5">
                  <span className="label text-ink">
                    {hero.panel.footer} <span className="caret" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* ── Bandeau de signature ─────────────────────────────────────────── */}
      <div className="border-y border-[var(--rule-strong)]">
        <div className="shell">
          <div className="flex items-baseline justify-between gap-6 py-3">
            <p className="label text-ink">{brand.signatureMono}</p>
            <p className="label hidden shrink-0 text-ink-mute md:block">
              ÉDITION {brand.edition}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
