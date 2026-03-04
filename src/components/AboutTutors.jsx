import React from 'react';
import { Award, Target, BookOpenCheck, GraduationCap } from 'lucide-react';

const TutorSection = ({
    name,
    role,
    image,
    imageAlt,
    badgeText,
    badgeIcon: BadgeIcon,
    titlePrefix,
    titleHighlight,
    titleSuffix,
    children,
    quote,
    reverseLayout = false
}) => {
    return (
        <div className={`flex flex-col ${reverseLayout ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}>
            {/* Image/Visual Column */}
            <div className="w-full lg:w-5/12 relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-sky-200 to-yellow-200 rounded-3xl blur-lg opacity-40"></div>
                <div className="relative bg-white p-1.5 md:p-2 rounded-2xl shadow-xl border border-blue-100">
                    <div className="aspect-[4/5] bg-slate-100 rounded-xl overflow-hidden relative group shadow-inner">
                        <img
                            src={image}
                            alt={imageAlt}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop";
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Floating Badge */}
                    <div className={`absolute -bottom-4 md:-bottom-6 ${reverseLayout ? '-left-2 md:-left-6' : '-right-2 md:-right-6'} bg-yellow-400 text-blue-900 px-3 md:px-6 py-2 md:py-4 rounded-xl shadow-lg font-bold text-sm md:text-base flex items-center gap-2 md:gap-3 transform ${reverseLayout ? '-rotate-3 hover:rotate-0' : 'rotate-3 hover:rotate-0'} transition-transform cursor-default border border-yellow-300`}>
                        <BadgeIcon className="w-4 h-4 md:w-6 md:h-6" />
                        {badgeText}
                    </div>
                </div>
            </div>

            {/* Content Column */}
            <div className="w-full lg:w-7/12">
                <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-600 font-bold text-xs md:text-sm tracking-wide uppercase mb-4 md:mb-6 flex-wrap">
                    <BookOpenCheck className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    Meet {name} <span className="text-blue-400 mx-0.5 md:mx-1">•</span> <span className="text-slate-600 font-medium capitalize">{role}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-800 mb-5 md:mb-8 leading-tight">
                    {titlePrefix} <span className="text-blue-600 relative inline-block">
                        {titleHighlight}
                        <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-2 md:h-3 bg-yellow-200 -z-10 rounded-full"></span>
                    </span> {titleSuffix}
                </h2>

                <div className="space-y-4 md:space-y-6 text-base md:text-lg text-slate-600 leading-relaxed">
                    {children}

                    <div className={`${reverseLayout ? 'border-r-4 rounded-l-xl text-right' : 'border-l-4 rounded-r-xl'} bg-blue-50 border-blue-500 p-4 md:p-6 mt-6 md:mt-8`}>
                        <p className="italic text-slate-700 font-medium text-sm md:text-base">
                            "{quote}"
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const AboutTutors = () => {
    return (
        <section id="about" className="py-12 md:py-24 bg-white relative overflow-hidden border-t border-blue-50">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 skew-x-12 transform origin-top-right z-0"></div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 space-y-16 md:space-y-32">
                <TutorSection
                    name="Ms. Ritika Srivastava"
                    role="Tutor & Founder"
                    image="src/assets/tutor-photo.jpg"
                    imageAlt="Ritika - Tutor at MARKS Classes"
                    badgeText="Proven Results"
                    badgeIcon={Award}
                    titlePrefix="An"
                    titleHighlight="Analytical Approach"
                    titleSuffix="to Mastering Academics"
                    quote="We build strong academic foundations today, so our students can confidently build their futures tomorrow."
                >
                    <p>
                        Welcome to MARKS Classes! I'm Ritika. I built this platform out of a pure love for teaching and a desire to see students thrive. As an educator, I believe that a supportive environment is the key to unlocking a student's full potential. My greatest passion lies in making learning accessible, engaging, and stress-free for every student.
                    </p>
                    <p>
                        I know that subjects like Mathematics, Science or Computers can sometimes feel intimidating. I bring my passion for problem solving and a tech-driven, analytical mindset directly into my classroom. I don't believe in rote memorization to just pass exams. Instead, my approach is all about teaching students how to break down intimidating concepts into <strong className="text-slate-800">simple, manageable steps, building their confidence to tackle any new challenge that comes their way!</strong>
                    </p>
                </TutorSection>

                <TutorSection
                    name="Mr. Manoj Srivastava"
                    role="Senior Tutor & Founder"
                    image="src/assets/tutor2-photo.jpg"
                    imageAlt="Father - Tutor at MARKS Classes"
                    badgeText="Expert Guidance"
                    badgeIcon={Target}
                    titlePrefix="A"
                    titleHighlight="Wealth of Experience"
                    titleSuffix="in Education"
                    quote="Education is not just about learning facts, but training the mind to think."
                    reverseLayout={true}
                >
                    <p>
                        Hello and welcome to MARKS Classes! I'm Manoj. My journey here stems from a lifelong love for Mathematics and Physics, and a deep commitment to keeping education accessible. Having stepped in to teach students for free during the pandemic, I realized that a student's learning should never be hindered by outside circumstances. I am a firm believer in the power of dedicated online teaching—creating a focused, highly effective environment right at home where students save time, avoid disruptions, and truly thrive.
                    </p>
                    <p>
                        I understand that mastering Science and Mathematics requires more than just reading a textbook. Drawing from my background as a Mechanical Engineer, I bring a highly structured, logical mindset into my digital classroom. I focus heavily on building crystal-clear basic concepts and smart learning, completely moving away from rote memorization. Through regular revisions, dedicated doubt-clearing sessions, and a focused online setup, my goal is to provide uninterrupted guidance— <strong className="text-slate-800">building your absolute confidence to conquer the syllabus and excel in your academics!</strong>
                    </p>
                </TutorSection>

                <TutorSection
                    name="Mrs. Archana Srivastava"
                    role="Tutor - Early Years & Managing Director"
                    image="src/assets/tutor3-photo.png"
                    imageAlt="Mother - Tutor at MARKS Classes"
                    badgeText="Holistic Growth"
                    badgeIcon={GraduationCap}
                    titlePrefix="A"
                    titleHighlight="Nurturing Approach"
                    titleSuffix="to Learning"
                    quote="A supportive environment is the soil in which a student's potential can truly bloom."
                >
                    <p>
                        Welcome to MARKS Classes! I'm Archana. I have always believed that education is a journey of the heart just as much as the mind. My passion lies in creating a warm, encouraging environment where students feel completely comfortable asking questions and making mistakes—because I know those are the most essential parts of true learning
                    </p>
                    <p>
                        While mastering the syllabus is important, my true focus is on a student's holistic development. I work closely with our students to ensure they not only grasp their academic material but also develop strong study habits, emotional resilience, and a genuine love for learning that stays with them throughout their lives. When a student feels safe and supported, there is absolutely no limit to what they can achieve.
                    </p>
                </TutorSection>
            </div>
        </section>
    );
};

export default AboutTutors;
