import Reveal from "../components/Reveal.jsx";
import MagneticLink from "../components/MagneticLink.jsx";
import { CV } from "../data/cv.js";

export default function Contact() {
  return (
    <section id="kontakt" data-section="Kontakt" style={{ padding: "clamp(6rem, 12vw, 12rem) clamp(1.5rem, 5vw, 5rem) clamp(3rem, 6vw, 6rem)", borderTop: "1px solid var(--line)", background: "var(--bg-2)", color: "var(--fg)", position: "relative" }}>
      <div style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--fg-3)", marginBottom: "3rem" }}>
        <Reveal>— 05 / Kontakt</Reveal>
      </div>
      <Reveal>
        <h2 style={{ fontFamily: "var(--display)", fontWeight: 400, fontSize: "clamp(3rem, 10vw, 10rem)", lineHeight: 1.08, letterSpacing: "-0.02em", textWrap: "balance", marginBottom: "3rem" }}>
          Låt oss <em style={{ color: "var(--accent)" }}>bygga</em><br />något <em>tillsammans</em>.
        </h2>
      </Reveal>
      <Reveal delay={200}>
        <MagneticLink href={`mailto:${CV.email}`} data-hoverable strength={16} style={{ fontFamily: "var(--display)", fontSize: "clamp(1.5rem, 3vw, 2.5rem)", borderBottom: "1px solid currentColor", paddingBottom: ".3rem" }}>
          {CV.email} ↗
        </MagneticLink>
      </Reveal>

      <div style={{ marginTop: "clamp(4rem, 10vw, 8rem)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem", paddingTop: "3rem", borderTop: "1px solid var(--line)" }}>
        {[
          { label: "Email", value: CV.email },
          { label: "GitHub", value: "simonbeijer" },
          { label: "Baserad", value: CV.location },
          { label: "Status", value: "Öppen för uppdrag" },
        ].map((x, i) => (
          <Reveal key={i} delay={i * 80}>
            <div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--fg-3)", marginBottom: ".5rem" }}>{x.label}</div>
              <div style={{ fontFamily: "var(--display)", fontSize: "1.3rem" }}>{x.value}</div>
            </div>
          </Reveal>
        ))}
      </div>

      <div style={{ marginTop: "5rem", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--fg-3)", flexWrap: "wrap", gap: "1rem" }}>
          <span>© {new Date().getFullYear()} {CV.name}</span>
          <span>Senast uppdaterad apr 2026</span>
        </div>
    </section>
  );
}
