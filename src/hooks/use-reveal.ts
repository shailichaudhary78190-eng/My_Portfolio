import { useEffect, useRef } from "react";

export function useRevealOnScroll(
  options: IntersectionObserverInit = { threshold: 0.15 }
) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      el.classList.remove("opacity-0", "translate-y-2");
      el.classList.add("animate-fade-in");
      return;
    }

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-fade-in");
          obs.unobserve(el);
        }
      });
    }, options);

    el.classList.add("opacity-0", "translate-y-2");
    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);

  return ref;
}
