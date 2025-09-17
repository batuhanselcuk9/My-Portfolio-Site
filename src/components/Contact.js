import React from "react";
import { FaUser, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import "./Contact.css";

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <h2>Contact Me</h2>

            <div className="contact-card">
                <form
                    name="contact"
                    method="POST"
                    action="/thank-you"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                >
                    {/* ✅ Netlify için gizli inputlar */}
                    <input type="hidden" name="form-name" value="contact" />
                    <p style={{ display: "none" }}>
                        <label>
                            Don’t fill this out if you’re human: <input name="bot-field" />
                        </label>
                    </p>

                    {/* ✅ İkonlu input alanları */}
                    <div className="input-group">
                        <FaUser className="input-icon" />
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                        />
                    </div>

                    <div className="input-group">
                        <FaEnvelope className="input-icon" />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                        />
                    </div>

                    <div className="input-group textarea-group">
                        <MdMessage className="input-icon" />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            required
                        ></textarea>
                    </div>

                    {/* ✅ Buton */}
                    <button type="submit">
                        <FaPaperPlane style={{ marginRight: "8px" }} /> Send Message 🚀
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;