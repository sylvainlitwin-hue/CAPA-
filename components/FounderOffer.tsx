import { CountUp } from '@/components/ui/CountUp';
import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionHeader } from '@/components/ui/Section';
import { founder, links } from '@/content/site';

export function FounderOffer() {
  const { offer } = founder;

  return (
    <Section id="offre-fondateur">
      <div className="shell">
        <SectionHeader index={founder.index} label={founder.sectionLabel} note="PHASE FONDATRICE" />

        <div className="grid12 pt-10 md:pt-16">
          <div className="col-span-4 md:col-span-8">
            <h3 className="display display-lg">
              <Reveal>{founder.title}</Reveal>
            </h3>
            <Reveal delay={160} className="mt-6 md:mt-8">
              <p className="body-text max-w-measure">{founder.text}</p>
            </Reveal>
          </div>

          <div className="col-span-4 mt-8 md:col-span-3 md:col-start-10 md:mt-2">
            <Reveal delay={120} className="border-t-2 border-ink pt-4">
              <span className="label text-ink-mute">{founder.seatsLabel}</span>
              <div className="mt-3 flex items-baseline gap-4">
                <span className="figure-lg text-blue">
                  {String(founder.seats).padStart(2, '0')}
                </span>
                <span aria-hidden="true" className="flex gap-1.5">
                  {Array.from({ length: founder.seats }).map((_, i) => (
                    <span key={i} className="h-3.5 w-3.5 border border-ink" />
                  ))}
                </span>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ── Bordereau ───────────────────────────────────────────────────── */}
        <div className="mt-12 border border-[var(--rule-strong)] md:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="border-b border-[var(--rule-strong)] px-4 py-5 md:col-span-8 md:border-b-0 md:border-r md:px-6 md:py-7">
              <span className="label text-ink-mute">Programme</span>
              <p className="display display-md mt-3 uppercase">{offer.name}</p>
            </div>
            <div className="px-4 py-5 md:col-span-4 md:px-6 md:py-7">
              <span className="label text-blue">{offer.priceLabel}</span>
              <p className="figure-lg mt-3">
                <CountUp value={offer.price} />
                <span className="label ml-2 text-ink-mute">{offer.priceUnit}</span>
              </p>
            </div>
          </div>

          <div className="border-t border-[var(--rule-strong)]">
            <div className="px-4 pt-5 md:px-6 md:pt-7">
              <span className="label text-ink-mute">Inclut</span>
            </div>
            <ol className="grid grid-cols-1 px-4 pb-5 pt-3 md:grid-cols-2 md:gap-x-12 md:px-6 md:pb-7">
              {offer.includes.map((item, i) => (
                <li key={item} className="border-b border-rule last:border-b-0 md:[&:nth-last-child(2)]:border-b-0">
                  <Reveal delay={(i % 4) * 60} className="flex items-baseline gap-4 py-3">
                    <span className="label w-6 text-blue">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-[1.0625rem] leading-snug">{item}</span>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-col gap-5 border-t border-[var(--rule-strong)] px-4 py-5 md:flex-row md:items-center md:justify-between md:px-6">
            <div>
              <p className="label text-ink">{offer.exclusion}</p>
              <p className="label mt-2 max-w-[46ch] leading-relaxed text-ink-mute">
                {offer.reserved}
              </p>
            </div>
            <a href={links.diagnostic.href} className="btn btn-primary shrink-0">
              {founder.cta.label}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="h-16 md:h-24" />
      </div>
    </Section>
  );
}
