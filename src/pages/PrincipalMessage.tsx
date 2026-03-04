import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Quote, CheckCircle2 } from 'lucide-react';

const PrincipalMessage = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523050853064-8521a3998319?auto=format&fit=crop&q=80&w=2000" 
            alt="School Campus" 
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
            <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">Leadership Vision</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Principal's Message</h1>
          </motion.div>
        </div>
      </section>

      {/* Message Content */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-50 relative">
                <img 
                  src="https://i.pravatar.cc/600?u=principal" 
                  alt="Principal" 
                  className="w-full aspect-[4/5] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 w-full bg-navy/90 p-8 text-white backdrop-blur-sm">
                  <h3 className="text-2xl font-serif font-bold text-gold">Mrs. S. Lakshmi</h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Principal | M.A., B.Ed.</p>
                </div>
              </div>
              
              <div className="mt-12 p-8 rounded-3xl bg-gold/10 border border-gold/20 flex gap-6">
                <div className="text-gold shrink-0"><Quote size={40} /></div>
                <p className="text-navy font-serif italic text-lg leading-relaxed">
                  "Education is not the filling of a pail, but the lighting of a fire."
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="heading-secondary">Nurturing Excellence Since 1998</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Welcome to Little Angels High School. As we reflect on our journey since 1998, I am filled with immense pride in the achievements of our students and the dedication of our faculty.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our vision for academic excellence is built on the foundation of discipline, character, and leadership. We believe that every child is unique and possesses the potential to achieve greatness. Our role is to provide the right environment, tools, and guidance to help them discover and nurture their talents.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8 border-y border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="text-gold"><CheckCircle2 size={24} /></div>
                  <div>
                    <h4 className="font-bold text-navy">Academic Rigor</h4>
                    <p className="text-xs text-slate-500">Consistent 100% pass results in state boards.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-gold"><CheckCircle2 size={24} /></div>
                  <div>
                    <h4 className="font-bold text-navy">Character Building</h4>
                    <p className="text-xs text-slate-500">Focus on moral and ethical values.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-gold"><CheckCircle2 size={24} /></div>
                  <div>
                    <h4 className="font-bold text-navy">Leadership Training</h4>
                    <p className="text-xs text-slate-500">Empowering students to take initiative.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-gold"><CheckCircle2 size={24} /></div>
                  <div>
                    <h4 className="font-bold text-navy">Holistic Growth</h4>
                    <p className="text-xs text-slate-500">Balancing academics with co-curricular activities.</p>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed">
                To our parents, I thank you for your continued trust in us. To our students, I encourage you to be vigilant, stay curious, and always strive for excellence. Together, we will continue to shape the future leaders of tomorrow.
              </p>
              
              <div className="pt-8">
                <p className="font-serif font-bold text-navy text-xl">Warm Regards,</p>
                <p className="text-gold font-bold uppercase tracking-widest mt-2">Mrs. S. Lakshmi</p>
                <p className="text-xs text-slate-400">Principal, Little Angels High School</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrincipalMessage;
