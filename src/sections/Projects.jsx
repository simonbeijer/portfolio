import { useState } from "react";
import Reveal from "../components/Reveal.jsx";
import SectionLabel from "../components/SectionLabel.jsx";
import MagneticLink from "../components/MagneticLink.jsx";
import Placeholder from "../components/Placeholder.jsx";
import { CV } from "../data/cv.js";

function ProjectCard({ project, delay }) {
  const [hover, setHover] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);
  const showImage = project.image && !imgFailed;

  return (
    <Reveal delay={delay}>
      <a
        href={project.href || "#"}
        target="_blank"
        rel="noopener noreferrer"
        data-hoverable
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{ display: "block", position: "relative" }}
      >
        <div style={{ position: "relative", overflow: "hidden" }}>
          {showImage ? (
            <div style={{ aspectRatio: "4/3", overflow: "hidden", background: "var(--bg-2)", border: "1px solid var(--line)" }}>
              <img
                src={project.image}
                alt={project.name}
                onError={() => setImgFailed(true)}
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transform: hover ? "scale(1.04)" : "scale(1)", transition: "transform 1s cubic-bezier(.2,.7,.2,1)" }}
              />
            </div>
          ) : (
            <Placeholder label={project.name.toLowerCase()} ratio="4/3" style={{ transform: hover ? "scale(1.04)" : "scale(1)", transition: "transform 1s cubic-bezier(.2,.7,.2,1)" }} />
          )}
          <div style={{ position: "absolute", inset: 0, background: "var(--accent)", mixBlendMode: "multiply", opacity: hover ? 0.3 : 0, transition: "opacity .6s" }} />
          <div style={{ position: "absolute", bottom: "1rem", right: "1rem", fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", background: "var(--bg)", color: "var(--fg)", padding: "6px 10px", transform: hover ? "translateY(0)" : "translateY(120%)", opacity: hover ? 1 : 0, transition: "transform .5s cubic-bezier(.2,.7,.2,1), opacity .4s" }}>
            Visa case →
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: "1rem" }}>
          <h3 style={{ fontFamily: "var(--display)", fontWeight: 400, fontSize: "1.75rem", lineHeight: 1.1 }}>{project.name}</h3>
          <span style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".06em", color: "var(--fg-3)", textTransform: "uppercase" }}>{project.tag}</span>
        </div>
        <p style={{ fontSize: 14, color: "var(--fg-2)", marginTop: ".5rem", lineHeight: 1.5 }}>{project.desc}</p>
      </a>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projekt" data-section="Projekt" style={{ padding: "clamp(5rem, 10vw, 10rem) clamp(1.5rem, 5vw, 5rem)", borderTop: "1px solid var(--line)", background: "var(--bg-2)" }}>
      <SectionLabel n="03" label="Projekt" />
      <Reveal>
        <h2 style={{ fontFamily: "var(--display)", fontWeight: 400, fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1, marginTop: "3rem", marginBottom: "4rem", letterSpacing: "-0.02em" }}>
          Utvalda <em>projekt</em>
        </h2>
      </Reveal>

      <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "clamp(1.5rem, 3vw, 3rem)" }}>
        {CV.projects.map((p, i) => (
          <ProjectCard key={i} project={p} delay={i * 80} />
        ))}
      </div>

      <Reveal delay={400}>
        <div style={{ marginTop: "clamp(3rem, 6vw, 5rem)", display: "flex" }}>
          <MagneticLink href="https://github.com/simonbeijer" data-hoverable style={{ fontFamily: "var(--mono)", fontSize: 13, letterSpacing: ".06em", textTransform: "uppercase", borderBottom: "1px solid var(--fg)", paddingBottom: 2 }}>
            Fler projekt på GitHub <span style={{ color: "var(--accent)" }}>↗</span>
          </MagneticLink>
        </div>
      </Reveal>
    </section>
  );
}
