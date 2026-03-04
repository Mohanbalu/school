import React from 'react';
import { Bell, Calendar, FileText, Info, ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { NEWS } from '../../constants';

const NewsAnnouncements = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">Stay Updated</span>
            <h2 className="heading-secondary">News & Announcements</h2>
          </div>
          <button className="btn-secondary">View All Updates</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Latest News Feed */}
          <div className="space-y-6">
            {NEWS.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-all group"
              >
                <div className="flex flex-col items-center justify-center bg-white p-3 rounded-xl shadow-sm border border-slate-100 min-w-[80px]">
                  <span className="text-xl font-bold text-navy">{new Date(item.date).getDate()}</span>
                  <span className="text-[10px] uppercase tracking-widest text-gold font-bold">
                    {new Date(item.date).toLocaleString('default', { month: 'short' })}
                  </span>
                </div>
                <div>
                  <div className="inline-block px-2 py-0.5 rounded-md bg-navy/5 text-navy text-[10px] font-bold uppercase tracking-widest mb-2">
                    {item.category}
                  </div>
                  <h4 className="font-bold text-navy group-hover:text-gold transition-colors">{item.title}</h4>
                  <p className="text-xs text-slate-500 mt-1">Posted on {item.date}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Links / Notices */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl bg-navy text-white shadow-xl relative overflow-hidden group">
              <div className="absolute -top-4 -right-4 text-white/5 group-hover:scale-110 transition-transform">
                <Calendar size={120} />
              </div>
              <Calendar className="text-gold mb-6" size={32} />
              <h4 className="text-xl font-bold mb-2">Exam Schedule</h4>
              <p className="text-xs text-slate-400 mb-6">Download the latest examination timetable for all grades.</p>
              <button className="text-gold font-bold text-xs flex items-center gap-2">
                Download PDF <FileText size={14} />
              </button>
            </div>
            
            <div className="p-8 rounded-3xl bg-gold text-navy shadow-xl relative overflow-hidden group">
              <div className="absolute -top-4 -right-4 text-navy/5 group-hover:scale-110 transition-transform">
                <Bell size={120} />
              </div>
              <Bell className="text-navy mb-6" size={32} />
              <h4 className="text-xl font-bold mb-2">Holiday Notices</h4>
              <p className="text-xs text-navy/60 mb-6">Stay informed about upcoming school holidays and breaks.</p>
              <button className="text-navy font-bold text-xs flex items-center gap-2">
                View Calendar <ArrowRight size={14} />
              </button>
            </div>

            <div className="md:col-span-2 p-8 rounded-3xl bg-white border border-slate-100 shadow-sm flex items-center gap-8">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-navy shrink-0">
                <Info size={32} />
              </div>
              <div>
                <h4 className="font-bold text-navy">Result Announcements</h4>
                <p className="text-sm text-slate-500">Term 2 results will be declared on March 25th. Access them via the Parent Portal.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsAnnouncements;
