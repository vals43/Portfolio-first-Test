import { useState, useRef, useMemo, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  GlobeIcon, SmartphoneIcon, DatabaseIcon, LayoutDashboardIcon,
  XIcon, ExternalLinkIcon, GithubIcon,
  ChevronLeftIcon, ChevronRightIcon, ArrowUpRight,
  ScaleIcon, BriefcaseBusinessIcon
} from 'lucide-react';
import data from '../data.json';

const projects = data.projects;

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  LayoutDashboardIcon,
  GlobeIcon,
  SmartphoneIcon,
  DatabaseIcon,
  ScaleIcon,
  BriefcaseBusinessIcon,
};

function getMaxVisible() {
  if (typeof window === 'undefined') return 1;
  if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 640) return 2;
  return 1;
}

const staggerItem = (index: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay: index * 0.12, ease: [0.32, 0.72, 0, 1] },
});

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [maxVisible, setMaxVisible] = useState(getMaxVisible);

  useEffect(() => {
    const onResize = () => setMaxVisible(getMaxVisible());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1 >= projects.length ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? Math.max(0, projects.length - 1) : prev - 1));
  };

  const visibleProjects = useMemo(() => {
    const result = [];
    for (let i = 0; i < maxVisible; i++) {
      result.push(projects[(currentIndex + i) % projects.length]);
    }
    return result;
  }, [currentIndex, maxVisible]);

  return (
    <section id="projets" ref={sectionRef} className="py-24 md:py-40 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-cyan-600 rounded-full blur-[150px] opacity-[0.08] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[25rem] h-[25rem] bg-purple-600 rounded-full blur-[150px] opacity-[0.06] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-[0.7rem] uppercase tracking-[0.2em] font-medium text-cyan-300 mb-5">
            Projets
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
            Mes{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projets
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-body">
            Des solutions créatives pour des défis complexes — chaque projet raconte une histoire de résolution de problèmes et d'innovation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
        >
          <div className="flex items-center justify-between mb-10">
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-white">
        Projets Récents
      </h3>
              <p className="text-sm text-gray-500 mt-1">
                {currentIndex + 1} — {Math.min(currentIndex + maxVisible, projects.length)} sur {projects.length}
              </p>
            </div>
            <div className="hidden md:flex gap-2">
              <button
                onClick={prevSlide}
                className="group p-2.5 rounded-full bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.08] hover:border-white/[0.12] transition-all"
                aria-label="Précédent"
              >
                <ChevronLeftIcon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </button>
              <button
                onClick={nextSlide}
                className="group p-2.5 rounded-full bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.08] hover:border-white/[0.12] transition-all"
                aria-label="Suivant"
              >
                <ChevronRightIcon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                {...staggerItem(index)}
                onClick={() => {
                  setActiveProject(projects.indexOf(project));
                  setActiveImageIndex(0);
                }}
                className="group cursor-pointer rounded-[1.5rem] bg-white/[0.02] p-[1px] ring-1 ring-white/[0.06] hover:ring-purple-500/30 transition-all duration-500"
              >
                <div className="rounded-[calc(1.5rem-1px)] bg-[#0a0d1f]/90 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] h-full overflow-hidden">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d1f] via-[#0a0d1f]/30 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <div className={`p-2.5 rounded-full bg-gradient-to-br ${project.color} shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-300`}>
                        {(() => {
                          const IconComponent = iconMap[project.icon];
                          return IconComponent ? <IconComponent className="w-4 h-4 text-white" /> : null;
                        })()}
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-5 right-5">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-0.5 text-[0.65rem] rounded-full bg-white/10 text-gray-300 border border-white/10 font-medium backdrop-blur-sm"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2.5 py-0.5 text-[0.65rem] rounded-full bg-white/10 text-gray-300 border border-white/10 font-medium backdrop-blur-sm">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    <div className="mt-5 flex items-center gap-1.5 text-xs font-medium text-cyan-400/80 group-hover:text-cyan-300 transition-colors">
                      <span>Voir les détails</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex md:hidden justify-center gap-2 mt-8">
            <button
              onClick={prevSlide}
              className="p-2.5 rounded-full bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.08] transition-all"
              aria-label="Précédent"
            >
              <ChevronLeftIcon className="w-5 h-5 text-gray-400" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2.5 rounded-full bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.08] transition-all"
              aria-label="Suivant"
            >
              <ChevronRightIcon className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(projects.length / maxVisible) }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i * maxVisible)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / maxVisible) === i
                    ? 'bg-purple-400 w-6'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {activeProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-2xl"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              onClick={e => e.stopPropagation()}
              className="rounded-[2rem] bg-white/[0.02] p-[1px] ring-1 ring-white/[0.06] w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            >
              <div className="rounded-[calc(2rem-1px)] bg-[#0a0d1f]/95 backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
                <div className="relative">
                  <div className="relative h-72 md:h-80 overflow-hidden rounded-t-[calc(2rem-1px)]">
                    <img
                      src={projects[activeProject].images[activeImageIndex]}
                      alt={projects[activeProject].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d1f] via-[#0a0d1f]/20 to-transparent" />

                    {projects[activeProject].images.length > 1 && (
                      <>
                        <button
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 backdrop-blur-md hover:bg-black/70 transition-all border border-white/10"
                          onClick={e => { e.stopPropagation(); setActiveImageIndex(i => i === 0 ? projects[activeProject].images.length - 1 : i - 1); }}
                        >
                          <ChevronLeftIcon className="w-5 h-5" />
                        </button>
                        <button
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 backdrop-blur-md hover:bg-black/70 transition-all border border-white/10"
                          onClick={e => { e.stopPropagation(); setActiveImageIndex(i => i === projects[activeProject].images.length - 1 ? 0 : i + 1); }}
                        >
                          <ChevronRightIcon className="w-5 h-5" />
                        </button>
                      </>
                    )}

                    <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2.5 rounded-full bg-gradient-to-br ${projects[activeProject].color} shadow-lg`}>
                          {(() => {
                            const IconComponent = iconMap[projects[activeProject].icon];
                            return IconComponent ? <IconComponent className="w-5 h-5 text-white" /> : null;
                          })()}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-white">
                          {projects[activeProject].title}
                        </h3>
                      </div>
                      <button
                        className="p-2.5 rounded-full bg-black/50 backdrop-blur-md hover:bg-black/70 transition-all border border-white/10 flex-shrink-0"
                        onClick={() => setActiveProject(null)}
                      >
                        <XIcon className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {projects[activeProject].images.length > 1 && (
                    <div className="flex justify-center gap-1.5 -mt-3 mb-4">
                      {projects[activeProject].images.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveImageIndex(i)}
                          className={`transition-all duration-300 rounded-full ${
                            i === activeImageIndex
                              ? 'w-6 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-400'
                              : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div className="p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-5">
                      <h4 className="text-sm font-medium text-cyan-400 mb-3 flex items-center gap-2">
                        <span className="w-1 h-4 rounded-full bg-cyan-400 inline-block" />
                        Le Défi
                      </h4>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {projects[activeProject].problem}
                      </p>
                    </div>
                    <div className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-5">
                      <h4 className="text-sm font-medium text-purple-400 mb-3 flex items-center gap-2">
                        <span className="w-1 h-4 rounded-full bg-purple-400 inline-block" />
                        La Solution
                      </h4>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {projects[activeProject].solution}
                      </p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-sm font-medium text-gray-400 mb-3 uppercase tracking-wider">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[activeProject].technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          className="px-3 py-1.5 text-xs rounded-full bg-purple-900/20 text-purple-300 border border-purple-700/20 font-medium"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={projects[activeProject].demoUrl}
                      className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-sm font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <ExternalLinkIcon className="w-4 h-4" />
                      <span>Pas encore déployé</span>
                      <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </a>
                    <a
                      href={projects[activeProject].repoUrl}
                      className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/[0.04] border border-white/[0.08] rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-white/[0.08] hover:text-white hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Code Source</span>
                      <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
