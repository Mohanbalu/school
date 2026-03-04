import React from 'react';
import { UserCheck, Book, Award, CreditCard, Bell } from 'lucide-react';
import { motion } from 'motion/react';

const ParentPortalPreview = () => {
  const features = [
    { icon: <UserCheck />, title: 'Attendance Tracking', desc: 'Real-time updates on your child\'s presence.' },
    { icon: <Book />, title: 'Homework Updates', desc: 'Access daily assignments and project details.' },
    { icon: <Award />, title: 'Exam Results', desc: 'Instant access to term results and progress reports.' },
    { icon: <CreditCard />, title: 'Fee Payment', desc: 'Secure online portal for hassle-free fee payments.' },
    { icon: <Bell />, title: 'Announcements', desc: 'Stay informed with direct circulars and notices.' },
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-white p-4">
                <div className="bg-navy rounded-2xl p-6 text-white">
                  <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                        <UserCheck size={20} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold">Student Dashboard</h4>
                        <p className="text-[10px] text-slate-400">Welcome back, Parent</p>
                      </div>
                    </div>
                    <Bell size={20} className="text-gold" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                      <div className="text-gold text-xs font-bold uppercase tracking-widest mb-1">Attendance</div>
                      <div className="text-2xl font-bold">98%</div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                      <div className="text-gold text-xs font-bold uppercase tracking-widest mb-1">Next Exam</div>
                      <div className="text-sm font-bold">March 20th</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-xs">Math Homework</span>
                      <span className="text-[10px] bg-gold text-navy px-2 py-0.5 rounded-full font-bold">PENDING</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-xs">Science Project</span>
                      <span className="text-[10px] bg-emerald-500 text-white px-2 py-0.5 rounded-full font-bold">SUBMITTED</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Element */}
              <div className="absolute -top-6 -right-6 bg-gold text-navy p-6 rounded-2xl shadow-xl hidden md:block">
                <h4 className="text-xl font-serif font-bold">Smart App</h4>
                <p className="text-[10px] font-bold uppercase tracking-wider">Coming Soon to iOS & Android</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">Stay Connected</span>
            <h2 className="heading-secondary">Parent Portal Feature Preview</h2>
            <p className="text-slate-600 mb-10 text-lg leading-relaxed">
              We bridge the gap between school and home. Our dedicated Parent Portal ensures you are always in the loop regarding your child's progress.
            </p>
            
            <div className="space-y-6">
              {features.map((f, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="text-navy bg-white p-3 rounded-xl shadow-sm h-fit border border-slate-100 group-hover:bg-navy group-hover:text-white transition-all">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm mb-1">{f.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="btn-primary mt-10">Access Parent Portal</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ParentPortalPreview;
