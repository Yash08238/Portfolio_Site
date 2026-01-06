import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { personalInfo, heroContent } from '../data';
import './Hero.css';

const Hero = () => {
    const { scrollY } = useScroll();
    const yText = useTransform(scrollY, [0, 500], [0, 200]);
    const yVisual = useTransform(scrollY, [0, 500], [0, -100]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section id="hero" className="hero">
            <div className="container hero-content">
                <motion.div
                    className="hero-text"
                    style={{ y: yText, opacity }}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="hero-greeting">{heroContent.greeting}</span>
                    <h1 className="hero-name">
                        <span className="text-gradient">{personalInfo.name}</span> <br />
                        {personalInfo.title}
                    </h1>
                    <p className="hero-description">
                        {heroContent.description}
                    </p>

                    <div className="hero-buttons">
                        <motion.a
                            href="#projects"
                            className="btn btn-primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Work <ArrowRight size={18} />
                        </motion.a>
                        <motion.a
                            href="#contact"
                            className="btn btn-secondary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contact Me
                        </motion.a>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    style={{ y: yVisual, opacity }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="hero-image-container">
                        <img src={personalInfo.photo} alt={personalInfo.name} className="hero-image" />
                        <div className="hero-circle-bg"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
