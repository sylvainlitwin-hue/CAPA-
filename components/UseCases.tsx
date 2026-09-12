import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionFoot, SectionHeader } from '@/components/ui/Section';
import { useCases } from '@/content/site';

export function UseCases() {
  return (
    <Section id="usages">
      <div className="shell">
        <SectionHeader index={useCases.index} label={useCases.sectionLabel} note={useCases.note} />

        <div className="grid12 pt-10 md:pt-16">
          <div className="col-span-4 md:col-span-8">
            <h3 className="display display-lg">
              <Reveal className="block">{useCases.title[0]} </Reveal>
              <Reveal delay={120} className="block text-blue">
                {useCases.title[1]}
              </Reveal>
            </h3>
          </div>
        </div>

        {/* ── Tableau des domaines ────────────────────────────────────────── */}
        <dl className="mt-12 border-b-2 border-ink md:mt-20">
          {useCases.items.map((item, i) => (
            <div key={item.n} className="border-t border-[var(--rule-strong)] first:border-t-2 first:border-ink">
              {/* Mobile : numéro + intitulé sur la même ligne, texte dessous.
                  Desktop : trois colonnes de grille, comme un tableau. */}
              <Reveal
                as="div"
                delay={i * 60}
                className="group grid grid-cols-[auto_1fr] items-baseline gap-x-4 py-5 md:grid-cols-12 md:gap-x-6 md:py-7"
              >
                <span className="label text-blue md:col-span-1">{item.n}</span>
                <dt className="md:col-span-3">
                  <span className="display display-md uppercase transition-colors group-hover:text-blue">
                    {item.title}
                  </span>
                </dt>
                <dd className="col-start-2 mt-3 md:col-span-7 md:col-start-6 md:mt-0">
                  <p className="body-text max-w-measure">{item.text}</p>
                </dd>
              </Reveal>
            </div>
          ))}
        </dl>

        <div className="flex justify-between gap-6 pb-14 pt-4 md:pb-20">
          <span className="label text-ink-mute">
            {String(useCases.items.length).padStart(2, '0')} domaines — une seule capacité
          </span>
          <span className="label hidden text-ink-mute md:block">FIN DU TABLEAU</span>
        </div>
        <SectionFoot index={useCases.index} />
      </div>
    </Section>
  );
}
