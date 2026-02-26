import React from 'react';
import { BookOpen, Calculator, FlaskConical, Monitor, Globe, FileText, CheckCircle2 } from 'lucide-react';

const ClassesOfferings = () => {
    return (
        <section id="classes" className="py-20 bg-blue-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center space-x-4 mb-4">
                        <div className="h-[2px] w-16 md:w-32 bg-blue-300"></div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 tracking-tight">
                            CLASSES: <span className="text-blue-700">1st to 10th</span>
                        </h2>
                        <div className="h-[2px] w-16 md:w-32 bg-blue-300"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">

                    {/* Card: 1st - 5th */}
                    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-blue-100 hover:shadow-[0_10px_40px_rgba(59,130,246,0.15)] transition-shadow duration-300 relative group">
                        <div className="absolute top-0 left-8 px-6 py-2 bg-gradient-to-r from-sky-400 to-blue-500 rounded-b-xl text-white font-bold text-xl shadow-md transform -translate-y-px">
                            1st – 5th
                        </div>

                        <div className="mt-10 flex flex-col items-center justify-center h-full min-h-[200px] text-center">
                            <div className="w-24 h-24 bg-sky-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <BookOpen className="w-12 h-12 text-sky-500" />
                            </div>
                            <h3 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
                                <span className="text-sky-500">▶</span> All Subjects
                            </h3>
                            <p className="text-slate-500 mt-4 max-w-sm">
                                A complete foundational syllabus focusing on overall clear conceptual understanding.
                            </p>
                        </div>
                    </div>

                    {/* Card: 6th - 10th */}
                    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-blue-100 hover:shadow-[0_10px_40px_rgba(59,130,246,0.15)] transition-shadow duration-300 relative">
                        <div className="absolute top-0 left-8 px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-b-xl text-white font-bold text-xl shadow-md transform -translate-y-px">
                            6th – 10th
                        </div>

                        <div className="mt-10">
                            <ul className="space-y-4">
                                <li className="flex items-center text-xl font-semibold text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100 hover:bg-blue-50 transition-colors">
                                    <CheckCircle2 className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0" />
                                    <Calculator className="w-5 h-5 text-slate-400 mr-3" />
                                    Mathematics
                                </li>
                                <li className="flex items-center text-xl font-semibold text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100 hover:bg-blue-50 transition-colors">
                                    <CheckCircle2 className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0" />
                                    <FlaskConical className="w-5 h-5 text-slate-400 mr-3" />
                                    Science
                                </li>
                                <li className="flex items-center text-xl font-semibold text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100 hover:bg-blue-50 transition-colors">
                                    <CheckCircle2 className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0" />
                                    <Monitor className="w-5 h-5 text-slate-400 mr-3" />
                                    Computer
                                </li>
                                <li className="flex items-center text-xl font-semibold text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100 hover:bg-blue-50 transition-colors">
                                    <CheckCircle2 className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0" />
                                    <Globe className="w-5 h-5 text-slate-400 mr-3" />
                                    Information Technology (IT) & AI
                                </li>
                                <li className="flex items-center text-xl font-semibold text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100 hover:bg-blue-50 transition-colors">
                                    <CheckCircle2 className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0" />
                                    <FileText className="w-5 h-5 text-slate-400 mr-3" />
                                    English & Hindi
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ClassesOfferings;
