import React, { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent pt-[25px]" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
      <div className="w-full flex items-center justify-between h-16 px-6 sm:px-8 md:px-[70px]">
        <div className="flex items-center">
          <img 
            src="/aws-global-logo.png" 
            alt="AWS Global" 
            className="h-12 sm:h-14 w-auto"
          />
        </div>
        <nav className="hidden lg:flex items-center space-x-10" style={{ fontSize: '17px' }}>
          <a href="#user-groups" className="text-white transition-all duration-200 hover:underline hover:underline-offset-4">AWS User Groups</a>
          <a href="#featured" className="text-white transition-all duration-200 hover:underline hover:underline-offset-4">Featured AWS UG</a>
          <a href="#build" className="text-white transition-all duration-200 hover:underline hover:underline-offset-4">Build Genie</a>
          <a href="#insights" className="text-white transition-all duration-200 hover:underline hover:underline-offset-4">Leaders Insights</a>
          <a href="#resources" className="text-white transition-all duration-200 hover:underline hover:underline-offset-4">Resources for Leaders</a>
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
          <div className="flex flex-col space-y-4 px-4 py-6" style={{ fontSize: '17px' }}>
            <a 
              href="#user-groups" 
              onClick={() => setIsMenuOpen(false)}
              className="text-white py-2 transition-all duration-200 hover:underline hover:underline-offset-4"
            >
              AWS User Groups
            </a>
            <a 
              href="#featured" 
              onClick={() => setIsMenuOpen(false)}
              className="text-white py-2 transition-all duration-200 hover:underline hover:underline-offset-4"
            >
              Featured AWS UG
            </a>
            <a 
              href="#build" 
              onClick={() => setIsMenuOpen(false)}
              className="text-white py-2 transition-all duration-200 hover:underline hover:underline-offset-4"
            >
              Build Genie
            </a>
            <a 
              href="#insights" 
              onClick={() => setIsMenuOpen(false)}
              className="text-white py-2 transition-all duration-200 hover:underline hover:underline-offset-4"
            >
              Leaders Insights
            </a>
            <a 
              href="#resources" 
              onClick={() => setIsMenuOpen(false)}
              className="text-white py-2 transition-all duration-200 hover:underline hover:underline-offset-4"
            >
              Resources for Leaders
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
