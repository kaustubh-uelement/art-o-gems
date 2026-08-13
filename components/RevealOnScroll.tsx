'use client';
import { useEffect, useRef } from 'react';

export default function RevealOnScroll({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = Array.from(el.querySelectorAll<HTMLElement>('.rise'));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).classList.add('in');
          io.unobserve(e.target);
        }
      }),
      { rootMargin: '0px 0px -6% 0px' }
    );
    items.forEach((n, i) => {
      n.style.transitionDelay = Math.min(i % 5, 4) * 65 + 'ms';
      io.observe(n);
    });
    return () => io.disconnect();
  }, []);
  return <div ref={ref}>{children}</div>;
}
