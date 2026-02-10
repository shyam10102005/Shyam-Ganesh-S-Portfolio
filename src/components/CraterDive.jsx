import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
    {
        id: 0,
        title: 'Multi-Agent Framework for Political Discourse Analysis',
        description: 'A multi-agent political intelligence system for misinformation analysis using NLP, LLMs, and RAG. Features Retrieval-Augmented Generation with Tavily Search and Wikipedia, cross-encoder re-ranking, FLAN-T5 for explainable verdicts, and a Gradio dashboard.',
        technologies: ['Python', 'NLP', 'LLMs', 'RAG', 'FLAN-T5', 'Gradio', 'Tavily Search'],
        repo: 'https://github.com/shyam10102005/A-Multi-Agent-Framework-for-Political-Discourse-Analysis-and-Misinformation-Forecasting'
    },
    {
        id: 1,
        title: 'Gmail to WhatsApp Forwarder',
        description: 'Automated system to forward important emails from Gmail to WhatsApp using API integration. Forwards OTPs, leads, and critical alerts in real-time, improving response speed and reducing manual monitoring.',
        technologies: ['Python', 'Gmail API', 'WhatsApp Business API', 'Automation'],
        repo: 'https://github.com/shyam10102005/Gmail-to-WhatsApp-Forwarder'
    }
];

function CraterDive({ project, onReturnToOrbit }) {
    const projectData = projects[project] || projects[0];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 flex items-center justify-center p-6 z-50"
        >
            <div className="relative w-full max-w-3xl">
                {/* Glassmorphism panel */}
                <div className="cosmic-panel p-8 space-y-6">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="font-orbitron text-4xl font-bold text-white mb-4"
                        style={{
                            textShadow: '0 0 20px rgba(0, 217, 255, 0.5), 0 0 40px rgba(0, 217, 255, 0.3)'
                        }}
                    >
                        {projectData.title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="font-inter text-lg text-white/80 leading-relaxed"
                    >
                        {projectData.description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-3"
                    >
                        <h3 className="font-orbitron text-xl text-cyan-400">Technologies Used</h3>
                        <div className="flex flex-wrap gap-3">
                            {projectData.technologies.map((tech, index) => (
                                <motion.span
                                    key={tech}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    className="skill-tag"
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="pt-6 flex gap-4 flex-wrap"
                    >
                        <Button
                            onClick={onReturnToOrbit}
                            className="cosmic-button group"
                        >
                            <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                            Return to Orbit
                        </Button>
                        {projectData.repo && (
                            <a
                                href={projectData.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cosmic-button inline-flex items-center gap-2 px-4 py-2 rounded-md text-white font-inter text-sm hover:scale-105 transition-transform"
                            >
                                🔗 View on GitHub
                            </a>
                        )}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}

export default CraterDive;