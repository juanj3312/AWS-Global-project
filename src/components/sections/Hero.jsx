import React, { useState } from "react";

export default function Hero() {
  const [hoveredButton1, setHoveredButton1] = useState(false);
  const [hoveredButton2, setHoveredButton2] = useState(false);
  const [hoveredButton3, setHoveredButton3] = useState(false);

  return (
    <section id="hero" className="relative flex flex-col cursor-pointer bg-white">
      {/* Contenido principal con fondo de imagen */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center py-20 sm:py-32 md:py-40 lg:py-56 min-h-[500px]">
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
        <div className="relative w-full max-w-md z-10 text-center mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] text-white leading-[1.1] mb-1" style={{ fontWeight: 600, fontFamily: 'Source Sans Pro, sans-serif' }}>
            Empowering AWS
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] leading-[1.1] mb-6 md:mb-8">
            <span className="text-white">User Groups </span><span className="text-[#ff9900]">Worldwide</span>
          </h1>
          <p className="text-[16px] text-white mb-6 md:mb-8">
            Tools, guidance, and community support for leaders everywhere.
          </p>
          <div className="flex flex-col gap-3 w-full mb-10">
            <a 
              href="https://builder.aws.com/community/user-groups" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full px-6 py-3 bg-[#ff9900] hover:bg-[#e68a00] text-center rounded-full transition-all duration-200 text-[17px] flex items-center justify-center gap-2" 
              style={{ fontWeight: 400, color: '#000000E5' }}
              onMouseEnter={() => setHoveredButton1(true)}
              onMouseLeave={() => setHoveredButton1(false)}
            >
              <span>Discover AWS User Groups</span>
              <span className={`transition-all duration-300 ${hoveredButton1 ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`}>
                →
              </span>
            </a>
            <button 
              className="w-full px-6 py-3 bg-transparent text-white rounded-full transition-all duration-200 text-[17px] flex items-center justify-center gap-2 border border-white" 
              style={{ fontWeight: 400 }}
              onMouseEnter={() => setHoveredButton3(true)}
              onMouseLeave={() => setHoveredButton3(false)}
            >
              <span>Access Leader Resources</span>
              <span className={`transition-all duration-300 ${hoveredButton3 ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`}>
                →
              </span>
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
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center px-4 whitespace-nowrap">
              <span className="mx-6 inline-block align-middle" style={{ width: 24, height: 24 }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -10 110 135" width="24" height="24" fill="currentColor">
                  <path d="m58 50 25.176 14.535c1.9141 1.1055 2.5703 3.5508 1.4648 5.4648s-3.5508 2.5703-5.4648 1.4648l-25.176-14.535v29.07c0 2.2109-1.7891 4-4 4s-4-1.7891-4-4v-29.07l-25.176 14.535c-1.9141 1.1055-4.3594 0.44922-5.4648-1.4648s-0.44922-4.3594 1.4648-5.4648l25.176-14.535-25.176-14.535c-1.9141-1.1055-2.5703-3.5508-1.4648-5.4648s3.5508-2.5703 5.4648-1.4648l25.176 14.535v-29.07c0-2.2109 1.7891-4 4-4s4 1.7891 4 4v29.07l25.176-14.535c1.9141-1.1055 4.3594-0.44922 5.4648 1.4648s0.44922 4.3594-1.4648 5.4648z"/>
                </svg>
              </span>
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
          ))}
        </div>
      </div>

      {/* Sección de Discover AWS User Groups */}
      <div className="relative py-12 sm:py-16 md:py-20 bg-[#F5F5F5]">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-16 lg:p-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Contenido de texto a la izquierda */}
              <div className="space-y-4">
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
                <div className="relative overflow-hidden flex items-center justify-center">
                  <img 
                    src="/world-map.jpg" 
                    alt="World Map" 
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
