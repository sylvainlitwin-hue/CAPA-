import { Reveal } from '@/components/ui/Reveal';
import { Sheet, SheetRef } from '@/components/ui/Sheet';
import { recognition } from '@/content/site';

/**
 * § 02 — Peut-être que vous payez déjà pour ça.
 *
 * Cinq affirmations, pas cinq cartes : des lignes de compte, séparées par des
 * filets, numérotées en bleu. Le lecteur doit s'y reconnaître avant qu'on lui
 * parle de quoi que ce soit d'autre.
 */
export function Recognition() {
  return (
    <Sheet id="reconnaissance">
      <div className="shell">
        <SheetRef index={recognition.ref} label={recognition.label} note={recognition.note} />

        <div className="grid12 pt-12 md:pt-20">
          <div className="col-span-4 md:col-span-9">
            <h3 className="display display-lg">
              <Reveal>{recognition.title}</Reveal>
            </h3>
          </div>
        </div>

        <ol className="mt-10 border-b-2 border-ink md:mt-16">
          {recognition.statements.map((statement, i) => (
            <li key={statement} className="border-t border-[var(--rule-strong)]">
              <Reveal as="div" delay={i * 70} className="grid12 py-5 md:py-7">
                <span className="label col-span-1 text-blue md:col-span-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="display display-sm col-span-3 font-normal md:col-span-10">
                  {statement}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>

        {/* ── La conclusion, décalée à droite comme une note de bas de page. */}
        <div className="grid12 pt-10 md:pt-16">
          <div className="col-span-4 md:col-span-6 md:col-start-6">
            <Reveal>
              <p className="display display-md text-ink-soft">{recognition.closing[0]}</p>
            </Reveal>
            <Reveal delay={180}>
              <p className="display display-md mt-3 text-blue md:mt-4">{recognition.closing[1]}</p>
            </Reveal>
          </div>
        </div>

        <div className="h-16 md:h-28" />
      </div>
    </Sheet>
  );
}
