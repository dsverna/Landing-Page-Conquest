/* ============================================================
   Top sections: Navbar, Hero, TrustBar, Client logos, Philosophy
============================================================ */

const { useState, useEffect, useRef } = React;

/* ── Intersection helper for reveal animations ────────────── */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("in");
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "-30px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ============================================================
   NAVBAR
============================================================ */
const LOGO_URL =
  "https://lh3.googleusercontent.com/s819vmHVAaHH1gM8BEG9wLqIfexiwjnwVARKISZd9tZPmjhj6eO87wTMu7TXKL2CdOxGdWPeyZ9R-Yg3zJQne1zD4ExLLgnyYCI";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 100,
        backgroundColor: scrolled ? "#0a0a0a" : "transparent",
        transition: "background-color 300ms ease",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        justifyContent: "center",
        height: isMobile ? "110px" : "80px",
        gap: isMobile ? "8px" : "0",
        paddingTop: !isMobile && !scrolled ? "40px" : "0",
      }}
    >
      <a href="#hero" style={{ display: "block" }}>
        <img
          src={LOGO_URL}
          alt="Sartoretto Verna"
          style={{
            height: isMobile ? "45px" : scrolled ? "55px" : "70px",
            width: "auto",
            display: "block",
            margin: "0 auto",
            maxWidth: "none",
            transition: "height 300ms ease",
          }}
        />
      </a>

      <div
        style={
          isMobile
            ? { display: "flex", justifyContent: "center" }
            : { position: "absolute", right: "32px", top: "50%", transform: "translateY(-50%)" }
        }
      >
        <a
          href="#contatti"
          style={{
            display: "inline-flex",
            alignItems: "center",
            background: "#fff",
            color: "#0a0a0a",
            fontFamily: "Barlow, sans-serif",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            textDecoration: "none",
            fontSize: isMobile ? "11px" : "13px",
            padding: isMobile ? "6px 12px" : "12px 24px",
            transition: "background-color 200ms ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#CCFF00")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
        >
          Prenota una consulenza
        </a>
      </div>
    </nav>
  );
}

/* ============================================================
   HERO (Vimeo background)
============================================================ */
function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "640px",
        overflow: "hidden",
        background: "#0a0a0a",
      }}
    >
      {/* Vimeo background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <iframe
          src="https://player.vimeo.com/video/1189298848?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "max(100vw, 177.78vh)",
            height: "max(100vh, 56.25vw)",
            border: "none",
          }}
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Sartoretto Verna"
        />
      </div>

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 10,
          background:
            "linear-gradient(160deg, rgba(0,181,181,0.10) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.75) 100%)",
        }}
      />

      {/* Content */}
      <div
        className="container-px"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          paddingBottom: "5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <div>
            <p
              className="font-sans text-acid reveal in"
              style={{
                fontSize: "clamp(0.7rem, 1vw, 0.85rem)",
                letterSpacing: "0.38em",
                textTransform: "uppercase",
                fontWeight: 600,
                margin: "0 0 1.25rem 0",
              }}
            >
              Pharmacy &nbsp;•&nbsp; Business &nbsp;•&nbsp; Architects
            </p>
            <h1
              className="font-display reveal in"
              style={{
                fontSize: "clamp(2.6rem, 8.5vw, 9rem)",
                lineHeight: 0.92,
                margin: 0,
                color: "#fff",
                textTransform: "uppercase",
                letterSpacing: "-0.005em",
              }}
            >
              Non arrediamo<br />
              <span className="text-acid">farmacie.</span>
            </h1>
            <p
              className="font-sans reveal in"
              style={{
                color: "rgba(255,255,255,0.85)",
                fontSize: "clamp(0.85rem, 1.05vw, 1.05rem)",
                lineHeight: 1.55,
                letterSpacing: "0.04em",
                fontWeight: 500,
                marginTop: "2.5rem",
                maxWidth: "44rem",
              }}
            >
              PROGETTIAMO LAYOUT E SISTEMI DI ARREDO CHE MIGLIORANO<br />
              ESPERIENZA, FLUSSO CLIENTI E VENDITE.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
            }}
          >
            <a href="#contatti" className="btn-primary">
              Prenota una consulenza →
            </a>
            <a href="#realizzazioni" className="btn-outline">
              Guarda i progetti →
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "24px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <div
            style={{
              width: "1px",
              height: "36px",
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)",
              animation: "scrollHint 1.8s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scrollHint {
          0%, 100% { transform: translateY(0); opacity: 0.8; }
          50%      { transform: translateY(10px); opacity: 0.3; }
        }
      `}</style>
    </section>
  );
}

/* ============================================================
   TRUST BAR — marquee with services
============================================================ */
const trustItems = [
  "Restyling", "Ristrutturazione", "Ampliamento", "Nuova apertura",
  "Trasferimento", "Arredamento", "Progettazione", "Consulenza strategica",
  "Patient experience", "Business design", "Architettura", "Identità visiva",
  "Servizi sanitari", "Benessere", "Made in Italy",
];

function TrustBar() {
  const doubled = [...trustItems, ...trustItems];
  return (
    <div className="bg-acid marquee-wrapper" style={{ overflow: "hidden", padding: "1rem 0" }}>
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", flexShrink: 0 }}>
            <span
              className="font-display text-dark"
              style={{
                fontSize: "clamp(1.35rem, 2.2vw, 1.9rem)",
                padding: "0 2.5rem",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                letterSpacing: "0.02em",
              }}
            >
              {item}
            </span>
            <span style={{ color: "rgba(10,10,10,0.5)", fontSize: "1.1rem", userSelect: "none" }}>•</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   CLIENT LOGOS — "SCELTI DA FARMACIE IN TUTTA ITALIA"
============================================================ */
const clientLogos = [
  { src: "https://lh3.googleusercontent.com/E9y_IRPUaZ2lj6nUx36ZT8LJBKXU2UD2XWqJRX5y26F5pTevFLG0HZyPMMkLTDvRslkzK2QEsiUJk-yoSTVvj5zFGeVp7C7DULY", alt: "Farmacia Metauro" },
  { src: "https://lh3.googleusercontent.com/qnafp2ySt7ZPVEkrCb-t5ZhOMfvOgBJ3FKxggbOzEtuebbwZgIrRyw_EdJjDbLPUJkKjcEUg_0tTt6bSRroYK0u22YN7MAoe_BI", alt: "Farmacia Marzoli" },
  { src: "https://lh3.googleusercontent.com/xpSmfC5NtIfW3a2XvbRHyBMGy3oImcPEs0lZdnKb11R4IRnVMSlwftBd8lWsmRWRrLt7MVsmurDiaDo92qUE5VPvLF_fXkN33yoy", alt: "Farmacia San Brunello" },
  { src: "https://lh3.googleusercontent.com/rhXzHtmIBflBl5OHL1VwMaB3Uz-joFSs6w7J3WTWBk1FjRMaWKxgC6XFfs-cD3i1R0I3AVH1ytK3xuKTsDIsPM_9l9SmekPlDFs", alt: "Farmacia Pelicano" },
  { src: "https://lh3.googleusercontent.com/Bw84772HOVhWmDWwsjdYcvwKre0m2n7CgZaniIffmr08AFhA28QLtv_N0pNUudOhsRhptZs_PaAbEdKeibPKoj_qnPlxcJ9SNZ8", alt: "Farmacia Appio Latino" },
];

function ClientLogos() {
  const ref = useReveal();
  return (
    <section
      style={{
        background: "#FAFAF9",
        borderTop: "1px solid #eee",
        borderBottom: "1px solid #eee",
        padding: "4rem 0",
      }}
    >
      <div className="container-px reveal" ref={ref} style={{ textAlign: "center", marginBottom: "2.75rem" }}>
        <p
          className="font-sans text-teal"
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            fontWeight: 700,
            margin: "0 0 0.75rem 0",
          }}
        >
          Scelti da farmacie in tutta Italia
        </p>
        <h2
          className="font-display"
          style={{
            color: "#0a0a0a",
            fontSize: "clamp(1.5rem, 2.6vw, 2.4rem)",
            margin: 0,
            textTransform: "uppercase",
            lineHeight: 1.05,
          }}
        >
          Dal 1965 progettiamo farmacie,<br />
          con oltre 3.000 realizzazioni nel mondo.
        </h2>
      </div>

      <div
        className="container-px"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem 3.5rem",
        }}
      >
        {clientLogos.map((logo, i) => (
          <img
            key={i}
            src={logo.src}
            alt={logo.alt}
            style={{
              height: "62px",
              width: "auto",
              opacity: 0.65,
              filter: "grayscale(100%)",
              objectFit: "contain",
              transition: "opacity 250ms ease, filter 250ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.filter = "grayscale(0%)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "0.65";
              e.currentTarget.style.filter = "grayscale(100%)";
            }}
          />
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   PHILOSOPHY — 3 panels (Esperienza / Business / Architettura)
   Adapted from PerformanceSection.tsx
============================================================ */
const philosophyPanels = [
  {
    label: "01 — Pharmacy",
    heading: "Esperienza",
    body:
      "La farmacia diventa un luogo chiaro, accogliente e memorabile, dove il paziente si orienta meglio e vive un'esperienza più evoluta.",
    overlay: "rgba(204,255,0,0.50)",
    img:
      "https://storage.googleapis.com/lp-assets-prod/yHL3HA6j9ARWnPLvbF8fdD/ec5y4oSZuvQ5uF56eyWyGh",
  },
  {
    label: "02 — Business",
    heading: "Business",
    body:
      "Ogni scelta progettuale viene letta come leva di redditività: percorsi, categorie, servizi, aree consulenza e relazione con il paziente.",
    overlay: "rgba(0,181,181,0.40)",
    img:
      "https://storage.googleapis.com/lp-assets-prod/yHL3HA6j9ARWnPLvbF8fdD/mpFUHVbKW3PQXRUAg9RxuY",
  },
  {
    label: "03 — Architects",
    heading: "Architettura",
    body:
      "Materiali, luce, layout e identità costruiscono uno spazio distintivo, contemporaneo e coerente con la visione imprenditoriale del titolare.",
    overlay: "rgba(180,0,230,0.45)",
    img:
      "https://storage.googleapis.com/lp-assets-prod/yHL3HA6j9ARWnPLvbF8fdD/cjipopvikKzfsH9rGTYjcW",
  },
];

function PhilosophySection() {
  const headRef = useReveal();
  return (
    <section id="approccio" style={{ width: "100%", background: "#0a0a0a" }}>
      <div className="container-px reveal" ref={headRef} style={{ paddingTop: "5rem", paddingBottom: "3rem" }}>
        <p
          className="font-sans text-acid"
          style={{
            fontSize: "0.85rem",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            fontWeight: 600,
            margin: "0 0 1rem 0",
          }}
        >
          Non arredi. Performance.
        </p>
        <h2
          className="font-display"
          style={{
            color: "#fff",
            fontSize: "clamp(2.2rem, 6.5vw, 6.8rem)",
            margin: 0,
            textTransform: "uppercase",
            lineHeight: 0.98,
            maxWidth: "22ch",
          }}
        >
          Una farmacia non migliora<br />
          solo perché <span className="text-acid">cambia banco.</span>
        </h2>
        <p
          className="font-sans"
          style={{
            color: "rgba(255,255,255,0.65)",
            fontSize: "clamp(1rem, 1.15vw, 1.15rem)",
            lineHeight: 1.65,
            fontWeight: 300,
            marginTop: "3rem",
            maxWidth: "62ch",
          }}
        >
          Migliora quando spazio, servizi, flussi ed esperienza iniziano a lavorare
          insieme. Per questo Sartoretto Verna unisce architettura, strategia e
          business design in un metodo pensato esclusivamente per la farmacia.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", width: "100%" }}>
        {philosophyPanels.map((p, i) => (
          <PhilosophyPanel key={p.heading} panel={p} index={i} />
        ))}
      </div>
    </section>
  );
}

function PhilosophyPanel({ panel, index }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        position: "relative",
        flex: "1 1 320px",
        minHeight: "420px",
        overflow: "hidden",
        transitionDelay: `${index * 120}ms`,
      }}
    >
      <img
        src={panel.img}
        alt={panel.heading}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(to top, rgba(0,0,0,0.95) 0%, ${panel.overlay} 100%)`,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "1.5rem",
          left: "1.75rem",
          right: "1.75rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          zIndex: 10,
        }}
      >
        <span
          className="font-sans"
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: "0.7rem",
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          {panel.label}
        </span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ color: "rgba(255,255,255,0.4)" }}>
          <path d="M3 17L17 3M17 3H5M17 3V15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square"/>
        </svg>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "1.75rem",
          zIndex: 10,
        }}
      >
        <h3
          className="font-display"
          style={{
            color: "#fff",
            textTransform: "uppercase",
            lineHeight: 1,
            margin: "0 0 1rem 0",
            fontSize: "clamp(2rem, 4vw, 4.2rem)",
          }}
        >
          {panel.heading}
        </h3>
        <p
          className="font-sans"
          style={{
            color: "rgba(255,255,255,0.82)",
            fontSize: "clamp(0.95rem, 1vw, 1.05rem)",
            lineHeight: 1.6,
            fontWeight: 300,
            maxWidth: "30ch",
            margin: 0,
          }}
        >
          {panel.body}
        </p>
      </div>
    </div>
  );
}

/* Export to window for other modules */
Object.assign(window, {
  Navbar,
  Hero,
  TrustBar,
  ClientLogos,
  PhilosophySection,
  useReveal,
});
