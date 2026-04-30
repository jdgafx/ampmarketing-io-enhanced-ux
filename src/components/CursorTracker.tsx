'use client';

import { useEffect, useRef } from 'react';

export default function CursorTracker() {
  const glowRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!glow || !ring || !dot) return;

    const onMove = (e: MouseEvent) => {
      const t = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
      glow.style.transform = t;
      ring.style.transform = t;
      dot.style.transform = t;
    };

    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button')) ring.classList.add('is-link');
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button')) ring.classList.remove('is-link');
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
    };
  }, []);

  return (
    <>
      <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
