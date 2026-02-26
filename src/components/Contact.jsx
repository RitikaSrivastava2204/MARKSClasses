import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-blue-600 relative overflow-hidden text-white">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

                {/* Tagline Banner */}
                <div className="text-center mb-16">
                    <div className="inline-block bg-yellow-400 text-blue-900 font-extrabold text-xl md:text-3xl px-6 py-4 rounded-xl shadow-lg transform -rotate-1 hover:rotate-0 transition-transform mb-6">
                        🎯 Build Confidence. Improve Performance. Achieve Excellent Marks!
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 mt-4">
                        Ready to Start?
                    </h2>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Contact us today to secure your child's spot for the upcoming session.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Contact Info */}
                    <div className="bg-white text-slate-800 rounded-3xl p-10 shadow-2xl relative">
                        <h3 className="text-3xl font-extrabold text-blue-900 mb-8 border-b-2 border-slate-100 pb-4">
                            Get in Touch
                        </h3>

                        <div className="space-y-8">
                            <a href="tel:8130900122" className="flex items-center group">
                                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                                    <Phone size={32} />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Call Us Today</p>
                                    <p className="text-3xl font-extrabold text-blue-700 group-hover:text-blue-900 transition-colors">8130900122</p>
                                </div>
                            </a>

                            <div className="flex items-center">
                                <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mr-6 text-slate-400 border border-slate-100">
                                    <Mail size={28} />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Email</p>
                                    <p className="text-lg font-bold text-slate-700">marks.archana@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mr-6 text-slate-400 border border-slate-100">
                                    <MapPin size={28} />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Location</p>
                                    <p className="text-lg font-bold text-slate-700">Online & Offline (call for address)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-blue-700 border border-blue-500 rounded-3xl p-8 md:p-10 shadow-inner">
                        <h3 className="text-2xl font-bold text-white mb-6">Request a Callback</h3>
                        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label htmlFor="parent" className="block text-sm font-medium text-blue-200 mb-1">Parent's Name</label>
                                <input type="text" id="parent" className="w-full bg-blue-800 border border-blue-600 rounded-xl px-4 py-3 text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all font-medium" placeholder="Enter name" />
                            </div>

                            <div>
                                <label htmlFor="phone_input" className="block text-sm font-medium text-blue-200 mb-1">Phone Number</label>
                                <input type="tel" id="phone_input" className="w-full bg-blue-800 border border-blue-600 rounded-xl px-4 py-3 text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all font-medium" placeholder="+91" />
                            </div>

                            <div>
                                <label htmlFor="class_req" className="block text-sm font-medium text-blue-200 mb-1">Student's Class</label>
                                <select id="class_req" className="w-full bg-blue-800 border border-blue-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all font-medium appearance-none">
                                    <option value="">Select Class</option>
                                    <option value="1-5">Class 1st to 5th</option>
                                    <option value="6-10">Class 6th to 10th</option>
                                </select>
                            </div>

                            <button type="submit" className="w-full py-4 px-6 mt-4 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-extrabold text-lg rounded-xl transition-all duration-300 shadow-[0_4px_15px_rgba(250,204,21,0.4)] hover:-translate-y-1 active:scale-[0.98]">
                                Submit Request
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
