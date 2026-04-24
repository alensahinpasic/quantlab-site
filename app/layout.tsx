import type { Metadata } from 'next';
import { Inter, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-instrument',
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'CEU Quant Lab',
    template: '%s | CEU Quant Lab',
  },
  description:
    'CEU Quant Lab is a student-led applied finance and data research initiative at Central European University. We bridge academic learning and real-world finance through research, events, and industry engagement.',
  keywords: [
    'CEU Quant Lab',
    'Central European University',
    'quantitative finance',
    'applied research',
    'finance student society',
    'data science',
    'market research',
    'CEU',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'CEU Quant Lab',
    title: 'CEU Quant Lab',
    description:
      'Applied finance, data science, and market research at Central European University.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
