import React from 'react';
import { Shield, Eye, Bus, HeartPulse, Lock, UserCheck } from 'lucide-react';
import { motion } from 'motion/react';

const SafetySecurity = () => {
  const safetyFeatures = [
    { icon: <Eye />, title: 'CCTV Surveillance', desc: '24/7 monitoring of all campus areas for complete safety.' },
    { icon: <Bus />, title: 'Safe Transport', desc: 'GPS-tracked buses with trained attendants and drivers.' },
    { icon: <UserCheck />, title: 'Trained Staff', desc: 'Security personnel and staff trained in child safety protocols.' },
    { icon: <HeartPulse />, title: 'Medical Support', desc: 'First aid facilities and emergency medical tie-ups.' },
    { icon: <Lock />, title: 'Secure Campus', desc: 'Strict entry/exit controls and visitor management system.' },
    { icon: <Shield />, title: 'Child Safety', desc: 'Zero-tolerance policy for bullying and harassment.' },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">Your Child's Safety is Our Priority</span>
          <h2 className="heading-secondary">Safety & Security</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We provide a secure and nurturing environment where parents can have complete peace of mind while their children learn and grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {safetyFeatures.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-slate-100 hover:border-gold/30 hover:bg-gold/5 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-navy/5 text-navy flex items-center justify-center mb-6 group-hover:bg-navy group-hover:text-white transition-all">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetySecurity;
