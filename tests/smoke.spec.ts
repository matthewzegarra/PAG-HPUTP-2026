import { test, expect } from '@playwright/test';

test.describe('Hult Prize at UTP 2026/2027 — Smoke, Brand & Responsive QA', () => {
  test('Estructura semántica, único H1, navegación y enlaces verificados', async ({ page }) => {
    await page.goto('/');

    // 1. Único H1 principal
    const h1s = page.locator('h1');
    await expect(h1s).toHaveCount(1);
    await expect(h1s.first()).toContainText('Las ideas que cambian el mundo');

    // 2. Secciones principales existen
    for (const id of [
      'inicio',
      'iniciativa',
      'como-funciona',
      'aprendizajes',
      'comunidad',
      'equipo',
      'alianzas',
      'preguntas',
      'contacto',
    ]) {
      await expect(page.locator(`#${id}`)).toBeAttached();
    }

    // 3. Ningún enlace vacío o decorativo (#)
    const links = await page.locator('a').all();
    expect(links.length).toBeGreaterThan(10);
    for (const link of links) {
      const href = await link.getAttribute('href');
      expect(href).toBeTruthy();
      expect(href?.trim()).not.toBe('#');
    }

    // 4. Las 5 etapas globales oficiales están presentes
    for (const stage of [
      'Qualifiers',
      'Nationals',
      'Digital Incubator',
      'Global Accelerator',
      'Global Finals',
    ]) {
      await expect(page.locator('#como-funciona')).toContainText(stage);
    }

    // 5. Las 5 áreas oficiales del equipo están presentes
    for (const area of [
      'Startups',
      'Judges & Experts',
      'Events',
      'Marketing & Media',
      'Partnerships & Sponsorships',
    ]) {
      await expect(page.locator('#equipo')).toContainText(area);
    }
  });

  test('Reglas de marca: ancho mínimo del logotipo (>= 70 px) y sin filtros CSS', async ({
    page,
  }) => {
    for (const width of [360, 768, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto('/');

      const logos = await page.locator('[data-brand-logo] img').all();
      expect(logos.length).toBeGreaterThanOrEqual(4);

      for (const logo of logos) {
        const box = await logo.boundingBox();
        expect(box).not.toBeNull();
        expect(box!.width).toBeGreaterThanOrEqual(70);

        const filter = await logo.evaluate((el) => getComputedStyle(el).filter);
        expect(filter).toBe('none');
      }
    }
  });

  test('Responsive: cero desbordamiento horizontal en móvil (360px), tablet (768px) y escritorio (1440px)', async ({
    page,
  }) => {
    for (const vp of [
      { width: 360, height: 800 },
      { width: 390, height: 844 },
      { width: 768, height: 1024 },
      { width: 1024, height: 768 },
      { width: 1440, height: 900 },
    ]) {
      await page.setViewportSize(vp);
      await page.goto('/');

      const overflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth;
      });
      expect(overflow, `Desbordamiento horizontal detectado en ${vp.width}px`).toBe(false);
    }
  });

  test('Menú móvil accesible por teclado y tecla Escape', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');

    const toggle = page.locator('[data-menu-toggle]');
    const drawer = page.locator('[data-mobile-menu]');

    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await expect(drawer).toHaveAttribute('aria-hidden', 'false');

    await page.keyboard.press('Escape');
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await expect(drawer).toHaveAttribute('aria-hidden', 'true');
  });
});

