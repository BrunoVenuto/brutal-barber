
import React, { useState } from 'react';
import { Scissors, Menu, X } from 'lucide-react';

interface HeaderProps {
  onBookingClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBookingClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Início', href: '#' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Agendar', href: '#agendamento' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Unidade', href: '#unidade' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black/95 border-b-2 border-yellow-500/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="bg-yellow-500 p-2 rounded transform group-hover:rotate-12 transition-transform duration-300">
            <Scissors className="text-black" size={24} />
          </div>
          <span className="text-2xl font-bold tracking-tighter font-oswald text-white">
            BRUTAL <span className="text-yellow-500">& CO.</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-oswald text-zinc-400 hover:text-yellow-500 transition-colors tracking-wide"
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={onBookingClick}
            className="bg-yellow-500 text-black px-6 py-2 rounded-sm font-oswald font-bold hover:bg-yellow-400 transition-all active:scale-95 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
          >
            AGENDAR AGORA
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-yellow-500"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-zinc-900 border-b border-yellow-500/30 p-4 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-oswald text-xl text-zinc-300 py-2 border-b border-zinc-800"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={() => {
              onBookingClick();
              setIsMenuOpen(false);
            }}
            className="bg-yellow-500 text-black py-4 font-oswald font-bold text-lg rounded-sm"
          >
            AGENDAR AGORA
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
