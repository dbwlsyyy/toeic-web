import React, { useState } from 'react';
import styles from './WordTable.module.css';

export default function WordTable({ word, onCheck }) {
    const [ishide, setIsHide] = useState(false);

    return (
        <tr
            className={`${styles.word} ${word.isChecked ? styles.checked : ''}`}
        >
            <td>
                <input
                    type="checkbox"
                    checked={word.isChecked}
                    onChange={() => {
                        onCheck(word.id);
                    }}
                ></input>
            </td>
            <td>{word.eng}</td>
            <td className={ishide ? styles.hide : ''}>{word.kor}</td>
            <td>
                <button
                    className={styles.btn_hide}
                    onClick={() => setIsHide((prev) => !prev)}
                >
                    뜻 숨기기
                </button>
            </td>
        </tr>
    );
}
