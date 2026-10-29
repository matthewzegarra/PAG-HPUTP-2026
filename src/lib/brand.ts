import invertedVolcano from '@/assets/brand/efhp-inverted-volcano.png';
import standardMidnight from '@/assets/brand/efhp-standard-midnight.png';
import monoInverted from '@/assets/brand/efhp-mono-inverted.png';
import standardVolcano from '@/assets/brand/efhp-standard-volcano.png';
import invertedMidnight from '@/assets/brand/efhp-inverted-midnight.png';
import monoStandard from '@/assets/brand/efhp-mono-standard.png';

export type BrandSurface = 'dark' | 'light' | 'vivid';
export type BrandVariantKey =
  | 'inverted-volcano'
  | 'standard-midnight'
  | 'mono-inverted'
  | 'standard-volcano'
  | 'inverted-midnight'
  | 'mono-standard';

/**
 * Geometría oficial extraída del manual (p. 3 y p. 4) y medida en los PNG maestros:
 * - Dimensiones maestras: 1392 × 950/951 px → ratio h/w = 0.683 (manual: "0.68 w")
 * - Ancho mínimo en pantalla: 70 px (manual p. 3: "Minimum sizes: 70 px wide on screen")
 * - Espacio de seguridad 2g: medido en Version 1.png (partner lockup oficial UTP): 2g ≈ 0.285 * w
 */
export const BRAND_GEOMETRY = {
  minWidthPx: 70,
  aspectRatioHW: 950 / 1392,
  clearSpaceRatio2G: 0.285,
  barWidthRatio: 0.017,
} as const;

export const BRAND_ASSETS: Record<
  BrandVariantKey,
  {
    image: ImageMetadata;
    publicUrl: string;
    label: string;
    recommendedSurface: string;
  }
> = {
  'inverted-volcano': {
    image: invertedVolcano,
    publicUrl: '/brand/efhp-inverted-volcano.png',
    label: 'Inverted (Volcano expression) — EF Hult Prize - 4.png',
    recommendedSurface: 'Fondos oscuros Ink (#150007) y Midnight (#292563)',
  },
  'standard-midnight': {
    image: standardMidnight,
    publicUrl: '/brand/efhp-standard-midnight.png',
    label: 'Standard (Midnight-Heritage expression) — EF Hult Prize - 2.png',
    recommendedSurface: 'Fondos claros Gallery (#FFFFFF)',
  },
  'mono-inverted': {
    image: monoInverted,
    publicUrl: '/brand/efhp-mono-inverted.png',
    label: 'Mono Inverted (White constant, Ink expression) — EF Hult Prize - BW1.png',
    recommendedSurface: 'Gradientes saturados (Tropical Volcano / City Pop)',
  },
  'standard-volcano': {
    image: standardVolcano,
    publicUrl: '/brand/efhp-standard-volcano.png',
    label: 'Standard (Volcano expression) — EF Hult Prize - 1.png',
    recommendedSurface: 'Reserva para fondos claros',
  },
  'inverted-midnight': {
    image: invertedMidnight,
    publicUrl: '/brand/efhp-inverted-midnight.png',
    label: 'Inverted (Midnight-Heritage expression) — EF Hult Prize - 3.png',
    recommendedSurface: 'Reserva (no usar sobre Ink o Midnight por contraste del borde superior)',
  },
  'mono-standard': {
    image: monoStandard,
    publicUrl: '/brand/efhp-mono-standard.png',
    label: 'Mono Standard (Ink constant, White expression) — EF Hult Prize - BW2.png',
    recommendedSurface: 'Reserva monocromática',
  },
};

export function getLogoForSurface(surface: BrandSurface) {
  switch (surface) {
    case 'dark':
      return BRAND_ASSETS['inverted-volcano'];
    case 'light':
      return BRAND_ASSETS['standard-midnight'];
    case 'vivid':
      return BRAND_ASSETS['mono-inverted'];
  }
}

export function computeClearSpacePx(widthPx: number): number {
  if (widthPx < BRAND_GEOMETRY.minWidthPx) {
    throw new Error(
      `[BrandLogo] El ancho del logotipo (${widthPx}px) viola el mínimo oficial de ${BRAND_GEOMETRY.minWidthPx}px definido en el manual de marca (p. 3).`
    );
  }
  return Math.round(widthPx * BRAND_GEOMETRY.clearSpaceRatio2G);
}

