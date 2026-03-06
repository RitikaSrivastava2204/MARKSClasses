import React, { useState, useRef, useEffect } from 'react';
import { Phone, Mail, MapPin, MessageCircle, ChevronDown } from 'lucide-react';
import toast from 'react-hot-toast';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

// WhatsApp SVG Icon component for Contact page
const WhatsAppIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12.031 0C5.385 0 .002 5.381.002 12.028c0 2.126.554 4.195 1.606 6.01L.002 24l6.101-1.602c1.745.962 3.731 1.468 5.753 1.468H12.03c6.643 0 12.028-5.382 12.028-12.028C24.058 5.4 18.675 0 12.031 0zm0 21.841h-.008c-1.8 0-3.565-.484-5.111-1.397l-.367-.217-3.8.997.994-3.703-.238-.378C2.515 15.42 2.015 13.742 2.015 12.027 2.015 6.502 6.512 2.006 12.035 2.006c5.523 0 10.021 4.497 10.021 10.022 0 5.523-4.498 10.021-10.021 10.021zm5.503-7.519c-.302-.151-1.786-.883-2.063-.984-.277-.101-.479-.151-.68.151-.202.302-.781.984-.958 1.185-.176.201-.353.226-.655.075-2.067-1.03-3.6-2.046-4.991-4.453-.176-.301.171-.277.46-.86.076-.151.038-.277-.076-.453-.113-.176-.68-1.637-.932-2.241-.246-.591-.497-.504-.68-.504s-.378-.025-.579-.025c-.201 0-.529.076-.806.378-.277.302-1.058 1.033-1.058 2.519s1.083 2.923 1.234 3.125c.151.202 2.13 3.252 5.158 4.558 2.051.884 2.846.953 3.905.795.645-.096 2.063-.844 2.353-1.658.29-.814.29-1.513.202-1.658-.088-.146-.328-.247-.63-.398z" />
    </svg>
);

// Custom Select Component for a rich professional feel
const CustomSelect = ({ id, label, options, placeholder, required }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("");
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">{label}</label>
            <div
                className={`w-full bg-slate-50 border ${isOpen ? 'border-blue-500 ring-4 ring-blue-500/10' : 'border-slate-200'} rounded-xl px-4 py-3 flex justify-between items-center cursor-pointer transition-all hover:border-blue-300 shadow-sm`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`font-medium text-sm ${selected ? 'text-slate-800' : 'text-slate-400'}`}>
                    {selected || placeholder}
                </span>
                <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} />
            </div>

            {/* Invisible input to handle required validation seamlessly */}
            <input
                type="text"
                id={id}
                name={id}
                value={selected}
                onChange={() => { }}
                required={required}
                className="absolute w-full h-full inset-0 opacity-0 pointer-events-none z-[-1]"
                tabIndex={-1}
            />

            <div className={`absolute z-30 w-full mt-2 bg-white border border-slate-100 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] overflow-hidden transition-all duration-200 origin-top flex flex-col max-h-[240px] overflow-y-auto ${isOpen ? 'opacity-100 scale-100 visible translate-y-0' : 'opacity-0 scale-95 invisible -translate-y-2'}`}>
                {options.map((option, idx) => (
                    <div
                        key={idx}
                        className="px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-700 cursor-pointer transition-colors border-b border-slate-50 last:border-0 flex items-center justify-between group"
                        onClick={() => {
                            setSelected(option);
                            setIsOpen(false);
                        }}
                    >
                        <span>{option}</span>
                        {selected === option && (
                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

const Contact = () => {
    const container = useRef();

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 75%",
            }
        });

        tl.from(".contact-tagline", {
            y: -20,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out"
        }).from(".contact-info", {
            x: -50,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out"
        }, "-=0.3").from(".contact-form", {
            x: 50,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out"
        }, "-=0.5");
    }, { scope: container });

    return (
        <section ref={container} id="contact" className="py-10 md:py-16 bg-blue-600 relative overflow-hidden text-white">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">

                {/* Tagline Banner */}
                <div className="contact-tagline text-center mb-8 md:mb-12">
                    <div className="inline-block bg-yellow-400 text-blue-900 font-extrabold text-base sm:text-xl md:text-2xl px-4 md:px-5 py-2.5 md:py-3 rounded-xl shadow-lg transform -rotate-1 hover:rotate-0 transition-transform mb-3 md:mb-4">
                        🎯 Build Confidence. Improve Performance. Achieve Excellent Marks!
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4 mt-2 md:mt-3">
                        Ready to Start?
                    </h2>
                    <p className="text-base md:text-xl text-blue-100 max-w-2xl mx-auto">
                        Contact us today to secure your child's spot for the upcoming session.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">

                    {/* Contact Info */}
                    <div className="contact-info bg-white text-slate-800 rounded-3xl p-5 md:p-8 shadow-2xl relative">
                        <h3 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-5 md:mb-6 border-b-2 border-slate-100 pb-2 md:pb-3">
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
                    <div className="contact-form bg-white rounded-3xl p-6 md:p-8 shadow-2xl relative">
                        <h3 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-6 border-b-2 border-slate-100 pb-3">
                            Request a Callback
                        </h3>
                        <form
                            className="space-y-6"
                            onSubmit={(e) => {
                                e.preventDefault();

                                // Get values from the form elements
                                const parentName = e.target.parent.value;
                                const childName = e.target.child.value;
                                const phoneNumber = e.target.phone_input.value;
                                const schoolName = e.target.school_req.value;
                                const studentClass = e.target.class_req.value;
                                const board = e.target.board_req.value;
                                const mode = e.target.mode_req.value;

                                // Get checked subjects
                                const subjectCheckboxes = e.target.querySelectorAll('input[name="subject"]:checked');
                                const subjects = Array.from(subjectCheckboxes).map(cb => cb.value).join(', ');

                                // Basic validation
                                if (!parentName || !childName || !phoneNumber) {
                                    toast.error("Please fill in the required fields.");
                                    return;
                                }

                                // Format the message
                                let text = `Hello! I am ${parentName}, parent of ${childName}. I would like to request a callback at ${phoneNumber}.`;
                                if (schoolName) text += `\n*School*: ${schoolName}`;
                                if (board) text += `\n*Board*: ${board}`;
                                if (studentClass) text += `\n*Class*: ${studentClass}`;
                                if (mode) text += `\n*Mode*: ${mode}`;
                                if (subjects) text += `\n*Subjects*: ${subjects}`;

                                const loadingToast = toast.loading('Opening WhatsApp...');

                                setTimeout(() => {
                                    toast.dismiss(loadingToast);

                                    // Create the WhatsApp API URL (Using the requested number 9532982656)
                                    const encodedText = encodeURIComponent(text);
                                    const whatsappUrl = `https://wa.me/919532982656?text=${encodedText}`;

                                    // Open WhatsApp in a new tab
                                    window.open(whatsappUrl, '_blank');
                                }, 800);
                            }}
                        >
                            {/* Personal Details */}
                            <div className="space-y-4">
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Personal Details</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="parent" className="block text-sm font-semibold text-slate-700 mb-1.5">Parent's Name *</label>
                                        <input required type="text" id="parent" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all font-medium text-sm hover:border-blue-300 shadow-sm" placeholder="e.g. Rahul Sharma" />
                                    </div>
                                    <div>
                                        <label htmlFor="child" className="block text-sm font-semibold text-slate-700 mb-1.5">Student's Name *</label>
                                        <input required type="text" id="child" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all font-medium text-sm hover:border-blue-300 shadow-sm" placeholder="e.g. Aryan Sharma" />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label htmlFor="phone_input" className="block text-sm font-semibold text-slate-700 mb-1.5">Contact Number *</label>
                                        <input required type="tel" id="phone_input" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all font-medium text-sm hover:border-blue-300 shadow-sm" placeholder="+91 Your Phone Number" />
                                    </div>
                                </div>
                            </div>

                            {/* Academic Details */}
                            <div className="space-y-4 pt-2">
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-t border-slate-100 pt-5">Academic Details</h4>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="md:col-span-3">
                                        <label htmlFor="school_req" className="block text-sm font-semibold text-slate-700 mb-1.5">School Name</label>
                                        <input type="text" id="school_req" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all font-medium text-sm hover:border-blue-300 shadow-sm" placeholder="Name of current school" />
                                    </div>
                                    <CustomSelect
                                        id="class_req"
                                        label="Class"
                                        placeholder="Select Class"
                                        required={true}
                                        options={['Class 10', 'Class 9', 'Class 8', 'Class 7', 'Class 6', 'Class 5', 'Class 4', 'Class 3', 'Class 2', 'Class 1']}
                                    />
                                    <CustomSelect
                                        id="board_req"
                                        label="Board"
                                        placeholder="Select Board"
                                        required={true}
                                        options={['CBSE', 'ICSE', 'State', 'Others']}
                                    />
                                    <CustomSelect
                                        id="mode_req"
                                        label="Mode"
                                        placeholder="Select Mode"
                                        required={true}
                                        options={['Online', 'Offline', 'Hybrid']}
                                    />
                                </div>
                            </div>

                            {/* Subjects Checkboxes */}
                            <div className="pt-2">
                                <label className="block text-sm font-semibold text-slate-700 mb-3 border-t border-slate-100 pt-5">Subjects Required (Select Multiple)</label>
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 bg-slate-50 border border-slate-100 rounded-xl p-4">
                                    {['Mathematics', 'Science', 'EVS', 'Physics', 'Chemistry', 'Biology', 'English', 'Hindi', 'German', 'Computer', 'IT', 'AI', 'Social Science', 'All Subjects'].map((subj) => (
                                        <label key={subj} className="flex items-center space-x-3 text-sm text-slate-700 cursor-pointer group">
                                            <div className="relative flex items-center justify-center">
                                                <input type="checkbox" name="subject" value={subj} className="peer w-5 h-5 appearance-none border-2 border-slate-300 rounded focus:ring-2 focus:ring-blue-500 checked:bg-blue-600 checked:border-blue-600 transition-all cursor-pointer shadow-sm" />
                                                <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                            </div>
                                            <span className="group-hover:text-blue-700 font-medium transition-colors">{subj}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <button type="submit" className="w-full py-4 px-6 mt-4 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-extrabold text-lg rounded-xl transition-all duration-300 shadow-[0_8px_20px_rgba(250,204,21,0.3)] hover:shadow-[0_8px_25px_rgba(250,204,21,0.45)] hover:-translate-y-1 active:scale-[0.98] flex items-center justify-center space-x-2">
                                <span>Submit Request</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
