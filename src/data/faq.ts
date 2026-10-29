export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  sourceLabel?: string;
  sourceUrl?: string;
}

export const faqItems: FaqItem[] = [
  {
    id: 'que-es-hult-prize',
    question: '¿Qué es Hult Prize?',
    answer:
      'EF Hult Prize es un programa y competencia global que desafía a jóvenes universitarios a construir startups con fines de lucro (for-profit) capaces de generar impacto social y ambiental medible, alineadas con al menos un Objetivo de Desarrollo Sostenible (ODS) de las Naciones Unidas. Desde 2010 ha movilizado a participantes en más de 130 países y culmina cada año con una final global donde un equipo ganador recibe US$1,000,000 en inversión semilla.',
    sourceLabel: 'EF Hult Prize — About Us',
    sourceUrl: 'https://www.hultprize.org/about-us',
  },
  {
    id: 'necesito-startup-previa',
    question: '¿Necesito tener una startup constituida para comenzar?',
    answer:
      'No. Tanto si estás empezando una idea desde cero como si ya cuentas con un emprendimiento en etapa temprana, eres bienvenido. Para iniciar a nivel global se requiere formar un equipo de 2 a 4 estudiantes elegibles (mayores de 18 años y matriculados en un programa conducente a grado o título) y desarrollar una propuesta de negocio con impacto.',
    sourceLabel: 'EF Hult Prize — How It Works',
    sourceUrl: 'https://www.hultprize.org/how-it-works',
  },
  {
    id: 'como-conocer-convocatoria-utp',
    question: '¿Cómo puedo conocer la convocatoria de Hult Prize at UTP?',
    answer:
      'Las fechas locales, charlas informativas, talleres y el estado de la convocatoria 2026/2027 en la Universidad Tecnológica del Perú se publican en nuestras redes oficiales (@hultprize_utp en Instagram y LinkedIn). Además, a nivel global EF Hult Prize habilita su registro en línea (donde conecta a los equipos con el programa de su campus si está activo, o con la Open Application).',
    sourceLabel: 'Instagram @hultprize_utp',
    sourceUrl: 'https://www.instagram.com/hultprize_utp/',
  },
  {
    id: 'que-tipo-de-ideas',
    question: '¿Qué tipo de ideas se pueden desarrollar?',
    answer:
      'Deben ser modelos de negocio con fines de lucro (empresas sostenibles económicamente) que resuelvan un problema real y apoyen directamente al menos uno de los 17 Objetivos de Desarrollo Sostenible (ODS) de la ONU. La evaluación progresiva considera cuatro ejes: innovación e impacto, viabilidad del modelo de negocio, ejecución y tracción, y fortaleza del equipo.',
    sourceLabel: 'EF Hult Prize — Evaluation Criteria',
    sourceUrl: 'https://www.hultprize.org/how-it-works',
  },
  {
    id: 'idioma-entregables',
    question: '¿En qué idioma se presentan los entregables oficiales de la competencia?',
    answer:
      'De acuerdo con las reglas globales de EF Hult Prize, todas las postulaciones (video pitch de 4 minutos, Pitch Deck en PDF y Startup One-Pager en PDF) y las fases oficiales de la competencia se realizan en inglés. Si un documento original está en otro idioma, se exige adjuntar una traducción aceptable al inglés.',
    sourceLabel: 'EF Hult Prize — FAQ oficial',
    sourceUrl: 'https://www.hultprize.org/how-it-works',
  },
  {
    id: 'como-contactar-equipo',
    question: '¿Cómo puedo contactar con el equipo organizador de UTP?',
    answer:
      'Puedes escribirnos o seguir las novedades directamente a través de nuestra cuenta oficial de Instagram (@hultprize_utp) o conectar por LinkedIn (/in/hultprize-utp). Si representas a una organización, mentor o especialista interesado en colaborar con la comunidad, esos canales están abiertos para coordinar.',
    sourceLabel: 'LinkedIn Hult Prize UTP',
    sourceUrl: 'https://www.linkedin.com/in/hultprize-utp/',
  },
];

