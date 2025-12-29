import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { Folder, Github } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects" className="py-20 md:py-32 bg-gray-900/50 text-white">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
                        Projects
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-400 text-lg">
                        A showcase of my recent work and technical experiments
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {profile.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-gray-800/50 p-8 rounded-xl border border-white/5 hover:border-cyan-500/50 hover:bg-gray-800 transition-all group"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <Folder className="w-10 h-10 text-cyan-500" />
                                <a href={project.link || profile.social.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                    <Github className="w-6 h-6" />
                                </a>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {project.description}
                            </p>

                            {/* Optional: Add tech stack tags if available in data, which they are now */}
                            {project.tech && (
                                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs font-mono text-cyan-500/80">{t}</span>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
