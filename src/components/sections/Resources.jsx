import React, { useState } from "react";

export default function Resources() {
  const [activeCard, setActiveCard] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const resources = [
    {
      title: ["AWS Community", "Day"],
      description: "A complete guide to organizing and hosting an AWS Community Day event."
    },
    {
      title: ["Sponsor Outreach", "Email Template"],
      description: "A professional email template for reaching out to potential event sponsors."
    },
    {
      title: ["Sponsorship Deck", "Outline"],
      description: "An outline to help you create a compelling sponsorship proposal."
    },
    {
      title: ["Code of Conduct", "Template"],
      description: "Set clear behavior expectations with this code of conduct template."
    },
    {
      title: ["Volunteer Onboarding", "Form"],
      description: "A simple form to onboard and prepare your event volunteers."
    },
    {
      title: ["Submit Your", "Resources"],
      description: "Share your event resources and photos with the community (remember to watermark)."
    }
  ];

  return (
    <section id="resources" className="py-12 sm:py-16 md:py-20 bg-gray-50 cursor-pointer">
      {/* Slider animado naranja arriba del título */}
      <div className="relative bg-[#ff9900] py-4 md:py-5 overflow-hidden mb-[25px]">
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll { animation: scroll 30s linear infinite; }
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
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-[35px] mb-3" style={{ fontWeight: 500, fontFamily: 'Source Sans Pro, sans-serif', color: '#1C1C1C', marginTop: '100px' }}>
            Resources for Leaders
          </h2>
          <p className="text-[17px] mt-12" style={{ color: '#000000E5' }}>
            These resources are here to help community leaders plan and run successful events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-[200px]">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="rounded-2xl p-8 transition-all duration-300 bg-white hover:bg-[#ff9900] flex flex-col justify-between cursor-pointer"
              style={{ width: '323px', height: '388px' }}
            >
              <div>
                <h3 className="text-[18px] mb-3 pt-[100px]" style={{ fontWeight: 500, fontFamily: 'Source Sans Pro, sans-serif', color: '#000000E5' }}>
                  {resource.title[0]}<br />{resource.title[1]}
                </h3>
                <p className="text-[17px] leading-relaxed" style={{ color: '#000000E5' }}>
                  {resource.description}
                </p>
              </div>
              <div className="flex justify-start">
                <button 
                  className="px-6 py-2.5 text-[17px] rounded-full bg-transparent transition-all duration-300 mt-3 inline-flex items-center gap-2" 
                  style={{ fontFamily: 'Source Sans Pro, sans-serif', color: '#000000E5', fontWeight: 400 }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <span>Learn More</span>
                  <span className={`transition-all duration-300 ${hoveredCard === index ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`}>
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-[-100px]">
          <button 
            className="inline-flex items-center gap-2 text-gray-900 pb-1 text-[17px] relative group transition-all duration-300"
            style={{ fontFamily: 'Source Sans Pro, sans-serif', fontWeight: 400 }}
            onMouseEnter={() => setHoveredButton(true)}
            onMouseLeave={() => setHoveredButton(false)}
          >
            <span>Share Your UG Resources with Leaders</span>
            <span className={`transition-all duration-300 ${hoveredButton ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`}>
              →
            </span>
            <span 
              className="absolute bottom-0 left-0 h-[2px] bg-gray-900 transition-all duration-300"
              style={{ width: hoveredButton ? 'calc(100%)' : 'calc(100% - 28px)' }}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
