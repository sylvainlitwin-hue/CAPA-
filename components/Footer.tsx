import { brand, footer, links } from '@/content/site';

export function Footer() {
  return (
    <footer className="border-t border-[var(--rule-strong)]">
      <div className="shell">
        <div className="grid12 gap-y-8 py-10 md:py-14">
          <div className="col-span-4 md:col-span-4">
            <p className="text-[1.375rem] font-semibold leading-none tracking-tighter">
              {brand.wordmark}
            </p>
            <p className="label mt-3 text-ink-mute">{brand.location}</p>
          </div>

          <nav aria-label="Liens légaux" className="col-span-4 md:col-span-4">
            <ul>
              {links.legal.map((item) => (
                <li key={item.href} className="border-t border-rule first:border-t-0 md:first:border-t">
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

          <div className="col-span-4 md:col-span-3 md:col-start-10 md:text-right">
            <p className="label text-ink-mute">
              © {brand.edition} {brand.name}
            </p>
            <p className="label mt-3 text-ink-mute">{footer.gridHint}</p>
          </div>
        </div>
      </div>

      {/* ── Ligne de pied ─────────────────────────────────────────────────── */}
      <div className="bg-ink text-paper">
        <div className="shell">
          <div className="flex flex-col gap-2 py-5 sm:flex-row sm:items-baseline sm:justify-between md:py-7">
            {brand.baselineParts.map((part) => (
              <span
                key={part}
                className="font-mono text-[clamp(0.875rem,2.2vw,1.75rem)] font-medium tracking-[0.14em]"
              >
                {part}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
