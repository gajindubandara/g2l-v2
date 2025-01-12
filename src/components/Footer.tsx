import React from 'react';

export const Footer: React.FC = () => {
    return (
        <>
            <footer className="footer-dark">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-8">
                            <h4>About Us</h4>
                            <p>We are a creative digital and technology solutions company specializing in tailored software development,
                                website creation, branding, graphic design, social media marketing, and audio engineering.</p>
                        </div>
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-6">
                                    <h4 className="mb-4">Get in Touch</h4>
                                    <div className="contact-info-item">
                                        <i className="bi bi-phone"><strong> Phone / WhatsApp</strong></i>
                                        <div>
                                            <p className="text-muted mb-0">
                                                <a href="tel:+94713886535" className="text-decoration-none">+94 (71) 388-6535</a>
                                                <br />
                                                <a href="https://wa.me/94713886535" className="text-decoration-none text-success">
                                                    <i className="bi bi-whatsapp"></i> WhatsApp
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <h4 className="mb-4">Follow Us</h4>
                                    <div className="social-links">
                                        <a href="https://www.facebook.com/profile.php?id=61571392680025&mibextid=ZbWKwL" className="text-decoration-none me-3">
                                            <i className="bi bi-facebook fs-4"></i>
                                        </a>
                                        <a href="https://www.instagram.com/gtwolabs" className="text-decoration-none me-3">
                                            <i className="bi bi-instagram fs-4"></i>
                                        </a>
                                        <a href="https://www.linkedin.com/company/gtwolabs/" className="text-decoration-none">
                                            <i className="bi bi-linkedin fs-4"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="footer-bottom">
                <div className="container">
                    &copy; {new Date().getFullYear()} G2 Labs. All Rights Reserved.
                </div>
            </div>
        </>
    );
};