import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CodeIcon, MenuIcon, XIcon } from 'lucide-react';
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);
  return <motion.header className={`fixed top-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${scrolled ? 'bg-[#050816]/80 backdrop-blur-xl border-b border-white/[0.06]' : 'bg-transparent'}`} initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.6,
    ease: [0.32, 0.72, 0, 1]
  }}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative w-9 h-9">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl rotate-45 opacity-80 group-hover:rotate-[135deg] transition-all duration-500"></div>
            <CodeIcon className="relative z-10 w-9 h-9 text-white p-1" />
          </div>
          <span className="text-lg font-heading font-bold bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
            Vals Portfolio
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {['Accueil', 'A propos', 'Compétences', 'Projets', 'Contact'].map((item) => <motion.a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group" whileHover={{
          scale: 1.05
        }} transition={{
          type: 'spring',
          stiffness: 400,
          damping: 10
        }}>
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>)}
        </nav>
        <button className="md:hidden text-gray-400 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>
      {mobileMenuOpen && <motion.div className="md:hidden" initial={{
      opacity: 0,
      height: 0
    }} animate={{
      opacity: 1,
      height: 'auto'
    }} exit={{
      opacity: 0,
      height: 0
    }} transition={{
      duration: 0.3,
      ease: [0.32, 0.72, 0, 1]
    }}>
          <div className="container mx-auto px-6 py-4 flex flex-col gap-2">
            {['Accueil', 'A propos', 'Compétences', 'Projets', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white py-3 px-4 rounded-xl hover:bg-white/[0.03] transition-all font-medium" onClick={() => setMobileMenuOpen(false)}>
                  {item}
                </a>)}
          </div>
        </motion.div>}
    </motion.header>;
};
export default Header;