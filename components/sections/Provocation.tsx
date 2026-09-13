import { Reveal } from '@/components/ui/Reveal';
import { Sheet, SheetRef } from '@/components/ui/Sheet';
import { provocation } from '@/content/site';

/**
 * § 04 — La position.
 *
 * La rupture de la page : fond graphite, une affirmation que personne ne fait
 * dans ce métier, puis sa résolution. Trois temps de travail, et une dernière
 * phrase qui engage — celle qui dit qu'il arrive de ne rien vendre.
 *
 * Le bleu n'est employé ici qu'en grand corps : en petit, sur graphite, il ne
 * passerait pas le contraste. L'emphase y est donc portée par la taille.
 */
export function Provocation() {
  return (
    <Sheet id="la-position" invert>
      <div className="shell">
        <SheetRef index={provocation.ref} label={provocation.label} note={provocation.note} invert />

        <div className="grid12 pt-12 md:pt-20">
          <div className="col-span-4 md:col-span-10">
            <h3 className="display display-xl">
              <Reveal>{provocation.title}</Reveal>
            </h3>
          </div>

          <div className="col-span-4 mt-6 md:col-span-9 md:col-start-4 md:mt-10">
            <Reveal delay={220}>
              <p className="display display-lg text-blue">{provocation.answer}</p>
            </Reveal>
          </div>
        </div>

        {/* ── L'ennemi, nommé une fois ─────────────────────────────────── */}
        <div className="grid12 pt-14 md:pt-24">
          <div className="col-span-4 md:col-span-6 md:col-start-7">
            <p className="label text-signal">{provocation.enemy.label}</p>
            <Reveal delay={120}>
              <p className="display display-sm mt-3 font-normal text-paper/75">
                {provocation.enemy.line}
              </p>
            </Reveal>
          </div>
        </div>

        {/* ── Trois temps ──────────────────────────────────────────────── */}
        <div className="grid12 gap-y-8 pt-14 md:pt-24">
          {provocation.steps.map((step, i) => (
            <div key={step.n} className="col-span-4 md:col-span-4">
              <Reveal mode="rule-x" delay={i * 120} className="h-0.5 w-full bg-paper">
                <span className="sr-only" />
              </Reveal>
              <div className="pt-4">
                <span className="label text-paper/55">{step.n}</span>
                <h4 className="display display-md mt-3 uppercase">{step.title}</h4>
                <p className="body-text mt-3 max-w-[24rem] text-paper/70">{step.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Ce que ça donne, et la phrase qui engage ─────────────────── */}
        <div className="grid12 pt-16 md:pt-28">
          <div className="col-span-4 md:col-span-5">
            {provocation.options.map((option, i) => (
              <Reveal key={option} delay={i * 90}>
                <p className="display display-sm font-normal text-paper/55">{option}</p>
              </Reveal>
            ))}
          </div>

          <div className="col-span-4 mt-8 md:col-span-6 md:col-start-7 md:mt-0">
            <Reveal mode="rule-x" className="h-0.5 w-full bg-blue">
              <span className="sr-only" />
            </Reveal>
            <Reveal delay={200}>
              <p className="display display-lg mt-5 md:mt-7">{provocation.verdict}</p>
            </Reveal>
          </div>
        </div>

        <div className="h-16 md:h-28" />
      </div>
    </Sheet>
  );
}
