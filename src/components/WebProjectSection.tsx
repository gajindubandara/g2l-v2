import React from 'react';
import {webProjects} from "../data.ts";

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
                <img src={image} className="card-img-top web-project-image" alt={title} />
                <div className="web-project-overlay">
                    <h3 className="web-project-title mb-2">{title}</h3>
                    <p className="text-white-50 mb-3">{description}</p>
                </div>
            </div>
        </div>
    );
};

export const WebProjectSection: React.FC = () => {



    return (
        <section className="web-projects-section" id="projects">
            <div className="container">
                <div className="text-center mb-5" data-aos="fade-right">
                    <h2 className="display-5 fw-bold text-white">Our Web Projects</h2>
                    <p className="lead text-description">Creative web solutions that deliver exceptional user
                        experiences and business growth.</p>
                </div>

                <div className="row g-4 justify-content-center">
                    {webProjects.map((project, index) => (
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
