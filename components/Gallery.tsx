
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800',
      title: 'FADE DE PRECISÃO',
      author: 'Felipe Fade'
    },
    {
      url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=800',
      title: 'LÂMINAS DE AÇO',
      author: 'Mestre Silva'
    },
    {
      url: 'https://images.unsplash.com/photo-1592647420448-61635605094e?auto=format&fit=crop&q=80&w=800',
      title: 'CONFORTO VINTAGE',
      author: 'Unidade Paulista'
    },
    {
      url: 'https://images.unsplash.com/photo-1626014303757-6466006769f3?auto=format&fit=crop&q=80&w=800',
      title: 'BARBA ESCULPIDA',
      author: 'Ricardo Navalha'
    },
    {
      url: 'https://images.unsplash.com/photo-1622286332618-f2803b186711?auto=format&fit=crop&q=80&w=800',
      title: 'RITUAL DA TOALHA',
      author: 'Mestre Silva'
    },
    {
      url: 'https://images.unsplash.com/photo-1507081323647-4d250478b919?auto=format&fit=crop&q=80&w=800',
      title: 'FERRAMENTAS DO OFÍCIO',
      author: 'Equipe Brutal'
    },
    {
      url: 'https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&q=80&w=800',
      title: 'CORTE EXECUTIVO',
      author: 'Felipe Fade'
    },
    {
      url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800',
      title: 'ESPUMA TRADICIONAL',
      author: 'Ricardo Navalha'
    },
    {
      url: 'https://images.unsplash.com/photo-1618331835717-8016f122c19e?auto=format&fit=crop&q=80&w=800',
      title: 'VISAGISMO MODERNO',
      author: 'Mestre Silva'
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold font-oswald text-white mb-4 italic">GALERIA DE <span className="text-yellow-500">RESPEITO</span></h2>
          <div className="w-24 h-1 bg-yellow-500 mb-6"></div>
          <p className="text-zinc-400 max-w-md">O resultado da nossa obsessão pela perfeição em cada detalhe. Cada clique, um estilo dominado por mestres.</p>
        </div>
        <a href="#" className="font-oswald text-yellow-500 flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest font-bold border-b-2 border-transparent hover:border-yellow-500">
          Ver Portfólio Completo →
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((item, idx) => (
          <div key={idx} className="group relative overflow-hidden aspect-square border-4 border-zinc-900 hover:border-yellow-500 transition-all cursor-pointer bg-zinc-800">
            <img 
              src={item.url} 
              alt={item.title} 
              loading="lazy"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-90 group-hover:opacity-100"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800`; // Fallback robusto
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-start p-8">
              <div className="text-left translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-yellow-500 font-oswald text-2xl font-bold block leading-tight">{item.title}</span>
                <span className="text-white text-sm uppercase tracking-widest font-bold opacity-80">Por {item.author}</span>
              </div>
            </div>
            {/* Detalhe de canto para reforçar o design forte */}
            <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-yellow-500/0 group-hover:border-yellow-500/100 transition-all duration-500 pointer-events-none"></div>
          </div>
        ))}
      </div>
      
      <div className="mt-20 flex flex-col items-center">
        <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-8"></div>
        <p className="text-zinc-500 font-oswald italic text-lg text-center">
          "A diferença entre um corte e uma obra de arte é a atenção aos detalhes que ninguém mais vê."
        </p>
      </div>
    </div>
  );
};

export default Gallery;
