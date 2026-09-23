'use client';
import { useState, useEffect, useRef } from "react";
import { Instagram, Facebook, Menu, X, MessageCircle, MapPin, CheckCircle, CreditCard, ChevronLeft, ChevronRight } from "lucide-react";
import CalendlyWidget from "../../../components/CalendlyWidget";

const WHATSAPP_NUMBER = "5491155044320"; 

export default function PRPPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  // Referencia para el carrusel ampliado a 5 tarjetas
  const carruselPrpRef = useRef<HTMLDivElement>(null);

  // Datos actualizados con 5 elementos para fotos reales de los tratamientos
  const itemsCarrusel = [
    {
      titulo: "Tratamiento Facial",
      subtitulo: "Bioestimulación Celular",
      desc: "Aplicación precisa para devolver la luminosidad, mejorar la textura y activar el colágeno natural.",
      img: "/inyecbtx.jpg"
    },
    {
      titulo: "Calidad de Piel",
      subtitulo: "Renovación Profunda",
      desc: "Resultados visibles en la elasticidad y firmeza del rostro, cuello y escote con fotos reales de evolución.",
      img: "/facialesprp.jpeg"
    },
    {
      titulo: "Proceso Clínico",
      subtitulo: "Seguridad y Técnica",
      desc: "Extracción y centrifugado bajo normas estrictas de bioseguridad con aparatología homologada.",
      img: "/plasma.jpeg"
    },
    {
      titulo: "Capilar",
      subtitulo: "Densidad y Fortaleza",
      desc: "Sesiones enfocadas en revitalizar el folículo piloso, frenar la caída y estimular el crecimiento.",
      img: "/inyecbtx.jpg" // Puedes reemplazar por tu foto capilar real
    },
    {
      titulo: "Resultados Reales",
      subtitulo: "Efecto Glow Natural",
      desc: "Pacientes reales que eligen potenciar su belleza apostando por la regeneración biológica propia.",
      img: "/facialesprp.jpeg" // Puedes reemplazar por otra foto real de resultado
    }
  ];

  // Efecto de auto-scroll para el carrusel
  useEffect(() => {
    const autoScroll = (ref: React.RefObject<HTMLDivElement | null>) => {
      if (ref.current) {
        const { scrollLeft, scrollWidth, clientWidth } = ref.current;
        const maxScroll = scrollWidth - clientWidth;
        if (scrollLeft >= maxScroll - 10) {
          ref.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          ref.current.scrollBy({ left: 400, behavior: 'smooth' });
        }
      }
    };
    const interval = setInterval(() => {
      autoScroll(carruselPrpRef);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scroll = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (ref.current) {
      const cardWidth = 400;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#2C2C2C]">
      
      {/* BOTÓN WHATSAPP FLOTANTE */}
      <a 
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola! Vengo de la web de Extetix y me gustaría consultar por el Plasma Rico en Plaquetas.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 animate-bounce"
      >
        <MessageCircle size={30} fill="currentColor" />
      </a>

      {/* NAVBAR - DISEÑO ORIGINAL */}
      <nav className="bg-white py-5 px-6 border-b border-[#D4C5A1] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex flex-col items-start">
            <img src="/logo.jpeg" alt="Extetix" className="h-16 w-16 md:h-20 md:w-20 rounded-full object-cover aspect-square border border-[#C5A059]/30 shadow-md" />
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-[10px] font-normal uppercase tracking-[0.3em] text-[#C5A059]">
            <a href="/" className="hover:text-[#2C3E2D] transition duration-500">Inicio</a>
            <a href="/#tratamientos" className="hover:text-[#2C3E2D] transition duration-500">Nuestros Tratamientos</a>
            <a href="#contacto" className="hover:text-[#2C3E2D] transition duration-500">Contacto</a>
          </div>
          
          <div className="flex items-center gap-5">
            <div className="hidden md:flex items-center gap-5 text-[#C5A059]">
              <a href="https://www.instagram.com/extetix.original" target="_blank" rel="noopener noreferrer" className="hover:text-[#2C3E2D] transition duration-500"><Instagram size={20} strokeWidth={1.5} /></a>
              <a href="https://www.facebook.com/share/14jGqr89t5t/" target="_blank" rel="noopener noreferrer" className="hover:text-[#2C3E2D] transition duration-500"><Facebook size={20} strokeWidth={1.5} /></a>
            </div>
            <button className="md:hidden text-[#C5A059]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-serif text-[#C5A059] mb-6">Armonizacion</h1>
          <p className="text-lg text-[#555] mb-8 leading-relaxed">
            Potenciá la regeneración de tu piel y la salud de tu cabello con nuestra tecnología de bioestimulación premium. Un tratamiento que aprovecha lo mejor de ti.
          </p>
          <div className="space-y-4 text-sm uppercase tracking-widest text-[#2C2C2C]">
            <p className="flex items-center gap-3"><CheckCircle size={18} className="text-[#C5A059]"/> Inducción de colágeno natural</p>
            <p className="flex items-center gap-3"><CheckCircle size={18} className="text-[#C5A059]"/> Mejora de poros y textura</p>
            <p className="flex items-center gap-3"><CheckCircle size={18} className="text-[#C5A059]"/> Tratamiento seguro y profesional</p>
            <p className="flex items-center gap-3"><CreditCard size={18} className="text-[#C5A059]"/> Financiación en cuotas</p>
          </div>
        </div>
        <img 
          src="/inyecbtx.jpg" 
          alt="Tratamiento Plasma Rico en Plaquetas" 
          className="rounded-2xl shadow-xl w-full h-[400px] object-cover" 
        />
      </section>

      {/* CARRUSEL DE 5 TARJETAS DE TRATAMIENTOS / FOTOS REALES */}
      <section className="py-16 bg-[#F2F2F2] px-4 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <h4 className="text-[#C5A059] text-[10px] uppercase tracking-[0.4em] mb-2 font-normal">Galería de Casos</h4>
            <h2 className="text-3xl md:text-4xl font-serif uppercase font-light text-[#2C3E2D]">Resultados Reales en Tratamientos</h2>
          </div>
          
          <div className="hidden lg:block">
            <button 
              onClick={() => scroll(carruselPrpRef, 'left')} 
              className="absolute left-[-20px] top-[55%] -translate-y-1/2 z-40 bg-white/90 border border-[#D4C5A1] p-4 rounded-full text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all shadow-xl"
              aria-label="Anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll(carruselPrpRef, 'right')} 
              className="absolute right-[-20px] top-[55%] -translate-y-1/2 z-40 bg-white/90 border border-[#D4C5A1] p-4 rounded-full text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all shadow-xl"
              aria-label="Siguiente"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div ref={carruselPrpRef} className="flex overflow-x-auto gap-6 md:gap-10 pb-6 snap-x snap-mandatory scroll-smooth scrollbar-hide">
            {itemsCarrusel.map((t, idx) => (
              <div key={idx} className="min-w-[85vw] md:min-w-[400px] bg-white border border-[#D4C5A1]/30 shadow-sm snap-center group flex flex-col rounded-xl overflow-hidden">
                <div className="aspect-video overflow-hidden bg-[#F5F5F5]">
                  <img src={t.img} alt={t.subtitulo} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-[#C5A059] text-[9px] uppercase tracking-[0.2em] mb-3 block font-medium">{t.titulo}</span>
                  <h3 className="text-xl md:text-2xl font-serif mb-3 text-[#2C3E2D]">{t.subtitulo}</h3>
                  <p className="text-[#666] text-sm md:text-base leading-relaxed font-light">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRECIOS Y PROMOCIÓN */}
      <section className="py-16 bg-white px-6">
        <h2 className="text-3xl font-serif text-[#C5A059] text-center mb-12">Inversión en tu bienestar</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="p-8 border border-[#D4C5A1] rounded-xl text-center">
            <h3 className="text-xl text-[#2C2C2C] mb-4">Sesión individual</h3>
            <p className="text-3xl font-serif text-[#2C2C2C]">$75.000</p>
            <p className="text-sm text-[#999] mt-2 italic">Precio por sesión en efectivo</p>
          </div>
          <div className="p-8 bg-[#C5A059] text-white rounded-xl shadow-xl transform md:-translate-y-4">
            <span className="block text-center bg-white text-[#C5A059] text-[10px] px-3 py-1 rounded-full uppercase tracking-widest font-bold mb-4">45% OFF - PACK PROMO</span>
            <h3 className="text-xl text-center mb-4">Pack 3 Sesiones</h3>
            <p className="text-3xl font-serif text-center">$187.000</p>
            <p className="text-sm text-center opacity-90 mt-2">Efectivo o transferencia</p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 text-center px-6">
        {!showCalendar ? (
          <button 
            onClick={() => setShowCalendar(true)}
            className="border border-[#C5A059] text-[#C5A059] px-12 py-5 uppercase tracking-widest hover:bg-[#C5A059] hover:text-white transition-all duration-500"
          >
            Quiero reservar mi evaluación
          </button>
        ) : (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif text-[#C5A059] mb-10">Elegí el momento para tu transformación</h2>
            <CalendlyWidget tratamiento="Consulta - Plasma Rico en Plaquetas" />
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer id="contacto" className="bg-white py-20 px-6 md:px-12 border-t border-[#D4C5A1]/40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
          
          <div className="flex flex-col items-center md:items-start space-y-4">
            <img 
              src="/logo.jpeg" 
              alt="Extetix" 
              className="h-20 w-20 md:h-24 md:w-24 rounded-full object-cover aspect-square border border-[#C5A059]/20 shadow-sm"
            />
          </div>

          <div className="flex flex-col items-center text-center space-y-8">
            <div>
              <h4 className="text-[#C5A059] text-[10px] uppercase tracking-[0.4em] mb-4 font-medium">Horarios de Atención</h4>
              <p className="text-[#4A4A4A] text-sm font-light leading-relaxed">
                Lunes a Sábados <br />
                <span className="font-normal text-[#2C2C2C]">10:00 a 18:00</span>
              </p>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-[#C5A059] text-[10px] uppercase tracking-[0.4em] mb-4 font-medium">Turnos y Consultas</h4>
              <p className="text-[#999] text-[9px] uppercase tracking-widest mb-2">(Atención telefónica 24hs)</p>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola! Vengo de la web y quiero hacer una consulta.')}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-[#2C2C2C] hover:text-[#C5A059] transition-colors duration-500 group"
              >
                <MessageCircle size={16} className="text-[#C5A059] group-hover:scale-110 transition-transform" />
                <span className="text-base font-light tracking-wider">54 9 11 5504-4320</span>
              </a>
              <a href="mailto:extetix.oficial@gmail.com" className="block text-[#666] text-sm font-light hover:text-[#C5A059] transition-colors">
                extetix.oficial@gmail.com
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-8">
            <div>
              <h4 className="text-[#C5A059] text-[10px] uppercase tracking-[0.4em] mb-4 font-medium">Formas de Pago</h4>
              <p className="text-[#4A4A4A] text-sm font-light leading-relaxed max-w-[200px]">
                Efectivo, transferencias, <br /> tarjetas de crédito o débito.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-[#C5A059] text-[10px] uppercase tracking-[0.4em] mb-4 font-medium">Dirección</h4>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Av.+De+Mayo+618,+Ramos+Mejia,+Buenos+Aires" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex flex-col items-center md:items-end"
              >
                <div className="flex items-center gap-2 text-[#2C2C2C] group-hover:text-[#C5A059] transition-colors mb-1">
                  <span className="text-sm font-light tracking-wide italic">Av. De Mayo 618, Ramos Mejía</span>
                  <MapPin size={16} className="text-[#C5A059]" />
                </div>
                <span className="text-[9px] uppercase tracking-widest text-[#999] border-b border-[#D4C5A1]/40 pb-0.5 group-hover:text-[#C5A059] group-hover:border-[#C5A059] transition-all">
                  Ver en Google Maps
                </span>
              </a>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-[#F2F2F2] flex justify-center items-center">
         <p className="text-[#999] text-[9px] uppercase tracking-[0.3em] text-center">
            © 2026 Extetix.Medicina Estetica Intgral. Todos los derechos reservados.
          </p>
        </div>
      </footer>

    </main>
  );
}