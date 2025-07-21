import { Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Day from './pages/Day';
import Header from './comonents/Header';
import EmptyPage from './pages/EmptyPage';

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/day/:dayId" element={<Day />} />
                <Route path="*" element={<EmptyPage />} />
            </Routes>
        </div>
    );
}

export default App;
