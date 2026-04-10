import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { isResendConfigured } from "@/lib/resend";

export async function GET() {
  const startTime = Date.now();
  let dbStatus: "connected" | "error" = "connected";
  let dbLatencyMs = 0;

  try {
    const dbStart = Date.now();
    await db.$queryRaw`SELECT 1 as ok`;
    dbLatencyMs = Date.now() - dbStart;
  } catch {
    dbStatus = "error";
  }

  const totalMs = Date.now() - startTime;
  const isHealthy = dbStatus === "connected";

  return NextResponse.json(
    {
      status: isHealthy ? "ok" : "degraded",
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      responseTimeMs: totalMs,
      services: {
        database: {
          status: dbStatus,
          latencyMs: dbLatencyMs,
        },
        email: {
          provider: "resend",
          status: isResendConfigured() ? "configured" : "not_configured",
        },
      },
    },
    {
      status: isHealthy ? 200 : 503,
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    }
  );
}
