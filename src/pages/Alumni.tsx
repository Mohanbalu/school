import React from 'react';
import { motion } from 'motion/react';
import { Users, Star, Quote, ArrowRight, GraduationCap } from 'lucide-react';
import { ALUMNI } from '../constants';

const Alumni = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=2000" 
            alt="Alumni" 
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
            <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">Our Global Network</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Alumni Network</h1>
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">Alumni Success Stories</span>
            <h2 className="heading-secondary">Our Pride, Our Legacy</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our alumni are making their mark across the globe in various fields. Their success is a testament to the foundation built at Little Angels.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {ALUMNI.map((alumnus, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-8 p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all group"
              >
                <div className="w-40 h-40 rounded-2xl overflow-hidden shrink-0 shadow-lg border-4 border-white">
                  <img src={alumnus.image} alt={alumnus.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-gold mb-2">
                    <Star size={16} className="fill-gold" />
                    <span className="text-xs font-bold uppercase tracking-widest">Batch of {alumnus.batch}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-navy mb-1">{alumnus.name}</h3>
                  <p className="text-sm font-bold text-gold mb-4 uppercase tracking-widest">{alumnus.achievement}</p>
                  <div className="flex gap-4">
                    <div className="text-gold shrink-0"><Quote size={24} /></div>
                    <p className="text-slate-500 italic text-sm leading-relaxed">"{alumnus.quote}"</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="section-padding bg-navy text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 -skew-x-12 transform translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">Stay Connected</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Alumni Registration</h2>
              <p className="text-slate-300 mb-10 text-lg">
                Join our growing network of alumni. Stay updated with school events, mentor current students, and connect with your batchmates.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <Users className="text-gold mb-4" size={32} />
                  <h4 className="font-bold mb-2">Network</h4>
                  <p className="text-xs text-slate-400">Connect with 1000+ alumni globally.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <GraduationCap className="text-gold mb-4" size={32} />
                  <h4 className="font-bold mb-2">Mentorship</h4>
                  <p className="text-xs text-slate-400">Guide the next generation of leaders.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-2xl text-navy">
              <h3 className="text-2xl font-serif font-bold mb-6">Register Now</h3>
              <form className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-slate-400">Full Name</label>
                  <input type="text" className="w-full p-3 rounded-xl border border-slate-200 focus:border-gold outline-none transition-all" placeholder="Enter name" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase text-slate-400">Batch Year</label>
                    <input type="text" className="w-full p-3 rounded-xl border border-slate-200 focus:border-gold outline-none transition-all" placeholder="e.g., 2015" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase text-slate-400">Current Profession</label>
                    <input type="text" className="w-full p-3 rounded-xl border border-slate-200 focus:border-gold outline-none transition-all" placeholder="e.g., Engineer" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-slate-400">Email Address</label>
                  <input type="email" className="w-full p-3 rounded-xl border border-slate-200 focus:border-gold outline-none transition-all" placeholder="Enter email" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-slate-400">Phone Number</label>
                  <input type="tel" className="w-full p-3 rounded-xl border border-slate-200 focus:border-gold outline-none transition-all" placeholder="Enter phone" />
                </div>
                <button className="w-full btn-primary bg-navy text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2">
                  Join Network <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Alumni;
