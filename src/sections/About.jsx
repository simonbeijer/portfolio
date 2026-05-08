import Reveal from "../components/Reveal.jsx";
import SectionLabel from "../components/SectionLabel.jsx";

export default function About() {
  return (
    <section id="om" data-section="Om" style={{ padding: "clamp(5rem, 10vw, 10rem) clamp(1.5rem, 5vw, 5rem)", borderTop: "1px solid var(--line)" }}>
      <SectionLabel n="01" label="Om" />
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr", gap: "clamp(2rem, 6vw, 6rem)", marginTop: "3rem", maxWidth: 1100 }}>
        <div>
          <h2 className="about-heading" style={{ fontFamily: "var(--display)", fontWeight: 400, fontSize: "clamp(2rem, 4.5vw, 4rem)", lineHeight: 1.05, letterSpacing: "-0.015em", marginBottom: "2rem", textWrap: "balance" }}>
            <Reveal>
              En utvecklare som tycker om <em style={{ color: "var(--accent)" }}>hela stacken</em> — från databas till <em>detaljen som gör att något känns rätt</em>.
            </Reveal>
          </h2>
          <Reveal delay={100} style={{ color: "var(--fg-2)", fontSize: "1.05rem", lineHeight: 1.6, maxWidth: 560, marginBottom: "3rem" }}>
            <p>3+ år på Keeros med Vue, PHP och MySQL över hela stacken, med fokus på refaktorering av legacy-kod och säkerhetsarbete mot SQL-injections. Tidigare React, React Native och Node hos Hive and Five, samt Vue hos Imseb. Senaste året har jag breddat mig mot AI och maskininlärning genom Medieinstitutet och egna projekt. Använder Claude Code och andra AI-verktyg dagligen i arbetsflödet, och deployar egna projekt via GitHub Actions till Vercel och Docker.</p>
            <p style={{ marginTop: "1rem" }}>Utanför kod: jiu jitsu, musikproduktion och gaming.</p>
          </Reveal>

          <div className="about-stats" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "2rem", borderTop: "1px solid var(--line)", paddingTop: "2rem", maxWidth: 800 }}>
            {[
              { n: "4", l: "år som utvecklare" },
              { n: "GBG", l: "— Sverige" },
              { n: "AI & ML", l: "YH, 2025–26" },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 100}>
                <div style={{ fontFamily: "var(--display)", fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1, padding: "0px 0px 0px 12px" }}>{s.n}</div>
                <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--fg-3)", marginTop: ".5rem" }}>{s.l}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
