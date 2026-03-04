import React from 'react';
import { motion } from 'motion/react';
import LifeAtLittleAngels from '../components/sections/LifeAtLittleAngels';
import SafetySecurity from '../components/sections/SafetySecurity';

const CampusLife = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=2000" 
            alt="Campus Life" 
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
            <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">Vibrant & Secure</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Campus Life</h1>
          </motion.div>
        </div>
      </section>

      <LifeAtLittleAngels />
      <SafetySecurity />
      
      {/* Infrastructure Showcase */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-secondary">Our Infrastructure</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Explore our 5-acre green campus designed for optimal learning and growth.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Spacious Classrooms', img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600' },
              { title: 'Well-Equipped Library', img: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=600' },
              { title: 'Modern Science Lab', img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600' },
              { title: 'Large Playground', img: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80&w=600' },
              { title: 'Computer Lab', img: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=600' },
              { title: 'Activity Rooms', img: 'https://images.unsplash.com/photo-1514525253344-f21ce0bb71bd?auto=format&fit=crop&q=80&w=600' },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="rounded-3xl overflow-hidden shadow-xl group"
              >
                <div className="h-64 relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <h4 className="text-xl font-bold text-white">{item.title}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CampusLife;
