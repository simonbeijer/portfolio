import Reveal from "./Reveal.jsx";

export default function SectionLabel({ n, label }) {
  return (
    <Reveal>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--fg-3)" }}>
        <span>— {n}</span>
        <span style={{ flex: 0, width: "2rem", height: 1, background: "var(--line)" }} />
        <span>{label}</span>
      </div>
    </Reveal>
  );
}
