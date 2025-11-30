import React, { useState } from "react";

export default function Features() {
  const [hoveredButton1, setHoveredButton1] = useState(false);
  const [hoveredButton2, setHoveredButton2] = useState(false);

  return (
    <section id="features" className="py-16 sm:py-24 md:py-32 bg-white cursor-pointer">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        {/* Sección con fondo blanco, solo el texto en cuadro gris */}
        <div id="featured" className="rounded-3xl p-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Imágenes a la izquierda */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              {/* Primera imagen - pantalla con Community Day */}
              <div className="flex-1">
                <div className="bg-gray-800 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl h-[300px] sm:h-[400px] md:h-[500px] relative">
                  <img 
                    src="/community-day.jpg" 
                    alt="Community Day Event" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Segunda imagen - personas en networking */}
              <div className="flex-1">
                <div className="bg-gray-300 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl h-[300px] sm:h-[400px] md:h-[500px] relative">
                  <img 
                    src="/networking-event.jpg" 
                    alt="Networking Event" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Contenido de texto a la derecha en cuadro gris */}
            <div className="bg-[#F5F5F5] rounded-3xl p-8 sm:p-12 md:p-16 lg:p-20">
              <h2 className="text-2xl sm:text-3xl lg:text-[35px] leading-tight" style={{ fontWeight: 500, fontFamily: 'Source Sans Pro, sans-serif', color: '#1C1C1C' }}>
                Featured AWS Usergroup
              </h2>
              <h3 className="text-xl sm:text-2xl lg:text-[30px]" style={{ fontWeight: 500, fontFamily: 'Source Sans Pro, sans-serif', color: '#1C1C1C' }}>
                AWS UG Vancouver
              </h3>
              <p className="text-[17px] leading-relaxed max-w-[800px] line-clamp-4" style={{ color: '#000000E5' }}>
                AWS User Group Vancouver brings together cloud enthusiasts, developers, and tech professionals in the Vancouver area to learn, share, and collaborate on all things AWS. With monthly meetups, workshops, and networking events, the community provides a space for members of all skill levels to explore AWS services, exchange ideas, and grow their cloud expertise.
              </p>
              <a 
                href="https://awsusergroups.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#ff9900] hover:bg-[#e68a00] rounded-full transition-all duration-200 text-[17px] mt-6"
                style={{ fontWeight: 400, color: '#000000E5' }}
                onMouseEnter={() => setHoveredButton1(true)}
                onMouseLeave={() => setHoveredButton1(false)}
              >
                <span>Explore Community</span>
                <span className={`transition-all duration-300 ${hoveredButton1 ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`}>
                  →
                </span>
              </a>
            </div>
          </div>
        </div>


        {/* Nueva sección Build Genie Cloud Solution */}
        <div id="build" className="bg-[#F5F5F5] w-full py-20 sm:py-28 md:py-32 mx-0">
          <div className="w-full">
            <div className="w-full p-6 sm:p-10 md:p-14 lg:p-16 my-9 sm:my-12 md:my-15 lg:my-18">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 items-center">
                {/* Contenido de texto a la izquierda */}
                <div className="space-y-6">
                  <h2 className="leading-tight" style={{ fontWeight: 500, fontFamily: 'Source Sans Pro, sans-serif', color: '#1C1C1C', fontSize: '35px' }}>
                    Build Genie Cloud Solution
                  </h2>
                  <p className="text-[17px] leading-relaxed max-w-[800px]" style={{ color: '#000000E5' }}>
                    Meet your new cloud sidekick — the Build Genie, built by the Vancouver AWS community. Describe what you want to build in the cloud, and it instantly explains the architecture, the reasoning behind it, and generates Terraform code ready to deploy.
                  </p>
                  <a 
                    href="https://partyrock.aws/u/Cloudaws/mt8_7y8ZO/Cloud-Solution-Build-Genie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-[#ff9900] hover:bg-[#e68a00] rounded-full transition-all duration-200 text-[17px]" 
                    style={{ fontWeight: 400, color: '#000000E5' }}
                    onMouseEnter={() => setHoveredButton2(true)}
                    onMouseLeave={() => setHoveredButton2(false)}
                  >
                    <span>Use It for Free Here</span>
                    <span className={`transition-all duration-300 ${hoveredButton2 ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`}>
                      →
                    </span>
                  </a>
                </div>
                {/* Logo a la derecha */}
                <div className="flex justify-center lg:justify-start">
                  <div className="relative w-full max-w-[180px] md:max-w-[200px] lg:max-w-[220px] ml-0 lg:ml-4">
                    <img 
                      src="/build-genie-logo.png" 
                      alt="Build Genie Cloud Solution" 
                      className="w-full h-auto mx-auto lg:mx-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slider animado naranja debajo de la imagen de Build Genie */}
        <div className="relative bg-[#ff9900] py-4 md:py-5 overflow-hidden mb-[25px] w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]" style={{ position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', width: '100vw' }}>
          <style>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-scroll { animation: scroll 30s linear infinite; }
          `}</style>
          <div className="flex animate-scroll">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center px-4 whitespace-nowrap">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
