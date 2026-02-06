import React from 'react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Check, Truck, CreditCard, ShieldCheck, Plus, Minus, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

import img1 from "../../assets/8e652a8b1180cde524439f5637957f631c55980f.png";
import img2 from "../../assets/4b0f7ecb14332393702cef93576c2569ebdd7b1c.png";
import img3 from "../../assets/99e70e91130c3a6094990ded993846208561c21f.png";

interface ProductProps {
  quantity: number;
  setQuantity: (q: number | ((prev: number) => number)) => void;
  total: number;
}

export const ProductSection = ({ quantity, setQuantity, total }: ProductProps) => {
  const pricePerUnit = 24;
  const shippingCost = 6;
  const subtotal = quantity * pricePerUnit;

  return (
    <section id="comprar" className="py-32 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 space-y-24">
        
        {/* Section Title */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-[#00A3FF] font-black uppercase tracking-[0.3em] text-[10px]">Producto Estrella</span>
          <h2 className="text-5xl md:text-7xl font-black italic uppercase leading-[0.9] tracking-tighter">
            TU MEJOR VERSIÓN <br />
            EMPIEZA <span className="text-[#00A3FF]">AQUÍ</span>
          </h2>
          <p className="text-zinc-500 font-bold uppercase text-[11px] tracking-[0.2em] leading-relaxed">
            Creatina Monohidratada Athlon de 250g: El estándar de oro para atletas de alto rendimiento en Ecuador.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[img1, img2, img3].map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-zinc-50 rounded-[3rem] p-10 border border-zinc-100 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#00A3FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <ImageWithFallback 
                src={img} 
                alt={`Athlon View ${i}`} 
                className="w-full h-80 object-contain group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="mt-8 text-center">
                <p className="text-[10px] font-black uppercase tracking-widest text-[#00A3FF]">Vista de Producto {i + 1}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Purchase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-12">
          <div className="space-y-8">
            <h3 className="text-4xl font-black italic uppercase tracking-tighter">Athlon 250g <br /><span className="text-[#00A3FF]">Monohidratada Pura</span></h3>
            
            <div className="space-y-6">
              {[
                "100% Creatina Monohidratada (Micronizada)",
                "50 Servicios por envase (5g por scoop)",
                "Mejora la síntesis de proteínas",
                "Sin sabor para combinar con cualquier bebida",
                "Certificación de Laboratorio de Terceros"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="bg-[#00A3FF] p-1 rounded-lg">
                    <Check size={16} className="text-white" />
                  </div>
                  <span className="text-zinc-600 font-bold uppercase text-[11px] tracking-widest">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-8 p-8 bg-zinc-50 rounded-[2rem] border border-zinc-100">
               <div className="p-4 bg-white rounded-2xl shadow-sm border border-zinc-100">
                  <ShieldCheck size={40} className="text-[#00A3FF]" />
               </div>
               <div>
                  <p className="font-black uppercase italic tracking-tighter text-xl">Compra 100% Segura</p>
                  <p className="text-zinc-500 font-bold uppercase text-[9px] tracking-widest">Protegemos tus datos y garantizamos tu envío.</p>
               </div>
            </div>
          </div>

          {/* Cart Widget Card */}
          <div className="bg-black text-white rounded-[3rem] p-10 md:p-14 space-y-10 shadow-2xl shadow-[#00A3FF]/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00A3FF]/10 blur-[60px] rounded-full group-hover:bg-[#00A3FF]/20 transition-colors" />
            
            <div className="flex justify-between items-end">
              <div>
                <span className="text-zinc-400 font-bold uppercase text-[10px] tracking-[0.3em]">Precio de Oferta</span>
                <div className="flex items-baseline gap-3">
                   <span className="text-5xl font-black tracking-tighter">$24.00</span>
                   <span className="text-zinc-500 line-through text-lg italic">$35.00</span>
                </div>
              </div>
              <div className="text-right">
                 <span className="block text-[#00A3FF] font-black italic text-xl">-31%</span>
                 <span className="text-[9px] uppercase tracking-widest text-zinc-500">Ahorro Hoy</span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl p-6">
                <span className="font-black uppercase tracking-widest text-xs">Unidades:</span>
                <div className="flex items-center gap-6">
                  <button onClick={() => setQuantity(prev => Math.max(1, prev - 1))} className="hover:text-[#00A3FF] transition-colors"><Minus size={20}/></button>
                  <span className="text-2xl font-black w-6 text-center">{quantity}</span>
                  <button onClick={() => setQuantity(prev => prev + 1)} className="hover:text-[#00A3FF] transition-colors"><Plus size={20}/></button>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="flex justify-between text-xs font-bold text-zinc-400 uppercase tracking-widest">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xs font-bold text-zinc-400 uppercase tracking-widest">
                  <span>Envío Nacional</span>
                  <span>${shippingCost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center pt-4">
                  <span className="text-2xl font-black italic uppercase tracking-tighter">Total:</span>
                  <span className="text-4xl font-black text-[#00A3FF] tracking-tighter">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <a 
              href="#checkout" 
              className="flex items-center justify-center gap-4 w-full bg-[#00A3FF] hover:bg-white text-white hover:text-black py-6 rounded-[1.5rem] font-black text-xl uppercase tracking-tighter transition-all transform hover:scale-[1.02] shadow-xl shadow-[#00A3FF]/20"
            >
              <ShoppingCart size={24} />
              ORDENAR AHORA
            </a>

            <div className="flex justify-center gap-6 opacity-30">
               <CreditCard size={20} />
               <Truck size={20} />
               <ShieldCheck size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
