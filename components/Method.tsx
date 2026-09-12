import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionHeader } from '@/components/ui/Section';
import { method } from '@/content/site';

export function Method() {
  return (
    <Section id="methode">
      <div className="shell">
        <SectionHeader index={method.index} label={method.sectionLabel} note="PROCESSUS / 4 ÉTAPES" />

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

        {/* ── Diagramme de processus ──────────────────────────────────────── */}
        <ol className="mt-14 grid grid-cols-1 gap-y-10 md:mt-24 md:grid-cols-4 md:gap-x-6 md:gap-y-0">
          {/* Les repères de la ligne de processus restent hors du masque
              d'apparition : un clip-path couperait ce qui dépasse. */}
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
                <h4 className="display display-sm mt-4 uppercase">{step.title}</h4>
                <p className="body-text mt-3 max-w-measure-sm">{step.text}</p>
                <div className="mt-6 border-t border-rule pt-2">
                  <span className="label text-ink-mute">{step.tag}</span>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="flex justify-end pb-16 pt-10 md:pb-24 md:pt-14">
          <Reveal delay={200}>
            <p className="label max-w-[40ch] leading-relaxed text-ink-soft md:text-right">
              {method.flowNote}
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
