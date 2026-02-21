
import React, { useState } from 'react';
import { MessageSquare, Sparkles, Send, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { siteConfig } from '../config/siteConfig';

const StyleConsultant: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const getAdvice = async () => {
    if (!input.trim()) return;

    setLoading(true);
    setResponse(null);

    try {
      const apiKey = (import.meta as any).env?.VITE_GEMINI_API_KEY as
        | string
        | undefined;

      if (!apiKey || apiKey === "PLACEHOLDER_API_KEY") {
        setResponse(
          "Faltou configurar a chave da IA. Coloque VITE_GEMINI_API_KEY no .env.local e reinicie o dev server.",
        );
        return;
      }

      const ai = new GoogleGenAI({ apiKey });
      const prompt = `Você é um mestre barbeiro visagista da '${siteConfig.name}'. 
      Responda de forma curta, bruta e profissional, mantendo o estilo masculino. 
      O cliente perguntou: "${input}". 
      Dê uma sugestão de corte ou cuidado de barba com base nisso.`;

      const result = await ai.models.generateContent({
        // modelos mudam com o tempo — este é um default estável para demos
        model: "gemini-2.0-flash",
        contents: prompt,
        config: {
          temperature: 0.7,
          maxOutputTokens: 150,
        },
      });

      setResponse(result.text || "Algo deu errado na navalha. Tente de novo.");
    } catch (err: any) {
      console.error("IA error:", err);

      const msg =
        err?.error?.message ||
        err?.message ||
        "Erro desconhecido ao chamar a IA.";

      // Se for quota/rate limit, responde em modo demo
      if (
        String(msg).includes("RESOURCE_EXHAUSTED") ||
        String(msg).includes("quota")
      ) {
        setResponse(
          "⚠️ IA temporariamente indisponível (limite do provedor).\n\n" +
          "✅ Sugestão (modo demo): Degradê baixo + barba curta alinhada é um combo seguro e moderno.\n" +
          "✅ Se quiser algo mais marcante: degradê médio + barba cheia com contorno na navalha.\n" +
          "✅ Dica: finalize com pomada matte e óleo de barba pra acabamento premium.",
        );
        return;
      }

      setResponse(`❌ Falha na IA:\n${msg}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="bg-zinc-800/50 border-4 border-zinc-800 p-8 flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2">
          <div className="bg-yellow-500 text-black px-3 py-1 font-bold text-xs inline-block mb-4 tracking-tighter">AI POWERED</div>
          <h2 className="text-4xl font-bold font-oswald text-white mb-4">CONSULTOR DE <span className="text-yellow-500">ESTILO</span></h2>
          <p className="text-zinc-400 mb-6">
            Dúvida sobre qual corte combina com seu rosto? Nosso consultor movido a Inteligência Artificial dá o veredito bruto.
          </p>
          <div className="relative">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ex: Tenho rosto redondo e cabelo liso, o que recomenda?"
              className="w-full bg-black border-2 border-zinc-700 p-4 text-white font-light focus:border-yellow-500 outline-none transition-all resize-none h-32"
            />
            <button
              onClick={getAdvice}
              disabled={loading}
              className="absolute bottom-4 right-4 bg-yellow-500 text-black p-3 hover:bg-yellow-400 transition-all disabled:opacity-50"
            >
              {loading ? <Loader2 className="animate-spin" /> : <Send size={20} />}
            </button>
          </div>
        </div>

        <div className="md:w-1/2 w-full min-h-[200px] bg-black/40 border-2 border-dashed border-zinc-700 flex flex-col items-center justify-center p-8 text-center">
          {response ? (
            <div className="animate-in fade-in duration-500">
              <Sparkles className="text-yellow-500 mb-4 mx-auto" size={32} />
              <p className="text-white font-oswald text-xl italic leading-relaxed">
                {response}
              </p>
              <div className="mt-6 flex justify-center gap-2">
                <div className="w-1 h-1 bg-yellow-500"></div>
                <div className="w-1 h-1 bg-yellow-500"></div>
                <div className="w-1 h-1 bg-yellow-500"></div>
              </div>
            </div>
          ) : (
            <div className="text-zinc-600">
              <MessageSquare size={48} className="mx-auto mb-4 opacity-20" />
              <p className="font-oswald uppercase tracking-widest text-sm">Aguardando sua pergunta...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StyleConsultant;
