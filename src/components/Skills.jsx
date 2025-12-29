import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { Code, Layout, Server, Database, Cloud, Brain, Shield, PenTool } from 'lucide-react';

const colorVariants = {
    purple: {
        border: "border-purple-500/50",
        bg: "bg-purple-500/10",
        text: "text-purple-400",
        glow: "shadow-purple-500/20"
    },
    cyan: {
        border: "border-cyan-500/50",
        bg: "bg-cyan-500/10",
        text: "text-cyan-400",
        glow: "shadow-cyan-500/20"
    },
    green: {
        border: "border-green-500/50",
        bg: "bg-green-500/10",
        text: "text-green-400",
        glow: "shadow-green-500/20"
    },
    orange: {
        border: "border-orange-500/50",
        bg: "bg-orange-500/10",
        text: "text-orange-400",
        glow: "shadow-orange-500/20"
    }
};

const iconMap = {
    "Languages": Code,
    "Frontend": Layout,
    "Backend": Server,
    "Database & Storage": Database,
    "Cloud & DevOps": Cloud,
    "AI / ML & Data": Brain,
    "ServiceNow": PenTool,
    "Tools & Security": Shield
};

const SkillCard = ({ category, index }) => {
    const styles = colorVariants[category.color] || colorVariants.purple;
    const Icon = iconMap[category.category] || Code;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className={`relative p-6 rounded-xl border ${styles.border} bg-gray-900/50 backdrop-blur-sm hover:shadow-lg ${styles.glow} transition-all duration-300 group h-full`}
        >
            <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg ${styles.bg}`}>
                    <Icon className={`w-6 h-6 ${styles.text}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-100">{category.category}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
                {category.items.map((skill, idx) => (
                    <span
                        key={idx}
                        className={`px-3 py-1 rounded-md text-sm border border-white/5 bg-white/5 text-gray-300 group-hover:border-white/10 transition-colors cursor-default hover:bg-white/10`}
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="py-20 md:py-32 bg-gray-950 text-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
                        Technical Arsenal
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-400 text-lg">
                        A comprehensive list of technologies and tools I've mastered
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
                    {profile.skills.map((category, index) => (
                        <SkillCard key={index} category={category} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
