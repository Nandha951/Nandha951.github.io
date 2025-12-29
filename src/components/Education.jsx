import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { GraduationCap } from 'lucide-react';

const EducationItem = ({ data, index }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="relative pl-8 md:pl-0"
    >
        {/* Desktop: Alternating Layout */}
        <div className="hidden md:flex items-center justify-between gap-12 group">
            <div className={`w-1/2 ${index % 2 === 0 ? 'text-right' : 'order-last text-left'}`}>
                <h3 className="text-xl font-bold text-gray-100">{data.degree}</h3>
                <p className="text-cyan-400 font-medium mb-1">{data.institution}</p>
                <p className="text-sm text-gray-400 mb-2">{data.period}</p>
                <div className="text-gray-300 leading-relaxed text-sm">
                    <p className="mb-1">{data.details}</p>
                    <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-cyan-300 border border-white/10">
                        {data.status}
                    </span>
                </div>
            </div>

            {/* Center Line and Dot */}
            <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center h-full">
                <div className="w-px h-full bg-gray-800 group-last:h-1/2 group-first:top-1/2"></div>
                <div className="absolute top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-900 border-2 border-cyan-500 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                    <GraduationCap size={16} className="text-cyan-400" />
                </div>
            </div>

            <div className="w-1/2"></div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden pb-12 border-l border-gray-800 pl-8 relative last:pb-0">
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gray-900 border-2 border-cyan-500 flex items-center justify-center">
                <GraduationCap size={12} className="text-cyan-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-100">{data.degree}</h3>
            <p className="text-cyan-400 font-medium mb-1">{data.institution}</p>
            <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">{data.period}</p>
            <div className="text-gray-400 text-sm">
                <p className="mb-2">{data.details}</p>
                <span className="inline-block px-2 py-1 bg-white/5 rounded text-xs text-cyan-300 border border-white/10">
                    {data.status}
                </span>
            </div>
        </div>
    </motion.div>
);

const Education = () => {
    return (
        <section id="education" className="py-20 md:py-32 bg-gray-900/30 text-white">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
                        Education
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-400 text-lg">
                        Academic foundations and continuous learning journey
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {profile.education.map((item, index) => (
                        <EducationItem key={index} data={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
