import React, { useRef } from 'react';
import { Lightbulb, Edit3, Users, MessageCircleQuestion, TrendingUp } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
    const container = useRef();

    useGSAP(() => {
        // Container fade in
        gsap.from(".feature-header", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        });

        // Staggered cards
        gsap.from(".feature-card", {
            scrollTrigger: {
                trigger: ".feature-grid",
                start: "top 85%",
            },
            scale: 0.8,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.5)"
        });
    }, { scope: container });

    const features = [
        {
            icon: <Lightbulb className="w-8 h-8 md:w-10 md:h-10 text-yellow-500" strokeWidth={2} />,
            title: "Concept Clarity",
            bgColor: "bg-yellow-100",
            borderColor: "border-yellow-200"
        },
        {
            icon: <Edit3 className="w-8 h-8 md:w-10 md:h-10 text-blue-500" strokeWidth={2} />,
            title: "Regular Tests & Practice",
            bgColor: "bg-blue-100",
            borderColor: "border-blue-200"
        },
        {
            icon: <Users className="w-8 h-8 md:w-10 md:h-10 text-indigo-500" strokeWidth={2} />,
            title: "Personal Attention",
            bgColor: "bg-indigo-100",
            borderColor: "border-indigo-200"
        },
        {
            icon: <MessageCircleQuestion className="w-8 h-8 md:w-10 md:h-10 text-rose-500" strokeWidth={2} />,
            title: "Doubt Solving Sessions",
            bgColor: "bg-rose-100",
            borderColor: "border-rose-200"
        },
        {
            icon: <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-emerald-500" strokeWidth={2} />,
            title: "Strong Foundation",
            bgColor: "bg-emerald-100",
            borderColor: "border-emerald-200"
        }
    ];

    return (
        <section id="features" className="py-8 md:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

                <div className="feature-header text-center mb-8 md:mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-blue-900 mb-3 md:mb-4">
                        Why Choose Us?
                    </h2>
                    <p className="text-sm md:text-lg text-slate-600 max-w-2xl mx-auto">
                        Our approach is deeply focused on ensuring every student truly understands the material, not just memorizes it.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="feature-card flex flex-col items-center text-center p-3 md:p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl ${feature.bgColor} ${feature.borderColor} border flex items-center justify-center mb-3 md:mb-4 shadow-sm`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-sm md:text-lg font-bold text-slate-800 leading-tight">
                                <span className="text-blue-500 mr-1 md:mr-2">💙</span>
                                {feature.title}
                            </h3>
                            {feature.title === "Strong Foundation" && (
                                <p className="text-xs md:text-sm text-slate-500 mt-1 md:mt-2">for Higher Classes</p>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Features;
