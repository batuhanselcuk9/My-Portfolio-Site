import React from "react";
import "./Projects.css";
import calculatorImg from "../assets/calculator.png";
import websiteImg from "../assets/website.png";

const projects = [
    {
        title: "Basic Calculator with React",
        description:
            "A simple calculator built with React. Performs basic arithmetic operations with clean UI.",
        image: calculatorImg,
        github: "https://github.com/batuhanselcuk9/Basic-Calculator-with-REACT",
        demo: "https://reactbasiccalculatorapp.netlify.app/",
        tags: ["React", "JavaScript", "CSS"],
    },
    {
        title: "Mangata & Gallo Website",
        description:
            "My first website project. A responsive jewelry site created with HTML, CSS, and basic JS.",
        image: websiteImg,
        github: "https://github.com/batuhanselcuk9/My-First-Site",
        demo: "https://mangatagallojwlr.netlify.app/",
        tags: ["HTML", "CSS", "JavaScript"],
    },
];

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <h2>My Projects 🚀</h2>
            <div className="project-grid">
                {projects.map((p, i) => (
                    <div className="project-card" data-aos="fade-up">
                        <img src={p.image} alt={p.title} />
                        <h3>{p.title}</h3>
                        <p>{p.description}</p>
                        <div className="links">
                            <a href={p.github} target="_blank" rel="noreferrer">GitHub</a>
                            <a href={p.demo} target="_blank" rel="noreferrer">Demo</a>
                        </div>
                        <div className="tags">
                            {p.tags.map((tag, j) => (
                                <span key={j} className="tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;