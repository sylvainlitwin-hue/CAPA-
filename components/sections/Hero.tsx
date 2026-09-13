import { Portrait } from '@/components/figures/Portrait';
import { Reveal } from '@/components/ui/Reveal';
import { Sheet, SheetRef } from '@/components/ui/Sheet';
import { cta, founder, hero, positioning } from '@/content/site';

/**
 * § 01 — L'ouverture.
 *
 * Une question, deux phrases, un bouton. À droite, un homme et ce qu'il dit
 * de lui : la page est humaine avant d'être technologique, et rien dans cette
 * composition ne représente une machine.
 *
 * Elle se ferme sur la bande de position — la phrase clivante.
 */
export function Hero() {
  return (
    <Sheet id="top">
      <div className="shell">
        <SheetRef index={hero.ref} label={hero.label} note={hero.note} heading={false} />

        <div className="grid12 pt-10 md:pt-20">
          {/* ── La question ─────────────────────────────────────────────── */}
          <div className="col-span-4 md:col-span-9">
            <h1 className="display display-hero">
              {hero.title.map((line, i) => (
                <Reveal key={line} delay={i * 110}>
                  {i < hero.title.length - 1 ? `${line} ` : line}
                </Reveal>
              ))}
            </h1>

            <div className="mt-9 md:mt-14 md:pl-[12%]">
              {hero.subtitle.map((line, i) => (
                <Reveal key={line} delay={340 + i * 90}>
                  <p className="display display-sm max-w-[34rem] font-normal text-ink-soft">
                    {line}
                  </p>
                </Reveal>
              ))}

              <Reveal delay={520}>
                <a
                  href={cta.href}
                  className="mt-8 flex w-full max-w-[32rem] items-center justify-between gap-6 bg-blue px-5 py-5 text-paper transition-colors hover:bg-ink md:mt-10 md:px-7 md:py-6"
                >
                  <span className="label text-[0.8125rem] md:text-[0.9375rem]">{cta.label}</span>
                  <span aria-hidden="true" className="text-xl leading-none">
                    →
                  </span>
                </a>
              </Reveal>
              <p className="label mt-4 text-ink-mute">{hero.microcopy}</p>
            </div>
          </div>

          {/* ── Qui parle ───────────────────────────────────────────────── */}
          <div className="col-span-4 mt-14 md:col-span-3 md:col-start-10 md:mt-0">
            <Reveal delay={220}>
              <Portrait />
            </Reveal>

            <div className="mt-3 flex items-baseline justify-between gap-3 border-t-2 border-ink pt-2">
              <span className="label text-ink">{founder.name}.</span>
              <span className="label text-ink-mute">{founder.role}</span>
            </div>

            <div className="mt-6 md:mt-8">
              {hero.statement.map((line, i) => (
                <Reveal key={line} delay={300 + i * 80}>
                  <p className="body-text max-w-[26rem]">{line}</p>
                </Reveal>
              ))}
              <Reveal delay={560}>
                <p className="display display-sm mt-4 max-w-[26rem] text-blue">
                  {hero.statementStrong}
                </p>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="h-10 md:h-16" />
      </div>

      {/* ── La position ───────────────────────────────────────────────────
          La phrase de la marque, en rupture graphite pleine largeur. */}
      <div className="bg-ink text-paper">
        <div className="shell">
          <div className="grid12 py-12 md:py-20">
            <div className="col-span-4 md:col-span-10 md:col-start-2">
              <Reveal>
                <p className="display display-md font-normal text-paper/60">
                  {positioning.lines[0]}
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="display display-md mt-3 text-paper md:mt-5">
                  {positioning.lines[1]}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </Sheet>
  );
}
