import { Reveal } from '@/components/ui/Reveal';
import { brand, hero } from '@/content/site';

export function Hero() {
  return (
    <section id="top" className="relative">
      <div className="shell">
        <div className="grid12 items-start pb-10 pt-10 md:pb-16 md:pt-20">
          {/* ── Bloc typographique principal ─────────────────────────────── */}
          <div className="col-span-4 md:col-span-8">
            <Reveal className="flex items-baseline gap-3">
              <span className="label text-blue">{hero.index}</span>
              <p className="label text-ink-mute">{hero.kicker}</p>
            </Reveal>

            <h1 className="display display-xl mt-6 md:mt-10">
              {hero.title.map((line, i) => (
                <Reveal key={line.text} delay={i * 110} className="block">
                  {/* L'espace final garde le titre lisible d'un seul tenant
                      pour les lecteurs d'écran. */}
                  <span className={line.accent ? 'text-blue' : undefined}>{line.text} </span>
                </Reveal>
              ))}
            </h1>

            <div className="mt-8 grid12 md:mt-12">
              <Reveal delay={340} className="col-span-4 md:col-span-6">
                <p className="body-text max-w-measure">{hero.subtitle}</p>
              </Reveal>
            </div>

            <Reveal delay={420} className="mt-8 md:mt-10">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
                <a href={hero.primaryCta.href} className="btn btn-primary">
                  {hero.primaryCta.label}
                  <span aria-hidden="true">→</span>
                </a>
                <a href={hero.secondaryCta.href} className="btn btn-ghost">
                  {hero.secondaryCta.label}
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
              <p className="label mt-4 text-ink-mute">{hero.microcopy}</p>
            </Reveal>
          </div>

          {/* ── Fiche technique ──────────────────────────────────────────── */}
          <div className="col-span-4 mt-12 md:col-span-4 md:mt-2">
            <Reveal delay={200}>
              {/* Tableau technique : filets, pas de caisson. */}
              <div className="border-t-2 border-ink">
                <div className="flex items-baseline justify-between bg-ink px-2 py-2.5 text-paper">
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

            {/* Le principe commercial, posé dès le premier écran. */}
            <Reveal delay={300} className="mt-8 border-t-2 border-ink pt-4 md:mt-10">
              <span className="label text-blue">{hero.principle.label}</span>
              <p className="display display-sm mt-3 max-w-measure-sm font-medium">
                {hero.principle.text}
              </p>
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
