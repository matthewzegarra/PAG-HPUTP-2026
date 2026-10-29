export function initMobileMenu() {
  const toggleBtn = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const drawer = document.querySelector<HTMLElement>('[data-mobile-menu]');
  if (!toggleBtn || !drawer) return;

  const focusableSelector =
    'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

  function setMenuState(open: boolean) {
    if (!toggleBtn || !drawer) return;
    toggleBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggleBtn.setAttribute(
      'aria-label',
      open ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'
    );
    drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
    if (open) {
      drawer.removeAttribute('inert');
      drawer.classList.add('is-open');
      document.body.classList.add('menu-open');
      const firstLink = drawer.querySelector<HTMLElement>('[data-mobile-nav-link]');
      firstLink?.focus();
    } else {
      drawer.setAttribute('inert', '');
      drawer.classList.remove('is-open');
      document.body.classList.remove('menu-open');
    }
  }

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    setMenuState(!isExpanded);
  });

  drawer.querySelectorAll<HTMLAnchorElement>('a[href]').forEach((link) => {
    link.addEventListener('click', () => {
      setMenuState(false);
    });
  });

  document.addEventListener('keydown', (event) => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    if (!isExpanded) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      setMenuState(false);
      toggleBtn.focus();
      return;
    }

    if (event.key === 'Tab') {
      const drawerFocusables = Array.from(
        drawer.querySelectorAll<HTMLElement>(focusableSelector)
      );
      const allFocusables = [toggleBtn, ...drawerFocusables];
      if (allFocusables.length === 0) return;

      const first = allFocusables[0]!;
      const last = allFocusables[allFocusables.length - 1]!;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });
}

