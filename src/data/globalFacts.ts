import { z } from 'astro/zod';

export const globalFactSchema = z.object({
  id: z.string(),
  figure: z.string(),
  label: z.string(),
  detail: z.string(),
  source: z.string().url(),
  checkedAt: z.literal('2026-10-29'),
});

export type GlobalFact = z.infer<typeof globalFactSchema>;

export const globalFacts: GlobalFact[] = z.array(globalFactSchema).parse([
  {
    id: 'seed-funding',
    figure: 'US$1M',
    label: 'en inversión semilla',
    detail: 'Otorgados al equipo ganador de la Global Final para escalar su startup social.',
    source: 'https://www.hultprize.org/how-it-works',
    checkedAt: '2026-10-29',
  },
  {
    id: 'countries',
    figure: '130+',
    label: 'países participantes',
    detail: 'Red global de estudiantes, mentores, especialistas y líderes de impacto.',
    source: 'https://www.hultprize.org/about-us',
    checkedAt: '2026-10-29',
  },
  {
    id: 'history',
    figure: 'Desde 2010',
    label: 'impulsando fundadores',
    detail: 'Más de una década transformando ideas estudiantiles en empresas reales.',
    source: 'https://www.hultprize.org/about-us',
    checkedAt: '2026-10-29',
  },
  {
    id: 'sdg-focus',
    figure: '≥ 1 ODS',
    label: 'de las Naciones Unidas',
    detail: 'Toda propuesta debe ser con fines de lucro y apoyar directamente al menos un ODS.',
    source: 'https://www.hultprize.org/how-it-works',
    checkedAt: '2026-10-29',
  },
]);

export const introPillars = [
  {
    number: '01',
    title: 'Emprender con propósito',
    description:
      'Diseña empresas con fines de lucro donde el crecimiento económico impulsa un impacto social o ambiental medible.',
  },
  {
    number: '02',
    title: 'Diseñar soluciones sostenibles',
    description:
      'Aplica pensamiento de diseño y validación real para responder a desafíos alineados con los Objetivos de Desarrollo Sostenible (ODS).',
  },
  {
    number: '03',
    title: 'Convertir ideas en acción',
    description:
      'Pasa de la hipótesis al modelo de negocio, construye un equipo multidisciplinario y defiende tu propuesta en un pitch.',
  },
] as const;

export const globalActionPillars = [
  {
    name: 'Educación',
    enName: 'Education',
    summary: 'Acceso a herramientas prácticas y formación para lanzar startups reales desde la etapa universitaria.',
  },
  {
    name: 'Inversión',
    enName: 'Investment',
    summary: 'Financiamiento a empresas sociales de alto potencial y conexión con ecosistemas de escalamiento.',
  },
  {
    name: 'Comunidad',
    enName: 'Community',
    summary: 'Una red internacional que acompaña a fundadores, voluntarios y líderes estudiantiles.',
  },
] as const;

