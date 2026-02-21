
import React from 'react';
import { Scissors, Zap, Wind, User } from 'lucide-react';
import { servicesConfig } from '../config/siteConfig';

const iconMap: Record<string, React.ReactNode> = {
  Scissors: <Scissors className="text-yellow-500" size={24} />,
  Wind: <Wind className="text-yellow-500" size={24} />,
  Zap: <Zap className="text-yellow-500" size={24} />,
  User: <User className="text-yellow-500" size={24} />
};

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 font-oswald text-white">NOSSOS <span className="text-yellow-500">TRABALHOS</span></h2>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
        <p className="text-zinc-400 max-w-xl mx-auto">
          Artesanato em forma de corte. Utilizamos técnicas tradicionais aliadas ao que há de mais moderno na barbearia mundial.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {servicesConfig.map((service, index) => (
          <div
            key={index}
            className="group relative bg-zinc-900 border-2 border-zinc-800 p-8 hover:border-yellow-500/50 transition-all hover:-translate-y-2"
          >
            <div className="mb-6 flex justify-between items-start">
              <div className="bg-zinc-800 p-3 rounded group-hover:bg-yellow-500 transition-colors">
                <div className="group-hover:text-black transition-colors">
                  {iconMap[service.iconName] || <Scissors className="text-yellow-500" size={24} />}
                </div>
              </div>
              <span className="text-2xl font-bold font-oswald text-yellow-500">{service.price}</span>
            </div>

            <h3 className="text-2xl font-bold font-oswald mb-3 text-white">{service.title}</h3>
            <p className="text-zinc-500 mb-6 line-clamp-2">{service.description}</p>

            <div className="flex items-center gap-2 text-zinc-400 text-sm font-bold">
              <span>🕒 {service.duration}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-10 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
        {/* Placeholder for brand logos of products used */}
        <div className="font-oswald text-2xl font-bold">SUAVECITO</div>
        <div className="font-oswald text-2xl font-bold">REUZEL</div>
        <div className="font-oswald text-2xl font-bold">UPPERCUT</div>
        <div className="font-oswald text-2xl font-bold">LAYRITE</div>
      </div>
    </div>
  );
};

export default Services;
