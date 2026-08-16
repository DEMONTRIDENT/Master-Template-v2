import "@/App.css";
import { ReactLenis } from "lenis/react";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Ribbon } from "./components/Ribbon";
import { Manifesto } from "./components/Manifesto";
import { Gallery } from "./components/Gallery";
import { MenuSection } from "./components/MenuSection";
import { Reviews } from "./components/Reviews";
import { Visit } from "./components/Visit";
import { Footer } from "./components/Footer";
import { BUSINESS } from "./config/business";

function App() {
  const f = BUSINESS.features;
  return (
    <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }}>
      <div className="App bg-cream min-h-screen">
        <div className="noise-overlay" aria-hidden="true" />
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
        </main>
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
