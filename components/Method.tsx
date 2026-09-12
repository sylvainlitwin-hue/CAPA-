import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionFoot, SectionHeader } from '@/components/ui/Section';
import { method } from '@/content/site';

/**
 * § 04 — Ma méthode.
 *
 * Trois étapes en diagramme de processus (les repères de la ligne restent
 * hors du masque d'apparition : un clip-path couperait ce qui dépasse), puis
 * les réponses possibles — dont la dernière, la plus importante, en corps
 * maximal : parfois l'investissement ne vaut pas le coup.
 */
export function Method() {
  return (
    <Section id="methode">
      <div className="shell">
        <SectionHeader index={method.index} label={method.sectionLabel} note={method.note} />

        <div className="grid12 pt-10 md:pt-16">
          <div className="col-span-4 md:col-span-9">
            <h3 className="display display-lg">
              <Reveal className="block">{method.title[0]} </Reveal>
              <Reveal delay={120} className="block text-blue">
                {method.title[1]}
              </Reveal>
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

        {/* ── Les réponses possibles ────────────────────────────────────── */}
        <div className="grid12 pt-16 md:pt-28">
          <div className="col-span-4 md:col-span-5">
            {method.answers.map((answer, i) => (
              <Reveal as="p" key={answer} delay={i * 90} className="display display-sm text-ink-soft">
                {answer}
              </Reveal>
            ))}
          </div>

          {/* Le verdict : c'est la phrase qui crée la confiance. */}
          <div className="col-span-4 mt-10 md:col-span-6 md:col-start-7 md:mt-0">
            <Reveal delay={200} className="border-t-2 border-blue pt-6">
              <p className="display display-lg text-blue">{method.verdict}</p>
            </Reveal>
          </div>
        </div>

        <div className="h-14 md:h-20" />
        <SectionFoot index={method.index} />
      </div>
    </Section>
  );
}
