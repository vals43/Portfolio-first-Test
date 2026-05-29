import { CodeIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/[0.06] py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl rotate-45 opacity-80"></div>
              <CodeIcon className="relative z-10 w-8 h-8 text-white p-1" />
            </div>
            <span className="text-base font-heading font-bold bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
              Vals Portfolio
            </span>
          </a>
          <div className="text-sm text-gray-500 font-body">
            © 2026 Portfolio · Conçu et développé avec soin
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;