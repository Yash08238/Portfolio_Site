import { motion } from 'motion/react';
import { aboutContent } from '../data';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section-padding">
            <div className="container">
                <div className="about-content">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
                        {aboutContent.bio.map((paragraph, index) => (
                            <p key={index} className="about-description">
                                {paragraph}
                            </p>
                        ))}
                    </motion.div>

                    <motion.h3
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem' }}
                    >
                        My <span className="text-gradient">Skills</span>
                    </motion.h3>

                    <div className="skills-grid">
                        {aboutContent.skills.map((category, index) => (
                            <motion.div
                                key={index}
                                className="skill-card glass"
                                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                viewport={{ margin: "-50px" }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    ease: "easeOut"
                                }}
                            >
                                <div className="skill-icon">
                                    <category.icon size={40} />
                                </div>
                                <h3>{category.name}</h3>
                                <ul>
                                    {category.items.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
