import React from 'react';
import { Trophy, Star, Medal, Target, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';
import { TOPPERS } from '../../constants';

const AcademicExcellence = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">Our Proud Achievers</span>
          <h2 className="heading-secondary">Academic Excellence</h2>
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-4xl font-serif font-bold text-navy">100%</div>
              <div className="text-[10px] uppercase tracking-widest text-gold font-bold">Pass Percentage</div>
            </div>
            <div className="w-px h-12 bg-slate-200"></div>
            <div className="text-center">
              <div className="text-4xl font-serif font-bold text-navy">25+</div>
              <div className="text-[10px] uppercase tracking-widest text-gold font-bold">Years of Success</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {TOPPERS.map((topper, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="card text-center relative pt-16"
            >
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full border-4 border-white shadow-xl overflow-hidden">
                <img src={topper.image} alt={topper.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute top-4 right-4 text-gold">
                <Trophy size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold text-navy mb-1">{topper.name}</h3>
              <p className="text-xs text-slate-400 uppercase tracking-widest mb-4">Class {topper.grade} | {topper.year}</p>
              <div className="text-4xl font-serif font-bold text-gold mb-4">{topper.percentage}</div>
              <p className="text-sm text-slate-500 italic">"Consistent hard work and excellent guidance from teachers made this possible."</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="w-12 h-12 rounded-xl bg-navy text-white flex items-center justify-center mb-4 shadow-lg">
              <Medal size={24} />
            </div>
            <h4 className="font-bold text-navy mb-2">Olympiad Winners</h4>
            <p className="text-xs text-slate-500">15+ students won gold medals in National Science Olympiad.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="w-12 h-12 rounded-xl bg-navy text-white flex items-center justify-center mb-4 shadow-lg">
              <Target size={24} />
            </div>
            <h4 className="font-bold text-navy mb-2">IIT Foundation</h4>
            <p className="text-xs text-slate-500">Early competitive exam training starting from Grade 6.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="w-12 h-12 rounded-xl bg-navy text-white flex items-center justify-center mb-4 shadow-lg">
              <Star size={24} />
            </div>
            <h4 className="font-bold text-navy mb-2">Merit Scholarships</h4>
            <p className="text-xs text-slate-500">Awarded to top 5% of students every academic year.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="w-12 h-12 rounded-xl bg-navy text-white flex items-center justify-center mb-4 shadow-lg">
              <GraduationCap size={24} />
            </div>
            <h4 className="font-bold text-navy mb-2">100% Pass Result</h4>
            <p className="text-xs text-slate-500">Maintaining a perfect record in State Board exams for 20 years.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicExcellence;
