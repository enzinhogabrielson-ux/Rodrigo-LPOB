import { useState, useEffect } from "react";

const CTA_LINK = "https://chat.whatsapp.com/LR1XkXae3KP0AzM9PCY1QC";

const BG_MAIN = "#0A0A0F";
const BG_DARK = "#0D0D13";
const GREEN = "#25D366";
const GREEN_D = "#1EAA52";
const PURPLE = "#7B3FE4";
const TEXT_M = "#A0A8BE";

function WaButton({ label = "Entre no meu grupo", style = {}, size = "md" }: { label?: string; style?: React.CSSProperties; size?: "md" | "lg" }) {
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
        display: "inline-flex", alignItems: "center", gap: 8,
        padding: lg ? "16px 36px" : "12px 24px",
        background: h ? GREEN_D : GREEN,
        color: "#fff", fontWeight: 700,
        fontFamily: "'Plus Jakarta Sans',sans-serif",
        fontSize: lg ? 16 : 14,
        borderRadius: 999,
        textDecoration: "none",
        transition: "all 0.2s",
        boxShadow: h ? "0 6px 24px rgba(37,211,102,0.35)" : "0 2px 12px rgba(37,211,102,0.2)",
        transform: h ? "scale(1.03)" : "scale(1)",
        ...style
      }}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      {label}
    </a>
  );
}

function TickerCard({ symbol, value, change, positive, style = {} }: { symbol: string; value: string; change: string; positive: boolean; style?: React.CSSProperties }) {
  return (
    <div style={{
      background: "rgba(20,20,36,0.88)",
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: 12, padding: "10px 14px",
      display: "flex", flexDirection: "column", gap: 2,
      minWidth: 140, ...style
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <div style={{ width: 22, height: 22, borderRadius: "50%", background: positive ? "rgba(37,211,102,0.2)" : "rgba(255,80,80,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11 }}>
          {positive ? "₿" : "◎"}
        </div>
        <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: 12, color: "rgba(255,255,255,0.8)" }}>{symbol}</span>
      </div>
      <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 14, color: "#fff" }}>{value}</div>
      <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 12, color: positive ? GREEN : "#FF5050", fontWeight: 600 }}>{change}</div>
    </div>
  );
}

function ProfitBadge({ value, style = {} }: { value: string; style?: React.CSSProperties }) {
  return (
    <div style={{
      background: "rgba(37,211,102,0.15)", border: "1px solid rgba(37,211,102,0.3)",
      borderRadius: 8, padding: "6px 12px", display: "inline-flex", alignItems: "center", gap: 6,
      fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 13, color: GREEN,
      backdropFilter: "blur(8px)",
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
            width: 32, height: 32, borderRadius: "50%",
            background: colors[i], border: "2px solid #0A0A0F",
            marginLeft: i === 0 ? 0 : -10, zIndex: 5 - i,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 10, color: "#fff"
          }}>{init}</div>
        ))}
      </div>
      <div>
        <span style={{
          background: "rgba(37,211,102,0.15)", border: "1px solid rgba(37,211,102,0.3)",
          borderRadius: 20, padding: "3px 10px",
          fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 13, color: GREEN,
          marginRight: 6
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
      border: active ? "2px solid rgba(123,63,228,0.5)" : "1px solid rgba(255,255,255,0.05)",
      transform: active ? "scale(1.05)" : "scale(0.9)",
      opacity: active ? 1 : 0.45,
      transition: "all 0.35s ease",
      minWidth: active ? 240 : 180,
      aspectRatio: "9/16",
      display: "flex", flexDirection: "column",
      justifyContent: "flex-end", position: "relative", flexShrink: 0
    }}>
      <div style={{
        position: "absolute", inset: 0,
        background: `linear-gradient(160deg, ${colors[idx % colors.length]}22 0%, #0D0D1A 100%)`,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10
      }}>
        {active && (
          <div style={{ width: 52, height: 52, borderRadius: "50%", background: "rgba(37,211,102,0.15)", border: "2px solid rgba(37,211,102,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill={GREEN}>
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        )}
        <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 12, color: active ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.3)", textAlign: "center", padding: "0 12px" }}>{name}</div>
        <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 10, color: TEXT_M }}>Depoimento</div>
      </div>
      {active && (
        <div style={{ position: "relative", zIndex: 2, background: "rgba(8,8,18,0.85)", padding: "8px 12px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ flex: 1, height: 2, background: "rgba(255,255,255,0.1)", borderRadius: 1, position: "relative" }}>
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "30%", background: GREEN, borderRadius: 1 }} />
            </div>
            <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 10, color: TEXT_M }}>0:00</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function VitaoIBLP() {
  const [scrolled, setScrolled] = useState(false);
  const [slide, setSlide] = useState(1);
  const total = 5;
  const names = ["Trader Lucas F.", "Ana Carolina P.", "Rodrigo Mendes", "Juliana Costa", "Marcos Silva"];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % total), 4000);
    return () => clearInterval(t);
  }, []);

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
        @keyframes floatA{0%,100%{transform:translateY(0)}50%{transform:translateY(-9px)}}
        @keyframes floatB{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
        @keyframes fadeIn{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        @keyframes livePulse{0%,100%{box-shadow:0 0 0 0 rgba(239,68,68,.4)}70%{box-shadow:0 0 0 10px rgba(239,68,68,0)}}
        .fa0{animation:fadeIn .8s .05s ease both}
        .fa1{animation:fadeIn .8s .2s ease both}
        .fa2{animation:fadeIn .8s .35s ease both}
        .fa3{animation:fadeIn .8s .5s ease both}
        .fa4{animation:fadeIn .8s .65s ease both}
        .flt{animation:floatA 4s ease-in-out infinite}
        .flt2{animation:floatB 5s 1.2s ease-in-out infinite}
        .livepulse{animation:livePulse 1.8s ease-in-out infinite}
        @media(max-width:768px){
          .hero-grid{flex-direction:column!important;}
          .about-grid{flex-direction:column!important;}
          .hero-right{display:none!important;}
        }
      `}</style>

      {/* NAVBAR */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 999,
        background: scrolled ? "rgba(10,10,15,.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,.05)" : "none",
        transition: "all .3s",
        padding: "14px 40px",
        display: "flex", justifyContent: "center", alignItems: "center"
      }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
          <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(123,63,228,.15)", border: "1.5px solid rgba(123,63,228,.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2 L12 22 M7 5 L12 2 L17 5 M7 19 L12 22 L17 19 M4 9 L7 7 M20 9 L17 7 M4 15 L7 17 M20 15 L17 17" stroke="#7B3FE4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 9, color: "rgba(255,255,255,.55)", letterSpacing: "0.14em", marginTop: 1 }}>VITÃO IB</span>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: "100vh", position: "relative", overflow: "hidden", display: "flex", alignItems: "center" }}>

        {/* BG */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(140deg,#07070F 0%,#0E0B1F 50%,#080816 100%)" }} />

        {/* Chart SVG */}
        <div style={{ position: "absolute", inset: 0, opacity: .3 }}>
          <svg width="100%" height="100%" viewBox="0 0 1400 800" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="lg1" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#7B3FE4" stopOpacity="0" />
                <stop offset="40%" stopColor="#7B3FE4" stopOpacity=".7" />
                <stop offset="100%" stopColor="#25D366" stopOpacity=".3" />
              </linearGradient>
              <linearGradient id="lg2" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
                <stop offset="50%" stopColor="#3B82F6" stopOpacity=".5" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7B3FE4" stopOpacity=".15" />
                <stop offset="100%" stopColor="#7B3FE4" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[...Array(28)].map((_, i) => {
              const x = 580 + i * 29;
              const base = 320 + Math.sin(i * .6) * 50 + Math.cos(i * .3) * 30;
              const h = 25 + Math.abs(Math.sin(i * .9)) * 40;
              const bull = i % 3 !== 0;
              return (
                <g key={i}>
                  <line x1={x + 6} y1={base - 12} x2={x + 6} y2={base + h + 12} stroke={bull ? "rgba(37,211,102,.25)" : "rgba(255,80,80,.25)"} strokeWidth="1" />
                  <rect x={x} y={base} width={12} height={h} fill={bull ? "rgba(37,211,102,.55)" : "rgba(255,80,80,.45)"} rx="1" />
                </g>
              );
            })}
            <polyline points="580,500 640,460 700,470 760,400 830,370 900,330 970,300 1040,265 1110,235 1180,200 1250,170 1350,135"
              fill="none" stroke="url(#lg1)" strokeWidth="2.5" />
            <polygon points="580,500 640,460 700,470 760,400 830,370 900,330 970,300 1040,265 1110,235 1180,200 1250,170 1350,135 1350,700 580,700"
              fill="url(#areaGrad)" />
            <polyline points="580,550 650,530 730,520 820,490 920,460 1020,430 1130,400 1250,370 1350,345"
              fill="none" stroke="url(#lg2)" strokeWidth="1.5" />
            {[200, 300, 400, 500].map(y => (
              <line key={y} x1="580" y1={y} x2="1360" y2={y} stroke="rgba(255,255,255,.04)" strokeWidth="1" strokeDasharray="6,10" />
            ))}
          </svg>
        </div>

        {/* Fog overlay */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg,rgba(10,10,15,1) 0%,rgba(10,10,15,.88) 42%,rgba(10,10,15,.15) 75%,rgba(10,10,15,.4) 100%)" }} />

        {/* Content */}
        <div className="hero-grid" style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: 1180, margin: "0 auto", padding: "100px 40px 80px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32 }}>

          {/* COPY */}
          <div style={{ flex: "0 0 auto", maxWidth: 500 }}>
            <div className="fa0" style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 20, padding: "6px 16px", marginBottom: 26 }}>
              <span style={{ fontSize: 16 }}>🇧🇷</span>
              <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: 13, color: "rgba(255,255,255,.85)" }}>Maior comunidade trader no Brasil!</span>
            </div>

            <h1 className="fa1" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(34px,4.5vw,56px)", lineHeight: 1.1, color: "#FFFFFF", marginBottom: 18, letterSpacing: "-0.025em" }}>
              Lucre diariamente<br />
              copiando minhas<br />
              <span style={{ color: GREEN }}>operações</span>
            </h1>

            <p className="fa2" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 400, fontSize: "clamp(14px,1.4vw,16px)", color: TEXT_M, lineHeight: 1.8, marginBottom: 30, maxWidth: 400 }}>
              Live de Alavancagem garantida, mais de 100 mil reais em bancas alavancadas por semana.
            </p>

            <div className="fa3">
              <WaButton label="Entre no meu grupo" size="lg" />
            </div>

            <div className="fa4" style={{ marginTop: 28 }}>
              <AvatarGroup count="5.149" />
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="hero-right" style={{ position: "relative", flex: "0 0 auto", width: "clamp(280px,42vw,520px)", height: "clamp(380px,58vh,600px)" }}>
            <div style={{ width: "100%", height: "100%", borderRadius: 20, overflow: "hidden", background: "linear-gradient(170deg,#1A1535 0%,#0D0B1A 100%)", border: "1px solid rgba(123,63,228,.2)", position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14 }}>
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 40%, rgba(123,63,228,.12), transparent 65%)" }} />
              <div style={{ width: 110, height: 110, borderRadius: "50%", background: "rgba(123,63,228,.2)", border: "2px solid rgba(123,63,228,.45)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 44, position: "relative", zIndex: 1 }}>
                🧑‍💼
              </div>
              <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
                <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 17, color: "rgba(255,255,255,.8)" }}>VITÃO TRADER</div>
                <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 12, color: TEXT_M, marginTop: 4 }}>Trader Profissional · IB Oficial</div>
              </div>
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 160, background: "linear-gradient(0deg,rgba(123,63,228,.1),transparent)" }} />
            </div>

            <div className="flt" style={{ position: "absolute", top: 24, right: -16, zIndex: 20 }}>
              <TickerCard symbol="Bitcoin" value="$94.385,33" change="+63,1%" positive={true} />
            </div>
            <div className="flt2" style={{ position: "absolute", top: 110, right: -24, zIndex: 20 }}>
              <TickerCard symbol="Solana" value="$154.48" change="+10,71%" positive={false} />
            </div>

            <div className="flt" style={{ position: "absolute", right: 16, bottom: 170, zIndex: 20 }}>
              <ProfitBadge value="+R$ 1.000" />
            </div>
            <div className="flt2" style={{ position: "absolute", right: 36, bottom: 110, zIndex: 20 }}>
              <ProfitBadge value="+R$ 2.300" />
            </div>
            <div className="flt" style={{ position: "absolute", left: 10, bottom: 90, zIndex: 20 }}>
              <ProfitBadge value="+R$ 5.200" />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ background: BG_DARK, padding: "100px 40px" }}>
        <div className="about-grid" style={{ maxWidth: 1000, margin: "0 auto", display: "flex", alignItems: "center", gap: "clamp(40px,8vw,96px)", flexWrap: "wrap" }}>
          <div style={{ flex: "0 0 auto", width: "clamp(240px,32vw,360px)", aspectRatio: "3/4", borderRadius: 18, overflow: "hidden", background: "linear-gradient(145deg,#1A1830,#0F0D20)", border: "1px solid rgba(123,63,228,.18)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14, position: "relative" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 40% 60%, rgba(123,63,228,.08), transparent 60%)" }} />
            <div style={{ width: 90, height: 90, borderRadius: "50%", background: "rgba(123,63,228,.2)", border: "2px solid rgba(123,63,228,.45)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, position: "relative", zIndex: 1 }}>🧑‍💼</div>
            <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 20px" }}>
              <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 15, color: "rgba(255,255,255,.8)" }}>VITÃO TRADER</div>
              <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 11, color: TEXT_M, marginTop: 4 }}>IB Oficial · Trader Profissional</div>
            </div>
          </div>

          <div style={{ flex: 1, minWidth: 260 }}>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(26px,3.2vw,42px)", lineHeight: 1.2, color: "#FFFFFF", marginBottom: 18 }}>
              Vou te ajudar a<br />faturar todos os dias
            </h2>
            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: TEXT_M, fontSize: 15, lineHeight: 1.85, marginBottom: 14 }}>
              Vitão é trader responsável pelas lives de alavancagem. Sua abordagem combina price action e leitura de fluxo para definir entrada, stop e alvos objetivos, sempre com gestão de risco disciplinada (tamanho de posição, limites diários e ajustes por volatilidade).
            </p>
            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: TEXT_M, fontSize: 15, lineHeight: 1.85, marginBottom: 32 }}>
              As operações são conduzidas na corretora em tempo real, para quem quer acompanhar e aprender com execução profissional.
            </p>
            <WaButton label="Entre no meu grupo" />
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section style={{ background: BG_MAIN, padding: "100px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 4, marginBottom: 14 }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 14, color: TEXT_M }}>5.0</span>
            {[...Array(5)].map((_, i) => (
              <span key={i} style={{ color: "#F59E0B", fontSize: 17 }}>★</span>
            ))}
          </div>

          <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(26px,4vw,44px)", color: "#FFFFFF", lineHeight: 1.2, marginBottom: 14 }}>
            São milhares de vidas<br />transformadas
          </h2>
          <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: TEXT_M, fontSize: 15, lineHeight: 1.8, maxWidth: 600, margin: "0 auto 52px" }}>
            Operações comentadas, histórico público e metodologia clara ideal para quem quer acelerar o aprendizado e melhorar a execução.
          </p>

          <div style={{ position: "relative", minHeight: 360 }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 14, padding: "0 48px 16px", overflow: "hidden" }}>
              {names.map((name, i) => {
                const d = Math.abs(i - slide);
                if (d > 1) return null;
                return <VideoCard key={i} active={i === slide} name={name} idx={i} />;
              })}
            </div>

            {[{ d: "l", fn: () => setSlide(s => (s - 1 + total) % total) }, { d: "r", fn: () => setSlide(s => (s + 1) % total) }].map(({ d, fn }) => (
              <button key={d} onClick={fn} style={{
                position: "absolute", top: "45%", ...(d === "l" ? { left: 0 } : { right: 0 }),
                transform: "translateY(-50%)",
                width: 34, height: 34, borderRadius: "50%",
                background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.1)",
                color: "#fff", cursor: "pointer", fontSize: 18,
                display: "flex", alignItems: "center", justifyContent: "center"
              }}>{d === "l" ? "‹" : "›"}</button>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 16 }}>
            {[...Array(total)].map((_, i) => (
              <button key={i} onClick={() => setSlide(i)} style={{
                width: i === slide ? 22 : 8, height: 8, borderRadius: 4,
                background: i === slide ? PURPLE : "rgba(255,255,255,.18)",
                border: "none", cursor: "pointer", padding: 0, transition: "all .3s"
              }} />
            ))}
          </div>
        </div>
      </section>

      {/* LIVE CTA */}
      <section style={{ background: BG_DARK, padding: "60px 40px 100px" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <div style={{
            background: "linear-gradient(140deg,#180E3A 0%,#271660 40%,#180E3A 100%)",
            border: "1px solid rgba(123,63,228,.35)", borderRadius: 20,
            padding: "52px 40px", textAlign: "center", position: "relative", overflow: "hidden"
          }}>
            <div style={{ position: "absolute", top: -60, left: "50%", transform: "translateX(-50%)", width: 340, height: 200, background: "radial-gradient(ellipse, rgba(123,63,228,.22), transparent 70%)", pointerEvents: "none" }} />

            <div style={{ display: "flex", justifyContent: "center", marginBottom: 18, position: "relative", zIndex: 1 }}>
              <div className="livepulse" style={{ width: 54, height: 54, borderRadius: "50%", background: "#EF4444", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 1 }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 8, color: "#fff", letterSpacing: ".12em" }}>LIVE</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(24px,3.5vw,36px)", color: "#FFFFFF", marginBottom: 12, position: "relative", zIndex: 1 }}>
              Hoje tem live!
            </h2>
            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: "rgba(255,255,255,.6)", fontSize: 15, lineHeight: 1.7, maxWidth: 320, margin: "0 auto 28px", position: "relative", zIndex: 1 }}>
              Clique no botão abaixo e participe, venha ganhar dinheiro comigo ao vivo!
            </p>
            <div style={{ position: "relative", zIndex: 1 }}>
              <WaButton label="Entre no meu grupo" size="lg" />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: BG_DARK, borderTop: "1px solid rgba(255,255,255,.04)", padding: "28px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(123,63,228,.15)", border: "1.5px solid rgba(123,63,228,.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 2 L12 22 M7 5 L12 2 L17 5 M7 19 L12 22 L17 19 M4 9 L7 7 M20 9 L17 7 M4 15 L7 17 M20 15 L17 17" stroke="#7B3FE4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 8, color: "rgba(255,255,255,.45)", letterSpacing: ".12em" }}>VITÃO IB</span>
        </div>
        <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 12, color: "rgba(255,255,255,.28)", textAlign: "center", flex: 1 }}>
          2026 Copyright © Vitão IB Todos os direitos reservados.
        </p>
        <div style={{ width: 40 }} />
      </footer>
    </div>
  );
}
