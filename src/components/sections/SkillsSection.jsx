import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

const skillCategories = [
    {
        title: "Programming",
        skills: ["C", "C++", "Java", "Python", "SQL"]
    },
    {
        title: "Web Development",
        skills: ["HTML", "CSS", "JavaScript", "Wordpress", "MERN"]
    },
    {
        title: "Databases",
        skills: ["DBMS", "SQL", "MongoDB"]
    },
    {
        title: "Data Analysis",
        skills: ["Excel (Advanced)", "basics of Tableau", "Machine Learning"]
    }
];

function SkillsSection() {
    return (
        <div className="cosmic-panel p-4 md:p-8 max-h-[80vh] overflow-y-auto custom-scrollbar">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-4 mb-6"
            >
                <Code2 className="w-10 h-10 md:w-12 md:h-12 text-cyan-400" />
                <h2
                    className="font-orbitron text-3xl md:text-4xl font-bold text-white"
                    style={{
                        textShadow: '0 0 20px rgba(0, 217, 255, 0.5)'
                    }}
                >
                    Skills
                </h2>
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white/80 mb-6 font-inter text-lg"
            >
                A constellation of technologies and expertise
            </motion.p>

            <div className="space-y-8">
                {skillCategories.map((category, catIndex) => (
                    <div key={category.title} className="space-y-3">
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + catIndex * 0.1 }}
                            className="text-xl font-bold text-cyan-200 border-l-4 border-cyan-500 pl-3"
                        >
                            {category.title}
                        </motion.h3>
                        <div className="flex flex-wrap gap-3">
                            {category.skills.map((skill, index) => (
                                <motion.span
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 + catIndex * 0.1 + index * 0.05 }}
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    className="skill-tag"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SkillsSection;