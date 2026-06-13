import type { Metadata } from "next";
import { ErrorBoundary } from "@/components/error-boundary";
import { AboutSection } from "@/components/site/about";
import { BASE_URL } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "About DJ Kimchi | Nairobi's Baddest DJ from East & Central Africa",
  description:
    "DJ Kimchi — media DJ, radio host, and club resident from Nairobi. 8+ years on the decks, VCUT Radio live show, specialising in Afrobeats, Amapiano, Gengetone and Dancehall.",
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    title: "About DJ Kimchi | East & Central Africa's Premier DJ",
    description:
      "The baddest DJ from East & Central Africa. Fusing Afrobeats, Amapiano, Gengetone & Dancehall. Based in Nairobi, Kenya.",
    url: `${BASE_URL}/about`,
    type: "profile",
  },
};

export default function AboutPage() {
  return (
    <ErrorBoundary>
      <AboutSection />
    </ErrorBoundary>
  );
}
