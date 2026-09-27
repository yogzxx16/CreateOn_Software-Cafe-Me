import React, { useEffect } from 'react';
import { GalleryItem } from '../types';
import { INSTAGRAM_URL } from '../data/cafeData';

interface GalleryModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1C120D]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-[#FDFBF7] hover:text-[#F4B323] transition-colors p-2 rounded-full bg-white/10 hover:bg-white/20 focus:outline-none"
        aria-label="Close image preview"
      >
        <span className="material-symbols-outlined text-3xl">close</span>
      </button>

      <div
        className="max-w-4xl w-full flex flex-col gap-4 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl bg-[#1C120D] border border-white/10">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[#FDFBF7] bg-[#1C120D]/60 p-4 rounded-xl border border-white/10">
          <div className="flex flex-col">
            <span className="text-xs uppercase text-[#F4B323] font-bold tracking-wider">
              {item.subtitle || 'Cafe Me Gallery'}
            </span>
            <h3 className="font-['Syne'] text-xl sm:text-2xl font-bold tracking-tight mt-0.5">
              {item.title}
            </h3>
            {item.caption && (
              <p className="text-sm text-[#ffeae0]/80 mt-1 max-w-xl">
                {item.caption}
              </p>
            )}
            {item.credit && (
              <span className="text-xs text-[#FFF4DC] font-medium mt-1">
                {item.credit}
              </span>
            )}
          </div>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-[#8F2118] text-[#FDFBF7] text-xs font-bold flex items-center gap-1.5 hover:bg-[#641A12] transition-colors shrink-0"
          >
            <span>View on Instagram</span>
            <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
          </a>
        </div>
      </div>
    </div>
  );
};
