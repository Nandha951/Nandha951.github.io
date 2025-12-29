import { motion } from 'framer-motion';
import { profile } from '../data/profile';

const About = () => {
    return (
        <section id="about" className="py-20 md:py-32 bg-gray-950 text-white relative">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
                        About Me
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-400 text-lg">
                        A glimpse into my background, passion, and what drives me
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid md:grid-cols-3 gap-12"
                >
                    <div className="md:col-span-2 text-gray-300 text-lg leading-relaxed space-y-4">
                        <p>
                            {profile.summary}
                        </p>
                        <p>
                            Based in <span className="text-white font-medium">{profile.location}</span>, I specialize in building robust platforms and intelligent systems. My educational background as an F-1 student in the US drives my pursuit of advanced technical certifications and cutting-edge research.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="aspect-square rounded-lg border-2 border-cyan-500/30 p-4 relative group">
                            <div className="absolute inset-0 bg-cyan-500/10 rounded-lg transform translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"></div>
                            <div className="w-full h-full bg-gray-900 rounded-lg flex items-center justify-center overflow-hidden">
                                <span className="text-6xl text-gray-700 font-bold select-none">&lt;/&gt;</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
