import { z } from 'astro/zod';

export const journeyStageSchema = z.object({
  step: z.string(),
  officialName: z.enum([
    'Qualifiers',
    'Nationals',
    'Digital Incubator',
    'Global Accelerator',
    'Global Finals',
  ]),
  referenceWindow: z.string(),
  summary: z.string(),
  details: z.string(),
  highlight: z.string(),
  source: z.string().url(),
  checkedAt: z.literal('2026-10-29'),
});

export type JourneyStage = z.infer<typeof journeyStageSchema>;

export const journeyStages: JourneyStage[] = z.array(journeyStageSchema).parse([
  {
    step: '01',
    officialName: 'Qualifiers',
    referenceWindow: 'Septiembre – Febrero (referencia global)',
    summary: 'El punto de partida: competencias en campus o postulación abierta.',
    details:
      'Los equipos de 2 a 4 estudiantes presentan su idea de negocio con impacto. Si la universidad organiza un programa local on-campus, compiten allí; de lo contrario, pueden postular mediante la Open Application.',
    highlight: 'Vía On-Campus o Open Application',
    source: 'https://www.hultprize.org/en/competition/',
    checkedAt: '2026-10-29',
  },
  {
    step: '02',
    officialName: 'Nationals',
    referenceWindow: 'Abril – Mayo (referencia global)',
    summary: 'Selección nacional o proceso regional equivalente en línea.',
    details:
      'Los equipos clasificados defienden la viabilidad de su modelo, ajuste producto-mercado y estrategia de entrada al mercado frente a jurados especializados.',
    highlight: 'Competencia nacional o selección online',
    source: 'https://www.hultprize.org/en/competition/',
    checkedAt: '2026-10-29',
  },
  {
    step: '03',
    officialName: 'Digital Incubator',
    referenceWindow: 'Junio – Julio (referencia global)',
    summary: 'Incubación digital intensiva con mentores y recursos globales.',
    details:
      'Los ganadores nacionales y mejores postulantes online validan su ajuste producto-mercado, construyen pruebas de concepto (PoC), desarrollan su MVP y afinan su estrategia comercial.',
    highlight: 'Validación de MVP y tracción inicial',
    source: 'https://www.hultprize.org/en/competition/',
    checkedAt: '2026-10-29',
  },
  {
    step: '04',
    officialName: 'Global Accelerator',
    referenceWindow: 'Agosto (referencia global)',
    summary: 'Un mes de aceleración presencial en Ashridge House, Londres.',
    details:
      'Las startups seleccionadas de la incubadora reciben mentoría intensiva, talleres con expertos de la industria y preparación directa para presentar ante inversionistas.',
    highlight: 'Residencia en Ashridge House, Reino Unido',
    source: 'https://www.hultprize.org/en/competition/',
    checkedAt: '2026-10-29',
  },
  {
    step: '05',
    officialName: 'Global Finals',
    referenceWindow: 'Septiembre (referencia global)',
    summary: 'Pitch final ante un panel internacional por US$1,000,000 en capital semilla.',
    details:
      'Los equipos finalistas presentan su startup en el escenario global. Un equipo obtiene US$1M USD en inversión semilla para lanzar y escalar su empresa social.',
    highlight: 'Premio global: US$1M en inversión semilla',
    source: 'https://www.hultprize.org/en/competition/',
    checkedAt: '2026-10-29',
  },
]);

export const eligibilityCriteria = {
  source: 'https://www.hultprize.org/how-it-works',
  checkedAt: '2026-10-29' as const,
  requirements: [
    'Equipos de 2 a 4 estudiantes.',
    'Tener al menos 18 años de edad al momento del registro.',
    'Estar matriculados en un programa conducente a grado o título (pregrado o posgrado).',
    'Proponer una empresa con fines de lucro (for-profit) que apoye directamente al menos un Objetivo de Desarrollo Sostenible (ODS) de la ONU.',
  ],
  deliverables: [
    'Video de Pitch de 4 minutos (enlace de YouTube).',
    'Pitch Deck en formato PDF.',
    'Startup One-Pager en PDF utilizando la plantilla oficial.',
    'Idioma oficial: todas las entregas y fases oficiales de la competencia se realizan en inglés.',
  ],
  scorecardPillars: [
    'Innovación e impacto (Innovation and impact)',
    'Viabilidad del modelo de negocio (Business model viability)',
    'Ejecución y tracción (Execution and traction)',
    'Fortaleza del equipo y liderazgo (Team strength and leadership)',
  ],
  disclaimer:
    'La progresión entre etapas depende del cumplimiento de requisitos y de los resultados de evaluación en cada fase. El calendario corresponde al ciclo global publicado por EF Hult Prize y puede estar sujeto a actualizaciones oficiales.',
};

