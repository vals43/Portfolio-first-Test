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
  return <motion.header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#050816]/80 backdrop-blur-md border-b border-purple-900/20' : 'bg-transparent'}`} initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.5
  }}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 bg-purple-600 rounded-md rotate-45 opacity-70"></div>
            <CodeIcon className="relative z-10 w-8 h-8 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Vals Portfolio
          </span>
        </a>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {['À propos', 'Méthode', 'Projets', 'Compétences', 'Contact'].map((item, index) => <motion.a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-cyan-400 transition-colors relative group" whileHover={{
          scale: 1.05
        }} transition={{
          type: 'spring',
          stiffness: 400,
          damping: 10
        }}>
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 transition-all group-hover:w-full"></span>
              </motion.a>)}
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && <motion.div className="md:hidden bg-[#070B1A] border-t border-purple-900/20" initial={{
      opacity: 0,
      height: 0
    }} animate={{
      opacity: 1,
      height: 'auto'
    }} exit={{
      opacity: 0,
      height: 0
    }} transition={{
      duration: 0.3
    }}>
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {['À propos', 'Méthode', 'Projets', 'Compétences', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-cyan-400 py-2 border-b border-purple-900/20" onClick={() => setMobileMenuOpen(false)}>
                  {item}
                </a>)}
          </div>
        </motion.div>}
    </motion.header>;
};
export default Header;