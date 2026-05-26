import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const wrap = useRef(null);
  const [hover, setHover] = useState(false);
  const [enabled] = useState(() =>
    typeof window !== "undefined" &&
    !matchMedia("(pointer: coarse)").matches &&
    !matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (!enabled) return;
    let x = 0, y = 0;
    const particles = [];
    const maxParticles = 60;
    let raf;

    const move = (e) => {
      x = e.clientX; y = e.clientY;
      for (let k = 0; k < 2; k++) {
        if (particles.length > maxParticles) particles.shift();
        particles.push({
          x: x + (Math.random() - 0.5) * 8,
          y: y + (Math.random() - 0.5) * 4,
          vx: (Math.random() - 0.5) * 0.6,
          vy: Math.random() * 0.5 + 0.3,
          life: 1,
          size: [2, 3, 4][Math.floor(Math.random() * 3)],
          hue: Math.random(),
        });
      }
    };
    const over = (e) => { if (e.target.closest("a,button,[data-hoverable]")) setHover(true); };
    const out  = (e) => { if (e.target.closest("a,button,[data-hoverable]")) setHover(false); };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    document.documentElement.style.cursor = "none";

    const tick = () => {
      const el = wrap.current;
      if (!el) { raf = requestAnimationFrame(tick); return; }

      for (let p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.08;
        p.life -= 0.018;
      }
      for (let i = particles.length - 1; i >= 0; i--) {
        if (particles[i].life <= 0) particles.splice(i, 1);
      }

      const parts = [];
      parts.push(`<div style="position:fixed;left:${x - 3}px;top:${y - 3}px;width:6px;height:6px;background:var(--accent);image-rendering:pixelated;pointer-events:none;"></div>`);
      if (hover) {
        parts.push(`<div style="position:fixed;left:${x - 3}px;top:${y - 3}px;width:6px;height:6px;background:var(--accent-3);image-rendering:pixelated;pointer-events:none;"></div>`);
      }
      for (let p of particles) {
        const col = p.hue < 0.55 ? "var(--accent)" : p.hue < 0.8 ? "var(--accent-3, #F5C742)" : "var(--accent-2, #E85B3B)";
        parts.push(`<div style="position:fixed;left:${p.x - p.size/2}px;top:${p.y - p.size/2}px;width:${p.size}px;height:${p.size}px;background:${col};opacity:${p.life};image-rendering:pixelated;pointer-events:none;"></div>`);
      }
      el.innerHTML = parts.join("");

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
      document.documentElement.style.cursor = "";
    };
  }, [hover, enabled]);

  if (!enabled) return null;

  return <div ref={wrap} style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 9999 }} />;
}
