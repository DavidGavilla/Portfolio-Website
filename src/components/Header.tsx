import React from "react";
import "./Header.css";
import { homeTranslations } from "../translations/homeTranslations";
import { useLanguage } from "../context/languageContext";

const Header: React.FC = () => {
    const { language, setLanguage } = useLanguage();
    const [isDarkMode, setIsDarkMode] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const t = homeTranslations[language];

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
    };

    const handleToggle = () => {
        setIsDarkMode(!isDarkMode);
        console.log("Toggle theme clicked");
    };

    return (
        <div className="h-main-container">
            <div className="h-name-container">
                <h1 className="h-tittle">David Gavilla</h1>

                <button
                    className={`h-hamburger ${isMenuOpen ? "active" : ""}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            <nav className={`h-nav-container ${isMenuOpen ? "open" : ""}`}>
                <button className="h-nav-container-button" onClick={() => scrollToSection("about")}>
                    {t.header.about}
                </button>

                <button className="h-nav-container-button" onClick={() => scrollToSection("skills")}>
                    {t.header.skills}
                </button>

                <button className="h-nav-container-button" onClick={() => scrollToSection("projects")}>
                    {t.header.projects}
                </button>

                <button className="h-nav-container-button" onClick={() => scrollToSection("resume")}>
                    {t.header.resume}
                </button>

                <button className="h-nav-container-button" onClick={() => scrollToSection("contact")}>
                    {t.header.contact}
                </button>

                <div className="h-language-switch">
                    <button
                        type="button"
                        className={`h-language-button ${language === "en" ? "active" : ""}`}
                        onClick={() => setLanguage("en")}
                    >
                        EN
                    </button>

                    <button
                        type="button"
                        className={`h-language-button ${language === "es" ? "active" : ""}`}
                        onClick={() => setLanguage("es")}
                    >
                        ES
                    </button>
                </div>

                <button onClick={handleToggle} className="h-theme-toggle" aria-label="Toggle Night Mode">
                    <svg className="h-theme-icon" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M12.3,2a10,10,0,0,0-1.9,0.1,10.2,10.2,0,0,0-1,0.5,9.6,9.6,0,0,0-2.3,1.6A10.2,10.2,0,0,0,4.6,7.5,10,10,0,0,0,4.1,12a10.1,10.1,0,0,0,4.5,8.5,10.1,10.1,0,0,0,7.2,1.3,9.7,9.7,0,0,0,3.3-1.4A10,10,0,0,0,21.8,17,1,1,0,0,0,21.3,16a1,1,0,0,0-.9.2,8.2,8.2,0,0,1-10.3-2.1,8,8,0,0,1-1.3-4.1A8.2,8.2,0,0,1,10.5,3.6,1,1,0,0,0,11.3,2a1,1,0,0,0,.6-.3A1.2,1.2,0,0,0,12.3,2Z" />
                    </svg>
                </button>
            </nav>
        </div>
    );
};

export default Header;