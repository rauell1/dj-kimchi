const FALLBACK = "https://dj-kimchi.rauell.systems";

function validateSiteUrl(raw: string | undefined): string {
  if (!raw) return FALLBACK;
  try {
    const u = new URL(raw);
    // Must be http/https and have a real hostname
    if (!["http:", "https:"].includes(u.protocol)) return FALLBACK;
    return raw.replace(/\/$/, ""); // strip trailing slash for consistency
  } catch {
    return FALLBACK;
  }
}

export const BASE_URL = validateSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
