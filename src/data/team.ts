import { z } from 'astro/zod';

export const teamMemberSchema = z.object({
  name: z.string().min(2),
  role: z.string().min(2),
  photo: z.string().optional(),
  linkedinUrl: z.string().url().optional(),
  verifiedSource: z.string().min(3),
});

export const teamAreaSchema = z.object({
  id: z.string(),
  number: z.string(),
  officialName: z.enum([
    'Startups',
    'Judges & Experts',
    'Events',
    'Marketing & Media',
    'Partnerships & Sponsorships',
  ]),
  focusTag: z.string(),
  description: z.string(),
  members: z.array(teamMemberSchema),
});

export type TeamMember = z.infer<typeof teamMemberSchema>;
export type TeamArea = z.infer<typeof teamAreaSchema>;

/**
 * Composición del equipo organizador 2026/2027.
 * Regla editorial: No inventar integrantes, cargos, fotos ni biografías.
 * Mientras los nombres de la edición 2026/2027 no estén confirmados con fuente verificable,
 * `members` permanece vacío y la interfaz presenta las 5 áreas oficiales de trabajo.
 */
export const teamAreas: TeamArea[] = z.array(teamAreaSchema).parse([
  {
    id: 'startups',
    number: '01',
    officialName: 'Startups',
    focusTag: 'Equipos y proyectos',
    description:
      'Acompañamiento, seguimiento y preparación de los equipos participantes durante su ruta de validación y desarrollo.',
    members: [],
  },
  {
    id: 'judges-experts',
    number: '02',
    officialName: 'Judges & Experts',
    focusTag: 'Mentoría y evaluación',
    description:
      'Conexión con especialistas, mentores y evaluadores que aportan criterio técnico, retroalimentación e industria.',
    members: [],
  },
  {
    id: 'events',
    number: '03',
    officialName: 'Events',
    focusTag: 'Experiencias en campus y digitales',
    description:
      'Planificación y ejecución de experiencias, talleres formativos, sesiones de práctica y actividades de la comunidad.',
    members: [],
  },
  {
    id: 'marketing-media',
    number: '04',
    officialName: 'Marketing & Media',
    focusTag: 'Comunicación y marca',
    description:
      'Estrategia de contenidos, aplicación de la identidad visual oficial y difusión en los canales de la comunidad.',
    members: [],
  },
  {
    id: 'partnerships-sponsorships',
    number: '05',
    officialName: 'Partnerships & Sponsorships',
    focusTag: 'Ecosistema y alianzas',
    description:
      'Alianzas institucionales y relaciones con organizaciones colaboradoras que impulsan la innovación universitaria.',
    members: [],
  },
]);

export const campusLeadership = {
  campusDirector: null as TeamMember | null,
  statusLabel: '[COMPOSICIÓN NOMINAL 2026/2027 POR CONFIRMAR]',
  policyNote:
    'Política de imparcialidad EF Hult Prize: los Campus Directors y miembros del comité organizador no pueden competir en el programa de su propio campus (pueden postular vía Open Application indicando su rol).',
};

