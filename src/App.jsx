import { Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Day from './pages/Day';
import Header from './comonents/Header';

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/day/:id" element={<Day />} />
                <Route path="*" element={<div>404 Page Not Found</div>} />
            </Routes>
        </div>
    );
}

export default App;
