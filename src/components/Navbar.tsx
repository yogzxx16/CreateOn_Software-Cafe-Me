import React, { useState } from 'react';
import { PageView } from '../types';
import { CAFE_LOGO_URL, CAFE_LOGO_FALLBACK, getWhatsAppOrderUrl, CAFE_HOURS, PHONE_CALL_URL, PHONE_NUMBER } from '../data/cafeData';

interface NavbarProps {
  activePage: PageView;
  onNavigate: (page: PageView) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState(CAFE_LOGO_URL);

  const handleNavClick = (page: PageView) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { id: PageView; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'about', label: 'About' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'visit-us', label: 'Visit Us' },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-[#FDFBF7]/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(28,18,13,0.06)] border-b border-[#E9DDCC]/50">
      {/* Decorative Red & Yellow Stripe - Continuously moving LEFT -> RIGHT */}
      <div 
        className="h-1.5 w-full animate-stripe-right" 
        role="presentation"
        aria-hidden="true"
      />

      <div className="h-16 sm:h-20 max-w-7xl mx-auto px-3 sm:px-6 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand / Logo Zone - Exact uploaded Cafe Me logo asset without recreated HTML text */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center focus:outline-none transition-transform active:scale-98 cursor-pointer"
            aria-label="Cafe Me Chennai - Home"
          >
            {/* The authoritative uploaded Cafe Me logo asset, preserving natural aspect ratio without distortion */}
            <img
              src={imgSrc}
              alt="Cafe Me Chennai"
              onError={() => setImgSrc(CAFE_LOGO_FALLBACK)}
              className="h-8 xs:h-9 sm:h-11 w-auto max-w-[170px] xs:max-w-[200px] sm:max-w-[240px] object-contain block"
            />
          </button>

          {/* Open Today Status Indicator Badge (Desktop Only) */}
          <div className="hidden xl:flex items-center gap-2 bg-[#FFF4DC] px-3.5 py-1.5 rounded-full shadow-xs border border-[#F4B323]/30">
            <span className="w-2 h-2 rounded-full bg-[#1b8a36] animate-pulse" />
            <span className="text-xs uppercase text-[#1C120D] tracking-wide font-bold font-['Plus_Jakarta_Sans']">
              {CAFE_HOURS.status}
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 p-1 bg-[#F8F1E5]/70 rounded-xl border border-[#E9DDCC]/60" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3.5 xl:px-4 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#8F2118] text-[#FDFBF7] shadow-sm font-bold'
                    : 'text-[#58413e] hover:text-[#8F2118] hover:bg-[#FDFBF7]'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Cluster - Balanced for mobile widths 320px - 414px */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href={getWhatsAppOrderUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-[#8F2118] text-[#FDFBF7] text-xs sm:text-sm font-bold shadow-xs hover:bg-[#641A12] transition-all transform hover:-translate-y-0.5 active:translate-y-0 shrink-0"
            aria-label="Order or WhatsApp Cafe Me Concierge"
          >
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F4B323] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-[#F4B323]" />
            </span>
            <span className="tracking-wide whitespace-nowrap">
              <span className="hidden xs:inline">Order / </span>WhatsApp
            </span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#F8F1E5] text-[#1C120D] hover:bg-[#FFF4DC] transition-colors border border-[#E9DDCC] shrink-0 min-w-[38px] min-h-[38px] flex items-center justify-center cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="material-symbols-outlined text-xl sm:text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FDFBF7] border-b border-[#E9DDCC] shadow-xl px-4 py-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium text-left transition-colors ${
                    isActive
                      ? 'bg-[#8F2118] text-[#FDFBF7] font-bold'
                      : 'text-[#241914] hover:bg-[#F8F1E5]'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="material-symbols-outlined text-sm">
                    chevron_right
                  </span>
                </button>
              );
            })}

            <div className="pt-3 mt-2 border-t border-[#E9DDCC]/70 flex flex-col gap-2">
              <div className="flex items-center gap-2 px-2 text-xs text-[#7c5800] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#1b8a36]" />
                <span>Open 11:00 AM – 11:00 PM • K.K. Nagar</span>
              </div>
              <a
                href={PHONE_CALL_URL}
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#F8F1E5] text-[#641A12] text-sm font-bold border border-[#E9DDCC]"
              >
                <span className="material-symbols-outlined text-lg">call</span>
                <span>Call {PHONE_NUMBER}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
