import Reveal from "../components/Reveal.jsx";
import SectionLabel from "../components/SectionLabel.jsx";
import Marquee from "../components/Marquee.jsx";
import { CV } from "../data/cv.js";

export default function Skills() {
  return (
    <section id="skills" data-section="Skills" style={{ padding: "clamp(5rem, 10vw, 10rem) 0 clamp(5rem, 10vw, 10rem)", borderTop: "1px solid var(--line)" }}>
      <div style={{ padding: "0 clamp(1.5rem, 5vw, 5rem)" }}>
        <SectionLabel n="04" label="Kompetens" />
        <Reveal>
          <h2 style={{ fontFamily: "var(--display)", fontWeight: 400, fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1, marginTop: "3rem", marginBottom: "4rem", letterSpacing: "-0.02em" }}>
            Vad jag <em>gör</em>
          </h2>
        </Reveal>
      </div>

      <Reveal>
        <div style={{ padding: "2rem 0", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", marginBottom: "4rem" }}>
          <Marquee items={["Vue.js", "React", "Next.js", "PHP", "Python", "TypeScript", "Node.js", "Docker", "LLM / RAG", "MCP", "Laravel", "Vercel"]} speed={45} />
        </div>
      </Reveal>

      <div style={{ padding: "0 clamp(1.5rem, 5vw, 5rem)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "clamp(2rem, 4vw, 4rem)" }}>
        {Object.entries(CV.skills).map(([cat, items], i) => {
          const scale = [1.7, 1.4, 1.2, 1.0][i] || 1.0;
          const opacity = [1, 0.9, 0.8, 0.7][i] || 0.7;
          return (
            <Reveal key={cat} delay={i * 80}>
              <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--fg-3)", marginBottom: "1.5rem", borderBottom: "1px solid var(--line)", paddingBottom: ".8rem", display: "flex", justifyContent: "space-between" }}>
                <span>— {cat}</span>
                <span>{String(i + 1).padStart(2, "0")}</span>
              </div>
              <ul style={{ listStyle: "none" }}>
                {items.map((it, j) => (
                  <li key={j} style={{ fontFamily: "var(--display)", fontSize: `clamp(1rem, ${scale}vw, ${scale}rem)`, lineHeight: 1.25, padding: ".25rem 0", opacity }}>
                    {it}
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </div>

      <div className="skills-bottom-grid" style={{ padding: "5rem clamp(1.5rem, 5vw, 5rem) 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem, 5vw, 5rem)" }}>
        <div>
          <Reveal>
            <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--fg-3)", marginBottom: "1.5rem" }}>— Utbildning</div>
          </Reveal>
          {CV.education.map((e, i) => (
            <Reveal key={i} delay={i * 80}>
              <div style={{ padding: "1rem 0", borderTop: "1px solid var(--line)", display: "grid", gridTemplateColumns: "120px 1fr", gap: "1.5rem", alignItems: "baseline" }}>
                <span style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--fg-3)" }}>{e.year}</span>
                <div>
                  <div style={{ fontFamily: "var(--display)", fontSize: "1.4rem", lineHeight: 1.2 }}>{e.school}</div>
                  <div style={{ fontSize: 13, color: "var(--fg-3)", marginTop: ".2rem" }}>{e.program}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div>
          <Reveal>
            <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--fg-3)", marginBottom: "1.5rem" }}>— Utanför kod</div>
          </Reveal>
          {CV.interests.map((a, i) => (
            <Reveal key={i} delay={i * 80}>
              <div style={{ padding: "1rem 0", borderTop: "1px solid var(--line)", display: "grid", gridTemplateColumns: "120px 1fr", gap: "1.5rem", alignItems: "baseline" }}>
                <span style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--fg-3)" }}>0{i + 1}</span>
                <div style={{ fontFamily: "var(--display)", fontSize: "1.4rem", lineHeight: 1.2 }}>{a.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
