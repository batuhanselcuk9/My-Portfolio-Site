import React from "react";

const ThankYou = () => {
    return (
        <section className="thankyou" style={{ textAlign: "center", padding: "80px 20px" }}>
            <h2>🎉 Thank You!</h2>
            <p>Your message has been successfully sent. I’ll get back to you soon.</p>
            <a href="/" style={{ marginTop: "20px", display: "inline-block", color: "var(--color-accent)", fontWeight: "600" }}>
                ⬅ Back to Home
            </a>
        </section>
    );
};

export default ThankYou;