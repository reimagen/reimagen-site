import { useEffect, useMemo, useRef, useState } from "react";

/**
 * Lightweight IntersectionObserver reveal with optional stagger and reduced-motion support.
 */
export default function useReveal({ threshold = 0.2, rootMargin = "0px", delayMs = 0, reduceMotion = false } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(reduceMotion);

  useEffect(() => {
    if (reduceMotion) {
      const frameId = requestAnimationFrame(() => setIsVisible(true));
      return () => cancelAnimationFrame(frameId);
    }

    const node = ref.current;
    if (!node || isVisible) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isVisible, reduceMotion, rootMargin, threshold]);

  const transitionStyle = useMemo(
    () => ({ transitionDelay: isVisible ? `${delayMs}ms` : "0ms" }),
    [delayMs, isVisible]
  );

  return { ref, isVisible, transitionStyle };
}
