import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';
import { GraduationCap, Calendar } from 'lucide-react';
import data from '../data.json';
export function Education() {
  return <section id="education" className="py-20 relative">
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
      }} className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Education
          </h2>
          <div className="h-1 w-20 bg-cyan-500 rounded-full mx-auto md:mx-0" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent opacity-30 md:transform md:-translate-x-1/2 ml-4 md:ml-0" />

          <div className="space-y-12">
            {data.education.map((edu, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: index * 0.2
          }} className={`flex flex-col md:flex-row gap-8 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-cyan-400 border-4 border-black transform -translate-x-1/2 mt-6 z-10 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />

                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                  <GlassCard className="p-6 relative overflow-hidden group" hoverEffect>
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <GraduationCap size={80} />
                    </div>

                    <div className="flex items-center gap-2 text-cyan-400 mb-2 text-sm font-mono">
                      <Calendar size={14} />
                      <span>{edu.year}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1">
                      {edu.degree}
                    </h3>
                    <h4 className="text-lg text-purple-300 mb-4">
                      {edu.school}
                    </h4>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </GlassCard>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
}