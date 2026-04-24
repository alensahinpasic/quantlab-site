import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'CEU Quant Lab',
    template: '%s | CEU Quant Lab',
  },
  description:
    'CEU Quant Lab is a structured analytical platform for projects, articles, and events across data, finance, and business.',
  keywords: [
    'CEU Quant Lab',
    'Central European University',
    'quantitative finance',
    'applied projects',
    'finance student society',
    'business strategy',
    'articles',
    'CEU',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'CEU Quant Lab',
    title: 'CEU Quant Lab',
    description:
      'Projects, articles, and events focused on applied analysis across data, finance, and business.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
