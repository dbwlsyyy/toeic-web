import React, { useState } from 'react';
import styles from './WordTable.module.css';

export default function WordTable({ word, onCheck, onDelete }) {
    const [isHide, setIsHide] = useState(false);

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
            <td>{isHide ? '' : word.kor}</td>
            <td>
                <button
                    className={`${styles.btn_controls} ${styles.btn_hide} ${
                        word.isChecked ? styles.disabled : ''
                    }`}
                    onClick={() => setIsHide((prev) => !prev)}
                    disabled={word.isChecked}
                >
                    {isHide ? '뜻 보기' : '뜻 숨김'}
                </button>
                <button
                    className={`${styles.btn_controls} ${styles.btn_delete}`}
                    onClick={() => {
                        onDelete(word.id);
                    }}
                >
                    삭제
                </button>
            </td>
        </tr>
    );
}
