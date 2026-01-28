import cert1 from '../assets/certificates/cert1.jpg';
import cert2 from '../assets/certificates/cert2.jpg';
import cert3 from '../assets/certificates/cert3.jpg';
import cert4 from '../assets/certificates/cert4.jpg';
import cert5 from '../assets/certificates/cert5.jpg';
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
            { label: "Certifications", value: "5" },
            { label: "Commits", value: "100+" }
        ]
    },
    certifications: [
        { title: "Solutions Architecture Job Simulation", issuer: "Forage", year: "2026", link: "#", image: cert1 },
        { title: "Frontend Developer (React)", issuer: "HackerRank", year: "2026", link: "#", image: cert2 },
        { title: "AWS Students Community Day", issuer: "Parul University", year: "2025", link: "#", image: cert3 },
        { title: "Ideathon 2K23 - 1st Rank", issuer: "Silver Oak University", year: "2023", link: "#", image: cert4 },
        { title: "Node (Basic)", issuer: "HackerRank", year: "2026", link: "#", image: cert5 }
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
        email: "yashc1024@gmail.com",
        socials: {
            github: "https://github.com/Yash08238",
            linkedin: "https://www.linkedin.com/in/yash-chauhan0710",
            email: "mailto:yashc1024@gmail.com"
        },
        footerStartYear: "2026",
        footerName: "Yash Chauhan"
    }
}
