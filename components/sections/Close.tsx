import { Reveal } from '@/components/ui/Reveal';
import { Sheet, SheetRef } from '@/components/ui/Sheet';
import { close, cta, founder, links } from '@/content/site';

const isExternal = (href: string) => /^https?:\/\//.test(href);

/**
 * § 06 — Le diagnostic.
 *
 * L'unique appel à l'action, en très grand. Trois refus explicites lèvent la
 * dernière objection : aucun document, aucun accès, aucune donnée client.
 * La page se ferme sur une signature manuscrite de fait — un nom, un rôle.
 */
export function Close() {
  const href = links.diagnostic.href;
  const external = isExternal(href);
  const formId = links.diagnostic.tallyFormId;

  return (
    <Sheet id="diagnostic" invert>
      <div className="shell">
        <SheetRef index={close.ref} label={close.label} note={close.note} invert />

        <div className="grid12 pt-12 md:pt-20">
          <div className="col-span-4 md:col-span-7">
            <h3 className="display display-lg">
              <Reveal>{close.title}</Reveal>
            </h3>
            <Reveal delay={160}>
              <p className="display display-sm mt-6 max-w-[30rem] font-normal text-paper/75 md:mt-10">
                {close.text}
              </p>
            </Reveal>
          </div>

          {/* Ce que je ne vous demande pas. */}
          <div className="col-span-4 mt-10 md:col-span-4 md:col-start-9 md:mt-2">
            {close.excludes.map((item, i) => (
              <Reveal
                as="div"
                key={item}
                delay={i * 80}
                className="flex items-baseline gap-3 border-t border-rule-invert py-3.5"
              >
                <span aria-hidden="true" className="label text-signal">
                  ✕
                </span>
                <span className="display display-sm text-paper">{item}</span>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── L'appel à l'action ───────────────────────────────────────── */}
        <div className="pt-12 md:pt-20">
          <Reveal>
            <a
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="flex items-center justify-between gap-6 border-2 border-paper px-5 py-8 transition-colors hover:bg-paper hover:text-ink md:px-8 md:py-14"
            >
              <span className="display display-lg uppercase">{cta.label}</span>
              <span aria-hidden="true" className="display display-lg shrink-0">
                →
              </span>
            </a>
          </Reveal>
          <p className="label mt-5 text-paper/55">{close.microcopy}</p>

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

        {/* ── Signature ────────────────────────────────────────────────── */}
        <div className="grid12 pt-16 md:pt-24">
          <div className="col-span-4 md:col-span-4">
            <div className="border-t-2 border-paper pt-3">
              <p className="display display-md">{founder.name}</p>
              <p className="label mt-2 text-paper/55">{founder.role}</p>
            </div>
          </div>
        </div>

        <div className="h-14 md:h-24" />
      </div>
    </Sheet>
  );
}
