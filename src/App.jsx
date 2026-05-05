import { useEffect, useState } from "react";
import Cursor from "./components/Cursor.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Work from "./sections/Work.jsx";
import Projects from "./sections/Projects.jsx";
import Skills from "./sections/Skills.jsx";
import Contact from "./sections/Contact.jsx";
import { Analytics } from "@vercel/analytics/next"

const SECTIONS = [
  { id: "intro",   label: "Intro",      n: "00" },
  { id: "om",      label: "Om",         n: "01" },
  { id: "arbete",  label: "Arbete",     n: "02" },
  { id: "projekt", label: "Projekt",    n: "03" },
  { id: "skills",  label: "Kompetens",  n: "04" },
  { id: "kontakt", label: "Kontakt",    n: "05" },
];

function SideNav({ active, progress }) {
  return (
    <nav className="side-nav" style={{ position: "fixed", top: "50%", right: "clamp(1rem, 2vw, 2rem)", transform: "translateY(-50%)", zIndex: 50, display: "flex", flexDirection: "column", gap: ".8rem", mixBlendMode: "difference" }} aria-label="Sektioner">
      {SECTIONS.map((s) => {
        const isActive = active === s.id;
        return (
          <a key={s.id} href={`#${s.id}`} data-hoverable style={{ display: "flex", alignItems: "center", gap: ".8rem", justifyContent: "flex-end", color: "#fff", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", opacity: isActive ? 1 : 0.5, transition: "opacity .4s" }}>
            <span style={{ transform: isActive ? "translateX(0)" : "translateX(8px)", opacity: isActive ? 1 : 0, transition: "opacity .4s, transform .4s cubic-bezier(.2,.7,.2,1)", fontVariantNumeric: "tabular-nums" }}>
              {s.n} — {s.label}
            </span>
            <span style={{ width: isActive ? 28 : 14, height: 1, background: "#fff", transition: "width .5s cubic-bezier(.2,.7,.2,1)" }} />
          </a>
        );
      })}
      <div style={{ marginTop: ".8rem", width: 1, height: 40, background: "rgba(255,255,255,.2)", alignSelf: "flex-end", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: `${progress * 100}%`, background: "#fff", transition: "height .2s linear" }} />
      </div>
    </nav>
  );
}

function Curtain() {
  const [done, setDone] = useState(false);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let p = 0;
    const id = setInterval(() => {
      p += Math.random() * 18 + 6;
      if (p >= 100) { p = 100; clearInterval(id); setTimeout(() => setDone(true), 400); }
      setPct(Math.floor(p));
    }, 90);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9000,
      background: "var(--bg-2)", color: "var(--fg)",
      display: "flex", alignItems: "flex-end", justifyContent: "space-between",
      padding: "clamp(1.5rem, 4vw, 3rem)",
      transform: done ? "translateY(-100%)" : "translateY(0)",
      transition: "transform 1.1s cubic-bezier(.7,0,.2,1)",
      pointerEvents: done ? "none" : "auto",
    }}>
      <div style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase" }}>
        Laddar · Simon Beijer
      </div>
      <div style={{ fontFamily: "var(--display)", fontSize: "clamp(3rem, 10vw, 8rem)", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>
        {String(pct).padStart(3, "0")}
      </div>
    </div>
  );
}

function Tweaks({ open, tweaks, setTweaks }) {
  const accents = [
    { name: "Saffran",   v: "#E56A3B" },
    { name: "Skog",      v: "#4A6B5C" },
    { name: "Kobolt",    v: "#2E3A8C" },
    { name: "Plommon",   v: "#8B3A5F" },
    { name: "Solgul",    v: "#D9A441" },
  ];
  const fonts = ["Fraunces", "Instrument Serif", "Playfair Display", "DM Serif Display"];

  const update = (k, v) => {
    const next = { ...tweaks, [k]: v };
    setTweaks(next);
    try { window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { [k]: v } }, "*"); } catch {}
  };

  if (!open) return null;
  return (
    <div className="tweaks-panel" style={{
      position: "fixed", right: "clamp(1rem, 2vw, 2rem)", bottom: "clamp(1rem, 2vw, 2rem)",
      zIndex: 100, width: 300,
      background: "var(--bg)", color: "var(--fg)",
      border: "1px solid var(--line)",
      padding: "1.25rem",
      fontFamily: "var(--sans)", fontSize: 13,
      boxShadow: "0 20px 60px -20px rgba(0,0,0,.3)",
    }}>
      <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--fg-3)", marginBottom: "1rem" }}>
        — Tweaks
      </div>

      <div style={{ marginBottom: "1.25rem" }}>
        <div style={{ marginBottom: ".5rem", color: "var(--fg-3)", fontSize: 12 }}>Tema</div>
        <div style={{ display: "flex", gap: ".4rem" }}>
          {["light", "dark"].map((t) => (
            <button key={t} onClick={() => update("theme", t)} style={{ flex: 1, padding: ".5rem", background: tweaks.theme === t ? "var(--fg)" : "transparent", color: tweaks.theme === t ? "var(--bg)" : "var(--fg)", border: "1px solid var(--line)", fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", cursor: "pointer", transition: "all .3s" }}>
              {t === "light" ? "Ljust" : "Mörkt"}
            </button>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: "1.25rem" }}>
        <div style={{ marginBottom: ".5rem", color: "var(--fg-3)", fontSize: 12 }}>Accentfärg</div>
        <div style={{ display: "flex", gap: ".4rem", flexWrap: "wrap" }}>
          {accents.map((a) => (
            <button key={a.v} onClick={() => update("accent", a.v)} title={a.name} style={{ width: 28, height: 28, borderRadius: "50%", background: a.v, border: tweaks.accent === a.v ? "2px solid var(--fg)" : "1px solid var(--line)", cursor: "pointer", transition: "transform .2s", transform: tweaks.accent === a.v ? "scale(1.1)" : "scale(1)" }} />
          ))}
        </div>
      </div>

      <div>
        <div style={{ marginBottom: ".5rem", color: "var(--fg-3)", fontSize: 12 }}>Display-font</div>
        <select value={tweaks.displayFont} onChange={(e) => update("displayFont", e.target.value)} style={{ width: "100%", padding: ".5rem", background: "transparent", border: "1px solid var(--line)", color: "var(--fg)", fontFamily: "var(--sans)", fontSize: 12 }}>
          {fonts.map((f) => <option key={f} value={f}>{f}</option>)}
        </select>
      </div>
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState("intro");
  const [progress, setProgress] = useState(0);
  const [tweaksOpen, setTweaksOpen] = useState(false);
  const [tweaks, setTweaks] = useState(() => window.__TWEAKS__ ?? { theme: "dark", accent: "#8B3A5F", displayFont: "Gloock" });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", tweaks.theme);
    root.style.setProperty("--accent", tweaks.accent);
    root.style.setProperty("--display", `"${tweaks.displayFont}", "Times New Roman", serif`);

    if (["Playfair Display", "DM Serif Display", "Instrument Serif"].includes(tweaks.displayFont)) {
      const id = `font-${tweaks.displayFont.replace(/ /g, "-")}`;
      if (!document.getElementById(id)) {
        const l = document.createElement("link");
        l.id = id;
        l.rel = "stylesheet";
        l.href = `https://fonts.googleapis.com/css2?family=${tweaks.displayFont.replace(/ /g, "+")}:ital,wght@0,400;0,500;1,400&display=swap`;
        document.head.appendChild(l);
      }
    }
  }, [tweaks]);

  useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === "__activate_edit_mode") setTweaksOpen(true);
      if (e.data?.type === "__deactivate_edit_mode") setTweaksOpen(false);
    };
    window.addEventListener("message", handler);
    try { window.parent.postMessage({ type: "__edit_mode_available" }, "*"); } catch {}
    return () => window.removeEventListener("message", handler);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight);
      setProgress(Math.min(1, Math.max(0, p)));

      let best = "intro";
      let bestDist = Infinity;
      SECTIONS.forEach((s) => {
        const el = document.getElementById(s.id);
        if (!el) return;
        const r = el.getBoundingClientRect();
        const d = Math.abs(r.top - 100);
        if (r.top < window.innerHeight * 0.5 && d < bestDist) { bestDist = d; best = s.id; }
      });
      setActive(best);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Analytics />
      <Curtain />
      <Cursor />
      <SideNav active={active} progress={progress} />
      <Tweaks open={tweaksOpen} tweaks={tweaks} setTweaks={setTweaks} />

      <main>
        <Hero />
        <About />
        <Work />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
