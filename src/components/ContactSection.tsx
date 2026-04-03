import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';
import { Mail, Phone, MapPin, Send, Linkedin, GithubIcon, Facebook } from 'lucide-react';
import emailjs from '@emailjs/browser';
import data from '../data.json';

export default function ContactSection() {
  const form = useRef<any>(null);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      await emailjs.sendForm(
        'service_2tvbmpl',
        'template_7njhypb',
        form.current,
        '1Km43xHINv3J_rZG1'
      );
      setStatus({ type: 'success', message: '✅ Message envoyé ! Je vous repond dans les plus bref delais.' });
      form.current.reset();
    } catch (error) {
      setStatus({ type: 'error', message: `❌ Erreur. Email direct: ${data.contact.email}` });
      console.error('EmailJS:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative pb-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* COLONNE INFO CONTACT */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let's Work <span className="text-purple-400">Together</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md">
              Have a project in mind? I'm always open to discussing new opportunities and creative ideas.
            </p>
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="p-3 rounded-full bg-white/5 border border-white/10 text-cyan-400">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{data.contact.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="p-3 rounded-full bg-white/5 border border-white/10 text-purple-400">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">{data.contact.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="p-3 rounded-full bg-white/5 border border-white/10 text-pink-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">{data.contact.location}</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              {[{
                icon: GithubIcon,
                href: data.contact.social.github
              }, {
                icon: Facebook,
                href: data.contact.social.facebook
              }, {
                icon: Linkedin,
                href: data.contact.social.Linkedin
              }].map((social, index) => (
                <motion.a 
                  key={index} 
                  href={social.href} 
                  whileHover={{ y: -5 }} 
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* FORMULAIRE AVEC TÉLÉPHONE ✅ */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard className="p-8">
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                {/* GRID 2x2 : Name/Email + Phone/Subject */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 ml-1">Name *</label>
                    <input 
                      name="user_name" 
                      type="text" 
                      required 
                      className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 ml-1">Email *</label>
                    <input 
                      name="user_email" 
                      type="email" 
                      required 
                      className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all" 
                      placeholder="john@example.com" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 ml-1">Phone</label>
                    <input 
                      name="user_phone" 
                      type="tel" 
                      className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all" 
                      placeholder="+261 34 12 345 67" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 ml-1">Subject *</label>
                    <input 
                      name="user_subject" 
                      type="text" 
                      required 
                      className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all" 
                      placeholder="Website project" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400 ml-1">Message *</label>
                  <textarea 
                    name="message" 
                    rows={5} 
                    required 
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-vertical" 
                    placeholder="Tell me about your project, timeline, and budget..." 
                  />
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }} 
                  whileTap={{ scale: 0.98 }} 
                  type="submit" 
                  disabled={loading}
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-bold text-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </motion.button>

                {status.message && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    className={`p-4 rounded-xl text-center font-medium text-sm border-2 ${
                      status.type === 'success' 
                        ? 'bg-green-500/20 border-green-500/50 text-green-200' 
                        : 'bg-red-500/20 border-red-500/50 text-red-200'
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}