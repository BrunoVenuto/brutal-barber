
import React from 'react';
import { 
  Scissors, 
  MapPin, 
  Phone, 
  Clock, 
  Instagram, 
  Facebook, 
  Youtube,
  ArrowUp
} from 'lucide-react';

const Footer: React.FC = () => {
  const instaUrl = ((import.meta as any).env?.VITE_INSTAGRAM_URL as string | undefined) || 'https://instagram.com/';
  const facebookUrl = ((import.meta as any).env?.VITE_FACEBOOK_URL as string | undefined) || 'https://facebook.com/';
  const youtubeUrl = ((import.meta as any).env?.VITE_YOUTUBE_URL as string | undefined) || 'https://youtube.com/';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white pt-20 border-t-8 border-yellow-500">
      <div id="unidade" className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Scissors className="text-yellow-500" size={32} />
              <span className="text-3xl font-bold tracking-tighter font-oswald">
                BRUTAL <span className="text-yellow-500">& CO.</span>
              </span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Resgatando a essência da barbearia clássica para o homem moderno que não abre mão da força e do estilo.
            </p>
            <div className="flex gap-4">
              <a href={instaUrl} target="_blank" rel="noreferrer" className="w-10 h-10 bg-zinc-900 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-all">
                <Instagram size={20} />
              </a>
              <a href={facebookUrl} target="_blank" rel="noreferrer" className="w-10 h-10 bg-zinc-900 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-all">
                <Facebook size={20} />
              </a>
              <a href={youtubeUrl} target="_blank" rel="noreferrer" className="w-10 h-10 bg-zinc-900 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-all">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-oswald text-xl font-bold mb-6 text-yellow-500">LOCALIZAÇÃO</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-yellow-500 shrink-0" size={20} />
                <span className="text-zinc-400 text-sm">
                  Av. Paulista, 1000 - Bela Vista<br />
                  São Paulo - SP, 01310-100
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-yellow-500 shrink-0" size={20} />
                <span className="text-zinc-400 text-sm">(11) 99999-8888</span>
              </div>
            </div>
            {/* Simple Map Placeholder */}
            <div className="mt-6 h-32 bg-zinc-900 border border-zinc-800 flex items-center justify-center grayscale">
               <span className="text-zinc-700 font-oswald text-xs">[ MAPA INTERATIVO ]</span>
            </div>
          </div>

          <div>
            <h4 className="font-oswald text-xl font-bold mb-6 text-yellow-500">HORÁRIOS</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between border-b border-zinc-900 pb-1">
                <span className="text-zinc-500">Segunda - Sexta:</span>
                <span className="text-white font-bold">09h - 20h</span>
              </li>
              <li className="flex justify-between border-b border-zinc-900 pb-1">
                <span className="text-zinc-500">Sábado:</span>
                <span className="text-white font-bold">08h - 18h</span>
              </li>
              <li className="flex justify-between pb-1">
                <span className="text-zinc-500">Domingo:</span>
                <span className="text-red-500 font-bold uppercase">Fechado</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-oswald text-xl font-bold mb-6 text-yellow-500">NEWSLETTER</h4>
            <p className="text-zinc-500 text-xs mb-4">Receba dicas de estilo e promoções brutais.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="bg-zinc-900 border-2 border-zinc-800 p-3 text-white focus:border-yellow-500 outline-none flex-grow"
              />
              <button className="bg-yellow-500 text-black px-4 hover:bg-yellow-400 transition-all font-bold">OK</button>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-900 py-10 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-600 text-xs tracking-widest uppercase">
          <p>© 2024 Barbearia Brutal & Co. Todos os direitos reservados.</p>
          <div className="flex gap-8">
             <a href="#" className="hover:text-yellow-500">Políticas</a>
             <a href="#" className="hover:text-yellow-500">Termos</a>
             <button onClick={scrollToTop} className="flex items-center gap-2 text-yellow-500 hover:text-white transition-all font-bold">
               VOLTAR AO TOPO <ArrowUp size={14} />
             </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
