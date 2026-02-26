import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-slate-900 border-t border-slate-800 text-slate-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Image/Visual Column */}
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 aspect-square md:aspect-[4/3] lg:aspect-square flex items-center justify-center shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950 p-8 flex flex-col items-center justify-center">
                                <svg className="w-32 h-32 text-indigo-400/20 mb-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                <p className="font-mono text-indigo-400 text-sm md:text-base text-center max-w-xs break-all">
                                    const tutor = new Engineer("MARKS");<br />
                                    tutor.teach(Mathematics);
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Text/Content Column */}
                    <div>
                        <div className="inline-block px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-semibold tracking-wide uppercase mb-6">
                            About the Tutor
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                            An Analytical Approach to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Mastering Math</span>
                        </h2>

                        <div className="space-y-6 text-lg text-slate-300">
                            <p>
                                Hi, I'm the founder of MARKS Classes. As a Computer Science Engineering student, I spend my days building complex software projects—such as advanced deepfake detection tools and scalable systems.
                            </p>
                            <p>
                                This engineering background gives me a deeply analytical, highly structured approach to problem-solving. I bring this exact mindset into teaching Mathematics for Class 7 students. We don't just memorize formulas; we learn how to break down complex problems into manageable, logical steps.
                            </p>

                            <ul className="space-y-4 mt-8 pt-6 border-t border-slate-800">
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 mr-4 mt-1">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Algorithmic Thinking</h4>
                                        <p className="text-slate-400 text-base">Applying logic and step-by-step reasoning to clarify confusing math concepts.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 mr-4 mt-1">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Real-world Application</h4>
                                        <p className="text-slate-400 text-base">Connecting textbook math to the real-world technology that shapes our future.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
