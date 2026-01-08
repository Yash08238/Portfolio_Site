import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Award, X } from 'lucide-react';
import { achievementsContent } from '../data';
import './Achievements.css';

const AchievementCard = ({ achievement, onClick, index }) => (
    <motion.div
        className="achievement-card glass"
        whileHover={{ y: -10 }}
        initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        viewport={{ margin: "-50px" }}
        transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: "easeOut"
        }}
        onClick={() => onClick(achievement)}
    >
        <div className="achievement-image">
            <img
                src={achievement.image}
                alt={achievement.title}
            />
            <div className="achievement-overlay">
                <div className="achievement-date">
                    <Calendar size={20} />
                    <span>{achievement.date}</span>
                </div>
            </div>
        </div>
        <div className="achievement-content">
            <div className="achievement-header">
                <h3>{achievement.title}</h3>
                <Award className="award-icon" size={24} />
            </div>
            <p>{achievement.description}</p>
            <div className="achievement-tags">
                {achievement.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                ))}
            </div>
        </div>
    </motion.div>
);

const Achievements = () => {
    const [selectedId, setSelectedId] = useState(null);

    return (
        <section id="achievements" className="section-padding">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-50px" }}
                >
                    <h2 className="section-title">My <span className="text-gradient">Achievements</span></h2>
                    <p className="section-subtitle">Milestones and recognitions along my journey.</p>
                </motion.div>

                <div className="marquee-container">
                    <div className={`marquee-content ${selectedId ? 'paused' : ''}`}>
                        {/* First set of items */}
                        {achievementsContent.map((item, index) => (
                            <AchievementCard
                                key={`first-${item.id}`}
                                achievement={item}
                                index={index}
                                onClick={setSelectedId}
                            />
                        ))}
                        {/* Duplicate set for seamless scrolling */}
                        {achievementsContent.map((item, index) => (
                            <AchievementCard
                                key={`second-${item.id}`}
                                achievement={item}
                                index={index}
                                onClick={setSelectedId}
                            />
                        ))}
                    </div>
                </div>

                <AnimatePresence>
                    {selectedId && (
                        <motion.div
                            className="lightbox-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                        >
                            <motion.div
                                className="lightbox-content"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <img
                                    src={selectedId.image}
                                    alt={selectedId.title}
                                    className="lightbox-image"
                                />
                                <button className="lightbox-close" onClick={() => setSelectedId(null)}>
                                    <X size={24} />
                                </button>
                                <div className="lightbox-details">
                                    <h3>{selectedId.title}</h3>
                                    <p>{selectedId.description}</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Achievements;
