import { Reveal } from '@/components/ui/Reveal';
import { Sheet, SheetRef } from '@/components/ui/Sheet';
import { capacity } from '@/content/site';

/**
 * § 05 — La capacité.
 *
 * L'intrigue, pas la démonstration : une question, trois phrases, une ligne
 * sur la confidentialité. Aucun détail technique, aucun schéma, aucune
 * caractéristique matérielle — le lecteur doit vouloir en savoir plus, pas
 * croire qu'il sait déjà tout.
 *
 * Le lien secondaire n'est rendu que si son URL est renseignée dans
 * content/site.ts : pas de lien mort tant que la page n'existe pas.
 */
export function Capacity() {
  return (
    <Sheet id="capacite" className="bg-paper-deep">
      <div className="shell">
        <SheetRef index={capacity.ref} label={capacity.label} note={capacity.note} />

        <div className="grid12 pt-12 md:pt-20">
          <div className="col-span-4 md:col-span-10">
            <h3 className="display display-lg">
              <Reveal>{capacity.title}</Reveal>
            </h3>
          </div>

          <div className="col-span-4 mt-8 md:col-span-6 md:col-start-4 md:mt-14">
            {capacity.text.map((line, i) => (
              <Reveal key={line} delay={140 + i * 90}>
                <p className="display display-sm mt-3 font-normal text-ink-soft first:mt-0">
                  {line}
                </p>
              </Reveal>
            ))}
            <Reveal delay={380}>
              <p className="display display-md mt-6 text-blue md:mt-8">{capacity.textStrong}</p>
            </Reveal>
          </div>
        </div>

        {/* ── La seule phrase sur la confidentialité ────────────────────── */}
        <div className="grid12 pt-14 md:pt-24">
          <div className="col-span-4 md:col-span-7 md:col-start-4">
            <div className="border-t-2 border-ink pt-5 md:pt-7">
              <Reveal>
                <p className="body-text">{capacity.confidentiality[0]}</p>
              </Reveal>
              <Reveal delay={160}>
                <p className="display display-sm mt-4">{capacity.confidentiality[1]}</p>
              </Reveal>

              {capacity.link.href ? (
                <Reveal delay={260}>
                  <a
                    href={capacity.link.href}
                    className="label mt-7 inline-flex items-baseline gap-2 border-b border-[var(--rule-strong)] pb-1 text-blue transition-colors hover:border-blue"
                  >
                    {capacity.link.label}
                    <span aria-hidden="true">→</span>
                  </a>
                </Reveal>
              ) : null}
            </div>
          </div>
        </div>

        <div className="h-16 md:h-28" />
      </div>
    </Sheet>
  );
}
