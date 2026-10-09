import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const auraRef = useRef(null);

  const dotPos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const auraPos = useRef({ x: -100, y: -100 });
  const dotVel = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: -100, y: -100 });
  const raf = useRef(0);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(pointer: fine)');
    const update = () => setEnabled(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add('cursor-enabled');

    const spring = 0.25;
    const damping = 0.72;

    const animate = () => {
      // 1. Dot: near-instant precise follow
      dotPos.current.x += (mouse.current.x - dotPos.current.x) * 0.65;
      dotPos.current.y += (mouse.current.y - dotPos.current.y) * 0.65;

      // 2. Ring: spring physics for smooth fluid trailing
      const dx = mouse.current.x - ringPos.current.x;
      const dy = mouse.current.y - ringPos.current.y;
      dotVel.current.x = (dotVel.current.x + dx * spring) * damping;
      dotVel.current.y = (dotVel.current.y + dy * spring) * damping;
      ringPos.current.x += dotVel.current.x;
      ringPos.current.y += dotVel.current.y;

      // 3. Aura: smooth ambient glow lag
      auraPos.current.x += (mouse.current.x - auraPos.current.x) * 0.15;
      auraPos.current.y += (mouse.current.y - auraPos.current.y) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }
      if (auraRef.current) {
        auraRef.current.style.transform = `translate3d(${auraPos.current.x}px, ${auraPos.current.y}px, 0)`;
      }
      raf.current = requestAnimationFrame(animate);
    };

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      const element = e.target instanceof Element ? e.target : null;
      const interactive = element?.closest('a, button, input, textarea, select, [data-cursor]');

      ringRef.current?.classList.toggle('cursor-hover', Boolean(interactive));
      ringRef.current?.classList.toggle('cursor-magnetic', Boolean(interactive?.closest('[data-magnetic]')));
      if (auraRef.current) {
        auraRef.current.style.opacity = '0.4';
      }
    };

    const onMouseDown = () => {
      ringRef.current?.classList.add('cursor-down');
    };
    const onMouseUp = () => {
      ringRef.current?.classList.remove('cursor-down');
    };

    const onLeave = () => {
      ringRef.current?.classList.add('cursor-hidden');
      dotRef.current?.classList.add('cursor-hidden');
      auraRef.current?.classList.add('cursor-hidden');
    };
    const onEnter = () => {
      ringRef.current?.classList.remove('cursor-hidden');
      dotRef.current?.classList.remove('cursor-hidden');
      auraRef.current?.classList.remove('cursor-hidden');
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.documentElement.addEventListener('mouseenter', onEnter);
    raf.current = requestAnimationFrame(animate);

    return () => {
      document.documentElement.classList.remove('cursor-enabled');
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      document.documentElement.removeEventListener('mouseenter', onEnter);
      cancelAnimationFrame(raf.current);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={auraRef} className="custom-cursor-aura" aria-hidden="true" />
      <div ref={dotRef} className="custom-cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="custom-cursor-ring" aria-hidden="true" />
    </>
  );
}


