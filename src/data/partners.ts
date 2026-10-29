import { z } from 'astro/zod';

export const partnerSchema = z
  .object({
    id: z.string(),
    name: z.string().min(2),
    /**
     * Regla editorial: No presentar a una organización como patrocinadora (`sponsor`)
     * si la fuente solo confirma una colaboración o alianza (`ally` / `collaborator`).
     */
    type: z.enum(['ally', 'collaborator', 'sponsor']),
    typeLabel: z.enum(['Aliado', 'Colaborador', 'Patrocinador']),
    logoPath: z.string().min(1),
    url: z.string().url().optional(),
    verifiedSource: z.string().min(5),
    logoAuthorized: z.literal(true),
  })
  .superRefine((val, ctx) => {
    if (val.type === 'sponsor' && val.typeLabel !== 'Patrocinador') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['typeLabel'],
        message: 'El tipo sponsor requiere typeLabel "Patrocinador" y fuente verificada.',
      });
    }
  });

export type PartnerItem = z.infer<typeof partnerSchema>;

/**
 * Lista de organizaciones aliadas verificadas para la edición 2026/2027.
 * Permanece vacía hasta contar con confirmación oficial y autorización de uso de logotipo.
 */
export const partners: PartnerItem[] = z.array(partnerSchema).parse([]);

export const collaborationFormats = [
  {
    title: 'Mentoría y especialistas',
    description:
      'Profesionales, fundadores y docentes que deseen compartir criterio con equipos estudiantiles en sesiones formativas o paneles de evaluación.',
  },
  {
    title: 'Alianzas de ecosistema',
    description:
      'Incubadoras, comunidades tecnológicas, laboratorios de innovación y organizaciones que conecten talento universitario con oportunidades reales.',
  },
  {
    title: 'Colaboración institucional',
    description:
      'Organizaciones interesadas en articular iniciativas conjuntas, recursos educativos o apoyo para las actividades de la edición 2026/2027.',
  },
] as const;

