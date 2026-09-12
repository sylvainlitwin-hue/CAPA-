'use client';

import { useEffect, useState } from 'react';

/**
 * Grille de contrôle. Touche [G].
 * Outil de vérification des alignements — invisible par défaut, jamais
 * affichée en production sans action de l'utilisateur.
 */
export function GridOverlay() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'g' && e.key !== 'G') return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const target = e.target as HTMLElement | null;
      if (target && /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName)) return;
      setOn((v) => !v);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  if (!on) return null;

  return (
    <div className="grid-overlay" aria-hidden="true">
      <div className="shell h-full">
        <div className="grid12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className={i >= 4 ? 'hidden md:block' : 'block'} />
          ))}
        </div>
      </div>
    </div>
  );
}
