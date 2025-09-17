import React from "react";
import "./Footer.css";
import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";

const Footer = () => {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Batuhan Selçuk 🚀</p>
            <div className="socials">
                <a
                    href="https://github.com/batuhanselcuk9?tab=repositories"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={githubIcon} alt="GitHub" />
                </a>
                <a
                    href="https://linkedin.com/in/batuhan-selcuk-74637b22a"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={linkedinIcon} alt="LinkedIn" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;