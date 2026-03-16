import { useState, useEffect } from "react";

const CTA_LINK = "https://chat.whatsapp.com/LR1XkXae3KP0AzM9PCY1QC";

const BG_MAIN = "#0A0A0F";
const BG_DARK = "#0D0D13";
const GREEN = "#25D366";
const GREEN_D = "#1EAA52";
const PURPLE = "#7B3FE4";
const TEXT_M = "#A0A8BE";

function WaButton({ label = "Entre no meu grupo", style = {}, size = "md" }: {
  label?: string; style?: React.CSSProperties; size?: "md" | "lg";
}) {
  const [h, setH] = useState(false);
  const lg = size === "lg";
  return (
    <a
      href={CTA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: 10,
        padding: lg ? "16px 36px" : "12px 26px",
        background: h ? GREEN_D : GREEN,
        color: "#fff", fontWeight: 700,
        fontFamily: "'Plus Jakarta Sans',sans-serif",
        fontSize: lg ? 16 : 14,
        borderRadius: 999,
        textDecoration: "none",
        transition: "all 0.2s",
        boxShadow: h ? "0 6px 28px rgba(37,211,102,0.38)" : "0 2px 14px rgba(37,211,102,0.22)",
        transform: h ? "scale(1.03)" : "scale(1)",
        ...style
      }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      {label}
    </a>
  );
}

function TickerCard({ symbol, value, change, positive, bull, style = {} }: {
  symbol: string; value: string; change: string; positive: boolean; bull?: string; style?: React.CSSProperties;
}) {
  return (
    <div style={{
      background: "rgba(13,13,22,0.82)",
      backdropFilter: "blur(16px)",
      border: "1px solid rgba(255,255,255,0.09)",
      borderRadius: 14, padding: "10px 14px",
      display: "flex", flexDirection: "column", gap: 3,
      minWidth: 148,
      ...style
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
        <div style={{
          width: 24, height: 24, borderRadius: "50%",
          background: positive ? "rgba(37,211,102,0.2)" : "rgba(255,80,80,0.2)",
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700,
          color: positive ? GREEN : "#FF5050"
        }}>
          {bull || (positive ? "₿" : "◎")}
        </div>
        <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: 12, color: "rgba(255,255,255,0.75)" }}>{symbol}</span>
      </div>
      <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 15, color: "#fff", letterSpacing: "-0.01em" }}>{value}</div>
      <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 12, color: positive ? GREEN : "#FF5050", fontWeight: 700 }}>{change}</div>
    </div>
  );
}

function ProfitBadge({ value, style = {} }: { value: string; style?: React.CSSProperties }) {
  return (
    <div style={{
      background: "rgba(37,211,102,0.14)", border: "1px solid rgba(37,211,102,0.32)",
      borderRadius: 8, padding: "7px 14px", display: "inline-flex", alignItems: "center", gap: 6,
      fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 13, color: GREEN,
      backdropFilter: "blur(10px)",
      whiteSpace: "nowrap",
      ...style
    }}>▲ {value}</div>
  );
}

function AvatarGroup({ count }: { count: string }) {
  const colors = ["#7B3FE4", "#25D366", "#FF6B35", "#3B82F6", "#EC4899"];
  const initials = ["LF", "AC", "RM", "JC", "MS"];
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <div style={{ display: "flex" }}>
        {initials.map((init, i) => (
          <div key={i} style={{
            width: 34, height: 34, borderRadius: "50%",
            background: colors[i], border: "2.5px solid #0A0A0F",
            marginLeft: i === 0 ? 0 : -11, zIndex: 5 - i,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 11, color: "#fff"
          }}>{init}</div>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{
          background: "rgba(37,211,102,0.15)", border: "1px solid rgba(37,211,102,0.32)",
          borderRadius: 20, padding: "4px 12px",
          fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 13, color: GREEN,
        }}>{count}</span>
        <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 13, color: TEXT_M }}>Só falta você!</span>
      </div>
    </div>
  );
}

function VideoCard({ active, name, idx }: { active: boolean; name: string; idx: number }) {
  const colors = ["#7B3FE4", "#25D366", "#EC4899", "#3B82F6", "#F59E0B"];
  return (
    <div style={{
      borderRadius: 16, overflow: "hidden",
      background: "#12121E",
      border: active ? "2px solid rgba(123,63,228,0.55)" : "1px solid rgba(255,255,255,0.05)",
      transform: active ? "scale(1.05)" : "scale(0.9)",
      opacity: active ? 1 : 0.45,
      transition: "all 0.35s ease",
      minWidth: active ? 200 : 160,
      aspectRatio: "9/16",
      display: "flex", flexDirection: "column",
      justifyContent: "flex-end", position: "relative", flexShrink: 0
    }}>
      <div style={{
        position: "absolute", inset: 0,
        background: `linear-gradient(160deg, ${colors[idx % colors.length]}22 0%, #0D0D1A 100%)`,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12
      }}>
        {active && (
          <div style={{
            width: 52, height: 52, borderRadius: "50%",
            background: "rgba(37,211,102,0.15)", border: "2px solid rgba(37,211,102,0.4)",
            display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill={GREEN}>
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        )}
        <div style={{
          fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 12,
          color: active ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.3)",
          textAlign: "center", padding: "0 14px", fontWeight: 600
        }}>{name}</div>
        <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 10, color: TEXT_M }}>Depoimento</div>
      </div>
      {active && (
        <div style={{ position: "relative", zIndex: 2, background: "rgba(8,8,18,0.88)", padding: "10px 14px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ flex: 1, height: 2, background: "rgba(255,255,255,0.1)", borderRadius: 1, position: "relative" }}>
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "30%", background: GREEN, borderRadius: 1 }} />
            </div>
            <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 10, color: TEXT_M }}>0:42</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function VitaoIBLP() {
  const [scrolled, setScrolled] = useState(false);
  const [slide, setSlide] = useState(1);
  const [ready, setReady] = useState(false);
  const total = 5;
  const names = ["Trader Lucas F.", "Ana Carolina P.", "Rodrigo Mendes", "Juliana Costa", "Marcos Silva"];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    // Mark ready after mount so animations run
    const t = setTimeout(() => setReady(true), 50);
    return () => {
      window.removeEventListener("scroll", fn);
      clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % total), 4000);
    return () => clearInterval(t);
  }, []);

  const heroStyle: React.CSSProperties = {
    opacity: ready ? 1 : 0,
    transform: ready ? "translateY(0)" : "translateY(18px)",
    transition: "opacity 0.7s ease, transform 0.7s ease",
  };

  return (
    <div style={{ background: BG_MAIN, minHeight: "100vh", color: "#fff", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        body{background:${BG_MAIN};font-family:'Plus Jakarta Sans',sans-serif;}
        ::selection{background:rgba(123,63,228,.35);}
        ::-webkit-scrollbar{width:4px;}
        ::-webkit-scrollbar-track{background:${BG_MAIN};}
        ::-webkit-scrollbar-thumb{background:rgba(123,63,228,.4);border-radius:2px;}
        @keyframes floatA{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
        @keyframes floatB{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
        @keyframes livePulse{0%,100%{box-shadow:0 0 0 0 rgba(239,68,68,.5)}70%{box-shadow:0 0 0 12px rgba(239,68,68,0)}}
        .flt{animation:floatA 4s ease-in-out infinite}
        .flt2{animation:floatB 5.5s 1.2s ease-in-out infinite}
        .livepulse{animation:livePulse 1.8s ease-in-out infinite}
        button{background:none;border:none;cursor:pointer;padding:0;}
        @media(max-width:768px){
          .hero-grid{flex-direction:column!important;}
          .about-grid{flex-direction:column!important;}
          .hero-right{display:none!important;}
        }
      `}</style>

      {/* ──── NAVBAR ──── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 999,
        background: scrolled ? "rgba(10,10,15,.94)" : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,.05)" : "none",
        transition: "all .3s",
        padding: "14px 40px",
        display: "flex", justifyContent: "center", alignItems: "center"
      }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
          <div style={{
            width: 42, height: 42, borderRadius: 11,
            background: "rgba(123,63,228,.18)", border: "1.5px solid rgba(123,63,228,.55)",
            display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2 L12 22 M7 5 L12 2 L17 5 M7 19 L12 22 L17 19 M4 9 L7 7 M20 9 L17 7 M4 15 L7 17 M20 15 L17 17"
                stroke="#7B3FE4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span style={{
            fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 9,
            color: "rgba(255,255,255,.5)", letterSpacing: "0.16em", marginTop: 2
          }}>VITÃO IB</span>
        </div>
      </nav>

      {/* ──── HERO ──── */}
      <section style={{ minHeight: "100vh", position: "relative", overflow: "hidden", display: "flex", alignItems: "center" }}>

        {/* BG gradient */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(140deg,#06060E 0%,#0C0920 55%,#070716 100%)" }} />

        {/* Radial glow left */}
        <div style={{ position: "absolute", top: "30%", left: "-10%", width: "50%", height: "70%", background: "radial-gradient(ellipse, rgba(123,63,228,.06) 0%, transparent 70%)", pointerEvents: "none" }} />

        {/* Chart SVG decoration — right side */}
        <div style={{ position: "absolute", right: 0, top: 0, width: "70%", height: "100%", opacity: 0.38 }}>
          <svg width="100%" height="100%" viewBox="0 0 900 800" preserveAspectRatio="xMaxYMid slice">
            <defs>
              <linearGradient id="lg1" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#7B3FE4" stopOpacity="0" />
                <stop offset="35%" stopColor="#7B3FE4" stopOpacity=".8" />
                <stop offset="100%" stopColor="#25D366" stopOpacity=".35" />
              </linearGradient>
              <linearGradient id="lg2" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
                <stop offset="50%" stopColor="#3B82F6" stopOpacity=".55" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7B3FE4" stopOpacity=".18" />
                <stop offset="100%" stopColor="#7B3FE4" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[...Array(26)].map((_, i) => {
              const x = 60 + i * 32;
              const base = 280 + Math.sin(i * .65) * 55 + Math.cos(i * .35) * 28;
              const h = 28 + Math.abs(Math.sin(i * .9)) * 44;
              const bull = i % 3 !== 0;
              return (
                <g key={i}>
                  <line x1={x + 7} y1={base - 14} x2={x + 7} y2={base + h + 14}
                    stroke={bull ? "rgba(37,211,102,.3)" : "rgba(255,80,80,.3)"} strokeWidth="1.2" />
                  <rect x={x} y={base} width={14} height={h}
                    fill={bull ? "rgba(37,211,102,.6)" : "rgba(255,80,80,.5)"} rx="1.5" />
                </g>
              );
            })}
            <polyline points="60,520 130,478 210,490 300,415 390,378 480,338 560,302 640,268 720,238 810,204 900,168"
              fill="none" stroke="url(#lg1)" strokeWidth="2.5" />
            <polygon points="60,520 130,478 210,490 300,415 390,378 480,338 560,302 640,268 720,238 810,204 900,168 900,700 60,700"
              fill="url(#areaGrad)" />
            <polyline points="60,570 160,548 270,538 380,510 490,478 600,448 720,412 840,378 900,358"
              fill="none" stroke="url(#lg2)" strokeWidth="1.5" />
            {[200, 300, 400, 500].map(y => (
              <line key={y} x1="0" y1={y} x2="900" y2={y}
                stroke="rgba(255,255,255,.04)" strokeWidth="1" strokeDasharray="6,12" />
            ))}
          </svg>
        </div>

        {/* Left gradient fog */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg,rgba(7,7,14,1) 0%,rgba(7,7,14,.9) 38%,rgba(7,7,14,.25) 68%,rgba(7,7,14,.55) 100%)" }} />

        {/* Content */}
        <div className="hero-grid" style={{
          position: "relative", zIndex: 10, width: "100%", maxWidth: 1200,
          margin: "0 auto", padding: "90px 48px 72px",
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40
        }}>

          {/* LEFT — Copy */}
          <div style={{ flex: "0 0 auto", maxWidth: 510, ...heroStyle }}>

            {/* Badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.13)",
              borderRadius: 20, padding: "7px 18px", marginBottom: 28
            }}>
              <span style={{ fontSize: 16 }}>🇧🇷</span>
              <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: 13, color: "rgba(255,255,255,.88)" }}>
                Maior comunidade trader no Brasil!
              </span>
            </div>

            {/* H1 */}
            <h1 style={{
              fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800,
              fontSize: "clamp(36px,4.8vw,58px)", lineHeight: 1.08,
              color: "#FFF", marginBottom: 20, letterSpacing: "-0.027em"
            }}>
              Lucre diariamente<br />
              copiando minhas<br />
              <span style={{ color: GREEN }}>operações</span>
            </h1>

            {/* Subline */}
            <p style={{
              fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 400,
              fontSize: "clamp(14px,1.3vw,16px)", color: TEXT_M,
              lineHeight: 1.85, marginBottom: 34, maxWidth: 420
            }}>
              Live de Alavancagem garantida, mais de 100 mil reais em bancas alavancadas por semana.
            </p>

            {/* CTA Button */}
            <div style={{ marginBottom: 30 }}>
              <WaButton label="Entre no meu grupo" size="lg" />
            </div>

            {/* Social proof */}
            <AvatarGroup count="5.149" />
          </div>

          {/* RIGHT — Visual placeholder (swap with real photo) */}
          <div className="hero-right" style={{
            position: "relative", flex: "0 0 auto",
            width: "clamp(300px,40vw,500px)", height: "clamp(400px,62vh,620px)"
          }}>
            {/* Photo placeholder container */}
            <div style={{
              width: "100%", height: "100%", borderRadius: 22, overflow: "hidden",
              background: "linear-gradient(175deg,#1C1640 0%,#0E0C1E 100%)",
              border: "1px solid rgba(123,63,228,.2)", position: "relative",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16
            }}>
              {/* Inner glow */}
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 38%, rgba(123,63,228,.14), transparent 62%)" }} />
              {/* Photo placeholder — swap with <img> */}
              <div style={{
                width: 120, height: 120, borderRadius: "50%",
                background: "rgba(123,63,228,.2)", border: "2px solid rgba(123,63,228,.45)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 50, position: "relative", zIndex: 1
              }}>🧑‍💼</div>
              <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
                <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 18, color: "rgba(255,255,255,.82)" }}>
                  VITÃO TRADER
                </div>
                <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 13, color: TEXT_M, marginTop: 5 }}>
                  Trader Profissional · IB Oficial
                </div>
              </div>
              {/* Bottom glow bar */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 180, background: "linear-gradient(0deg,rgba(123,63,228,.1),transparent)" }} />
            </div>

            {/* Floating Ticker Cards */}
            <div className="flt" style={{ position: "absolute", top: 20, right: -18, zIndex: 20 }}>
              <TickerCard symbol="Bitcoin" value="$94.385,33" change="+63,1%" positive={true} bull="₿" />
            </div>
            <div className="flt2" style={{ position: "absolute", top: 116, right: -28, zIndex: 20 }}>
              <TickerCard symbol="Solana" value="$194.46" change="-0,65%" positive={false} bull="◎" />
            </div>

            {/* Floating Profit Badges */}
            <div className="flt" style={{ position: "absolute", right: 18, bottom: 200, zIndex: 20 }}>
              <ProfitBadge value="+R$ 555" />
            </div>
            <div className="flt2" style={{ position: "absolute", right: 40, bottom: 130, zIndex: 20 }}>
              <ProfitBadge value="+R$ 2.887" />
            </div>
            <div className="flt" style={{ position: "absolute", left: 12, bottom: 108, zIndex: 20 }}>
              <ProfitBadge value="+R$ 1.277" />
            </div>
          </div>
        </div>
      </section>

      {/* ──── ABOUT ──── */}
      <section style={{ background: BG_DARK, padding: "100px 48px" }}>
        <div className="about-grid" style={{
          maxWidth: 1040, margin: "0 auto",
          display: "flex", alignItems: "center",
          gap: "clamp(44px,8vw,100px)", flexWrap: "wrap"
        }}>

          {/* Photo placeholder */}
          <div style={{
            flex: "0 0 auto", width: "clamp(240px,30vw,340px)", aspectRatio: "3/4",
            borderRadius: 20, overflow: "hidden",
            background: "linear-gradient(148deg,#1A1830,#100E22)",
            border: "1px solid rgba(123,63,228,.18)",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16,
            position: "relative"
          }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 42% 58%, rgba(123,63,228,.09), transparent 62%)" }} />
            <div style={{
              width: 90, height: 90, borderRadius: "50%",
              background: "rgba(123,63,228,.2)", border: "2px solid rgba(123,63,228,.45)",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 38,
              position: "relative", zIndex: 1
            }}>🧑‍💼</div>
            <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 22px" }}>
              <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 16, color: "rgba(255,255,255,.82)" }}>VITÃO TRADER</div>
              <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 12, color: TEXT_M, marginTop: 5 }}>IB Oficial · Trader Profissional</div>
            </div>
          </div>

          {/* Copy */}
          <div style={{ flex: 1, minWidth: 260 }}>
            <h2 style={{
              fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800,
              fontSize: "clamp(28px,3.2vw,44px)", lineHeight: 1.2, color: "#FFF", marginBottom: 20
            }}>
              Vou te ajudar a<br />faturar todos os dias
            </h2>
            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: TEXT_M, fontSize: 15.5, lineHeight: 1.88, marginBottom: 16 }}>
              Vitão é trader responsável pelas lives de alavancagem. Sua abordagem combina price action e leitura de fluxo para definir entrada, stop e alvos objetivos, sempre com gestão de risco disciplinada (tamanho de posição, limites diários e ajustes por volatilidade).
            </p>
            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: TEXT_M, fontSize: 15.5, lineHeight: 1.88, marginBottom: 36 }}>
              As operações são conduzidas na corretora em tempo real, para quem quer acompanhar e aprender com execução profissional.
            </p>
            <WaButton label="Entre no meu grupo" />
          </div>
        </div>
      </section>

      {/* ──── SOCIAL PROOF ──── */}
      <section style={{ background: BG_MAIN, padding: "100px 48px" }}>
        <div style={{ maxWidth: 920, margin: "0 auto", textAlign: "center" }}>

          {/* Stars */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 5, marginBottom: 16 }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 15, color: TEXT_M, marginRight: 4 }}>5.0</span>
            {[...Array(5)].map((_, i) => <span key={i} style={{ color: "#F59E0B", fontSize: 18 }}>★</span>)}
          </div>

          <h2 style={{
            fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800,
            fontSize: "clamp(28px,4vw,46px)", color: "#FFF", lineHeight: 1.2, marginBottom: 16
          }}>
            São milhares de vidas<br />transformadas
          </h2>
          <p style={{
            fontFamily: "'Plus Jakarta Sans',sans-serif", color: TEXT_M, fontSize: 15.5,
            lineHeight: 1.82, maxWidth: 580, margin: "0 auto 56px"
          }}>
            Operações comentadas, histórico público e metodologia clara ideal para quem quer acelerar o aprendizado e melhorar a execução.
          </p>

          {/* Carousel */}
          <div style={{ position: "relative", minHeight: 380 }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 16, padding: "0 52px 20px", overflow: "visible" }}>
              {names.map((name, i) => {
                const d = Math.abs(i - slide);
                if (d > 1) return null;
                return <VideoCard key={i} active={i === slide} name={name} idx={i} />;
              })}
            </div>

            {/* Arrows */}
            {[
              { d: "l", fn: () => setSlide(s => (s - 1 + total) % total) },
              { d: "r", fn: () => setSlide(s => (s + 1) % total) }
            ].map(({ d, fn }) => (
              <button key={d} onClick={fn} style={{
                position: "absolute", top: "44%",
                ...(d === "l" ? { left: 0 } : { right: 0 }),
                transform: "translateY(-50%)",
                width: 36, height: 36, borderRadius: "50%",
                background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)",
                color: "#fff", cursor: "pointer", fontSize: 20,
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "background 0.2s"
              }}>{d === "l" ? "‹" : "›"}</button>
            ))}
          </div>

          {/* Dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: 7, marginTop: 20 }}>
            {[...Array(total)].map((_, i) => (
              <button key={i} onClick={() => setSlide(i)} style={{
                width: i === slide ? 24 : 8, height: 8, borderRadius: 4,
                background: i === slide ? PURPLE : "rgba(255,255,255,.18)",
                border: "none", cursor: "pointer", padding: 0, transition: "all .3s"
              }} />
            ))}
          </div>
        </div>
      </section>

      {/* ──── LIVE CTA ──── */}
      <section style={{ background: BG_DARK, padding: "70px 48px 110px" }}>
        <div style={{ maxWidth: 580, margin: "0 auto" }}>
          <div style={{
            background: "linear-gradient(140deg,#180E3A 0%,#271660 42%,#180E3A 100%)",
            border: "1px solid rgba(123,63,228,.38)", borderRadius: 22,
            padding: "56px 44px", textAlign: "center", position: "relative", overflow: "hidden"
          }}>
            {/* Top glow */}
            <div style={{
              position: "absolute", top: -70, left: "50%", transform: "translateX(-50%)",
              width: 360, height: 220,
              background: "radial-gradient(ellipse, rgba(123,63,228,.25), transparent 72%)",
              pointerEvents: "none"
            }} />

            {/* LIVE badge */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 20, position: "relative", zIndex: 1 }}>
              <div className="livepulse" style={{
                width: 56, height: 56, borderRadius: "50%", background: "#EF4444",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2
              }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 8, color: "#fff", letterSpacing: ".13em" }}>LIVE</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            <h2 style={{
              fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800,
              fontSize: "clamp(26px,3.5vw,38px)", color: "#FFF", marginBottom: 14,
              position: "relative", zIndex: 1
            }}>
              Hoje tem live!
            </h2>
            <p style={{
              fontFamily: "'Plus Jakarta Sans',sans-serif", color: "rgba(255,255,255,.6)",
              fontSize: 15.5, lineHeight: 1.75, maxWidth: 320, margin: "0 auto 32px",
              position: "relative", zIndex: 1
            }}>
              Clique no botão abaixo e participe, venha ganhar dinheiro comigo ao vivo!
            </p>
            <div style={{ position: "relative", zIndex: 1 }}>
              <WaButton label="Entre no meu grupo" size="lg" />
            </div>
          </div>
        </div>
      </section>

      {/* ──── FOOTER ──── */}
      <footer style={{
        background: BG_DARK, borderTop: "1px solid rgba(255,255,255,.04)",
        padding: "28px 48px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: 16
      }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
          <div style={{
            width: 34, height: 34, borderRadius: 9,
            background: "rgba(123,63,228,.15)", border: "1.5px solid rgba(123,63,228,.5)",
            display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 2 L12 22 M7 5 L12 2 L17 5 M7 19 L12 22 L17 19 M4 9 L7 7 M20 9 L17 7 M4 15 L7 17 M20 15 L17 17"
                stroke="#7B3FE4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 8, color: "rgba(255,255,255,.4)", letterSpacing: ".14em" }}>VITÃO IB</span>
        </div>
        <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 12, color: "rgba(255,255,255,.26)", textAlign: "center", flex: 1 }}>
          2026 Copyright © Vitão IB Todos os direitos reservados.
        </p>
        <div style={{ width: 44 }} />
      </footer>
    </div>
  );
}
