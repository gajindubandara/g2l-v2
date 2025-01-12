import React from 'react';
import gangawataImg from '../assets/images/projects/gangawata.png';
interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
    delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, delay = 0 }) => {
    return (
        <div className="col-md-6" data-aos="fade-up" data-aos-delay={delay}>
            <div className="card project-card h-100 position-relative">
                <img src={image} className="card-img-top project-image" alt={title} />
                <div className="project-overlay">
                    <h3 className="project-title mb-2">{title}</h3>
                    <p className="text-white-50 mb-3">{description}</p>
                </div>
            </div>
        </div>
    );
};

export const Projects: React.FC = () => {
    const projects = [
        {
            image: gangawataImg,
            title: "Tourism Website",
            description: "Comprehensive travel booking platform for a leading travel agency."
        },
        {
            image: gangawataImg,
            title: "Tourism Website",
            description: "Comprehensive travel booking platform for a leading travel agency."
        },
        {
            image: gangawataImg,
            title: "Tourism Website",
            description: "Comprehensive travel booking platform for a leading travel agency."
        },
    ];

    return (
        <section className="projects-section" id="projects">
            <div className="container">
                <div className="text-center mb-5" data-aos="fade-right">
                    <h2 className="display-5 fw-bold text-white">Our Featured Projects</h2>
                    <p className="lead text-description">Innovative solutions that transform businesses</p>
                </div>
                <div className="row g-4 justify-content-center">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            {...project}
                            delay={index * 200}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
