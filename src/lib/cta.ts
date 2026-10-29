import { convocatoria, type ConvocatoriaConfig } from '@/data/convocatoria';
import { site } from '@/data/site';

export interface ResolvedCta {
  label: string;
  href: string;
  external: boolean;
  statusBadge: string;
}

export interface ClosingCtaGroup {
  primary: {
    label: string;
    href: string;
    external: boolean;
  };
  secondary: {
    label: string;
    href: string;
    external: boolean;
  };
  tertiary: {
    label: string;
    href: string;
    external: boolean;
  };
  statusAnnouncement: string;
}

/**
 * Deriva el CTA del Header según el estado real de la convocatoria.
 * Regla del prompt (§5.A): "Conoce la convocatoria", "Quiero participar" o "Contáctanos", según el estado real.
 */
export function resolveHeaderCta(config: ConvocatoriaConfig = convocatoria): ResolvedCta {
  switch (config.status) {
    case 'abierta':
      return {
        label: 'Quiero participar',
        href: config.url!,
        external: true,
        statusBadge: 'Inscripciones abiertas',
      };
    case 'proximamente':
      return {
        label: 'Conoce la convocatoria',
        href: '#como-funciona',
        external: false,
        statusBadge: 'Próximamente',
      };
    case 'cerrada':
      return {
        label: 'Conoce la convocatoria',
        href: '#como-funciona',
        external: false,
        statusBadge: 'Convocatoria cerrada',
      };
    case 'por-confirmar':
    default:
      return {
        label: 'Contáctanos',
        href: '#contacto',
        external: false,
        statusBadge: 'Convocatoria por confirmar',
      };
  }
}

/**
 * Deriva los botones de la sección de cierre según el estado real de la convocatoria.
 * Todos los botones conducen a URLs reales y comprobadas.
 */
export function resolveClosingCtas(config: ConvocatoriaConfig = convocatoria): ClosingCtaGroup {
  switch (config.status) {
    case 'abierta':
      return {
        primary: {
          label: 'Quiero participar',
          href: config.url!,
          external: true,
        },
        secondary: {
          label: 'Síguenos en Instagram',
          href: site.channels.instagram.url,
          external: true,
        },
        tertiary: {
          label: 'Conecta en LinkedIn',
          href: site.channels.linkedin.url,
          external: true,
        },
        statusAnnouncement: config.closeDate
          ? `Convocatoria abierta · Cierre: ${config.closeDate}`
          : 'Convocatoria local abierta',
      };
    case 'proximamente':
      return {
        primary: {
          label: 'Sigue las novedades en Instagram',
          href: site.channels.instagram.url,
          external: true,
        },
        secondary: {
          label: 'Conecta en LinkedIn',
          href: site.channels.linkedin.url,
          external: true,
        },
        tertiary: {
          label: 'Explora la web global',
          href: site.channels.globalWeb.howItWorks,
          external: true,
        },
        statusAnnouncement: config.openDate
          ? `Apertura programada: ${config.openDate}`
          : 'Próximamente · Fechas por anunciar en canales oficiales',
      };
    case 'cerrada':
      return {
        primary: {
          label: 'Síguenos en Instagram',
          href: site.channels.instagram.url,
          external: true,
        },
        secondary: {
          label: 'Conecta en LinkedIn',
          href: site.channels.linkedin.url,
          external: true,
        },
        tertiary: {
          label: 'Conoce la ruta global',
          href: site.channels.globalWeb.howItWorks,
          external: true,
        },
        statusAnnouncement: 'La convocatoria de esta etapa ha concluido · Sigue los próximos hitos',
      };
    case 'por-confirmar':
    default:
      return {
        primary: {
          label: 'Síguenos en Instagram',
          href: site.channels.instagram.url,
          external: true,
        },
        secondary: {
          label: 'Conecta en LinkedIn',
          href: site.channels.linkedin.url,
          external: true,
        },
        tertiary: {
          label: 'Conoce la competencia global',
          href: site.channels.globalWeb.howItWorks,
          external: true,
        },
        statusAnnouncement:
          'Estado de convocatoria local 2026/2027: por confirmar en canales oficiales',
      };
  }
}

