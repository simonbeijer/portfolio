import { useEffect, useRef, useState } from "react";

export default function SplitText({ text, delay = 0, stagger = 35, by = "word", className = "", style = {} }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setVisible(true); io.unobserve(el); } });
    }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const parts = by === "word" ? text.split(" ") : [...text];

  return (
    <span ref={ref} className={className} style={{ display: "inline-block", ...style }}>
      {parts.map((p, i) => (
        <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", paddingTop: "0.15em", marginTop: "-0.15em", paddingBottom: "0.1em", marginBottom: "-0.1em", paddingRight: "0.25em", marginRight: "-0.25em" }}>
          <span
            style={{
              display: "inline-block",
              transform: visible ? "translateY(0)" : "translateY(110%)",
              opacity: visible ? 1 : 0,
              transition: `transform .9s cubic-bezier(.2,.75,.2,1) ${delay + i * stagger}ms, opacity .9s ease ${delay + i * stagger}ms`,
            }}
          >
            {p}{by === "word" && i < parts.length - 1 ? " " : ""}
          </span>
        </span>
      ))}
    </span>
  );
}
