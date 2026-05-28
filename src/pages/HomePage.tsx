import React from "react";
import Header from "../components/Header";
import ProfilePic from "../media/profilePic.jpeg";
import SonEspasesBotHub from "../media/SonEspasesBotHub.png";
import "./HomePage.css";
import { useLanguage } from "../context/languageContext";
import { homeTranslations } from "../translations/homeTranslations";

const HomePage: React.FC = () => {
    const { language, setLanguage } = useLanguage();

    const t = homeTranslations[language];

    return (
        <div className="hm-main-container">
            <Header />



            {/* Hero Section */}
            <section className="hm-first-container">
                <div className="hm-about-myself-container">
                    <p className="hm-subtitle">{t.heroSubtitle}</p>

                    <h1 className="hm-title">{t.heroTitle}</h1>

                    <p className="hm-description">{t.heroDescription}</p>
                </div>

                <div className="hm-profile-pic-container">
                    <img
                        className="hm-profile-pic"
                        src={ProfilePic}
                        alt="David Gavilla"
                    />
                </div>
            </section>

            {/* About Me Section */}
            <section id="about" className="about-container">
                <div className="section-heading">
                    <h2 className="skills-title">
                        <span>{t.aboutSection.titleFirst}</span>
                        <strong>{t.aboutSection.titleHighlight}</strong>
                    </h2>

                    <hr className="line-after-title" />
                </div>

                <div className="about-card">
                    {t.aboutSection.description.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                    ))}
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="skills-container">
                <div className="section-heading">
                    <h2 className="skills-title">
                        <span>{t.skillsSection.titleFirst}</span>
                        <strong>{t.skillsSection.titleHighlight}</strong>
                    </h2>

                    <p className="skills-description">
                        {t.skillsSection.description}
                    </p>

                    <hr className="line-after-title" />
                </div>

                <div className="skills-grid">
                    {t.skillsSection.categories.map((group) => (
                        <div className="skills-category" key={group.category}>
                            <h3 className="category-title">{group.category}</h3>

                            <div className="skills-list">
                                {group.items.map((skill) => (
                                    <div className="skill-container" key={skill}>
                                        <h4 className="skill-title">{skill}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="project-container">
                <h2 className="skills-title">
                    <span>{t.projectsSection.titleFirst}</span>
                    <strong>{t.projectsSection.titleHighlight}</strong>
                </h2>

                <hr className="line-after-title" />

                <div className="projects-grid">
                    <div className="project-card">
                        <div className="project-image-wrapper">
                            <img
                                className="project-image"
                                src={SonEspasesBotHub}
                                alt={t.projectsSection.botHub.title}
                            />
                        </div>

                        <div className="project-content">
                            <h2 className="project-card-title">
                                {t.projectsSection.botHub.title}
                            </h2>

                            <p className="project-description">
                                {t.projectsSection.botHub.description}
                            </p>

                            <div className="project-tech-stack">
                                {t.projectsSection.botHub.techStack.map((tech) => (
                                    <span className="project-tech" key={tech}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="project-card">
                        <div className="project-content">
                            <h2 className="project-card-title">
                                {t.projectsSection.comingSoon.title}
                            </h2>

                            <p className="project-description">
                                {t.projectsSection.comingSoon.description}
                            </p>

                            <div className="project-tech-stack">
                                {t.projectsSection.comingSoon.techStack.map((tech) => (
                                    <span className="project-tech" key={tech}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Resume Section */}
            <section id="resume" className="project-container">
                <h2 className="skills-title">
                    <span>{t.resumeSection.titleFirst}</span>
                    <strong>{t.resumeSection.titleHighlight}</strong>
                </h2>

                <hr className="line-after-title" />

                <div className="resume-card">
                    <div className="resume-content">
                        <h2 className="project-card-title">
                            {t.resumeSection.cardTitle}
                        </h2>

                        <p className="project-description">
                            {t.resumeSection.description}
                        </p>

                        <a
                            href="/Developer_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="resume-button"
                        >
                            {t.resumeSection.button}
                        </a>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact-container">
                <div className="section-heading">
                    <h2 className="skills-title">
                        <span>{t.contactSection.titleFirst}</span>
                        <strong>{t.contactSection.titleHighlight}</strong>
                    </h2>

                    <p className="skills-description">
                        {t.contactSection.description}
                    </p>

                    <hr className="line-after-title" />
                </div>

                <div className="contact-card">
                    <div className="contact-info-container">
                        <div className="contact-info-card">
                            <h3 className="contact-info-title">
                                {t.contactSection.contactInfo.title}
                            </h3>

                            <div className="contact-info-item">
                                <span className="contact-info-label">
                                    {t.contactSection.contactInfo.email}
                                </span>

                                <p className="contact-info-value">
                                    {t.contactSection.contactInfo.emailValue}
                                </p>
                            </div>

                             <div className="contact-info-item">
                                <span className="contact-info-label">
                                    {t.contactSection.contactInfo.phone}
                                </span>

                                <p className="contact-info-value">
                                    +34 640 157 129
                                </p>
                            </div>


                            <div className="contact-info-item">
                                <span className="contact-info-label">
                                    {t.contactSection.contactInfo.location}
                                </span>

                                <p className="contact-info-value">
                                    {t.contactSection.contactInfo.locationValue}
                                </p>
                            </div>

                            <div className="contact-info-item">
                                <span className="contact-info-label">
                                    {t.contactSection.contactInfo.availability}
                                </span>

                                <p className="contact-info-value">
                                    {t.contactSection.contactInfo.availabilityValue}
                                </p>
                            </div>
                        </div>

                        <form
                            className="contact-form"
                            action="https://formsubmit.co/davidgavilla@gmail.com"
                            method="POST"
                        >
                            <input type="hidden" name="_captcha" value="false" />

                            <input
                                type="hidden"
                                name="_subject"
                                value="New Portfolio Contact Message"
                            />

                            <div className="contact-input-group">
                                <label>{t.contactSection.form.name}</label>

                                <input
                                    type="text"
                                    name="name"
                                    placeholder={t.contactSection.form.namePlaceholder}
                                    required
                                />
                            </div>

                            <div className="contact-input-group">
                                <label>{t.contactSection.form.email}</label>

                                <input
                                    type="email"
                                    name="email"
                                    placeholder={t.contactSection.form.emailPlaceholder}
                                    required
                                />
                            </div>

                            <div className="contact-input-group">
                                <label>{t.contactSection.form.message}</label>

                                <textarea
                                    name="message"
                                    placeholder={t.contactSection.form.messagePlaceholder}
                                    rows={6}
                                    required
                                />
                            </div>

                            <button type="submit" className="contact-button">
                                {t.contactSection.form.button}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            

            
        </div>
    );
};

export default HomePage;