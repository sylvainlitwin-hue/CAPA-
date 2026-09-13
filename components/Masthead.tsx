import { brand, cta } from '@/content/site';

/**
 * Pas de menu. Six sections ne se naviguent pas, elles se lisent.
 *
 * Il reste donc deux choses en haut de page : le sigle et l'unique appel à
 * l'action. La barre est collante pour que la porte d'entrée reste à portée
 * de clic pendant toute la lecture.
 */
export function Masthead() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--rule-strong)] bg-paper">
      <div className="shell">
        <div className="flex h-[var(--nav-h)] items-center justify-between gap-4">
          <a
            href="#top"
            className="text-[1.375rem] font-semibold leading-none tracking-tighter"
            aria-label={`${brand.name} — retour en haut`}
          >
            {brand.wordmark}
          </a>

          <div className="flex items-baseline gap-6">
            <span className="label hidden text-ink-mute lg:block">
              {brand.documentRef} {brand.edition}
            </span>
            {/* Sur les plus petits écrans (320 px), le libellé complet ne
                tient qu'en réduisant le corps et en retirant la flèche : on
                ne raccourcit pas le texte, il n'y en a qu'un. */}
            <a
              href={cta.href}
              className="btn btn-primary gap-3 whitespace-nowrap px-3 py-2.5 text-[0.625rem] sm:px-5 sm:text-xs"
            >
              {cta.label}
              <span aria-hidden="true" className="hidden sm:inline">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
