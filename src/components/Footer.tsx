import { motion } from 'framer-motion';
import { CodeIcon, HeartIcon } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-[#080a1a] border-t border-purple-900/20 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-purple-600 rounded-md rotate-45 opacity-70"></div>
              <CodeIcon className="relative z-10 w-8 h-8 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Vals Portfolio
            </span>
          </div>
          <div className="flex items-center gap-1 text-gray-400 text-sm">
            <span>© 2025 - Créé avec</span>
            <motion.div animate={{
            scale: [1, 1.2, 1]
          }} transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'reverse'
          }}>
              <HeartIcon className="w-4 h-4 text-red-500" />
            </motion.div>
            <span> Just a portfolio Test</span>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;