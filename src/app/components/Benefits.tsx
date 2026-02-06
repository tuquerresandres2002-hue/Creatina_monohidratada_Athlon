import React from 'react';
import { Zap, Target, Flame, BatteryCharging, CheckCircle2 } from 'lucide-react';

const benefits = [
  { icon: <Zap />, title: "Fuerza Bruta", desc: "Incrementa significativamente tu capacidad de carga y potencia explosiva en cada set." },
  { icon: <Target />, title: "Hipertrofia", desc: "Aumenta la hidratación celular para un volumen muscular real y visible." },
  { icon: <Flame />, title: "Recuperación", desc: "Acelera la resíntesis de ATP para reducir la fatiga y volver a entrenar antes." },
  { icon: <BatteryCharging />, title: "Rendimiento", desc: "Extiende tu límite de resistencia en entrenamientos de alta intensidad." },
];

export const Benefits = () => {
  return (
    <section className="py-32 bg-zinc-950 text-white relative overflow-hidden">
       {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#00A3FF 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-24 space-y-4">
          <span className="text-[#00A3FF] font-black uppercase tracking-[0.3em] text-[10px]">Beneficios Reales</span>
          <h2 className="text-5xl md:text-6xl font-black text-center italic uppercase tracking-tighter">Ciencia <span className="text-[#00A3FF]">Aplicada</span> Al Músculo</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="bg-black/50 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white/5 hover:border-[#00A3FF] group transition-all duration-500 hover:-translate-y-2">
              <div className="text-[#00A3FF] mb-8 scale-[2] transform origin-left group-hover:rotate-12 transition-transform">
                {b.icon}
              </div>
              <h3 className="text-2xl font-black uppercase italic mb-4 tracking-tighter">{b.title}</h3>
              <p className="text-zinc-500 group-hover:text-zinc-300 transition-colors leading-relaxed font-bold uppercase text-[10px] tracking-widest">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Usage = () => {
  return (
    <section className="py-32 bg-black text-white overflow-hidden relative" id="uso">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20 space-y-4">
          <span className="text-[#00A3FF] font-black uppercase tracking-[0.3em] text-[10px]">Guía de Consumo</span>
          <h2 className="text-5xl md:text-6xl font-black italic uppercase leading-[0.9] tracking-tighter">
            ¿Cómo tomar <br /> <span className="text-[#00A3FF]">Athlon?</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { num: "01", title: "Dosis Exacta", desc: "Mezcla 1 scoop (5g) en 250ml de agua o tu bebida favorita. Se disuelve al instante." },
            { num: "02", title: "Timing", desc: "Consúmelo post-entrenamiento para máxima absorción o al despertar en días de descanso." },
            { num: "03", title: "Consistencia", desc: "La creatina funciona por saturación. Tómala todos los días para ver resultados reales." },
          ].map((step, i) => (
            <div key={i} className="relative bg-white/5 border border-white/10 p-12 rounded-[3rem] group hover:bg-[#00A3FF] transition-all duration-500">
              <div className="absolute -top-6 left-12 w-16 h-16 bg-[#00A3FF] group-hover:bg-white text-white group-hover:text-[#00A3FF] rounded-2xl flex items-center justify-center font-black text-2xl transition-colors shadow-xl">
                {step.num}
              </div>
              <h4 className="text-2xl font-black uppercase italic tracking-tighter mb-4 mt-4 group-hover:text-white transition-colors">{step.title}</h4>
              <p className="text-zinc-500 group-hover:text-white/80 transition-colors font-bold uppercase text-[11px] tracking-widest leading-relaxed">
                {step.desc}
              </p>
              <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <CheckCircle2 size={32} className="text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
