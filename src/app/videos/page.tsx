import type { Metadata } from "next";
import { ErrorBoundary } from "@/components/error-boundary";
import { VideosSection } from "@/components/site/videos";
import { BASE_URL } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "DJ Kimchi Videos | Live Sets & Nairobi DJ Performances",
  description:
    "Watch DJ Kimchi's recorded sets, live performances and Kenyan music affairs. Afrobeats, Dancehall, Gengetone and mashups straight from the Nairobi decks.",
  alternates: { canonical: `${BASE_URL}/videos` },
  openGraph: {
    title: "DJ Kimchi Videos | Live Sets from Nairobi",
    description:
      "Recorded sets, Kenyan music affairs and mashups. All straight from the Nairobi decks.",
    url: `${BASE_URL}/videos`,
    type: "video.other",
  },
};

export default function VideosPage() {
  return (
    <ErrorBoundary>
      <VideosSection />
    </ErrorBoundary>
  );
}
