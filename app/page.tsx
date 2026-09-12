import { Control } from '@/components/Control';
import { DiagnosticCTA } from '@/components/DiagnosticCTA';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Method } from '@/components/Method';
import { Navigation } from '@/components/Navigation';
import { PrivateAI } from '@/components/PrivateAI';
import { Recognition } from '@/components/Recognition';
import { TimeCost } from '@/components/TimeCost';
import { Why } from '@/components/Why';
import { GridOverlay } from '@/components/ui/GridOverlay';

/**
 * Huit sections, un seul lecteur : un dirigeant de PME.
 *
 * La home ne raconte pas tout le business. Elle fait reconnaître le
 * problème (01–02), montre qu'il coûte de l'argent (03), introduit une
 * approche différente (04–06), donne confiance (07) et pousse vers le
 * diagnostic (08). Le reste — prix, offres, architecture, détails
 * techniques, statistiques de marché — appartient à une page dédiée.
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

      <Navigation />

      <main>
        {/* 01 */} <Hero />
        {/* 02 */} <Recognition />
        {/* 03 */} <TimeCost />
        {/* 04 */} <Method />
        {/* 05 */} <Control />
        {/* 06 */} <PrivateAI />
        {/* 07 */} <Why />
        {/* 08 */} <DiagnosticCTA />
      </main>

      <Footer />

      <GridOverlay />
    </>
  );
}
