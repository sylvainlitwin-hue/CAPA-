import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Confidentialité — CAPA',
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <LegalPage
      index="A2"
      label="Confidentialité"
      title="Données et confidentialité."
      fields={[
        { label: 'Responsable de traitement' },
        {
          label: 'Données collectées',
          value:
            'Les réponses au diagnostic et les coordonnées transmises volontairement via le formulaire.',
        },
        {
          label: 'Finalité',
          value:
            'Évaluer le potentiel économique d’un projet d’intelligence artificielle et reprendre contact.',
        },
        { label: 'Durée de conservation' },
        { label: 'Sous-traitants et outils' },
        {
          label: 'Vos droits',
          value:
            'Accès, rectification, effacement, opposition et portabilité, sur simple demande écrite.',
        },
        { label: 'Contact', value: 'contact@capa.fr' },
      ]}
      note="Ce document est un gabarit. Le détail des traitements doit être renseigné avant la mise en ligne publique du site, en cohérence avec le formulaire de diagnostic effectivement utilisé."
    />
  );
}
