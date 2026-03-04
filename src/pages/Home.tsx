import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Users, 
  BookOpen, 
  Trophy, 
  MapPin, 
  Plus, 
  Minus, 
  Phone, 
  Mail, 
  Calendar, 
  Download,
  GraduationCap,
  Star,
  CheckCircle2,
  FlaskConical,
  Library,
  Monitor,
  Bus
} from 'lucide-react';

// Import Sections
import UpcomingEvents from '../components/sections/UpcomingEvents';
import AdmissionsSection from '../components/sections/AdmissionsSection';
import AcademicExcellence from '../components/sections/AcademicExcellence';
import DigitalCampus from '../components/sections/DigitalCampus';
import SafetySecurity from '../components/sections/SafetySecurity';
import StudentDevelopment from '../components/sections/StudentDevelopment';
import NewsAnnouncements from '../components/sections/NewsAnnouncements';
import LifeAtLittleAngels from '../components/sections/LifeAtLittleAngels';
import ParentPortalPreview from '../components/sections/ParentPortalPreview';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=2000" 
          alt="School Campus" 
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block bg-gold/20 text-gold-light border border-gold/30 px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-6 uppercase">
            Est. 1998 | Jaggaiahpeta
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Shaping Future <br />
            <span className="text-gold">Leaders</span> Since 1998
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed font-light">
            Holistic Education | Academic Excellence | Character Building. <br />
            Empowering students with knowledge, values, and vision for over 25 years.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary flex items-center gap-2 bg-gold text-navy hover:bg-gold-light">
              Admissions Open <ArrowRight size={18} />
            </button>
            <button className="btn-secondary border-white text-white hover:bg-white hover:text-navy">
              Book a Campus Visit
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-0 w-full hidden md:block">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-12 text-white/80">
            <div className="flex flex-col">
              <span className="text-3xl font-serif font-bold text-gold">25+</span>
              <span className="text-xs uppercase tracking-wider">Years of Legacy</span>
            </div>
            <div className="h-12 w-px bg-white/20"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-serif font-bold text-gold">100%</span>
              <span className="text-xs uppercase tracking-wider">Pass Results</span>
            </div>
            <div className="h-12 w-px bg-white/20"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-serif font-bold text-gold">300+</span>
              <span className="text-xs uppercase tracking-wider">Active Students</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Infrastructure = () => {
  const facilities = [
    { icon: <Monitor />, title: 'Digital Classrooms', desc: 'Equipped with smart boards and visual aids.' },
    { icon: <FlaskConical />, title: 'Science Labs', desc: 'Modern labs for Physics, Chemistry, and Biology.' },
    { icon: <Library />, title: 'Rich Library', desc: 'Over 1000+ books and digital resources.' },
    { icon: <Trophy />, title: 'Playground', desc: 'Spacious area for sports and physical activities.' },
    { icon: <Bus />, title: 'Safe Transport', desc: 'Reliable bus service covering all major routes.' },
    { icon: <GraduationCap />, title: 'Activity Rooms', desc: 'Dedicated space for arts, music, and dance.' },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">Our Infrastructure</span>
            <h2 className="heading-secondary">5 Acre Green Campus with Modern Amenities</h2>
          </div>
          <button className="btn-secondary">Explore Campus</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex gap-6 p-8 rounded-2xl border border-slate-100 hover:border-gold/30 hover:bg-gold/5 transition-all"
            >
              <div className="bg-navy text-white p-4 rounded-xl h-fit">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { q: 'What is the admission process?', a: 'The process involves submitting an inquiry, a campus visit, a brief interaction/assessment, and final confirmation with documentation.' },
    { q: 'What curriculum is followed?', a: 'We follow the State Board curriculum with additional focus on competitive exam foundations and holistic development.' },
    { q: 'Is transport available?', a: 'Yes, we provide safe and reliable bus transportation covering all major areas of Jaggaiahpeta.' },
    { q: 'What are the school timings?', a: 'School timings are from 8:30 AM to 4:00 PM, Monday to Saturday.' },
    { q: 'How to contact administration?', a: 'You can reach us via phone at +91 98765 43210 or email at info@littleangels.edu.in.' },
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">Common Questions</span>
          <h2 className="heading-secondary">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden">
              <button 
                className="w-full p-6 text-left flex justify-between items-center bg-white hover:bg-slate-50 transition-all"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span className="font-bold text-navy">{faq.q}</span>
                {openIdx === idx ? <Minus size={20} className="text-gold" /> : <Plus size={20} className="text-gold" />}
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-500 text-sm leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">Get In Touch</span>
            <h2 className="heading-secondary">Contact Information</h2>
            <p className="text-slate-600 mb-10">
              Have questions? We're here to help. Reach out to us via any of the channels below.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-navy text-white flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-1">Our Location</h4>
                  <p className="text-slate-500 text-sm">A.Nagar, Jaggaiahpeta, Krishna District,<br />Andhra Pradesh – 521175</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-navy text-white flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-1">Call Us</h4>
                  <p className="text-slate-500 text-sm">+91 98765 43210<br />+91 98765 43211</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-navy text-white flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-1">Email Us</h4>
                  <p className="text-slate-500 text-sm">info@littleangels.edu.in<br />admissions@littleangels.edu.in</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-slate-50 rounded-3xl shadow-sm border border-slate-100">
              <h4 className="font-bold text-navy mb-4 flex items-center gap-2">
                <Calendar size={20} className="text-gold" /> Enrollment Notice
              </h4>
              <p className="text-sm text-slate-500 mb-6">Enroll your child today for the 2026-27 session. Limited seats available for Pre-Primary and Primary grades.</p>
              <button className="flex items-center gap-2 text-navy font-bold hover:text-gold transition-all">
                <Download size={18} /> Download Prospectus
              </button>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl h-[500px] border-8 border-slate-50">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.123456789!2d80.0987654321!3d16.8987654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDUzJzU1LjUiTiA4MMKwMDUnNTUuNSJF!5e0!3m2!1sen!2sin!4v1234567890" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="School Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div>
      <Hero />
      <UpcomingEvents />
      <AdmissionsSection />
      <AcademicExcellence />
      <LifeAtLittleAngels />
      <DigitalCampus />
      <StudentDevelopment />
      <ParentPortalPreview />
      <SafetySecurity />
      <Infrastructure />
      <NewsAnnouncements />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home;
