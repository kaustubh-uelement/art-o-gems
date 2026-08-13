'use client';
import { useEffect, useRef } from 'react';

interface LoupeProps {
  svgString: string;
  lotNo: string;
  isSquare?: boolean;
}

const Z = 3.1;

export default function Loupe({ svgString, lotNo, isSquare }: LoupeProps) {
  const plateRef = useRef<HTMLDivElement>(null);
  const loupeRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const plate = plateRef.current;
    const loupe = loupeRef.current;
    const inner = innerRef.current;
    if (!plate || !loupe || !inner) return;

    function place(x: number, y: number) {
      const r = plate!.getBoundingClientRect();
      const L = loupe!.offsetWidth / 2;
      x = Math.max(0, Math.min(r.width, x));
      y = Math.max(0, Math.min(r.height, y));
      loupe!.style.left = x - L + 'px';
      loupe!.style.top = y - L + 'px';
      inner!.style.width = r.width * Z + 'px';
      inner!.style.height = r.height * Z + 'px';
      inner!.style.left = -(x * Z - L) + 'px';
      inner!.style.top = -(y * Z - L) + 'px';
    }

    function fromEvent(e: PointerEvent | TouchEvent) {
      const r = plate!.getBoundingClientRect();
      const p = (e as TouchEvent).touches
        ? (e as TouchEvent).touches[0]
        : (e as PointerEvent);
      place(p.clientX - r.left, p.clientY - r.top);
    }

    function reset() {
      const r = plate!.getBoundingClientRect();
      place(r.width * 0.36, r.height * 0.42);
    }

    const onTouchMove = (e: TouchEvent) => {
      fromEvent(e);
      e.preventDefault();
    };

    plate.addEventListener('pointermove', fromEvent as EventListener);
    plate.addEventListener('touchmove', onTouchMove, { passive: false });
    plate.addEventListener('pointerleave', reset);
    window.addEventListener('resize', reset);
    requestAnimationFrame(reset);

    return () => {
      plate.removeEventListener('pointermove', fromEvent as EventListener);
      plate.removeEventListener('touchmove', onTouchMove);
      plate.removeEventListener('pointerleave', reset);
      window.removeEventListener('resize', reset);
    };
  }, []);

  // Renders ONLY the .plate div — the outer figure.plate-wrap and figcaption
  // are provided by the parent page, giving each page full control over the caption.
  return (
    <div ref={plateRef} className={`plate${isSquare ? ' sq' : ''}`}>
      <div dangerouslySetInnerHTML={{ __html: svgString }} />
      <div ref={loupeRef} className="loupe" aria-hidden="true">
        <div
          ref={innerRef}
          className="loupe-inner"
          dangerouslySetInnerHTML={{ __html: svgString }}
        />
        <div className="cross">
          <i /><i /><i /><i />
        </div>
      </div>
      <div className="plate-tag">
        <span>Lot {lotNo}</span>
        <span className="hint">Move to inspect</span>
      </div>
    </div>
  );
}
