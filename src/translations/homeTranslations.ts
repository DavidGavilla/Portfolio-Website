export const homeTranslations = {
    en: {

        header: {
            about: "About",
            skills: "Skills",
            projects: "Projects",
            resume: "Resume",
            contact: "Contact",
        },

        heroSubtitle: "Full Stack Developer",

        heroTitle:
            "Building modern web apps with clean code and AI.",

        heroDescription:
            "I’m a Full Stack Software Developer specialized in building modern, scalable applications enhanced with AI solutions. I help businesses and individuals turn ideas into high-performing digital products by combining clean frontend experiences, solid backend architecture, and intelligent automation.",

        aboutSection: {
            titleFirst: "About",
            titleHighlight: "Me",
        },


        skillsSection: {
            titleFirst: "My",
            titleHighlight: "Skills",

            description:
                "Technologies I use to build full stack applications.",

            categories: [
                {
                    category: "Backend",
                    items: ["Java", "Spring Boot", "Django", "Python"],
                },

                {
                    category: "Frontend",
                    items: ["React", "TypeScript", "HTML", "CSS"],
                },

                {
                    category: "Databases",
                    items: ["SQL", "MySQL"],
                },

                {
                    category: "Tools & DevOps",
                    items: ["Docker", "GitHub"],
                },
            ],
        },

        projectsSection: {
            titleFirst: "My",
            titleHighlight: "Projects",
        },

        resumeSection: {
            titleFirst: "My",
            titleHighlight: "Resume",
        },
    },

    es: {
        
        header: {
            about: "Sobre mí",
            skills: "Skills",     // "Skills" o "Tecnologías" se usa mucho, pero "Skills" clava el ancho
            projects: "Proyectos",
            resume: "CV",          // "CV" mantiene los botones perfectamente alineados y del mismo tamaño
            contact: "Contacto",
        },
        heroSubtitle: "Desarrollador Full Stack",

        heroTitle:
            "Creo aplicaciones web modernas con código limpio e IA.",

        heroDescription:
            "Soy desarrollador Full Stack especializado en crear apps modernas y escalables con IA. Ayudo a empresas y profesionales a transformar ideas en productos digitales de alto rendimiento, combinando un frontend impecable, una arquitectura backend sólida y automatización inteligente.",

        
        aboutSection: {
            titleFirst: "Sobre",
            titleHighlight: "mí",
        },

        skillsSection: {
            titleFirst: "Mis",
            titleHighlight: "Habilidades",

            description:
                "Tecnologías que uso para crear aplicaciones full stack.",

            categories: [
                {
                    category: "Backend",
                    items: ["Java", "Spring Boot", "Django", "Python"],
                },

                {
                    category: "Frontend",
                    items: ["React", "TypeScript", "HTML", "CSS"],
                },

                {
                    category: "Bases de datos",
                    items: ["SQL", "MySQL"],
                },

                {
                    category: "Herramientas y DevOps",
                    items: ["Docker", "GitHub"],
                },
            ],
        },

        projectsSection: {
            titleFirst: "Mis",
            titleHighlight: "Proyectos",
        },

        resumeSection: {
            titleFirst: "Mi",
            titleHighlight: "curriculum",
        },


    },
};

export type Language = keyof typeof homeTranslations;