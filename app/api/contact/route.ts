import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";
import { prisma } from "@/lib/prisma";
import { appointmentRequestSchema } from "@/lib/validations";
import { isRateLimited } from "@/lib/rateLimit";

export async function POST(request: NextRequest) {
  // Protección básica contra abuso: identificador por IP del request.
  const identifier =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown";

  if (isRateLimited(identifier)) {
    return NextResponse.json(
      { message: "Demasiadas solicitudes. Probá de nuevo en un minuto." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Solicitud inválida." },
      { status: 400 },
    );
  }

  try {
    const data = appointmentRequestSchema.parse(body);

    // Honeypot: si el campo oculto viene con contenido, es un bot.
    // Respondemos 200 sin guardar nada, para no delatar la protección.
    if (data.website) {
      return NextResponse.json({ ok: true });
    }

    await prisma.appointmentRequest.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        treatment: data.treatment,
        preferredDate: data.preferredDate ? new Date(data.preferredDate) : null,
        preferredTime: data.preferredTime || null,
        message: data.message || null,
      },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof ZodError) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of error.issues) {
        const key = issue.path[0]?.toString();
        if (key && !fieldErrors[key]) {
          fieldErrors[key] = issue.message;
        }
      }
      return NextResponse.json(
        { message: "Revisá los datos del formulario.", fieldErrors },
        { status: 400 },
      );
    }

    // No devolvemos detalles internos del error al cliente.
    console.error("[contact] error inesperado:", error);
    return NextResponse.json(
      { message: "No pudimos procesar tu solicitud. Intentá más tarde." },
      { status: 500 },
    );
  }
}
