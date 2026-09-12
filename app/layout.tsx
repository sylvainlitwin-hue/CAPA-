import type { Metadata, Viewport } from 'next';
import { Inter_Tight, IBM_Plex_Mono } from 'next/font/google';

import './globals.css';
import { meta } from '@/content/site';

/**
 * Deux familles, pas plus.
 * — Inter Tight : néo-grotesque libre, proche des grotesques suisses
 *   (Univers / Neue Haas) utilisées par le design corporate de l'époque.
 * — IBM Plex Mono : chiffres, annotations, repères, codes.
 */
const grotesk = Inter_Tight({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
  variable: '--font-grotesk',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  metadataBase: new URL(meta.url),
  openGraph: {
    title: meta.title,
    description: meta.description,
    locale: meta.locale,
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#F2EFE6',
  colorScheme: 'light',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${grotesk.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">
        {/*
          Filet de sécurité : sans JavaScript, les apparitions par masque sont
          neutralisées et le document reste intégralement lisible.
          (Si le script tourne mais qu'IntersectionObserver manque, le hook
          useInView affiche tout de suite — voir lib/useInView.ts.)
        */}
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              '<style>.reveal,.draw-x,.draw-y{clip-path:none!important;opacity:1!important;transform:none!important;transition:none!important}</style>',
          }}
        />
        {children}
      </body>
    </html>
  );
}
