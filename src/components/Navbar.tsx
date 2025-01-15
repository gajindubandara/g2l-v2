import React, { useEffect, useState, useRef } from 'react';

export const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isTransparent, setIsTransparent] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const toggleButtonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        const updateNavbar = () => {
            const currentScroll = window.pageYOffset;
            const isDesktop = window.innerWidth >= 992;

            if (isDesktop) {
                if (currentScroll > 50) {
                    setIsTransparent(false);
                    setIsScrolled(true);
                } else {
                    setIsTransparent(true);
                    setIsScrolled(false);
                }
            } else {
                setIsTransparent(false);
                setIsScrolled(false);
            }
        };

        updateNavbar();
        window.addEventListener('scroll', updateNavbar);
        window.addEventListener('resize', updateNavbar);

        return () => {
            window.removeEventListener('scroll', updateNavbar);
            window.removeEventListener('resize', updateNavbar);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                isMenuOpen &&
                menuRef.current && // Ensure menuRef is not null
                !menuRef.current.contains(event.target as Node) && // safely call contains
                toggleButtonRef.current && // Ensure toggleButtonRef is not null
                !toggleButtonRef.current!.contains(event.target as Node) // Non-null assertion for toggleButtonRef
            ) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className={`navbar navbar-expand-lg fixed-top ${isTransparent ? 'transparent' : ''} ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <a className="navbar-brand fw-bold" href="#">G2 Labs</a>
                <button
                    ref={toggleButtonRef}
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-expanded={isMenuOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    ref={menuRef}
                    className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
                >
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#home" onClick={handleLinkClick}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#services" onClick={handleLinkClick}>Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects" onClick={handleLinkClick}>Websites</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#music" onClick={handleLinkClick}>Music</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#branding" onClick={handleLinkClick}>Branding</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact" onClick={handleLinkClick}>Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
