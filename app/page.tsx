import { Colophon } from '@/components/Colophon';
import { Masthead } from '@/components/Masthead';
import { Capacity } from '@/components/sections/Capacity';
import { Close } from '@/components/sections/Close';
import { Figures } from '@/components/sections/Figures';
import { Hero } from '@/components/sections/Hero';
import { Provocation } from '@/components/sections/Provocation';
import { Recognition } from '@/components/sections/Recognition';
import { GridOverlay } from '@/components/ui/GridOverlay';

/**
 * Six feuilles, un seul lecteur : un dirigeant-propriétaire de PME.
 *
 * 01 la question et l'homme qui la pose · 02 ce qu'il paie déjà ·
 * 03 le calcul · 04 la position (« vous n'avez pas besoin de plus d'IA ») ·
 * 05 l'intrigue · 06 le diagnostic.
 *
 * Cette page ne vend pas CAPA. Elle vend la curiosité de savoir ce que le
 * statu quo coûte — et le diagnostic est ce qui résout cette tension. Tout
 * le reste (prix, offres, technique, sécurité, formation) appartient à une
 * page dédiée ou à l'après-qualification.
 */
export default function Page() {
  return (
    <>
      <a
        href="#top"
        className="label sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-3 focus:text-paper"
      >
        Aller au contenu
      </a>

      <Masthead />

      <main>
        <Hero />
        <Recognition />
        <Figures />
        <Provocation />
        <Capacity />
        <Close />
      </main>

      <Colophon />

      <GridOverlay />
    </>
  );
}
