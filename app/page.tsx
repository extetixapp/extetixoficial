"use client";
import React, { useState, useEffect, useRef } from 'react';
import { 
  Instagram, Facebook, MessageCircle, MapPin, Menu, X, 
  ShieldPlus, ShieldCheck, Medal, ChevronRight, ChevronLeft
} from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Referencias para los carruseles
  const carruselFacialRef = useRef<HTMLDivElement>(null);
  const carruselBioRef = useRef<HTMLDivElement>(null);
  const carruselCorpRef = useRef<HTMLDivElement>(null);
  const carruselGaleriaRef = useRef<HTMLDivElement>(null);

  // ✅ CONSTANTE WHATSAPP: Número unificado y verificado
  const WHATSAPP_NUMBER = "5491155044320";

  // Mensajes personalizados para cada sección
  const MENSAJE_HERO = 'Hola! Vi su página web y me gustaría recibir información sobre sus tratamientos. ¿Podrían ayudarme?';
  const MENSAJE_FACIAL = (tratamiento: string) => `Hola! Me interesa el tratamiento de ${tratamiento}. ¿Podrían darme más información?`;
  const MENSAJE_BIO = (tratamiento: string) => `Hola! Vi información sobre ${tratamiento} en su web y me gustaría saber más detalles.`;
  const MENSAJE_CORP = (tratamiento: string) => `Hola! Consulto por el tratamiento corporal de ${tratamiento}. ¿Tienen disponibilidad?`;
  const MENSAJE_NORDLYS = 'Hola! Me interesa la tecnología Nordlys que vi en su web. ¿Podrían explicarme en qué consiste?';
  const MENSAJE_HIFU = 'Hola! Vi información sobre HIFU 7D en su página. ¿Podrían contarme más sobre este tratamiento?';
  const MENSAJE_CIRUGIA_GENERAL = 'Hola! Me gustaría solicitar un turno de consulta para evaluar una cirugía plástica. ¿Cuándo podría agendar?';

  // Datos de la galería
  const galeriasResultados = [
    { tratamiento: "Rinomodelación", archivo: "/rinoext.jpeg" },
    { tratamiento: "Relleno de Labios", archivo: "/labiosex.jpeg" },
    { tratamiento: "Hilos tensores", archivo: "/hilosex.jpeg" }
  ];

  const tratamientosFaciales = [
    {
      titulo: "Tercio Superior",
      subtitulo: "Botox",
      desc: "Suaviza arrugas de expresión en frente, entrecejo y patas de gallo para una mirada descansada.",
      img: "/inyecbtx.jpg"
    },
    {
      titulo: "Tercio Medio",
      subtitulo: "Ácido Hialurónico",
      desc: "Reposición de volumen en pómulos, tratamiento de ojeras y rinomodelación sin cirugía.",
      img: "/facialesrino.jpeg"
    },
    {
      titulo: "Tercio Inferior",
      subtitulo: "Armonización",
      desc: "Perfilado de labios, surcos nasogenianos y definición del contorno mandibular y mentón.",
      img: "/facialesmenton.jpeg"
    },
    {
      titulo: "Bioestimulación",
      subtitulo: "Plasma Rico en Plaquetas",
      desc: "Tratamiento autólogo que utiliza tus propios factores de crecimiento para regenerar y dar luminosidad a la piel.",
      img: "/facialesprp.jpeg"
    },
    {
      titulo: "Efecto Lifting",
      subtitulo: "Hilos Tensores",
      desc: "Redefinición del óvalo facial y tratamiento de la flacidez mediante hilos de polidioxanona (PDO) de última generación.",
      img: "/facialeshilos.jpeg"
    }
  ];

  const bioestimuladores = [
    {
      titulo: "Colágeno Puro",
      subtitulo: "Sculptra",
      desc: "Ácido poli-L-láctico que estimula la producción de colágeno de forma profunda, devolviendo estructura, firmeza maxima tensión en rostro y cuerpo.",
      img: "/sculptra.jpeg"
    },
    {
      titulo: "Doble Acción",
      subtitulo: "HarmonyCa",
      desc: "Híbrido innovador que combina Ácido Hialurónico para volumen inmediato y Hidroxiapatita para estimular colágeno a largo plazo.",
      img: "/harmonyca.jpeg"
    },
    {
      titulo: "Calidad de Piel",
      subtitulo: "Skinvive",
      desc: "El primer inyectable de microgotas de ácido hialurónico diseñado para suavizar y mejorar la hidratación interna de la piel.",
      img: "/skinvive.jpeg"
    },
  ];

  const tratamientosCorporales = [
    {
      titulo: "Volumen y Contorno",
      subtitulo: "Relleno Corporal Elhya",
      desc: "Ácido hialurónico de alta densidad diseñado específicamente para proyectar glúteos y corregir irregularidades corporales.",
      img: "/elhya.jpeg"
    },
    {
      titulo: "Firmeza Corporal",
      subtitulo: "Hilos Tensores",
      desc: "Combate la flacidez en brazos, abdomen y muslos mediante la colocación de hilos PDO que tensan el tejido.",
      img: "/hilosc.jpeg"
    },
    {
      titulo: "Equilibrio Vital",
      subtitulo: "Chip Hormonal",
      desc: "Pellets de testosterona bioidéntica para mejorar la energía, la libido y la composición corporal de forma natural.",
      img: "/pellet.jpeg"
    },
    {
      titulo: "Celulitis y Adiposidad",
      subtitulo: "FOSFA",
      desc: "Fórmula de aplicación médica para el tratamiento de la grasa localizada y la mejora de la textura de la piel.",
      img: "/fosfa.jpeg"
    },
    {
      titulo: "Regeneración Tisular",
      subtitulo: "Plasma Rico en Plaquetas",
      desc: "Bioestimulación corporal que mejora la calidad de la piel, trata estrías y acelera la recuperación de los tejidos.",
      img: "/plasma.jpeg"
    }
  ];

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
      autoScroll(carruselFacialRef);
      autoScroll(carruselBioRef);
      autoScroll(carruselCorpRef);
      autoScroll(carruselGaleriaRef);
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
    <main className="min-h-screen bg-[#FDFBF7] text-[#2C2C2C] font-light">
      
      {/* BOTÓN WHATSAPP FLOTANTE */}
      <a 
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola! Vengo desde la web de Extetix y me gustaría realizar una consulta.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 animate-bounce"
        aria-label="WhatsApp"
      >
        <MessageCircle size={30} fill="currentColor" />
      </a>

      {/* NAVBAR - ✅ LOGO AGRANDADO */}
      <nav className="bg-white py-5 px-6 border-b border-[#D4C5A1] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
         {/* ✅ LOGO CON IMAGEN - REDONDO Y PREMIUM */}
<div className="flex flex-col items-start">
  <img 
    src="/logo.jpeg" 
    alt="Extetix" 
    className="h-16 w-16 md:h-20 md:w-20 rounded-full object-cover aspect-square border border-[#C5A059]/30 shadow-md"
  />
</div>
          
          <div className="hidden md:flex items-center gap-10 text-[10px] font-normal uppercase tracking-[0.3em] text-[#C5A059]">
            <a href="#quienes-somos" className="hover:text-[#2C3E2D] transition duration-500">Quiénes Somos</a>
            <a href="#tratamientos" className="hover:text-[#2C3E2D] transition duration-500">Nuestros Tratamientos</a>
            <a href="#contacto" className="hover:text-[#2C3E2D] transition duration-500">Contacto</a>
          </div>
          
          <div className="flex items-center gap-5">
            <div className="hidden md:flex items-center gap-5 text-[#C5A059]">
              <a href="https://www.instagram.com/extetix.original?igsh=MXUzdTMxbzZyMW1raA==" target="_blank" rel="noopener noreferrer" className="hover:text-[#2C3E2D] transition duration-500" aria-label="Instagram"><Instagram size={20} strokeWidth={1.5} /></a>
              <a href="https://www.facebook.com/share/14jGqr89t5t/" target="_blank" rel="noopener noreferrer" className="hover:text-[#2C3E2D] transition duration-500" aria-label="Facebook"><Facebook size={20} strokeWidth={1.5} /></a>
            </div>
            <button 
              className="md:hidden text-[#C5A059]" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-[#D4C5A1] py-6 flex flex-col items-center gap-5 text-[10px] font-normal uppercase tracking-[0.3em] text-[#C5A059]">
            <a href="#quienes-somos" onClick={() => setIsMenuOpen(false)}>Quiénes Somos</a>
            <a href="#tratamientos" onClick={() => setIsMenuOpen(false)}>Nuestros Tratamientos</a>
            <a href="#contacto" onClick={() => setIsMenuOpen(false)}>Contacto</a>
          </div>
        )}
      </nav>

      {/* SECCIÓN: HERO / QUIÉNES SOMOS */}
      <section id="quienes-somos" className="py-16 md:py-24 px-6 md:px-12 bg-[#F2F2F2]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 text-left order-1">
            <h3 className="text-[#C5A059] text-4xl md:text-6xl font-serif mb-8 leading-[1.1] uppercase font-light tracking-tight">
              Extetix <br/> 
              <span className="italic uppercase">Medicina Estética Integral</span> <br/> 
              
            </h3>
            <p className="text-[#4A4A4A] text-lg md:text-xl font-light leading-relaxed mb-10 tracking-wide">
              Tecnología avanzada, resultados reales.
            </p>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MENSAJE_HERO)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-white px-12 py-4 text-[10px] font-normal uppercase tracking-[0.3em] transition-all duration-700 shadow-sm"
            >
              Agendar consulta.
            </a>
          </div>

          <div className="flex-1 order-2 w-full">
            <div className="relative bg-white p-3 md:p-6 shadow-2xl border border-[#D4C5A1]/30 transition-all duration-1000">
              <img 
                src="/inyecbtx.jpg" 
                alt="Dr. Félix" 
                className="w-full h-auto object-contain grayscale-[5%] hover:grayscale-0 transition-all duration-700" 
              />
              <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-[#D4C5A1]/40 shadow-sm"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN: ENFOQUE MÉDICO */}
      {/*<section className="py-16 md:pt-24 md:pb-16 px-6 md:px-12 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 mb-20">
          <div className="flex-1 text-left order-1 md:order-2">
            <h3 className="text-[#C5A059] text-3xl md:text-5xl font-serif mb-8 leading-[1.2] uppercase font-light tracking-tight">
              Cuidamos tu belleza <br/> con un enfoque <br/> médico profesional
            </h3>
            <div className="space-y-6 text-[#4A4A4A] text-base md:text-lg font-light leading-relaxed tracking-wide">
              <p>En <span className="italic">Dr. Beauty Ramos</span>, transformamos la estética en salud.</p>
              <p>Con más de 25 años de trayectoria liderados por el prestigioso Dr. Daniel Félix, contamos con un equipo de alto nivel médico y productos premium con certificaciones FDA y ANMAT.</p>
              <p>Somos la red de medicina estética más extensa del país con más de 18 clínicas y miles de pacientes que confían en nosotros.</p>
            </div>
          </div>
          <div className="flex-1 order-2 md:order-1 w-full">
            <div className="relative aspect-[4/5] md:aspect-square bg-white p-4 shadow-xl border border-[#D4C5A1]/30">
              <img src="/medicopaciente.jpg" alt="Consulta Dr. Beauty" className="w-full h-full object-cover grayscale-[10%]" />
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto border-t border-[#D4C5A1] pt-12 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <ShieldPlus size={28} strokeWidth={1} />, label: "Excelencia Médica" },
              { icon: <ShieldCheck size={28} strokeWidth={1} />, label: "Seguridad y Calidad" },
              { icon: <Medal size={28} strokeWidth={1} />, label: "Liderazgo en Estética" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full border border-[#C5A059] flex items-center justify-center mb-4 transition-all group-hover:bg-[#C5A059] group-hover:text-white text-[#C5A059]">
                  {item.icon}
                </div>
                <span className="text-[11px] font-normal uppercase tracking-[0.3em] text-[#2C3E2D]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* MANIFIESTO */}
      <section className="py-20 bg-[#F2F2F2] px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-12 h-[1px] bg-[#C5A059] mx-auto mb-8"></div>
          <h2 className="text-[#C5A059] text-2xl md:text-4xl font-serif italic font-light leading-relaxed tracking-wide">
            En Extetix realzamos tu belleza natural, priorizando tu salud, armonía y seguridad en cada tratamiento.
          </h2>
          <div className="w-12 h-[1px] bg-[#C5A059] mx-auto mt-8"></div>
        </div>
      </section>

      {/* SECCIÓN 1: FACIALES */}
      <section id="tratamientos" className="py-24 bg-[#FDFBF7] px-4 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif uppercase font-light text-[#2C3E2D]">Tratamientos Faciales</h2>
          </div>
          <div className="hidden lg:block">
            <button 
              onClick={() => scroll(carruselFacialRef, 'left')} 
              className="absolute left-[-40px] top-[55%] -translate-y-1/2 z-40 bg-white/90 border border-[#D4C5A1] p-5 rounded-full text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all shadow-xl"
              aria-label="Anterior"
            >
              <ChevronLeft size={28} />
            </button>
            <button 
              onClick={() => scroll(carruselFacialRef, 'right')} 
              className="absolute right-[-40px] top-[55%] -translate-y-1/2 z-40 bg-white/90 border border-[#D4C5A1] p-5 rounded-full text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all shadow-xl"
              aria-label="Siguiente"
            >
              <ChevronRight size={28} />
            </button>
          </div>
          <div ref={carruselFacialRef} className="flex overflow-x-auto gap-6 md:gap-10 pb-10 snap-x snap-mandatory scroll-smooth scrollbar-hide">
            {tratamientosFaciales.map((t, idx) => (
              <div key={idx} className="min-w-[85vw] md:min-w-[400px] bg-white border border-[#D4C5A1]/30 shadow-sm snap-center group flex flex-col">
                <div className="aspect-square overflow-hidden bg-[#F5F5F5]">
                  <img src={t.img} alt={t.subtitulo} className="w-full h-full object-contain p-4 grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                </div>
                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  <span className="text-[#C5A059] text-[9px] uppercase tracking-[0.2em] mb-3 block font-medium">{t.titulo}</span>
                  <h3 className="text-xl md:text-3xl font-serif mb-5 text-[#2C3E2D]">{t.subtitulo}</h3>
                  <p className="text-[#666] text-sm md:text-base leading-relaxed mb-10 font-light flex-grow">{t.desc}</p>
                  <a 
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MENSAJE_FACIAL(t.subtitulo))}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center border border-[#C5A059] py-5 text-[10px] uppercase tracking-[0.3em] text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all duration-700 font-medium"
                  >
                    Consultar ahora
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: BIOESTIMULADORES */}
      <section id="bioestimuladores" className="py-24 bg-white px-4 md:px-12 relative overflow-hidden border-t border-[#D4C5A1]/20">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h4 className="text-[#C5A059] text-[10px] uppercase tracking-[0.4em] mb-4 font-normal">Regeneración Celular</h4>
            <h2 className="text-3xl md:text-5xl font-serif uppercase font-light text-[#2C3E2D]">Bioestimuladores</h2>
          </div>
          <div className="hidden lg:block">
            <button 
              onClick={() => scroll(carruselBioRef, 'left')} 
              className="absolute left-[-40px] top-[55%] -translate-y-1/2 z-40 bg-white/90 border border-[#D4C5A1] p-5 rounded-full text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all shadow-xl"
              aria-label="Anterior"
            >
              <ChevronLeft size={28} />
            </button>
            <button 
              onClick={() => scroll(carruselBioRef, 'right')} 
              className="absolute right-[-40px] top-[55%] -translate-y-1/2 z-40 bg-white/90 border border-[#D4C5A1] p-5 rounded-full text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all shadow-xl"
              aria-label="Siguiente"
            >
              <ChevronRight size={28} />
            </button>
          </div>
          <div ref={carruselBioRef} className="flex overflow-x-auto gap-6 md:gap-10 pb-10 snap-x snap-mandatory scroll-smooth scrollbar-hide">
            {bioestimuladores.map((t, idx) => (
              <div key={idx} className="min-w-[85vw] md:min-w-[400px] bg-[#FDFBF7] border border-[#D4C5A1]/30 shadow-sm snap-center group flex flex-col">
                <div className="aspect-square overflow-hidden bg-[#F5F5F5]">
                  <img src={t.img} alt={t.subtitulo} className="w-full h-full object-contain p-6 grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                </div>
                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  <span className="text-[#C5A059] text-[9px] uppercase tracking-[0.2em] mb-3 block font-medium">{t.titulo}</span>
                  <h3 className="text-xl md:text-3xl font-serif mb-5 text-[#2C3E2D]">{t.subtitulo}</h3>
                  <p className="text-[#666] text-sm md:text-base leading-relaxed mb-10 font-light flex-grow">{t.desc}</p>
                  <a 
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MENSAJE_BIO(t.subtitulo))}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center border border-[#C5A059] py-5 text-[10px] uppercase tracking-[0.3em] text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all duration-700 font-medium"
                  >
                    Consultar ahora
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: CORPORALES */}
      <section id="corporales" className="py-24 bg-[#FDFBF7] px-4 md:px-12 relative overflow-hidden border-t border-[#D4C5A1]/20">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h4 className="text-[#C5A059] text-[10px] uppercase tracking-[0.4em] mb-4 font-normal">Modelado y Bienestar</h4>
            <h2 className="text-3xl md:text-5xl font-serif uppercase font-light text-[#2C3E2D]">Tratamientos Corporales</h2>
          </div>
          <div className="hidden lg:block">
            <button 
              onClick={() => scroll(carruselCorpRef, 'left')} 
              className="absolute left-[-40px] top-[55%] -translate-y-1/2 z-40 bg-white/90 border border-[#D4C5A1] p-5 rounded-full text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all shadow-xl"
              aria-label="Anterior"
            >
              <ChevronLeft size={28} />
            </button>
            <button 
              onClick={() => scroll(carruselCorpRef, 'right')} 
              className="absolute right-[-40px] top-[55%] -translate-y-1/2 z-40 bg-white/90 border border-[#D4C5A1] p-5 rounded-full text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all shadow-xl"
              aria-label="Siguiente"
            >
              <ChevronRight size={28} />
            </button>
          </div>
          <div ref={carruselCorpRef} className="flex overflow-x-auto gap-6 md:gap-10 pb-10 snap-x snap-mandatory scroll-smooth scrollbar-hide">
            {tratamientosCorporales.map((t, idx) => (
              <div key={idx} className="min-w-[85vw] md:min-w-[400px] bg-white border border-[#D4C5A1]/30 shadow-sm snap-center group flex flex-col">
                <div className="aspect-square overflow-hidden bg-[#F5F5F5]">
                  <img src={t.img} alt={t.subtitulo} className="w-full h-full object-contain p-4 grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                </div>
                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  <span className="text-[#C5A059] text-[9px] uppercase tracking-[0.2em] mb-3 block font-medium">{t.titulo}</span>
                  <h3 className="text-xl md:text-3xl font-serif mb-5 text-[#2C3E2D]">{t.subtitulo}</h3>
                  <p className="text-[#666] text-sm md:text-base leading-relaxed mb-10 font-light flex-grow">{t.desc}</p>
                  <a 
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MENSAJE_CORP(t.subtitulo))}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center border border-[#C5A059] py-5 text-[10px] uppercase tracking-[0.3em] text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all duration-700 font-medium"
                  >
                    Solicitar información
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* SECCIÓN: APARATOLOGÍA */}
     <section id="aparatologia" className="py-24 bg-white px-6 md:px-12 border-t border-[#D4C5A1]/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h4 className="text-[#C5A059] text-[10px] uppercase tracking-[0.4em] mb-4 font-normal">Alta Tecnología Médica</h4>
            <h2 className="text-3xl md:text-5xl font-serif uppercase font-light text-[#2C3E2D]">Aparatología Premium</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group bg-[#FDFBF7] p-4 border border-[#D4C5A1]/30 hover:shadow-xl transition-all duration-500">
              <div className="aspect-[3/4] overflow-hidden mb-8">
                <img 
                  src="/nordlys.jpeg" 
                  alt="Nordlys" 
                  className="w-full h-full object-cover object-center grayscale-[10%] group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="px-4 pb-4 text-center">
                <h3 className="text-[#C5A059] text-2xl font-serif mb-4 uppercase tracking-wider">Nordlys</h3>
                <p className="text-[#666] text-sm leading-relaxed mb-6 font-light">
                  Plataforma multi-tecnología líder que combina Láser e IPL para el tratamiento de manchas, rosácea, lesiones vasculares y rejuvenecimiento cutáneo profundo.
                </p>
                <a 
                  href={`https://wa.me/ ${WHATSAPP_NUMBER}?text=${encodeURIComponent(MENSAJE_NORDLYS)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[10px] uppercase tracking-[0.2em] border-b border-[#C5A059] pb-1 hover:text-[#C5A059] transition-colors"
                >
                  Más información
                </a>
              </div>
            </div>
            <div className="group bg-[#FDFBF7] p-4 border border-[#D4C5A1]/30 hover:shadow-xl transition-all duration-500">
              <div className="aspect-[3/4] overflow-hidden mb-8">
                <img 
                  src="/hifu.jpg" 
                  alt="HIFU" 
                  className="w-full h-full object-cover object-center grayscale-[10%] group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="px-4 pb-4 text-center">
                <h3 className="text-[#C5A059] text-2xl font-serif mb-4 uppercase tracking-wider">HIFU 25D Liposonix</h3>
                <p className="text-[#666] text-sm leading-relaxed mb-6 font-light">
                  Ultrasonido focalizado de alta intensidad. Genera un efecto lifting sin cirugía, tratando la flacidez facial y corporal mediante la estimulación de colágeno.
                </p>
                <a 
                  href={`https://wa.me/ ${WHATSAPP_NUMBER}?text=${encodeURIComponent(MENSAJE_HIFU)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[10px] uppercase tracking-[0.2em] border-b border-[#C5A059] pb-1 hover:text-[#C5A059] transition-colors"
                >
                  Más información
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN: CIRUGÍA PLÁSTICA */}
      <section id="cirugia" className="py-24 bg-[#F2F2F2] px-6 md:px-12 border-t border-[#D4C5A1]/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 w-full order-2 md:order-1">
            <div className="relative aspect-[4/5] bg-white p-4 shadow-2xl border border-[#D4C5A1]/30">
              <img 
                src="/plastica.jpg" 
                alt="Cirugía Plástica" 
                className="w-full h-full object-cover grayscale-[20%]"
              />
              {/*<div className="absolute -bottom-6 -right-6 bg-[#C5A059] text-white p-8 hidden md:block shadow-xl">
                <p className="text-[10px] uppercase tracking-[0.4em] mb-2">Trayectoria</p>
                <p className="text-3xl font-serif">+25 Años</p>
              </div>*/}
            </div>
          </div>
          <div className="flex-1 text-left order-1 md:order-2">
            <h4 className="text-[#C5A059] text-[10px] uppercase tracking-[0.4em] mb-4 font-normal">Excelencia Quirúrgica</h4>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 text-[#2C3E2D] uppercase leading-tight">Cirugía <br /> <span className="italic">Plástica</span></h2>
           {/* <div className="space-y-6 text-[#4A4A4A] text-base md:text-lg font-light leading-relaxed mb-10">
              <p>En <span className="font-normal text-[#2C3E2D]">Dr. Beauty</span> ponemos a tu alcance lo último en cirugías plásticas, respaldados por un equipo médico altamente especializado.</p>
              <p>Nuestro compromiso es brindarte seguridad, confianza y los resultados que deseás. Todas las intervenciones son realizadas por el <strong>Dr. Daniel Félix (M.N. 85381)</strong> junto a su equipo, con más de 25 años de trayectoria en el área.</p>
            </div>*/}
            <div className="space-y-4 mb-10">
              {[
                { name: "Liposuccion", msg: 'Hola! Me gustaría consultar por Liposuccion.' },
                { name: "MELA", msg: 'Hola! Me gustaría recibir información sobre MELA.' },
                { name: "Aumento mamario", msg: 'Hola! Solicito información sobre Aumento mamario.' },
                { name: "Bichectomia", msg: 'Hola! Me gustaria recibir sobre Bichectomia.' },
               { name: "Rinoplastia", msg: 'Hola! Deseo consultar por la Cirugia de rinoplastia.' },
               { name: "Blefaroplastia", msg: 'Hola! Deseo consultar por la Cirugia de Blefaroplastia.' },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#D4C5A1]/30 py-4 group">
                  <span className="text-[#2C2C2C] text-sm md:text-base font-light mb-2 md:mb-0 group-hover:translate-x-2 transition-transform duration-300">{item.name}</span>
                  <a 
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(item.msg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[9px] uppercase tracking-[0.2em] text-[#C5A059] font-medium flex items-center gap-2 hover:text-[#2C3E2D] transition-colors"
                  >
                    Solicitar turno <ChevronRight size={12} />
                  </a>
                </div>
              ))}
            </div>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MENSAJE_CIRUGIA_GENERAL)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full md:w-auto border border-[#2C3E2D] text-[#2C3E2D] hover:bg-[#2C3E2D] hover:text-white px-12 py-5 text-[10px] font-normal uppercase tracking-[0.3em] transition-all duration-500 text-center"
            >
              Solicitar turno general
            </a>
          </div>
        </div>
      </section>

      {/* SECCIÓN: GALERÍA ANTES Y DESPUÉS */}
      <section className="py-24 bg-[#FDFBF7] px-4 md:px-12 relative overflow-hidden border-t border-[#D4C5A1]/20">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h4 className="text-[#C5A059] text-[10px] uppercase tracking-[0.4em] mb-4 font-normal">Galería de Casos</h4>
            <h2 className="text-3xl md:text-5xl font-serif uppercase font-light text-[#2C3E2D] mb-6">
              Historias reales,<br/> resultados confiables
            </h2>
            <div className="w-12 h-[1px] bg-[#C5A059] mx-auto"></div>
          </div>

          <div className="hidden lg:block">
            <button
              onClick={() => scroll(carruselGaleriaRef, 'left')}
              className="absolute left-[-40px] top-[55%] -translate-y-1/2 z-40 bg-white/90 border border-[#D4C5A1] p-5 rounded-full text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all shadow-xl"
              aria-label="Anterior"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={() => scroll(carruselGaleriaRef, 'right')}
              className="absolute right-[-40px] top-[55%] -translate-y-1/2 z-40 bg-white/90 border border-[#D4C5A1] p-5 rounded-full text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all shadow-xl"
              aria-label="Siguiente"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          <div
            ref={carruselGaleriaRef}
            className="flex overflow-x-auto gap-6 md:gap-8 pb-10 snap-x snap-mandatory scroll-smooth scrollbar-hide"
          >
            {galeriasResultados.map((item, idx) => (
              <div
                key={idx}
                className="min-w-[85vw] md:min-w-[450px] bg-white border border-[#D4C5A1]/20 p-3 shadow-sm snap-center group"
              >
                <div className="relative overflow-hidden aspect-[4/3] bg-[#F2F2F2]">
                  <img 
                    src={item.archivo} 
                    alt={item.tratamiento} 
                    className="w-full h-full object-contain" 
                  />
                </div>
                <div className="py-6 px-2 text-center">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-medium">
                    {item.tratamiento}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#666] mb-8">Ver más casos clínicos reales en nuestras redes</p>
            <div className="flex justify-center items-center">
              <a 
                href="https://www.instagram.com/extetix.original?igsh=MXUzdTMxbzZyMW1raA==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-[#C5A059] hover:text-[#2C2C2C] transition-all group"
              >
                <div className="p-3 border border-[#C5A059] rounded-full group-hover:bg-[#C5A059] group-hover:text-white transition-all">
                  <Instagram size={24} strokeWidth={1} />
                </div>
                <span className="text-[10px] uppercase tracking-[0.4em] font-medium">@extetix.oficial</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER - ✅ LOGO AGRANDADO */}
      <footer id="contacto" className="bg-white py-20 px-6 md:px-12 border-t border-[#D4C5A1]/40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
          
        {/* ✅ COLUMNA 1: Logo imagen - REDONDO, REFINADO Y MINIMALISTA */}
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