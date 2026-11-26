// Liveness check for uptime monitors. Static, so it is served from cache
// without rendering anything.
export const dynamic = "force-static";

export function GET() {
  return Response.json({ status: "ok" }, { headers: { "Cache-Control": "no-store" } });
}
