import { Route, Routes, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

import './App.css';
import Home from './pages/Home';
import Day from './pages/Day';

function App() {
    return (
        <div>
            <nav id="header">
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
