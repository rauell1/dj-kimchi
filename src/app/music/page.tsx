import type { Metadata } from "next";
import { ErrorBoundary } from "@/components/error-boundary";
import { MusicSection } from "@/components/site/music";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://dj-kimchi.rauell.systems";

export const metadata: Metadata = {
  title: "DJ Kimchi Mixes | Afrobeats, Amapiano & Gengetone Mixes Nairobi",
  description:
    "Stream DJ Kimchi's latest mixes — Afrobeats, Amapiano, Gengetone, Dancehall and open-format bangers. Available on Mixcloud and HearThis.at.",
  alternates: { canonical: `${BASE_URL}/music` },
  openGraph: {
    title: "DJ Kimchi Mixes | Latest Afrobeats & Amapiano Sets",
    description:
      "Stream the hottest mixes from Nairobi. Afrobeats, Amapiano, Gengetone, Dancehall — always fresh, always fire.",
    url: `${BASE_URL}/music`,
    type: "music.playlist",
  },
};

export default function MusicPage() {
  return (
    <ErrorBoundary>
      <MusicSection />
    </ErrorBoundary>
  );
}
