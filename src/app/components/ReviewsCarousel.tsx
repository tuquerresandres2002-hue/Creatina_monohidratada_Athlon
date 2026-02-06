import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star, Quote } from 'lucide-react';

const reviews = [
  { name: "Juan P. (Guayaquil)", comment: "La mejor creatina que he probado en Ecuador. El envío a Guayaquil fue súper rápido.", rating: 5 },
  { name: "Maria L. (Quito)", comment: "Increíble resultados en mi fuerza. Pago contraentrega súper confiable.", rating: 5 },
  { name: "Carlos R. (Cuenca)", comment: "Calidad premium. Se nota la diferencia con otras marcas locales.", rating: 5 },
  { name: "Sofía M. (Manta)", comment: "Llegó en 24 horas. El sabor neutro es perfecto para mis batidos.", rating: 5 },
  { name: "Diego T. (Loja)", comment: "Buen empaque y sello de seguridad intacto. Recomendado.", rating: 5 },
  { name: "Elena G. (Ibarra)", comment: "Me encanta que sea 100% pura. El servicio al cliente por WhatsApp es 10/10.", rating: 5 },
  { name: "Ricardo V. (Ambato)", comment: "Excelente relación calidad-precio. Mis entrenos han mejorado mucho.", rating: 5 },
  { name: "Lucía S. (Santo Domingo)", comment: "Envío gratis por oferta y llegó sin problemas a mi puerta.", rating: 5 },
  { name: "Mateo B. (Portoviejo)", comment: "Segunda vez que compro Athlon. No la cambio por nada.", rating: 5 },
  { name: "Valeria N. (Quito)", comment: "Fuerza explosiva real. Muy contenta con la compra.", rating: 5 },
];

export const ReviewsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Strictly 1 per slide on mobile
          dots: true,
          fade: true, // Optional: adds a smooth transition on mobile
        }
      }
    ]
  };

  return (
    <div className="py-32 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20 space-y-4">
          <span className="text-[#00A3FF] font-black uppercase tracking-[0.3em] text-[10px]">Testimonios Reales</span>
          <h2 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter">Atletas que <span className="text-[#00A3FF]">confían</span></h2>
        </div>

        <Slider {...settings} className="reviews-slider">
          {reviews.map((review, index) => (
            <div key={index} className="px-4 py-10">
              <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] h-full relative group hover:bg-white hover:text-black transition-all duration-500">
                <Quote className="absolute top-8 right-8 text-[#00A3FF]/20 group-hover:text-[#00A3FF]/40" size={60} />
                
                <div className="flex mb-6 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill={i < review.rating ? "#00A3FF" : "none"} className={i < review.rating ? "text-[#00A3FF]" : "text-zinc-600"} />
                  ))}
                </div>
                
                <p className="text-lg font-bold leading-relaxed mb-8 italic">
                  "{review.comment}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#00A3FF] rounded-full flex items-center justify-center font-black text-white italic">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-black uppercase tracking-widest text-sm">{review.name}</p>
                    <p className="text-[10px] uppercase tracking-widest text-[#00A3FF] font-black">Cliente Verificado</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      
      <style>{`
        .reviews-slider .slick-dots li button:before {
          color: white;
          font-size: 12px;
          opacity: 0.2;
        }
        .reviews-slider .slick-dots li.slick-active button:before {
          color: #00A3FF;
          opacity: 1;
        }
        .reviews-slider .slick-dots {
          bottom: -40px;
        }
      `}</style>
    </div>
  );
};
