import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
// Testimonials data
const testimonials = [{
  name: 'Sophie Laurent',
  role: 'CEO, TechVision',
  image: 'https://randomuser.me/api/portraits/women/44.jpg',
  quote: "Le 'Pattern Magique' a complètement transformé notre approche du développement produit. Les solutions créées sont non seulement techniquement solides, mais aussi incroyablement intuitives."
}, {
  name: 'Thomas Mercier',
  role: 'CTO, InnovateX',
  image: 'https://randomuser.me/api/portraits/men/32.jpg',
  quote: "J'ai rarement vu un développeur avec une telle capacité à allier rigueur technique et créativité. Sa méthodologie unique produit systématiquement des résultats qui dépassent nos attentes."
}, {
  name: 'Émilie Dubois',
  role: 'Directrice Artistique, DesignLab',
  image: 'https://randomuser.me/api/portraits/women/65.jpg',
  quote: "En tant que designer, j'apprécie énormément sa capacité à transformer des concepts visuels complexes en expériences interactives fluides, sans jamais compromettre l'intention artistique originale."
}, {
  name: 'Marc Lefevre',
  role: 'Fondateur, StartupNow',
  image: 'https://randomuser.me/api/portraits/men/67.jpg',
  quote: "Son approche unique a été déterminante dans le succès de notre plateforme. Le Pattern Magique n'est pas qu'une méthode de travail, c'est une véritable philosophie d'innovation."
}];
const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.2
  });
  const [activeIndex, setActiveIndex] = useState(0);
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  // Handle manual navigation
  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };
  return <section id="témoignages" ref={sectionRef} className="py-20 md:py-32 relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop')] bg-cover opacity-5"></div>
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-600 rounded-full filter blur-[120px] opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
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
            Échos du{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Futur
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ce que disent les clients et collaborateurs à propos du Pattern
            Magique
          </p>
        </motion.div>
        <motion.div initial={{
        opacity: 0
      }} animate={isInView ? {
        opacity: 1
      } : {
        opacity: 0
      }} transition={{
        duration: 1
      }} className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Display current testimonial */}
            <motion.div key={activeIndex} initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} exit={{
            opacity: 0,
            x: -20
          }} transition={{
            duration: 0.5
          }} className="bg-[#0a0d1f]/70 backdrop-blur-sm border border-purple-900/20 rounded-xl p-6 md:p-8 h-full">
              {/* Glitch effect for the quote */}
              <div className="mb-6 relative">
                <svg width="40" height="30" viewBox="0 0 40 30" className="text-purple-500/30 mb-2">
                  <path fill="currentColor" d="M0,0 L10,0 C5,10 5,20 5,30 L0,30 L0,0 Z M20,0 L30,0 C25,10 25,20 25,30 L20,30 L20,0 Z" />
                </svg>
                <motion.p className="text-gray-300 italic relative text-lg" initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} transition={{
                duration: 0.5,
                delay: 0.3
              }}>
                  "{testimonials[activeIndex].quote}"
                </motion.p>
              </div>
              <div className="flex items-center gap-4">
                <img src={testimonials[activeIndex].image} alt={testimonials[activeIndex].name} className="w-14 h-14 rounded-full object-cover border-2 border-cyan-500/30" />
                <div>
                  <h4 className="font-medium text-lg">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
            {/* Testimonials list for larger screens */}
            <div className="hidden md:flex flex-col justify-between">
              {testimonials.map((testimonial, index) => <motion.div key={index} className={`p-4 rounded-lg cursor-pointer transition-all ${index === activeIndex ? 'bg-purple-900/20 border border-purple-700/30' : 'hover:bg-[#0a0d1f]/50'}`} onClick={() => goToTestimonial(index)} whileHover={{
              x: 5
            }}>
                  <div className="flex items-center gap-3">
                    <img src={testimonial.image} alt={testimonial.name} className={`w-10 h-10 rounded-full object-cover ${index === activeIndex ? 'border-2 border-cyan-500' : 'border border-gray-700'}`} />
                    <div>
                      <h5 className={`font-medium ${index === activeIndex ? 'text-white' : 'text-gray-300'}`}>
                        {testimonial.name}
                      </h5>
                      <p className="text-xs text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>)}
            </div>
          </div>
          {/* Pagination dots for mobile */}
          <div className="flex justify-center gap-2 mt-8 md:hidden">
            {testimonials.map((_, index) => <button key={index} onClick={() => goToTestimonial(index)} className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-gradient-to-r from-cyan-400 to-purple-500' : 'bg-gray-700'}`} aria-label={`Témoignage ${index + 1}`} />)}
          </div>
        </motion.div>
      </div>
    </section>;
};
export default TestimonialsSection;