import React from 'react';
import { Heart, Music, Palette, Trophy, Users, Star } from 'lucide-react';
import { motion } from 'motion/react';

const LifeAtLittleAngels = () => {
  const activities = [
    { icon: <Trophy />, title: 'Sports & Athletics', desc: 'Developing teamwork and physical fitness.' },
    { icon: <Music />, title: 'Music & Dance', desc: 'Exploring rhythm and creative expression.' },
    { icon: <Palette />, title: 'Art & Craft', desc: 'Nurturing imagination and artistic skills.' },
    { icon: <Heart />, title: 'Yoga & Meditation', desc: 'Focusing on mental well-being and mindfulness.' },
    { icon: <Users />, title: 'Cultural Celebrations', desc: 'Embracing diversity and our rich heritage.' },
  ];

  const gallery = [
    'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600',
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">Emotional Growth</span>
          <h2 className="heading-secondary">Life at Little Angels</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Education here goes beyond textbooks. We nurture the heart and soul of every student through a vibrant campus life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="grid grid-cols-2 gap-4">
            {gallery.map((img, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.05 }}
                className={`rounded-3xl overflow-hidden shadow-xl ${idx % 2 === 1 ? 'mt-8' : ''}`}
              >
                <img src={img} alt="Student Life" className="w-full h-full object-cover aspect-[4/5]" referrerPolicy="no-referrer" />
              </motion.div>
            ))}
          </div>

          <div className="space-y-8">
            <h3 className="text-3xl font-serif font-bold text-navy mb-6">Holistic Development Through Co-Curricular Activities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activities.map((activity, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-gold/10 transition-all">
                  <div className="text-gold shrink-0">{activity.icon}</div>
                  <div>
                    <h4 className="font-bold text-navy text-sm mb-1">{activity.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{activity.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-8 rounded-3xl bg-navy text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-4 right-4 text-gold/20"><Star size={48} /></div>
              <h4 className="text-xl font-bold mb-4">Student Success Story</h4>
              <p className="text-sm text-slate-300 italic mb-4">
                "The sports program at Little Angels helped me realize my potential. I am now representing our district in the state athletics meet."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gold text-navy flex items-center justify-center font-bold text-xs">K</div>
                <span className="text-xs font-bold text-gold uppercase tracking-widest">Kiran, Grade 9</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeAtLittleAngels;
