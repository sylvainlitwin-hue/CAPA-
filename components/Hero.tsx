import { Portrait } from '@/components/figures/Portrait';
import { Reveal } from '@/components/ui/Reveal';
import { brand, cta, founder, hero } from '@/content/site';

/**
 * § 01 — L'accroche.
 *
 * Une seule question, le bénéfice en une phrase, l'appel à l'action, et un
 * visage. Rien d'autre : ni fiche technique, ni machine, ni visuel abstrait.
 */
export function Hero() {
  return (
    <section id="top" className="relative">
      <div className="shell">
        <div className="grid12 items-start pb-12 pt-10 md:pb-20 md:pt-20">
          <div className="col-span-4 md:col-span-7">
            <Reveal className="flex items-baseline gap-3">
              <span className="label text-blue">{hero.index}</span>
              <p className="label text-ink-mute">{hero.kicker}</p>
            </Reveal>

            <h1 className="display display-lg mt-6 md:mt-10">
              <Reveal>{hero.title}</Reveal>
            </h1>

            <Reveal delay={200} className="mt-8 md:mt-10">
              <p className="display display-sm max-w-measure font-normal text-ink-soft">
                {hero.subtitle}
              </p>
            </Reveal>

            <Reveal delay={300} className="mt-10 md:mt-12">
              <a href={cta.href} className="btn btn-primary">
                {cta.label}
                <span aria-hidden="true">→</span>
              </a>
              <p className="label mt-4 text-ink-mute">{cta.microcopy}</p>
            </Reveal>
          </div>

          {/* ── Le visage, dès le premier écran ──────────────────────────── */}
          <div className="col-span-4 mt-12 md:col-span-4 md:col-start-9 md:mt-2">
            <Reveal delay={140}>
              <figure>
                <Portrait />
                <figcaption className="mt-3 flex items-baseline justify-between gap-4 border-t border-ink pt-2">
                  <span className="label text-ink">{founder.portrait.caption}</span>
                  <span className="label text-ink-mute">{founder.role}</span>
                </figcaption>
              </figure>
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
