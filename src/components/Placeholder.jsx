export default function Placeholder({ label = "image", ratio = "4/5", style = {} }) {
  return (
    <div style={{ aspectRatio: ratio, background: "var(--bg-2)", border: "1px solid var(--line)", position: "relative", overflow: "hidden", ...style }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(135deg, transparent 0 10px, var(--line) 10px 11px)", opacity: .6 }} />
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--fg-3)", letterSpacing: ".08em", textTransform: "uppercase", background: "var(--bg)", padding: "4px 8px", border: "1px solid var(--line)" }}>{label}</span>
      </div>
    </div>
  );
}
