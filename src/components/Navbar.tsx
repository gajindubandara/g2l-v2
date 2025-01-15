import React, { useEffect, useState, useRef } from 'react';

export const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isTransparent, setIsTransparent] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAnimatingItems, setIsAnimatingItems] = useState(false);
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
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                toggleButtonRef.current &&
                !toggleButtonRef.current.contains(event.target as Node)
            ) {
                handleMenuClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    const handleMenuToggle = () => {
        if (!isMenuOpen) {
            setIsMenuOpen(true);
            setTimeout(() => {
                setIsAnimatingItems(true);
            }, 200);
        } else {
            handleMenuClose();
        }
    };

    const handleMenuClose = () => {
        setIsAnimatingItems(false);
        setTimeout(() => {
            setIsMenuOpen(false);
        }, 200);
    };

    const handleLinkClick = () => {
        handleMenuClose();
    };

    const navItems = [
        { text: 'Home', href: '#home' },
        { text: 'Services', href: '#services' },
        { text: 'Websites', href: '#projects' },
        { text: 'Music', href: '#music' },
        { text: 'Branding', href: '#branding' },
        { text: 'Contact Us', href: '#contact' }
    ];

    return (
        <nav className={`navbar navbar-expand-lg fixed-top ${isTransparent ? 'transparent' : ''} ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <a className="navbar-brand fw-bold" href="#">
                    <img
                        src='https://res.cloudinary.com/dkznriytt/image/upload/c_fill,w_200/v1721718424/g2-site/a7admjkajwxxs72k69m2.png'
                        alt="G2 Labs Icon"
                        className="brand-icon"
                    />
                    {/*<span style={{marginBottom:"2px"}}>G2 Labs</span> */}
                </a>
                <button
                    ref={toggleButtonRef}
                    className="navbar-toggler"
                    type="button"
                    onClick={handleMenuToggle}
                    aria-expanded={isMenuOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    ref={menuRef}
                    className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''} ${isAnimatingItems ? 'items-animated' : ''}`}
                >
                    <ul className="navbar-nav ms-auto">
                        {navItems.map((item, index) => (
                            <li
                                key={item.text}
                                className="nav-item"
                                style={{ '--item-index': index } as React.CSSProperties}
                            >
                                <a
                                    className="nav-link"
                                    href={item.href}
                                    onClick={handleLinkClick}
                                >
                                    {item.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};