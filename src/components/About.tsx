import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';
import { Code, Palette, Zap, Layout, Terminal, PenTool } from 'lucide-react';
import data from '../data.json';
const iconMap: Record<string, any> = {
  'UI/UX Design': Layout,
  'Motion Graphics': Zap,
  'Video Editing': Palette,
  'Brand Identity': PenTool,
  '3D Modeling': BoxIcon,
  'Web Development': Code
};
// Fallback icon component
function BoxIcon(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>;
}
export function About() {
  return <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="h-1 w-20 bg-purple-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        }} className="md:col-span-2">
            <GlassCard className="p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                {data.about.description}
              </p>
              <p className="text-gray-400 leading-relaxed">
                {data.about.detail}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <h4 className="text-3xl font-bold text-cyan-400 mb-1">{data.about.yearsExperience}</h4>
                  <p className="text-sm text-gray-400">Années d'Experiences</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <h4 className="text-3xl font-bold text-purple-400 mb-1">
                    {data.about.completeProject}
                  </h4>
                  <p className="text-sm text-gray-400">Projets Complétés</p>
                </div>
              </div>
            </GlassCard>
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
            <GlassCard className="p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Skills</h3>
              <div className="grid grid-cols-1 gap-4">
                {data.about.skills.map((skill) => {
                const Icon = iconMap[skill] || Terminal;
                return <motion.div key={skill} whileHover={{
                  x: 5
                }} className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 text-cyan-300">
                        <Icon size={20} />
                      </div>
                      <span className="text-gray-200 font-medium">{skill}</span>
                    </motion.div>;
              })}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>;
}