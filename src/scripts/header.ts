export function initHeader() {
  const header = document.querySelector<HTMLElement>('[data-site-header]');
  const sentinel = document.querySelector<HTMLElement>('[data-header-sentinel]');
  const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]'));

  if (header && sentinel && 'IntersectionObserver' in window) {
    const sentinelObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        header.classList.toggle('is-scrolled', !entry.isIntersecting);
      },
      { threshold: 0 }
    );
    sentinelObserver.observe(sentinel);
  }

  if (navLinks.length > 0 && 'IntersectionObserver' in window) {
    const sections = navLinks
      .map((link) => {
        const id = link.getAttribute('data-nav-link');
        return id ? document.getElementById(id) : null;
      })
      .filter((el): el is HTMLElement => Boolean(el));

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const activeId = entry.target.id;
            for (const link of navLinks) {
              const isMatch = link.getAttribute('data-nav-link') === activeId;
              if (isMatch) {
                link.setAttribute('aria-current', 'true');
              } else {
                link.removeAttribute('aria-current');
              }
            }
          }
        }
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );

    for (const section of sections) {
      sectionObserver.observe(section);
    }
  }
}

