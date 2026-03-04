import React from 'react';
import { Monitor, Wifi, Tablet, Globe, Laptop, Cpu } from 'lucide-react';
import { motion } from 'motion/react';

const DigitalCampus = () => {
  const features = [
    { icon: <Monitor />, title: 'Smart Classrooms', desc: 'Interactive digital panels for immersive learning.' },
    { icon: <Wifi />, title: 'Campus Wi-Fi', desc: 'High-speed secure internet for research and e-learning.' },
    { icon: <Globe />, title: 'E-Learning Support', desc: 'Access to global educational resources and platforms.' },
    { icon: <Laptop />, title: 'Computer Lab', desc: 'Modern systems with latest educational software.' },
    { icon: <Tablet />, title: 'Online Assignments', desc: 'Digital submission and tracking of student work.' },
    { icon: <Cpu />, title: 'Future-Ready', desc: 'Coding and robotics workshops for young innovators.' },
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">Future-Ready Learning</span>
            <h2 className="heading-secondary">Digital Campus & Smart Learning</h2>
            <p className="text-slate-600 mb-10 text-lg leading-relaxed">
              We embrace technology to enhance the learning experience. Our digital campus ensures students are well-prepared for the tech-driven world of tomorrow.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((f, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="text-navy bg-white p-3 rounded-xl shadow-sm h-fit border border-slate-100">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm mb-1">{f.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=800" 
                alt="Digital Classroom" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-navy p-8 rounded-3xl shadow-xl text-white max-w-[280px]">
              <div className="text-3xl font-serif font-bold text-gold mb-2">100%</div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Digitally Integrated Classrooms</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DigitalCampus;
