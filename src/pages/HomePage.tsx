import React, { useState } from 'react';
import { PageView, MenuItem, GalleryItem } from '../types';
import { 
  CROWD_FAVOURITES, 
  CAFE_ADDRESS, 
  CAFE_HOURS, 
  COMMUNITY_REVIEWS, 
  GOOGLE_MAPS_URL, 
  getWhatsAppOrderUrl,
  PHONE_NUMBER,
  PHONE_CALL_URL,
  WHATSAPP_URL
} from '../data/cafeData';

interface HomePageProps {
  onNavigate: (page: PageView) => void;
  onSelectGalleryItem?: (item: GalleryItem) => void;
}

const TICKER_ITEMS = [
  {
    icon: 'eco',
    iconBg: 'bg-[#FFF4DC]',
    iconColor: 'text-[#8F2118]',
    title: '100% Pure Vegetarian',
    subtitle: 'Strictly clean, wholesome kitchen',
    titleColor: 'text-[#FFF4DC]',
  },
  {
    icon: 'coffee',
    iconBg: 'bg-[#F4B323]',
    iconColor: 'text-[#1C120D]',
    title: 'Artisanal Brews & Shakes',
    subtitle: 'South Indian roasts & Belgian cocoas',
    titleColor: 'text-[#F4B323]',
  },
  {
    icon: 'groups',
    iconBg: 'bg-[#FFF4DC]',
    iconColor: 'text-[#8F2118]',
    title: 'Student & Family Friendly',
    subtitle: 'Cozy hangout opp. PSBB Gate 1',
    titleColor: 'text-[#FFF4DC]',
  },
  {
    icon: 'verified',
    iconBg: 'bg-[#F4B323]',
    iconColor: 'text-[#1C120D]',
    title: 'Loved Local Landmark',
    subtitle: 'Rated 4.6★ by 850+ foodies',
    titleColor: 'text-[#F4B323]',
  },
];

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectGalleryItem }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'brews' | 'bakes'>('all');

  const filteredDishes = CROWD_FAVOURITES.filter(dish => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'brews') return dish.category.includes('coffee') || dish.category.includes('coolers');
    if (selectedCategory === 'bakes') return dish.category.includes('desserts') || dish.category.includes('pastas');
    return true;
  });

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Top Heritage Awning Accent Bar - Continuously moving LEFT -> RIGHT */}
      <div 
        className="w-full h-2 animate-stripe-right" 
        role="presentation"
        aria-hidden="true"
      />

      {/* ========================================================
          HERO SECTION: Tactile Editorial with Asymmetric Grid
         ======================================================== */}
      <section className="relative w-full py-10 sm:py-16 lg:py-20 px-4 sm:px-6 overflow-hidden bg-[#FDFBF7]">
        {/* Atmospheric Ambient Glows */}
        <div className="absolute -top-24 -left-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#FFF4DC] opacity-70 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-20 w-72 sm:w-[500px] h-72 sm:h-[500px] rounded-full bg-[#ffdea8] opacity-40 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Narrative & Hero Messaging */}
            <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6 relative z-10">
              {/* Heritage Local Stamp */}
              <div className="inline-flex items-center gap-2 bg-[#F8F1E5] px-3 sm:px-3.5 py-1.5 rounded-full shadow-xs w-fit max-w-full border border-[#E9DDCC]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#8F2118] animate-pulse shrink-0" />
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#641A12] font-bold truncate">
                  K.K. Nagar • Chennai • Est. Local Favourite
                </span>
                <span className="hidden md:inline text-[#7c5800] text-xs font-bold opacity-80 shrink-0">
                  | நினைவுகள் மலரும் இடம்
                </span>
              </div>

              {/* Main Typographic Display */}
              <div className="flex flex-col gap-1">
                <span className="text-xs sm:text-sm uppercase tracking-wider text-[#F4B323] font-bold drop-shadow-xs">
                  Welcome to our neighborhood sanctuary
                </span>
                <h1 className="font-['Syne'] text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-[#1C120D] tracking-tight leading-[1.1] font-extrabold break-words">
                  Good Coffee.<br />
                  <span className="text-[#8F2118] italic font-bold">Better Memories.</span>
                </h1>
              </div>

              {/* Editorial Subtitle */}
              <p className="text-sm sm:text-base lg:text-lg text-[#58413e] max-w-xl leading-relaxed">
                A cozy 100% vegetarian café nestled along the quiet avenues of K.K. Nagar. Serving slow-steeped filter brews, molten Belgian hot chocolate, comforting skillet pastas, and the warm, unhurried conversations of Chennai life.
              </p>

              {/* Primary Actions Cluster - Stack on mobile, flex on sm+ */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-2 w-full sm:w-auto">
                <button
                  onClick={() => onNavigate('menu')}
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-lg bg-[#8F2118] text-[#FDFBF7] text-xs sm:text-sm font-bold shadow-md hover:bg-[#F4B323] hover:text-[#1C120D] transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px] sm:text-[20px]">restaurant_menu</span>
                  <span>Explore Menu</span>
                </button>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 rounded-lg bg-[#F8F1E5] text-[#641A12] text-xs sm:text-sm font-bold shadow-xs hover:bg-[#FFF4DC] hover:shadow-md transition-all border border-[#E9DDCC]"
                >
                  <span className="material-symbols-outlined text-[18px] sm:text-[20px] text-[#8F2118]">location_on</span>
                  <span>Opp. PSBB Gate 1</span>
                </a>
                <a
                  href={getWhatsAppOrderUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 rounded-lg bg-[#FFF4DC] text-[#1C120D] text-xs sm:text-sm font-bold shadow-xs hover:bg-[#F4B323] transition-colors border border-[#F4B323]/40"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#1b8a36] filled">chat</span>
                  <span>WhatsApp Table</span>
                </a>
              </div>

              {/* Micro Rating Footnote */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-2 text-[#58413e] text-xs sm:text-sm">
                <div className="flex items-center text-[#F4B323]">
                  <span className="material-symbols-outlined text-[16px] sm:text-[18px] filled">star</span>
                  <span className="material-symbols-outlined text-[16px] sm:text-[18px] filled">star</span>
                  <span className="material-symbols-outlined text-[16px] sm:text-[18px] filled">star</span>
                  <span className="material-symbols-outlined text-[16px] sm:text-[18px] filled">star</span>
                  <span className="material-symbols-outlined text-[16px] sm:text-[18px] filled">star_half</span>
                </div>
                <span className="text-[#1C120D] font-bold">4.6 Google Rating</span>
                <span className="text-[#dfbfba]">•</span>
                <span>850+ Cherished Visits</span>
              </div>
            </div>

            {/* Right Column: Layered Hero Card Composition */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0 max-w-full">
              {/* Awning Striped Motif Underlay - Contained to avoid horizontal overflow */}
              <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 sm:translate-x-2 sm:translate-y-2 rounded-2xl bg-[repeating-linear-gradient(45deg,#8F2118_0px,#8F2118_14px,#F4B323_14px,#F4B323_28px)] opacity-85 transform rotate-1 pointer-events-none" />

              {/* Main Frame Card */}
              <div className="relative bg-[#F8F1E5] rounded-2xl p-2.5 sm:p-3 shadow-xl overflow-hidden border border-[#E9DDCC]">
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtrfdCWH8ABmLjcFL0Q4SQ85I2QTJQ4Lnux1MWlHvQ5tNSnsju-6922uaLcd1pQKlIYkk83bPJtk9wPMdazDbJj-wO3bp61h_JqN46Y96zaOlTpPOr-BDajWgEOmGff0twUXw-KsITE0T8YJYsIt9k1JKWec1Wi2ogt4RL3fEwcP1pxDZFQ8HOHnW7kxBMkJRsCdY4LfhB7oFh7Q1DvanNtDjmayHAenDNyT3j38nIdgPfObRBAtwCWQ"
                    alt="Sunlit interior of Cafe Me Chennai in KK Nagar, featuring warm wooden community tables and cozy hanging bulbs"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C120D]/80 via-transparent to-black/10" />

                  {/* Floating Card Badge */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-[#FDFBF7]/95 backdrop-blur-md rounded-xl p-3 sm:p-4 shadow-lg flex items-center justify-between border border-[#E9DDCC]">
                    <div>
                      <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#8F2118] font-bold block">
                        Chennai Evening Pulse
                      </span>
                      <p className="font-['Syne'] text-base sm:text-lg font-bold text-[#1C120D] leading-tight mt-0.5">
                        Where Memories Brew
                      </p>
                    </div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#FFF4DC] flex items-center justify-center text-[#8F2118] shadow-inner shrink-0">
                      <span className="material-symbols-outlined text-[18px] sm:text-[22px]">local_cafe</span>
                    </div>
                  </div>
                </div>

                {/* Handcrafted Note Snippet */}
                <div className="mt-2.5 sm:mt-3 px-2 py-1 flex items-center justify-between text-[#58413e] text-xs">
                  <span className="font-medium">Open daily: 11:00 AM – 11:00 PM</span>
                  <span className="inline-flex items-center gap-1 text-[#8F2118] font-bold">
                    <span className="material-symbols-outlined text-[16px] text-[#1b8a36] filled">check_circle</span>
                    100% Pure Veg
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          FEATURE HIGHLIGHT STRIP: CONTINUOUS SEAMLESS MARQUEE (RIGHT -> LEFT)
         ======================================================== */}
      <section 
        className="w-full bg-[#641A12] text-[#FDFBF7] py-3.5 sm:py-4 shadow-inner overflow-hidden border-y border-[#8F2118]/70 ticker-container group select-none relative"
        aria-label="Cafe Me Highlights"
      >
        <div className="flex w-max animate-marquee-left">
          {/* Sequence 1 */}
          <div className="flex items-center gap-4 sm:gap-8 shrink-0 px-2 sm:px-4">
            {TICKER_ITEMS.map((item, idx) => (
              <div 
                key={`item-seq1-${idx}`} 
                className="flex items-center gap-3 shrink-0 py-1.5 px-3.5 sm:px-4 rounded-xl bg-black/15 border border-white/10 min-w-[270px] sm:min-w-[300px]"
              >
                <div className={`w-8 h-8 rounded-full ${item.iconBg} flex items-center justify-center ${item.iconColor} shrink-0 shadow-xs`}>
                  <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                </div>
                <div className="flex flex-col">
                  <span className={`text-xs uppercase ${item.titleColor} tracking-wider font-bold`}>
                    {item.title}
                  </span>
                  <span className="text-xs text-[#f9e4db]/90 font-medium">{item.subtitle}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Sequence 2 - Exact duplicate for seamless, invisible loop reset */}
          <div className="flex items-center gap-4 sm:gap-8 shrink-0 px-2 sm:px-4" aria-hidden="true">
            {TICKER_ITEMS.map((item, idx) => (
              <div 
                key={`item-seq2-${idx}`} 
                className="flex items-center gap-3 shrink-0 py-1.5 px-3.5 sm:px-4 rounded-xl bg-black/15 border border-white/10 min-w-[270px] sm:min-w-[300px]"
              >
                <div className={`w-8 h-8 rounded-full ${item.iconBg} flex items-center justify-center ${item.iconColor} shrink-0 shadow-xs`}>
                  <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                </div>
                <div className="flex flex-col">
                  <span className={`text-xs uppercase ${item.titleColor} tracking-wider font-bold`}>
                    {item.title}
                  </span>
                  <span className="text-xs text-[#f9e4db]/90 font-medium">{item.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 2: "MORE THAN JUST A CAFÉ" (EDITORIAL STORY SPLIT)
         ======================================================== */}
      <section className="w-full py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-[#FDFBF7] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Tactile Editorial Story Board */}
            <div className="lg:col-span-6 flex flex-col gap-5 sm:gap-6">
              <div className="flex items-center gap-2 text-[#F4B323]">
                <span className="material-symbols-outlined text-[20px]">auto_stories</span>
                <span className="text-xs uppercase tracking-widest text-[#641A12] font-bold">
                  Our Neighborhood Roots
                </span>
              </div>

              <h2 className="font-['Syne'] text-2xl xs:text-3xl sm:text-4xl text-[#1C120D] tracking-tight leading-tight font-bold">
                More than just a café.<br />
                <span className="text-[#8F2118] italic font-normal">A living room for K.K. Nagar.</span>
              </h2>

              <div className="p-4 sm:p-6 rounded-2xl bg-[#F8F1E5] shadow-xs relative border border-[#E9DDCC]">
                <div className="absolute -top-3.5 right-4 sm:right-6 px-2.5 sm:px-3 py-1 rounded-full bg-[#F4B323] text-[#1C120D] text-[10px] sm:text-[11px] uppercase tracking-widest font-bold shadow-xs">
                  Pure Veg Comfort Kitchen
                </div>
                <p className="text-sm sm:text-base text-[#58413e] leading-relaxed mb-3 sm:mb-4">
                  Across the bustling gates of PSBB School on Alagirisamy Salai, Cafe Me opened its doors with a simple belief: the best moments in life happen across a warm table with great companions and unhurried bites.
                </p>
                <p className="text-xs sm:text-sm md:text-base text-[#241914] leading-relaxed">
                  Whether you are high school friends unwinding over loaded cheese momos, families bonding on a Sunday evening, or someone catching up on a paperback with our signature hot chocolate—we built this corner to feel like your second home in Chennai.
                </p>
                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 flex flex-wrap items-center justify-between gap-3 sm:gap-4 border-t border-[#E9DDCC]/70">
                  <span className="font-['Syne'] text-sm sm:text-base md:text-lg text-[#641A12] italic">
                    "good food • good people • good days"
                  </span>
                  <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-[#FFF4DC] text-[#1C120D] text-xs font-bold border border-[#F4B323]/30">
                    <span className="w-2 h-2 rounded-full bg-[#1b8a36] shrink-0" />
                    100% Pure Vegetarian
                  </div>
                </div>
              </div>

              {/* Feature Bullets Grid - Responsive 1 col on mobile, 2 cols on sm+ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="flex gap-3 items-start">
                  <span className="material-symbols-outlined text-[#8F2118] text-2xl shrink-0 mt-0.5">bakery_dining</span>
                  <div>
                    <h4 className="font-['Syne'] text-sm sm:text-base text-[#1C120D] font-bold leading-tight">
                      Artisanal Small-Batches
                    </h4>
                    <p className="text-xs text-[#58413e] mt-0.5 leading-relaxed">
                      Fresh waffles, slow-simmered sauces, handcrafted shakes.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="material-symbols-outlined text-[#F4B323] text-2xl shrink-0 mt-0.5">chair</span>
                  <div>
                    <h4 className="font-['Syne'] text-sm sm:text-base text-[#1C120D] font-bold leading-tight">
                      Cozy Table Booths
                    </h4>
                    <p className="text-xs text-[#58413e] mt-0.5 leading-relaxed">
                      Warm amber lighting, soft music, endless conversations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Visual Collage Composition */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 relative">
              {/* Image 1: Main Warm Café Shot */}
              <div className="sm:col-span-7 lg:col-span-8 rounded-2xl overflow-hidden shadow-lg bg-[#F8F1E5] border border-[#E9DDCC]">
                <div className="aspect-[4/5] w-full">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUxZhlzpXIUqTBh-nuzZyoJQseJmY9Fvhiz5X1ZOJoUP1iNXwjTecsUYXqi8DWg8OAImnzNz0quub_AZfHg2jqY5-czbRLctH3iCredKI_gnykW0VLE_86HbyZWDdTHALj4lB0cDEIdmLfF8w9abn7clDFj-IBpoyNNhzkGUsvKFK3AIqPCHsX-k_3t9_f6tsk4LrA7oZYOI1si2EUmPV8wsalA_1oEA4oU8asPeHvpNPbMJEtu-ARYQ"
                    alt="Barista pouring a velvety froth onto a dark roast South Indian filter coffee in Cafe Me Chennai"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Image 2 & 3: Floating Secondary Images */}
              <div className="sm:col-span-5 lg:col-span-4 flex flex-row sm:flex-col gap-3 sm:gap-4 justify-between">
                <div className="rounded-xl overflow-hidden shadow-md bg-[#F8F1E5] aspect-square flex-1 sm:flex-none border border-[#E9DDCC]">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1IEVh8wucqy3QFjllMh5PmPKZepQHclj9onwIEJGVOuGyvmsT1nd6AVCG583zLNoxqMbtL5fa9zHN1LtJSq9WiB9-HczP4Bf9wJhKZMlR_CPP-cwUMMa9i14ai3uBr9JH2nJEgg3JsJTDMO1U91ozPLuvmwcnRtAAHvRu6Yda1eBiVn5A9fizvIt7UKEVqtaPzwsACBEqcqkVBaC0n8KzfYLVMHa1sDw_VQSrvc34HXtrPrHStEaPMw"
                    alt="Belgian hot chocolate mug topped with marshmallows"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 sm:p-3.5 rounded-xl bg-[#FFF4DC] shadow-xs flex flex-col justify-center border border-[#F4B323]/30 flex-1 sm:flex-none">
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#641A12] font-bold">
                    Neighbourhood Heart
                  </span>
                  <p className="font-['Syne'] text-xs sm:text-sm text-[#1C120D] leading-tight font-bold mt-0.5">
                    Since Day 1 in K.K. Nagar
                  </p>
                  <span className="text-[10px] sm:text-[11px] text-[#58413e] mt-0.5 hidden xs:inline">
                    Chennai students &amp; families.
                  </span>
                </div>
                <div className="rounded-xl overflow-hidden shadow-md bg-[#F8F1E5] aspect-[4/3] flex-1 sm:flex-none border border-[#E9DDCC]">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpSpmBChf6Uo4IN3LWu7yL-djP6fRRWSc37F4zIJuKCWuUWflSkd700opz4gY-qW7HQ8fOuCdHluYBi9p4ofe4XeOc_AC5PybQ6tB2hT3TKzcagvaBWTKtPBz5HIksUOCtzsZxDvS8Ory2h-omgOb45Ath_LOEmWM7iBZ3jKj6eNIvL3yOjbOeZxw-v24s0XeziGb0AOygmL9NGo71MDRMu5SqcZD8IDg0k_9dww6UKJ8J_Wuil-4G-g"
                    alt="Sizzling baked macaroni skillet with bubbling crust"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 3: CROWD FAVOURITES (SIGNATURE MENU SHOWCASE)
         ======================================================== */}
      <section className="w-full py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-[#fff1eb]/60 relative border-y border-[#E9DDCC]/50 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-10">
          {/* Section Header with Category Tabs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
            <div className="flex flex-col gap-1 max-w-xl">
              <div className="inline-flex items-center gap-2 text-[#8F2118] text-xs uppercase tracking-widest font-bold">
                <span className="w-2 h-2 rounded-full bg-[#8F2118]" />
                Fresh From Our Kitchen
              </div>
              <h2 className="font-['Syne'] text-2xl xs:text-3xl sm:text-4xl text-[#1C120D] tracking-tight font-bold">
                Crowd Favourites
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-[#58413e]">
                Handcrafted signatures our regulars order time and again. Pure vegetarian comfort, slow-crafted with genuine ingredients.
              </p>
            </div>

            {/* Category tabs with smooth scrolling and shrink-0 for small mobile */}
            <div className="flex items-center gap-1 bg-[#F8F1E5] p-1 rounded-xl sm:rounded-full shadow-xs border border-[#E9DDCC] overflow-x-auto no-scrollbar max-w-full">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3 sm:px-3.5 py-1.5 rounded-lg sm:rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  selectedCategory === 'all'
                    ? 'bg-[#8F2118] text-[#FDFBF7] shadow-xs'
                    : 'text-[#58413e] hover:text-[#8F2118]'
                }`}
              >
                All Signatures
              </button>
              <button
                onClick={() => setSelectedCategory('brews')}
                className={`px-3 sm:px-3.5 py-1.5 rounded-lg sm:rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  selectedCategory === 'brews'
                    ? 'bg-[#8F2118] text-[#FDFBF7] shadow-xs'
                    : 'text-[#58413e] hover:text-[#8F2118]'
                }`}
              >
                Coffees &amp; Brews
              </button>
              <button
                onClick={() => setSelectedCategory('bakes')}
                className={`px-3 sm:px-3.5 py-1.5 rounded-lg sm:rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  selectedCategory === 'bakes'
                    ? 'bg-[#8F2118] text-[#FDFBF7] shadow-xs'
                    : 'text-[#58413e] hover:text-[#8F2118]'
                }`}
              >
                Bakes &amp; Waffles
              </button>
            </div>
          </div>

          {/* Dish Cards Bento / Catalog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredDishes.map((dish) => (
              <div
                key={dish.id}
                className="flex flex-col bg-[#F8F1E5] rounded-2xl p-4 shadow-xs hover:shadow-lg transition-all group border border-[#E9DDCC]"
              >
                <div className="relative w-full aspect-[16/11] rounded-xl overflow-hidden mb-3">
                  <img
                    src={dish.imageUrl}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#FDFBF7]/90 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-xs">
                    <span className="w-2.5 h-2.5 rounded-xs bg-[#1b8a36] flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    </span>
                    <span className="text-[11px] font-bold text-[#1C120D]">100% Veg</span>
                  </div>
                  {dish.badge && (
                    <div className="absolute bottom-3 right-3 bg-[#F4B323] text-[#1C120D] text-[11px] px-2.5 py-0.5 rounded-full font-bold shadow-xs">
                      {dish.badge}
                    </div>
                  )}
                </div>

                <div className="flex flex-col flex-1 justify-between gap-1">
                  <div>
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-['Syne'] text-base sm:text-lg font-bold text-[#1C120D] group-hover:text-[#8F2118] transition-colors">
                        {dish.name}
                      </h3>
                      <span className="font-['Syne'] text-base text-[#8F2118] font-bold whitespace-nowrap">
                        {dish.price}
                      </span>
                    </div>
                    <p className="text-xs text-[#58413e] mt-1 leading-relaxed line-clamp-2">
                      {dish.description}
                    </p>
                  </div>

                  <div className="pt-3 mt-2 flex items-center justify-between text-xs border-t border-[#E9DDCC]/70">
                    <span className="inline-flex items-center gap-1 text-[#7c5800] font-semibold">
                      <span className="material-symbols-outlined text-[15px]">timer</span>
                      {dish.prepTime || 'Freshly made'}
                    </span>
                    <button
                      onClick={() => onNavigate('menu')}
                      className="text-[#8F2118] font-bold hover:underline cursor-pointer"
                    >
                      View in Menu →
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Menu Promotion Card */}
            <div className="flex flex-col justify-between bg-[#8F2118] text-[#FDFBF7] rounded-2xl p-5 sm:p-6 shadow-md relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-[#F4B323] opacity-20 pointer-events-none" />
              <div className="flex flex-col gap-2 relative z-10">
                <span className="text-xs uppercase tracking-widest text-[#F4B323] font-bold">
                  Over 65+ Café Delights
                </span>
                <h3 className="font-['Syne'] text-xl sm:text-2xl lg:text-3xl leading-tight text-[#FDFBF7] font-bold">
                  Looking for our complete menu?
                </h3>
                <p className="text-xs sm:text-sm text-[#f9e4db] leading-relaxed mt-1">
                  Explore our full catalog of Woodfired Pizzas, Peri Peri Fries, Thick Shakes, Cold Coffees, and House Sizzlers.
                </p>
              </div>

              <div className="pt-5 sm:pt-6 relative z-10 flex flex-col gap-2">
                <button
                  onClick={() => onNavigate('menu')}
                  className="w-full text-center px-4 sm:px-5 py-3 rounded-lg bg-[#F4B323] text-[#1C120D] text-xs sm:text-sm font-bold shadow-md hover:bg-[#FDFBF7] hover:text-[#8F2118] transition-all cursor-pointer"
                >
                  Explore Full Digital Menu →
                </button>
                <p className="text-center text-[10px] sm:text-[11px] text-[#FFF4DC] opacity-90">
                  Takeaway &amp; Dine-in available daily
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 4: "A PEEK INSIDE" (EDITORIAL IMAGE COLLAGE & ATMOSPHERE)
         ======================================================== */}
      <section className="w-full py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-[#FDFBF7] overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-10">
          {/* Section Title */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-1 max-w-xl">
              <span className="text-xs uppercase tracking-widest text-[#F4B323] font-bold">
                Tactile Atmosphere
              </span>
              <h2 className="font-['Syne'] text-2xl xs:text-3xl sm:text-4xl text-[#1C120D] tracking-tight font-bold">
                A Peek Inside Cafe Me
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-[#58413e]">
                From golden-hour laughter over iced cold brews to the tranquil corner booth where students study for board exams.
              </p>
            </div>
            <button
              onClick={() => onNavigate('gallery')}
              className="inline-flex items-center gap-1 text-[#8F2118] hover:text-[#641A12] text-xs sm:text-sm font-bold cursor-pointer"
            >
              <span>See our community album</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>

          {/* Asymmetric Editorial Mosaic Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4">
            {/* Collage Item 1: Wide Atmosphere */}
            <div
              onClick={() => onNavigate('gallery')}
              className="md:col-span-7 relative group rounded-2xl overflow-hidden shadow-xs bg-[#F8F1E5] aspect-[16/10] cursor-pointer border border-[#E9DDCC]"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuACnNv2NK1w3znMzdHYoibDVWB52tlW4iZ5H8BYLDi8Hetnoqo14hs7qS8vVZrJ45Jks7a1z_98LRou85HMRiSUMfyMCaRU0ZxtGjBjYnQez5FgMLwbGq2apxAGLxOB3OD8YguB2XlG5yAeNN1EN7R7U_qhUTD8i4MrgltVwxsuTMnFKkwob-HfILXwOb7mtkr6jZY9OLAOqq7fxDTSwEwbDiwD62LomLPdSOzw0vSg3JYf9o5UNhBtVQ"
                alt="Cozy interior seating area of Cafe Me Chennai showing comfortable padded booth seats"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C120D]/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                <span className="inline-block px-2.5 sm:px-3 py-1 rounded-full bg-[#FFF4DC]/90 backdrop-blur-xs text-[#1C120D] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider shadow-xs mb-1">
                  Evening Gossip Sessions
                </span>
                <p className="font-['Syne'] text-base sm:text-xl text-[#FDFBF7] font-bold leading-tight">
                  The heartbeat of our neighborhood tables
                </p>
              </div>
            </div>

            {/* Collage Item 2: Corner Booth Reading */}
            <div
              onClick={() => onNavigate('gallery')}
              className="md:col-span-5 relative group rounded-2xl overflow-hidden shadow-xs bg-[#F8F1E5] aspect-[16/10] md:aspect-auto cursor-pointer border border-[#E9DDCC]"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6iYAT4qRky-uamcOyzz47M3SWCx-PXU6U6GKJRzKynwEMObdCQfGp_wUEhPTYTDkr3pjUXXgwiBmXsvM4XZSSTckQYZH8gZjsI28ZMDLSo-P8siMj95ZX-sB2s4WfkhJS2mqkyT8qkBP7EhQY1VjR0DYHEkt6Khp99Pr0hK3fP499EW02_kFwCje-XbW08ikRCcah-n4GktYUwHFiUi_QQJWaxHLEK4VWSxEsArEHQzVZQiu5sOs9pw"
                alt="A quiet cozy corner of Cafe Me with a single guest reading a novel"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C120D]/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                <span className="inline-block px-2.5 sm:px-3 py-1 rounded-full bg-[#F4B323] text-[#1C120D] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider shadow-xs mb-1">
                  Corner Booth Reading
                </span>
                <p className="font-['Syne'] text-base sm:text-xl text-[#FDFBF7] font-bold leading-tight">
                  Quiet pockets for slow afternoons
                </p>
              </div>
            </div>

            {/* Collage Item 3: Coffee Pulling Close-up */}
            <div
              onClick={() => onNavigate('gallery')}
              className="md:col-span-4 relative group rounded-2xl overflow-hidden shadow-xs bg-[#F8F1E5] aspect-square cursor-pointer border border-[#E9DDCC]"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3kvtbHG2wZ2SGA27Ta0PgWJpLFnenZncNhi0AlX9YLz-vt_KJvU9DR9Xm0pJLBG-XgV51LOaIVj1JfbTlXlD1n6O1VWO6cnj6PYa--tCDUcacR9AwJ4mTBtLKVRRHvc8yZDG1pFxLQghAQwkobYPaCwQCxN77YKgnRik9UAnnGZzDgbHHemvaRFk5GIGLqZj1DShDX6djzcZOY03SZks2NHv93F_FFP0cudn1pGIVqiV_n1QPaV2fSw"
                alt="Macro artistic detail of espresso brewing into a clear glass"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C120D]/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                <span className="inline-block px-2 sm:px-2.5 py-0.5 rounded-full bg-[#FFF4DC]/90 backdrop-blur-xs text-[#8F2118] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider shadow-xs mb-1">
                  Slow Roasted
                </span>
                <p className="font-['Syne'] text-sm sm:text-base text-[#FDFBF7] font-bold leading-tight">
                  Freshly ground daily
                </p>
              </div>
            </div>

            {/* Collage Item 4: Platter Celebration */}
            <div
              onClick={() => onNavigate('gallery')}
              className="md:col-span-4 relative group rounded-2xl overflow-hidden shadow-xs bg-[#F8F1E5] aspect-square cursor-pointer border border-[#E9DDCC]"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzyZzYWrVVaex0VsGPCKyYmGWJoFAeyTN8iNsWRcvReHRU8r4Wb2Mxc4ywHwo8fHmF33ZTdBZy3PVwCHdchxdY8UohPVZxoQiOc-Xx3VmHn5HXbhvStJy_RqiLUF_FuDtObw00O6C0vtSF0_KGb8FvBsLIH2BZ3hL0faMWZLdUT8YmBK21zfZXOk_Q2jC_ee__VcoInAHN4UuHsVnBTGqBUwDrS-52m746sv7EvXbi5Oszg8QFTI2ohw"
                alt="Vibrant tabletop spread at Cafe Me featuring cheese fries, pasta and garlic bread"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C120D]/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                <span className="inline-block px-2 sm:px-2.5 py-0.5 rounded-full bg-[#FFF4DC]/90 backdrop-blur-xs text-[#641A12] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider shadow-xs mb-1">
                  Comfort Platters
                </span>
                <p className="font-['Syne'] text-sm sm:text-base text-[#FDFBF7] font-bold leading-tight">
                  Made for table-sharing
                </p>
              </div>
            </div>

            {/* Collage Item 5: Friendly Laughter */}
            <div
              onClick={() => onNavigate('gallery')}
              className="md:col-span-4 relative group rounded-2xl overflow-hidden shadow-xs bg-[#F8F1E5] aspect-square cursor-pointer border border-[#E9DDCC]"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbpdfEM3VfGhllEURDWf-7e6PhGgm-RueKWOXZdpXhAemk221eF6pMiwWYqVXjdJp6wuPEOsF0q9Iypd5C_SvJbbS7v4dMH07USV6LQdF1E-OJEfMtcMC52QmdmBfIav4E1LcmPHWFkGNZ9JQ_xtfW6tVQtGD0OYDjKWcsX0DmaZDyVXxfV1UkW3aOec4-R--lj4SVygFNhZjSyfIB5pLxDSI3t4AGgzY3KIEcDSODDbipqcXgEQNzNQ"
                alt="Cheerful group of young people laughing around a table inside Cafe Me Chennai"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C120D]/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                <span className="inline-block px-2 sm:px-2.5 py-0.5 rounded-full bg-[#F4B323] text-[#1C120D] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider shadow-xs mb-1">
                  K.K. Nagar Community
                </span>
                <p className="font-['Syne'] text-sm sm:text-base text-[#FDFBF7] font-bold leading-tight">
                  PSBB alumni &amp; memories
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 5: COMMUNITY LOVE & REVIEWS (SOCIAL PROOF)
         ======================================================== */}
      <section className="w-full py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-[#fff1eb]/60 relative border-y border-[#E9DDCC]/50 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-10">
          {/* Header with Big Rating Badge */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6">
            <div className="flex flex-col gap-1 max-w-xl">
              <div className="inline-flex items-center gap-1.5 text-[#7c5800] text-xs uppercase tracking-widest font-bold">
                <span className="material-symbols-outlined text-[18px] text-[#F4B323] filled">star</span>
                Verified Google Reviews
              </div>
              <h2 className="font-['Syne'] text-2xl xs:text-3xl sm:text-4xl text-[#1C120D] tracking-tight font-bold">
                Loved by the People Who Visit
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-[#58413e] max-w-xl">
                Real feedback from our regular neighborhood guests, PSBB school students, and visiting food lovers across Chennai.
              </p>
            </div>

            {/* Rating Pill Box */}
            <div className="flex items-center gap-4 bg-[#F8F1E5] px-4 sm:px-6 py-3.5 sm:py-4 rounded-2xl shadow-xs border border-[#E9DDCC] w-full sm:w-auto justify-start">
              <div className="font-['Syne'] text-3xl sm:text-4xl md:text-5xl text-[#641A12] font-extrabold leading-none shrink-0">
                4.6
              </div>
              <div className="flex flex-col">
                <div className="flex items-center text-[#F4B323]">
                  <span className="material-symbols-outlined text-[18px] sm:text-[20px] filled">star</span>
                  <span className="material-symbols-outlined text-[18px] sm:text-[20px] filled">star</span>
                  <span className="material-symbols-outlined text-[18px] sm:text-[20px] filled">star</span>
                  <span className="material-symbols-outlined text-[18px] sm:text-[20px] filled">star</span>
                  <span className="material-symbols-outlined text-[18px] sm:text-[20px] filled">star_half</span>
                </div>
                <span className="text-xs uppercase tracking-wider text-[#1C120D] font-bold mt-1">
                  Based on 850+ Ratings
                </span>
              </div>
            </div>
          </div>

          {/* Testimonial Cards Mosaic */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {COMMUNITY_REVIEWS.map((review) => (
              <div
                key={review.id}
                className="flex flex-col justify-between bg-[#FDFBF7] rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-md transition-shadow border border-[#E9DDCC]"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#F4B323]">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-[16px] sm:text-[18px] filled">
                          star
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-[#7c5800] font-bold">{review.date}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#1C120D] leading-relaxed">
                    "{review.comment}"
                  </p>
                </div>

                <div className="pt-3.5 sm:pt-4 mt-3 sm:mt-4 flex items-center gap-3 border-t border-[#E9DDCC]/70">
                  <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full ${review.avatarBg} font-bold flex items-center justify-center font-['Syne'] text-xs sm:text-sm shrink-0`}>
                    {review.initial}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-['Syne'] text-xs sm:text-sm font-bold text-[#1C120D] leading-tight">
                      {review.author}
                    </span>
                    <span className="text-[11px] sm:text-xs text-[#58413e]">{review.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Action link to Google */}
          <div className="flex justify-center pt-2">
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-lg bg-[#F8F1E5] text-[#641A12] text-xs sm:text-sm font-bold shadow-xs hover:bg-[#F4B323] hover:text-[#1C120D] transition-all border border-[#E9DDCC] text-center"
            >
              <span className="material-symbols-outlined text-[18px]">open_in_new</span>
              <span>Read all 850+ reviews on Google Maps</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 6: "COME BY. STAY AWHILE." (VISIT US PRE-FOOTER CTA)
         ======================================================== */}
      <section className="w-full py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-[#FDFBF7] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-[#1C120D] text-[#F8F1E5] rounded-3xl p-5 sm:p-8 lg:p-12 shadow-xl overflow-hidden border border-[#8F2118]/50">
            {/* Background Decorative Motif */}
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#8F2118]/20 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-[#F4B323]/10 blur-3xl pointer-events-none" />
            {/* Continuously moving top stripe LEFT -> RIGHT */}
            <div className="h-2 w-full absolute top-0 left-0 animate-stripe-right" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 pt-2">
              {/* Left Column: Timings & Address Details */}
              <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8F2118]/40 border border-[#F4B323]/30 w-fit">
                  <span className="w-2 h-2 rounded-full bg-[#1b8a36] animate-pulse shrink-0" />
                  <span className="text-xs uppercase tracking-widest text-[#F4B323] font-bold">
                    Now Brewing in K.K. Nagar
                  </span>
                </div>

                <h2 className="font-['Syne'] text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-[#FDFBF7] tracking-tight leading-[1.15] font-bold break-words">
                  Come by. Stay awhile.<br />
                  <span className="text-[#F4B323] italic font-normal">We'll save you a cup.</span>
                </h2>

                <p className="text-xs sm:text-sm md:text-base text-[#f9e4db] max-w-xl leading-relaxed">
                  Drop in after classes at PSBB, unwind after an office day, or bring the entire family together for a quiet, hearty vegetarian meal.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-[#F4B323] text-[20px] sm:text-[22px] mt-0.5 shrink-0">storefront</span>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#F4B323] font-bold block mb-1">
                        Cafe Me Chennai
                      </span>
                      <p className="text-xs sm:text-sm text-[#FDFBF7] leading-relaxed">
                        Old No.260, New No.54,<br />
                        Alagirisamy Salai,<br />
                        Opp. PSBB School (Gate 1),<br />
                        Sector 8, K.K. Nagar,<br />
                        Chennai, Tamil Nadu 600078
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-[#F4B323] text-[20px] sm:text-[22px] mt-0.5 shrink-0">schedule</span>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#F4B323] font-bold block mb-1">
                        Operating Hours &amp; Phone
                      </span>
                      <p className="text-xs sm:text-sm text-[#FDFBF7] leading-relaxed">
                        {CAFE_HOURS.days}<br />
                        {CAFE_HOURS.timings}<br />
                        <span className="text-[#F4B323] font-bold">Open All 7 Days</span>
                      </p>
                      <p className="text-xs text-[#FDFBF7] mt-1 font-mono">
                        Phone: <a href={PHONE_CALL_URL} className="text-[#F4B323] hover:underline font-bold">{PHONE_NUMBER}</a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Actions: CALL NOW • WHATSAPP US • GET DIRECTIONS */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-3 w-full sm:w-auto">
                  <a
                    href={PHONE_CALL_URL}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#F4B323] text-[#1C120D] text-xs sm:text-sm font-bold shadow-md hover:bg-[#FDFBF7] transition-all cursor-pointer text-center"
                  >
                    <span className="material-symbols-outlined text-[18px]">call</span>
                    <span>CALL NOW</span>
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#8F2118] text-[#FDFBF7] text-xs sm:text-sm font-bold shadow-xs hover:bg-[#641A12] transition-all text-center"
                  >
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                    <span>WHATSAPP US</span>
                  </a>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-[#F4B323]/50 text-[#f9e4db] hover:text-[#1C120D] hover:bg-[#F4B323] text-xs sm:text-sm font-bold transition-all text-center"
                  >
                    <span className="material-symbols-outlined text-[18px]">directions</span>
                    <span>GET DIRECTIONS</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive Map Card */}
              <div className="lg:col-span-5 flex flex-col gap-2">
                <div className="rounded-2xl overflow-hidden shadow-2xl relative bg-[#F8F1E5] border border-white/10">
                  <div
                    className="w-full h-60 sm:h-72 bg-cover bg-center rounded-2xl relative"
                    style={{
                      backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBul4P-qZSIAmnU-5FwKr8IKz4Qi5ekldxd0StvwtE4jXqj8gvt0OulGtMU8qHvmfgJJKz3LK8l6equIVquS-YIbXfaOJdMKLuuGybQMC3FXtZ8vkugE7oeOjGdQaABQHzvQHp-REf954bljNQJgOjRKsDe4m0d5ewtuHGSHXBHSWT15kM-3FGMbdJKqw3bUeF8kJ8L3HHXhoQjLCZ991RJWxrYoqMh3N2QgTb1WLZ7u0Woy0DcuqFyig')`
                    }}
                  >
                    {/* Landmark Floating Marker */}
                    <div className="absolute inset-0 bg-[#1C120D]/30 flex items-center justify-center p-3 sm:p-4">
                      <div className="bg-[#FDFBF7] text-[#1C120D] p-3.5 sm:p-4 rounded-xl shadow-2xl max-w-xs text-center flex flex-col items-center gap-1 border border-[#E9DDCC]">
                        <div className="w-8 h-8 rounded-full bg-[#8F2118] text-[#FDFBF7] flex items-center justify-center shadow-xs">
                          <span className="material-symbols-outlined text-[18px]">pin_drop</span>
                        </div>
                        <span className="font-['Syne'] text-base font-bold text-[#641A12] leading-none mt-1">
                          Cafe Me Chennai
                        </span>
                        <span className="text-xs text-[#58413e]">
                          Opp. PSBB Gate 1 • K.K. Nagar
                        </span>
                        <a
                          href={GOOGLE_MAPS_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 text-[#8F2118] text-xs uppercase tracking-wider font-bold hover:underline"
                        >
                          Open in Google Maps →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Landmark Footnote */}
                <div className="px-2 flex items-center justify-between text-[#ffeae0]/80 text-xs">
                  <span>Street parking available nearby</span>
                  <span className="text-[#F4B323] font-bold">Opposite PSBB Gate 1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
