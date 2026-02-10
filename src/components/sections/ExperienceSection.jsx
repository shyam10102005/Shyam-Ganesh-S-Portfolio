import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

function ExperienceSection() {
    return (
        <div className="cosmic-panel p-8 max-h-[80vh] overflow-y-auto custom-scrollbar">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-4 mb-6"
            >
                <Briefcase className="w-12 h-12 text-cyan-400" />
                <h2
                    className="font-orbitron text-4xl font-bold text-white"
                    style={{
                        textShadow: '0 0 20px rgba(34, 211, 238, 0.5)'
                    }}
                >
                    Experience
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-8 font-inter"
            >
                {/* Violavizn Technologies */}
                <div className="relative border-l-2 border-cyan-400/30 pl-6 ml-2">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />

                    <div className="bg-black/40 p-6 rounded-lg backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 transition-colors">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                            <h3 className="text-2xl font-bold text-white">Violavizn Technologies</h3>
                            <span className="text-cyan-300 font-mono text-sm bg-cyan-900/30 px-3 py-1 rounded-full border border-cyan-500/30">
                                May 2025 – January 2026
                            </span>
                        </div>

                        <div className="text-gray-300 mb-4 flex items-center gap-2">
                            <span>AI / ML Intern · Remote</span>
                        </div>

                        <ul className="text-gray-300 leading-relaxed space-y-3 list-disc list-inside">
                            <li>Built a multi-agent political intelligence system for misinformation analysis using NLP, LLMs, and RAG</li>
                            <li>Implemented Retrieval-Augmented Generation (RAG) with Tavily Search and Wikipedia for real-time evidence retrieval</li>
                            <li>Applied cross-encoder re-ranking and FLAN-T5 to generate explainable, evidence-backed verdicts</li>
                            <li>Developed debate analysis and misinformation risk modules, deployed via a Gradio dashboard</li>
                            <li>Achieved ~85% alignment with trusted fact-checking sources</li>
                            <li>Built a Gmail → WhatsApp automation system using Gmail API and WhatsApp Business API</li>
                            <li>Automated forwarding of OTPs, leads, and critical alerts, improving response speed and reducing manual monitoring</li>
                        </ul>
                    </div>
                </div>

                {/* Sriher */}
                <div className="relative border-l-2 border-cyan-400/30 pl-6 ml-2">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-800 border border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.2)]" />

                    <div className="bg-black/40 p-6 rounded-lg backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 transition-colors">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                            <h3 className="text-2xl font-bold text-white">Sriher</h3>
                            <span className="text-cyan-300 font-mono text-sm bg-cyan-900/30 px-3 py-1 rounded-full border border-cyan-500/30">
                                May 2024 - June 2024
                            </span>
                        </div>

                        <div className="text-gray-300 mb-4 flex items-center gap-2">
                            <span>India</span>
                        </div>

                        <p className="text-gray-300 leading-relaxed">
                            Developed an E-Commerce website using HTML, CSS, and JavaScript to demonstrate possible improvements
                            for the company's online presence.
                        </p>
                    </div>
                </div>

            </motion.div>
        </div>
    );
}

export default ExperienceSection;
