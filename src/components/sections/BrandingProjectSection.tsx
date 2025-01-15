import React from 'react';
import {brandingProjects} from "../../data/data.ts";
interface BrandingProjectProps {
    logo: string;
    brandName: string;
    industry: string;
    description: string;
    colors: string[];
    delay?: number;
}

const BrandingCard: React.FC<BrandingProjectProps> = ({
                                                          logo,
                                                          brandName,
                                                          industry,
                                                          description,
                                                          colors,
                                                          delay = 0
                                                      }) => {
    return (
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={delay}>
            <div className="card project-card h-100 ">
                <div className="card-body">
                    <div className="logo-container mb-4">
                        <img src={logo} className="brand-logo" alt={`${brandName} logo`} />
                    </div>
                    <h3 className="brand-name h4 mb-2">{brandName}</h3>
                    <span className="industry-tag mb-3">{industry}</span>
                    <p className="brand-description text-white-50">{description}</p>
                    <div className="color-palette mt-3">
                        {colors.map((color, index) => (
                            <div
                                key={index}
                                className="color-swatch"
                                style={{ backgroundColor: color }}
                                title={color}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const BrandingProjectSection: React.FC = () => {
    return (
        <section className="branding-section py-5" id="branding">
            <div className="container">
                <div className="text-center mb-5" data-aos="fade-up">
                    <h2 className="display-5 fw-bold text-white">Branding</h2>
                    <p className="lead text-description">
                        Crafting memorable brand identities that leave lasting impressions
                    </p>
                </div>
                <div className="row g-4 justify-content-center">
                    {brandingProjects.map((project, index) => (
                        <BrandingCard
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

