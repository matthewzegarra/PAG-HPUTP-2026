# PROMPT.md --- HULT PRIZE AT UTP

## Website oficial \| Edición 2026/2027

Actúa como un **equipo senior de producto digital** compuesto por un
Creative Director, UX/UI Designer, Brand Designer y Full-Stack Engineer.
Diseña y desarrolla una web de alto nivel para **Hult Prize at UTP**, la
comunidad universitaria de la Universidad Tecnológica del Perú vinculada
a la competencia global de emprendimiento social de EF Hult Prize.

No quiero una plantilla genérica, un dashboard ni una landing hecha con
bloques repetitivos. Quiero una experiencia digital memorable,
contemporánea, dinámica y confiable, con calidad visual comparable a una
startup internacional de impacto. La web debe comunicar
**emprendimiento, innovación, liderazgo, comunidad, sostenibilidad y
ambición global**, sin perder su identidad universitaria local.

------------------------------------------------------------------------

## 1. Antes de programar: inspecciona el proyecto y sus recursos

1.  Inspecciona el repositorio completo: estructura, framework,
    dependencias, componentes existentes, scripts y configuración.
2.  No reemplaces ni reinicialices un proyecto existente sin necesidad.
    Conserva lo que funcione y adapta la implementación a la
    arquitectura actual.
3.  Revisa visualmente y utiliza los recursos de la siguiente carpeta,
    que ya está incluida en el proyecto:

``` text
PAG-HPUTP-2026/
└── logos and guidelines/
    └── EF Hult Prize logo/
        ├── AI Files/
        │   ├── EF Hult Prize - Logo CMYK.ai
        │   └── EF Hult Prize - Logo.ai
        ├── Black and White/
        │   ├── EF Hult Prize - BW1.png
        │   └── EF Hult Prize - BW2.png
        ├── For Bright Background/
        │   ├── EF Hult Prize - 1.png
        │   └── EF Hult Prize - 2.png
        ├── For Dark Background/
        │   ├── EF Hult Prize - 3.png
        │   └── EF Hult Prize - 4.png
        ├── EF Hult Prize 2026 Qualifiers Brand Guidelines.pdf
        ├── Version 1.png
        ├── Version 2.png
        └── Zoom Background2.png
```

La estructura anterior refleja el árbol de archivos compartido por el
usuario. Confirma las rutas reales en el proyecto antes de
referenciarlas en el código. Los nombres pueden contener espacios y
mayúsculas.

### Reglas para los recursos de marca

-   Lee `EF Hult Prize 2026 Qualifiers Brand Guidelines.pdf` antes de
    definir el sistema visual.
-   Examina `Version 1.png`, `Version 2.png` y los archivos de logotipo
    para identificar qué versiones son apropiadas para fondos claros y
    oscuros.
-   Prioriza los PNG oficiales proporcionados para la web. Los archivos
    `.ai` son recursos fuente; no asumas que el navegador puede
    mostrarlos directamente.
-   **Nunca reconstruyas, redibujes, deformes, gires, espejes ni
    recolorees el logotipo EF Hult Prize.** No cambies su tipografía ni
    las proporciones, geometría o separación de sus paneles.
-   Respeta el espacio de seguridad mínimo definido en el manual y el
    tamaño mínimo de pantalla indicado allí.
-   Utiliza la versión estándar sobre fondos claros y la versión
    invertida sobre fondos oscuros o visualmente complejos, según
    corresponda.
-   No uses el logotipo global aislado como avatar o sustituto de una
    identidad oficial local. La web debe identificar claramente a Hult
    Prize at UTP.
-   No inventes un logotipo nuevo para aparentar que es oficial. Si se
    necesita una identificación local, resuélvela mediante composición
    tipográfica y texto, respetando las reglas de partner lockup.
-   Mantén los recursos originales intactos. No sobrescribas los
    archivos de marca.

------------------------------------------------------------------------

## 2. Investigación y fuentes de contenido

Consulta estas fuentes como punto de partida:

-   Instagram oficial: https://www.instagram.com/hultprize_utp/
-   LinkedIn oficial: https://www.linkedin.com/in/hultprize-utp/
-   Web global: https://www.hultprize.org/
-   Información oficial sobre el funcionamiento de la competencia:
    https://www.hultprize.org/how-it-works
-   Información oficial sobre la organización:
    https://www.hultprize.org/about-us

Investiga las publicaciones y los materiales accesibles para comprender
el tono, las actividades, las convocatorias, el equipo, las alianzas y
las novedades de Hult Prize UTP. Usa información pública verificable.

### Qué es Hult Prize

Hult Prize es una iniciativa global de emprendimiento que desafía a
estudiantes universitarios a crear empresas con fines de lucro que
generen impacto social o ambiental medible. La competencia acompaña a
los equipos en el desarrollo de sus ideas y startups, con etapas que
pueden conducir a una final global y a una oportunidad de financiación
semilla.

Hult Prize at UTP acerca esa experiencia a la comunidad universitaria.
Su comunicación local debe destacar la innovación, el emprendimiento con
propósito, el liderazgo, la colaboración y las oportunidades para
convertir ideas en soluciones.

### Reglas editoriales

-   No inventes fechas, lugares, horarios, premios locales, cifras de
    participantes, patrocinadores, jueces, mentores, testimonios,
    resultados ni enlaces de inscripción.
-   No presentes una fecha antigua como si fuera futura o vigente.
-   No asumas que las inscripciones están abiertas. La convocatoria debe
    tener un estado configurable y publicarse solo cuando esté
    confirmado.
-   No confundas el premio global de EF Hult Prize con un premio propio
    de Hult Prize UTP.
-   No presentes a una organización como patrocinadora si la fuente solo
    confirma una colaboración o alianza.
-   Si no puedes verificar un dato, usa un marcador explícito y fácil de
    editar, por ejemplo `[FECHA POR CONFIRMAR]`, o deja esa información
    fuera de la interfaz pública.
-   Distingue claramente la información global de la competencia de las
    actividades locales de UTP.
-   Prioriza el español para la experiencia local, conservando los
    nombres oficiales de programas y etapas cuando corresponda.
-   Incluye una sección de fuentes o enlaces oficiales en la
    documentación del proyecto; no hace falta llenar la página de citas
    académicas.

------------------------------------------------------------------------

## 3. Objetivo del producto

Crear una web pública que sirva como punto de entrada para:

1.  Explicar qué es Hult Prize at UTP y por qué importa.
2.  Motivar a estudiantes a explorar el emprendimiento social y
    participar cuando exista una convocatoria confirmada.
3.  Presentar las etapas de la experiencia y las oportunidades de
    aprendizaje.
4.  Mostrar actividades, noticias y momentos reales de la comunidad.
5.  Dar visibilidad al equipo organizador y a las áreas de trabajo.
6.  Comunicar alianzas y oportunidades de colaboración de forma precisa.
7.  Facilitar el contacto con el equipo y dirigir a los usuarios a los
    canales oficiales.
8.  Construir confianza y demostrar que la iniciativa pertenece a una
    comunidad real y activa.

Audiencia principal: estudiantes de UTP interesados en emprendimiento,
innovación, startups, sostenibilidad, impacto social, liderazgo y
desarrollo profesional. Audiencia secundaria: mentores, jueces,
organizaciones aliadas, empresas y personas interesadas en colaborar.

La web debe funcionar como una plataforma institucional viva, no como
una página dedicada únicamente a una convocatoria puntual.

------------------------------------------------------------------------

## 4. Dirección creativa y sistema visual

### Concepto

**"Ideas que se convierten en impacto."**

La experiencia debe combinar la energía de una startup global con la
autenticidad de una comunidad universitaria. El diseño tiene que
sentirse editorial, atrevido, humano, moderno y preciso.

### Paleta oficial

Usa como base la paleta que aparece en el manual de identidad adjunto:

-   **Heritage:** `#FF329B`
-   **Purple:** `#8A2890`
-   **Midnight:** `#292563`
-   **Ink:** `#150007`
-   **Gallery / blanco:** `#FFFFFF`
-   **Sky:** `#12B1E7`
-   **Sun:** `#FDD40E`

Gradientes indicados en el manual:

-   **Cotton Candy:** Sky → Heritage
-   **City Pop:** Heritage → Purple
-   **Tropical Volcano:** Sun → Heritage

No uses todos los colores con la misma intensidad al mismo tiempo.
Construye una jerarquía: Ink y blanco para estructura y legibilidad;
Heritage y Purple para energía y llamadas de atención; Sky y Sun como
acentos puntuales. Los gradientes deben ser deliberados, no un fondo
decorativo en cada sección.

### Tipografía

Usa **Figtree** siguiendo el manual:

-   Figtree Black: titulares grandes y puntuales.
-   Figtree Bold: encabezados.
-   Figtree Regular: cuerpo y textos generales.
-   Usa una fuente local del proyecto si ya está correctamente
    configurada; si no, integra Figtree de una fuente confiable y con
    fallbacks adecuados.

### Lenguaje visual

-   Composición editorial y tipografía de gran escala.
-   Espacio negativo generoso y una retícula consistente.
-   Contraste marcado entre secciones claras y oscuras.
-   Gradientes controlados, formas geométricas y recursos inspirados en
    crecimiento, conexión e ideas en movimiento.
-   Fotografías auténticas de estudiantes, equipos, presentaciones,
    mentorías y eventos.
-   Prioriza fotos reales de Hult Prize UTP cuando estén disponibles en
    los canales oficiales y su uso sea adecuado. No descargues ni
    reutilices imágenes privadas.
-   Si faltan fotografías locales, utiliza imágenes de estudiantes
    emprendedores con licencia adecuada y no las presentes como si
    fueran eventos reales de UTP.
-   Evita las ilustraciones corporativas genéricas, las imágenes de
    stock artificiales, el exceso de glassmorphism, las sombras
    exageradas y los efectos que dificulten la lectura.
-   No generes cifras, testimonios ni fotografías ficticias que se
    presenten como documentación real.

------------------------------------------------------------------------

## 5. Arquitectura de la página

Desarrolla una experiencia responsive con estas secciones. Puedes
ajustar el orden si mejora el relato, pero conserva todos los objetivos
principales.

### A. Navegación

-   Identificación tipográfica clara de Hult Prize at UTP, acompañada
    del recurso de marca aprobado.
-   Navegación: Inicio, La iniciativa, Cómo funciona, Comunidad, Equipo
    y Contacto.
-   CTA principal configurable: "Conoce la convocatoria", "Quiero
    participar" o "Contáctanos", según el estado real.
-   Menú móvil accesible, con estados de foco y controles utilizables
    por teclado.
-   Header compacto al desplazarse, si mejora la navegación y no
    distrae.

### B. Hero de alto impacto

Debe comunicar el propósito en pocos segundos.

Dirección de copy inicial ---puede mejorarse---:

**Etiqueta:** HULT PRIZE AT UTP · EDICIÓN 2026/2027

**Titular:** "Las ideas que cambian el mundo empiezan aquí."

**Descripción:** "Conecta tu talento con el emprendimiento y convierte
problemas reales en soluciones con impacto."

**CTA principal:** "Descubre cómo funciona"

**CTA secundario:** "Conoce nuestra comunidad"

No muestres una cuenta regresiva, fecha límite ni botón de inscripción
activa si no se ha verificado la convocatoria.

Visualmente, utiliza una composición tipográfica poderosa junto con
fotografía real de una experiencia emprendedora. El hero debe verse
excelente en escritorio y móvil, con jerarquía y contraste correctos.

### C. Introducción: qué es Hult Prize at UTP

Explica con lenguaje cercano que Hult Prize conecta a estudiantes con el
emprendimiento social y los desafía a desarrollar modelos de negocio
capaces de generar impacto positivo.

No uses un bloque interminable de texto. Presenta una narrativa breve y
tres conceptos visuales:

-   Emprender con propósito.
-   Diseñar soluciones sostenibles.
-   Convertir ideas en acción.

### D. La experiencia Hult Prize

Explica el recorrido general de la competencia global mediante una
secuencia visual clara. Verifica las etapas vigentes en las fuentes
oficiales antes de publicarlas. La ruta global puede incluir Qualifiers,
Nationals, Digital Incubator, Global Accelerator y Global Finals; aclara
que la progresión depende de los requisitos y resultados de cada etapa.

No inventes fechas locales para cada etapa. Diferencia la ruta global de
las actividades organizadas específicamente en UTP.

### E. ¿Qué puedes desarrollar?

Muestra los aprendizajes y capacidades que la experiencia puede ayudar a
poner en práctica:

-   Validación de problemas y oportunidades.
-   Diseño de una propuesta de valor.
-   Modelo de negocio y sostenibilidad.
-   Pitch y comunicación de ideas.
-   Trabajo en equipo y liderazgo.
-   Aprendizaje mediante retroalimentación y mentoría.

No prometas que todos los participantes recibirán inversión, mentoría
individual o acceso automático a una etapa global.

### F. Comunidad y actividades

Crea una sección visual para mostrar talleres, sesiones, eventos,
convocatorias y momentos de la comunidad.

-   Usa contenido real de los canales oficiales cuando esté disponible.
-   Cada actividad debe admitir título, descripción, fecha, imagen,
    estado y enlace.
-   Si todavía no hay eventos confirmados para mostrar, utiliza una
    presentación editorial de la comunidad y enlaces a las redes
    oficiales. No inventes eventos para llenar tarjetas.
-   Evita mostrar tarjetas vacías o contenido de ejemplo en producción.

### G. Equipo organizador

Prepara una sección editable para presentar al equipo de Hult Prize at
UTP 2026/2027. Las cinco áreas que deben poder representarse son:

1.  **Startups:** acompañamiento, seguimiento y preparación de los
    equipos participantes.
2.  **Judges & Experts:** conexión con especialistas, mentores y
    evaluadores.
3.  **Events:** planificación y ejecución de experiencias y actividades.
4.  **Marketing & Media:** estrategia de contenidos, identidad visual y
    comunicación.
5.  **Partnerships & Sponsorships:** alianzas institucionales y
    relaciones con organizaciones colaboradoras.

La composición del equipo y los nombres deben cargarse desde información
confirmada. No inventes integrantes, cargos, fotos ni biografías. Si no
hay datos suficientes, muestra las áreas sin atribuir personas.

### H. Alianzas y ecosistema

Presenta las colaboraciones verificadas que contribuyan al
emprendimiento y a la innovación. Usa únicamente logotipos
proporcionados o autorizados. No alteres los logos de aliados ni
infieras que todas las organizaciones mencionadas en redes son
patrocinadores.

Si no hay una lista verificada disponible, muestra una invitación a
colaborar en vez de crear logotipos o nombres ficticios.

### I. Llamada a la acción

Crea una sección de cierre emocional y clara, por ejemplo:

**"Tu próxima idea puede empezar hoy."**

Invita al usuario a seguir los canales oficiales o a conocer la
convocatoria, según su estado confirmado. Cada botón debe conducir a una
URL real y comprobada. Si una URL todavía no existe, no crees enlaces
falsos.

### J. Preguntas frecuentes

Implementa un acordeón accesible para preguntas como:

-   ¿Qué es Hult Prize?
-   ¿Necesito tener una startup para comenzar?
-   ¿Cómo puedo conocer la convocatoria de UTP?
-   ¿Qué tipo de ideas puedo desarrollar?
-   ¿Cómo puedo contactar con el equipo?

Responde con información confirmada y enlaza a las fuentes globales
cuando la pregunta dependa de las reglas oficiales de competencia. No
inventes requisitos locales.

### K. Footer

Incluye identificación de Hult Prize at UTP, navegación secundaria,
enlaces a Instagram y LinkedIn, acceso a la web global y un correo de
contacto solo si está verificado. Incluye el año de forma dinámica si
corresponde. No inventes direcciones de correo.

------------------------------------------------------------------------

## 6. Interacciones y animación

Las animaciones deben mejorar la narrativa, no competir con ella.

-   Transiciones suaves entre secciones.
-   Entrada discreta de titulares y bloques al desplazarse.
-   Microinteracciones en botones, enlaces, tarjetas y acordeones.
-   Cambios de estado claros en navegación y menús.
-   Animaciones geométricas puntuales inspiradas en crecimiento y
    conexión.
-   Parallax solo cuando tenga una razón visual y no afecte el
    rendimiento.
-   Respeta `prefers-reduced-motion`.
-   No bloquees la interacción mientras se ejecutan animaciones.
-   Evita cursores personalizados que sustituyan al cursor normal,
    scroll hijacking, loaders innecesarios o efectos que reduzcan la
    accesibilidad.

El resultado debe sentirse fluido y sofisticado, no como una
demostración de efectos.

------------------------------------------------------------------------

## 7. Requisitos técnicos

1.  Utiliza el framework y las herramientas que ya existan en el
    repositorio. Si el proyecto está vacío, elige una solución moderna,
    mantenible y apropiada para una web institucional.
2.  Separa componentes, contenido y estilos. Evita un único archivo
    enorme con toda la página.
3.  Crea componentes reutilizables para navegación, botones, secciones,
    tarjetas, FAQ y footer.
4.  Mantén el contenido editorial en una estructura fácil de actualizar
    (por ejemplo, objetos o archivos de datos).
5.  Centraliza los tokens visuales: colores, tipografía, espacios,
    radios, anchos y transiciones.
6.  No agregues dependencias pesadas sin justificación.
7.  No simules un backend. Si no existe un servicio real para
    formularios, implementa un enlace de contacto verificado o explica
    claramente la integración pendiente.
8.  Los enlaces externos deben tener destinos reales, y los botones no
    deben ser decorativos ni quedar sin acción.
9.  Usa rutas y nombres de archivos compatibles con el entorno. Gestiona
    correctamente los espacios en nombres de recursos.
10. No introduzcas credenciales, tokens, claves API ni secretos en el
    código.
11. Añade metadatos de página, favicon solo si existe un recurso
    autorizado, Open Graph y una descripción SEO relevante.
12. Establece una estructura semántica correcta con un solo H1 principal
    y jerarquía de encabezados coherente.

------------------------------------------------------------------------

## 8. Responsive, accesibilidad y rendimiento

-   Diseña mobile-first y prueba como mínimo en móvil, tablet y
    escritorio.
-   Evita desbordamiento horizontal y textos cortados.
-   Mantén contraste suficiente en todos los fondos y estados.
-   Usa HTML semántico, etiquetas accesibles, foco visible, navegación
    por teclado y nombres accesibles para iconos.
-   Añade texto alternativo descriptivo a imágenes informativas; usa
    texto alternativo vacío para imágenes puramente decorativas.
-   Optimiza imágenes con tamaños adecuados, formatos modernos cuando
    sea posible y carga diferida fuera del primer viewport.
-   Evita cambios bruscos de layout al cargar fuentes o imágenes.
-   Minimiza JavaScript y anima preferentemente `transform` y `opacity`.
-   Verifica Core Web Vitals cuando las herramientas disponibles lo
    permitan.
-   La página debe funcionar correctamente incluso si una animación no
    se ejecuta.

------------------------------------------------------------------------

## 9. SEO, analítica y enlaces

-   Define un título y una descripción SEO en español que identifiquen
    Hult Prize at UTP y el emprendimiento social universitario.
-   Configura metadatos Open Graph para compartir la web.
-   Añade enlaces directos a los perfiles oficiales:
    -   Instagram: `https://www.instagram.com/hultprize_utp/`
    -   LinkedIn: `https://www.linkedin.com/in/hultprize-utp/`
    -   Web global: `https://www.hultprize.org/`
-   No agregues píxeles, analítica o cookies de seguimiento sin una
    configuración autorizada y documentada.
-   No incluyas formularios que aparenten enviar datos si no existe un
    endpoint funcional.

------------------------------------------------------------------------

## 10. Criterios de calidad visual

Antes de dar por terminada la web, comprueba lo siguiente:

-   ¿El primer viewport comunica propósito, marca y acción de forma
    inmediata?
-   ¿La composición tiene personalidad propia y evita el aspecto de
    plantilla genérica?
-   ¿La tipografía Figtree, los colores y los logotipos respetan el
    manual?
-   ¿Se ve como una iniciativa global de emprendimiento y, a la vez,
    como una comunidad vinculada a UTP?
-   ¿Las fotografías son auténticas o están claramente usadas como
    imágenes ilustrativas?
-   ¿Los CTA funcionan y tienen destinos verificados?
-   ¿No hay fechas, estadísticas, nombres o eventos inventados?
-   ¿La página se entiende en menos de diez segundos al entrar?
-   ¿La versión móvil conserva el impacto visual y la legibilidad?
-   ¿Las animaciones son fluidas y accesibles?
-   ¿El contenido se puede actualizar sin rehacer el diseño?

No te conformes con una web que solo compila: revisa el resultado
renderizado, corrige problemas de espaciado, contraste, alineación,
responsive y consistencia.

------------------------------------------------------------------------

## 11. Plan de ejecución en Antigravity

Trabaja en este orden:

1.  **Auditoría:** inspecciona la estructura y detecta framework,
    dependencias y recursos disponibles.
2.  **Investigación de marca:** revisa el PDF y las imágenes adjuntas;
    identifica el logotipo adecuado para cada fondo.
3.  **Contenido:** confirma la información pública de Hult Prize UTP y
    separa datos verificados de datos pendientes.
4.  **Dirección visual:** establece una propuesta consistente antes de
    implementar las secciones.
5.  **Implementación:** desarrolla la página completa con componentes
    reutilizables.
6.  **Integración de assets:** utiliza los archivos existentes y
    optimiza únicamente copias destinadas a la web.
7.  **Pruebas:** ejecuta los comandos disponibles para lint, build y
    pruebas; abre la web en el navegador si las herramientas del entorno
    lo permiten.
8.  **Revisión visual:** corrige errores reales después de observar el
    renderizado en escritorio y móvil.
9.  **Entrega:** resume lo implementado, los archivos principales, cómo
    ejecutar el proyecto y qué datos o integraciones siguen pendientes.

No te detengas después de producir un mockup o una lista de
recomendaciones. Implementa la web funcional en el repositorio
existente. Si falta una integración externa, deja una alternativa
honesta y documenta qué se necesita para completarla.

------------------------------------------------------------------------

## Resultado esperado

Una web responsive, rápida, accesible y visualmente sobresaliente para
**Hult Prize at UTP 2026/2027**, con identidad de marca correcta,
narrativa clara, contenido verificable, secciones completas,
interacciones funcionales y una arquitectura mantenible.

**Prioridad final:** marca correcta + contenido auténtico + diseño
excepcional + funcionamiento real. Nunca sacrifiques la veracidad ni la
identidad visual por un efecto llamativo.
