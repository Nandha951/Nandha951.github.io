import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { MapPin, Briefcase } from 'lucide-react';

const ExperienceCard = ({ data, index }) => {
    return (
        <div className="relative pl-8 md:pl-12 py-6 group">
            {/* Timeline Line & Dot */}
            <div
                className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/50 via-cyan-500/50 to-transparent group-last:bg-gradient-to-b group-last:from-purple-500/50 group-last:to-transparent"
            ></div>
            <div className="absolute left-[-5px] top-8 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] z-10"></div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900/40 border border-white/5 rounded-2xl p-6 md:p-8 hover:border-cyan-500/30 transition-all duration-300 relative overflow-hidden"
            >
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                        <h3 className="text-2xl font-bold text-cyan-400 mb-1">{data.role}</h3>
                        <p className="text-xl text-purple-400 font-medium">{data.company}</p>
                    </div>

                    {/* Status Badge */}
                    <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 text-xs font-bold rounded-full border ${data.status === 'Present' ? 'bg-green-500/10 border-green-500/30 text-green-400' : 'bg-gray-700/30 border-gray-600 text-gray-400'}`}>
                            ● {data.status}
                        </span>
                    </div>
                </div>

                {/* Tags Row */}
                <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-400">
                    <div className="px-3 py-1.5 rounded-lg border border-white/5 bg-white/5 flex items-center gap-2">
                        <span className="text-gray-300">{data.period}</span>
                    </div>
                    <div className="px-3 py-1.5 rounded-lg border border-white/5 bg-white/5 flex items-center gap-2">
                        <MapPin size={14} className="text-gray-400" />
                        <span>{data.location}</span>
                    </div>
                    <div className="px-3 py-1.5 rounded-lg border border-white/5 bg-white/5 flex items-center gap-2">
                        <Briefcase size={14} className="text-gray-400" />
                        <span>{data.type}</span>
                    </div>
                </div>


                {/* Key Achievements */}
                <div>
                    <h4 className="text-lg font-semibold text-gray-200 mb-4 flex items-center gap-2">
                        <span className="p-1 rounded bg-cyan-500/20 text-cyan-400"><Briefcase size={16} /></span> Key Achievements
                    </h4>
                    <ul className="space-y-3">
                        {data.achievements && data.achievements.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-400 leading-relaxed text-sm md:text-base">
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0"></span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </div>
    );
};

const Experience = () => {
    return (
        <section id="experience" className="py-20 md:py-32 bg-gray-950 text-white">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
                        Work Experience
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-400 text-lg">
                        Professional journey building scalable systems and delivering high-impact solutions across diverse tech stacks
                    </p>
                </motion.div>

                <div className="relative">
                    {profile.experience.map((item, index) => (
                        <ExperienceCard key={index} data={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
