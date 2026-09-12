import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionFoot, SectionHeader } from '@/components/ui/Section';
import { method } from '@/content/site';

/**
 * § 06 — Ma méthode.
 *
 * Trois étapes, présentées comme un diagramme de processus : les repères de
 * la ligne restent hors du masque d'apparition (un clip-path couperait ce
 * qui dépasse). La dernière réponse possible est « rien de plus ».
 */
export function Method() {
  return (
    <Section id="methode">
      <div className="shell">
        <SectionHeader index={method.index} label={method.sectionLabel} note={method.note} />

        <div className="grid12 pt-10 md:pt-16">
          <div className="col-span-4 md:col-span-9">
            <h3 className="display display-xl">
              <Reveal>{method.title}</Reveal>
            </h3>
          </div>
        </div>

        <ol className="mt-14 grid grid-cols-1 gap-y-10 md:mt-24 md:grid-cols-3 md:gap-x-6 md:gap-y-0">
          {method.steps.map((step, i) => (
            <li key={step.n} className="relative border-t-2 border-ink pt-5">
              <span aria-hidden="true" className="absolute -top-[7px] left-0 h-3 w-3 bg-ink" />
              {i < method.steps.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="label absolute -top-[0.6rem] right-0 hidden translate-x-1/2 bg-paper px-1 leading-none text-blue md:block"
                >
                  →
                </span>
              ) : null}

              <Reveal delay={i * 110}>
                <span className="figure-lg block text-blue">{step.n}</span>
                <h4 className="display display-md mt-4 uppercase">{step.title}</h4>
                <p className="body-text mt-4 max-w-measure-sm">{step.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        {/* ── Aucun dogme : parfois, rien de plus ───────────────────────── */}
        <div className="grid12 pb-14 pt-16 md:pb-20 md:pt-28">
          <div className="col-span-4 md:col-span-8 md:col-start-3">
            {method.answers.map((answer, i) => {
              const last = i === method.answers.length - 1;
              return (
                <Reveal
                  as="p"
                  key={answer}
                  delay={i * 100}
                  className={`display display-md ${last ? 'mt-4 text-blue' : ''}`}
                >
                  {answer}
                </Reveal>
              );
            })}
          </div>
        </div>

        <SectionFoot index={method.index} />
      </div>
    </Section>
  );
}
