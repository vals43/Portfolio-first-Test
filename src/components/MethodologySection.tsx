import React, { useRef, Children } from 'react';
import { motion, useInView } from 'framer-motion';
import { BrainCircuitIcon, PuzzleIcon, SparklesIcon, LayersIcon } from 'lucide-react';
const principles = [{
  icon: <BrainCircuitIcon className="w-8 h-8" />,
  title: 'Intuition Analytique',
  description: "L'alliance de l'analyse rigoureuse des données et de l'intuition créative pour identifier les solutions optimales.",
  color: 'from-cyan-500 to-blue-600',
  animation: 'code'
}, {
  icon: <SparklesIcon className="w-8 h-8" />,
  title: 'Design Émergent',
  description: "Une approche où l'esthétique et la fonctionnalité évoluent organiquement à partir des besoins fondamentaux du projet.",
  color: 'from-purple-500 to-pink-600',
  animation: 'design'
}, {
  icon: <LayersIcon className="w-8 h-8" />,
  title: "Ingénierie de l'Élégance",
  description: 'La création de code propre, efficace et évolutif qui résout les problèmes complexes avec une simplicité apparente.',
  color: 'from-blue-500 to-cyan-600',
  animation: 'engineering'
}, {
  icon: <PuzzleIcon className="w-8 h-8" />,
  title: 'Scalabilité Éthérée',
  description: "Des architectures flexibles qui s'adaptent et évoluent sans effort face à des exigences changeantes.",
  color: 'from-pink-500 to-purple-600',
  animation: 'scalability'
}];
const MethodologySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.2
  });
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };
  return <section id="méthode" ref={sectionRef} className="py-20 md:py-32 relative">
      {/* Background glow */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-purple-600 rounded-full filter blur-[120px] opacity-10"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-blue-600 rounded-full filter blur-[120px] opacity-10"></div>
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16" initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 20
      }} transition={{
        duration: 0.8
      }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Décryptage du{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Pattern Magique
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ma méthodologie unique combine logique et créativité pour résoudre
            les défis numériques complexes
          </p>
        </motion.div>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={containerVariants} initial="hidden" animate={isInView ? 'show' : 'hidden'}>
          {principles.map((principle, index) => <motion.div key={index} variants={itemVariants} className="bg-[#0a0d1f]/50 backdrop-blur-sm border border-purple-900/20 rounded-xl p-6 hover:border-cyan-500/50 transition-all group" whileHover={{
          scale: 1.02,
          boxShadow: '0 10px 30px -15px rgba(138, 43, 226, 0.3)'
        }}>
              <div className={`bg-gradient-to-br ${principle.color} rounded-lg p-3 inline-flex mb-5 group-hover:scale-110 transition-all`}>
                {principle.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {principle.title}
              </h3>
              <p className="text-gray-300 mb-6">{principle.description}</p>
              {/* Animation placeholder */}
              <div className="h-24 bg-[#0d1229] rounded-lg overflow-hidden flex items-center justify-center">
                {principle.animation === 'code' && <div className="font-mono text-xs text-cyan-400 p-3 w-full">
                    <div className="mb-1 text-purple-400">
                      function intuitiveAnalysis(data) {'{'}
                    </div>
                    <div className="mb-1 pl-4">
                      const patterns = identifyPatterns(data);
                    </div>
                    <div className="mb-1 pl-4">
                      const insights = applyIntuition(patterns);
                    </div>
                    <div>{'}'}</div>
                  </div>}
                {principle.animation === 'design' && <div className="flex space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-600"></div>
                    <div className="w-16 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 opacity-70"></div>
                    <div className="w-12 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 opacity-40"></div>
                  </div>}
                {principle.animation === 'engineering' && <div className="w-full px-3">
                    <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                      <motion.div className="h-full bg-gradient-to-r from-blue-500 to-cyan-600" initial={{
                  width: '0%'
                }} animate={{
                  width: '85%'
                }} transition={{
                  duration: 1.5,
                  delay: 0.5,
                  ease: 'easeOut'
                }}></motion.div>
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="text-xs text-gray-400">Complexité</span>
                      <span className="text-xs text-cyan-400">Élégance</span>
                    </div>
                  </div>}
                {principle.animation === 'scalability' && <div className="relative">
                    {[0, 1, 2].map(i => <motion.div key={i} className="absolute w-6 h-6 rounded-md bg-gradient-to-r from-pink-500 to-purple-600" animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }} transition={{
                duration: 2,
                delay: i * 0.4,
                repeat: Infinity,
                repeatType: 'reverse'
              }} style={{
                left: `${i * 12}px`,
                top: `${i * -8}px`
              }}></motion.div>)}
                  </div>}
              </div>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
};
export default MethodologySection;