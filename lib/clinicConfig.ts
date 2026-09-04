/**
 * clinicConfig.ts
 * -----------------------------------------------------------------------
 * Único lugar donde hay que tocar datos para "poner en marcha" el sitio
 * con la información real de la clínica: nombre, contacto, horarios,
 * redes sociales y tratamientos ofrecidos.
 *
 * Todo lo marcado como PLACEHOLDER debe reemplazarse antes de publicar.
 * -----------------------------------------------------------------------
 */

export const clinicConfig = {
  name: "Clínica Vía Dental", // PLACEHOLDER — nombre real de la clínica
  shortName: "Vía Dental",
  tagline: "Odontología integral con criterio clínico y trato cercano",

  contact: {
    phone: "+54 11 5555-0000", // PLACEHOLDER
    phoneDisplay: "(011) 5555-0000",
    whatsapp: "5491155550000", // PLACEHOLDER — solo dígitos, con código de país
    email: "hola@viadental.example", // PLACEHOLDER
    address: "Av. Ejemplo 1234, Piso 3, CABA, Argentina", // PLACEHOLDER
    mapsUrl: "https://maps.google.com/?q=Av.+Ejemplo+1234", // PLACEHOLDER
  },

  hours: [
    { day: "Lunes a viernes", time: "9:00 – 20:00" },
    { day: "Sábados", time: "9:00 – 13:00" },
    { day: "Domingos", time: "Cerrado" },
  ],

  social: {
    instagram: "https://instagram.com/viadental", // PLACEHOLDER
    facebook: "https://facebook.com/viadental", // PLACEHOLDER
  },

  nav: [
    { label: "Inicio", href: "#inicio" },
    { label: "Tratamientos", href: "#tratamientos" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Profesionales", href: "#profesionales" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Contacto", href: "#contacto" },
  ],

  treatments: [
    {
      slug: "odontologia-general",
      name: "Odontología general",
      shortDescription:
        "Control, diagnóstico y tratamiento de las afecciones más frecuentes de boca y dientes.",
    },
    {
      slug: "ortodoncia",
      name: "Ortodoncia",
      shortDescription:
        "Alineadores y brackets para corregir la posición dentaria a cualquier edad.",
    },
    {
      slug: "implantes",
      name: "Implantes dentales",
      shortDescription:
        "Reemplazo de piezas perdidas con implantes de titanio y planificación digital.",
    },
    {
      slug: "blanqueamiento",
      name: "Blanqueamiento dental",
      shortDescription:
        "Aclarado seguro y progresivo realizado y supervisado por profesionales.",
    },
    {
      slug: "estetica-dental",
      name: "Estética dental",
      shortDescription:
        "Carillas y diseño de sonrisa para armonizar forma, color y proporción.",
    },
    {
      slug: "limpieza-dental",
      name: "Limpieza dental",
      shortDescription:
        "Remoción de placa y sarro para prevenir caries y enfermedad de encías.",
    },
    {
      slug: "odontopediatria",
      name: "Odontopediatría",
      shortDescription:
        "Atención pensada para las infancias, en un ambiente tranquilo y didáctico.",
    },
  ],

  // Datos ficticios — reemplazar por profesionales reales antes de publicar.
  team: [
    {
      name: "Dra. Lucía Fernández", // PLACEHOLDER
      role: "Odontóloga general y estética",
      bio: "Más de 10 años de práctica clínica enfocada en diseño de sonrisa.",
      experience: "10+ años de experiencia",
    },
    {
      name: "Dr. Martín Rovira", // PLACEHOLDER
      role: "Especialista en implantes",
      bio: "Formación en rehabilitación oral e implantología guiada por computadora.",
      experience: "12+ años de experiencia",
    },
    {
      name: "Dra. Carla Núñez", // PLACEHOLDER
      role: "Ortodoncista",
      bio: "Se especializa en alineadores transparentes y ortodoncia infantil.",
      experience: "8+ años de experiencia",
    },
  ],

  // Testimonios de ejemplo — marcados explícitamente como contenido placeholder.
  testimonials: [
    {
      name: "Paciente de ejemplo",
      quote:
        "Contenido de ejemplo (placeholder): reemplazar por una reseña real de un paciente.",
      treatment: "Ortodoncia",
    },
    {
      name: "Paciente de ejemplo",
      quote:
        "Contenido de ejemplo (placeholder): reemplazar por una reseña real de un paciente.",
      treatment: "Implantes",
    },
    {
      name: "Paciente de ejemplo",
      quote:
        "Contenido de ejemplo (placeholder): reemplazar por una reseña real de un paciente.",
      treatment: "Estética dental",
    },
  ],
} as const;

export type ClinicConfig = typeof clinicConfig;
