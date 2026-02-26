import React from 'react';
import Hero from './components/Hero';
import VideoGallery from './components/VideoGallery';
import ClassesOfferings from './components/ClassesOfferings';
import AboutTutors from './components/AboutTutors';
import Features from './components/Features';
import Contact from './components/Contact';
import { GraduationCap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-500/30 selection:text-blue-900">

      {/* Top Banner (Optional, for urgency) */}
      <div className="bg-blue-900 text-white text-center py-2 text-sm font-medium tracking-wide border-b border-blue-800">
        New Session Starting 1st March 2026! Call <a href="tel:8130900122" className="text-yellow-400 font-bold hover:underline">8130900122</a> to enroll.
      </div>

      <nav className="sticky top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">

          <div className="flex items-center gap-2 cursor-pointer">
            <GraduationCap className="text-blue-700 w-8 h-8" />
            <div className="text-2xl font-black tracking-tight text-blue-900">
              MARKS<span className="text-blue-600 font-bold ml-1">CLASSES</span>
            </div>
          </div>

          <div className="hidden md:flex gap-8 text-sm font-bold text-slate-600 tracking-wide uppercase">
            <a href="#classes" className="hover:text-blue-600 transition-colors">Classes</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">About Tutor</a>
            <a href="#features" className="hover:text-blue-600 transition-colors">Why Us</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>

          <a href="tel:8130900122" className="px-6 py-2.5 bg-yellow-400 hover:bg-yellow-300 text-blue-900 text-sm font-extrabold rounded-full transition-all shadow-sm hidden sm:block border-b-2 border-yellow-500 active:border-b-0 active:translate-y-[2px]">
            Call: 8130900122
          </a>
        </div>
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
          <AboutTutors />
        </div>
        <div className="w-full">
          <Features />
        </div>
        <div className="w-full">
          <Contact />
        </div>
      </main>

      <footer className="py-8 bg-slate-900 text-center text-slate-400">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-lg font-bold text-yellow-400 mb-4 tracking-wider">
            ⭐ MARKS TUITION CLASSES – Where Success Begins! ⭐
          </p>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} MARKS Classes. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
