import { useState, useEffect, useRef } from 'react';

export function useScrollReveal(threshold = 0.15) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    // Brauzer muhitini tekshirish
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Agar element belgilangan qismdan ko'proq ko'rinsa
        if (entry.isIntersecting) {
          setVisible(true);
          // Bir marta ko'ringandan keyin kuzatishni to'xtatish (ixtiyoriy)
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        threshold: threshold, // Elementning qancha qismi ko'ringanda trigger bo'lishi
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return { ref, visible };
}