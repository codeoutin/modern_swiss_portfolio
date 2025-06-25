import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

import "./globals.css";
import { ThemeProvider } from "./provider";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Patrick Steger - Senior Full-Stack Developer Zürich | CHF 150/h",
  description: "Professionelle Softwareentwicklung in Zürich. Senior Full-Stack Developer mit Enterprise-Erfahrung bei Sly AG. Spezialisiert auf React, Next.js, Node.js. Verfügbar für 1-2 Tage/Woche. Transparente Preise ab CHF 150/h.",
  keywords: "Full-Stack Developer Zürich, Softwareentwicklung Schweiz, React Developer, Next.js Entwickler, TypeScript Programmierer, Enterprise Softwareentwicklung, Freelancer Zürich, Web Development Switzerland",
  authors: [{ name: "Patrick Steger" }],
  creator: "Patrick Steger",
  publisher: "Patrick Steger",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://psteger.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Patrick Steger - Senior Full-Stack Developer Zürich",
    description: "Professionelle Softwareentwicklung in Zürich. Enterprise-Erfahrung, moderne Tech-Stack, transparente Preise.",
    url: 'https://psteger.com',
    siteName: 'Patrick Steger Portfolio',
    locale: 'de_CH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Patrick Steger - Senior Full-Stack Developer Zürich",
    description: "Professionelle Softwareentwicklung in Zürich. Enterprise-Erfahrung, moderne Tech-Stack, transparente Preise.",
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-inter">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <StructuredData />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
