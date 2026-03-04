import React from 'react';
import { Calculator, Brain, Mic, Users, Compass } from 'lucide-react';
import { motion } from 'motion/react';

const StudentDevelopment = () => {
  const programs = [
    { icon: <Calculator />, title: 'Vedic Mathematics', desc: 'Ancient techniques for lightning-fast calculations.' },
    { icon: <Brain />, title: 'Abacus Program', desc: 'Enhancing mental arithmetic and concentration skills.' },
    { icon: <Mic />, title: 'Public Speaking', desc: 'Building confidence and effective communication skills.' },
    { icon: <Users />, title: 'Leadership Training', desc: 'Workshops to develop decision-making and teamwork.' },
    { icon: <Compass />, title: 'Career Guidance', desc: 'Professional counseling for future academic paths.' },
  ];

  return (
    <section className="section-padding bg-navy text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">Beyond Academics</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Student Development Programs</h2>
            <p className="text-slate-300 mb-12 text-lg leading-relaxed">
              We believe in the holistic growth of our students. Our specialized programs are designed to sharpen minds and build essential life skills.
            </p>
            
            <div className="space-y-6">
              {programs.map((p, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-6 p-4 rounded-2xl border border-white/10 hover:bg-white/5 transition-all"
                >
                  <div className="text-gold">{p.icon}</div>
                  <div>
                    <h4 className="font-bold text-white">{p.title}</h4>
                    <p className="text-xs text-slate-400">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden h-64 shadow-xl">
                <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=600" alt="Students" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="rounded-2xl overflow-hidden h-48 shadow-xl">
                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600" alt="Students" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden h-48 shadow-xl">
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600" alt="Students" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="rounded-2xl overflow-hidden h-64 shadow-xl">
                <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600" alt="Students" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentDevelopment;
