export function initFaq() {
  const detailsList = Array.from(
    document.querySelectorAll<HTMLDetailsElement>('[data-faq-item]')
  );
  if (detailsList.length === 0) return;

  // Permite abrir múltiples o mantener el foco claro con teclado
  detailsList.forEach((detail) => {
    detail.addEventListener('toggle', () => {
      detail.classList.toggle('is-open', detail.open);
    });
  });
}

