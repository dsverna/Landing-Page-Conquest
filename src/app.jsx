/* ============================================================
   Sartoretto Verna — Pharmacy Business Architects (adapted)
   Main app composition
============================================================ */

function App() {
  return (
    <main style={{ background: "#0a0a0a", color: "#fff", overflowX: "hidden" }}>
      <Navbar />
      <Hero />
      <TrustBar />
      <ClientLogos />
      <PhilosophySection />
      <ComparisonSection />
      <StatsSection />
      <ResultsSection />
      <ProjectGallery />
      <MethodSection />
      <Testimonials />
      <ContactForm />
      <FAQSection />
      <Footer />
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
