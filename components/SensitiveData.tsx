import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionFoot, SectionHeader } from '@/components/ui/Section';
import { sensitiveData } from '@/content/site';

export function SensitiveData() {
  return (
    <Section id="donnees">
      <div className="shell">
        <SectionHeader
          index={sensitiveData.index}
          label={sensitiveData.sectionLabel}
          note={sensitiveData.note}
        />

        <div className="grid12 pt-10 md:pt-16">
          <div className="col-span-4 md:col-span-9">
            <h3 className="display display-lg">
              <Reveal>{sensitiveData.title}</Reveal>
            </h3>
          </div>
        </div>

        {/* ── Inventaire : un relevé, pas des cartes ─────────────────────── */}
        <dl className="mt-12 grid grid-cols-1 border-b-2 border-ink md:mt-20 md:grid-cols-2 md:gap-x-16">
          {sensitiveData.groups.map((group, i) => (
            <Reveal
              as="div"
              key={group.n}
              delay={(i % 4) * 60}
              className="border-t border-[var(--rule-strong)] py-5 md:py-6 md:first:border-t-2 md:first:border-ink md:[&:nth-child(2)]:border-t-2 md:[&:nth-child(2)]:border-ink"
            >
              <div className="flex items-baseline gap-4">
                <span className="label w-6 shrink-0 text-blue">{group.n}</span>
                <dt className="display display-poster uppercase">{group.title}</dt>
              </div>
              <dd className="mt-3 pl-10">
                <p className="body-text text-[0.9375rem] md:text-base">
                  {group.items.map((item, j) => (
                    <span key={item}>
                      {j > 0 ? (
                        <span aria-hidden="true" className="text-ink-mute">
                          {' · '}
                        </span>
                      ) : null}
                      {item}
                    </span>
                  ))}
                </p>
              </dd>
            </Reveal>
          ))}
        </dl>

        {/* ── Conclusion ────────────────────────────────────────────────── */}
        <div className="grid12 pt-14 md:pt-24">
          <div className="col-span-4 md:col-span-10">
            <p className="display display-lg">
              <Reveal>{sensitiveData.conclusion}</Reveal>
            </p>
          </div>
        </div>

        <div className="grid12 pt-10 md:pt-14">
          <div className="col-span-4 md:col-span-8 md:col-start-3">
            <Reveal delay={140} className="border-t-2 border-blue pt-5">
              <p className="display display-md text-blue">{sensitiveData.resolution}</p>
            </Reveal>
          </div>
        </div>

        <div className="h-16 md:h-24" />
        <SectionFoot index={sensitiveData.index} />
      </div>
    </Section>
  );
}
