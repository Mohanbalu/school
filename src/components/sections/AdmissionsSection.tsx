import React from 'react';
import { CheckCircle2, Download, ArrowRight, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

const AdmissionsSection = () => {
  const steps = [
    { title: 'Submit Inquiry', desc: 'Fill out our online form or visit the campus office.' },
    { title: 'Campus Visit', desc: 'Experience our world-class infrastructure firsthand.' },
    { title: 'Interaction', desc: 'A friendly assessment to understand your child\'s needs.' },
    { title: 'Confirmation', desc: 'Secure your child\'s future with us.' },
  ];

  return (
    <section className="section-padding bg-navy text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 -skew-x-12 transform translate-x-1/4"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-6 border border-gold/30">
              <AlertCircle size={14} /> LIMITED SEATS AVAILABLE
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
              Admissions Open for <br />
              <span className="text-gold">2026-27</span>
            </h2>
            <p className="text-slate-300 mb-12 text-lg leading-relaxed">
              Give your child the gift of a premium education. Our holistic approach ensures academic excellence and character development.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {steps.map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold text-navy flex items-center justify-center font-bold shrink-0 shadow-lg">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{step.title}</h4>
                    <p className="text-xs text-slate-400">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="btn-primary bg-gold text-navy hover:bg-gold-light flex items-center gap-2">
                Apply Online Now <ArrowRight size={18} />
              </button>
              <button className="btn-secondary border-white text-white hover:bg-white hover:text-navy flex items-center gap-2">
                <Download size={18} /> Download Prospectus
              </button>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-2xl text-navy"
          >
            <h3 className="text-2xl font-serif font-bold mb-2">Scholarship Program</h3>
            <p className="text-slate-500 text-sm mb-8">We reward merit. Scholarships up to 50% for high achievers.</p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="text-gold"><CheckCircle2 size={24} /></div>
                <div>
                  <h4 className="font-bold text-sm">Merit-Based Scholarship</h4>
                  <p className="text-xs text-slate-500">For students scoring above 95% in previous grades.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="text-gold"><CheckCircle2 size={24} /></div>
                <div>
                  <h4 className="font-bold text-sm">Sports Excellence</h4>
                  <p className="text-xs text-slate-500">For state and national level athletes.</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-navy/5 border border-navy/10">
              <h4 className="font-bold text-navy mb-2 flex items-center gap-2">
                <AlertCircle size={18} className="text-gold" /> Admission Deadline
              </h4>
              <p className="text-sm text-slate-600">Phase 1 admissions close on March 31st, 2026. Apply early to secure your seat.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsSection;
