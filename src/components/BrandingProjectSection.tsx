import React from 'react';
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
    const brandingProjects = [
        {
            logo: 'https://i.vimeocdn.com/video/1740246597-34ae317d74de8f1305f45420b5644a746e26a6dc10cb96abfbf2875d4f3c8546-d?f=webp',
            brandName: "EcoVibe",
            industry: "Sustainable Fashion",
            description: "Modern, eco-conscious brand identity that reflects environmental responsibility and style.",
            colors: ['#2E7D32', '#81C784', '#C8E6C9', '#212121']
        },
        {
            logo: 'https://i.vimeocdn.com/video/1740246597-34ae317d74de8f1305f45420b5644a746e26a6dc10cb96abfbf2875d4f3c8546-d?f=webp',
            brandName: "TechFlow",
            industry: "Software Solutions",
            description: "Dynamic tech branding that communicates innovation and reliability.",
            colors: ['#1976D2', '#64B5F6', '#BBDEFB', '#424242']
        },
        {
            logo: 'https://i.vimeocdn.com/video/1740246597-34ae317d74de8f1305f45420b5644a746e26a6dc10cb96abfbf2875d4f3c8546-d?f=webp',
            brandName: "Artisan Cafe",
            industry: "Food & Beverage",
            description: "Sophisticated cafe branding that brings artisanal quality to life.",
            colors: ['#5D4037', '#8D6E63', '#D7CCC8', '#EFEBE9']
        }
    ];

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

