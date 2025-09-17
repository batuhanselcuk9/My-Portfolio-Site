import React from "react";
import "./Header.css";

const Header = ({ darkMode, setDarkMode }) => {
    return (
        <header className="header">
            <div className="logo">Batuhan 🚀</div>
            <nav>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
                <button
                    className="dark-toggle"
                    onClick={() => setDarkMode(!darkMode)}
                >
                    {darkMode ? "☀️" : "🌙"}
                </button>
            </nav>
        </header>
    );
};

export default Header;