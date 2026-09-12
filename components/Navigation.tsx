'use client';

import { useEffect, useState } from 'react';
import { brand, cta, nav } from '@/content/site';

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-paper">
      {/* Repère d'avancement de lecture. 1 px, bleu, aucune décoration. */}
      <div className="h-px w-full bg-[var(--rule)]">
        <div
          className="h-px bg-blue"
          style={{ width: `${progress * 100}%`, transition: 'width 90ms linear' }}
          aria-hidden="true"
        />
      </div>

      <div className="shell">
        <div className="flex h-[var(--nav-h)] items-center justify-between border-b border-rule">
          <a
            href="#top"
            className="flex items-baseline gap-2 text-[1.375rem] font-semibold leading-none tracking-tighter"
            aria-label={`${brand.name} — retour en haut`}
          >
            {brand.wordmark}
            <span className="label hidden text-ink-mute sm:inline">CAPACITÉ</span>
          </a>

          <nav aria-label="Navigation principale" className="hidden items-center gap-8 lg:flex">
            {nav.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="label text-ink-soft transition-colors hover:text-blue"
              >
                {item.label}
              </a>
            ))}
            {/* Un seul libellé d'appel à l'action sur toute la page. */}
            <a href={cta.href} className="btn btn-primary gap-3 whitespace-nowrap py-2.5">
              {cta.label}
              <span aria-hidden="true">→</span>
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="label flex items-center gap-2 border border-[var(--rule-strong)] px-3 py-2 lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
          >
            {open ? 'Fermer' : 'Menu'}
            <span aria-hidden="true">{open ? '×' : '≡'}</span>
          </button>
        </div>
      </div>

      {open ? (
        <div id="menu-mobile" className="border-b border-[var(--rule-strong)] bg-paper lg:hidden">
          <div className="shell py-2">
            {nav.items.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline justify-between border-b border-rule py-4"
              >
                <span className="display-sm">{item.label}</span>
                <span className="label text-ink-mute">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </a>
            ))}
            <a
              href={cta.href}
              onClick={() => setOpen(false)}
              className="btn btn-primary my-4 w-full"
            >
              {cta.label}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
