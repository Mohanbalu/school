import React, { useState, useEffect } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { UPCOMING_EVENTS } from '../../constants';

const UpcomingEvents = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-04-15T10:00:00').getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">Mark Your Calendar</span>
            <h2 className="heading-secondary">Upcoming Events</h2>
          </div>
          
          {/* Countdown Timer */}
          <div className="bg-navy p-6 rounded-2xl shadow-xl flex gap-6 text-white border border-gold/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-gold">{timeLeft.days}</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-400">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gold">{timeLeft.hours}</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-400">Hrs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gold">{timeLeft.minutes}</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-400">Min</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gold">{timeLeft.seconds}</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-400">Sec</div>
            </div>
            <div className="h-10 w-px bg-white/10 mx-2"></div>
            <div className="flex flex-col justify-center">
              <div className="text-xs font-bold text-gold uppercase tracking-widest">Annual Day</div>
              <div className="text-[10px] text-slate-400">Countdown</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {UPCOMING_EVENTS.map((event, idx) => (
            <motion.div 
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="card p-0 overflow-hidden group"
            >
              <div className="h-48 overflow-hidden relative">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-navy font-bold text-xs flex items-center gap-2">
                  <Calendar size={14} className="text-gold" /> {event.date}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-widest mb-2">
                  <Clock size={14} /> {event.time}
                </div>
                <h3 className="text-xl font-serif font-bold text-navy mb-3">{event.title}</h3>
                <p className="text-sm text-slate-500 mb-6">{event.description}</p>
                <button className="text-navy font-bold text-sm flex items-center gap-2 group-hover:text-gold transition-colors">
                  Event Details <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="btn-secondary">View All Events</button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
