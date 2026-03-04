import React from 'react';
import { motion } from 'motion/react';
import UpcomingEvents from '../components/sections/UpcomingEvents';
import NewsAnnouncements from '../components/sections/NewsAnnouncements';

const Events = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514525253344-f21ce0bb71bd?auto=format&fit=crop&q=80&w=2000" 
            alt="Events" 
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
            <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">Stay Connected</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Events & News</h1>
          </motion.div>
        </div>
      </section>

      <UpcomingEvents />
      <NewsAnnouncements />
      
      {/* Event Calendar Preview */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-secondary">Academic Calendar Highlights</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Important dates for the current academic session.</p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
              {[
                { month: 'March', events: ['Science Fair (20th)', 'Term Exams (25th)'] },
                { month: 'April', events: ['Annual Day (15th)', 'New Session (20th)'] },
                { month: 'May', events: ['Summer Break (1st)', 'Teacher Training (15th)'] },
              ].map((item, idx) => (
                <div key={idx} className="p-8">
                  <h4 className="text-xl font-serif font-bold text-gold mb-6">{item.month} 2026</h4>
                  <ul className="space-y-4">
                    {item.events.map((e, i) => (
                      <li key={i} className="flex items-center gap-4 text-navy font-bold text-sm">
                        <div className="w-2 h-2 rounded-full bg-navy"></div>
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
