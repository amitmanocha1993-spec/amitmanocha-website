import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://amitmanocha.co.in'),
  title: {
    template: '%s | Amit Manocha',
    default: 'Amit Manocha | Creative Designer & Author',
  },
  description: 'Amit Manocha - A.K.A. Aziim Dehlvi. Creative designer, author, and poet specializing in cinematic design, Urdu poetry, and literary works.',
  keywords: ['Amit Manocha', 'Aziim Dehlvi', 'Creative Designer', 'Author', 'Poet', 'Urdu Poetry', 'Cinematic Design', 'Literary Works', 'Portfolio'],
  authors: [{ name: 'Amit Manocha' }],
  creator: 'Amit Manocha',
  publisher: 'Amit Manocha',
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
  applicationName: 'Amit Manocha Portfolio',
  category: 'Portfolio',
  referrer: 'origin-when-cross-origin',
  alternates: {
    canonical: 'https://amitmanocha.co.in',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Amit Manocha | Creative Designer & Author',
    description: 'Amit Manocha - A.K.A. Aziim Dehlvi. Creative designer, author, and poet specializing in cinematic design, Urdu poetry, and literary works.',
    url: 'https://amitmanocha.co.in',
    siteName: 'Amit Manocha',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amit Manocha | Creative Designer & Author',
    description: 'Amit Manocha - A.K.A. Aziim Dehlvi. Creative designer, author, and poet specializing in cinematic design, Urdu poetry, and literary works.',
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@600;700&family=Playfair+Display:wght@500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;700&display=swap" rel="stylesheet" />
        <StructuredData />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />
      </body>
    </html>
  );
}
