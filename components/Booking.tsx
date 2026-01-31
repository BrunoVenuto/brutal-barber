
import React, { useMemo, useState } from 'react';
import { Calendar, User, CheckCircle, Scissors } from 'lucide-react';

interface BookingProps {
  onClose?: () => void;
}

function onlyDigits(v: string) {
  return (v || '').replace(/\D/g, '');
}

function normalizeWhatsAppNumber(raw: string) {
  // expects E.164 digits only (no +)
  const digits = onlyDigits(raw);
  return digits;
}

const Booking: React.FC<BookingProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    barber: '',
    date: '',
    time: '',
    name: '',
    phone: ''
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const services = ["Corte Brutal", "Barba de Respeito", "Combo Ouro", "Pai & Filho"];
  const barbers = ["Mestre Silva", "Ricardo 'Navalha'", "Felipe 'Fade'"];
  const dates = ["Hoje", "Amanhã (Ter)", "Quarta", "Quinta"];
  const times = ["09:00", "10:30", "13:00", "14:30", "16:00", "18:00"];

  const shopWhatsApp = useMemo(() => {
    const envNumber = (import.meta as any).env?.VITE_WHATSAPP_NUMBER as string | undefined;
    // fallback: seu número (Bruno) só para teste; troque no .env.local
    return normalizeWhatsAppNumber(envNumber || '5531995453632');
  }, []);

  const waLink = useMemo(() => {
    const msg =
      `🧔‍♂️ *Novo agendamento — Barbearia Brutal & Co.*\n\n` +
      `✅ *Serviço:* ${formData.service || '—'}\n` +
      `💈 *Barbeiro:* ${formData.barber || '—'}\n` +
      `📅 *Quando:* ${formData.date || '—'} às ${formData.time || '—'}\n\n` +
      `👤 *Cliente:* ${formData.name || '—'}\n` +
      `📲 *WhatsApp do cliente:* ${formData.phone || '—'}\n\n` +
      `Se precisar, posso ajustar o horário. `;

    const text = encodeURIComponent(msg);
    return `https://wa.me/${shopWhatsApp}?text=${text}`;
  }, [formData, shopWhatsApp]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(5); // Success step

    // abre o WhatsApp com a mensagem pronta
    try {
      window.open(waLink, '_blank', 'noopener,noreferrer');
    } catch {
      // ignore (browser blocks popups sometimes)
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-black/80 backdrop-blur-md p-8 md:p-12 border-2 border-yellow-500/20 shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-oswald text-white mb-2">AGENDAMENTO <span className="text-yellow-500">EXPRESSO</span></h2>
            <p className="text-zinc-500">Escolha o seu mestre e o seu horário.</p>
          </div>
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((s) => (
              <div 
                key={s} 
                className={`w-10 h-2 rounded-full transition-all ${step >= s ? 'bg-yellow-500' : 'bg-zinc-800'}`}
              ></div>
            ))}
          </div>
        </div>

        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-right-4">
            <h3 className="text-xl font-oswald text-white mb-6 flex items-center gap-2">
              <Scissors className="text-yellow-500" /> SELECIONE O SERVIÇO
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((s) => (
                <button
                  key={s}
                  onClick={() => { setFormData({ ...formData, service: s }); nextStep(); }}
                  className={`p-5 border-2 text-left font-oswald text-lg transition-all ${formData.service === s ? 'border-yellow-500 bg-yellow-500/10 text-yellow-500' : 'border-zinc-800 text-zinc-400 hover:border-zinc-600'}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-4">
            <h3 className="text-xl font-oswald text-white mb-6 flex items-center gap-2">
              <User className="text-yellow-500" /> ESCOLHA SEU BARBEIRO
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {barbers.map((b) => (
                <button
                  key={b}
                  onClick={() => { setFormData({ ...formData, barber: b }); nextStep(); }}
                  className={`p-5 border-2 flex flex-col items-center gap-4 transition-all ${formData.barber === b ? 'border-yellow-500 bg-yellow-500/10 text-yellow-500' : 'border-zinc-800 text-zinc-400 hover:border-zinc-600'}`}
                >
                  <div className="w-16 h-16 rounded-full bg-zinc-800 border-2 border-yellow-500/30 overflow-hidden">
                    <img src={`https://picsum.photos/seed/${b}/100/100`} alt={b} />
                  </div>
                  <span className="font-oswald text-center">{b}</span>
                </button>
              ))}
            </div>
            <button onClick={prevStep} className="mt-8 text-zinc-500 hover:text-white underline font-oswald">VOLTAR</button>
          </div>
        )}

        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-right-4">
            <h3 className="text-xl font-oswald text-white mb-6 flex items-center gap-2">
              <Calendar className="text-yellow-500" /> DATA E HORÁRIO
            </h3>
            <div className="mb-6">
              <label className="text-sm text-zinc-500 uppercase font-bold block mb-3">Dia</label>
              <div className="flex flex-wrap gap-3">
                {dates.map((d) => (
                  <button
                    key={d}
                    onClick={() => setFormData({ ...formData, date: d })}
                    className={`px-6 py-3 border-2 font-oswald transition-all ${formData.date === d ? 'border-yellow-500 bg-yellow-500/10 text-yellow-500' : 'border-zinc-800 text-zinc-400'}`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm text-zinc-500 uppercase font-bold block mb-3">Horários Disponíveis</label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                {times.map((t) => (
                  <button
                    key={t}
                    onClick={() => { setFormData({ ...formData, time: t }); nextStep(); }}
                    className={`py-3 border-2 font-oswald transition-all ${formData.time === t ? 'border-yellow-500 bg-yellow-500/10 text-yellow-500' : 'border-zinc-800 text-zinc-400 hover:border-zinc-600'}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <button onClick={prevStep} className="mt-8 text-zinc-500 hover:text-white underline font-oswald">VOLTAR</button>
          </div>
        )}

        {step === 4 && (
          <form onSubmit={handleSubmit} className="animate-in fade-in slide-in-from-right-4">
            <h3 className="text-xl font-oswald text-white mb-6 flex items-center gap-2">
              <CheckCircle className="text-yellow-500" /> CONFIRME SEUS DADOS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-yellow-500 uppercase block mb-1">Nome Completo</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Ex: João da Silva"
                    className="w-full bg-zinc-900 border-2 border-zinc-800 p-4 text-white focus:border-yellow-500 outline-none transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-yellow-500 uppercase block mb-1">WhatsApp</label>
                  <input 
                    required
                    type="tel" 
                    placeholder="(00) 00000-0000"
                    className="w-full bg-zinc-900 border-2 border-zinc-800 p-4 text-white focus:border-yellow-500 outline-none transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
              <div className="bg-zinc-900 p-6 border border-zinc-800 rounded">
                <h4 className="font-oswald text-yellow-500 mb-4 border-b border-zinc-800 pb-2">RESUMO</h4>
                <div className="space-y-2 text-sm">
                  <p className="flex justify-between"><span className="text-zinc-500">Serviço:</span> <span className="text-white">{formData.service}</span></p>
                  <p className="flex justify-between"><span className="text-zinc-500">Barbeiro:</span> <span className="text-white">{formData.barber}</span></p>
                  <p className="flex justify-between"><span className="text-zinc-500">Quando:</span> <span className="text-white">{formData.date} às {formData.time}</span></p>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <button type="button" onClick={prevStep} className="flex-1 border-2 border-zinc-800 text-white font-oswald py-4 hover:bg-zinc-800">CORRIGIR</button>
              <button type="submit" className="flex-1 bg-yellow-500 text-black font-oswald font-bold py-4 hover:bg-yellow-400 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">FINALIZAR AGENDAMENTO</button>
            </div>
          </form>
        )}

        {step === 5 && (
          <div className="text-center py-10 animate-in zoom-in-95 duration-500">
            <div className="w-24 h-24 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 scale-110 shadow-[0_0_20px_rgba(34,197,94,0.4)]">
              <CheckCircle size={48} />
            </div>
            <h3 className="text-4xl font-oswald text-white mb-4 italic">TUDO PRONTO, {formData.name.split(' ')[0].toUpperCase()}!</h3>
            <p className="text-zinc-400 mb-8 max-w-md mx-auto">
              Seu agendamento para <strong>{formData.service}</strong> foi confirmado. Enviamos os detalhes para seu WhatsApp. Nos vemos em breve!
            </p>
            <button 
              onClick={() => {
                setStep(1);
                onClose?.();
              }}
              className="bg-zinc-800 text-white px-8 py-3 font-oswald hover:bg-zinc-700"
            >
              FECHAR
            </button>

            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-yellow-500 hover:text-yellow-400 font-oswald underline"
            >
              Se não abriu, clique aqui para enviar no WhatsApp
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;
