import React from 'react';

export const HeroSection: React.FC = () => {
    return (
        <section className="home-section home-full-height  bg-gradient" id="home" style={{background: "transparent"}}>
            <div className="titan-caption">
                <div className="caption-content">
                    <div className="logo-container" style={{textAlign: 'center', margin: '20px 0'}}>
                        <img
                            className="logo-img"
                            src="https://res.cloudinary.com/dkznriytt/image/upload/t_720/v1721718424/g2-site/a7admjkajwxxs72k69m2.png"
                            alt="Logo"
                        />
                    </div>
                    <a className="section-scroll btn hero-btn btn-lg" href="#services">Learn More</a>
                </div>
            </div>
        </section>
    );
};
