import React, { useState } from 'react';
import { PageView } from '../types';
import { 
  CAFE_LOGO_URL, 
  CAFE_LOGO_FALLBACK, 
  CAFE_ADDRESS, 
  CAFE_HOURS, 
  INSTAGRAM_URL, 
  getWhatsAppOrderUrl,
  PHONE_NUMBER,
  PHONE_CALL_URL,
  WHATSAPP_URL
} from '../data/cafeData';

interface FooterProps {
  onNavigate: (page: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [logoSrc, setLogoSrc] = useState(CAFE_LOGO_URL);

  const handleLinkClick = (page: PageView, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#1C120D] text-[#F8F1E5] relative overflow-hidden border-t border-[#8F2118]/40">
      {/* Top Tagline Ribbon */}
      <div className="w-full bg-[#8F2118] py-2.5 px-4 overflow-hidden border-b border-[#F4B323]/20">
        <div className="flex items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm uppercase tracking-widest text-[#FFF4DC] font-bold text-center">
          <span className="material-symbols-outlined text-[16px] text-[#F4B323]">local_cafe</span>
          <span>Good Food • Good People • Good Days • சென்னை காபி கலாச்சாரம்</span>
          <span className="material-symbols-outlined text-[16px] text-[#F4B323]">spa</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Col 1: Brand & Logo */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center">
              {/* Display the authentic Cafe Me logo directly */}
              <img
                src={logoSrc}
                alt="Cafe Me Chennai"
                onError={() => setLogoSrc(CAFE_LOGO_FALLBACK)}
                className="h-10 sm:h-12 w-auto max-w-[200px] sm:max-w-[250px] object-contain block"
              />
            </div>

            <p className="text-xs sm:text-sm text-[#f9e4db] max-w-md leading-relaxed mt-1">
              A heartfelt vegetarian sanctuary in the quiet, tree-lined avenues of K.K. Nagar. Serving slow-brewed filter coffee, continental comfort platters, and cherished neighborhood conversations.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8F2118]/40 border border-[#F4B323]/30 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#F4B323] animate-pulse shrink-0" />
              <span className="text-xs uppercase text-[#FFF4DC] tracking-widest font-bold">
                100% Pure Vegetarian Café
              </span>
            </div>
          </div>

          {/* Col 2: Find Us */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            <span className="text-xs uppercase tracking-wider text-[#F4B323] font-bold">
              Find Us in Chennai
            </span>
            <p className="text-sm text-[#f9e4db] leading-relaxed">
              {CAFE_ADDRESS.line1},<br />
              {CAFE_ADDRESS.line2},<br />
              {CAFE_ADDRESS.area}, {CAFE_ADDRESS.city}, {CAFE_ADDRESS.state} {CAFE_ADDRESS.pincode}
            </p>

            <div className="mt-2 pt-2 border-t border-[#dfbfba]/20 space-y-1.5 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-[#F4B323] font-bold">Call:</span>
                <a href={PHONE_CALL_URL} className="text-[#f9e4db] hover:text-[#F4B323] underline font-mono">
                  {PHONE_NUMBER}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#F4B323] font-bold">WhatsApp:</span>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-[#f9e4db] hover:text-[#F4B323] underline font-mono">
                  +91 {PHONE_NUMBER.slice(1)}
                </a>
              </div>
            </div>

            <div className="mt-2 pt-2 border-t border-[#dfbfba]/20">
              <span className="text-xs uppercase tracking-wider text-[#F4B323] font-bold block mb-1">
                Café Hours
              </span>
              <p className="text-xs text-[#f9e4db]">
                {CAFE_HOURS.days}: {CAFE_HOURS.timings}
              </p>
              <p className="text-[11px] text-[#ffdad5] mt-0.5">
                {CAFE_HOURS.kitchenCloses}
              </p>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="lg:col-span-3 flex flex-col gap-2">
            <span className="text-xs uppercase tracking-wider text-[#F4B323] font-bold">
              Quick Navigation
            </span>
            <ul className="flex flex-col gap-1.5 text-sm text-[#f9e4db]">
              <li>
                <a
                  href="#menu"
                  onClick={(e) => handleLinkClick('menu', e)}
                  className="hover:text-[#F4B323] transition-colors cursor-pointer"
                >
                  Seasonal & All-Day Menu
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleLinkClick('about', e)}
                  className="hover:text-[#F4B323] transition-colors cursor-pointer"
                >
                  About Our Story
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => handleLinkClick('gallery', e)}
                  className="hover:text-[#F4B323] transition-colors cursor-pointer"
                >
                  Photo Gallery & Vibes
                </a>
              </li>
              <li>
                <a
                  href="#visit-us"
                  onClick={(e) => handleLinkClick('visit-us', e)}
                  className="hover:text-[#F4B323] transition-colors cursor-pointer"
                >
                  Get Directions (Google Maps)
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F4B323] transition-colors inline-flex items-center gap-1"
                >
                  <span>Instagram (@cafemechennai)</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppOrderUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F4B323] transition-colors inline-flex items-center gap-1"
                >
                  <span>WhatsApp Concierge</span>
                  <span className="material-symbols-outlined text-[14px]">chat</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-6 border-t border-[#dfbfba]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#ffeae0]/80">
          <div>
            <p>© 2025 Cafe Me Chennai. Handcrafted with pride for K.K. Nagar.</p>
            {/* CreateOn Software subtle developer/design credit as strictly requested in Section 13 */}
            <p className="text-[11px] text-[#f9e4db]/60 mt-1">
              Website concept &amp; development by <span className="text-[#f9e4db]/90 font-medium">CreateOn Software</span> • <span className="tracking-widest uppercase text-[#F4B323]/80">CREATE. LEARN. GROW.</span>
            </p>
          </div>

          <div className="flex items-center gap-2 text-[#F4B323] text-xs uppercase tracking-widest font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1b8a36]" />
            <span>Pure Vegetarian • Freshly Brewed</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
