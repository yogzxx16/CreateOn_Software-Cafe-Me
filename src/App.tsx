/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageView, GalleryItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { GalleryModal } from './components/GalleryModal';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { VisitUsPage } from './pages/VisitUsPage';
import { WHATSAPP_NUMBER, GOOGLE_MAPS_URL } from './data/cafeData';

export default function App() {
  const [activePage, setActivePage] = useState<PageView>('home');
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);

  // Scroll to top whenever the active page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  return (
    <div className="min-h-screen bg-cream-canvas text-espresso-dark font-body flex flex-col selection:bg-mustard-awning selection:text-espresso-dark">
      {/* Global Navigation with real authentic Cafe Me logo */}
      <Navbar activePage={activePage} onNavigate={setActivePage} />

      {/* Main View Renderer */}
      <main className="flex-1 w-full">
        {activePage === 'home' && (
          <HomePage 
            onNavigate={setActivePage} 
            onSelectGalleryItem={setSelectedGalleryItem} 
          />
        )}
        {activePage === 'menu' && (
          <MenuPage 
            onNavigate={setActivePage} 
          />
        )}
        {activePage === 'about' && (
          <AboutPage 
            onNavigate={setActivePage} 
          />
        )}
        {activePage === 'gallery' && (
          <GalleryPage 
            onNavigate={setActivePage} 
            onSelectItem={setSelectedGalleryItem} 
          />
        )}
        {activePage === 'visit-us' && (
          <VisitUsPage 
            onNavigate={setActivePage} 
          />
        )}
      </main>

      {/* Global Footer with authentic Cafe Me logo */}
      <Footer onNavigate={setActivePage} />

      {/* Gallery Lightbox Modal */}
      <GalleryModal
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
      />

      {/* Floating Action Buttons (Sticky Quick Contacts for mobile & desktop) */}
      <aside aria-label="Quick Action Buttons" className="fixed bottom-4 right-3 sm:bottom-6 sm:right-5 z-40 flex flex-col gap-2 sm:gap-2.5 items-end">
        {/* Quick Directions Button */}
        <a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          title="Open in Google Maps"
          className="group flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-full bg-white/95 backdrop-blur-md text-espresso-dark border border-cafe-crimson/20 shadow-md hover:bg-cafe-crimson hover:text-white transition-all text-xs font-semibold"
        >
          <span className="text-cafe-crimson group-hover:text-white text-sm">📍</span>
          <span className="hidden sm:inline">Directions</span>
        </a>

        {/* WhatsApp Order Pill */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Cafe Me Chennai! I am viewing your website and would like to order / inquire.")}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Chat on WhatsApp"
          className="group flex items-center gap-2 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-xs font-bold"
        >
          <span className="text-sm sm:text-base">💬</span>
          <span>WhatsApp Us</span>
        </a>
      </aside>
    </div>
  );
}
