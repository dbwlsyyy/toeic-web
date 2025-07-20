import React, { useEffect, useState } from 'react';
import styles from './Day.module.css';
import { useParams } from 'react-router-dom';
import AddWordModal from '../comonents/AddWordModal';
import WordTable from '../comonents/WordTable';

function Day() {
    const { id: dayId } = useParams();

    const [words, setWords] = useState(() => {
        const savedWords = localStorage.getItem(`words_day_${dayId}`);
        return savedWords ? JSON.parse(savedWords) : [];
    });

    useEffect(() => {
        localStorage.setItem(`words_day_${dayId}`, JSON.stringify(words));
    }, [words, dayId]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleNewWordAdd = (newWord) => {
        const newId =
            words.length > 0 ? Math.max(...words.map((w) => w.id)) + 1 : 1;

        const wordWithFullData = {
            id: newId,
            eng: newWord.eng,
            kor: newWord.kor,
            isChecked: false,
        };

        setWords((prevWords) => [...prevWords, wordWithFullData]);
    };

    const handleOnCheck = (wordId) => {
        setWords((prev) =>
            prev.map((w) =>
                w.id === wordId ? { ...w, isChecked: !w.isChecked } : w
            )
        );
    };

    const handleDelDay = () => {};

    return (
        <div>
            <div className={styles.btn_manage}>
                <button onClick={() => setIsModalOpen(true)}>+</button>
                <button onClick={handleDelDay}>삭제</button>
            </div>
            <h2>Day {dayId}</h2>
            <div className={styles.table_content}>
                {words.length > 0 ? (
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>암기 체크</th>
                                <th>단어</th>
                                <th>뜻</th>
                                <th>가림막</th>
                            </tr>
                        </thead>
                        <tbody>
                            {words.map((word) => (
                                <WordTable
                                    key={word.id}
                                    word={word}
                                    onCheck={handleOnCheck}
                                />
                            ))}
                        </tbody>
                    </table>
                ) : (
                    '추가된 단어가 없습니다. 단어를 추가해보세요!'
                )}
            </div>
            <AddWordModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAddWord={handleNewWordAdd}
            />
        </div>
    );
}

export default Day;
