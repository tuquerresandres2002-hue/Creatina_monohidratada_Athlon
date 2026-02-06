import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  const phoneNumber = "593939599856"; // Correct phone for Ecuador
  const message = "Hola Athlon Pro, me gustaría obtener más información sobre la creatina de 250g en oferta.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3 group">
      <div className="bg-black/80 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 transition-transform">
        ¿Dudas? Chat VIP
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-white text-white hover:text-[#25D366] p-5 rounded-[1.5rem] shadow-[0_20px_40px_-10px_rgba(37,211,102,0.4)] hover:scale-110 transition-all duration-300 flex items-center justify-center border-2 border-transparent hover:border-[#25D366]"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={32} fill="currentColor" className="text-inherit" />
      </a>
    </div>
  );
};
