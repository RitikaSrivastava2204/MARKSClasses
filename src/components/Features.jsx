import React from 'react';
import { Lightbulb, Edit3, Users, MessageCircleQuestion, TrendingUp } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <Lightbulb className="w-10 h-10 text-yellow-500" strokeWidth={2} />,
            title: "Concept Clarity",
            bgColor: "bg-yellow-100",
            borderColor: "border-yellow-200"
        },
        {
            icon: <Edit3 className="w-10 h-10 text-blue-500" strokeWidth={2} />,
            title: "Regular Tests & Practice",
            bgColor: "bg-blue-100",
            borderColor: "border-blue-200"
        },
        {
            icon: <Users className="w-10 h-10 text-indigo-500" strokeWidth={2} />,
            title: "Personal Attention",
            bgColor: "bg-indigo-100",
            borderColor: "border-indigo-200"
        },
        {
            icon: <MessageCircleQuestion className="w-10 h-10 text-rose-500" strokeWidth={2} />,
            title: "Doubt Solving Sessions",
            bgColor: "bg-rose-100",
            borderColor: "border-rose-200"
        },
        {
            icon: <TrendingUp className="w-10 h-10 text-emerald-500" strokeWidth={2} />,
            title: "Strong Foundation",
            bgColor: "bg-emerald-100",
            borderColor: "border-emerald-200"
        }
    ];

    return (
        <section id="features" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">
                        Why Choose Us?
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Our approach is deeply focused on ensuring every student truly understands the material, not just memorizes it.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className={`w-20 h-20 rounded-2xl ${feature.bgColor} ${feature.borderColor} border flex items-center justify-center mb-6 shadow-sm`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 leading-tight">
                                <span className="text-blue-500 mr-2">💙</span>
                                {feature.title}
                            </h3>
                            {feature.title === "Strong Foundation" && (
                                <p className="text-sm text-slate-500 mt-2">for Higher Classes</p>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Features;
