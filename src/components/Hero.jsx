import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-gray-950 text-white selection:bg-cyan-500 selection:text-black">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-900/20 to-transparent rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-cyan-900/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-cyan-400 font-medium tracking-wide mb-4 text-lg md:text-xl">
                        Hello, I am
                    </h2>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400"
                >
                    {profile.name}
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="relative inline-block"
                >
                    <h3 className="text-xl md:text-2xl lg:text-3xl text-gray-400 mb-8 font-light">
                        {profile.role}
                    </h3>
                    {/* Glitch/Tech Decoration */}
                    <motion.div
                        className="absolute -inset-1 bg-cyan-500/20 blur opacity-0"
                        animate={{ opacity: [0, 0.5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-gray-500 text-sm md:text-base mb-12"
                >
                    {profile.location}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                >
                    <a href="#about" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-white font-medium backdrop-blur-sm group">
                        Explore My Work
                        <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-600"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gray-600 to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
