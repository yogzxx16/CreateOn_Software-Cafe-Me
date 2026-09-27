import React, { useState, useMemo } from 'react';
import { MenuCategory, MenuItem, PageView } from '../types';
import { ALL_MENU_ITEMS, getWhatsAppOrderUrl, WHATSAPP_NUMBER } from '../data/cafeData';

interface MenuPageProps {
  onNavigate: (page: PageView) => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterVegOnly, setFilterVegOnly] = useState(false);
  const [filterSpecialsOnly, setFilterSpecialsOnly] = useState(false);

  const categories: { key: MenuCategory; label: string; icon: string; count: number }[] = [
    { 
      key: 'all', 
      label: 'All Items', 
      icon: '✨',
      count: ALL_MENU_ITEMS.length 
    },
    { 
      key: 'coffee', 
      label: 'Craft Coffee', 
      icon: '☕',
      count: ALL_MENU_ITEMS.filter(item => item.category.includes('coffee')).length 
    },
    { 
      key: 'coolers', 
      label: 'Chillers & Coolers', 
      icon: '🧊',
      count: ALL_MENU_ITEMS.filter(item => item.category.includes('coolers')).length 
    },
    { 
      key: 'pastas', 
      label: 'Baked & Fresh Pastas', 
      icon: '🍝',
      count: ALL_MENU_ITEMS.filter(item => item.category.includes('pastas')).length 
    },
    { 
      key: 'momos', 
      label: 'Gourmet Momos & Bites', 
      icon: '🥟',
      count: ALL_MENU_ITEMS.filter(item => item.category.includes('momos')).length 
    },
    { 
      key: 'desserts', 
      label: 'Waffles & Bakes', 
      icon: '🧇',
      count: ALL_MENU_ITEMS.filter(item => item.category.includes('desserts')).length 
    }
  ];

  const filteredItems = useMemo(() => {
    return ALL_MENU_ITEMS.filter(item => {
      // Category match
      if (selectedCategory !== 'all' && !item.category.includes(selectedCategory)) {
        return false;
      }
      // Search match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesTag = item.tags.some(tag => tag.toLowerCase().includes(query));
        if (!matchesName && !matchesDesc && !matchesTag) {
          return false;
        }
      }
      // Specials filter
      if (filterSpecialsOnly && !item.badge) {
        return false;
      }
      return true;
    });
  }, [selectedCategory, searchQuery, filterSpecialsOnly]);

  return (
    <div className="bg-cream-canvas min-h-screen text-espresso-dark font-body selection:bg-mustard-awning selection:text-espresso-dark overflow-x-hidden">
      {/* Decorative top heritage stripe - Continuously moving LEFT -> RIGHT */}
      <div className="h-1.5 w-full animate-stripe-right" />

      {/* Hero / Header Section */}
      <header className="relative pt-8 sm:pt-12 pb-10 sm:pb-14 px-4 sm:px-6 lg:px-8 bg-linen-surface border-b border-cafe-crimson/10 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-mustard-awning/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-cafe-crimson/10 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cafe-crimson/10 border border-cafe-crimson/20 text-cafe-crimson text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-4 max-w-full truncate">
            <span className="w-2 h-2 rounded-full bg-green-600 inline-block animate-pulse shrink-0" />
            100% Pure Vegetarian Comfort Kitchen
          </div>
          
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-espresso-dark tracking-tight leading-tight break-words">
            Where Every Bite <span className="italic text-cafe-crimson font-serif">Feels Like Home.</span>
          </h1>
          
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-espresso-dark/75 max-w-2xl mx-auto font-sans leading-relaxed">
            From our rich Chikmagalur filter decoction and molten Belgian chocolates to slow-baked 4-cheese macaroni and fiery crisp momos, every dish is freshly crafted to order in our K.K. Nagar kitchen.
          </p>

          {/* Quick Notice Pill */}
          <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[11px] sm:text-xs font-medium text-espresso-dark/70">
            <span className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm px-2.5 sm:px-3 py-1.5 rounded-full border border-cafe-crimson/15 shadow-xs">
              <span className="w-3.5 h-3.5 rounded-xs border border-green-700 flex items-center justify-center p-0.5 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-green-700" />
              </span>
              Strictly Vegetarian
            </span>
            <span className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm px-2.5 sm:px-3 py-1.5 rounded-full border border-cafe-crimson/15 shadow-xs">
              🌿 Oat & Almond Milk
            </span>
            <span className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm px-2.5 sm:px-3 py-1.5 rounded-full border border-cafe-crimson/15 shadow-xs">
              ⚡ Prepared Fresh
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-10">
        {/* Search & Filter Controls */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-cafe-crimson/10 mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-espresso-dark/40">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search coffee, pasta, momos, waffles..."
                className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-cafe-crimson/20 focus:border-cafe-crimson focus:ring-2 focus:ring-cafe-crimson/20 bg-cream-canvas/50 text-sm font-sans placeholder-espresso-dark/40 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs text-espresso-dark/40 hover:text-cafe-crimson"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick toggles */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
              <button
                onClick={() => setFilterSpecialsOnly(!filterSpecialsOnly)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide border transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  filterSpecialsOnly 
                    ? 'bg-mustard-awning text-espresso-dark border-mustard-awning shadow-xs' 
                    : 'bg-cream-canvas text-espresso-dark/70 border-cafe-crimson/15 hover:border-cafe-crimson/30'
                }`}
              >
                <span>⭐</span>
                <span>Chef Specials</span>
              </button>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                  setFilterSpecialsOnly(false);
                }}
                className="px-3.5 py-2 rounded-xl text-xs font-medium text-cafe-crimson hover:bg-cafe-crimson/5 transition-colors whitespace-nowrap"
              >
                Reset Filters
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-2 border-t border-cafe-crimson/10">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap flex items-center gap-2 border ${
                    isActive
                      ? 'bg-cafe-crimson text-white border-cafe-crimson shadow-sm'
                      : 'bg-linen-surface/60 text-espresso-dark/70 border-transparent hover:border-cafe-crimson/20 hover:text-cafe-crimson'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-black/5 text-espresso-dark/60'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs font-medium text-espresso-dark/60 mb-6 px-1">
          <span>Showing {filteredItems.length} freshly crafted vegetarian dishes</span>
          <span className="hidden sm:inline">Tap item to enquire or order via WhatsApp</span>
        </div>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-cafe-crimson/10 max-w-md mx-auto my-8">
            <span className="text-4xl">🔍</span>
            <h3 className="font-display font-bold text-xl text-espresso-dark mt-3">No matching dishes</h3>
            <p className="text-xs text-espresso-dark/70 mt-1 mb-5">
              We couldn't find anything matching "{searchQuery}". Try searching for coffee, momos, or pasta!
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setFilterSpecialsOnly(false);
              }}
              className="px-5 py-2 rounded-xl bg-cafe-crimson text-white text-xs font-semibold hover:bg-maroon-roast transition-colors"
            >
              Show All Menu Items
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden border border-cafe-crimson/15 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Badges */}
                  <div className="relative aspect-4/3 overflow-hidden bg-linen-surface">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                    {/* Pure Vegetarian Symbol (Top Left) */}
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm p-1 rounded-md shadow-xs flex items-center justify-center">
                      <div className="w-4 h-4 border border-green-700 flex items-center justify-center p-0.5" title="Pure Vegetarian">
                        <div className="w-2 h-2 rounded-full bg-green-700" />
                      </div>
                    </div>

                    {/* Special Badge (Top Right) */}
                    {item.badge && (
                      <span className="absolute top-3 right-3 bg-mustard-awning text-espresso-dark text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-xs">
                        {item.badge}
                      </span>
                    )}

                    {/* Tags at bottom of image */}
                    <div className="absolute bottom-2.5 left-3 right-3 flex flex-wrap gap-1">
                      {item.tags.map((tag, i) => (
                        <span key={i} className="text-[10px] bg-black/50 backdrop-blur-sm text-white px-2 py-0.5 rounded-full font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <h3 className="font-display font-bold text-lg text-espresso-dark group-hover:text-cafe-crimson transition-colors leading-snug">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-xs text-espresso-dark/75 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer with Price and Action */}
                <div className="px-5 pb-5 pt-2 border-t border-linen-surface flex items-center justify-between gap-3">
                  <div>
                    <span className="text-xs text-espresso-dark/50 block font-medium">Price</span>
                    <span className="font-display font-extrabold text-base text-cafe-crimson">
                      {item.price}
                    </span>
                  </div>

                  <a
                    href={getWhatsAppOrderUrl(item.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-linen-surface hover:bg-cafe-crimson text-espresso-dark hover:text-white text-xs font-semibold transition-all border border-cafe-crimson/20 hover:border-cafe-crimson"
                    title={`Enquire or order ${item.name} via WhatsApp`}
                  >
                    <span>Order via WhatsApp</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Note on Prices & Customisation */}
        <div className="mt-14 p-6 sm:p-8 bg-linen-surface rounded-2xl border border-cafe-crimson/15 text-center max-w-3xl mx-auto space-y-3">
          <div className="w-10 h-10 rounded-full bg-cafe-crimson/10 text-cafe-crimson flex items-center justify-center mx-auto text-lg">
            📜
          </div>
          <h4 className="font-display font-bold text-base text-espresso-dark">
            Freshness & Kitchen Standards
          </h4>
          <p className="text-xs text-espresso-dark/70 leading-relaxed max-w-xl mx-auto">
            All prices are in Indian Rupees (INR) and inclusive of applicable taxes. Customizations including Jain preparation, no-onion/no-garlic preferences, and plant-based milks (oat, almond) can be accommodated on request.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Cafe Me! I'd like to ask a dietary or order question.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cafe-crimson text-white text-xs font-semibold hover:bg-maroon-roast transition-colors shadow-xs"
            >
              <span>Chat with Head Chef / Barista</span>
              <span>→</span>
            </a>
            <button
              onClick={() => onNavigate('visit-us')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-cafe-crimson/20 text-espresso-dark text-xs font-semibold hover:bg-cream-canvas transition-colors"
            >
              <span>Visit Us in K.K. Nagar</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
