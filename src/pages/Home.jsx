import { useEffect, useState } from 'react';
import DayButton from '../comonents/DayButton';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
    const [days, setDays] = useState(() => {
        const savedDays = localStorage.getItem('days');
        return savedDays ? JSON.parse(savedDays) : [];
    });

    const [randomWord, setRandomWord] = useState('');
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        localStorage.setItem('days', JSON.stringify(days));
    }, [days]);

    useEffect(() => {
        if (days.length === 0) return;
        const availableDays = days.filter((day) => {
            const wordsData = localStorage.getItem(`words_day_${day}`);
            const wordList = wordsData ? JSON.parse(wordsData) : [];
            return wordList.length > 0;
        });
        if (availableDays.length === 0) return;

        const randomDay =
            availableDays[Math.floor(Math.random() * availableDays.length)];
        const wordsData = localStorage.getItem(`words_day_${randomDay}`);
        const wordList = JSON.parse(wordsData);
        const randomWord =
            wordList[Math.floor(Math.random() * wordList.length)];

        setRandomWord(randomWord);
    }, [refresh]);

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

            <div className={styles.day_content}>
                {days.map((day) => (
                    <Link to={`/day/${day}`} key={day}>
                        <DayButton day={day} />
                    </Link>
                ))}
            </div>
            <div className={styles.todaysWord}>
                <button
                    className={styles.btn_refresh}
                    onClick={() => setRefresh((prev) => !prev)}
                >
                    🔄
                </button>
                <h2 className={styles.recommandWordTitle}>Today's Word 💡</h2>
                <p className={styles.recommandWord}>
                    {randomWord
                        ? `${randomWord.eng} ${randomWord.kor}`
                        : '단어가 없습니다.'}
                </p>
                <p>
                    오늘의 단어입니다. 이미 알고 있다면 새로고침 버튼을
                    눌러주세요!
                </p>
            </div>
        </div>
    );
}

export default Home;
