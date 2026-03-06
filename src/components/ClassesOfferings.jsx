import React, { useRef } from 'react';
import { BookOpen, Calculator, FlaskConical, Monitor, Globe, FileText, Sparkles, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ClassesOfferings = () => {
    const container = useRef();

    useGSAP(() => {
        gsap.from(".classes-card", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        });
    }, { scope: container });

    return (
        <section ref={container} id="classes" className="py-8 md:py-12 bg-white relative overflow-hidden border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                <div className="classes-card flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 bg-blue-50/50 border border-blue-100/50 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">

                    {/* Header Area */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-shrink-0">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                            <span>Curriculum</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight flex items-center gap-2">
                            CLASSES <span className="text-blue-600">1st to 10th</span>
                        </h2>
                        <a href="#contact" className="hidden lg:inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 mt-2 hover:underline group">
                            Book a free trial <ChevronRight className="w-4 h-4 ml-0.5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    {/* Vertical Divider (Desktop only) */}
                    <div className="hidden lg:block w-px h-16 bg-slate-200 mx-4"></div>

                    {/* Horizontal Divider (Mobile only) */}
                    <div className="w-16 h-1 bg-blue-200 rounded-full lg:hidden block"></div>

                    {/* Subjects Area (Scrolling pills or wrapping grid) */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 w-full">

                        {/* Junior Pillar */}
                        <div className="flex items-center gap-2 bg-gradient-to-r from-sky-400 to-blue-500 text-white px-4 py-2.5 rounded-full font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all text-sm md:text-base border border-blue-400">
                            <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-white/90" />
                            <span>1st–5th (All Subjects)</span>
                        </div>

                        {/* Senior Subjects */}
                        <div className="flex items-center gap-2 bg-white text-slate-700 px-4 py-2.5 rounded-full font-medium shadow-sm hover:shadow-md hover:bg-indigo-50 hover:text-indigo-700 hover:-translate-y-0.5 border border-slate-200 transition-all text-sm md:text-base cursor-default group">
                            <Calculator className="w-4 h-4 md:w-5 md:h-5 text-indigo-500 group-hover:scale-110 transition-transform" />
                            <span>Mathematics</span>
                        </div>

                        <div className="flex items-center gap-2 bg-white text-slate-700 px-4 py-2.5 rounded-full font-medium shadow-sm hover:shadow-md hover:bg-emerald-50 hover:text-emerald-700 hover:-translate-y-0.5 border border-slate-200 transition-all text-sm md:text-base cursor-default group">
                            <FlaskConical className="w-4 h-4 md:w-5 md:h-5 text-emerald-500 group-hover:scale-110 transition-transform" />
                            <span>Science</span>
                        </div>

                        <div className="flex items-center gap-2 bg-white text-slate-700 px-4 py-2.5 rounded-full font-medium shadow-sm hover:shadow-md hover:bg-blue-50 hover:text-blue-700 hover:-translate-y-0.5 border border-slate-200 transition-all text-sm md:text-base cursor-default group">
                            <Monitor className="w-4 h-4 md:w-5 md:h-5 text-blue-500 group-hover:scale-110 transition-transform" />
                            <span>Computer</span>
                        </div>

                        <div className="flex items-center gap-2 bg-white text-slate-700 px-4 py-2.5 rounded-full font-medium shadow-sm hover:shadow-md hover:bg-purple-50 hover:text-purple-700 hover:-translate-y-0.5 border border-slate-200 transition-all text-sm md:text-base cursor-default group">
                            <Globe className="w-4 h-4 md:w-5 md:h-5 text-purple-500 group-hover:scale-110 transition-transform" />
                            <span>IT & AI</span>
                        </div>

                        <div className="flex items-center gap-2 bg-white text-slate-700 px-4 py-2.5 rounded-full font-medium shadow-sm hover:shadow-md hover:bg-rose-50 hover:text-rose-700 hover:-translate-y-0.5 border border-slate-200 transition-all text-sm md:text-base cursor-default group">
                            <FileText className="w-4 h-4 md:w-5 md:h-5 text-rose-500 group-hover:scale-110 transition-transform" />
                            <span>English & Hindi</span>
                        </div>
                    </div>

                    {/* Mobile Only CTA */}
                    <a href="#contact" className="lg:hidden mt-2 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 bg-blue-100 rounded-full px-4 py-1.5 transition-colors">
                        Book a free trial <ChevronRight className="w-4 h-4 ml-0.5" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ClassesOfferings;
