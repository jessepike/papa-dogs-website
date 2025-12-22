import type { Metadata } from 'next';
import { Chonburi, Patrick_Hand, Montserrat } from 'next/font/google';
import './globals.css';
import { loadSiteContent } from '@/components/content-loader';

const displayFont = Chonburi({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  preload: true,
});

const handFont = Patrick_Hand({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-hand',
  display: 'swap',
  preload: true,
});

const bodyFont = Montserrat({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  preload: true,
});

// Load content at build time for metadata
const content = loadSiteContent();

export const metadata: Metadata = {
  metadataBase: new URL('https://papadogs.com'),
  title: {
    default: content.seo.title,
    template: `%s | ${content.seo.title}`,
  },
  description: content.seo.description,
  keywords: content.seo.keywords,
  authors: [{ name: 'Papa Dogs Taphouse & Deli' }],
  creator: 'Papa Dogs Taphouse & Deli',
  publisher: 'Papa Dogs Taphouse & Deli',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://papadogs.com',
    siteName: 'Papa Dogs Taphouse & Deli',
    title: content.seo.title,
    description: content.seo.description,
    images: [
      {
        url: content.carousel.images[0]?.src || '/images/carousel/trinami-1-zoom.png',
        width: 1200,
        height: 630,
        alt: content.carousel.images[0]?.alt || 'Papa Dogs signature Trinami sandwich',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: content.seo.title,
    description: content.seo.description,
    images: [content.carousel.images[0]?.src || '/images/carousel/trinami-1-zoom.png'],
  },
  alternates: {
    canonical: 'https://papadogs.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${displayFont.variable} ${handFont.variable} ${bodyFont.variable} min-h-screen bg-white font-body`}
      >
        {children}
      </body>
    </html>
  );
}
