import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionFoot, SectionHeader } from '@/components/ui/Section';
import { architecture } from '@/content/site';

/**
 * § 11 — Aucun dogme sur l'architecture. Cette section existe pour une
 * raison commerciale précise : CAPA ne vend pas du matériel à tout prix.
 */
export function Architecture() {
  return (
    <Section id="architecture">
      <div className="shell">
        <SectionHeader
          index={architecture.index}
          label={architecture.sectionLabel}
          note={architecture.note}
        />

        <div className="grid12 pt-10 md:pt-16">
          <div className="col-span-4 md:col-span-9">
            <h3 className="display display-lg">
              <Reveal className="block">{architecture.title[0]} </Reveal>
              <Reveal delay={120} className="block text-blue">
                {architecture.title[1]}
              </Reveal>
            </h3>
          </div>
        </div>

        <div className="grid12 pt-12 md:pt-16">
          <div className="col-span-4 md:col-span-5">
            <Reveal>
              <p className="display display-md">{architecture.intro}</p>
            </Reveal>
          </div>

          {/* Les critères : un relevé technique, deux colonnes. */}
          <div className="col-span-4 mt-10 md:col-span-6 md:col-start-7 md:mt-2">
            <span className="label text-ink-mute">{architecture.criteriaLabel}</span>
            <ul className="mt-4 grid grid-cols-1 border-b border-rule sm:grid-cols-2 sm:gap-x-8">
              {architecture.criteria.map((criterion, i) => (
                <Reveal
                  as="li"
                  key={criterion}
                  delay={(i % 4) * 60}
                  className="flex items-baseline gap-3 border-t border-rule py-2.5"
                >
                  <span className="label text-ink-mute">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[0.9375rem] leading-snug">{criterion}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Trois régimes ─────────────────────────────────────────────── */}
        <div className="mt-14 grid grid-cols-1 border-t-2 border-ink md:mt-24 md:grid-cols-3">
          {architecture.columns.map((column, i) => (
            <Reveal
              as="div"
              key={column.n}
              delay={i * 110}
              className="border-b border-rule py-6 md:border-b-0 md:border-l md:border-[var(--rule-strong)] md:pl-6 md:first:border-l-0 md:first:pl-0 md:pr-6"
            >
              <div className="flex items-baseline gap-3">
                <span className="label text-ink-mute">{column.n}</span>
                <h4 className={`display display-md uppercase ${i === 2 ? 'text-blue' : ''}`}>
                  {column.title}
                </h4>
              </div>

              {column.items.length ? (
                <ul className="mt-5">
                  {column.items.map((item) => (
                    <li key={item} className="border-t border-rule py-2.5">
                      <span className="text-[1rem] leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              {column.quote ? (
                <p className="display display-sm mt-5 border-t-2 border-blue pt-4 text-blue">
                  {column.quote}
                </p>
              ) : null}
            </Reveal>
          ))}
        </div>

        <div className="h-16 md:h-24" />
        <SectionFoot index={architecture.index} />
      </div>
    </Section>
  );
}
