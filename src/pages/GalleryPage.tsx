import React, { useState, useMemo } from 'react';
import { GalleryCategory, GalleryItem, PageView } from '../types';
import { GALLERY_ITEMS, INSTAGRAM_HANDLE, INSTAGRAM_URL, INSTAGRAM_POSTS } from '../data/cafeData';

interface GalleryPageProps {
  onNavigate: (page: PageView) => void;
  onSelectItem: (item: GalleryItem) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate, onSelectItem }) => {
  const [activeTab, setActiveTab] = useState<GalleryCategory>('all');

  const filterTabs: { key: GalleryCategory; label: string; count: number }[] = [
    { key: 'all', label: 'All Frames', count: GALLERY_ITEMS.length },
    { key: 'vibe', label: 'Ambience & Vibe', count: GALLERY_ITEMS.filter(i => i.category === 'vibe').length },
    { key: 'brews', label: 'Artisan Brews', count: GALLERY_ITEMS.filter(i => i.category === 'brews').length },
    { key: 'food', label: 'Comfort Kitchen', count: GALLERY_ITEMS.filter(i => i.category === 'food').length },
    { key: 'memories', label: 'Guest Memories', count: GALLERY_ITEMS.filter(i => i.category === 'memories').length }
  ];

  const filteredItems = useMemo(() => {
    if (activeTab === 'all') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter(item => item.category === activeTab);
  }, [activeTab]);

  return (
    <div className="bg-cream-canvas min-h-screen text-espresso-dark font-body selection:bg-mustard-awning selection:text-espresso-dark overflow-x-hidden">
      {/* Top Heritage Stripe - Continuously moving LEFT -> RIGHT */}
      <div className="h-1.5 w-full animate-stripe-right" />

      {/* Hero Header */}
      <header className="relative pt-8 sm:pt-12 pb-10 sm:pb-14 px-4 sm:px-6 lg:px-8 bg-linen-surface border-b border-cafe-crimson/10 overflow-hidden text-center">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cafe-crimson/10 border border-cafe-crimson/20 text-cafe-crimson text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-4 max-w-full truncate">
            Curated Visual Diary
          </div>
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-espresso-dark tracking-tight leading-tight break-words">
            Memories Captured. <br />
            <span className="italic text-cafe-crimson font-serif font-normal">A Peek Inside Cafe Me.</span>
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-espresso-dark/75 max-w-2xl mx-auto font-sans leading-relaxed">
            From the evening glow on Alagirisamy Salai to bubbling cast-iron skillets and laughing book clubs, this is life unfolding at our K.K. Nagar home.
          </p>

          {/* Social Tag pill */}
          <div className="mt-5 sm:mt-6 inline-flex flex-wrap items-center justify-center gap-2 bg-white px-3 sm:px-4 py-2 rounded-full border border-cafe-crimson/15 shadow-xs text-xs font-medium text-espresso-dark/80 max-w-full">
            <span>📷 Tag us in your memories:</span>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cafe-crimson font-bold hover:underline"
            >
              {INSTAGRAM_HANDLE}
            </a>
            <span className="text-espresso-dark/40 hidden sm:inline">•</span>
            <span className="font-mono text-mustard-awning font-semibold">#WhereMemoriesBrew</span>
          </div>
        </div>
      </header>

      {/* Main Gallery Content */}
      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-10 sm:space-y-12">
        {/* Category Filters */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar pb-2 px-1">
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap flex items-center gap-2 border ${
                  isActive
                    ? 'bg-cafe-crimson text-white border-cafe-crimson shadow-xs'
                    : 'bg-white text-espresso-dark/70 border-cafe-crimson/15 hover:border-cafe-crimson/30 hover:text-cafe-crimson'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isActive ? 'bg-white/20 text-white' : 'bg-linen-surface text-espresso-dark/60'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectItem(item)}
              className="group relative bg-white rounded-2xl overflow-hidden border border-cafe-crimson/15 shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative aspect-4/3 overflow-hidden bg-linen-surface">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-mustard-awning">
                    {item.tag || item.category}
                  </span>
                  <h3 className="font-display font-bold text-base text-white mt-0.5">
                    {item.title}
                  </h3>
                  {item.caption && (
                    <p className="text-xs text-white/80 line-clamp-2 mt-1 font-sans">
                      {item.caption}
                    </p>
                  )}
                  <span className="text-[11px] text-white/60 mt-2 flex items-center gap-1 font-sans">
                    <span>Click to view larger frame</span>
                    <span>→</span>
                  </span>
                </div>

                {/* Badges on corner */}
                {item.badge && (
                  <span className="absolute top-3 right-3 bg-mustard-awning text-espresso-dark text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-xs">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Card Meta below */}
              <div className="p-4 bg-white flex items-center justify-between border-t border-cafe-crimson/10">
                <div>
                  <h4 className="font-display font-bold text-sm text-espresso-dark group-hover:text-cafe-crimson transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-espresso-dark/60 mt-0.5 font-sans">
                    {item.subtitle}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-linen-surface flex items-center justify-center text-cafe-crimson group-hover:bg-cafe-crimson group-hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community & Instagram Spotlight Section */}
        <section className="bg-linen-surface rounded-3xl p-8 sm:p-12 border border-cafe-crimson/15 shadow-xs space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold tracking-widest text-cafe-crimson uppercase">
                Instagram Community
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-black text-espresso-dark mt-1">
                Shared by the Neighborhood
              </h2>
              <p className="text-xs sm:text-sm text-espresso-dark/70 mt-1 max-w-xl">
                Recent snaps and stories from fellow coffee lovers, PSBB alumni, and weekend visitors.
              </p>
            </div>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cafe-crimson text-white text-xs font-bold hover:bg-maroon-roast transition-colors shadow-xs whitespace-nowrap self-start md:self-auto"
            >
              <span>Follow {INSTAGRAM_HANDLE}</span>
              <span>↗</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {INSTAGRAM_POSTS.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl overflow-hidden border border-cafe-crimson/10 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="aspect-square overflow-hidden bg-cream-canvas">
                    <img
                      src={post.imageUrl}
                      alt={post.caption}
                      loading="lazy"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3.5 space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-espresso-dark/60 font-sans">
                      <span className="font-bold text-espresso-dark">{post.handle}</span>
                      <span>{post.time}</span>
                    </div>
                    <p className="text-xs text-espresso-dark/80 line-clamp-2 leading-relaxed">
                      {post.caption}
                    </p>
                  </div>
                </div>
                <div className="px-3.5 pb-3 pt-1 border-t border-linen-surface flex items-center justify-between text-[11px] text-cafe-crimson font-medium">
                  <span>❤️ {post.likes} likes</span>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-espresso-dark/60"
                  >
                    View on Instagram
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Banner */}
        <section className="text-center py-6">
          <p className="font-serif italic text-base text-cafe-crimson">
            “Every cup holds a story, and every corner carries a conversation.”
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <button
              onClick={() => onNavigate('menu')}
              className="px-5 py-2 rounded-xl bg-white border border-cafe-crimson/20 text-xs font-semibold text-espresso-dark hover:bg-cream-canvas transition-colors"
            >
              Explore the Menu
            </button>
            <button
              onClick={() => onNavigate('visit-us')}
              className="px-5 py-2 rounded-xl bg-cafe-crimson text-white text-xs font-semibold hover:bg-maroon-roast transition-colors"
            >
              Plan Your Visit
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};
