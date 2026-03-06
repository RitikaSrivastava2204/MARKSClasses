import React, { useRef } from 'react';
import { Zap, Clock, BookOpenCheck, CalendarCheck, PhoneCall } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const PayPerClass = () => {
    const container = useRef();

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 75%",
            }
        });

        tl.from(".pay-text", {
            x: -40,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        }).from(".pay-visual", {
            x: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.6");
    }, { scope: container });

    return (
        <section ref={container} className="py-10 md:py-16 relative overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-950">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500 rounded-full blur-[120px] opacity-20"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500 rounded-full blur-[120px] opacity-20"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* Text Content */}
                    <div className="pay-text text-white space-y-5 md:space-y-6">
                        <div className="inline-flex items-center space-x-2 bg-indigo-800/50 backdrop-blur-md px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-indigo-500/30 text-indigo-200 font-bold text-xs md:text-sm tracking-wide shadow-sm">
                            <Zap className="w-3.5 h-3.5 md:w-4 md:h-4 text-yellow-400" />
                            <span>PAY AS YOU GO MODEL</span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-blue-200">
                            Need Last-Minute Exam Help? <br className="hidden md:block" />
                            <span className="text-yellow-400 drop-shadow-sm">Book a Single Session!</span>
                        </h2>

                        <p className="text-base md:text-lg lg:text-xl text-indigo-100/90 leading-relaxed font-medium">
                            Tired of confusing tutorial videos? Skip the stress and book a one-on-one doubt-clearing class. Whether you need help with one tough chapter or a complete rapid revision before tomorrow's exam, we are here for you.
                            <br className="mb-4" />
                            No full-course enrollment required—just pure, focused learning on a pay-per-class basis. Available online or offline!
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
                            <a href="#contact" className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-blue-950 font-extrabold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-300 shadow-[0_4px_14px_0_rgba(250,204,21,0.39)] hover:shadow-[0_6px_20px_rgba(250,204,21,0.23)] hover:-translate-y-1">
                                <PhoneCall className="w-4 h-4 md:w-5 md:h-5" />
                                Book Now
                            </a>
                            <a href="tel:8130900122" className="flex items-center justify-center gap-2 bg-indigo-800/50 hover:bg-indigo-700/50 border border-indigo-400/30 text-white font-bold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-300 backdrop-blur-sm">
                                Call Us Now
                            </a>
                        </div>
                    </div>

                    {/* Visual / Feature Box */}
                    <div className="pay-visual bg-white/10 backdrop-blur-xl border border-white/20 p-5 md:p-6 rounded-3xl shadow-2xl relative">
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full blur-2xl opacity-50"></div>

                        <div className="space-y-4 md:space-y-5 relative z-10">
                            <div className="flex items-start gap-3 md:gap-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-blue-400/30">
                                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-blue-300" />
                                </div>
                                <div>
                                    <h4 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">Instant Doubt Clearing</h4>
                                    <p className="text-indigo-200 text-sm md:text-base">Got an exam tomorrow? Get immediate help on difficult topics that stump you.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 md:gap-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-purple-400/30">
                                    <BookOpenCheck className="w-5 h-5 md:w-6 md:h-6 text-purple-300" />
                                </div>
                                <div>
                                    <h4 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">Focus Only on Weaknesses</h4>
                                    <p className="text-indigo-200 text-sm md:text-base">Pay only for the exact chapters and subjects you need help with. Don't waste time and money on full courses.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 md:gap-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-emerald-400/30">
                                    <CalendarCheck className="w-5 h-5 md:w-6 md:h-6 text-emerald-300" />
                                </div>
                                <div>
                                    <h4 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">Flexible Timing & Mode</h4>
                                    <p className="text-indigo-200 text-sm md:text-base">Attend online from home, or offline at our center. Pick a time that suits your busy preparation schedule.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PayPerClass;
