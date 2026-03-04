import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, Download, Calendar } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523050853064-8521a3998319?auto=format&fit=crop&q=80&w=2000" 
            alt="Contact Us" 
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
            <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">Get In Touch</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Contact Us</h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">Connect With Us</span>
              <h2 className="heading-secondary">We're Here to Help</h2>
              <p className="text-slate-600 mb-12 text-lg leading-relaxed">
                Whether you have questions about admissions, academics, or campus life, our team is ready to assist you.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-xl bg-navy text-white flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-1">Our Location</h4>
                    <p className="text-slate-500 text-sm">A.Nagar, Jaggaiahpeta, Krishna District,<br />Andhra Pradesh – 521175</p>
                  </div>
                </div>
                <div className="flex gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-xl bg-navy text-white flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-1">Call Us</h4>
                    <p className="text-slate-500 text-sm">+91 98765 43210<br />+91 98765 43211</p>
                  </div>
                </div>
                <div className="flex gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-xl bg-navy text-white flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-1">Email Us</h4>
                    <p className="text-slate-500 text-sm">info@littleangels.edu.in<br />admissions@littleangels.edu.in</p>
                  </div>
                </div>
                <div className="flex gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-xl bg-navy text-white flex items-center justify-center shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-1">School Timings</h4>
                    <p className="text-slate-500 text-sm">Mon - Sat: 8:30 AM - 4:00 PM<br />Sun: Closed</p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-gold/10 border border-gold/20 flex gap-6">
                <div className="text-gold shrink-0"><Calendar size={32} /></div>
                <div>
                  <h4 className="font-bold text-navy mb-2">Enrollment Notice</h4>
                  <p className="text-sm text-slate-600 mb-4">Admissions for 2026-27 are now open. Download our prospectus for more details.</p>
                  <button className="flex items-center gap-2 text-navy font-bold text-sm hover:text-gold transition-all">
                    <Download size={18} /> Download Prospectus (PDF)
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-2xl border border-slate-100">
              <h3 className="text-2xl font-serif font-bold text-navy mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase text-slate-400">Your Name</label>
                    <input type="text" className="w-full p-3 rounded-xl border border-slate-200 focus:border-gold outline-none transition-all" placeholder="Enter name" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase text-slate-400">Email Address</label>
                    <input type="email" className="w-full p-3 rounded-xl border border-slate-200 focus:border-gold outline-none transition-all" placeholder="Enter email" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-slate-400">Subject</label>
                  <select className="w-full p-3 rounded-xl border border-slate-200 focus:border-gold outline-none transition-all">
                    <option>General Inquiry</option>
                    <option>Admission Inquiry</option>
                    <option>Academic Query</option>
                    <option>Career Opportunity</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-slate-400">Your Message</label>
                  <textarea className="w-full p-3 rounded-xl border border-slate-200 focus:border-gold outline-none transition-all h-32" placeholder="How can we help you?"></textarea>
                </div>
                <button className="w-full btn-primary py-4 rounded-xl font-bold flex items-center justify-center gap-2">
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-slate-100">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.123456789!2d80.0987654321!3d16.8987654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDUzJzU1LjUiTiA4MMKwMDUnNTUuNSJF!5e0!3m2!1sen!2sin!4v1234567890" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="School Location Map"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
