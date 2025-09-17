import React from "react";
import "./About.css";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython, FaGitAlt } from "react-icons/fa";
import { SiUnity, SiDjango, SiMysql, SiMongodb, SiFastapi } from "react-icons/si";

const skills = [
    { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
    { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
    { name: "JavaScript", icon: <FaJsSquare color="#F7DF1E" /> },
    { name: "React", icon: <FaReact color="#61DAFB" /> },
    { name: "Python", icon: <FaPython color="#3776AB" /> },
    { name: "Git/GitHub", icon: <FaGitAlt color="#F05032" /> },
    { name: "Unity (beginner)", icon: <SiUnity color="#000000" /> },
    { name: "Django", icon: <SiDjango color="#092E20" /> },
    { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
    { name: "NoSQL (MongoDB)", icon: <SiMongodb color="#47A248" /> },
    { name: "RestfulAPI", icon: "🌐" },
    { name: "FastAPI", icon: <SiFastapi color="#009688" /> },
];

const About = () => {
    return (
        <section id="about" className="about" data-aos="fade-up">
            <h2>About Me 👨‍💻</h2>
            <p>
                Hi, I’m Batuhan 🚀 a passionate <strong>Full-Stack Developer</strong>.
                I enjoy building scalable web applications using <strong>React</strong>,
                <strong> Node.js</strong>, and <strong>Python</strong>.
                I’m also learning <strong>game development</strong> as a creative outlet.
            </p>
            <p>
                I’m constantly learning and improving my skills in web development.
                Over the past months, I’ve built projects ranging from simple apps
                like calculators to more advanced full-stack ideas.
            </p>
            <p>
                My goal is to become a versatile Full-Stack Developer capable of
                designing modern user interfaces and building powerful backends.
                I’m also exploring game development as a side passion 🎮🚀
            </p>

            <h3>My Skills ⚡</h3>
            <div className="skills">
                {skills.map((skill, i) => (
                    <div key={i} className="skill-card">
                        <span className="skill-icon">{skill.icon}</span>
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>

            {/* ✅ Download CV butonu */}
            <a
                href="/Batuhan-Selcuk-CV.pdf"
                download
                className="cv-btn"
            >
                Download CV 📄
            </a>
        </section>
    );
};

export default About;