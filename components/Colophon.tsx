import { brand, colophon, links } from '@/content/site';

/**
 * Le colophon — la dernière ligne d'un imprimé : qui édite, où, sous quelles
 * mentions. Et la gamme de contrôle, cette bande d'encres que les imprimeurs
 * laissent en marge de la feuille pour vérifier le tirage. Ici, ce sont les
 * quatre couleurs de la page, et il n'y en a pas une cinquième.
 */
export function Colophon() {
  return (
    <footer className="border-t border-[var(--rule-strong)]">
      <div className="shell">
        <div className="grid12 gap-y-8 py-10 md:py-14">
          <div className="col-span-4 md:col-span-4">
            <p className="text-[1.375rem] font-semibold leading-none tracking-tighter">
              {brand.wordmark}
            </p>
            <p className="label mt-3 text-ink-mute">
              {brand.location} · {brand.edition}
            </p>
          </div>

          <nav aria-label="Liens légaux" className="col-span-4 md:col-span-3 md:col-start-6">
            <ul>
              {links.legal.map((item) => (
                <li key={item.href} className="border-t border-rule first:border-t-0">
                  <a
                    href={item.href}
                    className="label block py-3 text-ink-soft transition-colors hover:text-blue"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Gamme de contrôle ─────────────────────────────────────── */}
          <div className="col-span-4 md:col-span-3 md:col-start-10">
            <p className="label text-ink-mute">{brand.documentRef}</p>
            <div className="mt-3 flex" aria-hidden="true">
              {colophon.inks.map((ink) => (
                <span
                  key={ink.name}
                  className="h-4 flex-1 border border-[var(--rule)]"
                  style={{ backgroundColor: ink.value }}
                />
              ))}
            </div>
            <p className="label mt-3 text-ink-mute">{colophon.gridHint}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
