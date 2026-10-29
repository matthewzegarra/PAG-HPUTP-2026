import { z } from 'astro/zod';

export const activitySchema = z.object({
  id: z.string().min(2),
  title: z.string().min(4),
  description: z.string().min(10),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Usa formato ISO YYYY-MM-DD'),
  status: z.enum(['proximamente', 'inscripciones-abiertas', 'realizado', 'por-confirmar']),
  url: z.string().url(),
  verifiedSource: z.string().url(),
  image: z.string().optional(),
  imageAlt: z.string().optional(),
});

export type ActivityItem = z.infer<typeof activitySchema>;

/**
 * Actividades y eventos locales verificados de Hult Prize at UTP 2026/2027.
 * Regla editorial: No inventar eventos para llenar tarjetas. Mientras no existan
 * actividades confirmadas para el ciclo actual, la lista permanece vacía y la
 * sección Comunidad muestra la presentación editorial y enlaces a redes oficiales.
 */
export const activities: ActivityItem[] = z.array(activitySchema).parse([]);
