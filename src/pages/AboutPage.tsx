import React from 'react';
import { PageView } from '../types';
import { STORY_FAQS, CAFE_ADDRESS, CAFE_HOURS, INSTAGRAM_URL } from '../data/cafeData';

interface AboutPageProps {
  onNavigate: (page: PageView) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-cream-canvas min-h-screen text-espresso-dark font-body selection:bg-mustard-awning selection:text-espresso-dark overflow-x-hidden">
      {/* Top Heritage Stripe - Continuously moving LEFT -> RIGHT */}
      <div className="h-1.5 w-full animate-stripe-right" />

      {/* Hero Narrative Header */}
      <header className="relative py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-linen-surface border-b border-cafe-crimson/10 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cafe-crimson/10 border border-cafe-crimson/20 text-cafe-crimson text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-4 max-w-full truncate">
            K.K. Nagar • Sector 8 • Opp. PSBB Gate 1
          </div>
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-espresso-dark tracking-tight leading-tight break-words">
            More Than Just a Café. <br />
            <span className="italic text-cafe-crimson font-serif font-normal">A Living Room for K.K. Nagar.</span>
          </h1>
          <p className="mt-3 sm:mt-5 text-sm sm:text-base lg:text-lg text-espresso-dark/80 font-sans leading-relaxed max-w-2xl mx-auto">
            Born out of a simple desire to create a warm, welcoming space where good coffee and sincere vegetarian food spark unforgettable memories.
          </p>
        </div>
      </header>

      {/* Main Story & Editorial Grid */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12 sm:space-y-20">
        
        {/* Story Section 1: The Beginning */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block px-3 py-1 rounded-md bg-mustard-awning/20 text-maroon-roast font-semibold text-xs tracking-wider uppercase">
              The Genesis
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-espresso-dark leading-snug">
              Where Memories Brew Across Generations
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-espresso-dark/75 leading-relaxed font-sans">
              <p>
                Tucked along the tree-lined stretch of Alagirisamy Salai, directly opposite Gate 1 of the historic PSBB School, Cafe Me began with an earnest observation: while Chennai had plenty of fast-food joints and formal dining rooms, K.K. Nagar was missing a true neighborhood sanctuary.
              </p>
              <p>
                A place where students could dissect board exams over iced cold coffee, where freelancers could write undisturbed beneath warm amber lamps, where young couples could share crisp momos on rainy afternoons, and where families could bond over gratinated macaroni without ever worrying about dietary boundaries.
              </p>
              <p className="font-serif italic text-base text-cafe-crimson border-l-2 border-cafe-crimson pl-4 py-1">
                “We wanted to build not just a menu, but an atmosphere that feels like stepping into your own living room—rich with laughter, steaming cups, and genuine warmth.”
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-lg border border-cafe-crimson/15">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEWZrSm4yi6cZakwdrN6bbTQzGxaj63M69TIB_NFcKYjfbsvNl0GhAhociWYtTbTyy2vKg5iQIkyxpzyrtCFRQF3P6C4zxCWTmj9ZdcMeWVp35E-c5SCNRUP6dLjAcXQ3u6h5RnQzYKVDDRYxyPLRdBz1_xJ-Fa6HT6VmCNZQVUymJ3I0wAWjUX0xaY7zTQkvRGyb0DzoCchwca8hQbFz8qMmQ6QOJ1dCAmiCib0H4fMnIh8uKie22aA"
                  alt="Cafe Me Storefront at Twilight"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-md border border-cafe-crimson/10 max-w-xs hidden sm:block">
                <p className="text-xs font-serif italic text-espresso-dark/80">
                  “The iconic crimson & mustard awning glowing on Alagirisamy Salai at dusk.”
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Four Core Pillars */}
        <section className="bg-linen-surface/70 rounded-3xl p-8 sm:p-12 border border-cafe-crimson/10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold tracking-widest text-cafe-crimson uppercase">
              Our Compass
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-espresso-dark mt-2">
              The Four Pillars of Cafe Me
            </h2>
            <p className="text-xs sm:text-sm text-espresso-dark/70 mt-2">
              Every bean we grind, every sauce we simmer, and every seat we wipe down is guided by four immutable commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-cafe-crimson/10 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cafe-crimson/10 text-cafe-crimson flex items-center justify-center text-xl">
                🌱
              </div>
              <h3 className="font-display font-bold text-lg text-espresso-dark">
                100% Pure Vegetarian Inclusivity
              </h3>
              <p className="text-xs text-espresso-dark/75 leading-relaxed">
                Vegetarian dining at Cafe Me is never a compromise. Our kitchen is exclusively meat-free, offering absolute peace of mind for traditional patrons, students, and curious gourmands alike. We also provide thoughtful vegan and Jain adjustments.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-cafe-crimson/10 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-mustard-awning/20 text-maroon-roast flex items-center justify-center text-xl">
                ☕
              </div>
              <h3 className="font-display font-bold text-lg text-espresso-dark">
                Heritage Roasts & Barista Craft
              </h3>
              <p className="text-xs text-espresso-dark/75 leading-relaxed">
                We celebrate Chennai's timeless love affair with strong coffee. From our artisanal Chikmagalur plantation peaberry decoction poured high in brass to velvety Belgian dark hot chocolates and creamy frappes, our beverage counter never cuts corners.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-cafe-crimson/10 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cafe-crimson/10 text-cafe-crimson flex items-center justify-center text-xl">
                🎨
              </div>
              <h3 className="font-display font-bold text-lg text-espresso-dark">
                Youthful & Artistic Atmosphere
              </h3>
              <p className="text-xs text-espresso-dark/75 leading-relaxed">
                Soft lo-fi music, ambient warm lighting, book swap shelves, and handwritten notes on the message board. Cafe Me has organically evolved into an incubator for budding musicians, school friends reunited, and creative thinkers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-cafe-crimson/10 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-mustard-awning/20 text-maroon-roast flex items-center justify-center text-xl">
                🤝
              </div>
              <h3 className="font-display font-bold text-lg text-espresso-dark">
                Generous Neighborhood Hospitality
              </h3>
              <p className="text-xs text-espresso-dark/75 leading-relaxed">
                You are never rushed out of your chair. Whether you drop in for a quick 10-minute espresso on your commute or spend three hours finishing a thesis chapter with a warm brownie, our crew welcomes you with genuine smiles.
              </p>
            </div>
          </div>
        </section>

        {/* Visual Storytelling Collage */}
        <section className="space-y-8">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl font-black text-espresso-dark">
              Moments Behind the Counter
            </h2>
            <p className="text-xs text-espresso-dark/70 mt-2">
              A glimpse into the daily rhythm of our K.K. Nagar café
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden border border-cafe-crimson/10 shadow-xs group">
              <div className="aspect-4/3 overflow-hidden bg-linen-surface">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqpEzt0dOFUwEC7_zziFrad2-nWIcPriXOMImj9ltkl2-13CWFBgKCwsTyfwnEleF2NXSHEL2i0kQcnepMMkCTjq7yc53dONNbwIOwzWtdJAuLntd87w8ajlimlSRuGrKhv0Jh2LX02ze8ufZbmduguNpMN3UpWuKzV5ItiZCLGg_C-3aKflAy4VfCDp4nk_fHWq2EpJR_snf5cNY9FPoa1iQ4Wm8mXJmxli2L2imFHIUmhAejID3MNw"
                  alt="Barista Latte Pour"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-white">
                <h4 className="font-display font-bold text-sm text-espresso-dark">Freshly Steamed Rosetta</h4>
                <p className="text-xs text-espresso-dark/65 mt-1">Every cup poured with calibrated crema and dense microfoam.</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-cafe-crimson/10 shadow-xs group">
              <div className="aspect-4/3 overflow-hidden bg-linen-surface">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRaaGeBdwrMIb60_kDWd4dUKZHtHYiph-oSEwk0me1egnmMjSzo19ShrnbSmTFGMayTcpJF1rvhsgg1dWd5vOKDQo-XQvOebhrK4aA-k5VSlcaW9ImInag2wMhjQq-RqtF98WXj9h5jDm8mgg3ZE5M4niCOMmirWEGZnn6u2ck-HF_e96C4vQgEsnBJpB_clSJarKkS4tdoVn-tAUfe2jA_NVrq-ub4m51eiFO6eTH3ApfvVpVXdhK0A"
                  alt="Mac and cheese freshly baked"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-white">
                <h4 className="font-display font-bold text-sm text-espresso-dark">The 4-Cheese Melt</h4>
                <p className="text-xs text-espresso-dark/65 mt-1">Slow baked in our stone hearth with fragrant herb crunch.</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-cafe-crimson/10 shadow-xs group sm:col-span-2 lg:col-span-1">
              <div className="aspect-4/3 overflow-hidden bg-linen-surface">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDL-mHsCdQz9BIhvN5cdgrrkWPAt05V_yGj0PEfiuNzJYWVMuDdjJJ0cL3MgMB3Gt3CuOgcrkr-FGbMu3K9kuCKI3AVu4vqnyMtYLKjJFyh0Rms2NUKmBuesCStC9sV15viX02GN4f9vHm250YgBccyfee-8Vu4BCCVNu-Y4ZGfaYOVQTw0FYp1MVJiufUQIKSr0zOsy9K_pVpigMeWFE1bAYorM8PU2MdopHd9HMt13jzH3jKEUM0W-A"
                  alt="Sunlit Reading Nook"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-white">
                <h4 className="font-display font-bold text-sm text-espresso-dark">Afternoon Sunlight & Books</h4>
                <p className="text-xs text-espresso-dark/65 mt-1">Linen curtains, quiet corners, and time that slows down.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-cafe-crimson/15 shadow-xs">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="text-xs font-semibold tracking-widest text-cafe-crimson uppercase">
              Curious About Us?
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-espresso-dark mt-2">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-cafe-crimson/10">
            {STORY_FAQS.map((faq) => (
              <div key={faq.id} className="py-5 space-y-2">
                <h3 className="font-display font-bold text-base text-espresso-dark flex items-center gap-2">
                  <span className="text-cafe-crimson">Q.</span>
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm text-espresso-dark/75 leading-relaxed pl-5 font-sans">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to action */}
        <section className="bg-espresso-dark text-cream-canvas rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-mustard-awning/10 rounded-full blur-3xl" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="text-mustard-awning text-xs font-bold tracking-widest uppercase">
              Join Us This Week
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-white">
              Come Pull Up a Chair. <br />
              <span className="italic font-serif font-normal text-mustard-awning">We'll Put the Kettle On.</span>
            </h2>
            <p className="text-xs sm:text-sm text-cream-canvas/70 leading-relaxed font-sans">
              Open 7 days a week from 11:00 AM to 11:00 PM. Located opposite PSBB Gate 1 on Alagirisamy Salai.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => onNavigate('menu')}
                className="px-6 py-3 rounded-xl bg-mustard-awning text-espresso-dark font-bold text-xs sm:text-sm hover:bg-yellow-400 transition-colors shadow-sm"
              >
                Browse Our Menu
              </button>
              <button
                onClick={() => onNavigate('visit-us')}
                className="px-6 py-3 rounded-xl bg-cafe-crimson text-white font-bold text-xs sm:text-sm hover:bg-maroon-roast transition-colors shadow-sm"
              >
                Get Directions to K.K. Nagar
              </button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};
