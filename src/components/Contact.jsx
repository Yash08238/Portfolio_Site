import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { personalInfo } from '../data';
import './Contact.css';

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "e6f8987e-ed72-46a7-8345-1b026f063d26");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <>
            <section id="contact" className="section-padding">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-50px" }}
                    >
                        <h2 className="section-title">Get in <span className="text-gradient">Touch</span></h2>
                        <p className="section-subtitle">Have a project in mind? Let's work together.</p>
                    </motion.div>

                    <div className="contact-content">
                        <motion.div
                            className="contact-info glass"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ margin: "-50px" }}
                        >
                            <h3>Contact Information</h3>
                            <p>Fill up the form or contact me directly via email or social media.</p>

                            <div className="contact-details">
                                <div className="contact-item">
                                    <Mail className="contact-icon" />
                                    <span>{personalInfo.email}</span>
                                </div>
                                <div className="contact-item">
                                    <Phone className="contact-icon" />
                                    <span>{personalInfo.phone}</span>
                                </div>
                                <div className="contact-item">
                                    <MapPin className="contact-icon" />
                                    <span>{personalInfo.location}</span>
                                </div>
                            </div>

                            <div className="social-links">
                                <a href={personalInfo.socials.github} className="social-btn"><Github /></a>
                                <a href={personalInfo.socials.linkedin} className="social-btn"><Linkedin /></a>
                                <a href={personalInfo.socials.twitter} className="social-btn"><Twitter /></a>
                            </div>
                        </motion.div>

                        <motion.form
                            className="contact-form glass"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ margin: "-50px" }}
                            onSubmit={onSubmit}
                        >
                            <div className="form-group">
                                <input type="text" name="name" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Send Message <Send size={18} />
                            </button>
                            <span style={{ display: 'block', marginTop: '1rem', color: result.includes('Success') ? 'green' : 'inherit' }}>{result}</span>
                        </motion.form>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <p>&copy; 2024 Yash. All rights reserved.</p>
                        <p>Built with React & Framer Motion</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Contact;
