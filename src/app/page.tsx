import { ErrorBoundary } from "@/components/error-boundary";
import { HeroSection } from "@/components/site/hero";

export default function HomePage() {
  return (
    <ErrorBoundary>
      <HeroSection />
    </ErrorBoundary>
  );
}
