import React, { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent pt-[25px]" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
      <div className="w-full flex items-center justify-between h-16 px-4 sm:px-6 md:px-[50px]">
        <div className="flex items-center">
          <img 
            src="/aws-global-logo.png" 
            alt="AWS Global" 
            className="h-10 sm:h-12 w-auto"
          />
        </div>
        <nav className="hidden lg:flex items-center space-x-10 text-sm font-bold">
          <a href="#user-groups" className="text-white hover:text-[#ff9900] transition-colors">AWS User Groups</a>
          <a href="#featured" className="text-white hover:text-[#ff9900] transition-colors">Featured AWS UG</a>
          <a href="#build" className="text-white hover:text-[#ff9900] transition-colors">Build Genie</a>
          <a href="#insights" className="text-white hover:text-[#ff9900] transition-colors">Leaders Insights</a>
          <a href="#resources" className="text-white hover:text-[#ff9900] transition-colors">Resources for Leaders</a>
        </nav>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-black/95 backdrop-blur-sm">
          <div className="flex flex-col space-y-4 px-4 py-6">
            <a 
              href="#user-groups" 
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-[#ff9900] transition-colors text-base font-bold py-2"
            >
              AWS User Groups
            </a>
            <a 
              href="#featured" 
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-[#ff9900] transition-colors text-base font-bold py-2"
            >
              Featured AWS UG
            </a>
            <a 
              href="#build" 
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-[#ff9900] transition-colors text-base font-bold py-2"
            >
              Build Genie
            </a>
            <a 
              href="#insights" 
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-[#ff9900] transition-colors text-base font-bold py-2"
            >
              Leaders Insights
            </a>
            <a 
              href="#resources" 
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-[#ff9900] transition-colors text-base font-bold py-2"
            >
              Resources for Leaders
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
