import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white text-navy flex items-center justify-center shadow-lg">
                <GraduationCap size={24} />
              </div>
              <div>
                <h1 className="text-lg font-serif font-bold leading-none">LITTLE ANGELS</h1>
                <p className="text-[8px] tracking-[0.2em] font-medium text-gold">HIGH SCHOOL</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering students with knowledge, values, and vision since 1998. Jaggaiahpeta's most trusted institution for academic excellence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-all"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-all"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-all"><Linkedin size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-gold">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/" className="hover:text-white transition-all">Home</Link></li>
              <li><Link to="/principal-message" className="hover:text-white transition-all">Principal's Message</Link></li>
              <li><Link to="/academics" className="hover:text-white transition-all">Academics</Link></li>
              <li><Link to="/admissions" className="hover:text-white transition-all">Admissions</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-all">Careers</Link></li>
              <li><Link to="/alumni" className="hover:text-white transition-all">Alumni</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-gold">Resources</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-all">Download Prospectus</a></li>
              <li><a href="#" className="hover:text-white transition-all">Academic Calendar</a></li>
              <li><a href="#" className="hover:text-white transition-all">News & Announcements</a></li>
              <li><a href="#" className="hover:text-white transition-all">Mandatory Disclosure</a></li>
              <li><a href="#" className="hover:text-white transition-all">Parent Portal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-gold">Newsletter</h4>
            <p className="text-sm text-slate-400 mb-6">Subscribe to our newsletter for the latest updates and events.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Your email" className="bg-white/5 border border-white/10 p-3 rounded-xl outline-none focus:border-gold w-full text-sm" />
              <button className="bg-gold text-navy p-3 rounded-xl hover:bg-gold-light transition-all">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500 uppercase tracking-widest">
          <p>© 2026 Little Angels High School. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
