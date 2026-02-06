import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Benefits, Usage } from './components/Benefits';
import { ProductSection } from './components/ProductSection';
import { ReviewsCarousel } from './components/ReviewsCarousel';
import { TrustSection, PixelTracking } from './components/TrustAndUGC';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Checkout } from './components/Checkout';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-md py-3 border-b border-white/10' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#00A3FF] rounded-lg flex items-center justify-center font-black text-white italic">A</div>
          <span className="text-2xl font-black italic text-white uppercase tracking-tighter">ATHLON<span className="text-[#00A3FF]">PRO</span></span>
        </div>
        
        <div className="hidden md:flex gap-8 items-center text-white font-bold uppercase text-xs tracking-[0.2em]">
          <a href="#beneficios" className="hover:text-[#00A3FF] transition-colors">Beneficios</a>
          <a href="#comprar" className="hover:text-[#00A3FF] transition-colors">Producto</a>
          <a href="#testimonios" className="hover:text-[#00A3FF] transition-colors">Opiniones</a>
          <a href="#checkout" className="bg-[#00A3FF] text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all">Ordenar</a>
        </div>

        <button className="md:hidden text-white">
          <Menu size={28} />
        </button>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 text-center space-y-10">
        <div className="flex justify-center items-center gap-2">
          <div className="w-8 h-8 bg-[#00A3FF] rounded-lg flex items-center justify-center font-black text-white italic">A</div>
          <span className="text-xl font-black italic text-white uppercase tracking-tighter">ATHLON<span className="text-[#00A3FF]">PRO</span></span>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center gap-10 text-zinc-500 font-bold uppercase text-[10px] tracking-[0.3em]">
          <a href="#" className="hover:text-[#00A3FF] transition-colors">Privacidad</a>
          <a href="#" className="hover:text-[#00A3FF] transition-colors">Términos</a>
          <a href="#" className="hover:text-[#00A3FF] transition-colors">Envíos Ecuador</a>
        </div>

        <p className="text-zinc-700 text-[10px] uppercase tracking-widest leading-relaxed">
          © 2026 ATHLON SUPPLEMENTS. Todos los derechos reservados. <br />
          Hecho para atletas de alto rendimiento. Envíos a todo el Ecuador.
        </p>
      </div>
    </footer>
  );
};

export default function App() {
  const [quantity, setQuantity] = useState(1);
  const pricePerUnit = 24;
  const shippingCost = 6;
  const total = (quantity * pricePerUnit) + shippingCost;

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#00A3FF] selection:text-white">
      <PixelTracking />
      <Navbar />
      
      <main>
        <Hero quantity={quantity} setQuantity={setQuantity} total={total} />
        
        <section id="beneficios">
          <Benefits />
        </section>
        
        <ProductSection quantity={quantity} setQuantity={setQuantity} total={total} />
        
        <Usage />
        
        <section id="testimonios">
          <ReviewsCarousel />
        </section>
        
        <TrustSection />

        <Checkout quantity={quantity} total={total} />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
