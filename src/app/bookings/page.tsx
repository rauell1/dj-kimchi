import type { Metadata } from "next";
import { ErrorBoundary } from "@/components/error-boundary";
import { BookingsSection } from "@/components/site/bookings";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://dj-kimchi.rauell.systems";

export const metadata: Metadata = {
  title: "Book DJ Kimchi | Hire a DJ in Nairobi Kenya for Events",
  description:
    "Book DJ Kimchi for your event in Nairobi. Available for club nights, private parties, weddings, festivals, corporate events and radio shows across Kenya.",
  alternates: { canonical: `${BASE_URL}/bookings` },
  openGraph: {
    title: "Book DJ Kimchi | Nairobi's Premier DJ for Hire",
    description:
      "Bring the Nairobi heat to your event. Clubs, festivals, private parties and corporate nights across Kenya.",
    url: `${BASE_URL}/bookings`,
    type: "website",
  },
};

export default function BookingsPage() {
  return (
    <ErrorBoundary>
      <BookingsSection />
    </ErrorBoundary>
  );
}
