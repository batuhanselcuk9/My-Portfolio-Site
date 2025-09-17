import React from "react";
import avatar from "../assets/avatar.jpg";
import "./Landing.css";

const Landing = () => {
    return (
        <section className="landing">
            <img
                src={avatar}
                alt="Batuhan Selçuk"
                className="avatar"
                data-aos="fade-in"
                data-aos-delay="100"
            />
            <h1 data-aos="fade-up" data-aos-delay="300">Hi, I'm Batuhan 🚀</h1>
            <p data-aos="fade-up" data-aos-delay="500">
                Full-Stack Developer 🚀 | Turning Ideas Into Scalable Web Apps
            </p>
            <a href="#projects" className="btn" data-aos="zoom-in" data-aos-delay="700">
                View My Projects
            </a>
        </section>
    );
};

export default Landing;