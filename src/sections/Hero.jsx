import { useEffect, useState } from "react";
import Reveal from "../components/Reveal.jsx";
import SplitText from "../components/SplitText.jsx";
import MagneticLink from "../components/MagneticLink.jsx";
import { CV } from "../data/cv.js";

export default function Hero() {
  const [t, setT] = useState("");
  useEffect(() => {
    const f = () => {
      const d = new Date();
      const opts = { hour: "2-digit", minute: "2-digit", second: "2-digit", timeZone: "Europe/Stockholm" };
      setT(new Intl.DateTimeFormat("sv-SE", opts).format(d));
    };
    f();
    const id = setInterval(f, 1000);
    return () => clearInterval(id);
  }, []);

  const first = CV.name.split(" ")[0];

  return (
    <section id="intro" data-section="Intro" style={{ minHeight: "100vh", padding: "clamp(3rem, 8vw, 8rem) clamp(1.5rem, 5vw, 5rem) 5rem", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative" }}>
      <Reveal>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", fontFamily: "var(--mono)", fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--fg-3)" }}>
          <div>Digitalt CV · 2026</div>
          <div>{CV.location} · {t}</div>
        </div>
      </Reveal>

      <div style={{ margin: "clamp(3rem, 10vw, 8rem) 0 0", maxWidth: 1400 }}>
        <div style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--fg-3)", marginBottom: "1.5rem" }}>
          <Reveal delay={100}>— Portfolio & CV</Reveal>
        </div>
        <h1 style={{ fontFamily: "var(--display)", fontWeight: 400, fontSize: "clamp(3.5rem, 11vw, 11rem)", lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "2rem", paddingTop: "0.1em" }}>
          <div><SplitText text={first} delay={200} stagger={80} /></div>
          <div style={{ fontStyle: "italic", color: "var(--fg-2)" }}><SplitText text="Beijer" delay={600} stagger={80} /></div>
        </h1>
        <div style={{ maxWidth: 640, fontSize: "clamp(1.05rem, 1.4vw, 1.35rem)", color: "var(--fg-2)", lineHeight: 1.5, textWrap: "pretty" }}>
          <Reveal delay={1200}><p>{CV.intro}</p></Reveal>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "4rem", flexWrap: "wrap", gap: "2rem" }}>
        <Reveal delay={1400}>
          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
            {CV.social.map((s) => (
              <MagneticLink key={s.label} href={s.href} data-hoverable style={{ fontFamily: "var(--mono)", fontSize: 13, letterSpacing: ".06em", textTransform: "uppercase", borderBottom: "1px solid var(--fg)", paddingBottom: 2 }}>
                {s.label} <span style={{ color: "var(--accent)" }}>↗</span>
              </MagneticLink>
            ))}
          </div>
        </Reveal>
        <Reveal delay={1600}>
          <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--fg-3)", display: "flex", alignItems: "center", gap: ".6rem" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", animation: "pulse 2s ease-in-out infinite" }} />
            Tillgänglig för uppdrag
          </div>
        </Reveal>
      </div>

      <style>{`@keyframes pulse { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: .4; transform: scale(.85); } }`}</style>
    </section>
  );
}
