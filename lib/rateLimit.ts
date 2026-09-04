/**
 * Rate limiter en memoria, simple y sin dependencias externas.
 *
 * Nota: en un entorno serverless con múltiples instancias, este contador
 * no se comparte entre instancias, por lo que ofrece una protección básica
 * (no reemplaza un rate limiting real como el de Upstash/Redis si el
 * tráfico crece). Es suficiente como primera barrera contra spam simple.
 */

const WINDOW_MS = 60_000; // 1 minuto
const MAX_REQUESTS = 5;

const hits = new Map<string, { count: number; resetAt: number }>();

export function isRateLimited(identifier: string): boolean {
  const now = Date.now();
  const entry = hits.get(identifier);

  if (!entry || now > entry.resetAt) {
    hits.set(identifier, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  if (entry.count >= MAX_REQUESTS) {
    return true;
  }

  entry.count += 1;
  return false;
}
