/* ============================================================
   Bottom sections: Testimonials, ContactForm, FAQ, Footer
============================================================ */

const { useState: useStateEnd, useEffect: useEffectEnd, useRef: useRefEnd } = React;

/* ============================================================
   TESTIMONIALS — "CHI CI HA SCELTO"
   Video testimonials restored from the repo (4 vertical videos)
============================================================ */
const videoTestimonials = [
  {
    name: "Farmacia San Leo",
    location: "Reggio Calabria (RC)",
    src: "https://sv-it.b-cdn.net/Farmacia%20San%20Leo%20-%20%20intervista.mp4",
    poster: "public/San-Leo-1.jpg",
    accent: "#00B5B5",
  },
  {
    name: "Farmacia Zucca",
    location: "Segrate (MI)",
    src: "https://sv-it.b-cdn.net/zucca%20intervista.mp4",
    poster: "public/ZUCCA.jpg",
    accent: "#CCFF00",
  },
  {
    name: "Farmacia Sundas",
    location: "Senorbì (CA)",
    src: "https://sv-it.b-cdn.net/intervista%20Sundas.mp4",
    poster: "public/SUNDAS.jpg",
    accent: "#CC00FF",
  },
  {
    name: "Antica Farmacia Berardelli",
    location: "Cosenza (CS)",
    src: "https://sv-it.b-cdn.net/Intervista%20Berardelli_verticale.mov",
    poster: "public/BERARDELLI.jpg",
    accent: "#CCFF00",
  },
];

function Testimonials() {
  const ref = window.useReveal();
  return (
    <section
      style={{
        background: "#0a0a0a",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "5rem 0",
      }}
    >
      <div className="container-px">
        <div ref={ref} className="reveal" style={{ marginBottom: "3rem" }}>
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
            Chi ci ha scelto
          </p>
          <h2
            className="font-display"
            style={{
              color: "#fff",
              fontSize: "clamp(2.2rem, 6vw, 6.2rem)",
              lineHeight: 0.98,
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            Clienti<br />
            <span className="text-acid">soddisfatti.</span>
          </h2>
          <p
            className="font-sans"
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "clamp(1rem, 1.1vw, 1.15rem)",
              lineHeight: 1.7,
              fontWeight: 300,
              maxWidth: "52ch",
              margin: "2.25rem 0 0 0",
            }}
          >
            Esperienze, trasformazioni e risultati raccontati da farmacisti che
            hanno ripensato il proprio spazio.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "10px",
          }}
          className="testimonials-grid"
        >
          {videoTestimonials.map((v, i) => (
            <VideoTestimonialCard key={v.name} video={v} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .testimonials-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}

function VideoTestimonialCard({ video, index }) {
  const ref = useRefEnd(null);
  const videoRef = useRefEnd(null);
  const [inView, setInView] = useStateEnd(false);
  const [playing, setPlaying] = useStateEnd(false);

  useEffectEnd(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { setInView(true); obs.disconnect(); }
      }),
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#000",
        display: "flex",
        flexDirection: "column",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(22px)",
        transition: `opacity 0.65s ${index * 0.1}s cubic-bezier(0.22,1,0.36,1), transform 0.65s ${index * 0.1}s cubic-bezier(0.22,1,0.36,1)`,
      }}
    >
      {/* Accent bar */}
      <div style={{ height: "3px", width: "100%", background: video.accent, flexShrink: 0 }} />

      {/* Video container — 9:16 portrait */}
      <div style={{ position: "relative", width: "100%", aspectRatio: "9 / 16" }}>
        <video
          ref={videoRef}
          src={video.src}
          poster={video.poster}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          controls={playing}
          preload="metadata"
          playsInline
        />

        {/* Top label — always visible above */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 30,
            padding: "1rem 1rem 1.5rem 1rem",
            background: "linear-gradient(to bottom, rgba(0,0,0,0.72) 0%, transparent 100%)",
            pointerEvents: "none",
          }}
        >
          <p
            className="font-sans"
            style={{
              color: video.accent,
              fontSize: "0.62rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              fontWeight: 600,
              margin: "0 0 2px 0",
            }}
          >
            {video.location}
          </p>
          <h3
            className="font-display"
            style={{
              color: "#fff",
              textTransform: "uppercase",
              lineHeight: 1,
              fontSize: "clamp(0.95rem, 1.2vw, 1.2rem)",
              margin: 0,
            }}
          >
            {video.name}
          </h3>
        </div>

        {/* Play overlay — only before play */}
        {!playing && (
          <div
            onClick={handlePlay}
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              background: "rgba(0,0,0,0.28)",
            }}
            className="play-overlay"
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                background: video.accent,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 6px 24px rgba(0,0,0,0.4)",
                transition: "transform 200ms ease",
              }}
              className="play-button"
            >
              <svg width="18" height="20" viewBox="0 0 18 20" fill="none" aria-hidden="true">
                <path d="M1 1L17 10L1 19V1Z" fill="#0a0a0a" />
              </svg>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .play-overlay:hover .play-button { transform: scale(1.1); }
      `}</style>
    </div>
  );
}

/* ============================================================
   CONTACT FORM — "PARLIAMO DEL FUTURO DELLA TUA FARMACIA"
============================================================ */
const projectTypes = [
  "Ampliamento",
  "Ristrutturazione",
  "Nuova apertura",
  "Trasferimento",
  "Restyling",
  "Altro",
];

const ZAPIER_URL = "https://hooks.zapier.com/hooks/catch/1977593/4y67td9/";

function ContactForm() {
  const [form, setForm] = useStateEnd({
    nome: "", cognome: "", farmacia: "", email: "", telefono: "", citta: "", tipologia: "", messaggio: "",
  });
  const [sent, setSent] = useStateEnd(false);
  const [sending, setSending] = useStateEnd(false);
  const [error, setError] = useStateEnd(null);

  function update(k, v) { setForm((p) => ({ ...p, [k]: v })); }

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      const payload = {
        nome: form.nome, cognome: form.cognome, email: form.email, telefono: form.telefono,
        tipo_progetto: form.tipologia, nome_farmacia: form.farmacia, citta: form.citta,
        messaggio: form.messaggio,
        pagina: window.location.href,
        origine: "pharmacy-business-architects-adapted",
      };
      await fetch(ZAPIER_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(payload).toString(),
      });
      setSent(true);
    } catch (err) {
      setError("Si è verificato un errore. Riprova o chiamaci.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section
      id="contatti"
      style={{ borderTop: "1px solid #e0e0e0" }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
        }}
        className="contact-grid"
      >
        {/* Left: headline */}
        <div
          className="container-px"
          style={{
            background: "#ebebeb",
            padding: "4rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "3rem",
          }}
        >
          <div>
            <p
              className="font-sans text-teal"
              style={{
                fontSize: "0.85rem",
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                fontWeight: 700,
                margin: "0 0 1.25rem 0",
              }}
            >
              Compila il form
            </p>
            <h2
              className="font-display"
              style={{
                color: "#0a0a0a",
                textTransform: "uppercase",
                lineHeight: 0.98,
                fontSize: "clamp(2.2rem, 5.5vw, 5.5rem)",
                margin: "0 0 2.75rem 0",
              }}
            >
              Parliamo del futuro<br />
              della tua farmacia.
            </h2>
            <p
              className="font-sans"
              style={{
                color: "#444",
                fontSize: "clamp(1rem, 1.1vw, 1.15rem)",
                fontWeight: 300,
                lineHeight: 1.7,
                maxWidth: "42ch",
                margin: 0,
              }}
            >
              Raccontaci il tuo progetto. Che si tratti di arredo farmacia,
              progettazione o ristrutturazione, il primo passo è capire quale
              valore può generare il tuo spazio.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              "Ti ricontatteremo entro 24h per un primo confronto",
              "Analisi orientativa della tua esigenza",
              "Percorso progettuale definito su misura",
              "Nessun impegno, nessun costo",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{ width: "6px", height: "6px", background: "#0a0a0a", flexShrink: 0 }} />
                <span className="font-sans" style={{ color: "#555", fontSize: "1rem" }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <div
          className="container-px"
          style={{
            background: "#f5f5f5",
            padding: "4rem 1.5rem",
          }}
        >
          {sent ? (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", maxWidth: "30rem" }}>
              <div style={{ width: "48px", height: "4px", background: "#16a34a" }} />
              <h3
                className="font-display"
                style={{
                  color: "#0a0a0a",
                  textTransform: "uppercase",
                  fontSize: "clamp(1.75rem, 3vw, 2.4rem)",
                  lineHeight: 1,
                  margin: 0,
                }}
              >
                Messaggio inviato.
              </h3>
              <p
                className="font-sans"
                style={{
                  color: "#16a34a",
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Grazie! Sarai contattato da un nostro responsabile nel giro di 24h.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
              <div className="form-row">
                <Field label="Nome" id="nome">
                  <input id="nome" type="text" required autoComplete="given-name" placeholder="Mario"
                    value={form.nome} onChange={(e) => update("nome", e.target.value)} className="form-input" />
                </Field>
                <Field label="Cognome" id="cognome">
                  <input id="cognome" type="text" required autoComplete="family-name" placeholder="Rossi"
                    value={form.cognome} onChange={(e) => update("cognome", e.target.value)} className="form-input" />
                </Field>
              </div>

              <div className="form-row">
                <Field label="Email" id="email">
                  <input id="email" type="email" required autoComplete="email" placeholder="mario@farmacia.it"
                    value={form.email} onChange={(e) => update("email", e.target.value)} className="form-input" />
                </Field>
                <Field label="Telefono" id="telefono">
                  <input id="telefono" type="tel" autoComplete="tel" placeholder="+39 06 1234567"
                    value={form.telefono} onChange={(e) => update("telefono", e.target.value)} className="form-input" />
                </Field>
              </div>

              <div className="form-row">
                <Field label="Città" id="citta">
                  <input id="citta" type="text" placeholder="Es. Roma"
                    value={form.citta} onChange={(e) => update("citta", e.target.value)} className="form-input" />
                </Field>
                <Field label="Nome farmacia" id="farmacia">
                  <input id="farmacia" type="text" placeholder="Farmacia Centrale"
                    value={form.farmacia} onChange={(e) => update("farmacia", e.target.value)} className="form-input" />
                </Field>
              </div>

              <Field label="Tipo di progetto *" id="tipologia">
                <select id="tipologia" required value={form.tipologia}
                  onChange={(e) => update("tipologia", e.target.value)}
                  className="form-input"
                  style={{ cursor: "pointer", appearance: "none", paddingRight: "2rem" }}
                >
                  <option value="" disabled>Seleziona una tipologia…</option>
                  {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </Field>

              <Field label="Messaggio (opzionale)" id="messaggio">
                <textarea id="messaggio" rows={4}
                  placeholder="Descrivi brevemente la tua farmacia e il progetto…"
                  value={form.messaggio} onChange={(e) => update("messaggio", e.target.value)}
                  className="form-input" style={{ resize: "none" }}
                />
              </Field>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <button
                  type="submit"
                  disabled={sending}
                  className="btn-dark"
                  style={{
                    alignSelf: "flex-start",
                    width: "100%",
                    maxWidth: "100%",
                    opacity: sending ? 0.5 : 1,
                    cursor: sending ? "not-allowed" : "pointer",
                  }}
                >
                  {sending ? "Invio in corso…" : "Contattaci →"}
                </button>

                {error && (
                  <p className="font-sans" style={{ color: "#dc2626", fontSize: "0.85rem", fontWeight: 500, margin: 0 }}>
                    {error}
                  </p>
                )}

                <p
                  className="font-sans"
                  style={{
                    color: "#999",
                    fontSize: "0.85rem",
                    margin: "0.5rem 0 0 0",
                  }}
                >
                  Cliccando acconsenti alla nostra{" "}
                  <a href="#" style={{ color: "#666", textDecoration: "underline" }}>Privacy Policy</a>.
                  Ti ricontatteremo entro 24h per un primo confronto dedicato. Senza impegno.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .form-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.75rem;
        }
        @media (min-width: 640px) {
          .form-row { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 1024px) {
          .contact-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function Field({ label, id, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
      <label
        htmlFor={id}
        className="font-sans"
        style={{
          fontSize: "0.78rem",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "#666",
          fontWeight: 700,
        }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

/* ============================================================
   FAQ — "DOMANDE FREQUENTI / RISPOSTE AI DUBBI PIÙ COMUNI"
============================================================ */
const faqsData = [
  {
    q: "Cosa succede dopo aver compilato il form?",
    a: "Verrai ricontattato per un primo confronto dedicato, in cui analizzeremo il tuo progetto e capiremo se e come possiamo supportarti.",
  },
  {
    q: "Quanto costa progettare o ristrutturare una farmacia?",
    a: "Ogni progetto è diverso. Il nostro approccio parte dagli obiettivi di business e dal contesto specifico, per costruire una soluzione coerente. Il primo confronto serve proprio a definire un ordine di grandezza realistico.",
  },
  {
    q: "Fate solo arredo farmacia o anche progettazione completa?",
    a: "Non siamo un fornitore di arredi. Ci occupiamo di progettazione strategica completa: layout, flussi, esperienza, identità e realizzazione dello spazio.",
  },
  {
    q: "Lavorate solo su nuove aperture o anche su ristrutturazioni?",
    a: "Entrambe. Seguiamo nuove aperture, ristrutturazioni e restyling strategici, adattando il progetto allo stato attuale della farmacia.",
  },
  {
    q: "Dovrò chiudere la farmacia durante i lavori?",
    a: "Assolutamente no. Il nostro sistema di allestimento è studiato per permetterti di continuare a servire i tuoi clienti mentre noi trasformiamo il tuo spazio, proteggendo il tuo fatturato quotidiano senza alcun disagio.",
  },
  {
    q: "Quanto dura un progetto?",
    a: "Dipende dalla complessità. In generale, un progetto completo richiede alcune settimane per la fase strategica e progettuale, seguite dalla realizzazione operativa.",
  },
];

function FAQSection() {
  const ref = window.useReveal();
  return (
    <section
      style={{
        background: "#1a1a1a",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "5rem 0",
      }}
    >
      <div className="container-px">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
          }}
          className="faq-grid"
        >
          <div ref={ref} className="reveal">
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
              Domande frequenti
            </p>
            <h2
              className="font-display"
              style={{
                color: "#fff",
                fontSize: "clamp(2.2rem, 5.5vw, 5.5rem)",
                lineHeight: 0.98,
                textTransform: "uppercase",
                margin: "0 0 2.5rem 0",
              }}
            >
              Risposte ai dubbi<br />
              <span className="text-acid">più comuni.</span>
            </h2>
            <p
              className="font-sans"
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "clamp(1rem, 1.1vw, 1.15rem)",
                lineHeight: 1.7,
                fontWeight: 300,
                maxWidth: "32ch",
                margin: 0,
              }}
            >
              Se stai valutando un progetto di arredo, progettazione o
              ristrutturazione farmacia, è normale avere domande. Qui trovi le
              più frequenti.
            </p>
          </div>

          <div>
            {faqsData.map((item, i) => (
              <FAQItem key={i} item={item} index={i} />
            ))}

            <div style={{ marginTop: "2.5rem" }}>
              <a href="#contatti" className="btn-outline" style={{ borderColor: "#CCFF00", color: "#CCFF00" }}>
                Parla con un nostro esperto →
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .faq-grid { grid-template-columns: 1fr 2fr !important; gap: 6rem !important; }
        }
      `}</style>
    </section>
  );
}

function FAQItem({ item, index }) {
  const [open, setOpen] = useStateEnd(false);
  const ref = useRefEnd(null);
  const [inView, setInView] = useStateEnd(false);

  useEffectEnd(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { setInView(true); obs.disconnect(); }
      }),
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(12px)",
        transition: `opacity 0.5s ${index * 0.06}s cubic-bezier(0.22,1,0.36,1), transform 0.5s ${index * 0.06}s cubic-bezier(0.22,1,0.36,1)`,
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "1.25rem",
          padding: "1.5rem 0",
          textAlign: "left",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          color: "inherit",
        }}
        className="faq-q"
      >
        <span
          className="font-sans"
          style={{
            fontWeight: 600,
            color: "#fff",
            fontSize: "clamp(1rem, 1.15vw, 1.15rem)",
            lineHeight: 1.4,
            flex: 1,
            transition: "color 200ms ease",
          }}
        >
          {item.q}
        </span>
        <span
          aria-hidden="true"
          style={{
            flexShrink: 0,
            width: "28px",
            height: "28px",
            border: open ? "1px solid #CCFF00" : "1px solid rgba(255,255,255,0.25)",
            background: open ? "#CCFF00" : "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "2px",
            transform: open ? "rotate(45deg)" : "rotate(0)",
            transition: "all 300ms ease",
          }}
        >
          <svg width="11" height="11" viewBox="0 0 11 11">
            <path d="M5.5 0V11M0 5.5H11" stroke={open ? "#0a0a0a" : "white"} strokeWidth="1.5"/>
          </svg>
        </span>
      </button>

      <div
        style={{
          maxHeight: open ? "500px" : "0",
          opacity: open ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.22,1,0.36,1), opacity 0.4s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <p
          className="font-sans"
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "clamp(0.95rem, 1.05vw, 1.05rem)",
            fontWeight: 300,
            lineHeight: 1.7,
            paddingBottom: "1.5rem",
            margin: 0,
            maxWidth: "60ch",
          }}
        >
          {item.a}
        </p>
      </div>
    </div>
  );
}

/* ============================================================
   FOOTER — same as repo
============================================================ */
const socialLinks = [
  { label: "WhatsApp",  href: "https://whatsapp.com/channel/0029Va95ZwrKGGGOSjeV1o0e", svg: <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.51 0 .17 5.34.17 11.9c0 2.1.55 4.14 1.59 5.94L.07 24l6.31-1.65a11.9 11.9 0 0 0 5.69 1.45h.01c6.56 0 11.9-5.34 11.9-11.9a11.83 11.83 0 0 0-3.46-8.42Zm-8.44 18.3h-.01a9.88 9.88 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.38a9.86 9.86 0 0 1-1.51-5.24c0-5.45 4.44-9.89 9.9-9.89a9.83 9.83 0 0 1 6.99 2.9 9.83 9.83 0 0 1 2.89 7c-.01 5.43-4.45 9.87-9.89 9.87Zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.65.08-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.34Z" /> },
  { label: "Facebook",  href: "http://www.facebook.com/pharmacy.design", svg: <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95Z" /> },
  { label: "Instagram", href: "https://www.instagram.com/sartorettoverna/", svg: <><path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7Zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3Zm10.5 1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" /></> },
  { label: "LinkedIn",  href: "https://it.linkedin.com/company/sartoretto-verna", svg: <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18.34v-7.96H5.67v7.96h2.67ZM7 9.27a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1Zm11.34 9.07v-4.36c0-2.34-1.25-3.43-2.92-3.43-1.34 0-1.94.74-2.28 1.26v-1.08h-2.67v7.96h2.67v-4.44c0-.22.02-.43.08-.59.16-.43.55-.88 1.2-.88.85 0 1.19.64 1.19 1.59v4.32h2.66Z" /> },
  { label: "YouTube",   href: "https://www.youtube.com/user/SartorettoVernaSrl", svg: <path d="M21.6 7.2c-.2-1.1-1-1.9-2-2.1C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.4c-1 .2-1.8 1-2 2.1C2 9 2 12 2 12s0 3 .4 4.8c.2 1.1 1 1.9 2 2.1C6.2 19.3 12 19.3 12 19.3s5.8 0 7.6-.4c1-.2 1.8-1 2-2.1.4-1.8.4-4.8.4-4.8s0-3-.4-4.8ZM10 15V9l5.2 3-5.2 3Z" /> },
];

function Footer() {
  return (
    <footer
      style={{
        background: "#0a0a0a",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "2rem 0",
      }}
    >
      <div
        className="container-px"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "1.5rem",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "0.6rem" }}>
          {socialLinks.map(({ label, href, svg }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              title={label}
              style={{
                display: "inline-flex",
                height: "44px",
                width: "44px",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.55)",
                transition: "all 200ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#CCFF00";
                e.currentTarget.style.background = "#CCFF00";
                e.currentTarget.style.color = "#0a0a0a";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                {svg}
              </svg>
            </a>
          ))}
        </div>

        <div className="footer-text-row">
          <p className="font-sans" style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.85rem", margin: 0, textAlign: "center" }}>
            © {new Date().getFullYear()} Sartoretto Verna S.R.L. — P.IVA 07291841000
          </p>
          <a
            href="#"
            className="font-sans"
            style={{
              color: "rgba(255,255,255,0.3)",
              fontSize: "0.85rem",
              textDecoration: "none",
              transition: "color 200ms ease",
              textAlign: "center",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
          >
            Privacy Policy
          </a>
        </div>
      </div>

      <style>{`
        .footer-text-row {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        @media (min-width: 768px) {
          .footer-text-row {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }
      `}</style>
    </footer>
  );
}

/* Export to window */
Object.assign(window, {
  Testimonials,
  ContactForm,
  FAQSection,
  Footer,
});
