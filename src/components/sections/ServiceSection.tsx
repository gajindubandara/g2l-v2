import React from 'react';
import {services} from "../../data/data.ts";

interface ServiceCardProps {
    icon: string;
    title: string;
    description: string;
    delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay = 0 }) => {
    return (
        <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay={delay}>
            <div className="card project-card h-100 shadow-sm">
                <div className="card-body text-center p-4">
                    <div className="service-icon">
                        <i className={`bi ${icon} fs-1`}></i>
                    </div>
                    <h3 className="card-title mb-3">{title}</h3>
                    <p className="card-text text-description">{description}</p>
                </div>
            </div>
        </div>
    );
};

export const ServiceSection: React.FC = () => {



    return (
        <section className="creative-services py-5" id="services">
            <div className="container">
                <div className="text-center mb-5" data-aos="fade-right">
                    <h2 className="display-5 fw-bold text-white">Our Services</h2>
                    <p className="lead text-description">Innovative solutions tailored to your unique needs</p>
                </div>

                <div className="row">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            delay={index * 200}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};