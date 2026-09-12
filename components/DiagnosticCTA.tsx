import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionFoot, SectionHeader } from '@/components/ui/Section';
import { brand, cta, links, start } from '@/content/site';

const isExternal = (href: string) => /^https?:\/\//.test(href);

/**
 * § 09 — Commencez simplement.
 *
 * L'unique appel à l'action de la page, en grand. Trois refus explicites
 * (aucun document, aucun accès, aucune donnée client) lèvent la dernière
 * objection. La page se ferme sur la signature.
 */
export function DiagnosticCTA() {
  const href = links.diagnostic.href;
  const external = isExternal(href);
  const formId = links.diagnostic.tallyFormId;

  return (
    <Section id="diagnostic" invert>
      <div className="shell">
        <SectionHeader index={start.index} label={start.sectionLabel} note={start.note} invert />

        <div className="grid12 pt-10 md:pt-16">
          <div className="col-span-4 md:col-span-7">
            <h3 className="display display-xl">
              <Reveal>{start.title}</Reveal>
            </h3>
            <Reveal delay={160} className="mt-6 md:mt-10">
              <p className="display display-sm font-normal text-paper/80">{start.lines[0]}</p>
            </Reveal>
          </div>

          {/* Ce que je ne vous demande pas. */}
          <div className="col-span-4 mt-10 md:col-span-4 md:col-start-9 md:mt-2">
            <ul>
              {start.excludes.map((item, i) => (
                <li key={item} className="border-t border-rule-invert">
                  <Reveal delay={i * 80} className="flex items-baseline gap-3 py-3.5">
                    <span aria-hidden="true" className="label text-signal">
                      ✕
                    </span>
                    <span className="display display-sm text-paper">{item}</span>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── L'appel à l'action ───────────────────────────────────────────── */}
        <div className="pt-12 md:pt-20">
          <Reveal>
            <a
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="group flex items-center justify-between gap-6 border-2 border-paper px-5 py-8 transition-colors hover:bg-paper hover:text-ink md:px-8 md:py-14"
            >
              <span className="display display-lg uppercase">{cta.label}</span>
              <span aria-hidden="true" className="display display-lg shrink-0">
                →
              </span>
            </a>
          </Reveal>
          <p className="label mt-5 text-paper/55">{start.microcopy}</p>

          {/*
            Branchement Tally : renseigner links.diagnostic.tallyFormId
            dans content/site.ts pour afficher le formulaire ici même.
          */}
          {formId ? (
            <div className="mt-10 border border-rule-invert bg-paper p-2">
              <iframe
                src={`https://tally.so/embed/${formId}?hideTitle=1&transparentBackground=1`}
                title="Diagnostic CAPA"
                loading="lazy"
                width="100%"
                height="640"
                className="block w-full"
              />
            </div>
          ) : null}
        </div>

        {/* ── Signature ───────────────────────────────────────────────────── */}
        <div className="pt-16 md:pt-28">
          <Reveal>
            <p className="font-semibold leading-[0.78] tracking-tightest text-[clamp(4rem,31vw,30rem)]">
              {brand.wordmark}
            </p>
          </Reveal>
        </div>

        <div className="h-10 md:h-16" />
        <SectionFoot index={start.index} invert />
      </div>
    </Section>
  );
}
