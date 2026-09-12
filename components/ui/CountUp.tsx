'use client';

import { useEffect, useRef, useState } from 'react';
import { formatFr } from '@/lib/format';
import { useInView } from '@/lib/useInView';

type CountUpProps = {
  value: number;
  decimals?: number;
  duration?: number;
  className?: string;
  /** Préfixe / suffixe rendus dans le même flux typographique. */
  prefix?: string;
  suffix?: string;
};

/**
 * Compteur sobre : une seule passe, courbe décélérée, valeur finale rendue
 * côté serveur pour que la page reste lisible sans JavaScript.
 */
export function CountUp({
  value,
  decimals = 0,
  duration = 1100,
  className = '',
  prefix = '',
  suffix = '',
}: CountUpProps) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const [display, setDisplay] = useState(value);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;

    const reduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    started.current = true;
    if (reduced) {
      setDisplay(value);
      return;
    }

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - t) ** 3;
      setDisplay(value * eased);
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    setDisplay(0);
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className} data-num>
      {prefix}
      {formatFr(display, decimals)}
      {suffix}
    </span>
  );
}
