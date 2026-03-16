import { useState, useEffect } from "react";
import traderPhoto from "@assets/image_1773688493264.png";

const CTA_LINK = "https://chat.whatsapp.com/LR1XkXae3KP0AzM9PCY1QC";

const BG_MAIN = "#0A0A0F";
const BG_DARK = "#0D0D13";
const GREEN = "#25D366";
const GREEN_D = "#1EAA52";
const PURPLE = "#7B3FE4";
const TEXT_M = "#A0A8BE";

/* ─── COMPONENTS ─── */

function WaButton({ label = "Entre no meu grupo", style = {}, size = "md" }: {
  label?: string; style?: React.CSSProperties; size?: "md" | "lg";
}) {
  const [h, setH] = useState(false);
  const lg = size === "lg";
  return (
    <a href={CTA_LINK} target="_blank" rel="noopener noreferrer"
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: 10,
        padding: lg ? "16px 36px" : "12px 26px",
        background: h ? GREEN_D : GREEN,
        color: "#fff", fontWeight: 700,
        fontFamily: "'Plus Jakarta Sans',sans-serif",
        fontSize: lg ? 16 : 14, borderRadius: 999,
        textDecoration: "none", transition: "all 0.2s",
        boxShadow: h ? "0 6px 28px rgba(37,211,102,0.38)" : "0 2px 14px rgba(37,211,102,0.22)",
        transform: h ? "scale(1.03)" : "scale(1)", ...style
      }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      {label}
    </a>
  );
}

/* Floating crypto card */
const COINS = [
  { symbol: "LTC", name: "Litecoin",  price: "$112.22",      change: "-%1.71", pos: false, color: "#A0A0A0" },
  { symbol: "BTC", name: "Bitcoin",   price: "$94.595,33",   change: "+%1.71", pos: true,  color: "#F7931A" },
  { symbol: "SOL", name: "Solana",    price: "$194.46",      change: "-%0.65", pos: false, color: "#9945FF" },
  { symbol: "DASH",name: "Dash",      price: "$24.68",       change: "+%1.71", pos: true,  color: "#008CE7" },
  { symbol: "XRP", name: "XRP",       price: "$2.407",       change: "+%1.66", pos: true,  color: "#3A6DA8" },
  { symbol: "ETH", name: "Ethereum",  price: "$2.609,21",    change: "+%1.71", pos: true,  color: "#627EEA" },
];

function FloatingCoinCard({ coin, style = {} }: { coin: typeof COINS[0]; style?: React.CSSProperties }) {
  return (
    <div style={{
      position: "absolute",
      display: "flex", alignItems: "center", gap: 8,
      background: "rgba(20,20,35,0.88)", backdropFilter: "blur(16px)",
      border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12,
      padding: "8px 14px", userSelect: "none",
      zIndex: 5,
      ...style
    }}>
      <div style={{
        width: 28, height: 28, borderRadius: "50%",
        background: coin.color + "2a",
        border: `1.2px solid ${coin.color}77`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 8,
        color: coin.color, flexShrink: 0
      }}>{coin.symbol.slice(0, 3)}</div>
      <div>
        <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 11, color: "#fff" }}>{coin.name}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 2 }}>
          <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: 10, color: TEXT_M }}>{coin.price}</span>
          <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 10, color: coin.pos ? GREEN : "#FF5050", fontWeight: 700 }}>{coin.change}</span>
        </div>
      </div>
    </div>
  );
}

function ProfitBadge({ value, style = {} }: { value: string; style?: React.CSSProperties }) {
  return (
    <div style={{
      background: "rgba(10,24,16,0.82)", border: "1px solid rgba(37,211,102,0.55)",
      borderRadius: 9, padding: "8px 15px",
      display: "inline-flex", alignItems: "center", gap: 7,
      fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 14, color: GREEN,
      backdropFilter: "blur(12px)", letterSpacing: "0.01em", whiteSpace: "nowrap", ...style
    }}>
      +{value} <span style={{ fontSize: 12 }}>▲</span>
    </div>
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
            width: 36, height: 36, borderRadius: "50%",
            background: colors[i], border: "2.5px solid #08080F",
            marginLeft: i === 0 ? 0 : -12, zIndex: 5 - i,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 11, color: "#fff"
          }}>{init}</div>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{
          background: "rgba(37,211,102,0.15)", border: "1px solid rgba(37,211,102,0.35)",
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
      borderRadius: 16, overflow: "hidden", background: "#12121E",
      border: active ? "2px solid rgba(123,63,228,0.55)" : "1px solid rgba(255,255,255,0.05)",
      transform: active ? "scale(1.05)" : "scale(0.9)",
      opacity: active ? 1 : 0.45, transition: "all 0.35s ease",
      minWidth: active ? 200 : 160, aspectRatio: "9/16",
      display: "flex", flexDirection: "column", justifyContent: "flex-end",
      position: "relative", flexShrink: 0
    }}>
      <div style={{
        position: "absolute", inset: 0,
        background: `linear-gradient(160deg, ${colors[idx % colors.length]}22 0%, #0D0D1A 100%)`,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12
      }}>
        {active && (
          <div style={{ width: 52, height: 52, borderRadius: "50%", background: "rgba(37,211,102,0.15)", border: "2px solid rgba(37,211,102,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill={GREEN}><path d="M8 5v14l11-7z" /></svg>
          </div>
        )}
        <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 12, color: active ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.3)", textAlign: "center", padding: "0 14px", fontWeight: 600 }}>{name}</div>
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

/* ─── MAIN PAGE ─── */
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
        html,body{background:${BG_MAIN};font-family:'Plus Jakarta Sans',sans-serif;overflow-x:hidden;}
        ::selection{background:rgba(123,63,228,.35);}
        ::-webkit-scrollbar{width:4px;}
        ::-webkit-scrollbar-track{background:${BG_MAIN};}
        ::-webkit-scrollbar-thumb{background:rgba(123,63,228,.4);border-radius:2px;}

        @keyframes marquee{
          0%{transform:translateX(0)}
          100%{transform:translateX(calc(-100% / 3))}
        }
        @keyframes floatA{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
        @keyframes floatB{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
        @keyframes floatC{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
        @keyframes livePulse{0%,100%{box-shadow:0 0 0 0 rgba(239,68,68,.5)}70%{box-shadow:0 0 0 14px rgba(239,68,68,0)}}

        .ticker-track{animation:marquee 16s linear infinite}
        .ticker-track:hover{animation-play-state:paused}
        .flt{animation:floatA 4s ease-in-out infinite}
        .flt2{animation:floatB 5.5s 1.4s ease-in-out infinite}
        .flt3{animation:floatC 6s 2.1s ease-in-out infinite}
        .livepulse{animation:livePulse 1.8s ease-in-out infinite}

        button{background:none;border:none;cursor:pointer;padding:0;}

        @media(max-width:900px){
          .hero-right{display:none!important;}
        }
      `}</style>

      {/* ──── NAVBAR ──── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 999,
        background: scrolled ? "rgba(8,8,18,.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,.05)" : "none",
        transition: "all .3s", padding: "14px 48px",
        display: "flex", justifyContent: "center", alignItems: "center"
      }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(123,63,228,.18)", border: "1.5px solid rgba(123,63,228,.6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M12 2 L12 22 M7 5 L12 2 L17 5 M7 19 L12 22 L17 19 M4 9 L7 7 M20 9 L17 7 M4 15 L7 17 M20 15 L17 17" stroke="#7B3FE4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 9, color: "rgba(255,255,255,.5)", letterSpacing: "0.17em", marginTop: 2 }}>VITÃO IB</span>
        </div>
      </nav>

      {/* ──── HERO ──── */}
      <section style={{ minHeight: "100vh", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}>

        {/* Background: deep dark gradient */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #050510 0%, #0A0720 45%, #060614 100%)" }} />

        {/* Background chart SVG (right half) */}
        <div style={{ position: "absolute", right: 0, top: 0, width: "65%", height: "100%", opacity: 0.45 }}>
          <svg width="100%" height="100%" viewBox="0 0 860 800" preserveAspectRatio="xMaxYMid slice">
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#7B3FE4" stopOpacity="0" />
                <stop offset="30%" stopColor="#7B3FE4" stopOpacity=".85" />
                <stop offset="100%" stopColor="#25D366" stopOpacity=".4" />
              </linearGradient>
              <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7B3FE4" stopOpacity=".22" />
                <stop offset="100%" stopColor="#7B3FE4" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Candles */}
            {[...Array(24)].map((_, i) => {
              const x = 40 + i * 34;
              const base = 290 + Math.sin(i * .7) * 52 + Math.cos(i * .38) * 26;
              const h = 26 + Math.abs(Math.sin(i * .95)) * 46;
              const bull = i % 3 !== 0;
              return (
                <g key={i}>
                  <line x1={x + 7} y1={base - 16} x2={x + 7} y2={base + h + 16} stroke={bull ? "rgba(37,211,102,.32)" : "rgba(255,80,80,.32)"} strokeWidth="1.2" />
                  <rect x={x} y={base} width={14} height={h} fill={bull ? "rgba(37,211,102,.62)" : "rgba(255,80,80,.52)"} rx="2" />
                </g>
              );
            })}
            {/* Trend line */}
            <polyline points="40,530 120,488 210,504 310,418 410,382 510,342 610,298 710,260 810,218 860,195"
              fill="none" stroke="url(#lineGrad)" strokeWidth="2.8" />
            <polygon points="40,530 120,488 210,504 310,418 410,382 510,342 610,298 710,260 810,218 860,195 860,700 40,700"
              fill="url(#areaFill)" />
            {/* Grid lines */}
            {[200, 300, 400, 500].map(y => (
              <line key={y} x1="0" y1={y} x2="860" y2={y} stroke="rgba(255,255,255,.035)" strokeWidth="1" strokeDasharray="6,14" />
            ))}
          </svg>
        </div>

        {/* Purple ambient glow */}
        <div style={{ position: "absolute", top: "10%", right: "25%", width: 500, height: 500, background: "radial-gradient(circle, rgba(123,63,228,.09) 0%, transparent 70%)", pointerEvents: "none" }} />

        {/* Left fog */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(5,5,16,1) 0%, rgba(5,5,16,.88) 35%, rgba(5,5,16,.2) 65%, rgba(5,5,16,.65) 100%)" }} />

        {/* ── CRYPTO MARQUEE ── */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 25, width: "100%", height: 60, display: "flex", alignItems: "center" }}>
          <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
            {/* Left blur */}
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 100, zIndex: 2, background: "linear-gradient(90deg, rgba(8,8,18,1) 0%, rgba(8,8,18,0) 100%)", pointerEvents: "none" }} />
            {/* Right blur */}
            <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 100, zIndex: 2, background: "linear-gradient(270deg, rgba(8,8,18,1) 0%, rgba(8,8,18,0) 100%)", pointerEvents: "none" }} />
            {/* Track */}
            <div className="ticker-track" style={{ display: "flex", gap: 8, width: "max-content", paddingLeft: 20 }}>
              {[...COINS, ...COINS, ...COINS].map((coin, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: 6,
                  background: "rgba(20,20,35,0.85)", backdropFilter: "blur(14px)",
                  border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10,
                  padding: "6px 12px", flexShrink: 0, userSelect: "none"
                }}>
                  <div style={{
                    width: 24, height: 24, borderRadius: "50%",
                    background: coin.color + "28",
                    border: `1px solid ${coin.color}66`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 7,
                    color: coin.color, flexShrink: 0
                  }}>{coin.symbol.slice(0, 3)}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: 10, color: "#fff" }}>{coin.name}</span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 9, color: coin.pos ? GREEN : "#FF5050", fontWeight: 700 }}>{coin.change}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── MAIN HERO CONTENT ── */}
        <div style={{
          position: "relative", zIndex: 10, flex: 1,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          maxWidth: 1320, width: "100%", margin: "0 auto",
          padding: "80px 52px 56px", gap: 40
        }}>

          {/* LEFT COPY */}
          <div style={{ flex: "0 0 auto", maxWidth: 480 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.13)", borderRadius: 20, padding: "7px 18px", marginBottom: 24 }}>
              <span style={{ fontSize: 16 }}>🇧🇷</span>
              <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: 13, color: "rgba(255,255,255,.9)" }}>Maior comunidade trader no Brasil!</span>
            </div>

            <h1 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(32px,3.4vw,48px)", lineHeight: 1.08, color: "#FFF", marginBottom: 18, letterSpacing: "-0.025em" }}>
              Lucre<br />diariamente<br />copiando minhas<br />
              <span style={{ color: GREEN }}>operações</span>
            </h1>

            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 400, fontSize: "clamp(13px,1.2vw,15px)", color: TEXT_M, lineHeight: 1.85, marginBottom: 28, maxWidth: 420 }}>
              Live de Alavancagem garantida, mais de 100 mil reais em bancas alavancadas por semana.
            </p>

            <div style={{ marginBottom: 26 }}>
              <WaButton label="Entre no meu grupo" size="lg" />
            </div>

            <AvatarGroup count="5.149" />
          </div>

          {/* RIGHT — Trader photo with floating crypto cards & badges */}
          <div className="hero-right" style={{
            position: "relative", flex: 1,
            display: "flex", justifyContent: "center", alignItems: "flex-end",
            height: "clamp(480px,72vh,700px)", overflow: "visible", minWidth: 320
          }}>
            {/* Trader photo */}
            <img
              src={traderPhoto}
              alt="Vitão Trader"
              style={{
                height: "100%",
                maxHeight: 680,
                objectFit: "contain",
                objectPosition: "bottom center",
                filter: "drop-shadow(0 0 60px rgba(123,63,228,.18))",
                pointerEvents: "none",
                userSelect: "none",
                position: "relative", zIndex: 2
              }}
            />

            {/* FLOATING CRYPTO CARDS — scattered around the hero */}
            <FloatingCoinCard coin={COINS[1]} style={{ left: "5%", top: "8%", animation: "floatA 5s ease-in-out infinite" }} /> {/* Bitcoin */}
            <FloatingCoinCard coin={COINS[2]} style={{ right: "8%", top: "18%", animation: "floatB 5.8s 1s ease-in-out infinite" }} /> {/* Solana */}
            <FloatingCoinCard coin={COINS[3]} style={{ right: "22%", top: "35%", animation: "floatC 6.2s 1.8s ease-in-out infinite" }} /> {/* Dash */}

            {/* FLOATING PROFIT BADGES */}
            <div className="flt" style={{ position: "absolute", left: "8%", top: "46%", zIndex: 10 }}>
              <ProfitBadge value="R$ 1.000" />
            </div>
            <div className="flt2" style={{ position: "absolute", right: "6%", top: "28%", zIndex: 10 }}>
              <ProfitBadge value="R$ 5.200" />
            </div>
            <div className="flt3" style={{ position: "absolute", left: "20%", bottom: "18%", zIndex: 10 }}>
              <ProfitBadge value="R$ 2.300" />
            </div>
          </div>
        </div>
      </section>

      {/* ──── ABOUT ──── */}
      <section style={{ background: BG_DARK, padding: "100px 52px" }}>
        <div style={{
          maxWidth: 1060, margin: "0 auto",
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
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 42% 58%, rgba(123,63,228,.1), transparent 62%)" }} />
            <div style={{ width: 90, height: 90, borderRadius: "50%", background: "rgba(123,63,228,.2)", border: "2px solid rgba(123,63,228,.45)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 38, position: "relative", zIndex: 1 }}>🧑‍💼</div>
            <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 22px" }}>
              <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 16, color: "rgba(255,255,255,.82)" }}>VITÃO TRADER</div>
              <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 12, color: TEXT_M, marginTop: 5 }}>IB Oficial · Trader Profissional</div>
            </div>
          </div>

          {/* Copy */}
          <div style={{ flex: 1, minWidth: 260 }}>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(28px,3.2vw,44px)", lineHeight: 1.2, color: "#FFF", marginBottom: 20 }}>
              Vou te ajudar a<br />faturar todos os dias
            </h2>
            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: TEXT_M, fontSize: 15.5, lineHeight: 1.9, marginBottom: 16 }}>
              Vitão é trader responsável pelas lives de alavancagem. Sua abordagem combina price action e leitura de fluxo para definir entrada, stop e alvos objetivos, sempre com gestão de risco disciplinada (tamanho de posição, limites diários e ajustes por volatilidade).
            </p>
            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: TEXT_M, fontSize: 15.5, lineHeight: 1.9, marginBottom: 38 }}>
              As operações são conduzidas na corretora em tempo real, para quem quer acompanhar e aprender com execução profissional.
            </p>
            <WaButton label="Entre no meu grupo" />
          </div>
        </div>
      </section>

      {/* ──── SOCIAL PROOF ──── */}
      <section style={{ background: BG_MAIN, padding: "100px 52px" }}>
        <div style={{ maxWidth: 920, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 5, marginBottom: 16 }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 15, color: TEXT_M, marginRight: 4 }}>5.0</span>
            {[...Array(5)].map((_, i) => <span key={i} style={{ color: "#F59E0B", fontSize: 19 }}>★</span>)}
          </div>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(28px,4vw,46px)", color: "#FFF", lineHeight: 1.2, marginBottom: 16 }}>
            São milhares de vidas<br />transformadas
          </h2>
          <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: TEXT_M, fontSize: 15.5, lineHeight: 1.85, maxWidth: 580, margin: "0 auto 56px" }}>
            Operações comentadas, histórico público e metodologia clara ideal para quem quer acelerar o aprendizado e melhorar a execução.
          </p>

          {/* Carousel */}
          <div style={{ position: "relative", minHeight: 380 }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 16, padding: "0 52px 20px" }}>
              {names.map((name, i) => {
                if (Math.abs(i - slide) > 1) return null;
                return <VideoCard key={i} active={i === slide} name={name} idx={i} />;
              })}
            </div>
            {[{ d: "l", fn: () => setSlide(s => (s - 1 + total) % total) }, { d: "r", fn: () => setSlide(s => (s + 1) % total) }].map(({ d, fn }) => (
              <button key={d} onClick={fn} style={{
                position: "absolute", top: "44%", ...(d === "l" ? { left: 0 } : { right: 0 }),
                transform: "translateY(-50%)", width: 36, height: 36, borderRadius: "50%",
                background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)",
                color: "#fff", fontSize: 20, display: "flex", alignItems: "center", justifyContent: "center"
              }}>{d === "l" ? "‹" : "›"}</button>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 7, marginTop: 20 }}>
            {[...Array(total)].map((_, i) => (
              <button key={i} onClick={() => setSlide(i)} style={{
                width: i === slide ? 24 : 8, height: 8, borderRadius: 4,
                background: i === slide ? PURPLE : "rgba(255,255,255,.18)",
                transition: "all .3s"
              }} />
            ))}
          </div>
        </div>
      </section>

      {/* ──── LIVE CTA ──── */}
      <section style={{ background: BG_DARK, padding: "70px 52px 110px" }}>
        <div style={{ maxWidth: 580, margin: "0 auto" }}>
          <div style={{
            background: "linear-gradient(140deg,#180E3A 0%,#271660 42%,#180E3A 100%)",
            border: "1px solid rgba(123,63,228,.4)", borderRadius: 22,
            padding: "56px 44px", textAlign: "center", position: "relative", overflow: "hidden"
          }}>
            <div style={{ position: "absolute", top: -70, left: "50%", transform: "translateX(-50%)", width: 360, height: 220, background: "radial-gradient(ellipse, rgba(123,63,228,.28), transparent 72%)", pointerEvents: "none" }} />
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 20, position: "relative", zIndex: 1 }}>
              <div className="livepulse" style={{ width: 56, height: 56, borderRadius: "50%", background: "#EF4444", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2 }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 8, color: "#fff", letterSpacing: ".13em" }}>LIVE</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff"><path d="M8 5v14l11-7z" /></svg>
              </div>
            </div>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(26px,3.5vw,38px)", color: "#FFF", marginBottom: 14, position: "relative", zIndex: 1 }}>Hoje tem live!</h2>
            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: "rgba(255,255,255,.62)", fontSize: 15.5, lineHeight: 1.78, maxWidth: 320, margin: "0 auto 32px", position: "relative", zIndex: 1 }}>
              Clique no botão abaixo e participe, venha ganhar dinheiro comigo ao vivo!
            </p>
            <div style={{ position: "relative", zIndex: 1 }}>
              <WaButton label="Entre no meu grupo" size="lg" />
            </div>
          </div>
        </div>
      </section>

      {/* ──── FOOTER ──── */}
      <footer style={{ background: BG_DARK, borderTop: "1px solid rgba(255,255,255,.04)", padding: "28px 52px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
          <div style={{ width: 34, height: 34, borderRadius: 9, background: "rgba(123,63,228,.15)", border: "1.5px solid rgba(123,63,228,.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 2 L12 22 M7 5 L12 2 L17 5 M7 19 L12 22 L17 19 M4 9 L7 7 M20 9 L17 7 M4 15 L7 17 M20 15 L17 17" stroke="#7B3FE4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
