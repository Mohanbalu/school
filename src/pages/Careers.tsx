import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Users, CheckCircle2, ArrowRight, Mail } from 'lucide-react';

const Careers = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2000" 
            alt="Teachers" 
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
            <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">Join Our Team</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Careers at Little Angels</h1>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">Why Work With Us?</span>
              <h2 className="heading-secondary">Shape the Future with Us</h2>
              <p className="text-slate-600 mb-10 text-lg leading-relaxed">
                At Little Angels High School, we believe that teachers are the heart of our institution. We provide a supportive and dynamic environment where you can grow professionally while making a real difference in students' lives.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-gold"><CheckCircle2 size={24} /></div>
                  <div>
                    <h4 className="font-bold text-navy">Professional Development</h4>
                    <p className="text-sm text-slate-500">Regular workshops and training sessions to enhance your skills.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-gold"><CheckCircle2 size={24} /></div>
                  <div>
                    <h4 className="font-bold text-navy">Supportive Environment</h4>
                    <p className="text-sm text-slate-500">A collaborative culture that values every team member's contribution.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-gold"><CheckCircle2 size={24} /></div>
                  <div>
                    <h4 className="font-bold text-navy">Competitive Benefits</h4>
                    <p className="text-sm text-slate-500">Attractive salary packages and growth opportunities.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-navy p-8 rounded-3xl text-white shadow-xl">
                <GraduationCap className="text-gold mb-6" size={32} />
                <h4 className="text-xl font-bold mb-2">10+</h4>
                <p className="text-xs text-slate-400 uppercase tracking-widest">Experienced Faculty</p>
              </div>
              <div className="bg-gold p-8 rounded-3xl text-navy shadow-xl">
                <Users className="text-navy mb-6" size={32} />
                <h4 className="text-xl font-bold mb-2">Collaborative</h4>
                <p className="text-xs text-navy/60 uppercase tracking-widest">Team Culture</p>
              </div>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 col-span-2">
                <Briefcase className="text-gold mb-6" size={32} />
                <h4 className="text-xl font-bold text-navy mb-2">Growth Oriented</h4>
                <p className="text-sm text-slate-500">We invest in your professional journey.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recruitment Form */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-secondary">Teacher Recruitment Form</h2>
            <p className="text-slate-600">Interested in joining our team? Fill out the form below and we'll get back to you.</p>
          </div>

          <form className="bg-white p-10 rounded-3xl shadow-xl space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-slate-400">Full Name</label>
                <input type="text" className="w-full p-3 rounded-xl border border-slate-200 focus:border-gold outline-none transition-all" placeholder="Enter full name" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-slate-400">Email Address</label>
                <input type="email" className="w-full p-3 rounded-xl border border-slate-200 focus:border-gold outline-none transition-all" placeholder="Enter email" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-slate-400">Phone Number</label>
                <input type="tel" className="w-full p-3 rounded-xl border border-slate-200 focus:border-gold outline-none transition-all" placeholder="Enter phone number" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-slate-400">Position Applied For</label>
                <select className="w-full p-3 rounded-xl border border-slate-200 focus:border-gold outline-none transition-all">
                  <option>Pre-Primary Teacher</option>
                  <option>Primary Teacher (1-5)</option>
                  <option>High School Teacher (6-10)</option>
                  <option>Subject Specialist</option>
                  <option>Administrative Staff</option>
                </select>
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase text-slate-400">Qualifications</label>
              <input type="text" className="w-full p-3 rounded-xl border border-slate-200 focus:border-gold outline-none transition-all" placeholder="e.g., M.A., B.Ed." />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase text-slate-400">Experience (Years)</label>
              <input type="number" className="w-full p-3 rounded-xl border border-slate-200 focus:border-gold outline-none transition-all" placeholder="Enter years of experience" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase text-slate-400">Upload Resume (PDF)</label>
              <input type="file" className="w-full p-3 rounded-xl border border-slate-200 focus:border-gold outline-none transition-all" />
            </div>
            <button className="w-full btn-primary py-4 rounded-xl font-bold flex items-center justify-center gap-2">
              Submit Application <ArrowRight size={18} />
            </button>
          </form>
          
          <div className="mt-12 text-center">
            <p className="text-slate-500 text-sm">Or send your resume directly to:</p>
            <a href="mailto:careers@littleangels.edu.in" className="text-navy font-bold flex items-center justify-center gap-2 mt-2 hover:text-gold transition-all">
              <Mail size={18} /> careers@littleangels.edu.in
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
