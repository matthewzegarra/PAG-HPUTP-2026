export interface SkillItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tag: string;
  featured?: boolean;
}

export const skills: SkillItem[] = [
  {
    id: 'validacion',
    number: '01',
    title: 'Validación de problemas y oportunidades',
    description:
      'Investiga problemáticas reales desde la raíz, identifica a los usuarios afectados y contrasta tus hipótesis con evidencia antes de construir.',
    tag: 'Descubrimiento',
    featured: true,
  },
  {
    id: 'propuesta-valor',
    number: '02',
    title: 'Diseño de una propuesta de valor',
    description:
      'Estructura soluciones diferenciadas mediante design thinking que articulen impacto medible y relevancia en el mercado.',
    tag: 'Producto e impacto',
    featured: true,
  },
  {
    id: 'modelo-negocio',
    number: '03',
    title: 'Modelo de negocio y sostenibilidad',
    description:
      'Construye una arquitectura financiera con fines de lucro donde cada ingreso fortalezca la misión social o ambiental.',
    tag: 'Viabilidad',
  },
  {
    id: 'pitch',
    number: '04',
    title: 'Pitch y comunicación de ideas',
    description:
      'Sintetiza tu visión en un relato claro, convincente y respaldado por datos para presentar ante jurados y especialistas.',
    tag: 'Comunicación',
  },
  {
    id: 'liderazgo',
    number: '05',
    title: 'Trabajo en equipo y liderazgo',
    description:
      'Colabora con perfiles multidisciplinarios de la UTP, toma decisiones bajo presión y lidera proyectos con propósito.',
    tag: 'Colaboración',
  },
  {
    id: 'mentoria',
    number: '06',
    title: 'Aprendizaje mediante retroalimentación y mentoría',
    description:
      'Itera tu propuesta a partir de la evaluación crítica de especialistas, talleres formativos y espacios de práctica en comunidad.',
    tag: 'Crecimiento continuo',
  },
];

export const skillsDisclaimer =
  'Nota: Las oportunidades de mentoría individual, inversión o avance a etapas posteriores dependen de la disponibilidad de cada fase y de los resultados de evaluación correspondientes.';

