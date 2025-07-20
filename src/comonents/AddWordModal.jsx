import ReactDOM from 'react-dom';
import styles from './AddWordModal.module.css';
import { useState } from 'react';

function AddWordModal({ isOpen, onClose, onAddWord }) {
    const [wordEng, setWordEng] = useState('');
    const [wordMeaning, setWordMeaning] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddWord({ eng: wordEng, kor: wordMeaning });
        setWordEng('');
        setWordMeaning('');
        onClose();
    };

    return ReactDOM.createPortal(
        <div className={styles.modal_overlay}>
            <div className={styles.modal_content}>
                <button className={styles.btn_close} onClick={() => onClose()}>
                    &times;
                </button>
                <h3>단어 추가하기</h3>
                <form onSubmit={handleSubmit}>
                    <label>
                        단어 :
                        <input
                            required
                            type="text"
                            value={wordEng}
                            onChange={(e) => setWordEng(e.target.value)}
                            placeholder="word"
                        ></input>
                    </label>
                    <label>
                        뜻 :
                        <input
                            required
                            className={styles.modal_input}
                            type="text"
                            value={wordMeaning}
                            onChange={(e) => setWordMeaning(e.target.value)}
                            placeholder="meaning"
                        ></input>
                    </label>
                    <button type="submit" className={styles.btn_add}>
                        추가
                    </button>
                </form>
            </div>
        </div>,
        document.body
    );
}

export default AddWordModal;
