import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';
import { ArrowRight, Download } from 'lucide-react';
import data from '../data.json';
export function Hero() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!backgroundRef.current) return;
      const {
        clientX,
        clientY
      } = e;
      const {
        innerWidth,
        innerHeight
      } = window;
      // Calculate mouse position as percentages
      const x = clientX / innerWidth - 0.5;
      const y = clientY / innerHeight - 0.5;
      // Apply subtle movement to the grid lines
      gsap.to('.grid-line', {
        x: x * 20,
        y: y * 20,
        duration: 1,
        ease: 'power2.out'
      });
      // Move glow effects
      gsap.to('.glow-effect', {
        x: x * 40,
        y: y * 40,
        duration: 0.8,
        ease: 'power1.out'
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-40">
      {/* Background Elements */}
      <div ref={backgroundRef} className="absolute inset-0 z-0">
        {/* Grid lines */}
        <div className="grid-line absolute w-full h-px top-1/4 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
        <div className="grid-line absolute w-full h-px top-2/4 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
        <div className="grid-line absolute w-full h-px top-3/4 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
        <div className="grid-line absolute h-full w-px left-1/4 bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"></div>
        <div className="grid-line absolute h-full w-px left-2/4 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent"></div>
        <div className="grid-line absolute h-full w-px left-3/4 bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"></div>
        {/* Glow effects */}
        <div className="glow-effect absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full filter blur-[120px] opacity-20"></div>
        <div className="glow-effect absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-600 rounded-full filter blur-[120px] opacity-15"></div>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{
        opacity: 0,
        x: -50
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.8,
        ease: 'easeOut'
      }} className="z-10">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2
        }} className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <span className="text-cyan-400 font-mono text-sm tracking-wider">
              {data.personal.greeting}
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              {data.personal.name}
            </span>
          </h1>

          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-500 mb-8 rounded-full" />

          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
            {data.personal.title}
          </h2>

          <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
            {data.personal.bio}
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a href="#projets" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium flex items-center gap-2 shadow-lg shadow-cyan-500/25">
              View Work <ArrowRight size={18} />
            </motion.a>

            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="px-8 py-3 bg-gradient-to-r from-blue-800 to-blue-950 text-white rounded-full font-medium flex items-center gap-2 backdrop-blur-sm hover:bg-white/10 shadow-xl transition-colors shadow-blue-800/25">
              Download CV <Download size={18} />
            </motion.button>
          </div>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        scale: 0.8
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="relative z-10 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md aspect-[3/4]">
            {/* Decorative frame */}
            <div className="absolute inset-0 border-2 border-white/10 rounded-2xl transform rotate-6 scale-105 z-0" />
            <div className="absolute inset-0 border-2 border-cyan-500/20 rounded-2xl transform -rotate-3 scale-105 z-0" />

            <GlassCard className="w-full h-full overflow-hidden relative z-10 p-2">
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                <img src={data.personal.image} alt={data.personal.name} className="w-full h-full object-cover" />
                <div className="absolute bottom-6 left-6 z-20">
                  <p className="text-white/60 text-sm font-mono mb-1">
                    PORTFOLIO
                  </p>
                  <p className="text-white text-xl font-bold tracking-widest">
                    {data.personal.year}
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* Floating elements */}
            <motion.div animate={{
            y: [0, -10, 0]
          }} transition={{
            repeat: Infinity,
            duration: 4,
            ease: 'easeInOut'
          }} className="absolute -top-8 -right-8 z-20">
              <GlassCard className="p-4 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-white text-sm font-medium">
                  Open to work
                </span>
              </GlassCard>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>;
}