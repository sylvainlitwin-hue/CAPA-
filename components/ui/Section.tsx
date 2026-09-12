import type { ReactNode } from 'react';
import { Reveal } from '@/components/ui/Reveal';
import { brand } from '@/content/site';

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Fond graphite inversé pour les deux sections de rupture. */
  invert?: boolean;
};

export function Section({ id, children, className = '', invert = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative ${invert ? 'bg-ink text-paper' : ''} ${className}`}
      data-invert={invert ? 'true' : undefined}
    >
      {children}
    </section>
  );
}

type SectionHeaderProps = {
  index: string;
  label: string;
  /** Annotation de droite : référence, unité, mention. */
  note?: string;
  invert?: boolean;
};

/**
 * En-tête de section : filet pleine largeur + ligne de repères monospace.
 * C'est l'élément qui donne à la page son statut de document technique.
 */
export function SectionHeader({ index, label, note, invert = false }: SectionHeaderProps) {
  const ruleColor = invert ? 'bg-paper/35' : 'bg-[var(--rule-strong)]';
  const muted = invert ? 'text-paper/55' : 'text-ink-mute';

  return (
    <div className="pt-5 md:pt-6">
      <Reveal mode="rule-x" className={`h-px w-full ${ruleColor}`}>
        <span className="sr-only" />
      </Reveal>
      <div className="mt-3 flex items-baseline justify-between gap-4">
        <div className="flex items-baseline gap-3 md:gap-5">
          <span className={`label ${invert ? 'text-paper' : 'text-blue'}`}>§&nbsp;{index}</span>
          <h2 className={`label ${invert ? 'text-paper' : 'text-ink'}`}>{label}</h2>
        </div>
        <span className={`label hidden md:block ${muted}`}>
          {note ?? `${brand.name} / ${brand.edition}`}
        </span>
      </div>
    </div>
  );
}
