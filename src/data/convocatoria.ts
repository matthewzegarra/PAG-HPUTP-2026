import { z } from 'astro/zod';

export const convocatoriaSchema = z
  .object({
    /**
     * Estado configurable de la convocatoria local en UTP:
     * - 'por-confirmar': No hay fechas ni enlaces verificados aún (estado por defecto).
     * - 'proximamente': Se ha anunciado el ciclo pero las inscripciones aún no abren.
     * - 'abierta': Inscripciones activas (requiere `url` verificada obligatoriamente).
     * - 'cerrada': La fase de inscripción local concluyó.
     */
    status: z.enum(['por-confirmar', 'proximamente', 'abierta', 'cerrada']),
    edition: z.string(),
    url: z.string().url().nullable(),
    openDate: z.string().nullable(),
    closeDate: z.string().nullable(),
    onCampusConfirmed: z.boolean(),
    localNote: z.string(),
    placeholderDateLabel: z.string(),
    placeholderLinkLabel: z.string(),
  })
  .superRefine((val, ctx) => {
    if (val.status === 'abierta' && !val.url) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['url'],
        message:
          'Si convocatoria.status es "abierta", debes proporcionar una URL de inscripción verificada en `convocatoria.url`.',
      });
    }
  });

export type ConvocatoriaConfig = z.infer<typeof convocatoriaSchema>;

export const convocatoria: ConvocatoriaConfig = convocatoriaSchema.parse({
  status: 'por-confirmar',
  edition: '2026/2027',
  url: null,
  openDate: null,
  closeDate: null,
  onCampusConfirmed: false,
  localNote:
    'La convocatoria local 2026/2027 y el cronograma de actividades en la Universidad Tecnológica del Perú se anunciarán exclusivamente a través de nuestros canales oficiales.',
  placeholderDateLabel: '[FECHA POR CONFIRMAR]',
  placeholderLinkLabel: '[ENLACE DE CONVOCATORIA POR CONFIRMAR]',
});

