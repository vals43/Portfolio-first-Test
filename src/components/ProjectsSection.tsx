import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GlobeIcon, SmartphoneIcon, DatabaseIcon, LayoutDashboardIcon, XIcon, ExternalLinkIcon, GithubIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
// Project data
const projects = [{
  title: 'Nexus Analytics',
  description: "Plateforme d'analyse de données en temps réel avec visualisations interactives et algorithmes prédictifs.",
  icon: <LayoutDashboardIcon className="w-6 h-6" />,
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop',
  problem: 'Comment transformer des données complexes en insights actionnables sans compromettre la performance.',
  solution: 'Architecture modulaire avec rendu côté client optimisé et traitement backend distribué.',
  technologies: ['React', 'TypeScript', 'Node.js', 'D3.js', 'MongoDB'],
  demoUrl: '#',
  repoUrl: '#',
  color: 'from-blue-500 to-cyan-400'
}, {
  title: 'Ethereal Commerce',
  description: "Plateforme e-commerce avec expérience d'achat immersive et système de paiement sécurisé.",
  icon: <GlobeIcon className="w-6 h-6" />,
  image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1632&auto=format&fit=crop',
  problem: "Créer une expérience d'achat fluide et engageante tout en assurant une sécurité maximale.",
  solution: 'Interface utilisateur intuitive avec animations subtiles et architecture backend sécurisée.',
  technologies: ['Next.js', 'Tailwind CSS', 'Stripe', 'PostgreSQL', 'AWS'],
  demoUrl: '#',
  repoUrl: '#',
  color: 'from-purple-500 to-pink-400'
}, {
  title: 'Quantum Mobile',
  description: 'Application mobile de productivité avec synchronisation cross-platform et mode hors ligne.',
  icon: <SmartphoneIcon className="w-6 h-6" />,
  image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1470&auto=format&fit=crop',
  problem: 'Garantir une expérience utilisateur cohérente sur tous les appareils, même sans connexion.',
  solution: 'Architecture de données locale avec synchronisation intelligente et UI adaptative.',
  technologies: ['React Native', 'Redux', 'GraphQL', 'Firebase', 'Realm'],
  demoUrl: '#',
  repoUrl: '#',
  color: 'from-emerald-500 to-green-400'
}, {
  title: 'Atlas API',
  description: 'API RESTful hautement scalable avec documentation interactive et sandbox de test intégrée.',
  icon: <DatabaseIcon className="w-6 h-6" />,
  image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1634&auto=format&fit=crop',
  problem: 'Concevoir une API robuste, performante et facile à utiliser pour les développeurs.',
  solution: 'Architecture en microservices avec documentation auto-générée et mécanismes de rate limiting.',
  technologies: ['Node.js', 'Express', 'Docker', 'Swagger', 'Redis', 'Jest'],
  demoUrl: '#',
  repoUrl: '#',
  color: 'from-amber-500 to-orange-400'
}];
const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.2
  });
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  // Custom carousel/slider functionality
  const maxVisibleItems = typeof window !== 'undefined' ? window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1 : 1;
  const nextSlide = () => {
    setCurrentIndex(prevIndex => prevIndex + 1 >= projects.length ? 0 : prevIndex + 1);
  };
  const prevSlide = () => {
    setCurrentIndex(prevIndex => prevIndex === 0 ? Math.max(0, projects.length - 1) : prevIndex - 1);
  };
  // Calculate visible projects
  const visibleProjects = () => {
    const result = [];
    for (let i = 0; i < maxVisibleItems; i++) {
      const index = (currentIndex + i) % projects.length;
      result.push(projects[index]);
    }
    return result;
  };
  return <section id="projets" ref={sectionRef} className="py-20 md:py-32 relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-600 rounded-full filter blur-[120px] opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-600 rounded-full filter blur-[120px] opacity-10"></div>
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
            Les Artefacts du{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Pattern
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez les projets nés de l'application de ma méthodologie unique
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
      }} className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-2xl font-bold">Découvrez les Projets</h3>
              <p className="text-gray-400">
                Des solutions créatives pour des défis complexes
              </p>
            </div>
            <div className="hidden md:flex gap-2">
              <button onClick={prevSlide} className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-700" aria-label="Précédent">
                <ChevronLeftIcon className="h-6 w-6" />
              </button>
              <button onClick={nextSlide} className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-700" aria-label="Suivant">
                <ChevronRightIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProjects().map((project, index) => <motion.div key={`${project.title}-${index}`} className="bg-[#0a0d1f]/70 backdrop-blur-sm border border-purple-900/20 rounded-xl overflow-hidden group cursor-pointer" whileHover={{
            scale: 1.02,
            boxShadow: '0 10px 30px -15px rgba(138, 43, 226, 0.3)'
          }} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} onClick={() => setActiveProject(projects.indexOf(project))}>
                <div className="relative h-48 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] to-transparent"></div>
                  {/* Icon badge */}
                  <div className={`absolute top-4 right-4 p-2 rounded-full bg-gradient-to-r ${project.color} group-hover:scale-110 transition-all`}>
                    {project.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, i) => <span key={i} className="px-3 py-1 text-xs rounded-full bg-purple-900/30 text-purple-300 border border-purple-700/30">
                        {tech}
                      </span>)}
                    {project.technologies.length > 3 && <span className="px-3 py-1 text-xs rounded-full bg-purple-900/30 text-purple-300 border border-purple-700/30">
                        +{project.technologies.length - 3}
                      </span>}
                  </div>
                  {/* Subtle animation indicating it's clickable */}
                  <div className="mt-6 text-sm text-cyan-400 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Voir les détails</span>
                    <motion.div animate={{
                  x: [0, 5, 0]
                }} transition={{
                  repeat: Infinity,
                  duration: 1.5
                }}>
                      →
                    </motion.div>
                  </div>
                </div>
              </motion.div>)}
          </div>
          <div className="flex md:hidden justify-center gap-2 mt-8">
            <button onClick={prevSlide} className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-700" aria-label="Précédent">
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <button onClick={nextSlide} className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-700" aria-label="Suivant">
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          </div>
        </motion.div>
      </div>
      {/* Project Details Modal */}
      {activeProject !== null && <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} exit={{
      opacity: 0
    }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <motion.div initial={{
        scale: 0.9,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} exit={{
        scale: 0.9,
        opacity: 0
      }} className="bg-[#0a0d1f] border border-purple-900/20 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img src={projects[activeProject].image} alt={projects[activeProject].title} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d1f] to-transparent"></div>
              <button className="absolute top-4 right-4 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors" onClick={() => setActiveProject(null)}>
                <XIcon className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6">
                <div className={`inline-flex p-2 rounded-full bg-gradient-to-r ${projects[activeProject].color} mb-2`}>
                  {projects[activeProject].icon}
                </div>
                <h3 className="text-3xl font-bold">
                  {projects[activeProject].title}
                </h3>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-cyan-400">
                    Le Défi
                  </h4>
                  <p className="text-gray-300">
                    {projects[activeProject].problem}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-purple-400">
                    La Solution
                  </h4>
                  <p className="text-gray-300">
                    {projects[activeProject].solution}
                  </p>
                </div>
              </div>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">
                  Technologies Utilisées
                </h4>
                <div className="flex flex-wrap gap-2">
                  {projects[activeProject].technologies.map((tech, i) => <span key={i} className="px-3 py-1 text-sm rounded-full bg-purple-900/30 text-purple-300 border border-purple-700/30">
                      {tech}
                    </span>)}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={projects[activeProject].demoUrl} className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
                  <ExternalLinkIcon className="w-5 h-5" />
                  <span>Voir la Démo</span>
                </a>
                <a href={projects[activeProject].repoUrl} className="flex items-center justify-center gap-2 px-6 py-3 bg-[#1a1e35] border border-gray-700 rounded-full hover:bg-[#252a47] transition-colors">
                  <GithubIcon className="w-5 h-5" />
                  <span>Code Source</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>}
    </section>;
};
export default ProjectsSection;