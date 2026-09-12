import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Mentions légales — CAPA',
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <LegalPage
      index="A1"
      label="Mentions légales"
      title="Mentions légales."
      fields={[
        { label: 'Éditeur du site' },
        { label: 'Forme juridique' },
        { label: 'Siège social' },
        { label: 'SIREN / SIRET' },
        { label: 'Numéro de TVA' },
        { label: 'Responsable de la publication' },
        { label: 'Contact', value: 'contact@capa.fr' },
        { label: 'Hébergeur' },
      ]}
      note="Ce document est un gabarit. Les informations légales doivent être renseignées avant la mise en ligne publique du site."
    />
  );
}
