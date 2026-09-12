import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionHeader } from '@/components/ui/Section';
import { diagnostic, links } from '@/content/site';

const isExternal = (href: string) => /^https?:\/\//.test(href);

export function DiagnosticCTA() {
  const href = links.diagnostic.href;
  const external = isExternal(href);
  const formId = links.diagnostic.tallyFormId;

  return (
    <Section id="diagnostic" invert>
      <div className="shell">
        <SectionHeader
          index={diagnostic.index}
          label={diagnostic.sectionLabel}
          note="GRATUIT / 5 MIN"
          invert
        />

        <div className="grid12 pt-10 md:pt-16">
          <div className="col-span-4 md:col-span-8">
            <h3 className="display display-xl">
              <Reveal>{diagnostic.title}</Reveal>
            </h3>
            <Reveal delay={160} className="mt-6 md:mt-10">
              <p className="body-text max-w-measure text-paper/75">{diagnostic.text}</p>
            </Reveal>
          </div>

          {/* ── Ce que le diagnostic ne demande pas ──────────────────────── */}
          <div className="col-span-4 mt-10 md:col-span-3 md:col-start-10 md:mt-2">
            <Reveal delay={200}>
              <span className="label text-paper/55">Ne demande pas</span>
              <ul className="mt-4">
                {diagnostic.excludes.map((item) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-3 border-t border-rule-invert py-3"
                  >
                    <span aria-hidden="true" className="label text-signal">
                      ✕
                    </span>
                    <span className="label leading-relaxed text-paper">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {/* ── Ce qu'il demande ─────────────────────────────────────────────── */}
        <div className="mt-14 border-t border-rule-invert pt-3 md:mt-20">
          <span className="label text-paper/55">{diagnostic.includesLabel}</span>
          <ul className="mt-5 grid grid-cols-2 gap-px bg-[rgba(242,239,230,0.18)] md:grid-cols-6">
            {diagnostic.includes.map((item, i) => (
              <li key={item} className="bg-ink">
                {/* Sur fond graphite, le bleu technique ne passe pas le
                    contraste AA en petit corps : on inverse l'emphase. */}
                <Reveal delay={i * 50} className="flex items-baseline gap-2 px-3 py-4">
                  <span className="label text-paper">{String(i + 1).padStart(2, '0')}</span>
                  <span className="label text-paper/70">{item}</span>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Appel à l'action ─────────────────────────────────────────────── */}
        <div className="pb-16 pt-12 md:pb-24 md:pt-20">
          <Reveal>
            <a
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="group flex items-center justify-between gap-6 border-2 border-paper px-5 py-8 transition-colors hover:bg-paper hover:text-ink md:px-8 md:py-14"
            >
              <span className="display display-lg uppercase">{diagnostic.cta.label}</span>
              <span aria-hidden="true" className="display display-lg shrink-0">
                →
              </span>
            </a>
          </Reveal>
          <p className="label mt-5 text-paper/55">{diagnostic.microcopy}</p>

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
      </div>
    </Section>
  );
}
