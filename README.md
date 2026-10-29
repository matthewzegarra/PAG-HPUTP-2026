# EF Hult Prize at Universidad Tecnológica del Perú — Web Oficial (Edición 2026/2027)

Plataforma web institucional de **EF Hult Prize at Universidad Tecnológica del Perú** (`@hultprize_utp`), diseñada y desarrollada bajo los lineamientos oficiales de *EF Hult Prize 2026 Qualifiers Brand Guidelines*.

---

## 1. Arquitectura y Stack

- **Framework:** [Astro 5](https://astro.build/) + TypeScript estricto (generación estática con 0 KB de runtime innecesario).
- **Estilos:** Sistema de tokens CSS nativo (`src/styles/tokens.css`), tipografía oficial **Figtree** autoalojada (`@fontsource/figtree` en pesos 400, 700 y 900) y contraste verificado WCAG 2.2 AA.
- **Identidad de marca:** Copias sincronizadas por SHA-256 desde `logos and guidelines/EF Hult Prize logo/` mediante `scripts/sync-brand-assets.mjs` (los recursos originales nunca se modifican).
- **Validación de contenido:** Esquemas **Zod** en tiempo de compilación que impiden publicar estados inconsistentes (por ejemplo, una convocatoria abierta sin URL verificada o un patrocinador sin fuente comprobada).
- **Pruebas:** Playwright + `@axe-core/playwright` (`tests/smoke.spec.ts`, `tests/a11y.spec.ts`, `tests/visual.spec.ts`).

---

## 2. Comandos principales

```bash
# Instalar dependencias
pnpm install

# Sincronizar logotipos oficiales y verificar integridad SHA-256
pnpm run sync:brand

# Generar imagen Open Graph (1200x630)
pnpm run og:generate

# Iniciar servidor de desarrollo (http://localhost:4321)
pnpm run dev

# Verificar tipos de Astro/TypeScript y compilar para producción
pnpm run build

# Previsualizar versión de producción
pnpm run preview

# Ejecutar pruebas automatizadas (humo, marca, responsive y accesibilidad WCAG AA)
pnpm test
```

---

## 3. Cómo actualizar el contenido sin tocar el diseño

Toda la información editorial está separada de los componentes visuales en `src/data/` y `src/content/`:

| Archivo | Qué controla |
|---|---|
| `src/data/convocatoria.ts` | Estado de la convocatoria local (`'por-confirmar' \| 'proximamente' \| 'abierta' \| 'cerrada'`), fechas y URL de inscripción. Actualiza automáticamente los botones del Header, Hero, Journey y CTA de cierre. |
| `src/data/team.ts` |Las 5 áreas oficiales (`Startups`, `Judges & Experts`, `Events`, `Marketing & Media`, `Partnerships & Sponsorships`) y sus integrantes confirmados (`members`). |
| `src/data/partners.ts` | Organizaciones aliadas o colaboradoras verificadas (`ally`, `collaborator`, `sponsor`) con autorización de uso de logotipo. |
| `src/content/activities/` | Colección de actividades y eventos reales en formato Markdown/YAML. Si una fecha pasa, el componente `StatusBadge` cambia su estado automáticamente a **Realizado** en cada compilación. |
| `src/data/site.ts` | Nombre oficial, URLs de redes sociales (`@hultprize_utp`), correo oficial (`contact.email`, inicialmente `null`) y dominio (`siteUrl`). |

---

## 4. Fuentes oficiales consultadas (29 de octubre de 2026)

- **Manual de identidad visual:** `logos and guidelines/EF Hult Prize 2026 Qualifiers Brand Guidelines.pdf`
- **Web global EF Hult Prize:** https://www.hultprize.org/
- **Funcionamiento y elegibilidad:** https://www.hultprize.org/how-it-works
- **Etapas de la competencia:** https://www.hultprize.org/en/competition/
- **Sobre la organización:** https://www.hultprize.org/about-us
- **Portal de registro global:** https://www.hultprize.org/register
- **Instagram oficial Hult Prize at UTP:** https://www.instagram.com/hultprize_utp/
- **LinkedIn oficial Hult Prize at UTP:** https://www.linkedin.com/in/hultprize-utp/

---

## 5. Información local pendiente de confirmar

Siguiendo las reglas editoriales del proyecto, los siguientes datos permanecen configurables o fuera de la interfaz pública hasta contar con confirmación oficial del comité 2026/2027:

1. **Estado, fechas y enlace de inscripción de la convocatoria local UTP 2026/2027** (`src/data/convocatoria.ts`).
2. **Lista nominal de integrantes, cargos y fotografías autorizadas del equipo 2026/2027** (`src/data/team.ts`).
3. **Calendario de talleres y actividades locales confirmadas** (`src/content/activities/`).
4. **Lista verificada de organizaciones aliadas y logotipos autorizados** (`src/data/partners.ts`).
5. **Dirección de correo electrónico institucional verificado** (`src/data/site.ts` → `contact.email`).
6. **Dominio definitivo de producción** (`astro.config.mjs` y `src/data/site.ts`).
7. **Avatar / favicon oficial del Graphic Set de Campus Director HQ 26-27** (el manual prohíbe usar el logotipo global aislado como avatar o favicon).

