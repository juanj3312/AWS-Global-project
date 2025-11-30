import React, { useState } from "react";

export default function Hero() {
  const [hoveredButton1, setHoveredButton1] = useState(false);
  const [hoveredButton2, setHoveredButton2] = useState(false);
  const [hoveredButton3, setHoveredButton3] = useState(false);

  return (
    <section id="hero" className="relative flex flex-col">
      {/* Contenido principal con fondo de imagen */}
      <div className="relative flex items-center justify-center px-4 sm:px-6 py-32 sm:py-40 md:py-48 lg:py-56 min-h-[600px]">
        {/* Fondo con imagen solo en esta sección */}
        <div className="absolute inset-0">
          <img 
            src="/hero-bg.jpg" 
            alt="Hero Background" 
            className="w-full h-full object-cover object-center"
          />
          {/* Overlay oscuro para mejorar legibilidad del texto */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Contenido */}
        <div className="relative max-w-2xl z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[55px] text-white leading-[1.1] mb-1 text-justify" style={{ fontWeight: 500, fontFamily: 'Source Sans Pro, sans-serif' }}>
            Empowering AWS
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[55px] leading-[1.1] mb-6 md:mb-8 text-justify" style={{ fontWeight: 500, fontFamily: 'Source Sans Pro, sans-serif' }}>
            <span className="text-white">User Groups </span><span className="text-[#ff9900]">Worldwide</span>
          </h1>
          
          <p className="text-[17px] text-white mb-6 md:mb-8 text-justify">
            Tools, guidance, and community support for leaders everywhere.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch justify-stretch">
            <a 
              href="https://builder.aws.com/community/user-groups" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 bg-[#ff9900] hover:bg-[#e68a00] text-center rounded-full transition-all duration-200 text-[17px] inline-flex items-center justify-center gap-2" 
              style={{ fontWeight: 400, color: '#000000E5' }}
              onMouseEnter={() => setHoveredButton1(true)}
              onMouseLeave={() => setHoveredButton1(false)}
            >
              <span>Discover AWS User Groups</span>
              <span className={`transition-all duration-300 ${hoveredButton1 ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`}>
                →
              </span>
            </a>
            <button className="px-6 py-3 bg-transparent text-white rounded-full transition-all duration-200 text-[17px] hover:underline hover:underline-offset-4" style={{ fontWeight: 400 }}>
              Access Leader Resources
            </button>
          </div>
        </div>
      </div>

      {/* Barra inferior naranja */}
      <div className="relative bg-[#ff9900] py-4 md:py-5 overflow-hidden">
        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        `}</style>
        <div className="flex animate-scroll">
          <div className="flex items-center px-4 whitespace-nowrap">
            <span className="text-2xl text-black mx-6">✱</span>
            <span className="text-[17px] text-black mx-6" style={{ color: '#000000E5' }}>Lead Globally</span>
            <span className="text-2xl text-black mx-6">✱</span>
            <span className="text-[17px] text-black mx-6" style={{ color: '#000000E5' }}>Connect Communities</span>
            <span className="text-2xl text-black mx-6">✱</span>
            <span className="text-[17px] text-black mx-6" style={{ color: '#000000E5' }}>Grow Together</span>
            <span className="text-2xl text-black mx-6">✱</span>
            <span className="text-[17px] text-black mx-6" style={{ color: '#000000E5' }}>Cloud Innovation</span>
            <span className="text-2xl text-black mx-6">✱</span>
            <span className="text-[17px] text-black mx-6" style={{ color: '#000000E5' }}>Share Knowledge</span>
          </div>
          {/* Duplicado para loop infinito */}
          <div className="flex items-center px-4 whitespace-nowrap">
            <span className="text-2xl text-black mx-6">✱</span>
            <span className="text-[17px] text-black mx-6" style={{ color: '#000000E5' }}>Lead Globally</span>
            <span className="text-2xl text-black mx-6">✱</span>
            <span className="text-[17px] text-black mx-6" style={{ color: '#000000E5' }}>Connect Communities</span>
            <span className="text-2xl text-black mx-6">✱</span>
            <span className="text-[17px] text-black mx-6" style={{ color: '#000000E5' }}>Grow Together</span>
            <span className="text-2xl text-black mx-6">✱</span>
            <span className="text-[17px] text-black mx-6" style={{ color: '#000000E5' }}>Cloud Innovation</span>
            <span className="text-2xl text-black mx-6">✱</span>
            <span className="text-[17px] text-black mx-6" style={{ color: '#000000E5' }}>Share Knowledge</span>
          </div>
        </div>
      </div>

      {/* Sección de Discover AWS User Groups */}
      <div className="relative py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contenido de texto a la izquierda */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-[35px] leading-tight" style={{ fontWeight: 500, fontFamily: 'Source Sans Pro, sans-serif', color: '#1C1C1C' }}>
                Discover AWS User Groups<br />
                Around the World
              </h2>
              <a 
                href="https://builder.aws.com/community/user-groups" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#ff9900] hover:bg-[#e68a00] rounded-full transition-all duration-200 text-[17px]"
                style={{ fontWeight: 400, color: '#000000E5' }}
                onMouseEnter={() => setHoveredButton2(true)}
                onMouseLeave={() => setHoveredButton2(false)}
              >
                <span>Explore AWS UG</span>
                <span className={`transition-all duration-300 ${hoveredButton2 ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`}>
                  →
                </span>
              </a>
            </div>

            {/* Mapa del mundo a la derecha */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-4 md:p-6 relative overflow-hidden min-h-[500px] flex items-center justify-center">
                <img 
                  src="/world-map.jpg" 
                  alt="World Map" 
                  className="w-full h-auto object-contain scale-110"
                  style={{ filter: 'contrast(1.2)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
