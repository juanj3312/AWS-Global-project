import React from "react";

export default function Features() {
  return (
    <section id="features" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6">
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

          {/* Contenido de texto a la derecha */}
          <div className="space-y-6">
            <h2 className="font-semibold text-gray-900 leading-tight whitespace-nowrap" style={{ fontSize: '40px' }}>
              Featured AWS Usergroup
            </h2>
            
            <h3 className="font-semibold text-gray-800" style={{ fontSize: '30px' }}>
              AWS UG Vancouver
            </h3>
            
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              AWS User Group Vancouver brings together cloud enthusiasts, developers, and tech professionals in the Vancouver area to learn, share, and collaborate on all things AWS. With monthly meetups, workshops, and networking events, the community provides a space for members of all skill levels to explore AWS services, exchange ideas, and grow their cloud expertise.
            </p>

            <a 
              href="https://awsusergroups.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-[#ff9900] hover:bg-[#e68a00] text-black font-semibold rounded-full transition-all duration-200 text-sm"
            >
              Explore Community
            </a>
          </div>
        </div>

        {/* Nueva sección Build Genie Cloud Solution */}
        <div className="bg-white rounded-3xl shadow-lg p-12 md:p-16" style={{ marginTop: '250px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contenido de texto a la izquierda */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight" style={{ fontWeight: 600 }}>
                Build Genie Cloud Solution
              </h2>
              
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Meet your new cloud sidekick — the Build Genie, built by the Vancouver AWS community. Describe what you want to build in the cloud, and it instantly explains the architecture, the reasoning behind it, and generates Terraform code ready to deploy.
              </p>

              <button className="px-8 py-3 bg-[#ff9900] hover:bg-[#e68a00] text-black font-semibold rounded-full transition-all duration-200 text-sm">
                Use It for Free Here
              </button>
            </div>

            {/* Logo a la derecha */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <img 
                  src="/build-genie-logo.png" 
                  alt="Build Genie Cloud Solution" 
                  className="w-3/4 h-auto mx-auto lg:mx-0 lg:ml-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
