import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { Github, Mail, Linkedin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 md:py-32 bg-gray-950 text-white relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-cyan-900/10 blur-[100px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
                        Get In Touch
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-6"></div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-400 text-lg mb-12 max-w-xl mx-auto"
                >
                    Whether you have a question about my work, want to collaborate on an AI project, or just want to say hi, I'll try my best to get back to you!
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-center gap-6"
                >
                    <a
                        href={profile.social.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-4 rounded-full border border-gray-700 hover:border-cyan-500 hover:bg-cyan-500/10 text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:-translate-y-1"
                        aria-label="GitHub"
                    >
                        <Github size={24} />
                    </a>
                    <a
                        href={profile.social.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="p-4 rounded-full border border-gray-700 hover:border-cyan-500 hover:bg-cyan-500/10 text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:-translate-y-1"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={24} />
                    </a>
                    <a
                        href={`mailto:${profile.social.email}`}
                        className="p-4 rounded-full border border-gray-700 hover:border-cyan-500 hover:bg-cyan-500/10 text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:-translate-y-1"
                        aria-label="Email"
                    >
                        <Mail size={24} />
                    </a>
                </motion.div>

                <div className="mt-24 pt-8 border-t border-gray-800 text-gray-500 text-sm font-mono">
                    <p>Designed & Built by {profile.name}</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
