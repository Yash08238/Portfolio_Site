import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Mail, Github, Linkedin, Code, Award, ExternalLink } from 'lucide-react';

// Components
import Aurora from '../components/reactbits/Aurora';
import BlurText from '../components/reactbits/BlurText';
import ShinyText from '../components/reactbits/ShinyText';
import SpotlightCard from '../components/reactbits/SpotlightCard';
import Dock from '../components/reactbits/Dock';
import SplitText from '../components/reactbits/SplitText';
import ImageModal from '../components/ImageModal';

// Data
import { portfolioData } from '../data/portfolio';

const FadeIn = React.memo(({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
});

FadeIn.displayName = 'FadeIn';

const Portfolio = () => {
    const dockItems = [
        { icon: <Home size={20} />, label: 'Home', onClick: () => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }) },
        { icon: <User size={20} />, label: 'About', onClick: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) },
        { icon: <Award size={20} />, label: 'Certifications', onClick: () => document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' }) },
        { icon: <Code size={20} />, label: 'Projects', onClick: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) },
        { icon: <Mail size={20} />, label: 'Contact', onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) },
    ];

    const { hero, about, certifications, projects, contact } = portfolioData;

    const [isNavVisible, setIsNavVisible] = useState(true);
    const [selectedCertImage, setSelectedCertImage] = useState<string | null>(null);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const handleScroll = () => {
            setIsNavVisible(false);

            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setIsNavVisible(true);
            }, 500); // Show navbar 500ms after scrolling stops
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <div className="min-h-screen bg-black text-gray-100 font-sans selection:bg-cyan-500 selection:text-white overflow-x-hidden pb-20">
            {/* Hero Section */}
            <section id="home" className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Aurora
                        colorStops={['#00d2ff', '#3a7bd5', '#8E2DE2']}
                        speed={0.5}
                        amplitude={1.2}
                        blend={0.5}
                    />
                </div>

                <div className="z-10 text-center px-4">
                    <div className="mb-6 relative flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6">
                        <BlurText
                            text={hero.firstName}
                            delay={150}
                            animateBy="letters"
                            direction="top"
                            className="text-5xl md:text-9xl font-bold tracking-tighter text-white drop-shadow-lg"
                        />
                        <BlurText
                            text={hero.lastName}
                            delay={150}
                            animateBy="letters"
                            direction="top"
                            className="text-5xl md:text-9xl font-bold tracking-tighter text-white drop-shadow-lg"
                        />
                    </div>

                    <div className="h-auto md:h-16 overflow-hidden">
                        <SplitText
                            text={hero.role}
                            className="text-xl md:text-4xl text-cyan-200 font-light tracking-widest uppercase"
                            delay={50}
                            from={{ opacity: 0, y: 50 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.2}
                            rootMargin="-50px"
                            onLetterAnimationComplete={undefined}
                        />
                    </div>
                </div>


            </section>
            {/* About Section */}
            <section id="about" className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <FadeIn>
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-black/50 backdrop-blur-sm">
                                <img
                                    src={about.profileImage}
                                    alt="Profile"
                                    loading="lazy"
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
                            {about.title.line1} <br />
                            <span className="text-cyan-400">{about.title.line2}</span>
                        </h2>
                        <p className="text-lg text-gray-400 leading-relaxed mb-8">
                            {about.description}
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            {about.stats.map((stat, index) => (
                                <div key={index} className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
                                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                    <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>
            {/* Certifications Section */}
            <section id="certifications" className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] -z-10" />

                <FadeIn>
                    <div className="flex items-end justify-between mb-16">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Certifications</h2>
                            <div className="h-1 w-20 bg-cyan-500 rounded-full" />
                        </div>
                        <div className="hidden md:block text-right">
                            <p className="text-gray-400">Continuous Learning &<br />Professional Growth</p>
                        </div>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certifications.map((cert, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                            <SpotlightCard
                                className="h-full bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 hover:border-cyan-500/50 transition-colors group cursor-pointer"
                                onClick={() => setSelectedCertImage(cert.image)}
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <Award className="text-cyan-400 group-hover:scale-110 transition-transform" size={32} />
                                    <span className="text-xs font-mono text-gray-500 border border-white/10 px-2 py-1 rounded-full">{cert.year}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{cert.title}</h3>
                                <p className="text-sm text-gray-400 mb-4">{cert.issuer}</p>
                                <div className="inline-flex items-center text-xs text-white/50 group-hover:text-white transition-colors gap-1">
                                    View Certificate <ExternalLink size={12} />
                                </div>
                            </SpotlightCard>
                        </FadeIn>
                    ))}
                </div>

                <ImageModal
                    isOpen={!!selectedCertImage}
                    onClose={() => setSelectedCertImage(null)}
                    imageSrc={selectedCertImage}
                />
            </section>
            {/* Projects Section */}
            <section id="projects" className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative">
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/20 rounded-full blur-[128px] -z-10" />

                <FadeIn>
                    <div className="mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Featured Projects</h2>
                        <div className="h-1 w-20 bg-purple-500 rounded-full" />
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <FadeIn key={index} delay={index * 0.2}>
                            <SpotlightCard className="h-full bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 hover:bg-white/10 transition-all group">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-white/10 rounded-xl text-white group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                                        <Code size={24} />
                                    </div>
                                    <ExternalLink className="text-gray-500 hover:text-white transition-colors cursor-pointer" size={24} />
                                </div>

                                <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                                <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.split('•').map((tech, i) => (
                                        <span key={i} className="px-3 py-1 text-xs font-medium text-cyan-300 bg-cyan-900/30 border border-cyan-500/30 rounded-full">
                                            {tech.trim()}
                                        </span>
                                    ))}
                                </div>
                            </SpotlightCard>
                        </FadeIn>
                    ))}
                </div>
            </section>
            {/* Contact Section */}
            <section id="contact" className="pt-32 pb-10 px-6 md:px-12 max-w-3xl mx-auto text-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] -z-10" />
                <FadeIn>
                    <SpotlightCard className="relative z-10 p-12 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 backdrop-blur-xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{contact.heading}</h2>
                        <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
                            {contact.description}
                        </p>

                        <div className="flex justify-center gap-6 mb-12">
                            <a href={contact.socials.github} className="p-4 rounded-full bg-white/5 hover:bg-white/20 text-white transition-all hover:scale-110 border border-white/10">
                                <Github size={24} />
                            </a>
                            <a href={contact.socials.linkedin} className="p-4 rounded-full bg-white/5 hover:bg-white/20 text-white transition-all hover:scale-110 border border-white/10">
                                <Linkedin size={24} />
                            </a>
                            <a href={contact.socials.email} className="p-4 rounded-full bg-white/5 hover:bg-white/20 text-white transition-all hover:scale-110 border border-white/10">
                                <Mail size={24} />
                            </a>
                        </div>

                        <ShinyText
                            text={`© ${contact.footerStartYear} ${contact.footerName}. All rights reserved.`}
                            disabled={false}
                            speed={3}
                            className="text-sm text-gray-600"
                        />
                    </SpotlightCard>
                </FadeIn>
            </section>
            {/* Dock Navigation */}
            <div className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 transition-transform duration-300 ${isNavVisible ? 'translate-y-0' : 'translate-y-[200%]'}`}>
                <Dock
                    items={dockItems}
                    panelHeight={68}
                    baseItemSize={50}
                    magnification={70}
                />
            </div>
        </div>
    );
};

export default Portfolio;
