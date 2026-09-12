import { Reveal } from '@/components/ui/Reveal';
import { positioning } from '@/content/site';

/**
 * Intertitre de position — conçu pour pouvoir être imprimé tel quel comme
 * une affiche : filets épais, grandes lettres, quatre conditions en pied.
 * Volontairement non numéroté : c'est une page de respiration.
 */
export function Positioning() {
  return (
    <section className="border-t-2 border-ink">
      <div className="shell">
        <div className="py-16 md:py-28">
          <span className="label text-blue">{positioning.label}</span>

          <div className="grid12 mt-8 md:mt-12">
            <div className="col-span-4 md:col-span-10">
              {positioning.lines.map((line, i) => (
                <Reveal as="p" key={line} delay={i * 120} className="display display-lg">
                  {line}
                </Reveal>
              ))}
            </div>
          </div>

          <div className="grid12 mt-10 md:mt-16">
            <div className="col-span-4 md:col-span-11">
              <p className="display display-xl text-blue">
                <Reveal>{positioning.emphasis}</Reveal>
              </p>
            </div>
          </div>

          {/* Les quatre conditions, en pied d'affiche. */}
          <ul className="mt-14 grid grid-cols-2 gap-x-6 gap-y-6 md:mt-24 md:grid-cols-4 md:gap-x-6">
            {positioning.conditions.map((condition, i) => (
              <Reveal
                as="li"
                key={condition}
                delay={i * 80}
                className="border-t-2 border-ink pt-3"
              >
                <span className="label block text-ink-mute">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="display display-sm mt-2 block">{condition}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
