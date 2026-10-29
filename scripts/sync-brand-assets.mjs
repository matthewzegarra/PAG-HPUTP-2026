import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const SOURCE_BASE = path.join(ROOT, 'logos and guidelines', 'EF Hult Prize logo');
const DEST_DIR = path.join(ROOT, 'src', 'assets', 'brand');
const PUBLIC_BRAND_DIR = path.join(ROOT, 'public', 'brand');

const BRAND_FILES = [
  {
    src: path.join(SOURCE_BASE, 'For Dark Background', 'EF Hult Prize - 4.png'),
    destName: 'efhp-inverted-volcano.png',
    role: 'Inverted (Volcano expression) — for Ink / Midnight dark surfaces',
  },
  {
    src: path.join(SOURCE_BASE, 'For Bright Background', 'EF Hult Prize - 2.png'),
    destName: 'efhp-standard-midnight.png',
    role: 'Standard (Midnight-Heritage expression) — for Gallery / light surfaces',
  },
  {
    src: path.join(SOURCE_BASE, 'Black and White', 'EF Hult Prize - BW1.png'),
    destName: 'efhp-mono-inverted.png',
    role: 'Mono Inverted (White constant, Ink expression) — for saturated gradients',
  },
  {
    src: path.join(SOURCE_BASE, 'For Bright Background', 'EF Hult Prize - 1.png'),
    destName: 'efhp-standard-volcano.png',
    role: 'Standard (Volcano expression) — reserve for light surfaces',
  },
  {
    src: path.join(SOURCE_BASE, 'For Dark Background', 'EF Hult Prize - 3.png'),
    destName: 'efhp-inverted-midnight.png',
    role: 'Inverted (Midnight-Heritage expression) — reserve',
  },
  {
    src: path.join(SOURCE_BASE, 'Black and White', 'EF Hult Prize - BW2.png'),
    destName: 'efhp-mono-standard.png',
    role: 'Mono Standard (Ink constant, White expression) — reserve',
  },
];

function sha256(filePath) {
  const buf = fs.readFileSync(filePath);
  return crypto.createHash('sha256').update(buf).digest('hex');
}

function main() {
  fs.mkdirSync(DEST_DIR, { recursive: true });
  fs.mkdirSync(PUBLIC_BRAND_DIR, { recursive: true });

  const manifest = [];

  for (const item of BRAND_FILES) {
    if (!fs.existsSync(item.src)) {
      throw new Error(`[sync-brand-assets] No se encontró el archivo oficial: ${item.src}`);
    }

    const srcHashBefore = sha256(item.src);
    const destPath = path.join(DEST_DIR, item.destName);
    const publicPath = path.join(PUBLIC_BRAND_DIR, item.destName);

    fs.copyFileSync(item.src, destPath);
    fs.copyFileSync(item.src, publicPath);

    const srcHashAfter = sha256(item.src);
    const destHash = sha256(destPath);

    if (srcHashBefore !== srcHashAfter || srcHashBefore !== destHash) {
      throw new Error(
        `[sync-brand-assets] Error de integridad al copiar ${item.src}. Hash esperado: ${srcHashBefore}`
      );
    }

    manifest.push({
      file: item.destName,
      source: path.relative(ROOT, item.src).replace(/\\/g, '/'),
      sha256: destHash,
      role: item.role,
    });
  }

  console.log(`[sync-brand-assets] ${manifest.length} logotipos oficiales sincronizados y verificados por SHA-256.`);
}

main();

