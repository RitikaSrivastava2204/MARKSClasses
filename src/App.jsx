import React, { useState } from 'react';
import Hero from './components/Hero';
import VideoGallery from './components/VideoGallery';
import ClassesOfferings from './components/ClassesOfferings';
import PayPerClass from './components/PayPerClass';
import AboutTutors from './components/AboutTutors';
import Features from './components/Features';
import Contact from './components/Contact';
import { GraduationCap, Menu, X, Phone } from 'lucide-react';

// WhatsApp SVG Icon
const WhatsAppIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.031 0C5.385 0 .002 5.381.002 12.028c0 2.126.554 4.195 1.606 6.01L.002 24l6.101-1.602c1.745.962 3.731 1.468 5.753 1.468H12.03c6.643 0 12.028-5.382 12.028-12.028C24.058 5.4 18.675 0 12.031 0zm0 21.841h-.008c-1.8 0-3.565-.484-5.111-1.397l-.367-.217-3.8.997.994-3.703-.238-.378C2.515 15.42 2.015 13.742 2.015 12.027 2.015 6.502 6.512 2.006 12.035 2.006c5.523 0 10.021 4.497 10.021 10.022 0 5.523-4.498 10.021-10.021 10.021zm5.503-7.519c-.302-.151-1.786-.883-2.063-.984-.277-.101-.479-.151-.68.151-.202.302-.781.984-.958 1.185-.176.201-.353.226-.655.075-2.067-1.03-3.6-2.046-4.991-4.453-.176-.301.171-.277.46-.86.076-.151.038-.277-.076-.453-.113-.176-.68-1.637-.932-2.241-.246-.591-.497-.504-.68-.504s-.378-.025-.579-.025c-.201 0-.529.076-.806.378-.277.302-1.058 1.033-1.058 2.519s1.083 2.923 1.234 3.125c.151.202 2.13 3.252 5.158 4.558 2.051.884 2.846.953 3.905.795.645-.096 2.063-.844 2.353-1.658.29-.814.29-1.513.202-1.658-.088-.146-.328-.247-.63-.398z" />
  </svg>
);

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-500/30 selection:text-blue-900">

      {/* Top Banner (Optional, for urgency) */}
      <div className="bg-blue-900 text-white text-center py-2 text-xs sm:text-sm font-medium tracking-wide border-b border-blue-800">
        New Session Starting 1st March 2026! <a href="tel:8130900122" className="text-yellow-400 font-bold hover:underline">Call Us</a> to enroll.
      </div>

      <nav className="sticky top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">

          <div className="flex items-center gap-2 cursor-pointer">
            <GraduationCap className="text-blue-700 w-7 h-7 md:w-8 md:h-8" />
            <div className="text-xl md:text-2xl font-black tracking-tight text-blue-900">
              MARKS<span className="text-blue-600 font-bold ml-1">CLASSES</span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex gap-8 text-sm font-bold text-slate-600 tracking-wide uppercase">
            <a href="#classes" className="hover:text-blue-600 transition-colors">Classes</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">About Tutor</a>
            <a href="#features" className="hover:text-blue-600 transition-colors">Why Us</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            {/* Mobile Phone Icon */}
            <a href="tel:8130900122" className="md:hidden flex items-center justify-center w-10 h-10 bg-yellow-400 rounded-full text-blue-900 shadow-sm active:scale-95 transition-transform">
              <Phone className="w-5 h-5" />
            </a>

            {/* Desktop CTA */}
            <a href="tel:8130900122" className="px-6 py-2.5 bg-yellow-400 hover:bg-yellow-300 text-blue-900 text-sm font-extrabold rounded-full transition-all shadow-sm hidden md:block border-b-2 border-yellow-500 active:border-b-0 active:translate-y-[2px]">
              Call Us Now
            </a>

            {/* Hamburger Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 text-slate-700 active:bg-slate-200 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 shadow-lg animate-in">
            <div className="flex flex-col px-6 py-4 gap-1">
              <a href="#classes" onClick={() => setMenuOpen(false)} className="py-3 text-base font-bold text-slate-700 hover:text-blue-600 border-b border-slate-100 transition-colors">Classes</a>
              <a href="#about" onClick={() => setMenuOpen(false)} className="py-3 text-base font-bold text-slate-700 hover:text-blue-600 border-b border-slate-100 transition-colors">About Tutor</a>
              <a href="#features" onClick={() => setMenuOpen(false)} className="py-3 text-base font-bold text-slate-700 hover:text-blue-600 border-b border-slate-100 transition-colors">Why Us</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="py-3 text-base font-bold text-slate-700 hover:text-blue-600 transition-colors">Contact</a>
              <a href="tel:8130900122" className="mt-3 py-3 bg-yellow-400 text-blue-900 text-center font-extrabold rounded-xl shadow-sm active:scale-[0.98] transition-transform">
                📞 Call Us
              </a>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-1 w-full flex flex-col items-center">
        <div className="w-full">
          <Hero />
        </div>
        <div className="w-full">
          <VideoGallery />
        </div>
        <div className="w-full">
          <ClassesOfferings />
        </div>
        <div className="w-full">
          <PayPerClass />
        </div>
        <div className="w-full">
          <AboutTutors />
        </div>
        <div className="w-full">
          <Features />
        </div>
        <div className="w-full">
          <Contact />
        </div>
      </main>

      <footer className="py-6 md:py-8 bg-slate-900 text-center text-slate-400">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <p className="text-base md:text-lg font-bold text-yellow-400 mb-3 md:mb-4 tracking-wider">
            ⭐ MARKS TUITION CLASSES – Where Success Begins! ⭐
          </p>
          <p className="text-xs md:text-sm">
            &copy; {new Date().getFullYear()} MARKS Classes. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex flex-col items-end gap-3 pointer-events-none">
        {/* Tooltip */}
        <div className="bg-white text-slate-800 text-xs md:text-sm font-bold py-2 px-4 rounded-xl shadow-lg border border-slate-100 hidden md:block animate-bounce opacity-90 transition-opacity">
          Have doubts? Let's chat! 👋
        </div>
        <a
          href="https://wa.me/919532982656?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20MARKS%20Classes."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.5)] hover:scale-110 active:scale-95 transition-all duration-300 group pointer-events-auto flex items-center justify-center relative border-[3px] border-white"
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppIcon className="w-8 h-8 md:w-10 md:h-10" />
          {/* Ripple Effect Container */}
          <span className="absolute w-[200%] h-[200%] rounded-full bg-[#25D366]/30 -z-10 animate-ping"></span>
        </a>
      </div>
    </div>
  );
}

export default App;
