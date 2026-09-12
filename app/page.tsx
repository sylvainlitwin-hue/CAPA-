import { CapacityComparison } from '@/components/CapacityComparison';
import { CapaPointGraph } from '@/components/CapaPointGraph';
import { CostEquation } from '@/components/CostEquation';
import { DiagnosticCTA } from '@/components/DiagnosticCTA';
import { FinalManifesto } from '@/components/FinalManifesto';
import { Footer } from '@/components/Footer';
import { FounderOffer } from '@/components/FounderOffer';
import { Hero } from '@/components/Hero';
import { Manifesto } from '@/components/Manifesto';
import { Method } from '@/components/Method';
import { Navigation } from '@/components/Navigation';
import { PrivateAI } from '@/components/PrivateAI';
import { UseCases } from '@/components/UseCases';
import { GridOverlay } from '@/components/ui/GridOverlay';

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
        {/* 02 */} <Manifesto />
        {/* 03 */} <CostEquation />
        {/* 04 */} <CapaPointGraph />
        {/* 05 */} <Method />
        {/* 06 */} <PrivateAI />
        {/* 07 */} <UseCases />
        {/* 08 */} <CapacityComparison />
        {/* 09 */} <DiagnosticCTA />
        {/* 10 */} <FounderOffer />
        {/* 11 */} <FinalManifesto />
      </main>

      {/* 12 */}
      <Footer />

      <GridOverlay />
    </>
  );
}
