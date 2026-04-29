import { useState } from "react";
import Reveal from "../components/Reveal.jsx";
import SectionLabel from "../components/SectionLabel.jsx";
import { CV } from "../data/cv.js";

export default function Work() {
  const [hovered, setHovered] = useState(null);
  return (
    <section id="arbete" data-section="Arbete" style={{ padding: "clamp(5rem, 10vw, 10rem) clamp(1.5rem, 5vw, 5rem)", borderTop: "1px solid var(--line)" }}>
      <SectionLabel n="02" label="Arbete" />
      <Reveal>
        <h2 style={{ fontFamily: "var(--display)", fontWeight: 400, fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1, marginTop: "3rem", marginBottom: "4rem", letterSpacing: "-0.02em" }}>
          Urval av <em>erfarenhet</em>
        </h2>
      </Reveal>

      <div style={{ borderTop: "1px solid var(--line)" }} onMouseLeave={() => setHovered(null)}>
        {CV.work.map((w, i) => (
          <Reveal key={i} delay={i * 60}>
            <div
              className="work-row"
              data-hoverable
              onMouseEnter={() => setHovered(i)}
              style={{
                display: "grid",
                gridTemplateColumns: "140px 1.2fr 1fr auto",
                gap: "2rem",
                alignItems: "baseline",
                padding: "2rem 0",
                borderBottom: "1px solid var(--line)",
                cursor: "pointer",
                transition: "padding .5s cubic-bezier(.2,.7,.2,1), opacity .5s",
                paddingLeft: hovered === i ? "1.5rem" : "0",
                opacity: hovered === null || hovered === i ? 1 : 0.35,
                position: "relative",
              }}
            >
              <span style={{ position: "absolute", left: 0, top: "50%", transform: `translateY(-50%) scaleX(${hovered === i ? 1 : 0})`, transformOrigin: "left", width: "1rem", height: 1, background: "var(--accent)", transition: "transform .5s cubic-bezier(.2,.7,.2,1)" }} />
              <div style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: ".05em", color: "var(--fg-3)" }}>{w.year}</div>
              <div>
                <div style={{ fontFamily: "var(--display)", fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)", lineHeight: 1.1 }}>{w.company}</div>
                <div style={{ fontSize: 14, color: "var(--fg-3)", marginTop: ".3rem" }}>{w.role} · {w.city}</div>
              </div>
              <div style={{ fontSize: 14, color: "var(--fg-2)", lineHeight: 1.5, maxWidth: 420, textWrap: "pretty" }}>{w.blurb}</div>
              <div className="work-arrow" style={{ fontFamily: "var(--mono)", fontSize: 18, color: "var(--accent)", transform: hovered === i ? "translateX(6px)" : "translateX(0)", transition: "transform .5s cubic-bezier(.2,.7,.2,1)" }}>→</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
