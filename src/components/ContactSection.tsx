import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SendIcon, LinkedinIcon, GithubIcon, TwitterIcon, InstagramIcon, CheckIcon } from 'lucide-react';
let isDispo = true
const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.2
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setSubmitted(false);
    }, 5000);
  };
  return <section id="contact" ref={sectionRef} className="py-20 md:py-32 relative">
      {/* Background elements */}
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600 rounded-full filter blur-[120px] opacity-10"></div>
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
            Initiation à la{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Collaboration
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Prêt à transformer vos idées en réalités numériques ? Contactez-moi
            pour démarrer notre synergie créative
          </p>
        </motion.div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {
          opacity: 0,
          x: -20
        }} transition={{
          duration: 0.8
        }}>
            <h3 className="text-2xl font-bold mb-4">Envoyez-moi un message</h3>
            <p className="text-gray-300 mb-6">
              Que vous ayez un projet spécifique en tête ou que vous souhaitiez
              simplement discuter de possibilités, je serais ravi d'échanger
              avec vous.
            </p>
            {submitted ? <motion.div initial={{
            opacity: 0,
            scale: 0.8
          }} animate={{
            opacity: 1,
            scale: 1
          }} className="bg-gradient-to-r from-cyan-900/20 to-purple-900/20 border border-cyan-500/30 rounded-lg p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-4">
                  <CheckIcon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-2">Message envoyé !</h4>
                <p className="text-gray-300">
                  Merci pour votre message. Je vous répondrai dans les plus
                  brefs délais.
                </p>
              </motion.div> : <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Nom
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-[#0a0d1f] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-[#0a0d1f] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full bg-[#0a0d1f] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none" />
                </div>
                <motion.button type="submit" className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                  <SendIcon className="w-5 h-5" />
                  <span>Envoyer votre message</span>
                </motion.button>
              </form>}
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {
          opacity: 0,
          x: 20
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Connectons-nous</h3>
              <p className="text-gray-300 mb-8">
                Retrouvez-moi sur les réseaux sociaux pour découvrir mes
                dernières créations et échanger sur les tendances du
                développement web.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <motion.a href="#" className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0a0d1f] border border-gray-700 text-gray-300 hover:border-blue-500 hover:text-blue-500 transition-colors" whileHover={{
                scale: 1.1,
                rotate: 10
              }} whileTap={{
                scale: 0.9
              }}>
                  <LinkedinIcon className="w-5 h-5" />
                </motion.a>
                <motion.a href="#" className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0a0d1f] border border-gray-700 text-gray-300 hover:border-gray-400 hover:text-white transition-colors" whileHover={{
                scale: 1.1,
                rotate: 10
              }} whileTap={{
                scale: 0.9
              }}>
                  <GithubIcon className="w-5 h-5" />
                </motion.a>
                <motion.a href="#" className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0a0d1f] border border-gray-700 text-gray-300 hover:border-blue-400 hover:text-blue-400 transition-colors" whileHover={{
                scale: 1.1,
                rotate: 10
              }} whileTap={{
                scale: 0.9
              }}>
                  <TwitterIcon className="w-5 h-5" />
                </motion.a>
                <motion.a href="#" className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0a0d1f] border border-gray-700 text-gray-300 hover:border-pink-500 hover:text-pink-500 transition-colors" whileHover={{
                scale: 1.1,
                rotate: 10
              }} whileTap={{
                scale: 0.9
              }}>
                  <InstagramIcon className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
            <div className="bg-gradient-to-r from-cyan-900/20 to-purple-900/20 border border-purple-500/30 rounded-lg p-6">
              <h4 className="text-xl font-bold mb-2">Disponibilité</h4>

                              {
                  isDispo ? (
                    <>
                      <p className="text-gray-300 mb-4">
                        Actuellement disponible pour des projets freelance et des
                        collaborations à long terme.
                      </p>
                      <div className="flex items-center gap-2 text-cyan-400">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span>Disponible pour de nouveaux projets</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="text-gray-300 mb-4">
                        Actuellement engagé sur des projets en cours.
                      </p>
                      <div className="flex items-center gap-2 text-red-400">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span>Non disponible pour de nouveaux projets</span>
                      </div>
                    </>
                  )
                }
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default ContactSection;