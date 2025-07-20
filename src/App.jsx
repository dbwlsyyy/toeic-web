import { Route, Routes, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';

import './App.css';
import Home from './pages/Home';
import Day from './pages/Day';

function App() {
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
        <div>
            <nav
                ref={headerRef}
                id="header"
                className={isScrolled ? 'shrunk' : ''}
            >
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

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/day/:id" element={<Day />} />
                <Route path="*" element={<div>404 Page Not Found</div>} />
            </Routes>
        </div>
    );
}

export default App;
