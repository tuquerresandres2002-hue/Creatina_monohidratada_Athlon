import React from 'react';
import { motion } from 'framer-motion';
import { CountdownTimer } from './CountdownTimer';
import { Truck, Star, ChevronRight } from 'lucide-react';
import imgHero from "figma:asset/8e652a8b1180cde524439f5637957f631c55980f.png";

interface HeroProps {
  quantity: number;
  setQuantity: (q: number) => void;
  total: number;
}

export const Hero = ({ quantity, total }: HeroProps) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white pt-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1700784795176-7ff886439d79?q=80&w=2000" 
          alt="Gym Background" 
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00A3FF]/20 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 z-1" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
            <span className="flex gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#00A3FF" className="text-[#00A3FF]" />)}
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Calidad Athlon Certificada</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black italic uppercase leading-[0.85] tracking-tighter">
            CREATINA <br />
            <span className="text-[#00A3FF]">ATHLON</span> <br />
            <span className="text-white/40">PREMIUM</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 py-4 justify-center lg:justify-start">
            <div className="flex flex-col">
              <span className="text-zinc-500 line-through text-xl font-bold italic">$35.00</span>
              <div className="flex items-baseline gap-2">
                <span className="text-[#00A3FF] text-6xl font-black tracking-tighter">$24.00</span>
                <span className="text-zinc-400 font-bold uppercase text-[10px] tracking-widest">+ envío</span>
              </div>
            </div>
            <div className="h-12 w-[2px] bg-white/10 hidden sm:block" />
            <div className="text-zinc-400 font-bold uppercase tracking-widest text-sm leading-tight text-center lg:text-left">
              Oferta válida <br />
              por <span className="text-white">Tiempo Limitado</span>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 max-w-md mx-auto lg:mx-0 shadow-2xl">
            <p className="mb-4 font-black uppercase tracking-[0.2em] text-[10px] text-zinc-400">Últimas horas de descuento:</p>
            <CountdownTimer />
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center pt-4">
            <a 
              href="#comprar" 
              className="group bg-[#00A3FF] hover:bg-white text-white hover:text-black px-12 py-5 rounded-full font-black text-xl uppercase tracking-tighter transition-all transform hover:scale-105 shadow-[0_20px_40px_-15px_rgba(0,163,255,0.4)] flex items-center gap-3"
            >
              VER PRODUCTO
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center gap-2 text-[#00A3FF] font-black text-sm uppercase tracking-widest">
              <Truck size={18} /> Envíos Seguros
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="absolute inset-0 bg-[#00A3FF]/20 rounded-full blur-[120px] animate-pulse" />
          <img 
            src={imgHero} 
            alt="Creatina Athlon" 
            className="relative z-10 w-full max-w-[500px] drop-shadow-[0_45px_45px_rgba(0,163,255,0.4)] hover:rotate-2 transition-transform duration-700"
          />
        </motion.div>
      </div>
    </div>
  );
};
