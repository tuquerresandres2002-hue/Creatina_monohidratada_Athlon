import React from 'react';
import { ShieldCheck, Truck, RotateCcw, Headphones } from 'lucide-react';

export const TrustSection = () => {
  return (
    <section className="py-32 bg-black text-white relative overflow-hidden border-t border-white/5">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00A3FF]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-24 space-y-4">
          <span className="text-[#00A3FF] font-black uppercase tracking-[0.3em] text-[10px]">Confianza Athlon</span>
          <h2 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter">¿Por qué <span className="text-[#00A3FF]">comprar</span> con nosotros?</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { icon: <ShieldCheck size={48} />, title: "Calidad Premium", desc: "Pureza garantizada bajo estándares internacionales. Sin rellenos." },
            { icon: <Truck size={48} />, title: "Envíos Express", desc: "Entrega segura en todo el Ecuador en un plazo de 24 a 48 horas." },
            { icon: <RotateCcw size={48} />, title: "Garantía Total", desc: "Si no recibes lo que esperabas, gestionamos tu devolución de inmediato." },
            { icon: <Headphones size={48} />, title: "Soporte VIP", desc: "Asesoría gratuita vía WhatsApp para resolver todas tus dudas de uso." },
          ].map((item, i) => (
            <div key={i} className="text-center space-y-6 group p-8 rounded-[2rem] hover:bg-white/5 transition-all duration-500 border border-transparent hover:border-white/10">
              <div className="text-[#00A3FF] flex justify-center group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_10px_20px_rgba(0,163,255,0.3)]">
                {item.icon}
              </div>
              <h3 className="text-xl font-black uppercase italic tracking-tighter">{item.title}</h3>
              <p className="text-zinc-500 group-hover:text-zinc-300 transition-colors font-bold uppercase text-[10px] tracking-widest leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const PixelTracking = () => {
  React.useEffect(() => {
    // Simulación de inicialización de pixel
    console.log("Athlon Pixel: Seguimiento inicializado para Ecuador...");
  }, []);

  return null;
};
