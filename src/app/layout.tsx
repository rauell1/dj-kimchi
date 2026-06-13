import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://djkimchi.vercel.app";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "DJ Kimchi",
      url: BASE_URL,
      jobTitle: "DJ",
      description:
        "The baddest DJ from East and Central Africa. Specializing in Afrobeats, Amapiano, Gengetone, and Dancehall.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nairobi",
        addressCountry: "KE",
      },
      knowsAbout: ["Afrobeats", "Amapiano", "Gengetone", "Dancehall", "Club Music"],
      sameAs: [
        "https://www.instagram.com/dj_kimchii/",
        "https://www.youtube.com/@djkimchi254",
        "https://www.facebook.com/djkimchii/",
        "https://www.mixcloud.com/djkimchii254/",
        "https://hearthis.at/djkimchii254-ja/",
      ],
    },
    {
      "@type": "MusicGroup",
      "@id": `${BASE_URL}/#musicgroup`,
      name: "DJ Kimchi",
      url: BASE_URL,
      genre: ["Afrobeats", "Amapiano", "Gengetone", "Dancehall"],
      foundingLocation: {
        "@type": "Place",
        name: "Nairobi, Kenya",
      },
      member: {
        "@type": "Role",
        member: { "@id": `${BASE_URL}/#person` },
        roleName: "DJ",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "DJ Kimchi",
      description:
        "Official website of DJ Kimchi — Nairobi's premier DJ for Afrobeats, Amapiano, Gengetone, and Dancehall events.",
      publisher: { "@id": `${BASE_URL}/#person` },
      potentialAction: {
        "@type": "SearchAction",
        target: `${BASE_URL}/#bookings`,
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "DJ Kimchi | Afrobeats, Amapiano, Gengetone | Nairobi's Hottest DJ",
  description:
    "DJ Kimchi - The baddest DJ from East and Central Africa. Specializing in Afrobeats, Amapiano, Gengetone, Dancehall, and Club Bangers. Book DJ Kimchi for your next event in Nairobi, Kenya.",
  keywords: [
    "DJ Kimchi",
    "DJ in Nairobi",
    "Kenyan DJ",
    "DJ for hire Kenya",
    "Afrobeats DJ",
    "Amapiano DJ",
    "Gengetone DJ",
    "Nairobi DJ",
    "Club DJ Kenya",
    "DJ Kimchi 254",
    "Nairobi nightlife",
    "Kenyan DJ booking",
    "Arbantone DJ",
    "East African DJ",
  ],
  authors: [{ name: "DJ Kimchi" }],
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    google: "e69e3a7319b06c7f",
    other: {
      "msvalidate.01": "66CE208CF02793B41D19362E121494C6",
    },
  },
  openGraph: {
    title: "DJ Kimchi | Nairobi's Premier DJ",
    description:
      "Experience the electrifying sound of DJ Kimchi - Afrobeats, Amapiano, Dancehall & Club Anthems. The baddest DJ from East and Central Africa.",
    type: "website",
    url: BASE_URL,
    siteName: "DJ Kimchi",
    locale: "en_KE",
  },
  twitter: {
    card: "summary_large_image",
    title: "DJ Kimchi | Nairobi's Premier DJ",
    description:
      "Afrobeats, Amapiano, Dancehall & Club Anthems. Book DJ Kimchi for your next event.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="dj-kimchi-theme"
        >
          {children}
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
