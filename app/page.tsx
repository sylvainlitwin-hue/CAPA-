import { Benchmarks } from '@/components/Benchmarks';
import { DiagnosticCTA } from '@/components/DiagnosticCTA';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Me } from '@/components/Me';
import { Method } from '@/components/Method';
import { Navigation } from '@/components/Navigation';
import { NoPrice } from '@/components/NoPrice';
import { PrivateAI } from '@/components/PrivateAI';
import { Recognition } from '@/components/Recognition';
import { Shadow } from '@/components/Shadow';
import { TimeCost } from '@/components/TimeCost';
import { GridOverlay } from '@/components/ui/GridOverlay';

/**
 * Dix sections, un seul lecteur : un dirigeant de PME.
 *
 * 01 ce qu'il sait / ce qu'il ne sait pas · 02 qui lui parle ·
 * 03 la reconnaissance · 04 l'arithmétique (chiffres calculés) ·
 * 05 l'IA déjà présente · 06 les repères (statistiques sourcées) ·
 * 07 la méthode · 08 sa propre IA · 09 pas de prix avant le problème ·
 * 10 l'unique appel à l'action.
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
        {/* 02 */} <Me />
        {/* 03 */} <Recognition />
        {/* 04 */} <TimeCost />
        {/* 05 */} <Shadow />
        {/* 06 */} <Benchmarks />
        {/* 07 */} <Method />
        {/* 08 */} <PrivateAI />
        {/* 09 */} <NoPrice />
        {/* 10 */} <DiagnosticCTA />
      </main>

      <Footer />

      <GridOverlay />
    </>
  );
}
