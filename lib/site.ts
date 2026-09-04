/**
 * Devuelve la URL pública del sitio de forma segura.
 *
 * Si NEXT_PUBLIC_SITE_URL no está definida, está vacía, o tiene un valor
 * que no es una URL válida (por ejemplo, sin "https://" adelante), cae a
 * un valor por defecto en lugar de romper el build con "Invalid URL".
 */
function resolveSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (raw) {
    try {
      // eslint-disable-next-line no-new
      new URL(raw);
      return raw;
    } catch {
      console.warn(
        `NEXT_PUBLIC_SITE_URL ("${raw}") no es una URL válida. ` +
          `Usando el valor por defecto. Revisá que tenga el formato ` +
          `https://tu-dominio.com (con protocolo, sin espacios).`,
      );
    }
  }

  return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl();
