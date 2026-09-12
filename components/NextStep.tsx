import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionFoot, SectionHeader } from '@/components/ui/Section';
import { nextStep } from '@/content/site';

/**
 * § 16 — Et ensuite ?
 *
 * Remplace l'ancienne section d'offre. Aucun prix, aucune formule, aucun
 * nombre de places : la recommandation est présentée comme la suite logique
 * du diagnostic, et les trois issues possibles sont annoncées à l'avance —
 * y compris « ce n'est pas nécessaire chez vous ».
 */
export function NextStep() {
  return (
    <Section id="et-ensuite">
      <div className="shell">
        <SectionHeader index={nextStep.index} label={nextStep.sectionLabel} note={nextStep.note} />

        <div className="grid12 pt-10 md:pt-16">
          <div className="col-span-4 md:col-span-9">
            <h3 className="display display-lg">
              <Reveal>{nextStep.title}</Reveal>
            </h3>
          </div>
        </div>

        <div className="grid12 pt-12 md:pt-20">
          {/* Pourquoi rien n'est standard. */}
          <div className="col-span-4 md:col-span-5">
            <Reveal>
              <p className="display display-md">{nextStep.intro}</p>
            </Reveal>
            <div className="mt-6 md:mt-8">
              {nextStep.comparison.map((line, i) => (
                <Reveal as="p" key={line} delay={i * 80} className="display display-sm text-ink-soft">
                  {line}
                </Reveal>
              ))}
            </div>
          </div>

          {/* Ce que le diagnostic doit trancher avant toute proposition. */}
          <div className="col-span-4 mt-12 md:col-span-6 md:col-start-7 md:mt-0">
            <span className="label leading-relaxed text-ink-mute">{nextStep.conditionLabel}</span>
            <ul className="mt-5 border-b-2 border-ink">
              {nextStep.conditions.map((condition, i) => (
                <li key={condition} className="border-t border-[var(--rule-strong)]">
                  <Reveal delay={i * 70} className="flex items-baseline gap-4 py-3.5">
                    <span className="label w-6 shrink-0 text-blue">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="display display-sm">{condition}</span>
                  </Reveal>
                </li>
              ))}
            </ul>

            <Reveal delay={200} className="mt-8 md:mt-10">
              <p className="display display-md text-blue">{nextStep.closing}</p>
            </Reveal>
          </div>
        </div>

        {/* ── Les trois issues, annoncées à l'avance ─────────────────────── */}
        <div className="mt-16 md:mt-28">
          <div className="flex items-baseline justify-between gap-4 border-b-2 border-ink pb-3">
            <span className="label text-ink">{nextStep.outcomesLabel}</span>
            <span className="label hidden text-ink-mute md:block">A · B · C</span>
          </div>

          <dl>
            {nextStep.outcomes.map((outcome, i) => (
              <Reveal
                as="div"
                key={outcome.key}
                delay={i * 110}
                className="grid grid-cols-[auto_1fr] items-baseline gap-x-5 border-b border-[var(--rule-strong)] py-6 md:grid-cols-12 md:gap-x-6 md:py-8"
              >
                <span className="figure-lg text-blue md:col-span-1">{outcome.key}</span>
                <dt className="md:col-span-5">
                  <span className="label block text-ink-mute">{outcome.level}</span>
                  <span className="display display-sm mt-2 block">{outcome.statement}</span>
                </dt>
                <dd className="col-start-2 mt-4 md:col-span-5 md:col-start-8 md:mt-0">
                  <span className="label block text-ink-mute">Recommandation</span>
                  <p className="body-text mt-2 max-w-measure-sm">{outcome.recommendation}</p>
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>

        <Reveal delay={160} className="pt-10 md:pt-14">
          <a href={nextStep.cta.href} className="btn btn-primary">
            {nextStep.cta.label}
            <span aria-hidden="true">→</span>
          </a>
        </Reveal>

        <div className="h-14 md:h-20" />
        <SectionFoot index={nextStep.index} />
      </div>
    </Section>
  );
}
