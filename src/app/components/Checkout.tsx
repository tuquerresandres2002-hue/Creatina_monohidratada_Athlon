import React, { useEffect } from 'react';

interface CheckoutProps {
  quantity: number;
  total: number;
}

export const Checkout = ({ quantity, total }: CheckoutProps) => {
  // Construct the Tally URL with hidden fields
  const tallyUrl = `https://tally.so/r/jaoKYY?cantidad=${quantity}&total_calculado=${total}`;

  useEffect(() => {
    // Load Tally embed script
    const script = document.createElement('script');
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-24 bg-white text-black relative overflow-hidden" id="checkout">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-white" />
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="text-[#00A3FF] font-black uppercase tracking-[0.3em] text-[10px]">Paso Final</span>
          <h2 className="text-5xl font-black uppercase italic tracking-tighter">Completa tu Pedido</h2>
          <p className="text-zinc-500 font-bold uppercase text-xs tracking-widest max-w-md mx-auto">
            Ingresa tus datos de envío y elige tu método de pago para procesar la orden.
          </p>
        </div>

        <div className="bg-white rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,163,255,0.15)] border border-zinc-100 overflow-hidden min-h-[800px]">
          {/* Tally Embed */}
          <iframe 
            data-tally-src={tallyUrl} 
            loading="lazy" 
            width="100%" 
            height="800" 
            frameBorder="0" 
            marginHeight={0} 
            marginWidth={0} 
            title="Checkout Athlon"
            className="w-full"
          />
        </div>

        <div className="mt-12 flex flex-col items-center gap-6">
          <div className="flex items-center gap-8 opacity-40 grayscale">
            <img src="https://images.unsplash.com/photo-1653389527286-604ab2dd2471" alt="Visa/Mastercard" className="h-6" />
          </div>
          <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-[0.2em] text-center max-w-sm">
            Tus datos están protegidos. Después de enviar el formulario, serás contactado por WhatsApp para confirmar los detalles finales.
          </p>
        </div>
      </div>
    </section>
  );
};
