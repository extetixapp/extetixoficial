"use client";

import { useState } from "react";
import { Instagram, Facebook, Menu, X, MessageCircle, MapPin } from "lucide-react";

export default function Page() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const WHATSAPP_NUMBER = "5491155044320";

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#2C2C2C]">

      {/* 🔝 NAVBAR */}
      <nav className="bg-white py-3 md:py-5 px-6 border-b border-[#D4C5A1] sticky top-0 z-50">
  <div className="max-w-7xl mx-auto flex justify-between items-center">
    
    <div className="flex flex-col items-start">
      <a href="/">
        <img 
          src="/logo.jpg" 
          alt="Dr. Beauty Ramos" 
          className="h-12 md:h-20 w-auto object-contain"
        />
      </a>
    </div>
    
    <div className="hidden md:flex items-center gap-10 text-[10px] uppercase tracking-[0.3em] text-brand-primary">
      <a href="/#quienes-somos" className="hover:text-[#2C3E2D] transition">Quiénes Somos</a>
      <a href="/#tratamientos" className="hover:text-[#2C3E2D] transition">Tratamientos</a>
      <a href="/#contacto" className="hover:text-[#2C3E2D] transition">Contacto</a>
    </div>
    
    <div className="flex items-center gap-5">
      <div className="hidden md:flex items-center gap-5 text-brand-primary">
        <a href="https://www.instagram.com/drbeauty.ramos" target="_blank">
          <Instagram size={20} />
        </a>
        <a href="https://www.facebook.com/drbeauty.ramos" target="_blank">
          <Facebook size={20} />
        </a>
      </div>

      <button 
        className="md:hidden text-brand-primary" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </div>
  </div>

  {isMenuOpen && (
    <div className="md:hidden bg-white border-t py-6 flex flex-col items-center gap-5 text-[10px] uppercase tracking-[0.3em] text-brand-primary">
      <a href="/#quienes-somos" onClick={() => setIsMenuOpen(false)}>Quiénes Somos</a>
      <a href="/#tratamientos" onClick={() => setIsMenuOpen(false)}>Tratamientos</a>
      <a href="/#contacto" onClick={() => setIsMenuOpen(false)}>Contacto</a>
    </div>
  )}
      </nav>

      {/* HERO */}
      <section className="py-20 px-6 text-center bg-[#F2F2F2]">
        <h1 className="text-4xl md:text-6xl font-serif text-brand-primary mb-6">
          Tratamiento de Arrugas en Ramos Mejía
        </h1>

        <p className="text-lg max-w-2xl mx-auto text-[#555]">
          Procedimiento médico estético orientado a suavizar líneas de expresión 
          y mejorar la apariencia del rostro de forma natural.
        </p>
      </section>

      {/* IMAGEN */}
      <section className="py-16 px-6 flex justify-center">
        <img
          src="/inyecbtx.jpg"
          alt="Tratamiento estético facial"
          className="max-w-md w-full rounded-xl shadow-lg"
        />
      </section>

      {/* INFO */}
      <section className="py-16 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-serif mb-6">
          ¿En qué consiste el tratamiento?
        </h2>

        <p className="text-[#666] leading-relaxed mb-6">
          Procedimiento realizado por médicos especializados que actúa 
          relajando los músculos responsables de las arrugas de expresión.
        </p>

        <p className="text-[#666] leading-relaxed">
          Se aplica en frente, entrecejo y contorno de ojos, con evaluación previa.
        </p>
      </section>

      {/* SEGUNDA IMAGEN */}
      <section className="py-10 px-6 flex justify-center">
        <img
          src="/facialesrino.jpeg"
          alt="Resultados de tratamiento facial"
          className="max-w-md w-full rounded-xl shadow"
        />
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola!%20Quiero%20consultar%20por%20tratamientos%20faciales`}
          target="_blank"
          className="border border-[#C5A059] text-[#C5A059] px-10 py-4 uppercase tracking-widest hover:bg-[#C5A059] hover:text-white transition"
        >
          Solicitar información
        </a>
      </section>

      {/* DISCLAIMER */}
      <section className="pb-16 px-6 max-w-3xl mx-auto text-center">
        <p className="text-[11px] text-[#999] leading-relaxed uppercase">
          Todos los tratamientos son realizados por profesionales médicos. 
          Los resultados pueden variar según cada paciente. 
          Se requiere evaluación previa.
        </p>
      </section>

      {/* 🔻 FOOTER */}
      <footer id="contacto" className="bg-white py-20 px-6 border-t border-[#D4C5A1]/40">

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">

          <div className="flex flex-col items-center space-y-4">
            <img src="/logo.jpg" className="h-40 object-contain" />
          </div>

          <div className="text-center space-y-6">
            <div>
              <h4 className="text-brand-primary text-xs uppercase mb-2">Horarios</h4>
              <p>Lunes a Sábados 10:00 a 18:00</p>
            </div>

            <div>
              <h4 className="text-brand-primary text-xs uppercase mb-2">Contacto</h4>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                className="flex justify-center items-center gap-2"
              >
                <MessageCircle size={16} />
                11 5504-4320
              </a>
            </div>
          </div>

          <div className="text-center space-y-6">
            <h4 className="text-brand-primary text-xs uppercase mb-2">Dirección</h4>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Av.+De+Mayo+618"
              target="_blank"
              className="flex justify-center items-center gap-2"
            >
              <MapPin size={16} />
              Av. De Mayo 618
            </a>
          </div>

        </div>

        <div className="text-center mt-10 text-xs text-[#999]">
          © 2026 Dr. Beauty Ramos
        </div>

      </footer>

    </main>
  );
}