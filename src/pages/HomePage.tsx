import React, { useState } from "react";
import Header from "../components/Header";
import ProfilePic from "../media/profilePic.jpeg";
import "./HomePage.css";
import { useLanguage } from "../context/languageContext";

import { homeTranslations } from "../translations/homeTranslations";

const HomePage: React.FC = () => {
    const { language, setLanguage } = useLanguage();

    const t = homeTranslations[language];

    return (
        <div className="hm-main-container">
            <Header />

            {/* Language Switch */}
            <div className="language-switch">
                <button onClick={() => setLanguage("en")}>EN</button>
                <button onClick={() => setLanguage("es")}>ES</button>
            </div>

            {/* Hero Section */}
            <section className="hm-first-container">
                <div className="hm-about-myself-container">
                    <p className="hm-subtitle">
                        {t.heroSubtitle}
                    </p>

                    <h1 className="hm-title">
                        {t.heroTitle}
                    </h1>

                    <p className="hm-description">
                        {t.heroDescription}
                    </p>
                </div>

                <div className="hm-profile-pic-container">
                    <img
                        className="hm-profile-pic"
                        src={ProfilePic}
                        alt="David Gavilla"
                    />
                </div>
            </section>

            

         {/* Projects Section */}
            <section className="project-container">
                <h2 className="skills-title">
                    <span>
                        {t.aboutSection.titleFirst}
                    </span>

                    <strong>
                        {t.aboutSection.titleHighlight}
                    </strong>
                </h2>

                <hr className="line-after-title" />
            </section>

            {/* Skills Section */}
            <section className="skills-container">
                <div className="section-heading">
                    <h2 className="skills-title">
                        <span>
                            {t.skillsSection.titleFirst}
                        </span>

                        <strong>
                            {t.skillsSection.titleHighlight}
                        </strong>
                    </h2>

                    <p className="skills-description">
                        {t.skillsSection.description}
                    </p>

                    <hr className="line-after-title" />
                </div>

                <div className="skills-grid">
                    {t.skillsSection.categories.map((group) => (
                        <div
                            className="skills-category"
                            key={group.category}
                        >
                            <h3 className="category-title">
                                {group.category}
                            </h3>

                            <div className="skills-list">
                                {group.items.map((skill) => (
                                    <div
                                        className="skill-container"
                                        key={skill}
                                    >
                                        <h4 className="skill-title">
                                            {skill}
                                        </h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects Section */}
            <section className="project-container">
                <h2 className="skills-title">
                    <span>
                        {t.projectsSection.titleFirst}
                    </span>

                    <strong>
                        {t.projectsSection.titleHighlight}
                    </strong>
                </h2>

                <hr className="line-after-title" />
            </section>


            {/* Projects Section */}
            <section className="project-container">
                <h2 className="skills-title">
                    <span>
                        {t.resumeSection.titleFirst}
                    </span>

                    <strong>
                        {t.resumeSection.titleHighlight}
                    </strong>
                </h2>

                <hr className="line-after-title" />
            </section>
        </div>
    );
};

export default HomePage;