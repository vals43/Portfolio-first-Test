import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CodeIcon, ServerIcon, DatabaseIcon, CloudIcon, PencilRulerIcon, BrainIcon, Languages } from 'lucide-react';

const skillCategories = [
    {
        name: 'Language',
        icon: <Languages className="w-6 h-6" />,
        color: 'from-cyan-500 to-blue-600',
        skills: [
            { name: 'JavaScript', level: 70 },
            { name: 'Java', level: 70 },
            { name: 'Python', level: 0 },
            { name: 'C++', level: 0 }
        ]
    },
    {
        name: 'Frontend',
        icon: <CodeIcon className="w-6 h-6" />,
        color: 'from-cyan-500 to-blue-600',
        skills: [
            { name: 'HTML', level: 70 },
            { name: 'CSS', level: 70 },
            { name: 'JavaScript', level: 50 },
            { name: 'React', level: 10 },
            { name: 'Front VibeCoding', level: 90 },
            { name: 'Tailwind CSS', level: 30 }
        ]
    },
    {
        name: 'Backend',
        icon: <ServerIcon className="w-6 h-6" />,
        color: 'from-purple-500 to-pink-600',
        skills: [
            { name: 'Node.js', level: 50 },
            { name: 'Express', level: 0 },
            { name: 'GraphQL', level: 0 },
            { name: 'REST API', level: 0 },
            { name: 'Authentication', level: 0 }
        ]
    },
    {
        name: 'Bases de Données',
        icon: <DatabaseIcon className="w-6 h-6" />,
        color: 'from-emerald-500 to-green-600',
        skills: [
            { name: 'MongoDB', level: 0 },
            { name: 'PostgreSQL', level: 40 },
            { name: 'Redis', level: 0 },
            { name: 'Firebase', level: 0 }
        ]
    },
    {
        name: 'DevOps',
        icon: <CloudIcon className="w-6 h-6" />,
        color: 'from-amber-500 to-orange-600',
        skills: [
            { name: 'Docker', level: 0 },
            { name: 'CI/CD', level: 0 },
            { name: 'AWS', level: 0 },
            { name: 'Vercel', level: 0 }
        ]
    },
    {
        name: 'Design',
        icon: <PencilRulerIcon className="w-6 h-6" />,
        color: 'from-pink-500 to-rose-600',
        skills: [
            { name: 'UI/UX', level: 85 },
            { name: 'Figma', level: 50 },
            { name: 'Animation', level: 60 },
            { name: 'Responsive Design', level: 70 }
        ]
    },
    {
        name: 'Soft Skills',
        icon: <BrainIcon className="w-6 h-6" />,
        color: 'from-blue-500 to-indigo-600',
        skills: [
            { name: 'Problem Solving', level: 95 },
            { name: 'Communication', level: 85 },
            { name: 'Adaptabilité', level: 90 },
            { name: 'Gestion de Projet', level: 80 }
        ]
    }
];

const SkillsSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, {
        once: false,
        amount: 0.2
    });
    const [activeCategory, setActiveCategory] = useState(0);

    return (
        <section id="compétences" ref={sectionRef} className="py-20 md:py-32 relative">
            {/* Background elements */}
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-600 rounded-full filter blur-[120px] opacity-10"></div>
            <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-purple-600 rounded-full filter blur-[120px] opacity-10"></div>

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
                        Le Spectre des{' '}
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                            Compétences
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Une constellation d'outils et de technologies maîtrisés pour
                        concrétiser vos idées
                    </p>
                </motion.div>

                <div className="mb-12">
                    <motion.div className="flex flex-wrap justify-center gap-4" initial={{
                        opacity: 0,
                        y: 20
                    }} animate={isInView ? {
                        opacity: 1,
                        y: 0
                    } : {
                        opacity: 0,
                        y: 20
                    }} transition={{
                        duration: 0.8,
                        delay: 0.2
                    }}>
                        {skillCategories.map((category, index) => (
                            <motion.button
                                key={index}
                                className={`
                                    px-5 py-3 rounded-full flex items-center gap-2 transition-all
                                    ${activeCategory === index
                                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                                        : 'bg-[#0a0d1f] text-gray-300 border border-purple-900/20'
                                    }
                                    relative z-10  {/* <--- AJOUTEZ 'relative z-10' ICI */}
                                `}
                                onClick={() => setActiveCategory(index)}
                                whileHover={{
                                    scale: 1.05
                                }}
                                whileTap={{
                                    scale: 0.95
                                }}
                            >
                                {category.icon}
                                <span>{category.name}</span>
                            </motion.button>
                        ))}
                    </motion.div>
                </div>

                <motion.div key={activeCategory} initial={{
                    opacity: 0,
                    y: 20
                }} animate={{
                    opacity: 1,
                    y: 0
                }} exit={{
                    opacity: 0,
                    y: -20
                }} transition={{
                    duration: 0.5
                }} className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {skillCategories[activeCategory].skills.map((skill, index) => (
                            <motion.div key={index} initial={{
                                opacity: 0,
                                x: -20
                            }} animate={{
                                opacity: 1,
                                x: 0
                            }} transition={{
                                duration: 0.5,
                                delay: index * 0.1
                            }} className="bg-[#0a0d1f]/70 backdrop-blur-sm border border-purple-900/20 rounded-lg p-5">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="font-medium text-lg">{skill.name}</h3>
                                    <span className="text-sm text-gray-400">{skill.level}%</span>
                                </div>
                                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                    <motion.div className={`h-full bg-gradient-to-r ${skillCategories[activeCategory].color}`} initial={{
                                        width: 0
                                    }} animate={{
                                        width: `${skill.level}%`
                                    }} transition={{
                                        duration: 1,
                                        delay: 0.3,
                                        ease: 'easeOut'
                                    }} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
export default SkillsSection;