# Imágenes

El sitio usa temporalmente imágenes de stock (Unsplash) referenciadas por URL
directamente en los componentes (`components/hero.tsx` y `components/about.tsx`),
para no depender de archivos locales que aún no existen.

Para usar imágenes propias:

1. Colocá los archivos acá, por ejemplo `public/images/hero-clinic.jpg`.
2. En el componente correspondiente, reemplazá el `src="https://images..."` por
   `src="/images/hero-clinic.jpg"`.
3. Next/Image optimiza automáticamente el archivo local, sin configuración
   adicional.

Recomendado: usar fotos reales de la clínica (fachada, consultorio, equipo)
en formato `.jpg` o `.webp`, idealmente de al menos 1600px de ancho.
