import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

// WhatsApp SVG Icon component for Contact page
const WhatsAppIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12.031 0C5.385 0 .002 5.381.002 12.028c0 2.126.554 4.195 1.606 6.01L.002 24l6.101-1.602c1.745.962 3.731 1.468 5.753 1.468H12.03c6.643 0 12.028-5.382 12.028-12.028C24.058 5.4 18.675 0 12.031 0zm0 21.841h-.008c-1.8 0-3.565-.484-5.111-1.397l-.367-.217-3.8.997.994-3.703-.238-.378C2.515 15.42 2.015 13.742 2.015 12.027 2.015 6.502 6.512 2.006 12.035 2.006c5.523 0 10.021 4.497 10.021 10.022 0 5.523-4.498 10.021-10.021 10.021zm5.503-7.519c-.302-.151-1.786-.883-2.063-.984-.277-.101-.479-.151-.68.151-.202.302-.781.984-.958 1.185-.176.201-.353.226-.655.075-2.067-1.03-3.6-2.046-4.991-4.453-.176-.301.171-.277.46-.86.076-.151.038-.277-.076-.453-.113-.176-.68-1.637-.932-2.241-.246-.591-.497-.504-.68-.504s-.378-.025-.579-.025c-.201 0-.529.076-.806.378-.277.302-1.058 1.033-1.058 2.519s1.083 2.923 1.234 3.125c.151.202 2.13 3.252 5.158 4.558 2.051.884 2.846.953 3.905.795.645-.096 2.063-.844 2.353-1.658.29-.814.29-1.513.202-1.658-.088-.146-.328-.247-.63-.398z" />
    </svg>
);

const Contact = () => {
    return (
        <section id="contact" className="py-12 md:py-24 bg-blue-600 relative overflow-hidden text-white">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">

                {/* Tagline Banner */}
                <div className="text-center mb-10 md:mb-16">
                    <div className="inline-block bg-yellow-400 text-blue-900 font-extrabold text-base sm:text-xl md:text-3xl px-4 md:px-6 py-3 md:py-4 rounded-xl shadow-lg transform -rotate-1 hover:rotate-0 transition-transform mb-4 md:mb-6">
                        🎯 Build Confidence. Improve Performance. Achieve Excellent Marks!
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 mt-3 md:mt-4">
                        Ready to Start?
                    </h2>
                    <p className="text-base md:text-xl text-blue-100 max-w-2xl mx-auto">
                        Contact us today to secure your child's spot for the upcoming session.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">

                    {/* Contact Info */}
                    <div className="bg-white text-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl relative">
                        <h3 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-6 md:mb-8 border-b-2 border-slate-100 pb-3 md:pb-4">
                            Get in Touch
                        </h3>

                        <div className="space-y-6 md:space-y-8">
                            <a href="tel:8130900122" className="flex items-center group">
                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4 md:mr-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm flex-shrink-0">
                                    <Phone className="w-6 h-6 md:w-8 md:h-8" />
                                </div>
                                <div>
                                    <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wider">Call Us Today</p>
                                    <p className="text-xl md:text-3xl font-extrabold text-blue-700 group-hover:text-blue-900 transition-colors">Click to Call</p>
                                </div>
                            </a>

                            <a href="https://wa.me/9532982656?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20MARKS%20Classes." target="_blank" rel="noopener noreferrer" className="flex items-center group">
                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-emerald-50 flex items-center justify-center mr-4 md:mr-6 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300 shadow-sm flex-shrink-0 border border-emerald-100 group-hover:border-emerald-500">
                                    <WhatsAppIcon className="w-6 h-6 md:w-8 md:h-8" />
                                </div>
                                <div>
                                    <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wider">Message on WhatsApp</p>
                                    <p className="text-lg md:text-xl font-bold text-emerald-600 group-hover:text-emerald-700 transition-colors">Click to Message</p>
                                </div>
                            </a>

                            <div className="flex items-center">
                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-slate-50 flex items-center justify-center mr-4 md:mr-6 text-slate-400 border border-slate-100 flex-shrink-0">
                                    <Mail className="w-5 h-5 md:w-7 md:h-7" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wider">Email</p>
                                    <p className="text-sm md:text-lg font-bold text-slate-700 truncate">marks.archana@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-slate-50 flex items-center justify-center mr-4 md:mr-6 text-slate-400 border border-slate-100 flex-shrink-0">
                                    <MapPin className="w-5 h-5 md:w-7 md:h-7" />
                                </div>
                                <div>
                                    <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wider">Location</p>
                                    <p className="text-sm md:text-lg font-bold text-slate-700">Online & Offline (call for address)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-blue-700 border border-blue-500 rounded-3xl p-5 md:p-8 lg:p-10 shadow-inner">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-5 md:mb-6">Request a Callback</h3>
                        <form className="space-y-4 md:space-y-5" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label htmlFor="parent" className="block text-xs md:text-sm font-medium text-blue-200 mb-1">Parent's Name</label>
                                <input type="text" id="parent" className="w-full bg-blue-800 border border-blue-600 rounded-xl px-4 py-2.5 md:py-3 text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all font-medium text-sm md:text-base" placeholder="Enter name" />
                            </div>

                            <div>
                                <label htmlFor="phone_input" className="block text-xs md:text-sm font-medium text-blue-200 mb-1">Phone Number</label>
                                <input type="tel" id="phone_input" className="w-full bg-blue-800 border border-blue-600 rounded-xl px-4 py-2.5 md:py-3 text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all font-medium text-sm md:text-base" placeholder="+91" />
                            </div>

                            <div>
                                <label htmlFor="class_req" className="block text-xs md:text-sm font-medium text-blue-200 mb-1">Student's Class</label>
                                <select id="class_req" className="w-full bg-blue-800 border border-blue-600 rounded-xl px-4 py-2.5 md:py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all font-medium text-sm md:text-base appearance-none">
                                    <option value="">Select Class</option>
                                    <option value="1-5">Class 1st to 5th</option>
                                    <option value="6-10">Class 6th to 10th</option>
                                </select>
                            </div>

                            <button type="submit" className="w-full py-3 md:py-4 px-6 mt-3 md:mt-4 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-extrabold text-base md:text-lg rounded-xl transition-all duration-300 shadow-[0_4px_15px_rgba(250,204,21,0.4)] hover:-translate-y-1 active:scale-[0.98]">
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
