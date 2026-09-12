import { Architecture } from '@/components/Architecture';
import { CapacityComparison } from '@/components/CapacityComparison';
import { CapaPointGraph } from '@/components/CapaPointGraph';
import { CostEquation } from '@/components/CostEquation';
import { DataFrontier } from '@/components/DataFrontier';
import { DiagnosticCTA } from '@/components/DiagnosticCTA';
import { FinalManifesto } from '@/components/FinalManifesto';
import { Footer } from '@/components/Footer';
import { FounderClose, FounderInterlude, FounderIntro } from '@/components/FounderVoice';
import { FounderOffer } from '@/components/FounderOffer';
import { Hero } from '@/components/Hero';
import { Manifesto } from '@/components/Manifesto';
import { Method } from '@/components/Method';
import { Navigation } from '@/components/Navigation';
import { Positioning } from '@/components/Positioning';
import { PrivateAI } from '@/components/PrivateAI';
import { SensitiveData } from '@/components/SensitiveData';
import { ShadowAI } from '@/components/ShadowAI';
import { TwoQuestions } from '@/components/TwoQuestions';
import { UseCases } from '@/components/UseCases';
import { GridOverlay } from '@/components/ui/GridOverlay';

/**
 * Ordre de lecture du document.
 *
 * L'humain parle avant la technologie (02), le raisonnement économique
 * s'établit (03 → 06), le risque de gouvernance est posé (07 → 11), une
 * dernière parole humaine précède l'infrastructure, qui n'arrive qu'en
 * conséquence (12). Les blocs sans numéro sont des pages de respiration.
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
        {/* 02 */} <FounderIntro />
        {/* 03 */} <Manifesto />
        {/* 04 */} <CostEquation />
        {/* 05 */} <CapaPointGraph />
        {/* 06 */} <Method />
        {/* 07 */} <ShadowAI />
        {/* 08 */} <DataFrontier />
        {/* 09 */} <SensitiveData />
        {/*    */} <Positioning />
        {/* 10 */} <TwoQuestions />
        {/* 11 */} <Architecture />
        {/*    */} <FounderInterlude />
        {/* 12 */} <PrivateAI />
        {/* 13 */} <UseCases />
        {/* 14 */} <CapacityComparison />
        {/* 15 */} <DiagnosticCTA />
        {/* 16 */} <FounderOffer />
        {/* 17 */} <FinalManifesto />
        {/*    */} <FounderClose />
      </main>

      <Footer />

      <GridOverlay />
    </>
  );
}
