import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const headerRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <nav ref={headerRef} id="header" className={isScrolled ? 'shrunk' : ''}>
            <h2>
                <FontAwesomeIcon icon={faGraduationCap} /> 토익 영단어
            </h2>
            <div>
                <Link to="/">
                    <button id="btn-nav">Home</button>
                </Link>
                <button id="btn-nav">Menu</button>
            </div>
        </nav>
    );
}

export default Header;
