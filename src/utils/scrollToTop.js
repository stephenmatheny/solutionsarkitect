export function scrollToHashOrTop(hash) {
  const prefersReducedMotion = window.matchMedia?.(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const behavior = prefersReducedMotion ? "auto" : "smooth";

  if (hash) {
    const target = document.querySelector(hash);

    if (target) {
      const { top } = target.getBoundingClientRect();
      const absoluteTop = window.pageYOffset + top;

      window.scrollTo({ top: absoluteTop, left: 0, behavior });
      return;
    }
  }

  window.scrollTo({ top: 0, left: 0, behavior });
}

export default scrollToHashOrTop;
