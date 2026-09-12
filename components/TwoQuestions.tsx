import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionFoot, SectionHeader } from '@/components/ui/Section';
import { twoQuestions } from '@/content/site';

/**
 * § 10 — Le filtre CAPA : l'économie et le contrôle, jamais l'un sans
 * l'autre. Deux lignes, deux chiffres énormes, une règle.
 */
export function TwoQuestions() {
  return (
    <Section id="deux-questions">
      <div className="shell">
        <SectionHeader
          index={twoQuestions.index}
          label={twoQuestions.sectionLabel}
          note={twoQuestions.note}
        />

        <div className="grid12 pt-10 md:pt-16">
          <div className="col-span-4 md:col-span-9">
            <h3 className="display display-lg">
              <Reveal>{twoQuestions.title}</Reveal>
            </h3>
          </div>
        </div>

        <ol className="mt-12 border-b-2 border-ink md:mt-20">
          {twoQuestions.questions.map((question, i) => (
            <li key={question.n} className="border-t-2 border-ink">
              <Reveal
                as="div"
                delay={i * 120}
                className="grid grid-cols-[auto_1fr] items-baseline gap-x-5 py-8 md:grid-cols-12 md:gap-x-6 md:py-12"
              >
                <span className="figure-xl text-blue md:col-span-2">{question.n}</span>
                <p className="display display-md uppercase md:col-span-8">{question.text}</p>
                <span className="label col-start-2 mt-3 text-ink-mute md:col-span-2 md:mt-0 md:text-right">
                  {question.tag}
                </span>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="grid12 pt-10 md:pt-14">
          <div className="col-span-4 md:col-span-8 md:col-start-3">
            <p className="display display-md">
              <Reveal className="block">{twoQuestions.rule[0]} </Reveal>
              <Reveal delay={140} className="block text-blue">
                {twoQuestions.rule[1]}
              </Reveal>
            </p>
          </div>
        </div>

        <div className="h-16 md:h-24" />
        <SectionFoot index={twoQuestions.index} />
      </div>
    </Section>
  );
}
