import { useEffect } from "react";
import "@/App.css";
import { ReactLenis } from "lenis/react";
import { Toaster } from "./components/ui/sonner";
import { ScrollProgress } from "./components/ScrollProgress";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Ribbon } from "./components/Ribbon";
import { Manifesto } from "./components/Manifesto";
import { Gallery } from "./components/Gallery";
import { MenuSection } from "./components/MenuSection";
import { Reviews } from "./components/Reviews";
import { Visit } from "./components/Visit";
import { FAQ } from "./components/FAQ";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { BUSINESS } from "./config/business";
import { applyTheme } from "./config/theme";

function App() {
  const f = BUSINESS.features;
  useEffect(() => {
    applyTheme(BUSINESS);
  }, []);
  return (
    <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }}>
      <div className="App bg-cream min-h-screen">
        <div className="noise-overlay" aria-hidden="true" />
        <ScrollProgress />
        <Nav />
        <main>
          <Hero />
          {f.marquee && (
            <div className="mt-20 md:mt-28">
              <Ribbon />
            </div>
          )}
          {f.story && <Manifesto />}
          {f.gallery && <Gallery />}
          {f.menu && <MenuSection />}
          {f.reviews && <Reviews />}
          {f.visit && <Visit />}
          {f.faq && <FAQ />}
          {f.contactForm && BUSINESS.contact.email && <ContactForm />}
        </main>
        <Footer />
        <Toaster position="bottom-right" />
      </div>
    </ReactLenis>
  );
}

export default App;
