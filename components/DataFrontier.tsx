import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionFoot, SectionHeader } from '@/components/ui/Section';
import { frontier } from '@/content/site';

/**
 * § 08 — La frontière.
 *
 * À gauche, l'entreprise : un tableau réglé, net, numéroté.
 * Au centre, la frontière : un filet vertical en pointillé que les flèches
 * traversent (l'arrêt du filet à l'endroit de la flèche fait la traversée).
 * À droite, le territoire non gouverné : une hachure, laissée vide.
 *
 * Le propos reste factuel : une information qui traverse sort du périmètre
 * technique direct de l'entreprise. Rien de plus n'est affirmé.
 */
const ROW = 'grid grid-cols-[1fr_2.5rem] md:grid-cols-[1fr_3.5rem_1fr]';

export function DataFrontier() {
  return (
    <Section id="frontiere">
      <div className="shell">
        <SectionHeader index={frontier.index} label={frontier.sectionLabel} note={frontier.note} />

        <div className="grid12 pt-10 md:pt-16">
          <div className="col-span-4 md:col-span-8">
            <h3 className="display display-lg">
              <Reveal>{frontier.title}</Reveal>
            </h3>
          </div>
        </div>

        {/* ── En-têtes de la composition ─────────────────────────────────── */}
        <div className={`${ROW} mt-12 items-end border-b-2 border-ink pb-3 md:mt-20`}>
          <div>
            <span className="label text-blue">Intérieur</span>
            <p className="display display-md mt-2">{frontier.inside}</p>
          </div>
          <div className="flex items-end justify-center">
            <span className="label text-ink-mute" aria-hidden="true">
              →
            </span>
          </div>
          <div className="hidden pl-6 md:block">
            <span className="label text-ink-mute">Extérieur</span>
            <p className="display display-md mt-2 text-ink-mute">{frontier.outside}</p>
          </div>
        </div>

        {/* ── Les traversées ────────────────────────────────────────────── */}
        <ul>
          {frontier.items.map((item, i) => (
            <li key={item} className={`${ROW} border-b border-rule`}>
              <Reveal
                as="div"
                delay={(i % 5) * 50}
                className="flex items-baseline gap-4 py-3 pr-2 md:pr-4"
              >
                <span className="label w-6 shrink-0 text-ink-mute">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="shrink-0 text-[1.0625rem] leading-snug">{item}</span>
                <span
                  aria-hidden="true"
                  className="mb-[0.35em] hidden h-px flex-1 bg-[var(--rule-strong)] md:block"
                />
              </Reveal>

              {/* La frontière, et la flèche qui la perce. */}
              <div
                className="relative flex items-center justify-center border-l border-dashed border-ink md:border-r"
                aria-hidden="true"
              >
                <span className="label bg-paper px-1 text-blue">→</span>
              </div>

              <div className="hatch-faint hidden md:block" aria-hidden="true" />
            </li>
          ))}
        </ul>

        {/* Sur mobile, le territoire extérieur est nommé après la liste. */}
        <div className="hatch-faint mt-0 border-b-2 border-ink px-4 py-6 md:hidden">
          <span className="label text-ink-mute">Extérieur</span>
          <p className="display display-sm mt-2 text-ink">{frontier.outside}</p>
        </div>

        {/* ── Ce que cela veut dire, et ce que cela ne veut pas dire ────── */}
        <div className="grid12 pt-14 md:pt-24">
          <div className="col-span-4 md:col-span-7">
            <p className="display display-md">
              <Reveal className="block">{frontier.statement[0]} </Reveal>
              <Reveal delay={140} className="mt-4 block text-blue">
                {frontier.statement[1]}
              </Reveal>
            </p>
          </div>
          <div className="col-span-4 mt-10 md:col-span-4 md:col-start-9 md:mt-2">
            <Reveal delay={200} className="border-t border-[var(--rule-strong)] pt-4">
              <span className="label text-ink-mute">Formulation exacte</span>
              <p className="body-text mt-3 max-w-measure-sm">{frontier.caution}</p>
            </Reveal>
          </div>
        </div>

        <div className="h-16 md:h-24" />
        <SectionFoot index={frontier.index} />
      </div>
    </Section>
  );
}
