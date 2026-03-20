import { useState, useEffect, type ReactNode } from "react";
import "./about-mobile.css";
import bigbossAbout from "@assets/bigboss-05.jpeg";

function useIsMobile(bp = 640) {
  const [m, setM] = useState(() => typeof window !== "undefined" && window.innerWidth <= bp);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width:${bp}px)`);
    const h = (e: MediaQueryListEvent) => setM(e.matches);
    mq.addEventListener("change", h);
    setM(mq.matches);
    return () => mq.removeEventListener("change", h);
  }, [bp]);
  return m;
}

function SharkIcon() {
  const [sharkX, setSharkX] = useState(0);
  const [sharkY, setSharkY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const percent = docHeight > 0 ? (scrolled / docHeight) : 0;
      const newX = percent * (window.innerWidth + 150) - 75;
      const waveY = Math.sin(scrolled * 0.01) * 15;
      setSharkX(newX);
      setSharkY(waveY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 30,
        left: `${sharkX}px`,
        top: `auto`,
        transform: `translateY(${sharkY}px) ${sharkX > window.innerWidth / 2 ? "scaleX(1)" : "scaleX(-1)"}`,
        width: 140,
        height: 90,
        pointerEvents: "none",
        zIndex: 100,
        filter: "drop-shadow(0 0 35px rgba(0,217,255,0.8))"
      }}
    >
      <img
        src="/shark.png"
        alt="Shark"
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          objectFit: "contain",
          filter: "brightness(1.2) drop-shadow(0 0 20px rgba(0,217,255,0.8))"
        }}
      />
    </div>
  );
}


const CTA_LINK = "https://chat.whatsapp.com/GKz6umKPR46F5gJDafa7LG";

const BG_MAIN = "#0A0E1A";
const BG_DARK = "#0D1628";
const SAND = "#00D9FF";
const SAND_D = "#0099CC";
const ACCENT = "#00D9FF";
const TEXT_M = "#A0B8D4";

function WaButton({ label = "Únete a mi grupo", style = {}, size = "md" }: {
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
        boxShadow: h ? "0 6px 28px rgba(0,217,255,0.38)" : "0 2px 14px rgba(0,217,255,0.22)",
        transform: h ? "scale(1.03)" : "scale(1)", ...style
      }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      {label}
    </a>
  );
}

const COINS = [
  { symbol: "LTC", name: "Litecoin",  price: "$152.48",    change: "+2.15%", pos: true,  color: "#A0A0A0" },
  { symbol: "BTC", name: "Bitcoin",   price: "$96,543.22", change: "+3.45%", pos: true,  color: "#F7931A" },
  { symbol: "SOL", name: "Solana",    price: "$198.77",    change: "+1.82%", pos: true,  color: "#9945FF" },
  { symbol: "DASH",name: "Dash",      price: "$31.52",     change: "-1.23%", pos: false, color: "#008CE7" },
  { symbol: "XRP", name: "XRP",       price: "$2.58",      change: "+2.34%", pos: true,  color: "#3A6DA8" },
  { symbol: "ETH", name: "Ethereum",  price: "$3,542.89",  change: "+2.87%", pos: true,  color: "#627EEA" },
];

function ProfitBadge({ value, style = {} }: { value: string; style?: React.CSSProperties }) {
  return (
    <div style={{
      background: "rgba(20,16,10,0.82)", border: `1px solid rgba(0,217,255,0.55)`,
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
            <img src={src} alt={`Miembro ${i + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{
          background: "rgba(0,217,255,0.15)", border: "1px solid rgba(0,217,255,0.35)",
          borderRadius: 20, padding: "4px 12px",
          fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 13, color: SAND,
        }}>{count}</span>
        <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 13, color: TEXT_M }}>¡Solo faltas tú!</span>
      </div>
    </div>
  );
}

function VideoCard({ idx }: { idx: number }) {
  const depoImages = ["/depo1.png", "/depo2.png", "/depo3.png", "/depo4.png"];
  const src = depoImages[idx % depoImages.length];
  return (
    <div style={{
      borderRadius: 20, overflow: "hidden", background: "#111",
      border: "1px solid rgba(255,255,255,0.10)",
      width: "100%", maxWidth: 340, aspectRatio: "auto",
      position: "relative", flexShrink: 0, margin: "0 auto",
      boxShadow: "0 24px 64px rgba(0,0,0,0.55)",
      minHeight: 500, display: "flex", alignItems: "center", justifyContent: "center"
    }}>
      <img src={src} alt={`Testimonio ${idx + 1}`} style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center", display: "block", padding: 0 }} />
    </div>
  );
}

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
    short: "Lectura técnica del mercado",
    detail: "Aprende a leer el gráfico sin necesidad de indicadores. Patrones de velas, soporte, resistencia y estructura de mercado en la práctica."
  },
  {
    icon: <IcoShield c={SAND} />,
    title: "Gestión de Riesgo",
    short: "Protección de capital",
    detail: "Reglas claras de stop, gestión de lotes y psicología del drawdown. Aprendes a sobrevivir en el mercado antes de ganar."
  },
  {
    icon: <IcoMind c={SAND} />,
    title: "Psicología de Mercado",
    short: "Mentalidad profesional",
    detail: "Control emocional, disciplina y consistencia. La diferencia entre traders rentables y los que quiebran está en la cabeza, no en el setup."
  },
  {
    icon: <IcoTarget c={SAND} />,
    title: "Estrategias Validadas",
    short: "Ciclos reales comprobados",
    detail: "Setups probados en bull y bear market, con historial real de operaciones. Nada de backtest bonito — resultados de quien opera de verdad."
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
        background: open ? "rgba(0,217,255,0.08)" : hov ? "rgba(0,217,255,0.04)" : "rgba(255,255,255,0.02)",
        border: `1px solid ${open ? "rgba(0,217,255,0.45)" : hov ? "rgba(0,217,255,0.22)" : "rgba(255,255,255,0.07)"}`,
        borderRadius: 12, padding: "14px 18px", cursor: "pointer",
        transition: "all 0.25s ease",
        boxShadow: open ? "0 0 18px rgba(0,217,255,0.10)" : "none",
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
          lineHeight: 1.7, paddingTop: 12, borderTop: "1px solid rgba(0,217,255,0.15)", marginTop: 12
        }}>{detail}</p>
      </div>
    </div>
  );
}

function AboutPhoto({ src, onOpen }: { src: string; onOpen: () => void }) {
  const [hovered, setHovered] = useState(false);
  const mob = useIsMobile();
  return (
    <div
      className="about-photo"
      onClick={onOpen}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={mob ? {
        width: "100%", aspectRatio: "4/3",
        borderRadius: 0, overflow: "hidden",
        cursor: "zoom-in", position: "relative",
        display: "block", flex: "none",
        minHeight: 300
      } : {
        flex: "0 0 auto", width: "clamp(280px,36vw,420px)", aspectRatio: "3/5",
        borderRadius: 20, overflow: "hidden",
        cursor: "zoom-in", position: "relative", display: "block"
      }}
    >
      <img
        src={src}
        alt="BigBoss João Mendonça"
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

export default function VitaoIBLP() {
  const [scrolled, setScrolled] = useState(false);
  const [slide, setSlide] = useState(1);
  const [openPillar, setOpenPillar] = useState<number | null>(null);
  const [lightbox, setLightbox] = useState(false);
  const total = 4;

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
        ::selection{background:rgba(0,217,255,.35);}
        ::-webkit-scrollbar{width:4px;}
        ::-webkit-scrollbar-track{background:${BG_MAIN};}
        ::-webkit-scrollbar-thumb{background:rgba(0,217,255,.4);border-radius:2px;}

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
        .ticker-fade{display:none!important;}
        .ticker-row-mask{
          mask-image:linear-gradient(90deg,transparent 0%,black 10%,black 90%,transparent 100%);
          -webkit-mask-image:linear-gradient(90deg,transparent 0%,black 10%,black 90%,transparent 100%);
        }

        button{background:none;border:none;cursor:pointer;padding:0;}

        @media(min-width:641px) and (max-width:900px){
          .hero-right{display:none!important;}
        }

        @media(max-width:640px){
          .hero-main{
            padding:40px 20px 0!important;
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
            padding-bottom:20px!important;
          }
          .hero-h1{font-size:32px!important;line-height:1.1!important;margin-bottom:12px!important;}
          .hero-badge{font-size:11px!important;margin-bottom:12px!important;}
          .hero-desc{max-width:100%!important;font-size:13px!important;text-align:center!important;margin-bottom:18px!important;}
          .hero-section{min-height:auto!important;}
          .ticker-container{left:0!important;right:0!important;width:100%!important;}
          .hero-right{
            display:flex!important;
            width:100%!important;
            flex:none!important;
            min-width:0!important;
            height:480px!important;
            position:relative!important;
            overflow:visible!important;
          }
          .social-proof-section{padding:56px 20px!important;}
          .carousel-row{padding:0 8px 20px!important;}
          .cta-section{padding:44px 16px 64px!important;}
          .cta-card{padding:36px 20px!important;}
          .footer-main{padding:24px 20px!important;flex-direction:column!important;text-align:center!important;gap:10px!important;}
        }
      `}</style>

      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 999,
        background: scrolled ? "rgba(8,8,18,.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,.05)" : "none",
        transition: "all .3s", padding: "14px 48px",
        display: "flex", justifyContent: "center", alignItems: "center"
      }}>
      </nav>

      <section className="hero-section" style={{ minHeight: "100vh", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}>

        <iframe
          src="https://player.vimeo.com/video/1175565741?badge=0&autopause=0&controls=0&loop=1&autoplay=1&muted=1&player_id=0&app_id=58479"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          title="BigBoss Video Background"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100%",
            height: "100%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
            objectFit: "cover"
          }}
        />

        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(90deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.75) 25%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)",
          zIndex: 5,
          pointerEvents: "none"
        }} />

        <div className="hero-main" style={{
          position: "relative", zIndex: 10, flex: 1,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          maxWidth: 1320, width: "100%", margin: "0 auto",
          padding: "80px 52px 56px", gap: 40
        }}>

          <div className="hero-left" style={{ flex: "0 0 auto", maxWidth: 480 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.13)", borderRadius: 20, padding: "7px 18px", marginBottom: 24 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={SAND} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: 13, color: "rgba(255,255,255,.9)" }}>¡La mayor comunidad trader de Latinoamérica!</span>
            </div>

            <h1 className="hero-h1" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(42px,5.2vw,72px)", lineHeight: 1.05, color: "#FFF", marginBottom: 18, letterSpacing: "-0.01em" }}>
              Gana<br />a diario<br />copiando mis <span style={{ color: SAND }}>operaciones</span>
            </h1>

            <p className="hero-desc" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 400, fontSize: "clamp(13px,1.2vw,15px)", color: TEXT_M, lineHeight: 1.85, marginBottom: 28, maxWidth: 420 }}>
              Live de apalancamiento garantizado, más de 100 mil en cuentas apalancadas por semana.
            </p>

            <div style={{ marginBottom: 26 }}>
              <WaButton label="Únete a mi grupo" size="lg" />
            </div>

            <AvatarGroup count="5.149" />
          </div>

        </div>
      </section>

      <section className="about-section">
        <div className="about-inner">
          <AboutPhoto src={bigbossAbout} onOpen={() => setLightbox(true)} />

          <div className="about-copy">
            <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "clamp(36px,4.5vw,62px)", lineHeight: 1.1, color: "#FFF", marginBottom: 20, letterSpacing: "-0.01em" }}>
              ¿Quién es<br />el <span style={{ color: SAND }}>BigBoss?</span>
            </h2>

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

            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 13.5, color: "rgba(255,255,255,0.55)", marginBottom: 8, lineHeight: 1.75 }}>
              Con años de actuación en los bastidores del mercado financiero, João Mendonça desarrolló una lectura profunda sobre flujo institucional, macroeconomía global y la dinámica que realmente mueve los grandes activos del mercado.
            </p>
            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 13.5, color: "rgba(255,255,255,0.55)", marginBottom: 24, lineHeight: 1.75 }}>
              Conocido como BigBoss, es especialista en el mercado de metales internacionales y criptomonedas, construyó su experiencia operando y analizando los movimientos del capital institucional, entendiendo cómo bancos, fondos y grandes participantes posicionan dinero en los mercados globales.
            </p>

            <WaButton label="Únete a mi grupo" />
          </div>
        </div>
      </section>

      <section className="social-proof-section" style={{ background: BG_MAIN, padding: "100px 52px" }}>
        <div style={{ maxWidth: 520, margin: "0 auto", textAlign: "center" }}>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 5, marginBottom: 18 }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 15, color: "#E8A820", marginRight: 4 }}>5.0</span>
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#E8A820" stroke="#E8A820" strokeWidth="0.5">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            ))}
          </div>

          <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "clamp(26px,4vw,38px)", color: "#FFF", lineHeight: 1.25, marginBottom: 18 }}>
            Miles de vidas<br />transformadas
          </h2>

          <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: TEXT_M, fontSize: 15, lineHeight: 1.85, marginBottom: 44 }}>
            Operaciones comentadas, historial público y metodología clara ideal para quien quiere acelerar el aprendizaje y mejorar la ejecución.
          </p>

          <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>

            <button onClick={() => setSlide(s => (s - 1 + total) % total)} style={{
              flexShrink: 0, width: 40, height: 40, borderRadius: "50%",
              background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.15)",
              color: "#fff", fontSize: 22, display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", transition: "background .2s"
            }}>‹</button>

            <div style={{ flex: 1 }}>
              <VideoCard idx={slide} />
            </div>

            <button onClick={() => setSlide(s => (s + 1) % total)} style={{
              flexShrink: 0, width: 40, height: 40, borderRadius: "50%",
              background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.15)",
              color: "#fff", fontSize: 22, display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", transition: "background .2s"
            }}>›</button>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: 7, marginTop: 28 }}>
            {[...Array(total)].map((_, i) => (
              <button key={i} onClick={() => setSlide(i)} style={{
                width: i === slide ? 24 : 8, height: 8, borderRadius: 4,
                background: i === slide ? SAND : "rgba(255,255,255,.20)",
                transition: "all .3s", cursor: "pointer"
              }} />
            ))}
          </div>

        </div>
      </section>

      <section className="cta-section" style={{ position: "relative", padding: "70px 24px 110px", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/hero-bigboss.png')", backgroundSize: "cover", backgroundPosition: "center", zIndex: 0 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(0,217,255,0.25) 0%, rgba(10,14,26,0.92) 100%)", zIndex: 1 }} />

        <div style={{ maxWidth: 400, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div className="cta-card" style={{
            background: "linear-gradient(150deg,rgba(13,22,40,0.88) 0%,rgba(20,35,60,0.92) 50%,rgba(13,22,40,0.88) 100%)",
            border: "1.5px solid rgba(0,217,255,.35)", borderRadius: 24,
            padding: "52px 36px 44px", textAlign: "center", position: "relative", overflow: "hidden",
            boxShadow: "0 0 60px rgba(0,217,255,.12), inset 0 1px 0 rgba(255,255,255,.06)",
            backdropFilter: "blur(12px)"
          }}>
            <div style={{ position: "absolute", top: -80, left: "50%", transform: "translateX(-50%)", width: 320, height: 200, background: "radial-gradient(ellipse, rgba(0,217,255,.22), transparent 70%)", pointerEvents: "none" }} />

            <div style={{ display: "flex", justifyContent: "center", marginBottom: 24, position: "relative", zIndex: 1 }}>
              <div className="livepulse" style={{ position: "relative", width: 72, height: 72, borderRadius: "50%", background: "#EF4444", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 0 8px rgba(239,68,68,.15)" }}>
                <span style={{
                  position: "absolute", top: 12, left: "50%", transform: "translateX(-50%)",
                  fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 900, fontSize: 9,
                  color: "#fff", letterSpacing: ".16em", lineHeight: 1
                }}>LIVE</span>
                <svg style={{ marginTop: 10 }} width="20" height="20" viewBox="0 0 24 24" fill="#fff">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            <h2 style={{
              fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700,
              fontSize: "clamp(26px,5vw,32px)", color: "#FFF",
              marginBottom: 14, position: "relative", zIndex: 1, lineHeight: 1.2
            }}>¡Hoy hay live!</h2>

            <p style={{
              fontFamily: "'Plus Jakarta Sans',sans-serif", color: "rgba(255,255,255,.60)",
              fontSize: 15, lineHeight: 1.78, maxWidth: 280, margin: "0 auto 32px",
              position: "relative", zIndex: 1
            }}>
              Haz clic en el botón y participa, ¡ven a ganar dinero conmigo en vivo!
            </p>

            <div style={{ position: "relative", zIndex: 1 }}>
              <WaButton label="Únete a mi grupo" size="lg" />
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-main" style={{ background: BG_DARK, borderTop: "1px solid rgba(255,255,255,.04)", padding: "28px 52px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
          <div style={{ width: 34, height: 34, borderRadius: 9, background: "rgba(0,217,255,.15)", border: "1.5px solid rgba(0,217,255,.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 2 L12 22 M7 5 L12 2 L17 5 M7 19 L12 22 L17 19 M4 9 L7 7 M20 9 L17 7 M4 15 L7 17 M20 15 L17 17" stroke="#D6B88A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 12, color: "rgba(255,255,255,.26)", textAlign: "center", flex: 1 }}>
          2026 Copyright © BigBoss João Mendonça. Todos los derechos reservados.
        </p>
        <div style={{ width: 44 }} />
      </footer>

      <SharkIcon />

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
            src={bigbossAbout}
            alt="BigBoss João Mendonça"
            style={{
              maxHeight: "90vh", maxWidth: "90vw",
              borderRadius: 20,
              border: "1px solid rgba(0,217,255,.35)",
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
