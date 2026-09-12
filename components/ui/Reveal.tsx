'use client';

import type { ElementType, ReactNode } from 'react';
import { useInView } from '@/lib/useInView';

type RevealProps = {
  children: ReactNode;
  /** Retard en millisecondes — pour cascader quelques éléments, pas plus. */
  delay?: number;
  className?: string;
  /**
   * Élément rendu. `span` par défaut : un titre (`h1`…`h4`) ou un paragraphe
   * ne peut pas contenir de `div` — le navigateur refermerait la balise avant
   * l'analyse du contenu, qui perdrait alors sa mise en forme au premier
   * rendu. Les styles d'apparition passent l'élément en `display: block`
   * (voir globals.css) ; toute utilitaire de disposition (`grid`, `flex`…)
   * reprend la main. Passer `as="div"` dans un `dl`, `as="li"` dans une liste.
   */
  as?: ElementType;
  /** 'mask' : apparition par masque vertical. 'rule-x' / 'rule-y' : tracé de filet. */
  mode?: 'mask' | 'rule-x' | 'rule-y';
};

const MODE_CLASS: Record<NonNullable<RevealProps['mode']>, string> = {
  mask: 'reveal',
  'rule-x': 'draw-x',
  'rule-y': 'draw-y',
};

export function Reveal({
  children,
  delay = 0,
  className = '',
  as: Tag = 'span',
  mode = 'mask',
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      className={`${MODE_CLASS[mode]} ${className}`}
      data-shown={inView ? 'true' : 'false'}
      style={delay ? ({ '--reveal-delay': `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
