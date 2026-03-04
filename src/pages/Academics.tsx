import React from 'react';
import { motion } from 'motion/react';
import AcademicExcellence from '../components/sections/AcademicExcellence';
import DigitalCampus from '../components/sections/DigitalCampus';
import StudentDevelopment from '../components/sections/StudentDevelopment';

const Academics = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=2000" 
            alt="Academics" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-navy/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">Excellence in Learning</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Academic Programs</h1>
          </motion.div>
        </div>
      </section>

      <AcademicExcellence />
      <DigitalCampus />
      <StudentDevelopment />
      
      {/* Curriculum Details */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="heading-secondary">Our Curriculum Approach</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We follow the State Board curriculum, enhanced with modern pedagogical techniques. Our focus is on conceptual clarity and practical application of knowledge.
              </p>
              <ul className="space-y-4">
                {[
                  'Integrated IIT-JEE & NEET Foundation from Grade 6',
                  'Emphasis on Communication & Soft Skills',
                  'Regular Assessments & Personalized Feedback',
                  'Project-Based Learning for Practical Exposure',
                  'Special Focus on Vedic Mathematics & Abacus'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-navy font-bold">
                    <div className="w-2 h-2 rounded-full bg-gold"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800" 
                alt="Curriculum" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
