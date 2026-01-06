import { Github, Layout, Server, Smartphone, Terminal } from 'lucide-react';
import profileImg from './assets/profile.jpg';
import achievementSmartCoder from './assets/achievement_smart_coder.png';
import achievementAws from './assets/achievement_aws.jpg';
import achievementIdeathon from './assets/achievement_ideathon.jpg';
import project1Img from './assets/project_1_dashboard.png';

export const personalInfo = {
    name: "Yash",
    title: "Full Stack Developer",
    email: "yashc1024@gmail.com",
    phone: "+91 8320120356",
    location: "Ahmedabad , Gujarat",
    socials: {
        github: "https://github.com/Yash08238",
        linkedin: "https://www.linkedin.com/in/yash-chauhan0710/",
        twitter: "https://x.com/Yash_o71"
    },
    photo: profileImg
};

export const heroContent = {
    greeting: "Hello, I'm",
    description: "I build modern, scalable, and responsive web applications with a focus on clean design and user experience."
};

export const aboutContent = {
    title: "About Me",
    bio: [
        "I'm a passionate developer with a knack for creating intuitive and dynamic user experiences. My journey in web development started 3 years ago, and I've since worked on various innovative projects ranging from small business websites to complex enterprise applications.",
        "When I'm not coding, you can find me exploring new technologies, contributing to open source, or gaming."
    ],
    skills: [
        { icon: Layout, name: 'Frontend', items: ['React', 'Vue', 'Tailwind', 'Framer'] },
        { icon: Server, name: 'Backend', items: ['Node.js', 'Express', 'Python', 'PostgreSQL'] },
        { icon: Smartphone, name: 'Mobile', items: ['React Native', 'Flutter'] },
        { icon: Terminal, name: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma'] },
    ]
};

export const projectsContent = [
    {
        id: 1,
        title: "E-Commerce Dashboard",
        description: "A comprehensive analytics dashboard for online retailers with real-time data visualization.",
        tags: ["React", "Chart.js", "Tailwind"],
        image: project1Img,
        github: "#",
        demo: "#"
    },
    {
        id: 2,
        title: "AI Image Generator",
        description: "Web application that uses OpenAI's DALL-E API to generate creative images from text prompts.",
        tags: ["Next.js", "OpenAI API", "Stripe"],
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000",
        github: "#",
        demo: "#"
    },
    {
        id: 3,
        title: "Social Media App",
        description: "Full-featured social platform with real-time messaging, feed updates, and user profiles.",
        tags: ["React", "Firebase", "Redux"],
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
        github: "#",
        demo: "#"
    }
];

export const achievementsContent = [
    {
        id: 1,
        title: "Ideathon 2K23 Winner",
        description: "Awarded 1st Rank in Ideathon 2K23 for innovative conceptualization and problem-solving.",
        tags: ["Winner", "Ideathon"],
        image: achievementIdeathon,
        date: "July 2023"
    },
    {
        id: 2,
        title: "Smart Coder Certification",
        description: "Certified Smart Coder by Smart Interviews, demonstrating proficiency in data structures and algorithms.",
        tags: ["Certification", "DSA"],
        image: achievementSmartCoder,
        date: "2025"
    },
    {
        id: 3,
        title: "AWS Community Day",
        description: "Active participant in the AWS Students Community Day, engaging with cloud computing technologies.",
        tags: ["AWS", "Cloud"],
        image: achievementAws,
        date: "Dec 2025"
    }
];
