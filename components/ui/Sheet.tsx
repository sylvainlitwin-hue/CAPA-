import type { ReactNode } from 'react';
import { Reveal } from '@/components/ui/Reveal';

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  LA FEUILLE
 * ─────────────────────────────────────────────────────────────────────────────
 *  Chaque section est composée comme une page de rapport imprimé : un filet
 *  de tête, un repère de régie en monospace, une croix de repérage, puis
 *  beaucoup de vide. C'est tout le mobilier de la page — il n'y a
 *  volontairement rien d'autre à décorer.
 * ─────────────────────────────────────────────────────────────────────────────
 */

type SheetProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Rupture graphite : la section de position et le diagnostic. */
  invert?: boolean;
};

export function Sheet({ id, children, className = '', invert = false }: SheetProps) {
  return (
    <section id={id} className={`relative ${invert ? 'bg-ink text-paper' : ''} ${className}`}>
      {children}
    </section>
  );
}

/** Croix de repérage d'imprimeur. Un repère de calage, pas une icône. */
export function RegMark({ invert = false }: { invert?: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-3.5 w-3.5 shrink-0"
      aria-hidden="true"
      fill="none"
      stroke={invert ? 'rgba(242,239,230,0.55)' : 'rgba(20,20,20,0.5)'}
      strokeWidth="1"
    >
      <circle cx="10" cy="10" r="5.5" />
      <path d="M10 0v20M0 10h20" />
    </svg>
  );
}

type SheetRefProps = {
  /** Numéro de la section, sur six. */
  index: string;
  label: string;
  /** Annotation de droite : unité, périmètre, mention. */
  note?: string;
  invert?: boolean;
  /**
   * L'intitulé est le titre de la section (h2) — sauf en ouverture, où le
   * titre de la page (h1) doit venir en premier dans le document.
   */
  heading?: boolean;
};

/**
 * Le repère de régie : filet de tête + numéro + intitulé, et à droite
 * l'annotation puis la croix de calage. Un seul niveau de titre (h2) par
 * section, tenu par cet élément.
 */
export function SheetRef({ index, label, note, invert = false, heading = true }: SheetRefProps) {
  const rule = invert ? 'bg-paper/35' : 'bg-[var(--rule-strong)]';
  const muted = invert ? 'text-paper/55' : 'text-ink-mute';
  const Label = heading ? 'h2' : 'span';

  return (
    <div className="pt-5 md:pt-7">
      <Reveal mode="rule-x" className={`h-px w-full ${rule}`}>
        <span className="sr-only" />
      </Reveal>
      <div className="mt-3 flex items-baseline justify-between gap-4">
        <div className="flex items-baseline gap-3 md:gap-5">
          <span className={`label ${invert ? 'text-paper' : 'text-blue'}`}>{index}</span>
          <Label className={`label ${invert ? 'text-paper' : 'text-ink'}`}>{label}</Label>
        </div>
        <div className="flex items-center gap-3">
          {note ? <span className={`label hidden md:block ${muted}`}>{note}</span> : null}
          <RegMark invert={invert} />
        </div>
      </div>
    </div>
  );
}
