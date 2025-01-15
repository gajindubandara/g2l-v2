import React, { FormEvent, useState } from 'react';
import Swal from 'sweetalert2';

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Handle form field changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const scriptURL = 'https://script.google.com/macros/s/AKfycbyxOPeXddcdIq3bPpBjN2-Ex1Qu2iwqihmPDiW16haBIN2SxKwHlnscLLVar0xxxPpM6A/exec';

        const payload = {
            ...formData,
            phone: formData.phone || 'Not Provided',
        };

        try {
            await fetch(scriptURL, {
                method: 'POST',
                mode: 'no-cors',
                body: JSON.stringify(payload),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            Swal.fire({
                icon: 'success',
                title: 'Message Sent Successfully!',
                text: 'Thank you for reaching out. We will get back to you soon.',
                timer: 3000,
                timerProgressBar: true,
                showConfirmButton: false,
                background: '#121212',
                color: '#ffffff',
                customClass: {
                    popup: 'custom-swal-popup',
                },
            });

            setFormData({ name: '', phone: '', email: '', message: '' });
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Submission Failed!',
                text: 'There was an error sending your message. Please try again later.',
                timer: 3000,
                timerProgressBar: true,
                showConfirmButton: false,
                background: '#121212',
                color: '#ffffff',
                customClass: {
                    popup: 'custom-swal-popup',
                },
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="contact-section" id="contact">
            <div className="container">
                <div className="text-center mb-5" data-aos="fade-right">
                    <h2 className="display-5 fw-bold text-white">Contact Us</h2>
                    <p className="lead text-description">Have a project in mind? Let's talk!</p>
                </div>

                {/* Preloader */}
                {isSubmitting && (
                    <div id="preloader" style={{ display: 'flex' }}>
                        <img
                            id="preloader-logo"
                            src="https://res.cloudinary.com/dkznriytt/image/upload/f_auto,q_auto/v1/g2-site/zjgue0tgbm3rj5ihdbyz"
                            alt="G2 Loading Logo"
                        />
                    </div>
                )}

                <div className="row g-4 justify-content-center">
                    <div className="col-lg-8" data-aos="fade-up">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="row g-3 align-self-center">
                                <div className="col-md-6">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="phone" className="form-label">Phone Number (Optional)</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="message" className="form-label">Your Message</label>
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <div className="col-12">
                                    <button
                                        type="submit"
                                        className="btn btn-contact btn-lg w-100"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
