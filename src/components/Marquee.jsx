export default function Marquee({ items, speed = 40 }) {
  const dup = [...items, ...items];
  return (
    <div style={{ overflow: "hidden", width: "100%", position: "relative", maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)" }}>
      <div style={{ display: "flex", gap: "2.5rem", width: "max-content", animation: `marquee ${speed}s linear infinite` }}>
        {dup.map((x, i) => (
          <span key={i} style={{ whiteSpace: "nowrap", fontFamily: "var(--display)", fontSize: "clamp(2rem, 5vw, 4rem)", fontStyle: "italic", color: "var(--fg)" }}>
            {x}<span style={{ color: "var(--accent)", margin: "0 1.5rem", fontStyle: "normal", fontFamily: "var(--mono)", fontSize: "0.4em", verticalAlign: "middle", letterSpacing: "0.1em" }}>/ /</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}
