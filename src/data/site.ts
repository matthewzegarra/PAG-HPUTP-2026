import { z } from 'astro/zod';

export const siteSchema = z.object({
  officialName: z.string(),
  shortName: z.string(),
  universityFullName: z.string(),
  universityShortName: z.string(),
  edition: z.string(),
  concept: z.string(),
  siteUrl: z.string(),
  domainConfirmed: z.boolean(),
  seo: z.object({
    title: z.string(),
    description: z.string(),
    locale: z.string(),
    ogImage: z.string(),
  }),
  channels: z.object({
    instagram: z.object({
      url: z.string().url(),
      handle: z.string(),
      label: z.string(),
    }),
    linkedin: z.object({
      url: z.string().url(),
      handle: z.string(),
      label: z.string(),
      note: z.string(),
    }),
    globalWeb: z.object({
      url: z.string().url(),
      howItWorks: z.string().url(),
      aboutUs: z.string().url(),
      competition: z.string().url(),
      register: z.string().url(),
    }),
  }),
  contact: z.object({
    /**
     * Correo oficial de contacto local.
     * Mantener en `null` hasta que el equipo de Hult Prize at UTP lo confirme.
     * Si es `null`, no se renderiza ningún enlace mailto: en la interfaz.
     */
    email: z.string().email().nullable(),
    emailPlaceholder: z.string(),
  }),
});

export type SiteConfig = z.infer<typeof siteSchema>;

export const site: SiteConfig = siteSchema.parse({
  officialName: 'EF Hult Prize at Universidad Tecnológica del Perú',
  shortName: 'Hult Prize at UTP',
  universityFullName: 'Universidad Tecnológica del Perú',
  universityShortName: 'UTP',
  edition: 'Edición 2026/2027',
  concept: 'Ideas que se convierten en impacto.',
  // Marcador explícito mientras se confirma el dominio definitivo de producción
  siteUrl: 'https://hultprize-utp.org',
  domainConfirmed: false,
  seo: {
    title:
      'EF Hult Prize at Universidad Tecnológica del Perú | Emprendimiento social universitario',
    description:
      'Comunidad de EF Hult Prize en la Universidad Tecnológica del Perú (UTP). Descubre cómo convertir ideas en startups con impacto social y ambiental, y conoce la ruta de la competencia global.',
    locale: 'es_PE',
    ogImage: '/og/og-default.png',
  },
  channels: {
    instagram: {
      url: 'https://www.instagram.com/hultprize_utp/',
      handle: '@hultprize_utp',
      label: 'Instagram oficial de Hult Prize at UTP',
    },
    linkedin: {
      url: 'https://www.linkedin.com/in/hultprize-utp/',
      handle: '/in/hultprize-utp',
      label: 'LinkedIn oficial de Hult Prize at UTP',
      note: 'URL oficial indicada en la documentación del proyecto.',
    },
    globalWeb: {
      url: 'https://www.hultprize.org/',
      howItWorks: 'https://www.hultprize.org/how-it-works',
      aboutUs: 'https://www.hultprize.org/about-us',
      competition: 'https://www.hultprize.org/en/competition/',
      register: 'https://www.hultprize.org/register',
    },
  },
  contact: {
    email: null,
    emailPlaceholder: '[CORREO OFICIAL POR CONFIRMAR]',
  },
});

