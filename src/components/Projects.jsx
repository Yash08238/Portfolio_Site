import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import { projectsContent } from '../data';
import './Projects.css';

const ProjectCard = ({ project, index }) => (
    <motion.div
        className="project-card glass"
        whileHover={{ y: -10, scale: 1.02 }}
        initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        viewport={{ margin: "-50px" }}
        transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: "easeOut"
        }}
    >
        <div className="project-image">
            <img src={project.image} alt={project.title} />
            <div className="project-overlay">
                <div className="project-links">
                    <a href={project.github} className="icon-btn" title="View Code"><Github size={20} /></a>
                    <a href={project.demo} className="icon-btn" title="Live Demo"><ExternalLink size={20} /></a>
                </div>
            </div>
        </div>
        <div className="project-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
                {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                ))}
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    return (
        <section id="projects" className="section-padding">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-50px" }}
                >
                    <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
                    <p className="section-subtitle">A selection of my recent work.</p>
                </motion.div>

                <div className="projects-grid">
                    {projectsContent.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
