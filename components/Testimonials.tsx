
import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Carlos Alberto",
    role: "Empresário",
    text: "Lugar de homem. Ambiente foda, atendimento de primeira e o corte impecável. Não troco por nada.",
    rating: 5
  },
  {
    name: "Marcos Vinícius",
    role: "Desenvolvedor",
    text: "O sistema de agendamento funciona muito bem. Cheguei e já fui atendido. A cerveja cortesia é o toque final.",
    rating: 5
  },
  {
    name: "Roberto Freitas",
    role: "Advogado",
    text: "A melhor barba que já fiz. A toalha quente com essência de cedro é um ritual que todo homem deveria passar.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 font-oswald text-white italic">QUEM <span className="text-yellow-500">CONFIA</span></h2>
        <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-zinc-900 p-8 border-l-4 border-yellow-500 relative group">
            <Quote className="absolute top-4 right-4 text-zinc-800 group-hover:text-yellow-500/10 transition-colors" size={48} />
            <div className="flex gap-1 mb-6">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <p className="text-zinc-300 italic mb-8 leading-relaxed">"{t.text}"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-zinc-800 rounded-full border border-zinc-700 flex items-center justify-center font-oswald font-bold text-yellow-500">
                {t.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-oswald text-white font-bold">{t.name}</h4>
                <p className="text-zinc-500 text-xs uppercase tracking-widest">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
