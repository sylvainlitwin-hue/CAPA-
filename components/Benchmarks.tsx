import { CountUp } from '@/components/ui/CountUp';
import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionFoot, SectionHeader } from '@/components/ui/Section';
import { benchmarks } from '@/content/site';

/**
 * § 06 — Repères chiffrés.
 *
 * La seule section de la page qui porte des STATISTIQUES PUBLIQUES, par
 * opposition aux chiffres calculés du § 04. Chaque nombre est accompagné de
 * son année, de son périmètre, et la source est cliquable : c'est la
 * condition pour qu'ils figurent ici.
 */
export function Benchmarks() {
  const { source } = benchmarks;

  return (
    <Section id="reperes">
      <div className="shell">
        <SectionHeader
          index={benchmarks.index}
          label={benchmarks.sectionLabel}
          note={benchmarks.note}
        />

        <div className="grid12 pt-10 md:pt-16">
          <div className="col-span-4 md:col-span-8">
            <h3 className="display display-xl">
              <Reveal>{benchmarks.title}</Reveal>
            </h3>
          </div>
        </div>

        {/* ── Les quatre chiffres ───────────────────────────────────────── */}
        <dl className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 md:mt-20 md:grid-cols-4">
          {benchmarks.figures.map((figure, i) => (
            <Reveal
              as="div"
              key={figure.label}
              delay={i * 100}
              className="border-t-2 border-ink pt-4"
            >
              <dd className={`figure-xl ${figure.accent ? 'text-blue' : ''}`}>
                {figure.prefix ? <span aria-hidden="true">{figure.prefix}</span> : null}
                <CountUp value={figure.value} />
                <span className="label ml-2 text-ink-mute">{figure.unit}</span>
              </dd>
              <dt className="body-text mt-4 text-[0.9375rem] md:text-base">{figure.label}</dt>
              <p className="label mt-3 text-ink-mute">{figure.ref}</p>
            </Reveal>
          ))}
        </dl>

        {/* ── La source, cliquable ──────────────────────────────────────── */}
        <div className="mt-12 border-t border-[var(--rule-strong)] pt-4 md:mt-16">
          <div className="grid12">
            <div className="col-span-4 md:col-span-2">
              <span className="label text-ink-mute">{source.label}</span>
            </div>
            <div className="col-span-4 mt-3 md:col-span-9 md:col-start-4 md:mt-0">
              <p className="label leading-relaxed text-ink">{source.text}</p>
              <a
                href={source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="label mt-3 inline-flex items-baseline gap-2 border-b border-[var(--rule-strong)] pb-0.5 text-blue transition-colors hover:border-blue"
              >
                {source.linkLabel}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* ── Ma lecture ────────────────────────────────────────────────── */}
        <div className="grid12 pt-14 md:pt-24">
          <div className="col-span-4 md:col-span-8 md:col-start-3">
            <p className="display display-md">
              <Reveal className="block">{benchmarks.reading[0]} </Reveal>
              <Reveal delay={140} className="mt-3 block text-blue">
                {benchmarks.reading[1]}
              </Reveal>
            </p>
          </div>
        </div>

        <div className="h-14 md:h-20" />
        <SectionFoot index={benchmarks.index} />
      </div>
    </Section>
  );
}
