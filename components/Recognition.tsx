import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionFoot, SectionHeader } from '@/components/ui/Section';
import { recognition } from '@/content/site';

/**
 * § 02 — Vous vous reconnaissez ?
 *
 * Cinq lignes, numérotées, et une conclusion qui propose de mesurer plutôt
 * que d'acheter. Rien de plus : la reconnaissance n'a pas besoin d'être
 * expliquée.
 */
export function Recognition() {
  return (
    <Section id="reconnaissance">
      <div className="shell">
        <SectionHeader
          index={recognition.index}
          label={recognition.sectionLabel}
          note={recognition.note}
        />

        <div className="grid12 pt-10 md:pt-16">
          <div className="col-span-4 md:col-span-9">
            <h3 className="display display-xl">
              <Reveal>{recognition.title}</Reveal>
            </h3>
          </div>
        </div>

        <ol className="mt-12 border-b-2 border-ink md:mt-20">
          {recognition.points.map((point, i) => (
            <li key={point} className="border-t border-[var(--rule-strong)]">
              <Reveal
                as="div"
                delay={i * 70}
                className="grid grid-cols-[auto_1fr] items-baseline gap-x-5 py-4 md:grid-cols-12 md:gap-x-6 md:py-5"
              >
                <span className="label text-blue md:col-span-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="display display-sm md:col-span-10">{point}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="grid12 pb-14 pt-10 md:pb-20 md:pt-14">
          <div className="col-span-4 md:col-span-8 md:col-start-3">
            <p className="display display-md text-blue">
              <Reveal>{recognition.closing}</Reveal>
            </p>
          </div>
        </div>

        <SectionFoot index={recognition.index} />
      </div>
    </Section>
  );
}
