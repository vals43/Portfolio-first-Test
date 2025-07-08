import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownIcon } from 'lucide-react';
import { gsap } from 'gsap';
const HeroSection = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  // Mouse interaction effect
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
  return <section id="à-propos" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">
      {/* Interactive background */}
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
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="mb-6">
          <span className="px-4 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-700/30 backdrop-blur-sm">
            Développeur & Designer Créatif
          </span>
        </motion.div>
        <motion.h1 initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.3
      }} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 glitch-text">
          <span className="block">Architecte du</span>
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Pattern Magique
          </span>
        </motion.h1>
        <motion.p initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.6
      }} className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-10">
          Je transforme les idées abstraites en expériences numériques
          captivantes grâce à mon approche unique, où le code et le design
          fusionnent pour créer des solutions élégantes et innovantes.
        </motion.p>
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.9
      }}>
          <a href="#méthode" className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-medium text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all hover:-translate-y-1 group relative overflow-hidden">
            <span className="relative z-10">Découvrir le Pattern</span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </a>
        </motion.div>
      </div>
      {/* Scroll indicator */}
      <motion.div className="bottom-10  left-1/2 transform -translate-x-1/2 flex flex-col items-center" animate={{
      y: [0, 10, 0]
    }} transition={{
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut'
    }}>
        <ArrowDownIcon className="w-5 h-5 text-gray-400" />
      </motion.div>
    </section>;
};
export default HeroSection;