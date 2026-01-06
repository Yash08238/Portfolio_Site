import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../data';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-content">
                <a href="#" className="logo text-gradient">{personalInfo.name}</a>

                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>

                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <li><a href="#hero" className="nav-link" onClick={toggleMenu}>Home</a></li>
                    <li><a href="#about" className="nav-link" onClick={toggleMenu}>About</a></li>
                    <li><a href="#projects" className="nav-link" onClick={toggleMenu}>Projects</a></li>
                    <li><a href="#achievements" className="nav-link" onClick={toggleMenu}>Achievements</a></li>
                    <li><a href="#contact" className="nav-link" onClick={toggleMenu}>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
