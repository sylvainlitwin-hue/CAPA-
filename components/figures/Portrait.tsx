import Image from 'next/image';
import { founder } from '@/content/site';

/**
 * Portrait.
 *
 * Tant que `founder.portrait.src` vaut `null`, on affiche un emplacement
 * réservé : c'est la convention d'une maquette d'imprimeur — cadre au bon
 * format, diagonales, repères de montage, et le chemin du fichier attendu.
 * Aucun visage n'est inventé, aucune image n'est générée.
 *
 * Pour poser la vraie photographie : déposer le fichier dans
 * `public/images/fondateur.jpg` puis renseigner `src` dans content/site.ts.
 */
export function Portrait({ small = false }: { small?: boolean }) {
  const { src, alt, expectedPath, ratio } = founder.portrait;

  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={1500}
        sizes={small ? '(min-width: 768px) 22vw, 60vw' : '(min-width: 768px) 34vw, 90vw'}
        className="block w-full grayscale"
        priority={!small}
      />
    );
  }

  return (
    <div
      className="relative w-full bg-paper-deep"
      style={{ aspectRatio: '4 / 5' }}
      role="img"
      aria-label={`Emplacement réservé pour le portrait (${expectedPath}).`}
    >
      <svg
        viewBox="0 0 400 500"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <line x1="0" y1="0" x2="400" y2="500" stroke="#141414" strokeWidth="1" opacity="0.2" />
        <line x1="400" y1="0" x2="0" y2="500" stroke="#141414" strokeWidth="1" opacity="0.2" />
      </svg>

      {/* Repères de montage aux quatre angles : des équerres d'imprimeur. */}
      {[
        'left-0 top-0 border-l-2 border-t-2',
        'right-0 top-0 border-r-2 border-t-2',
        'left-0 bottom-0 border-b-2 border-l-2',
        'right-0 bottom-0 border-b-2 border-r-2',
      ].map((pos) => (
        <span key={pos} aria-hidden="true" className={`absolute h-5 w-5 border-ink ${pos}`} />
      ))}

      {/* Au petit format, la vignette ne porte que son intitulé : les
          précisions ne tiendraient pas dans la colonne. */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-2 text-center">
        <span className="label max-w-full bg-paper-deep px-1 text-ink">Portrait</span>
        {small ? null : (
          <>
            <span className="label max-w-full break-all bg-paper-deep px-1 text-ink-mute">
              {expectedPath}
            </span>
            <span className="label max-w-full bg-paper-deep px-1 text-ink-mute">
              Noir et blanc · {ratio} · photographie réelle
            </span>
          </>
        )}
      </div>
    </div>
  );
}
