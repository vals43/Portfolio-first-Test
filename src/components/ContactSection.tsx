import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Instagram, Dribbble, GithubIcon, Facebook } from 'lucide-react';
import data from '../data.json';
export default function ContactSection() {
  return <section id="contact" className="py-20 relative pb-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let's Work <span className="text-purple-400">Together</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md">
              Have a project in mind? I'm always open to discussing new
              opportunities and creative ideas.
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
              icon: Instagram,
              href: data.contact.social.instagram
            }, {
              icon: Dribbble,
              href: data.contact.social.dribbble
            }].map((social, index) => <motion.a key={index} href={social.href} whileHover={{
              y: -5
            }} className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                  <social.icon size={20} />
                </motion.a>)}
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }}>
            <GlassCard className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 ml-1">Name</label>
                    <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 ml-1">Email</label>
                    <input type="email" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400 ml-1">Subject</label>
                  <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all" placeholder="Project Inquiry" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400 ml-1">Message</label>
                  <textarea rows={4} className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none" placeholder="Tell me about your project..." />
                </div>

                <motion.button whileHover={{
                scale: 1.02
              }} whileTap={{
                scale: 0.98
              }} className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-bold text-lg shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2">
                  Send Message <Send size={18} />
                </motion.button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>;
}