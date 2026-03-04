import React from 'react';
import { GraduationCap, Star, PhoneCall, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative w-full min-h-[70vh] md:min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-sky-100 text-slate-800 px-4 md:px-6 py-12 md:py-24">

            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50"></div>

            {/* Decorative Orbs */}
            <div className="absolute top-20 left-10 md:left-32 w-32 md:w-48 h-32 md:h-48 bg-yellow-200 rounded-full mix-blend-multiply filter blur[-60px] opacity-40 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 md:right-32 w-40 md:w-64 h-40 md:h-64 bg-sky-300 rounded-full mix-blend-multiply filter blur[-80px] opacity-30"></div>

            <div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center">

                {/* Banner: Hybrid Mode */}
                <div className="inline-flex items-center px-4 md:px-6 py-1.5 md:py-2 border-2 border-blue-200 rounded-full bg-white text-blue-800 text-xs sm:text-sm md:text-base font-bold mb-6 md:mb-8 shadow-sm transform -rotate-1 hover:rotate-0 transition-transform cursor-default">
                    <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1.5 md:mr-2 text-yellow-500" />
                    HYBRID MODE (ONLINE + OFFLINE)
                </div>

                {/* Main Headline */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className="text-blue-700 bg-white p-3 md:p-4 rounded-2xl shadow-md transform -rotate-6">
                        <GraduationCap className="w-9 h-9 md:w-12 md:h-12" strokeWidth={2.5} />
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold tracking-tight text-blue-900 drop-shadow-sm uppercase">
                        MARKS TUITION CLASSES
                    </h1>
                </div>

                {/* Sub-headline */}
                <div className="flex items-center justify-center gap-2 md:gap-3 mb-8 md:mb-12">
                    <Star className="w-5 h-5 md:w-6 md:h-6 text-yellow-500 fill-yellow-500" />
                    <h2 className="text-lg sm:text-xl md:text-4xl italic font-semibold text-blue-600">
                        Learn Smart. Score High.
                    </h2>
                    <Star className="w-5 h-5 md:w-6 md:h-6 text-yellow-500 fill-yellow-500" />
                </div>

                {/* Banner: New Session */}
                <div className="inline-block px-5 md:px-8 py-2.5 md:py-3 bg-red-600 text-white font-bold tracking-widest text-sm sm:text-base md:text-xl rounded-md shadow-lg mb-8 md:mb-10 border border-red-500 transform rotate-1">
                    ♦ NEW SESSION STARTING 1ST MARCH 2026 ♦
                </div>

                {/* CTA: Call to Action */}
                <div className="mt-2 md:mt-4 flex flex-col items-center">
                    <div className="relative group cursor-pointer inline-flex">
                        {/* "Sticky Note" styling */}
                        <div className="absolute -inset-2 bg-yellow-200 rounded-sm transform rotate-3 scale-105 opacity-80 group-hover:rotate-6 transition-transform shadow-md"></div>
                        <a href="tel:8130900122" className="relative flex items-center bg-white border-2 border-yellow-300 px-5 md:px-8 py-3 md:py-4 text-slate-800 font-extrabold text-xl sm:text-2xl md:text-3xl rounded-sm shadow-sm group-hover:-translate-y-1 transition-transform">
                            <span className="text-gray-600 mr-2 md:mr-3 text-sm md:text-lg font-medium">Have queries?</span>
                            <PhoneCall className="w-5 h-5 md:w-6 md:h-6 text-blue-600 mr-1.5 md:mr-2 animate-bounce" />
                            Call Us!
                        </a>
                    </div>
                </div>

            </div>

            {/* Bottom Wave Divider (CSS rendering approximation) */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                <svg className="relative block w-[calc(110%+1.3px)] h-[40px] md:h-[60px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.71,109.91,154,120.7,215,115.6,251,112.5,286.91,73.5,321.39,56.44Z" className="fill-blue-50"></path>
                </svg>
            </div>

        </section>
    );
};

export default Hero;
