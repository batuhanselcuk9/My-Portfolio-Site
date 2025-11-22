import React from "react";
import "./Projects.css";
import calculatorImg from "../assets/calculator.png";
import websiteImg from "../assets/website.png";
import moontodoImg from "../assets/moontodo.png";
import moonflixImg from "../assets/moonflix.png";

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <h2 data-aos="fade-up">My Projects 🚀</h2>
            <div className="project-grid">

                {/* Project 1 */}
                <div className="project-card" data-aos="fade-right">
                    <img src={calculatorImg} alt="Basic Calculator Project" />
                    <h3>Basic Calculator with React</h3>
                    <p>
                        A simple calculator built with React. Performs basic arithmetic
                        operations with clean UI.
                    </p>
                    <div className="links">
                        <a
                            href="https://github.com/batuhanselcuk9/Basic-Calculator-with-REACT"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://reactbasiccalculatorapp.netlify.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Demo
                        </a>
                    </div>
                    <div className="tech-stack">
                        <span>React</span>
                        <span>JavaScript</span>
                        <span>CSS</span>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="project-card" data-aos="fade-left">
                    <img src={websiteImg} alt="Mangata & Gallo Website" />
                    <h3>Mangata & Gallo Website</h3>
                    <p>
                        My first website project. A responsive jewelry site created with
                        HTML, CSS, and basic JavaScript.
                    </p>
                    <div className="links">
                        <a
                            href="https://github.com/batuhanselcuk9/My-First-Site"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://mangatagallojwlr.netlify.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Demo
                        </a>
                    </div>
                    <div className="tech-stack">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                    </div>
                </div>

                {/* Project 3 */}
                <div className="project-card" data-aos="fade-down-right">
                    <img src={moontodoImg} alt="MoonTodo Project" />
                    <h3>MoonTodo React App</h3>
                    <p>
                        A basic todo app built with React. Performs basic todo operations with clean UI.
                    </p>
                    <div className="links">
                        <a
                            href="https://github.com/batuhanselcuk9/MoonTodo"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://github.com/batuhanselcuk9/MoonTodo"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Demo
                        </a>
                    </div>
                    <div className="tech-stack">
                        <span>React</span>
                        <span>JavaScript</span>
                        <span>CSS</span>
                        <span>Vite</span>
                    </div>
                </div>

                {/* Project 4 */}
                <div className="project-card" data-aos="fade-down-left">
                    <img src={moonflixImg} alt="MoonFlix TMDB Api" />
                    <h3>MoonFlix TMDB Api</h3>
                    <p>
                        A movie finder app built with React. Uses TMDB API to fetch movie data.
                    </p>
                    <div className="links">
                        <a
                            href="https://github.com/batuhanselcuk9/MoonFlix"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://moonflixtmdb.netlify.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Demo
                        </a>
                    </div>
                    <div className="tech-stack">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                        <span>React</span>
                        <span>TMDB API</span>
                        <span>Vite</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Projects;