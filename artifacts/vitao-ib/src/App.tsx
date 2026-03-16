import { useState, useEffect, type ReactNode } from "react";
import traderPhoto from "@assets/trader.png";
import aboutPhoto from "@assets/about.jpeg";

const CTA_LINK = "https://chat.whatsapp.com/LR1XkXae3KP0AzM9PCY1QC";

const BG_MAIN = "#0F0D0B";
const BG_DARK = "#1A1713";
const SAND = "#32C77A";
const SAND_D = "#28A566";
const ACCENT = "#32C77A";
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
        background: h ? SAND_D : SAND,
        color: BG_MAIN, fontWeight: 700,
        fontFamily: "'Plus Jakarta Sans',sans-serif",
        fontSize: lg ? 16 : 14, borderRadius: 999,
        textDecoration: "none", transition: "all 0.2s",
        boxShadow: h ? "0 6px 28px rgba(214,184,138,0.38)" : "0 2px 14px rgba(214,184,138,0.22)",
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
  { symbol: "LTC", name: "Litecoin",  price: "$152.48",    change: "+2.15%", pos: true,  color: "#A0A0A0" },
  { symbol: "BTC", name: "Bitcoin",   price: "$96,543.22", change: "+3.45%", pos: true,  color: "#F7931A" },
  { symbol: "SOL", name: "Solana",    price: "$198.77",    change: "+1.82%", pos: true,  color: "#9945FF" },
  { symbol: "DASH",name: "Dash",      price: "$31.52",     change: "-1.23%", pos: false, color: "#008CE7" },
  { symbol: "XRP", name: "XRP",       price: "$2.58",      change: "+2.34%", pos: true,  color: "#3A6DA8" },
  { symbol: "ETH", name: "Ethereum",  price: "$3,542.89",  change: "+2.87%", pos: true,  color: "#627EEA" },
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
      <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 11, color: "#fff" }}>{coin.name}</div>
          <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: 10, color: TEXT_M }}>{coin.price}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 10, color: coin.pos ? SAND : "#FF5050", fontWeight: 700 }}>{coin.change}</span>
        </div>
      </div>
    </div>
  );
}

function ProfitBadge({ value, style = {} }: { value: string; style?: React.CSSProperties }) {
  return (
    <div style={{
      background: "rgba(20,16,10,0.82)", border: `1px solid rgba(214,184,138,0.55)`,
      borderRadius: 9, padding: "8px 15px",
      display: "inline-flex", alignItems: "center", gap: 7,
      fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 14, color: SAND,
      backdropFilter: "blur(12px)", letterSpacing: "0.01em", whiteSpace: "nowrap", ...style
    }}>
      +{value} <span style={{ fontSize: 12 }}>▲</span>
    </div>
  );
}

function AvatarGroup({ count }: { count: string }) {
  const avatarPhotos = [
    "/avatar_lf.png",
    "/avatar_ac.png",
    "/avatar_rm.png",
    "/avatar_jc.png",
    "/avatar_ms.png",
  ];
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <div style={{ display: "flex" }}>
        {avatarPhotos.map((src, i) => (
          <div key={i} style={{
            width: 36, height: 36, borderRadius: "50%",
            border: "2.5px solid #08080F",
            marginLeft: i === 0 ? 0 : -12, zIndex: 5 - i,
            overflow: "hidden", flexShrink: 0
          }}>
            <img src={src} alt={`Membro ${i + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{
          background: "rgba(214,184,138,0.15)", border: "1px solid rgba(214,184,138,0.35)",
          borderRadius: 20, padding: "4px 12px",
          fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 13, color: SAND,
        }}>{count}</span>
        <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 13, color: TEXT_M }}>Só falta você!</span>
      </div>
    </div>
  );
}

function VideoCard({ active, name, idx }: { active: boolean; name: string; idx: number }) {
  const depoImages = ["/depo1.webp", "/depo2.webp", "/depo3.webp"];
  return (
    <div style={{
      borderRadius: 16, overflow: "hidden", background: "#0a0a0a",
      border: active ? "2px solid rgba(214,184,138,0.6)" : "1px solid rgba(255,255,255,0.06)",
      transform: active ? "scale(1.05)" : "scale(0.9)",
      opacity: active ? 1 : 0.45, transition: "all 0.35s ease",
      minWidth: active ? 200 : 160, aspectRatio: "9/16",
      display: "flex", flexDirection: "column", justifyContent: "flex-end",
      position: "relative", flexShrink: 0
    }}>
      <img
        src={depoImages[idx % depoImages.length]}
        alt={`Depoimento ${idx + 1}`}
        style={{
          position: "absolute", top: 0, left: 0,
          width: "100%", height: "100%",
          objectFit: "cover", objectPosition: "top center",
          display: "block"
        }}
      />
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        background: "linear-gradient(to top, rgba(0,0,0,0.82) 0%, transparent 100%)",
        padding: "24px 12px 12px",
        display: "flex", flexDirection: "column", gap: 2
      }}>
        <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 11, fontWeight: 700, color: SAND }}>Print real</span>
        <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 10, color: "rgba(255,255,255,0.55)" }}>{name}</span>
      </div>
    </div>
  );
}

/* ─── ABOUT PILLARS ─── */
const IcoChart = ({ c }: { c: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);
const IcoShield = ({ c }: { c: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);
const IcoMind = ({ c }: { c: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v4l3 3" />
    <path d="M8 12a4 4 0 0 1 8 0" />
  </svg>
);
const IcoTarget = ({ c }: { c: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const PILLARS: { icon: ReactNode; title: string; short: string; detail: string }[] = [
  {
    icon: <IcoChart c={SAND} />,
    title: "Price Action",
    short: "Leitura técnica de mercado",
    detail: "Aprenda a ler o gráfico sem precisar de indicadores. Padrões de candlestick, suporte, resistência e estrutura de mercado na prática."
  },
  {
    icon: <IcoShield c={SAND} />,
    title: "Gestão de Risco",
    short: "Proteção de capital",
    detail: "Regras claras de stop, gerenciamento de lote e psicologia do drawdown. Você aprende a sobreviver no mercado antes de lucrar."
  },
  {
    icon: <IcoMind c={SAND} />,
    title: "Psicologia de Mercado",
    short: "Mentalidade profissional",
    detail: "Controle emocional, disciplina e consistência. A diferença entre traders lucrativos e os que quebram está na cabeça, não no setup."
  },
  {
    icon: <IcoTarget c={SAND} />,
    title: "Estratégias Validadas",
    short: "Ciclos reais comprovados",
    detail: "Setups testados em bull e bear market, com histórico real de operações. Nada de backtest bonito — resultados de quem opera de verdade."
  },
];

function PillarItem({ icon, title, short, detail, open, onToggle }: {
  icon: ReactNode; title: string; short: string; detail: string; open: boolean; onToggle: () => void;
}) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onClick={onToggle}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: open ? "rgba(214,184,138,0.08)" : hov ? "rgba(214,184,138,0.04)" : "rgba(255,255,255,0.02)",
        border: `1px solid ${open ? "rgba(214,184,138,0.45)" : hov ? "rgba(214,184,138,0.22)" : "rgba(255,255,255,0.07)"}`,
        borderRadius: 12, padding: "14px 18px", cursor: "pointer",
        transition: "all 0.25s ease",
        boxShadow: open ? "0 0 18px rgba(214,184,138,0.10)" : "none",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>{icon}</span>
          <div>
            <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 14.5, color: open || hov ? SAND : "#fff", transition: "color 0.2s" }}>{title}</div>
            <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 12, color: TEXT_M, marginTop: 1 }}>{short}</div>
          </div>
        </div>
        <span style={{
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          width: 22, height: 22, borderRadius: "50%",
          background: open ? SAND : "rgba(255,255,255,0.08)",
          color: open ? BG_MAIN : TEXT_M, fontSize: 13, fontWeight: 700,
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
          transition: "all 0.25s ease", flexShrink: 0
        }}>+</span>
      </div>
      <div style={{
        maxHeight: open ? 120 : 0, overflow: "hidden",
        transition: "max-height 0.35s ease",
      }}>
        <p style={{
          fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.65)",
          lineHeight: 1.7, paddingTop: 12, borderTop: "1px solid rgba(214,184,138,0.15)", marginTop: 12
        }}>{detail}</p>
      </div>
    </div>
  );
}

/* ─── ABOUT PHOTO WITH LIGHTBOX ─── */
function AboutPhoto({ src, onOpen }: { src: string; onOpen: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="about-photo"
      onClick={onOpen}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: "0 0 auto", width: "clamp(280px,36vw,420px)", aspectRatio: "3/5",
        borderRadius: 20, overflow: "hidden",
        cursor: "zoom-in", position: "relative",
        display: "block"
      }}
    >
      <img
        src={src}
        alt="Mamute Trader BR"
        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
      />
      <div style={{
        position: "absolute", inset: 0,
        background: hovered ? "rgba(0,0,0,0.32)" : "rgba(0,0,0,0)",
        transition: "background 0.2s",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8"
          style={{ opacity: hovered ? 1 : 0, transition: "opacity 0.2s", filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.5))" }}
        >
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          <line x1="11" y1="8" x2="11" y2="14"/>
          <line x1="8" y1="11" x2="14" y2="11"/>
        </svg>
      </div>
    </div>
  );
}

/* ─── MAIN PAGE ─── */
export default function VitaoIBLP() {
  const [scrolled, setScrolled] = useState(false);
  const [slide, setSlide] = useState(1);
  const [openPillar, setOpenPillar] = useState<number | null>(null);
  const [lightbox, setLightbox] = useState(false);
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
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Bebas+Neue&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        html,body{background:${BG_MAIN};font-family:'Plus Jakarta Sans',sans-serif;overflow-x:hidden;}
        ::selection{background:rgba(214,184,138,.35);}
        ::-webkit-scrollbar{width:4px;}
        ::-webkit-scrollbar-track{background:${BG_MAIN};}
        ::-webkit-scrollbar-thumb{background:rgba(214,184,138,.4);border-radius:2px;}

        @keyframes marquee{
          0%{transform:translateX(0)}
          100%{transform:translateX(calc(-100% / 3))}
        }
        @keyframes marqueeOffset{
          0%{transform:translateX(-140px)}
          100%{transform:translateX(calc(-140px - 100% / 3))}
        }
        @keyframes floatA{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
        @keyframes floatB{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
        @keyframes floatC{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
        @keyframes livePulse{0%,100%{box-shadow:0 0 0 0 rgba(239,68,68,.5)}70%{box-shadow:0 0 0 14px rgba(239,68,68,0)}}
        @keyframes gentleSway{0%,100%{transform:translateX(0) translateY(0)}25%{transform:translateX(-6px) translateY(-3px)}50%{transform:translateX(0) translateY(0)}75%{transform:translateX(6px) translateY(3px)}}

        .ticker-track{animation:marquee 18s linear infinite}
        .ticker-track:hover{animation-play-state:paused}
        .ticker-track-offset{animation:marqueeOffset 18s linear infinite}
        .ticker-track-offset:hover{animation-play-state:paused}
        .flt{animation:floatA 4s ease-in-out infinite}
        .flt2{animation:floatB 5.5s 1.4s ease-in-out infinite}
        .flt3{animation:floatC 6s 2.1s ease-in-out infinite}
        .livepulse{animation:livePulse 1.8s ease-in-out infinite}

        button{background:none;border:none;cursor:pointer;padding:0;}

        @media(min-width:641px) and (max-width:900px){
          .hero-right{display:none!important;}
        }

        @media(max-width:640px){
          .hero-main{
            padding:72px 20px 0!important;
            flex-direction:column!important;
            justify-content:flex-start!important;
            text-align:center!important;
            gap:0!important;
          }
          .hero-left{
            max-width:100%!important;
            display:flex!important;
            flex-direction:column!important;
            align-items:center!important;
            padding-bottom:32px!important;
          }
          .hero-badge{font-size:12px!important;}
          .hero-desc{max-width:100%!important;font-size:14px!important;text-align:center!important;}
          .hero-section{min-height:auto!important;}
          .hero-right{
            display:flex!important;
            width:100%!important;
            flex:none!important;
            min-width:0!important;
            height:480px!important;
            position:relative!important;
            overflow:visible!important;
          }
          .about-section{padding:56px 20px!important;}
          .about-photo{width:100%!important;max-width:300px!important;margin:0 auto!important;aspect-ratio:3/4!important;}
          .social-proof-section{padding:56px 20px!important;}
          .carousel-row{padding:0 8px 20px!important;}
          .cta-section{padding:44px 16px 64px!important;}
          .cta-card{padding:36px 20px!important;}
          .footer-main{padding:24px 20px!important;flex-direction:column!important;text-align:center!important;gap:10px!important;}
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
      </nav>

      {/* ──── HERO ──── */}
      <section className="hero-section" style={{ minHeight: "100vh", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}>

        {/* Background image */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          backgroundImage: "url('/hero-bg.png')",
          backgroundSize: "cover", backgroundPosition: "center right",
          backgroundRepeat: "no-repeat"
        }} />

        {/* Green to Black gradient (in front of background image) */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(50,199,122,0.6) 0%, rgba(0,0,0,0.85) 100%)", zIndex: 2 }} />

        {/* Dark overlay to keep text readable */}
        <div style={{ position: "absolute", inset: 0, zIndex: 3, background: "rgba(4,4,12,0.62)" }} />

        {/* Sand ambient glow */}
        <div style={{ position: "absolute", top: "10%", right: "25%", width: 500, height: 500, background: "radial-gradient(circle, rgba(214,184,138,.07) 0%, transparent 70%)", pointerEvents: "none" }} />

        {/* Left fog — keeps left copy area more legible */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(4,4,12,0.85) 0%, rgba(4,4,12,0.70) 38%, rgba(4,4,12,0.1) 70%, rgba(4,4,12,0.4) 100%)" }} />

        {/* ── MAIN HERO CONTENT ── */}
        <div className="hero-main" style={{
          position: "relative", zIndex: 10, flex: 1,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          maxWidth: 1320, width: "100%", margin: "0 auto",
          padding: "80px 52px 56px", gap: 40
        }}>

          {/* LEFT COPY */}
          <div className="hero-left" style={{ flex: "0 0 auto", maxWidth: 480 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.13)", borderRadius: 20, padding: "7px 18px", marginBottom: 24 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={SAND} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: 13, color: "rgba(255,255,255,.9)" }}>Maior comunidade trader no Brasil!</span>
            </div>

            <h1 style={{ fontFamily: "'Bebas Neue',sans-serif", fontWeight: 400, fontSize: "clamp(48px,5.5vw,76px)", lineHeight: 1.0, color: "#FFF", marginBottom: 18, letterSpacing: "0.03em" }}>
              Lucre<br />diariamente<br />copiando minhas <span style={{ color: SAND }}>operações</span>
            </h1>

            <p className="hero-desc" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 400, fontSize: "clamp(13px,1.2vw,15px)", color: TEXT_M, lineHeight: 1.85, marginBottom: 28, maxWidth: 420 }}>
              Live de Alavancagem garantida, mais de 100 mil reais em bancas alavancadas por semana.
            </p>

            <div style={{ marginBottom: 26 }}>
              <WaButton label="Entre no meu grupo" size="lg" />
            </div>

            <AvatarGroup count="5.149" />
          </div>

          {/* RIGHT — Trader photo with scrolling carousel & badges */}
          <div className="hero-right" style={{
            position: "relative", flex: 1,
            display: "flex", justifyContent: "center", alignItems: "flex-end",
            height: "clamp(480px,72vh,700px)", overflow: "visible", minWidth: 320
          }}>
            {/* CRYPTO CAROUSEL — 2 rows, large cards with 2 visible per row */}
            <div style={{
              position: "absolute", top: "10%", left: "8%", right: "8%", zIndex: 1,
              width: "84%", height: 200,
              display: "flex", flexDirection: "column", gap: 8, alignItems: "stretch"
            }}>
              {[0, 1].map((rowIdx) => (
                <div key={rowIdx} style={{ position: "relative", width: "100%", overflow: "hidden", height: 92 }}>
                  {/* Left blur */}
                  <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 80, zIndex: 2, background: "linear-gradient(90deg, rgba(8,8,18,1) 0%, rgba(8,8,18,0.7) 50%, rgba(8,8,18,0) 100%)", pointerEvents: "none" }} />
                  {/* Right blur */}
                  <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 80, zIndex: 2, background: "linear-gradient(270deg, rgba(8,8,18,1) 0%, rgba(8,8,18,0.7) 50%, rgba(8,8,18,0) 100%)", pointerEvents: "none" }} />
                  {/* Track */}
                  <div className={rowIdx === 1 ? "ticker-track-offset" : "ticker-track"} style={{ display: "flex", gap: 12, width: "max-content", height: "100%", alignItems: "center" }}>
                    {[...COINS.slice(rowIdx * 3, rowIdx * 3 + 3), ...COINS.slice(rowIdx * 3, rowIdx * 3 + 3), ...COINS.slice(rowIdx * 3, rowIdx * 3 + 3)].map((coin, i) => (
                      <div key={i} style={{
                        display: "flex", alignItems: "center", gap: 12,
                        background: "rgba(15,15,28,0.70)", backdropFilter: "blur(10px)",
                        border: "1.5px solid rgba(255,255,255,0.05)", borderRadius: 12,
                        padding: "12px 18px", flexShrink: 0, userSelect: "none",
                        minWidth: 220, height: 68
                      }}>
                        <div style={{
                          width: 38, height: 38, borderRadius: "50%",
                          background: coin.color + "22",
                          border: `1px solid ${coin.color}77`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 11,
                          color: coin.color, flexShrink: 0
                        }}>{coin.symbol.slice(0, 3)}</div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                          <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 14, color: "#fff", whiteSpace: "nowrap" }}>{coin.name}</span>
                          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                            <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: 12, color: TEXT_M, whiteSpace: "nowrap" }}>{coin.price}</span>
                            <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 11, color: coin.pos ? SAND : "#FF5050", fontWeight: 700, whiteSpace: "nowrap" }}>{coin.change}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Trader photo */}
            <img
              src={traderPhoto}
              alt="Vitão Trader"
              style={{
                height: "100%",
                maxHeight: 680,
                objectFit: "contain",
                objectPosition: "bottom center",
                filter: "drop-shadow(0 0 60px rgba(214,184,138,.18))",
                pointerEvents: "none",
                userSelect: "none",
                position: "relative", zIndex: 2,
                animation: "gentleSway 6s ease-in-out infinite"
              }}
            />

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
      <section className="about-section" style={{ background: BG_DARK, padding: "100px 52px" }}>
        <div style={{
          maxWidth: 1060, margin: "0 auto",
          display: "flex", alignItems: "flex-start",
          gap: "clamp(44px,8vw,100px)", flexWrap: "wrap"
        }}>
          {/* Mamute Trader photo */}
          <AboutPhoto src={aboutPhoto} onOpen={() => setLightbox(true)} />

          {/* Copy */}
          <div style={{ flex: 1, minWidth: 260 }}>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontWeight: 400, fontSize: "clamp(42px,4.8vw,68px)", lineHeight: 1.0, color: "#FFF", marginBottom: 20, letterSpacing: "0.03em" }}>
              Transformamos<br />experiência em<br />direcionamento
            </h2>

            {/* Interactive pillars */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
              {PILLARS.map((p, i) => (
                <PillarItem
                  key={i}
                  {...p}
                  open={openPillar === i}
                  onToggle={() => setOpenPillar(openPillar === i ? null : i)}
                />
              ))}
            </div>

            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 13.5, color: "rgba(255,255,255,0.55)", fontStyle: "italic", marginBottom: 24, lineHeight: 1.7 }}>
              Nada de promessas irreais. Nada de sinal mágico.<br />
              Se você quer operar com base e mentalidade profissional... bem-vindo à Arena do Mamute Trader BR.
            </p>

            <WaButton label="Entre no meu grupo" />
          </div>
        </div>
      </section>

      {/* ──── SOCIAL PROOF ──── */}
      <section className="social-proof-section" style={{ background: BG_MAIN, padding: "100px 52px" }}>
        <div style={{ maxWidth: 920, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 5, marginBottom: 16 }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 15, color: TEXT_M, marginRight: 4 }}>5.0</span>
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill={SAND} stroke={SAND} strokeWidth="1">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            ))}
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontWeight: 400, fontSize: "clamp(44px,5.2vw,70px)", color: "#FFF", lineHeight: 1.0, marginBottom: 16, letterSpacing: "0.03em" }}>
            São milhares de vidas<br />transformadas
          </h2>
          <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: TEXT_M, fontSize: 15.5, lineHeight: 1.85, maxWidth: 580, margin: "0 auto 56px" }}>
            Operações comentadas, histórico público e metodologia clara ideal para quem quer acelerar o aprendizado e melhorar a execução.
          </p>

          {/* Carousel */}
          <div style={{ position: "relative", minHeight: 380 }}>
            <div className="carousel-row" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 16, padding: "0 52px 20px" }}>
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
                background: i === slide ? SAND : "rgba(255,255,255,.18)",
                transition: "all .3s"
              }} />
            ))}
          </div>
        </div>
      </section>

      {/* ──── LIVE CTA ──── */}
      <section className="cta-section" style={{ background: BG_DARK, padding: "70px 52px 110px" }}>
        <div style={{ maxWidth: 580, margin: "0 auto" }}>
          <div className="cta-card" style={{
            background: "linear-gradient(140deg,#2A2420 0%,#3A3128 42%,#2A2420 100%)",
            border: "1px solid rgba(214,184,138,.4)", borderRadius: 22,
            padding: "56px 44px", textAlign: "center", position: "relative", overflow: "hidden"
          }}>
            <div style={{ position: "absolute", top: -70, left: "50%", transform: "translateX(-50%)", width: 360, height: 220, background: "radial-gradient(ellipse, rgba(214,184,138,.28), transparent 72%)", pointerEvents: "none" }} />
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 20, position: "relative", zIndex: 1 }}>
              <div className="livepulse" style={{ width: 56, height: 56, borderRadius: "50%", background: "#EF4444", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2 }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: 8, color: "#fff", letterSpacing: ".13em" }}>LIVE</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff"><path d="M8 5v14l11-7z" /></svg>
              </div>
            </div>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontWeight: 400, fontSize: "clamp(40px,5vw,60px)", color: "#FFF", marginBottom: 14, position: "relative", zIndex: 1, letterSpacing: "0.03em" }}>Hoje tem live!</h2>
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
      <footer className="footer-main" style={{ background: BG_DARK, borderTop: "1px solid rgba(255,255,255,.04)", padding: "28px 52px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
          <div style={{ width: 34, height: 34, borderRadius: 9, background: "rgba(214,184,138,.15)", border: "1.5px solid rgba(214,184,138,.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 2 L12 22 M7 5 L12 2 L17 5 M7 19 L12 22 L17 19 M4 9 L7 7 M20 9 L17 7 M4 15 L7 17 M20 15 L17 17" stroke="#D6B88A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 7.5, color: "rgba(255,255,255,.4)", letterSpacing: ".12em" }}>MAMUTE BR</span>
        </div>
        <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 12, color: "rgba(255,255,255,.26)", textAlign: "center", flex: 1 }}>
          2026 Copyright © Mamute Trader BR Todos os direitos reservados.
        </p>
        <div style={{ width: 44 }} />
      </footer>

      {/* ──── LIGHTBOX ──── */}
      {lightbox && (
        <div
          onClick={() => setLightbox(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(0,0,0,0.88)",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "zoom-out", backdropFilter: "blur(6px)"
          }}
        >
          <img
            src={aboutPhoto}
            alt="Mamute Trader BR"
            style={{
              maxHeight: "90vh", maxWidth: "90vw",
              borderRadius: 20,
              border: "1px solid rgba(214,184,138,.35)",
              objectFit: "contain",
              boxShadow: "0 32px 80px rgba(0,0,0,0.7)"
            }}
          />
          <div style={{
            position: "absolute", top: 24, right: 28,
            width: 40, height: 40, borderRadius: "50%",
            background: "rgba(255,255,255,0.1)",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer"
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
