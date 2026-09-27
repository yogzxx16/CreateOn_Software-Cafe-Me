import React, { useState } from 'react';
import { PageView } from '../types';
import { 
  CAFE_ADDRESS, 
  CAFE_HOURS, 
  PHONE_NUMBER, 
  WHATSAPP_NUMBER, 
  GOOGLE_MAPS_URL, 
  VISIT_FAQS,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL
} from '../data/cafeData';

interface VisitUsPageProps {
  onNavigate: (page: PageView) => void;
}

export const VisitUsPage: React.FC<VisitUsPageProps> = ({ onNavigate }) => {
  // Inquiry form states
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [inquiryType, setInquiryType] = useState('Table Reservation');
  const [partySize, setPartySize] = useState('2-4 Guests');
  const [preferredTime, setPreferredTime] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Live status calculation (Chennai is UTC+5:30)
  const isCurrentlyOpen = () => {
    try {
      const now = new Date();
      // Get IST hours and minutes
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const istTime = new Date(utc + (3600000 * 5.5));
      const hours = istTime.getHours();
      return hours >= 11 && hours < 23;
    } catch {
      return true; // default open
    }
  };

  const isOpen = isCurrentlyOpen();

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Cafe Me Chennai!
I would like to inquire about:
- Type: ${inquiryType}
- Name: ${guestName || 'A Guest'}
- Phone: ${guestPhone || 'Not provided'}
- Party Size: ${partySize}
- Preferred Time: ${preferredTime || 'This evening'}
- Notes: ${specialNotes || 'None'}

Looking forward to visiting!`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="bg-cream-canvas min-h-screen text-espresso-dark font-body selection:bg-mustard-awning selection:text-espresso-dark overflow-x-hidden">
      {/* Top Heritage Stripe - Continuously moving LEFT -> RIGHT */}
      <div className="h-1.5 w-full animate-stripe-right" />

      {/* Hero Header */}
      <header className="relative pt-8 sm:pt-12 pb-10 sm:pb-14 px-4 sm:px-6 lg:px-8 bg-linen-surface border-b border-cafe-crimson/10 overflow-hidden text-center">
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Live Open / Closed Pill */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-white border border-cafe-crimson/20 shadow-xs mb-4 max-w-full">
            <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${isOpen ? 'bg-green-600 animate-pulse' : 'bg-amber-600'}`} />
            <span className="text-[11px] sm:text-xs font-bold tracking-wide uppercase text-espresso-dark truncate">
              {isOpen ? 'Open Now • 11:00 AM to 11:00 PM' : 'Opens Today at 11:00 AM'}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-espresso-dark tracking-tight leading-tight break-words">
            Drop By for a Cup. <br />
            <span className="italic text-cafe-crimson font-serif font-normal">Our Doors Are Always Open.</span>
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-espresso-dark/75 max-w-2xl mx-auto font-sans leading-relaxed">
            Conveniently situated opposite PSBB School Gate 1 on Alagirisamy Salai. Come enjoy the quiet breeze of K.K. Nagar.
          </p>
        </div>
      </header>

      {/* Main Content Grid */}
      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 sm:space-y-16">
        
        {/* Contact Info Cards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Address Card */}
          <div className="bg-white rounded-2xl p-6 border border-cafe-crimson/15 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cafe-crimson/10 text-cafe-crimson flex items-center justify-center text-xl">
                📍
              </div>
              <h3 className="font-display font-bold text-lg text-espresso-dark">Our Location</h3>
              <p className="text-xs sm:text-sm text-espresso-dark/80 leading-relaxed font-sans">
                {CAFE_ADDRESS.line1},<br />
                {CAFE_ADDRESS.line2},<br />
                {CAFE_ADDRESS.area}, {CAFE_ADDRESS.city},<br />
                {CAFE_ADDRESS.state} – {CAFE_ADDRESS.pincode}
              </p>
              <div className="p-2.5 rounded-lg bg-linen-surface/70 border border-cafe-crimson/10 text-[11px] text-espresso-dark/70 font-sans">
                <strong>Landmark:</strong> {CAFE_ADDRESS.landmark}
              </div>
            </div>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-cafe-crimson hover:bg-maroon-roast text-white text-xs font-semibold transition-colors shadow-xs"
            >
              <span>Get Directions</span>
              <span>↗</span>
            </a>
          </div>

          {/* Timings Card */}
          <div className="bg-white rounded-2xl p-6 border border-cafe-crimson/15 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-mustard-awning/20 text-maroon-roast flex items-center justify-center text-xl">
                ⏰
              </div>
              <h3 className="font-display font-bold text-lg text-espresso-dark">Operating Hours</h3>
              <div className="space-y-2 text-xs sm:text-sm text-espresso-dark/80 font-sans">
                <div className="flex justify-between items-center py-1 border-b border-linen-surface">
                  <span className="font-semibold">{CAFE_HOURS.days}</span>
                  <span className="text-cafe-crimson font-bold">{CAFE_HOURS.timings}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-linen-surface text-espresso-dark/70">
                  <span>Last Order (Kitchen)</span>
                  <span>10:30 PM</span>
                </div>
                <div className="flex justify-between items-center py-1 text-espresso-dark/70">
                  <span>Dine-In & Takeaway</span>
                  <span>All Day</span>
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-linen-surface/70 border border-cafe-crimson/10 text-[11px] text-espresso-dark/70 font-sans">
                <strong>Note:</strong> We are open on all public holidays and festival days with festive dessert specials!
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-green-700 font-semibold bg-green-50 p-2.5 rounded-xl border border-green-200">
              <span className="w-2 h-2 rounded-full bg-green-600 inline-block animate-ping" />
              <span>Welcoming Walk-ins Daily</span>
            </div>
          </div>

          {/* Direct Line & Social Card */}
          <div className="bg-white rounded-2xl p-6 border border-cafe-crimson/15 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cafe-crimson/10 text-cafe-crimson flex items-center justify-center text-xl">
                💬
              </div>
              <h3 className="font-display font-bold text-lg text-espresso-dark">Connect & Chat</h3>
              <p className="text-xs sm:text-sm text-espresso-dark/80 leading-relaxed font-sans">
                Need table availability or planning a small celebration? Reach us instantly on WhatsApp or phone.
              </p>
              <div className="space-y-2 text-xs font-sans">
                <div className="flex items-center gap-2">
                  <span className="text-cafe-crimson font-bold">Direct Phone:</span>
                  <a href="tel:+919042888988" className="hover:underline font-mono font-bold text-cafe-crimson">
                    {PHONE_NUMBER}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cafe-crimson font-bold">WhatsApp:</span>
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="hover:underline font-mono">
                    +91 {PHONE_NUMBER.slice(1)}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cafe-crimson font-bold">Instagram:</span>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:underline font-semibold">
                    {INSTAGRAM_HANDLE}
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <a
                href="tel:+919042888988"
                className="inline-flex items-center justify-center gap-1.5 flex-1 py-2.5 rounded-xl bg-cafe-crimson hover:bg-maroon-roast text-white text-xs font-semibold transition-colors shadow-xs"
              >
                <span>📞 Call Now</span>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors shadow-xs"
              >
                <span>💬 WhatsApp Us</span>
              </a>
            </div>
          </div>
        </section>

        {/* Map and Reservation Form Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Map Preview Container */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-cafe-crimson/15 shadow-xs space-y-4 p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-linen-surface">
              <div>
                <h3 className="font-display font-bold text-lg text-espresso-dark">
                  Find Us on Alagirisamy Salai
                </h3>
                <p className="text-xs text-espresso-dark/65 font-sans">
                  Directly opposite PSBB Senior Secondary School (Gate 1)
                </p>
              </div>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-linen-surface hover:bg-cafe-crimson text-espresso-dark hover:text-white text-xs font-semibold transition-colors border border-cafe-crimson/15"
              >
                <span>Open Google Maps</span>
                <span>↗</span>
              </a>
            </div>

            {/* Embedded Interactive Map */}
            <div className="aspect-16/10 sm:aspect-16/9 w-full rounded-2xl overflow-hidden border border-cafe-crimson/10 relative bg-linen-surface">
              <iframe
                title="Cafe Me Chennai Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6436573459146!2d80.1912!3d13.0384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266d624a1b02b%3A0x7d013e2bf57b1f63!2sPadma%20Seshadri%20Bala%20Bhavan%20Senior%20Secondary%20School%2C%20KK%20Nagar!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Travel & Commute Tips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-linen-surface/60 border border-cafe-crimson/10">
                <span className="font-semibold text-xs text-cafe-crimson block mb-1">🛵 Two-Wheeler Parking</span>
                <p className="text-[11px] text-espresso-dark/75 leading-relaxed font-sans">
                  Direct parking right in front of the café entrance on our wide paved sidewalk.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-linen-surface/60 border border-cafe-crimson/10">
                <span className="font-semibold text-xs text-cafe-crimson block mb-1">🚗 Four-Wheeler Parking</span>
                <p className="text-[11px] text-espresso-dark/75 leading-relaxed font-sans">
                  Tree-shaded roadside parking along Alagirisamy Salai and adjacent 8th Sector avenues.
                </p>
              </div>
            </div>
          </div>

          {/* Table / Celebration Inquiry Form */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-cafe-crimson/15 shadow-xs space-y-6">
            <div>
              <span className="text-xs font-semibold tracking-widest text-cafe-crimson uppercase">
                Reserve or Enquire
              </span>
              <h3 className="font-display font-bold text-2xl text-espresso-dark mt-1">
                Plan a Visit or Gathering
              </h3>
              <p className="text-xs text-espresso-dark/70 mt-1 font-sans">
                Fill this quick form to ping our team on WhatsApp with your exact preference.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 bg-green-50 border border-green-200 rounded-2xl text-center space-y-3">
                <span className="text-3xl">🎉</span>
                <h4 className="font-display font-bold text-green-900 text-base">Inquiry Prepared!</h4>
                <p className="text-xs text-green-800 font-sans">
                  Your WhatsApp message was generated. If the WhatsApp window did not open, click the button below to send:
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-xl bg-green-700 text-white text-xs font-semibold hover:bg-green-800 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleWhatsAppSend} className="space-y-4 font-sans text-xs">
                <div>
                  <label className="block font-medium text-espresso-dark/80 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="e.g. Srinath or Meenakshi"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-cafe-crimson/20 focus:border-cafe-crimson focus:ring-1 focus:ring-cafe-crimson bg-cream-canvas/50"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-medium text-espresso-dark/80 mb-1">Contact Number</label>
                    <input
                      type="tel"
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      placeholder="+91 98..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-cafe-crimson/20 focus:border-cafe-crimson focus:ring-1 focus:ring-cafe-crimson bg-cream-canvas/50"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-espresso-dark/80 mb-1">Party Size</label>
                    <select
                      value={partySize}
                      onChange={(e) => setPartySize(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-cafe-crimson/20 focus:border-cafe-crimson focus:ring-1 focus:ring-cafe-crimson bg-cream-canvas/50"
                    >
                      <option>1-2 Guests (Cozy Table)</option>
                      <option>2-4 Guests (Standard)</option>
                      <option>5-8 Guests (Friend Group)</option>
                      <option>8+ Guests (Celebration)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-medium text-espresso-dark/80 mb-1">Inquiry Purpose</label>
                    <select
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-cafe-crimson/20 focus:border-cafe-crimson focus:ring-1 focus:ring-cafe-crimson bg-cream-canvas/50"
                    >
                      <option>Table Reservation</option>
                      <option>Birthday / Celebration</option>
                      <option>Takeaway Pre-Order</option>
                      <option>Book Club / Meetup</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-medium text-espresso-dark/80 mb-1">Preferred Time</label>
                    <input
                      type="text"
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      placeholder="e.g. Today 6:30 PM"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-cafe-crimson/20 focus:border-cafe-crimson focus:ring-1 focus:ring-cafe-crimson bg-cream-canvas/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-espresso-dark/80 mb-1">Special Notes / Dietary Wishes</label>
                  <textarea
                    rows={2}
                    value={specialNotes}
                    onChange={(e) => setSpecialNotes(e.target.value)}
                    placeholder="e.g. Need high chair / Jain dietary preferences / Quiet corner table"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-cafe-crimson/20 focus:border-cafe-crimson focus:ring-1 focus:ring-cafe-crimson bg-cream-canvas/50"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-cafe-crimson hover:bg-maroon-roast text-white font-bold text-xs sm:text-sm transition-colors shadow-sm flex items-center justify-center gap-2"
                >
                  <span>Submit via WhatsApp</span>
                  <span>💬</span>
                </button>
                <p className="text-[10px] text-espresso-dark/50 text-center">
                  Direct message to Cafe Me team. No spam guaranteed.
                </p>
              </form>
            )}
          </div>
        </section>

        {/* Visit FAQs */}
        <section className="bg-linen-surface/70 rounded-3xl p-8 sm:p-12 border border-cafe-crimson/15">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="text-xs font-semibold tracking-widest text-cafe-crimson uppercase">
              Helpful Details
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-espresso-dark mt-2">
              Visitor Information & Policies
            </h2>
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {VISIT_FAQS.map((faq) => (
              <div key={faq.id} className="bg-white p-5 rounded-2xl border border-cafe-crimson/10 shadow-xs space-y-2">
                <h3 className="font-display font-bold text-sm text-espresso-dark flex items-start gap-2">
                  <span className="text-cafe-crimson font-black text-base leading-none">•</span>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs text-espresso-dark/75 leading-relaxed font-sans pl-4">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};
