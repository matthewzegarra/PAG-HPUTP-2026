import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

async function generateOgImage() {
  const outDir = path.join(ROOT, 'public', 'og');
  fs.mkdirSync(outDir, { recursive: true });

  const logoPath = path.join(
    ROOT,
    'logos and guidelines',
    'EF Hult Prize logo',
    'For Dark Background',
    'EF Hult Prize - 4.png'
  );

  const logoWidth = 190;
  const logoBuffer = await sharp(logoPath).resize({ width: logoWidth }).png().toBuffer();

  const svgBackdrop = `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="citypop" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FF329B" />
        <stop offset="55%" stop-color="#8A2890" />
        <stop offset="100%" stop-color="#292563" />
      </linearGradient>
      <linearGradient id="volcano" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#FDD40E" />
        <stop offset="100%" stop-color="#FF329B" />
      </linearGradient>
    </defs>

    <!-- Fondo Ink -->
    <rect width="1200" height="630" fill="#150007" />

    <!-- Arco oficial City Pop -->
    <circle cx="1060" cy="540" r="470" fill="url(#citypop)" opacity="0.92" />

    <!-- Etiqueta superior -->
    <circle cx="84" cy="88" r="6" fill="#FF329B" />
    <text x="102" y="94" fill="#FFFFFF" opacity="0.82" font-family="Segoe UI, Arial, sans-serif" font-size="16" font-weight="600" letter-spacing="2.5">
      EF HULT PRIZE AT UNIVERSIDAD TECNOLÓGICA DEL PERÚ · 2026/2027
    </text>

    <!-- Titular principal -->
    <text x="76" y="210" fill="#FFFFFF" font-family="Segoe UI, Arial, sans-serif" font-size="68" font-weight="900" letter-spacing="-1.5">
      Las ideas que
    </text>
    <text x="76" y="286" fill="#FFFFFF" font-family="Segoe UI, Arial, sans-serif" font-size="68" font-weight="900" letter-spacing="-1.5">
      cambian el mundo
    </text>
    <text x="76" y="362" fill="#FDD40E" font-family="Segoe UI, Arial, sans-serif" font-size="68" font-weight="900" letter-spacing="-1.5">
      empiezan aquí.
    </text>
    <rect x="76" y="378" width="490" height="8" rx="4" fill="url(#volcano)" />

    <!-- Partner Lockup en la parte inferior izquierda (UTP + barra + espacio 2g) -->
    <text x="275" y="505" text-anchor="end" fill="#FFFFFF" font-family="Segoe UI, Arial, sans-serif" font-size="25" font-weight="400">
      Universidad
    </text>
    <text x="275" y="537" text-anchor="end" fill="#FFFFFF" font-family="Segoe UI, Arial, sans-serif" font-size="25" font-weight="400">
      Tecnológica del Perú
    </text>

    <!-- Barra vertical (distancia 2g ≈ 54px a cada lado para logo de 190px) -->
    <rect x="329" y="450" width="3" height="130" fill="#FFFFFF" />
  </svg>
  `;

  const outPath = path.join(outDir, 'og-default.png');
  await sharp(Buffer.from(svgBackdrop))
    .composite([
      {
        input: logoBuffer,
        left: 386,
        top: 450,
      },
    ])
    .png({ compressionLevel: 9 })
    .toFile(outPath);

  console.log(`[generate-og] Imagen Open Graph 1200x630 generada en ${outPath}`);
}

generateOgImage();

