import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Linkedin, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

function ContactSection() {
    const { toast } = useToast();
    const contactInfo = {
        email: 'shyamganesh1005@gmail.com',
        linkedin: 'https://www.linkedin.com/in/shyam-ganesh-s-556ab4373/',
        github: 'https://github.com/shyam10102005'
    };

    const copyToClipboard = (e) => {
        e.stopPropagation(); // Prevent triggering the mailto link if clicking copy
        navigator.clipboard.writeText(contactInfo.email);
        toast({
            title: '✨ Email Copied!',
            description: 'The email address has been copied to your clipboard.',
        });
    };

    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: Linkedin,
            url: contactInfo.linkedin,
            color: 'text-blue-400',
            borderColor: 'border-blue-400/30',
            hoverBorder: 'hover:border-blue-400',
            textColor: 'text-blue-100'
        },
        {
            name: 'GitHub',
            icon: Github,
            url: contactInfo.github,
            color: 'text-gray-200',
            borderColor: 'border-white/20',
            hoverBorder: 'hover:border-white/50',
            textColor: 'text-gray-100'
        }
    ];

    return (
        <div className="cosmic-panel p-8">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-4 mb-8"
            >
                <Mail className="w-12 h-12 text-purple-400" />
                <h2
                    className="font-orbitron text-4xl font-bold text-white"
                    style={{
                        textShadow: '0 0 20px rgba(155, 89, 182, 0.5)'
                    }}
                >
                    Contact
                </h2>
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white/80 mb-8 font-inter text-lg"
            >
                Ready to connect? Reach out through the cosmic channels
            </motion.p>

            <div className="space-y-4 font-inter">
                {/* Email Card */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <a
                        href={`mailto:${contactInfo.email}`}
                        className="group flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-purple-400/30 hover:border-purple-400 hover:bg-white/10 transition-all cursor-pointer relative"
                    >
                        <div className="p-3 rounded-full bg-purple-500/20 group-hover:bg-purple-500/40 transition-colors">
                            <Mail className="w-6 h-6 text-purple-300" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-medium text-purple-200 mb-1">Email</h3>
                            <p className="text-white font-mono text-sm sm:text-base truncate">
                                {contactInfo.email}
                            </p>
                        </div>
                        <Button
                            onClick={copyToClipboard}
                            variant="ghost"
                            size="icon"
                            className="bg-purple-500/10 hover:bg-purple-500/30 text-purple-200 rounded-full h-10 w-10 shrink-0"
                            title="Copy Email"
                        >
                            <Copy className="w-4 h-4" />
                        </Button>
                    </a>
                </motion.div>

                {/* Social Links */}
                {socialLinks.map((social, index) => (
                    <motion.div
                        key={social.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + (index * 0.1) }}
                    >
                        <a
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group flex items-center gap-4 p-4 rounded-lg bg-white/5 border ${social.borderColor} ${social.hoverBorder} hover:bg-white/10 transition-all cursor-pointer`}
                        >
                            <div className={`p-3 rounded-full bg-white/5 group-hover:bg-white/20 transition-colors`}>
                                <social.icon className={`w-6 h-6 ${social.color}`} />
                            </div>
                            <div className="flex-1">
                                <h3 className={`text-lg font-medium ${social.textColor} flex items-center gap-2`}>
                                    {social.name}
                                    <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                                </h3>
                            </div>
                        </a>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default ContactSection;