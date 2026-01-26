import { Home, User, Mail, Github, Linkedin, Code, Award, ExternalLink } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

export const portfolioData = {
    hero: {
        firstName: "YASH",
        lastName: "CHAUHAN",
        role: "Student & Developer",
    },
    about: {
        title: {
            line1: "Crafting Digital",
            line2: "Experiences"
        },
        description: "I'm a passionate developer focused on building immersive web experiences. With a keen eye for design and a love for clean code, I transform ideas into interactive reality. My journey is driven by curiosity and the constant pursuit of innovation.",
        profileImage: profileImg,
        stats: [
            { label: "Hackathons", value: "3" },
            { label: "Projects", value: "2" },
            { label: "Certifications", value: "8" },
            { label: "Commits", value: "500+" }
        ]
    },
    certifications: [
        { title: "Certified React Developer", issuer: "Meta", year: "2025", link: "#" },
        { title: "AWS Cloud Practitioner", issuer: "AWS", year: "2024", link: "#" },
        { title: "Python for Data Science", issuer: "IBM", year: "2024", link: "#" },
        { title: "Web Development Bootcamp", issuer: "Udemy", year: "2024", link: "#" },
        { title: "JavaScript Algorithms", issuer: "FreeCodeCamp", year: "2023", link: "#" },
        { title: "Frontend Libraries", issuer: "FreeCodeCamp", year: "2023", link: "#" },
        { title: "Responsive Web Design", issuer: "FreeCodeCamp", year: "2023", link: "#" },
        { title: "Git & GitHub Mastery", issuer: "Udemy", year: "2023", link: "#" }
    ],
    projects: [
        {
            title: "StockFlow ERP",
            description: "A modern, full-featured inventory management system with POS, analytics, and user management.",
            tech: "React • Redux • MUI • Chart.js"
        },
        {
            title: "AI Vocab Builder",
            description: "Interactive English vocabulary learning app generating personalized lists using Google Gemini API.",
            tech: "Python • Streamlit • Gemini API"
        }
    ],
    contact: {
        heading: "Let's Create Together",
        description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
        email: "hello@example.com",
        socials: {
            github: "#",
            linkedin: "#",
            email: "mailto:hello@example.com"
        },
        footerStartYear: "2026",
        footerName: "Yash Chauhan"
    }
}
