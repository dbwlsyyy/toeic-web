import { useEffect, useState } from 'react';
import DayButton from '../comonents/DayButton';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
    const [days, setDays] = useState(() => {
        const savedDays = localStorage.getItem('days');
        return savedDays ? JSON.parse(savedDays) : [];
    });

    useEffect(() => {
        localStorage.setItem('days', JSON.stringify(days));
    }, [days]);

    const handleAddDay = () => {
        const nextDay = days.length + 1;
        setDays((prev) => [...prev, nextDay]);
    };
    const handleDelDay = () => {
        if (days.length > 0) {
            localStorage.removeItem(`words_day_${days.at(-1)}`);
            setDays((prev) => prev.slice(0, -1));
        } else {
            alert('삭제할 데이터가 없습니다.');
        }
    };

    return (
        <div className={styles.content}>
            <div className={styles.btn_manage}>
                <button onClick={handleAddDay}>+</button>
                <button onClick={handleDelDay}>삭제</button>
            </div>

            <div>
                {days.map((day) => (
                    <Link to={`/day/${day}`} key={day}>
                        <DayButton day={day} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Home;
