import React from 'react';
import { BookOpen, Calculator, FlaskConical, Monitor, Globe, FileText, CheckCircle2 } from 'lucide-react';

const ClassesOfferings = () => {
    return (
        <section id="classes" className="py-12 md:py-20 bg-blue-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-10 md:mb-16">
                    <div className="flex items-center justify-center space-x-3 md:space-x-4 mb-4">
                        <div className="h-[2px] w-10 sm:w-16 md:w-32 bg-blue-300"></div>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-blue-900 tracking-tight">
                            CLASSES: <span className="text-blue-700">1st to 10th</span>
                        </h2>
                        <div className="h-[2px] w-10 sm:w-16 md:w-32 bg-blue-300"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-16">

                    {/* Card: 1st - 5th */}
                    <div className="bg-white rounded-3xl p-6 md:p-8 lg:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-blue-100 hover:shadow-[0_10px_40px_rgba(59,130,246,0.15)] transition-shadow duration-300 relative group">
                        <div className="absolute top-0 left-6 md:left-8 px-4 md:px-6 py-1.5 md:py-2 bg-gradient-to-r from-sky-400 to-blue-500 rounded-b-xl text-white font-bold text-lg md:text-xl shadow-md transform -translate-y-px">
                            1st – 5th
                        </div>

                        <div className="mt-10 flex flex-col items-center justify-center h-full min-h-[180px] md:min-h-[200px] text-center">
                            <div className="w-20 h-20 md:w-24 md:h-24 bg-sky-100 rounded-full flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                                <BookOpen className="w-10 h-10 md:w-12 md:h-12 text-sky-500" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 flex items-center gap-2 md:gap-3">
                                <span className="text-sky-500">▶</span> All Subjects
                            </h3>
                            <p className="text-slate-500 mt-3 md:mt-4 max-w-sm text-sm md:text-base">
                                A complete foundational syllabus focusing on overall clear conceptual understanding.
                            </p>
                        </div>
                    </div>

                    {/* Card: 6th - 10th */}
                    <div className="bg-white rounded-3xl p-6 md:p-8 lg:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-blue-100 hover:shadow-[0_10px_40px_rgba(59,130,246,0.15)] transition-shadow duration-300 relative">
                        <div className="absolute top-0 left-6 md:left-8 px-4 md:px-6 py-1.5 md:py-2 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-b-xl text-white font-bold text-lg md:text-xl shadow-md transform -translate-y-px">
                            6th – 10th
                        </div>

                        <div className="mt-10">
                            <ul className="space-y-3 md:space-y-4">
                                <li className="flex items-center text-base md:text-xl font-semibold text-slate-700 bg-slate-50 p-3 md:p-4 rounded-xl border border-slate-100 hover:bg-blue-50 transition-colors">
                                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-blue-600 mr-3 md:mr-4 flex-shrink-0" />
                                    <Calculator className="w-4 h-4 md:w-5 md:h-5 text-slate-400 mr-2 md:mr-3" />
                                    Mathematics
                                </li>
                                <li className="flex items-center text-base md:text-xl font-semibold text-slate-700 bg-slate-50 p-3 md:p-4 rounded-xl border border-slate-100 hover:bg-blue-50 transition-colors">
                                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-blue-600 mr-3 md:mr-4 flex-shrink-0" />
                                    <FlaskConical className="w-4 h-4 md:w-5 md:h-5 text-slate-400 mr-2 md:mr-3" />
                                    Science
                                </li>
                                <li className="flex items-center text-base md:text-xl font-semibold text-slate-700 bg-slate-50 p-3 md:p-4 rounded-xl border border-slate-100 hover:bg-blue-50 transition-colors">
                                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-blue-600 mr-3 md:mr-4 flex-shrink-0" />
                                    <Monitor className="w-4 h-4 md:w-5 md:h-5 text-slate-400 mr-2 md:mr-3" />
                                    Computer
                                </li>
                                <li className="flex items-center text-base md:text-xl font-semibold text-slate-700 bg-slate-50 p-3 md:p-4 rounded-xl border border-slate-100 hover:bg-blue-50 transition-colors">
                                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-blue-600 mr-3 md:mr-4 flex-shrink-0" />
                                    <Globe className="w-4 h-4 md:w-5 md:h-5 text-slate-400 mr-2 md:mr-3" />
                                    IT & AI
                                </li>
                                <li className="flex items-center text-base md:text-xl font-semibold text-slate-700 bg-slate-50 p-3 md:p-4 rounded-xl border border-slate-100 hover:bg-blue-50 transition-colors">
                                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-blue-600 mr-3 md:mr-4 flex-shrink-0" />
                                    <FileText className="w-4 h-4 md:w-5 md:h-5 text-slate-400 mr-2 md:mr-3" />
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
