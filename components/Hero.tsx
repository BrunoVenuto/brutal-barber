
import React from 'react';
import { Scissors, ShieldCheck, Zap } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface HeroProps {
  onBookingClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookingClick }) => {
  return (
    <div className="relative min-h-[90vh] flex items-center bg-black overflow-hidden">
      {/* Background with Dark Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-50 bg-cover bg-center grayscale contrast-125"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=2000')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>

      {/* Wood Texture Accent */}
      <div className="absolute bottom-0 right-0 w-1/3 h-full wood-texture opacity-20 -skew-x-12 transform translate-x-1/2 hidden lg:block"></div>

      <div className="container mx-auto px-4 relative z-20 pt-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 px-3 py-1 rounded-full mb-6 font-bold tracking-wider text-sm">
            <Zap size={14} className="fill-yellow-500" />
            {siteConfig.labels.openToday}
          </div>

          <h1 className="text-6xl md:text-8xl font-bold font-oswald leading-none mb-6 text-white italic">
            {siteConfig.labels.heroTitle}<br />
            <span className="text-yellow-500 underline decoration-4 underline-offset-8">{siteConfig.labels.heroHighlight}</span>
          </h1>

          <p className="text-zinc-400 text-xl md:text-2xl mb-10 max-w-2xl font-light leading-relaxed">
            {siteConfig.labels.heroSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onBookingClick}
              className="bg-yellow-500 text-black px-10 py-5 font-oswald font-bold text-xl hover:bg-yellow-400 transition-all flex items-center justify-center gap-2 group"
            >
              {siteConfig.labels.bookingButton}
              <Scissors size={20} className="group-hover:rotate-45 transition-transform" />
            </button>
            <a
              href="#servicos"
              className="border-2 border-zinc-700 text-white px-10 py-5 font-oswald font-bold text-xl hover:bg-white hover:text-black transition-all text-center"
            >
              {siteConfig.labels.servicesButton}
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-yellow-500" size={32} />
              <div>
                <h4 className="font-oswald text-lg text-white">QUALIDADE BRUTA</h4>
                <p className="text-zinc-500 text-sm">Navalhas e produtos premium.</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Scissors className="text-yellow-500" size={32} />
              <div>
                <h4 className="font-oswald text-lg text-white">MESTRES BARBEIROS</h4>
                <p className="text-zinc-500 text-sm">Especialistas em visagismo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block z-30">
        <div className="w-1 h-12 bg-gradient-to-b from-yellow-500 to-transparent rounded-full"></div>
      </div>
    </div>
  );
};

export default Hero;
