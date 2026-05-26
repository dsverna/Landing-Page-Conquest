/* ============================================================
   Middle sections: Comparison, Stats, Results, Gallery, Method
============================================================ */

const { useState: useStateMid, useEffect: useEffectMid, useRef: useRefMid } = React;

/* ============================================================
   COMPARISON — "LA DIFFERENZA STRATEGICA / NON SOLO UN SEMPLICE FORNITORE"
============================================================ */
const compRows = [
  {
    dimension: "Focus",
    traditional: "Arredi, banchi, espositori e fornitura.",
    sv: "Redditività, patient experience e identità della farmacia.",
  },
  {
    dimension: "Metodo",
    traditional: "Soluzione spesso legata al catalogo prodotto.",
    sv: "Consulenza strategica, progettazione integrata e know-how verticale.",
  },
  {
    dimension: "Risultato",
    traditional: "Una farmacia arredata.",
    sv: "Un luogo della salute capace di generare valore.",
  },
];

function ComparisonSection() {
  const ref = window.useReveal();
  return (
    <section id="perche-sceglierci" style={{ background: "#fff", padding: "5rem 0" }}>
      <div className="container-px reveal" ref={ref}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3.5rem",
            alignItems: "start",
          }}
          className="comp-grid"
        >
          {/* Left: heading */}
          <div>
            <p
              className="font-sans text-teal"
              style={{
                fontSize: "0.85rem",
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                fontWeight: 700,
                margin: "0 0 1rem 0",
              }}
            >
              La differenza strategica
            </p>
            <h2
              className="font-display"
              style={{
                color: "#0a0a0a",
                fontSize: "clamp(2.2rem, 5.8vw, 6rem)",
                lineHeight: 0.98,
                margin: "0 0 2.75rem 0",
                textTransform: "uppercase",
              }}
            >
              Non un semplice<br />fornitore.
            </h2>
            <p
              className="font-sans"
              style={{
                color: "#444",
                fontSize: "clamp(1rem, 1.1vw, 1.15rem)",
                lineHeight: 1.65,
                fontWeight: 300,
                maxWidth: "42ch",
                margin: 0,
              }}
            >
              Chi cerca arredo farmacia spesso parte dal prodotto, ma una farmacia
              che deve crescere richiede una visione più ampia: business, esperienza,
              servizi e architettura devono procedere insieme.
            </p>
          </div>

          {/* Right: table */}
          <div>
            <div className="comp-table-desktop">
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "100px 1fr 1fr",
                  marginBottom: "0.25rem",
                }}
              >
                <span />
                <span
                  className="font-sans"
                  style={{
                    fontSize: "0.78rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#aaa",
                    paddingBottom: "1rem",
                    borderBottom: "1px solid #ddd",
                    textAlign: "center",
                  }}
                >
                  Fornitore tradizionale
                </span>
                <div
                  style={{
                    paddingBottom: "1rem",
                    borderBottom: "2px solid #0a0a0a",
                    textAlign: "center",
                  }}
                >
                  <span
                    className="font-sans"
                    style={{
                      fontSize: "0.78rem",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "#0a0a0a",
                      fontWeight: 700,
                    }}
                  >
                    Sartoretto Verna
                  </span>
                </div>
              </div>
              {compRows.map((row, i) => (
                <div
                  key={row.dimension}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "100px 1fr 1fr",
                    gap: "1rem",
                    padding: "1.5rem 0",
                    borderBottom: i < compRows.length - 1 ? "1px solid #eee" : "none",
                    alignItems: "start",
                  }}
                >
                  <span
                    className="font-display"
                    style={{
                      color: "#bbb",
                      fontSize: "0.95rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      paddingTop: "2px",
                    }}
                  >
                    {row.dimension}
                  </span>
                  <p
                    className="font-sans"
                    style={{
                      color: "#bbb",
                      fontSize: "1rem",
                      fontWeight: 300,
                      lineHeight: 1.65,
                      textDecoration: "line-through",
                      textDecorationColor: "#ccc",
                      margin: 0,
                    }}
                  >
                    {row.traditional}
                  </p>
                  <p
                    className="font-sans"
                    style={{
                      color: "#0a0a0a",
                      fontSize: "1rem",
                      fontWeight: 600,
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {row.sv}
                  </p>
                </div>
              ))}
            </div>

            {/* Mobile */}
            <div className="comp-table-mobile">
              {compRows.map((row) => (
                <div
                  key={row.dimension}
                  style={{
                    border: "1px solid #e8e8e8",
                    padding: "1.25rem",
                    marginBottom: "1rem",
                  }}
                >
                  <span
                    className="font-display text-teal"
                    style={{
                      fontSize: "0.7rem",
                      letterSpacing: "0.3em",
                      textTransform: "uppercase",
                      display: "block",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {row.dimension}
                  </span>
                  <p
                    className="font-sans"
                    style={{
                      color: "#0a0a0a",
                      fontSize: "1rem",
                      fontWeight: 600,
                      lineHeight: 1.6,
                      margin: "0 0 0.5rem 0",
                    }}
                  >
                    {row.sv}
                  </p>
                  <p
                    className="font-sans"
                    style={{
                      color: "#bbb",
                      fontSize: "0.85rem",
                      fontWeight: 300,
                      lineHeight: 1.5,
                      textDecoration: "line-through",
                      textDecorationColor: "#ccc",
                      margin: 0,
                    }}
                  >
                    vs. {row.traditional}
                  </p>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: "2rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid #e0e0e0",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <a href="#contatti" className="btn-dark" style={{ alignSelf: "flex-start" }}>
                Richiedi una consulenza progettuale →
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .comp-table-mobile { display: block; }
        .comp-table-desktop { display: none; }
        @media (min-width: 640px) {
          .comp-table-mobile { display: none; }
          .comp-table-desktop { display: block; }
        }
        @media (min-width: 1024px) {
          .comp-grid { grid-template-columns: 1fr 1.2fr !important; gap: 6rem !important; }
        }
      `}</style>
    </section>
  );
}

/* ============================================================
   STATS — "OLTRE 60 ANNI DI STORIA / DAL 1965 SOLO PROGETTAZIONE FARMACIA"
   With Vimeo background loop
============================================================ */
const statsData = [
  { value: "60", suffix: "", label: "Anni", description: "di esperienza specializzata in farmacia" },
  { value: "1", suffix: "", label: "Specializzazione", description: "esclusiva: solo farmacia" },
  { value: "3", suffix: "", label: "Dimensioni", description: "farmacia, business, architettura" },
  { value: "∞", suffix: "", label: "Know-how", description: "globale applicato al tuo progetto", isInfinity: true },
];

function StatsSection() {
  const ref = window.useReveal();
  return (
    <section
      style={{
        position: "relative",
        background: "#0a0a0a",
        overflow: "hidden",
        padding: "5rem 0",
      }}
    >
      {/* Vimeo background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
          opacity: 0.55,
        }}
      >
        <iframe
          src="https://player.vimeo.com/video/1191156464?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "max(100vw, 177.78vh)",
            height: "max(100vh, 56.25vw)",
            border: "none",
          }}
          allow="autoplay"
          title="Sartoretto Verna heritage"
        />
      </div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.35) 50%, rgba(10,10,10,0.75) 100%)",
        }}
      />

      <div className="container-px reveal" ref={ref} style={{ position: "relative", zIndex: 2 }}>
        <p
          className="font-sans text-acid"
          style={{
            fontSize: "0.85rem",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            fontWeight: 600,
            margin: "0 0 1.25rem 0",
          }}
        >
          Oltre 60 anni di storia
        </p>
        <h2
          className="font-display"
          style={{
            color: "#fff",
            fontSize: "clamp(2.2rem, 6vw, 6.2rem)",
            lineHeight: 0.98,
            textTransform: "uppercase",
            margin: "0 0 2.5rem 0",
            maxWidth: "22ch",
          }}
        >
          Abbiamo rifiutato la logica<br />
          del <span className="text-acid">mobilificio.</span>
        </h2>
        <p
          className="font-sans"
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "clamp(1rem, 1.15vw, 1.15rem)",
            lineHeight: 1.7,
            fontWeight: 300,
            maxWidth: "62ch",
            margin: "0 0 4rem 0",
          }}
        >
          Dal 1965 solo progettazione farmacia. Il nostro obiettivo non è venderti
          un banco, ma aiutarti a costruire una farmacia più redditizia, più
          riconoscibile, più utile per i tuoi pazienti.
        </p>

        {/* Stats grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "0.75rem",
          }}
          className="stats-grid"
        >
          {statsData.map((s, i) => (
            <StatCard key={i} stat={s} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .stats-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}

function StatCard({ stat, index }) {
  return (
    <div style={{ minHeight: "200px", position: "relative" }}>
      <div className="sv-card" style={{ border: "1px solid rgba(255,255,255,0.10)" }}>
        <div className="sv-ray" />
        <div className="sv-value">
          {stat.isInfinity ? "∞" : stat.value}
          {stat.suffix && <span className="sv-unit">{stat.suffix}</span>}
        </div>
        <div className="sv-label">{stat.label}</div>
        {stat.description && <div className="sv-desc">{stat.description}</div>}
      </div>
    </div>
  );
}

/* ============================================================
   RESULTS — "RISULTATI ATTESI / PROGETTARE BENE SIGNIFICA FAR CRESCERE"
============================================================ */
const resultsData = [
  {
    title: "Più redditività",
    icon: "01",
    body: "Layout, esposizione e percorsi vengono progettati per rendere più leggibile l'offerta e sostenere le performance commerciali.",
    accent: "#CCFF00",
    accentFg: "#0a0a0a",
  },
  {
    title: "Più esperienza",
    icon: "02",
    body: "Il paziente non attraversa semplicemente uno spazio: viene guidato in un ambiente più chiaro, umano e memorabile.",
    accent: "#00B5B5",
    accentFg: "#ffffff",
  },
  {
    title: "Più servizi",
    icon: "03",
    body: "La farmacia contemporanea richiede aree consulenza, privacy, prevenzione e relazione. Lo spazio deve abilitarle.",
    accent: "#CC00FF",
    accentFg: "#ffffff",
  },
  {
    title: "Più identità",
    icon: "04",
    body: "Una farmacia distintiva non assomiglia a tutte le altre: comunica visione, fiducia e posizionamento fin dal primo sguardo.",
    accent: "#0a0a0a",
    accentFg: "#CCFF00",
  },
];

function ResultsSection() {
  const ref = window.useReveal();
  return (
    <section style={{ background: "#fff", padding: "5rem 0", borderTop: "1px solid #eee" }}>
      <div className="container-px">
        <div
          ref={ref}
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            marginBottom: "3rem",
            alignItems: "end",
          }}
          id="results-header"
        >
          <div>
            <p
              className="font-sans text-teal"
              style={{
                fontSize: "0.85rem",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                fontWeight: 700,
                margin: "0 0 1rem 0",
              }}
            >
              Risultati attesi
            </p>
            <h2
              className="font-display"
              style={{
                color: "#0a0a0a",
                fontSize: "clamp(2.2rem, 6vw, 6.2rem)",
                lineHeight: 0.98,
                textTransform: "uppercase",
                margin: 0,
                maxWidth: "20ch",
              }}
            >
              Progettare bene<br />
              significa <span className="text-teal">far crescere.</span>
            </h2>
          </div>
          <p
            className="font-sans"
            style={{
              color: "#555",
              fontSize: "clamp(1rem, 1.1vw, 1.15rem)",
              lineHeight: 1.7,
              fontWeight: 300,
              maxWidth: "44ch",
              margin: 0,
            }}
          >
            Una ristrutturazione o una nuova apertura non è solo un intervento
            estetico: è una decisione imprenditoriale che può cambiare il modo
            in cui la farmacia lavora, accoglie e vende valore.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            gap: "1px",
            background: "#e8e8e8",
            border: "1px solid #e8e8e8",
          }}
          className="results-grid"
        >
          {resultsData.map((r, i) => (
            <ResultCard key={i} data={r} index={i} />
          ))}
        </div>

        <div style={{ marginTop: "3rem", textAlign: "center" }}>
          <a href="#contatti" className="btn-dark">
            Parla con un nostro esperto →
          </a>
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .results-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 1024px) {
          .results-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}

function ResultCard({ data, index }) {
  const [hover, setHover] = useStateMid(false);
  const iconBg = hover ? data.accent : "#0a0a0a";
  const iconFg = hover ? data.accentFg : "#fff";
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "#fff",
        padding: "2.5rem 2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
        position: "relative",
        transition: "background 250ms ease",
        cursor: "default",
        minHeight: "300px",
      }}
    >
      <div
        style={{
          width: "44px",
          height: "44px",
          background: iconBg,
          color: iconFg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Anton, sans-serif",
          fontSize: "1.1rem",
          letterSpacing: "0.05em",
          transition: "all 250ms ease",
        }}
      >
        {data.icon}
      </div>
      <h3
        className="font-display"
        style={{
          color: "#0a0a0a",
          fontSize: "clamp(1.5rem, 2.2vw, 2rem)",
          margin: 0,
          textTransform: "uppercase",
          lineHeight: 1,
        }}
      >
        {data.title}
      </h3>
      <p
        className="font-sans"
        style={{
          color: "#555",
          fontSize: "1rem",
          lineHeight: 1.65,
          fontWeight: 300,
          margin: 0,
        }}
      >
        {data.body}
      </p>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "3px",
          width: hover ? "100%" : "0",
          background: data.accent,
          transition: "width 350ms cubic-bezier(0.22,1,0.36,1)",
        }}
      />
    </div>
  );
}

/* ============================================================
   PROJECT GALLERY — from repo, kept as-is
============================================================ */
const galleryFeatured = {
  name: "Farmacia Catona",
  location: "Reggio Calabria",
  category: "Nuova apertura",
  imgSrc: "public/CATONA.jpg",
  gradient: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,181,181,0.32) 100%)",
  brief: "Progettazione di un nuovo concept retail focalizzato su percorsi di acquisto fluidi e punti consulenza distintivi.",
  challenge: "Spazio complesso, vincolato da colonne e layout poco funzionale. Difficoltà nel rendere chiari flussi e percorsi per il cliente.",
  solution: "Suddivisione dello spazio in tre aree chiare (servizio, commerciale, farmaco) attraverso un linguaggio cromatico distintivo. Banco etico ripensato come spazio di relazione e accoglienza.",
  feedback: "\"La farmacia è diventata più attraente e ordinata, i clienti restano più a lungo e abbiamo registrato un aumento delle vendite.\"",
};

const gallerySmall = [
  {
    name: "Farmacia Bellini",
    location: "Valverde",
    category: "Nuova apertura",
    imgSrc: "public/BELLINI.jpg",
    gradient: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.08) 60%, transparent 100%)",
    brief: "Una farmacia pensata per evolvere: dove architettura, layout e identità lavorano insieme per esprimere una visione chiara.",
    challenge: "Tradurre una visione imprenditoriale ambiziosa in uno spazio concreto, evitando logiche da contenitore adattato.",
    solution: "Progettazione integrata a partire da uno spazio costruito su misura. Banco etico ripensato come spazio di relazione, non di separazione.",
    feedback: "\"Ora la farmacia comunica professionalità e il traffico si è stabilizzato nella parte più strategica del negozio.\"",
  },
  {
    name: "Farmacia San Leo",
    location: "Reggio Calabria",
    category: "Restyling",
    imgSrc: "public/San-Leo-1.jpg",
    gradient: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.08) 60%, transparent 100%)",
    brief: "Identità, innovazione e accoglienza. Una nuova farmacia capace di esprimere l'identità familiare con un concept innovativo.",
    challenge: "Trovare un equilibrio tra innovazione e identità tradizionale, evitando un design moderno freddo.",
    solution: "Concept architettonico che unisce ispirazione naturale e linee contemporanee. Ambienti accoglienti, pensati per essere vissuti.",
    feedback: "\"Il cambiamento visivo ha reso la farmacia più moderna e il feedback dei clienti è stato immediatamente positivo.\"",
  },
  {
    name: "Farmacia Appio Latino",
    location: "Roma",
    category: "Ristrutturazione",
    imgSrc: "public/APPIO-LATINO.jpg",
    gradient: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.08) 60%, transparent 100%)",
    brief: "Innovazione e relazione in farmacia. Un progetto che ridefinisce la farmacia come spazio di salute, consulenza e benessere.",
    challenge: "Superare il modello tradizionale di farmacia, integrando tecnologia avanzata senza perdere la dimensione umana.",
    solution: "Layout luminosi e leggibili. Aree tematiche per consulenza e servizi. Sistemi digitali e automazione per ottimizzare i processi.",
    feedback: "\"Abbiamo ottenuto un nuovo spazio valorizzante che sembra naturale e funziona molto bene anche in termini di vendite.\"",
  },
  {
    name: "Farmacia Beneduce",
    location: "Caserta",
    category: "Trasferimento",
    imgSrc: "public/BENEDUCE.png",
    gradient: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.08) 60%, transparent 100%)",
    brief: "Tecnologia e relazione, insieme. Un rinnovamento orientato a migliorare l'esperienza del cliente e l'efficienza operativa.",
    challenge: "Migliorare l'efficienza operativa senza compromettere la qualità del servizio. Bilanciare innovazione tecnologica e relazione umana.",
    solution: "Sistemi automatizzati per la gestione dei farmaci. Aree dedicate a consulenza, autoanalisi e servizi.",
    feedback: "\"Il trasferimento è stato gestito con ordine e l'ambiente trasmette ora più fiducia ai clienti.\"",
  },
];

function ProjectGallery() {
  const [selected, setSelected] = useStateMid(null);
  const headRef = window.useReveal();

  return (
    <section id="realizzazioni" style={{ background: "#0a0a0a", paddingTop: "5rem", paddingBottom: "1rem" }}>
      <div
        className="container-px reveal"
        ref={headRef}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          marginBottom: "2rem",
        }}
      >
        <div className="gallery-head">
          <div>
            <p
              className="font-sans text-acid"
              style={{
                fontSize: "0.85rem",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                fontWeight: 600,
                margin: "0 0 0.75rem 0",
              }}
            >
              Alcuni dei nostri progetti
            </p>
            <h2
              className="font-display"
              style={{
                color: "#fff",
                fontSize: "clamp(2.2rem, 6.5vw, 7rem)",
                lineHeight: 0.98,
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              Luoghi della salute<br />
              <span className="text-acid">da vivere.</span>
            </h2>
          </div>
          <div className="gallery-cta">
            <p
              className="font-sans"
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "clamp(1rem, 1.1vw, 1.15rem)",
                fontWeight: 300,
                maxWidth: "36ch",
                lineHeight: 1.65,
                margin: "0 0 1rem 0",
              }}
            >
              La farmacia contemporanea deve accogliere, orientare, rassicurare e
              generare fiducia. L'architettura diventa uno strumento per rendere
              visibile una promessa.
            </p>
            <a href="#contatti" className="btn-primary">
              Richiedi una consulenza →
            </a>
          </div>
        </div>
      </div>

      <div style={{ position: "relative", overflow: "hidden" }}>
        {!selected && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "1px",
              background: "#333",
            }}
            className="gallery-grid"
          >
            {/* Featured */}
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                height: "440px",
                cursor: "pointer",
              }}
              className="gallery-featured gallery-tile"
              onClick={() => setSelected(galleryFeatured)}
            >
              <img
                src={galleryFeatured.imgSrc}
                alt={galleryFeatured.name}
                className="gallery-img"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div style={{ position: "absolute", inset: 0, background: galleryFeatured.gradient }} />
              <div className="gallery-hover-cta">
                <span
                  className="font-sans"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(6px)",
                    WebkitBackdropFilter: "blur(6px)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    color: "#fff",
                    fontSize: "0.78rem",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    padding: "0.5rem 1rem",
                  }}
                >
                  Espandi →
                </span>
              </div>
              <div style={{ position: "absolute", top: "1rem", left: "1rem", zIndex: 10 }}>
                <span
                  className="font-sans"
                  style={{
                    border: "1px solid rgba(255,255,255,0.3)",
                    color: "#fff",
                    fontSize: "0.78rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    padding: "0.4rem 0.75rem",
                    background: "rgba(0,0,0,0.25)",
                    backdropFilter: "blur(4px)",
                    display: "inline-block",
                  }}
                >
                  {galleryFeatured.category}
                </span>
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "1.5rem 2rem",
                  zIndex: 10,
                }}
              >
                <p
                  className="font-sans"
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "0.85rem",
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    margin: "0 0 0.5rem 0",
                  }}
                >
                  {galleryFeatured.location}
                </p>
                <h3
                  className="font-display"
                  style={{
                    color: "#fff",
                    textTransform: "uppercase",
                    fontSize: "clamp(1.8rem, 3.5vw, 3.2rem)",
                    lineHeight: 1,
                    margin: 0,
                  }}
                >
                  {galleryFeatured.name}
                </h3>
              </div>
            </div>

            {/* 2x2 grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridTemplateRows: "1fr 1fr",
                gap: "1px",
                height: "100%",
              }}
            >
              {gallerySmall.map((p) => (
                <GallerySmallCard key={p.name} p={p} onClick={() => setSelected(p)} />
              ))}
            </div>
          </div>
        )}

        {selected && <GalleryDetail project={selected} onClose={() => setSelected(null)} all={[galleryFeatured, ...gallerySmall]} onSelect={setSelected} />}
      </div>

      <style>{`
        .gallery-head { display: flex; flex-direction: column; gap: 1.5rem; }
        .gallery-cta { display: flex; flex-direction: column; gap: 1rem; align-items: flex-start; }
        @media (min-width: 768px) {
          .gallery-head { flex-direction: row; align-items: flex-end; justify-content: space-between; }
          .gallery-cta { align-items: flex-end; text-align: right; }
          .gallery-grid { grid-template-columns: 1fr 1fr !important; }
          .gallery-featured { height: 620px !important; }
        }
      `}</style>
    </section>
  );
}

function GallerySmallCard({ p, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "220px",
        height: "100%",
        cursor: "pointer",
      }}
      className="gallery-small-card gallery-tile"
    >
      <img
        src={p.imgSrc}
        alt={p.name}
        loading="lazy"
        className="gallery-img"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <div style={{ position: "absolute", inset: 0, background: p.gradient }} />
      <div className="gallery-hover-cta">
        <span
          className="font-sans"
          style={{
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            border: "1px solid rgba(255,255,255,0.3)",
            color: "#fff",
            fontSize: "0.7rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            padding: "0.4rem 0.85rem",
          }}
        >
          Espandi →
        </span>
      </div>
      <div style={{ position: "absolute", top: "0.75rem", left: "0.75rem", zIndex: 10 }}>
        <span
          className="font-sans"
          style={{
            border: "1px solid rgba(255,255,255,0.25)",
            color: "#fff",
            fontSize: "0.7rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            padding: "0.3rem 0.6rem",
            background: "rgba(0,0,0,0.25)",
            backdropFilter: "blur(4px)",
            display: "inline-block",
          }}
        >
          {p.category}
        </span>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "1rem 1.25rem",
          zIndex: 10,
        }}
      >
        <p
          className="font-sans"
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: "0.7rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            margin: "0 0 0.25rem 0",
          }}
        >
          {p.location}
        </p>
        <h3
          className="font-display"
          style={{
            color: "#fff",
            textTransform: "uppercase",
            fontSize: "clamp(1rem, 1.5vw, 1.35rem)",
            lineHeight: 1,
            margin: 0,
          }}
        >
          {p.name}
        </h3>
      </div>
      <style>{`
        @media (min-width: 768px) {
          .gallery-small-card { min-height: 309px; }
        }
      `}</style>
    </div>
  );
}

function GalleryDetail({ project, onClose, all, onSelect }) {
  const others = all.filter((p) => p.name !== project.name).slice(0, 3);
  return (
    <div style={{ position: "relative", width: "100%", overflow: "hidden", animation: "slideIn 0.5s cubic-bezier(0.22,1,0.36,1)" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          minHeight: "620px",
        }}
        className="detail-grid"
      >
        <div style={{ position: "relative", overflow: "hidden", minHeight: "320px" }}>
          <img
            src={project.imgSrc}
            alt={project.name}
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
              background: "linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.26) 45%, transparent 100%)",
            }}
          />
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "1.25rem",
              left: "1.25rem",
              zIndex: 20,
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(0,0,0,0.4)",
              backdropFilter: "blur(4px)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff",
              fontFamily: "Barlow, sans-serif",
              fontWeight: 600,
              fontSize: "0.75rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              padding: "0.6rem 1rem",
              cursor: "pointer",
              transition: "all 200ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#CCFF00";
              e.currentTarget.style.color = "#0a0a0a";
              e.currentTarget.style.borderColor = "#CCFF00";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(0,0,0,0.4)";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
            }}
          >
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path d="M13 5H1M1 5L5 1M1 5L5 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square"/>
            </svg>
            Tutti i progetti
          </button>
        </div>

        <div
          style={{
            position: "relative",
            background: "#050505",
            padding: "3rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: "#fff",
          }}
          className="detail-content"
        >
          <div style={{ maxWidth: "42rem" }}>
            <span
              className="font-sans"
              style={{
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#fff",
                fontSize: "0.75rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                padding: "0.4rem 0.75rem",
                background: "rgba(255,255,255,0.05)",
                display: "inline-block",
                marginBottom: "1.25rem",
              }}
            >
              {project.category}
            </span>
            <p
              className="font-sans"
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "0.85rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                margin: "0 0 0.75rem 0",
              }}
            >
              {project.location}
            </p>
            <h3
              className="font-display"
              style={{
                textTransform: "uppercase",
                lineHeight: 1,
                fontSize: "clamp(2rem, 4vw, 3.8rem)",
                margin: 0,
              }}
            >
              {project.name}
            </h3>
            <p
              className="font-sans"
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "1rem",
                lineHeight: 1.65,
                marginTop: "1.75rem",
              }}
            >
              {project.brief}
            </p>

            <div style={{ marginTop: "2.5rem" }}>
              <p
                className="font-sans text-acid"
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  margin: "0 0 0.75rem 0",
                }}
              >
                Sfida / Soluzione
              </p>
              <p className="font-sans" style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.75, fontSize: "1rem", margin: "0 0 1rem 0" }}>
                {project.challenge}
              </p>
              <p className="font-sans" style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.75, fontSize: "1rem", margin: 0 }}>
                {project.solution}
              </p>

              <p
                className="font-sans text-acid"
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  margin: "2rem 0 0.75rem 0",
                }}
              >
                Feedback cliente
              </p>
              <p className="font-sans" style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.75, fontSize: "1rem", fontStyle: "italic", margin: 0 }}>
                {project.feedback}
              </p>
            </div>

            <div style={{ marginTop: "2.5rem", display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {others.map((p) => (
                <button
                  key={p.name}
                  onClick={() => onSelect(p)}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "#fff",
                    fontFamily: "Barlow, sans-serif",
                    fontSize: "0.85rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.18em",
                    padding: "0.75rem 1rem",
                    cursor: "pointer",
                    transition: "all 200ms ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "#CCFF00"; e.currentTarget.style.color = "#0a0a0a"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "#fff"; }}
                >
                  {p.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }
        @media (min-width: 768px) {
          .detail-grid { grid-template-columns: 1fr 1fr !important; }
          .detail-content { padding: 3.5rem 3rem !important; }
        }
      `}</style>
    </div>
  );
}

/* ============================================================
   METHOD — from repo, kept as-is
============================================================ */
const methodSteps = [
  { num: "01", title: "Ascolto",       body: "Analizziamo la tua farmacia, il territorio e i tuoi obiettivi di business prima di disegnare la prima linea." },
  { num: "02", title: "Progetto",      body: "Layout, materiali, illuminazione e comunicazione visiva: tutto definito in un concept 3D su misura." },
  { num: "03", title: "Produzione",    body: "Arredi e complementi prodotti interamente in Italia. Controllo qualità totale prima di ogni spedizione." },
  { num: "04", title: "Installazione", body: "Cantiere rapido e coordinato, a farmacia aperta, per proteggere il tuo fatturato quotidiano." },
  { num: "05", title: "Supporto",      body: "Non scompariamo dopo l'apertura. Monitoriamo i risultati e affianchiamo la tua crescita nel tempo." },
];

function MethodSection() {
  const ref = window.useReveal();
  return (
    <section id="metodo" style={{ background: "#fff", borderTop: "1px solid #e8e8e8", padding: "5rem 0" }}>
      <div className="container-px">
        <div
          ref={ref}
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            marginBottom: "4rem",
            alignItems: "end",
          }}
          id="method-header"
        >
          <div>
            <p
              className="font-sans text-teal"
              style={{
                fontSize: "0.85rem",
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                fontWeight: 700,
                margin: "0 0 1rem 0",
              }}
            >
              Il nostro metodo
            </p>
            <h2
              className="font-display"
              style={{
                color: "#0a0a0a",
                textTransform: "uppercase",
                lineHeight: 1,
                margin: 0,
                fontSize: "clamp(2.2rem, 6vw, 6.5rem)",
              }}
            >
              Dalla visione<br />al nuovo spazio.
            </h2>
          </div>
          <p
            className="font-sans"
            style={{
              color: "#444",
              fontSize: "clamp(1rem, 1.1vw, 1.15rem)",
              fontWeight: 300,
              lineHeight: 1.7,
              maxWidth: "44ch",
              margin: 0,
            }}
          >
            Un processo chiaro riduce incertezza, dispersione e improvvisazione.
            Ogni fase serve a trasformare l'intuizione iniziale in un progetto
            coerente e realizzabile, collaudato in oltre 3.000 cantieri.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            position: "relative",
          }}
          className="method-grid"
        >
          <div
            style={{
              display: "none",
              position: "absolute",
              top: "14px",
              left: 0,
              right: 0,
              height: "1px",
              background: "#ddd",
            }}
            className="method-line"
          />

          {methodSteps.map((step) => (
            <MethodStep key={step.num} step={step} />
          ))}
        </div>

        <div
          style={{
            marginTop: "4rem",
            paddingTop: "3rem",
            borderTop: "1px solid #e0e0e0",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
          className="method-cta"
        >
          <p
            className="font-sans"
            style={{
              color: "#666",
              fontSize: "clamp(1rem, 1.1vw, 1.15rem)",
              margin: 0,
            }}
          >
            Prenota un primo colloquio conoscitivo, senza impegno.
          </p>
          <a href="#contatti" className="btn-dark" style={{ alignSelf: "flex-start" }}>
            Inizia con una consulenza →
          </a>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .method-grid { grid-template-columns: repeat(5, 1fr) !important; gap: 0 !important; }
          .method-line { display: block !important; }
          .method-cta { flex-direction: row !important; align-items: center !important; justify-content: space-between !important; }
        }
        @media (min-width: 1024px) {
          #method-header { grid-template-columns: 1fr 1fr !important; }
          #results-header { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function MethodStep({ step }) {
  const [hover, setHover] = useStateMid(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        paddingLeft: "1.25rem",
        borderLeft: "2px solid #eee",
      }}
      className="method-step"
    >
      <div
        style={{
          display: "none",
          width: "12px",
          height: "12px",
          border: "2px solid",
          borderColor: hover ? "#0a0a0a" : "#bbb",
          background: hover ? "#0a0a0a" : "transparent",
          marginBottom: "1.75rem",
          transition: "all 300ms ease",
          position: "relative",
          zIndex: 10,
        }}
        className="method-dot"
      />
      <span
        className="font-display"
        style={{
          display: "block",
          color: hover ? "#0a0a0a" : "#bbb",
          fontSize: "0.85rem",
          letterSpacing: "0.32em",
          margin: "0 0 0.5rem 0",
          transition: "color 300ms ease",
        }}
      >
        {step.num}
      </span>
      <h3
        className="font-display"
        style={{
          color: hover ? "#00B5B5" : "#0a0a0a",
          textTransform: "uppercase",
          fontSize: "clamp(1.2rem, 1.6vw, 1.5rem)",
          margin: "0 0 0.75rem 0",
          transition: "color 300ms ease",
        }}
      >
        {step.title}
      </h3>
      <p
        className="font-sans"
        style={{
          color: "#444",
          fontSize: "1rem",
          fontWeight: 300,
          lineHeight: 1.65,
          margin: 0,
        }}
      >
        {step.body}
      </p>

      <style>{`
        @media (min-width: 1024px) {
          .method-step { padding-left: 1.5rem !important; border-left: none !important; padding-right: 1.5rem; }
          .method-step:first-child { padding-left: 0 !important; }
          .method-step:last-child { padding-right: 0 !important; }
          .method-dot { display: block !important; }
        }
      `}</style>
    </div>
  );
}

/* Export to window */
Object.assign(window, {
  ComparisonSection,
  StatsSection,
  ResultsSection,
  ProjectGallery,
  MethodSection,
});
