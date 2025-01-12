import React, { FormEvent } from 'react';

export const Contact: React.FC = () => {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Add form submission logic here
    };

    return (
        <section className="contact-section" id="contact">
            <div className="container">
                <div className="text-center mb-5" data-aos="fade-right">
                    <h2 className="display-5 fw-bold text-white">Contact Us</h2>
                    <p className="lead text-description">Have a project in mind? Let's talk!</p>
                </div>
                <div className="row g-4 justify-content-center">
                    <div className="col-lg-8" data-aos="fade-up">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="row g-3 align-self-center">
                                <div className="col-md-6">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" required />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="phone" className="form-label">Phone Number (Optional)</label>
                                    <input type="tel" className="form-control" id="phone" />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input type="email" className="form-control" id="email" required />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="message" className="form-label">Your Message</label>
                                    <textarea className="form-control" id="message" rows={5} required></textarea>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-contact btn-lg w-100">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
