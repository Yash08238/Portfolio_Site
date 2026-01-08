import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import { projectsContent } from '../data';
import './Projects.css';

const ProjectCard = ({ project, index }) => (
    <motion.div
        className="project-card"
        whileHover={{ y: -5 }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ margin: "-50px" }}
        transition={{
            duration: 0.4,
            delay: index * 0.1,
            ease: "easeOut"
        }}
    >
        <div className="project-header">
            <h3 className="project-title">{project.title}</h3>
            {project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}
        </div>

        <div className="project-image-container">
            <img src={project.image} alt={project.title} />
        </div>

        <p className="project-description">{project.description}</p>

        <div className="project-tags">
            {project.tags.map(tag => (
                <span key={tag} className="tag-pill">{tag}</span>
            ))}
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
