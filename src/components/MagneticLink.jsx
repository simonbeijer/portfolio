import { useRef } from "react";

export default function MagneticLink({ children, href = "#", className = "", style = {}, strength = 8, ...rest }) {
  const ref = useRef(null);
  const handleMove = (e) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) / r.width * strength;
    const y = (e.clientY - r.top - r.height / 2) / r.height * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };
  const reset = () => { if (ref.current) ref.current.style.transform = "translate(0,0)"; };
  return (
    <a href={href} className={className} style={{ display: "inline-block", transition: "transform .4s cubic-bezier(.2,.7,.2,1)", ...style }} ref={ref} onMouseMove={handleMove} onMouseLeave={reset} {...rest}>
      {children}
    </a>
  );
}
