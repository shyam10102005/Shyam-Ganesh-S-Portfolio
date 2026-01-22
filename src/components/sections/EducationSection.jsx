import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

function EducationSection() {
    return (
        <div className="cosmic-panel p-8">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-4 mb-6"
            >
                <GraduationCap className="w-12 h-12 text-orange-400" />
                <h2
                    className="font-orbitron text-4xl font-bold text-white"
                    style={{
                        textShadow: '0 0 20px rgba(230, 126, 34, 0.5)'
                    }}
                >
                    Education
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6 font-inter"
            >
                <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-white">Academic Journey</h3>
                    <p className="text-white/80 text-lg leading-relaxed">
                        My educational path has been focused on computer science, data analytics,
                        and software engineering. Like Saturn's magnificent rings, my learning encompasses
                        multiple layers of knowledge across various domains.
                    </p>
                </div>

                <div className="space-y-8 border-l-2 border-orange-400/30 pl-6 ml-2">
                    <div className="relative">
                        <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-orange-400 shadow-[0_0_10px_rgba(230,126,34,0.5)]" />
                        <h4 className="text-xl font-bold text-white">Bachelor of Technology</h4>
                        <p className="text-orange-300 font-medium">Artificial Intelligence and Data Analytics</p>
                        <p className="text-cyan-400 font-semibold mt-1">Sri Ramachandra Engineering and Technology</p>
                        <p className="text-white/60 text-sm">Porur, Chennai • 3rd Year (Present)</p>
                    </div>

                    <div className="relative">
                        <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-orange-400/50" />
                        <h4 className="text-xl font-bold text-white">High School Diploma</h4>
                        <p className="text-cyan-400 font-semibold mt-1">GK Shetty Vivekananda Vidyalaya Senior Secondary School</p>
                        <p className="text-white/60 text-sm">Ambattur, India • Completed March 2023</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default EducationSection;