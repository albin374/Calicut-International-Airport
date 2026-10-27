import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp, 
  ChevronRight, 
  X
} from 'lucide-react';

export const FooterSection: React.FC = () => {
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full overflow-hidden bg-[#0A1017] text-white select-none border-t border-white/10">
      
      {/* Background Image: Cinematic Sunset Airliner Landing */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/Cinematic Sunset Airliner Landing.png"
          alt="Cinematic Sunset Airliner Landing at Calicut International Airport"
          className="w-full h-full object-cover object-center opacity-25 filter brightness-90 saturate-120"
          loading="lazy"
        />
        {/* Deep cinematic overlay gradient ensuring maximum text contrast and legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1017]/95 via-[#0A1017]/88 to-[#0A1017]/98" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1017]/90 via-transparent to-[#0A1017]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 pt-16 sm:pt-20 pb-10">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          
          {/* Column 1: Get in Touch & Airport Branding */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Official Airport Logo */}
              <div className="mb-6 flex items-center gap-3">
                <img 
                  src="/logo_15042021.png" 
                  alt="Calicut International Airport Logo" 
                  className="h-16 w-auto object-contain drop-shadow-md"
                />
              </div>

              <h3 className="font-serif text-2xl font-normal text-white mb-3">
                Get in Touch
              </h3>
              <p className="text-white/70 text-xs sm:text-[13px] leading-relaxed mb-6 font-normal">
                Airports Authority of India<br />
                Calicut International Airport (CCJ)<br />
                Karipur, Malappuram District, Kerala - 673647
              </p>

              {/* Contact Quick Details */}
              <div className="space-y-3 text-xs text-white/80">
                <a 
                  href="tel:+914832712630" 
                  className="flex items-center gap-2.5 hover:text-[#E8A57A] transition-colors group"
                >
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-[#E8A57A] group-hover:bg-[#A2552B] group-hover:text-white transition-colors shrink-0">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <span>+91 483 271 2630 / 9494</span>
                </a>

                <a 
                  href="mailto:apd_calicut@aai.aero" 
                  className="flex items-center gap-2.5 hover:text-[#E8A57A] transition-colors group"
                >
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-[#E8A57A] group-hover:bg-[#A2552B] group-hover:text-white transition-colors shrink-0">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <span>apd_calicut@aai.aero</span>
                </a>

                <div className="flex items-start gap-2.5 text-white/70">
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-[#E8A57A] shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <span>28 km from Kozhikode City</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Travellers */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-[#E8A57A] mb-5 pb-2 border-b border-white/10 flex items-center justify-between">
              <span>Travellers</span>
              <span className="w-6 h-[1.5px] bg-[#E8A57A]" />
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-white/75 font-normal">
              <li>
                <a 
                  href="#flightModal" 
                  className="hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200"
                >
                  <ChevronRight className="w-3 h-3 text-[#E8A57A]/60" />
                  <span>Airline Details</span>
                </a>
              </li>
              <li>
                <a 
                  href="#destination-section" 
                  className="hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200"
                >
                  <ChevronRight className="w-3 h-3 text-[#E8A57A]/60" />
                  <span>How to Reach</span>
                </a>
              </li>
              <li>
                <span className="inline-flex items-center gap-1.5 cursor-pointer hover:text-white hover:translate-x-1 transition-all duration-200">
                  <ChevronRight className="w-3 h-3 text-[#E8A57A]/60" />
                  <span>Immigration Service</span>
                </span>
              </li>
              <li>
                <a 
                  href="#essentials-section" 
                  className="hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200"
                >
                  <ChevronRight className="w-3 h-3 text-[#E8A57A]/60" />
                  <span>Lost and Found</span>
                </a>
              </li>
              <li>
                <a 
                  href="#essentials-section" 
                  className="hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200"
                >
                  <ChevronRight className="w-3 h-3 text-[#E8A57A]/60" />
                  <span>Medical Facilities</span>
                </a>
              </li>
              <li>
                <a 
                  href="#highlights-section" 
                  className="hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200"
                >
                  <ChevronRight className="w-3 h-3 text-[#E8A57A]/60" />
                  <span>Tourist Attractions</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Airport Information */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-[#E8A57A] mb-5 pb-2 border-b border-white/10 flex items-center justify-between">
              <span>Airport Information</span>
              <span className="w-6 h-[1.5px] bg-[#E8A57A]" />
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-white/75 font-normal">
              <li>
                <span className="inline-flex items-center gap-1.5 cursor-pointer hover:text-white hover:translate-x-1 transition-all duration-200">
                  <ChevronRight className="w-3 h-3 text-[#E8A57A]/60" />
                  <span>Board of Directors</span>
                </span>
              </li>
              <li>
                <a 
                  href="#news-section" 
                  className="hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200"
                >
                  <ChevronRight className="w-3 h-3 text-[#E8A57A]/60" />
                  <span>Airport Infrastructure</span>
                </a>
              </li>
              <li>
                <span className="inline-flex items-center gap-1.5 cursor-pointer hover:text-white hover:translate-x-1 transition-all duration-200">
                  <ChevronRight className="w-3 h-3 text-[#E8A57A]/60" />
                  <span>Traffic Information</span>
                </span>
              </li>
              <li>
                <a 
                  href="#essentials-section" 
                  className="hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200"
                >
                  <ChevronRight className="w-3 h-3 text-[#E8A57A]/60" />
                  <span>Passenger Terminals</span>
                </a>
              </li>
              <li>
                <span className="inline-flex items-center gap-1.5 cursor-pointer hover:text-white hover:translate-x-1 transition-all duration-200">
                  <ChevronRight className="w-3 h-3 text-[#E8A57A]/60" />
                  <span>Technical Information</span>
                </span>
              </li>
              <li>
                <span className="inline-flex items-center gap-1.5 cursor-pointer hover:text-white hover:translate-x-1 transition-all duration-200">
                  <ChevronRight className="w-3 h-3 text-[#E8A57A]/60" />
                  <span>Airport Charges</span>
                </span>
              </li>
              <li>
                <span className="inline-flex items-center gap-1.5 cursor-pointer hover:text-white hover:translate-x-1 transition-all duration-200">
                  <ChevronRight className="w-3 h-3 text-[#E8A57A]/60" />
                  <span>E-Magazine</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-[#E8A57A] mb-5 pb-2 border-b border-white/10 flex items-center justify-between">
              <span>Quick Links</span>
              <span className="w-6 h-[1.5px] bg-[#E8A57A]" />
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-white/75 font-normal">
              <li>
                <a 
                  href="#news-section" 
                  className="hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200"
                >
                  <ChevronRight className="w-3 h-3 text-[#E8A57A]/60" />
                  <span>Press Release</span>
                </a>
              </li>
              <li>
                <a 
                  href="#highlights-section" 
                  className="hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200"
                >
                  <ChevronRight className="w-3 h-3 text-[#E8A57A]/60" />
                  <span>Gallery</span>
                </a>
              </li>
              <li>
                <a 
                  href="#news-section" 
                  className="hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200"
                >
                  <ChevronRight className="w-3 h-3 text-[#E8A57A]/60" />
                  <span>News & Events</span>
                </a>
              </li>
              <li>
                <span className="inline-flex items-center gap-1.5 cursor-pointer hover:text-white hover:translate-x-1 transition-all duration-200">
                  <ChevronRight className="w-3 h-3 text-[#E8A57A]/60" />
                  <span>Careers</span>
                </span>
              </li>
              <li>
                <span className="inline-flex items-center gap-1.5 cursor-pointer hover:text-white hover:translate-x-1 transition-all duration-200">
                  <ChevronRight className="w-3 h-3 text-[#E8A57A]/60" />
                  <span>Tenders</span>
                </span>
              </li>
              <li>
                <a 
                  href="#news-section" 
                  onClick={(e) => {
                    e.preventDefault();
                    setFeedbackOpen(true);
                  }}
                  className="hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-[#E8A57A]/60" />
                  <span>Contact Us</span>
                </a>
              </li>
              <li>
                <button 
                  onClick={() => setFeedbackOpen(true)}
                  className="hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200 cursor-pointer text-left"
                >
                  <ChevronRight className="w-3 h-3 text-[#E8A57A]/60" />
                  <span>Feedback</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          
          <div className="text-center sm:text-left font-normal tracking-wide">
            © All Rights Reserved | Developed by <span className="font-semibold text-white/90">Mostech</span>
          </div>

          {/* Quick Legal Links & Back to Top */}
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Use</span>
            <span className="hover:text-white cursor-pointer transition-colors">Sitemap</span>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#A2552B] text-white flex items-center justify-center transition-all duration-300 ml-2 cursor-pointer shadow-xs"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

      {/* Interactive Feedback / Contact Drawer Dialog */}
      {feedbackOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-fade-in"
          onClick={() => setFeedbackOpen(false)}
        >
          <div 
            className="relative w-full max-w-lg bg-[#0F1722] text-white rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
              <div>
                <h3 className="font-serif text-2xl font-normal text-white">Passenger Feedback & Inquiry</h3>
                <p className="text-xs text-white/60 mt-0.5">Calicut International Airport (Karipur - CCJ)</p>
              </div>
              <button
                onClick={() => setFeedbackOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {feedbackSubmitted ? (
              <div className="py-8 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                  ✓
                </div>
                <h4 className="text-lg font-semibold text-white mb-1">Thank You!</h4>
                <p className="text-xs text-white/70">Your message has been forwarded to the Passenger Service Cell.</p>
                <button
                  onClick={() => {
                    setFeedbackSubmitted(false);
                    setFeedbackOpen(false);
                  }}
                  className="mt-6 px-6 py-2 rounded-full bg-[#A2552B] text-white text-xs font-semibold hover:bg-[#8B4420]"
                >
                  Done
                </button>
              </div>
            ) : (
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  setFeedbackSubmitted(true);
                }}
                className="space-y-4 text-xs"
              >
                <div>
                  <label className="block text-white/70 mb-1 font-medium">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:border-[#E8A57A]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-white/70 mb-1 font-medium">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:border-[#E8A57A]"
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 mb-1 font-medium">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 ..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:border-[#E8A57A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/70 mb-1 font-medium">Message / Feedback</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How can we assist you or improve your airport experience?"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:border-[#E8A57A] resize-none"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setFeedbackOpen(false)}
                    className="px-5 py-2 rounded-full border border-white/20 text-white/70 hover:bg-white/10"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-full bg-[#A2552B] hover:bg-[#8B4420] text-white font-semibold transition-colors"
                  >
                    Submit Feedback
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </footer>
  );
};

