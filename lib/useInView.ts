'use client';

import { useEffect, useRef, useState } from 'react';

type Options = {
  /** Marge de déclenchement (par défaut : 12 % avant le bas du viewport). */
  rootMargin?: string;
  threshold?: number;
  /** Une fois visible, on ne re-déclenche plus : pas de clignotement au scroll. */
  once?: boolean;
};

export function useInView<T extends HTMLElement = HTMLDivElement>({
  rootMargin = '0px 0px -12% 0px',
  threshold = 0,
  once = true,
}: Options = {}) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setInView(false);
          }
        }
      },
      { rootMargin, threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, threshold, once]);

  return { ref, inView };
}

/**
 * Progression (0 → 1) de la traversée d'un élément dans le viewport.
 * Utilisé uniquement par le graphique POINT CAPA. Lecture via rAF,
 * listener passif, neutralisé si l'utilisateur refuse les animations.
 */
export function useScrollProgress<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced) {
      setProgress(1);
      return;
    }

    let frame = 0;

    const measure = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // 0 quand le haut de l'élément atteint 85 % du viewport,
      // 1 quand il atteint 30 %.
      const start = vh * 0.85;
      const end = vh * 0.3;
      const raw = (start - rect.top) / (start - end);
      const clamped = Math.min(1, Math.max(0, raw));
      // Quantification : 200 paliers suffisent visuellement et limitent
      // le nombre de rendus pendant le défilement.
      const stepped = Math.round(clamped * 200) / 200;
      // Cliquet : la progression ne redescend jamais. Le graphique reste
      // tracé si le lecteur remonte dans la page.
      setProgress((prev) => (stepped > prev ? stepped : prev));
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

  return { ref, progress };
}
