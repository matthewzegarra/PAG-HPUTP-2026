import { test } from '@playwright/test';
import path from 'node:path';
import fs from 'node:fs';

const OUT_DIR =
  'C:\\Users\\matth\\.gemini\\antigravity\\brain\\92bbb19c-ad30-4351-96a3-f849bafa8df3\\scratch\\screenshots';

test.describe('Capturas de verificación visual', () => {
  test('Generar capturas en escritorio, tablet, móvil y brand-qa', async ({ page }) => {
    fs.mkdirSync(OUT_DIR, { recursive: true });

    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    await page.waitForTimeout(300);

    await page.screenshot({ path: path.join(OUT_DIR, 'desktop-hero.png'), fullPage: false });
    await page.screenshot({ path: path.join(OUT_DIR, 'desktop-full.png'), fullPage: true });

    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    await page.waitForTimeout(300);

    await page.screenshot({ path: path.join(OUT_DIR, 'mobile-hero.png'), fullPage: false });
    await page.screenshot({ path: path.join(OUT_DIR, 'mobile-full.png'), fullPage: true });

    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto('/brand-qa');
    await page.waitForTimeout(300);
    await page.screenshot({ path: path.join(OUT_DIR, 'brand-qa.png'), fullPage: true });
  });
});

