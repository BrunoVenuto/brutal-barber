
import React, { useState, useEffect } from 'react';
import { theme } from './config/theme';
import {
  Scissors,
  MapPin,
  Clock,
  Phone,
  Instagram,
  Facebook,
  ChevronRight,
  Star,
  CheckCircle2,
  Calendar,
  Menu,
  X,
  MessageSquare
} from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Booking from './components/Booking';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import StyleConsultant from './components/StyleConsultant';

const App: React.FC = () => {
  const [showBooking, setShowBooking] = useState(false);

  const toggleBooking = () => setShowBooking(!showBooking);
  const closeBooking = () => setShowBooking(false);

  // ESC closes modal
  useEffect(() => {
    if (!showBooking) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeBooking();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [showBooking]);

  // Set up theme variables globally
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--color-brand', theme.colors.brand);
    root.style.setProperty('--color-brand-hover', theme.colors.brandHover);
    root.style.setProperty('--color-bg', theme.colors.background);
    root.style.setProperty('--color-text', theme.colors.text);

    // Also apply main background color directly if you want it exact
    document.body.style.backgroundColor = theme.colors.background;
    document.body.style.color = theme.colors.text;
  }, []);

  return (
    <div className="min-h-screen flex flex-col selection:bg-yellow-500 selection:text-black">
      <Header onBookingClick={toggleBooking} />

      <main className="flex-grow">
        <Hero onBookingClick={toggleBooking} />

        <section id="servicos" className="py-20 bg-zinc-950">
          <Services />
        </section>

        <section id="agendamento" className="py-20 wood-texture relative overflow-hidden border-y-4 border-yellow-500/20">
          <div className="absolute inset-0 bg-black/60 z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <Booking />
          </div>
        </section>

        <section className="py-20 bg-zinc-900 border-t border-zinc-800">
          <StyleConsultant />
        </section>

        <section id="galeria" className="py-20 bg-black">
          <Gallery />
        </section>

        <section id="depoimentos" className="py-20 bg-zinc-950">
          <Testimonials />
        </section>
      </main>

      <Footer />

      {/* Booking Modal (opens from header/hero/FAB) */}
      {showBooking && (
        <div
          className="fixed inset-0 z-[60]"
          role="dialog"
          aria-modal="true"
          aria-label="Agendamento"
        >
          {/* Backdrop */}
          <button
            aria-label="Fechar"
            className="absolute inset-0 bg-black/80"
            onClick={closeBooking}
          />

          {/* Panel */}
          <div className="relative z-10 h-full overflow-auto">
            <div className="container mx-auto px-4 py-10">
              <div className="flex justify-end mb-3">
                <button
                  onClick={closeBooking}
                  className="bg-zinc-900 border border-zinc-700 text-white px-4 py-2 font-oswald hover:bg-zinc-800"
                >
                  FECHAR
                </button>
              </div>
              <Booking onClose={closeBooking} />
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button for Mobile Booking */}
      <button
        onClick={toggleBooking}
        className="fixed bottom-6 right-6 md:hidden z-50 bg-yellow-500 text-black p-4 rounded-full shadow-2xl hover:bg-yellow-400 transition-all flex items-center justify-center border-4 border-black"
      >
        <Calendar size={24} />
      </button>
    </div>
  );
};

export default App;
