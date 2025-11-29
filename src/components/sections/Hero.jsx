import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col">
      {/* Fondo con imagen */}
      <div className="absolute inset-0">
        <img 
          src="/hero-bg.jpg" 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
        {/* Overlay oscuro para mejorar legibilidad del texto */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative flex-1 flex items-center justify-end px-4 sm:px-6 py-32 sm:py-40 md:py-48 lg:py-56">
        <div className="max-w-2xl mr-8 md:mr-16 lg:mr-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[55px] font-semibold text-white leading-[1.1] mb-1 text-justify" style={{ fontWeight: 600 }}>
            Empowering AWS
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[55px] font-semibold leading-[1.1] mb-6 md:mb-8 text-justify" style={{ fontWeight: 600 }}>
            <span className="text-white">User Groups </span><span className="text-[#ff9900]">Worldwide</span>
          </h1>
          
          <p className="text-[18px] text-white mb-6 md:mb-8 font-normal text-justify">
            Tools, guidance, and community support for leaders everywhere.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch justify-stretch">
            <button className="px-6 py-3 bg-[#ff9900] hover:bg-[#e68a00] text-black rounded-full transition-all duration-200 text-[18px]" style={{ fontWeight: 400 }}>
              Discover AWS User Groups →
            </button>
            <button className="px-6 py-3 bg-transparent hover:bg-white/10 text-white rounded-full transition-all duration-200 text-[18px]" style={{ fontWeight: 400 }}>
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
          <div className="flex items-center gap-8 md:gap-12 px-8 whitespace-nowrap">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-black">✱</span>
              <span className="text-sm md:text-base text-black">Lead Globally</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-black">✱</span>
              <span className="text-sm md:text-base text-black">Connect Communities</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-black">✱</span>
              <span className="text-sm md:text-base text-black">Grow Together</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-black">✱</span>
              <span className="text-sm md:text-base text-black">Cloud Innovation</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-black">✱</span>
              <span className="text-sm md:text-base text-black">Share Knowledge</span>
            </div>
          </div>
          {/* Duplicado para loop infinito */}
          <div className="flex items-center gap-8 md:gap-12 px-8 whitespace-nowrap">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-black">✱</span>
              <span className="text-sm md:text-base text-black">Lead Globally</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-black">✱</span>
              <span className="text-sm md:text-base text-black">Connect Communities</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-black">✱</span>
              <span className="text-sm md:text-base text-black">Grow Together</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-black">✱</span>
              <span className="text-sm md:text-base text-black">Cloud Innovation</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-black">✱</span>
              <span className="text-sm md:text-base text-black">Share Knowledge</span>
            </div>
          </div>
          {/* Tercera copia */}
          <div className="flex items-center gap-8 md:gap-12 px-8 whitespace-nowrap">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-black">✱</span>
              <span className="text-sm md:text-base text-black">Lead Globally</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-black">✱</span>
              <span className="text-sm md:text-base text-black">Connect Communities</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-black">✱</span>
              <span className="text-sm md:text-base text-black">Grow Together</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-black">✱</span>
              <span className="text-sm md:text-base text-black">Cloud Innovation</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-black">✱</span>
              <span className="text-sm md:text-base text-black">Share Knowledge</span>
            </div>
          </div>
          {/* Cuarta copia */}
          <div className="flex items-center gap-8 md:gap-12 px-8 whitespace-nowrap">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-black">✱</span>
              <span className="text-sm md:text-base text-black">Lead Globally</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-black">✱</span>
              <span className="text-sm md:text-base text-black">Connect Communities</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-black">✱</span>
              <span className="text-sm md:text-base text-black">Grow Together</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-black">✱</span>
              <span className="text-sm md:text-base text-black">Cloud Innovation</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-black">✱</span>
              <span className="text-sm md:text-base text-black">Share Knowledge</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Discover AWS User Groups */}
      <div className="relative py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contenido de texto a la izquierda */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-[35px] font-semibold text-gray-900 leading-tight" style={{ fontWeight: 600, fontFamily: 'Source Sans Pro, sans-serif' }}>
                Discover AWS User Groups<br />
                Around the World
              </h2>
              <a 
                href="https://builder.aws.com/community/user-groups" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-[#ff9900] hover:bg-[#e68a00] text-black font-normal rounded-full transition-all duration-200 text-sm"
              >
                Explore AWS UG
              </a>
            </div>

            {/* Mapa del mundo a la derecha */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-4 md:p-6 relative overflow-hidden min-h-[500px] flex items-center justify-center shadow-lg">
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
