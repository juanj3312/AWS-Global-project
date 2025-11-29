import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12 md:py-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-6">
              <img 
                src="/aws-global-logo.png" 
                alt="AWS Global" 
                className="h-12 md:h-14 w-auto"
              />
            </div>
          </div>

          {/* Helpful Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Helpful Links</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <a href="#user-groups" className="text-gray-300 hover:text-[#ff9900] transition-colors">
                  AWS User Groups
                </a>
              </li>
              <li>
                <a href="#featured" className="text-gray-300 hover:text-[#ff9900] transition-colors">
                  Featured AWS UG
                </a>
              </li>
              <li>
                <a href="#build-genie" className="text-gray-300 hover:text-[#ff9900] transition-colors">
                  Build Genie
                </a>
              </li>
              <li>
                <a href="#insights" className="text-gray-300 hover:text-[#ff9900] transition-colors">
                  Leaders Insights
                </a>
              </li>
            </ul>
          </div>

          {/* Share Your AWS Tips */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-3">Share Your AWS Tips</h3>
            <p className="text-gray-300 text-sm md:text-base mb-4 max-w-sm mx-auto md:mx-0">
              Submit your insights through the form below and help us keep the resource library growing and up-to-date.
            </p>
            <button className="px-6 py-2.5 bg-[#ff9900] hover:bg-[#e68a00] text-black font-semibold rounded-full transition-all duration-200 text-sm">
              Submit Your Contribution
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-xs md:text-sm">
            © {new Date().getFullYear()} AWS Global. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
