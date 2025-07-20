import React from 'react';
import styles from './DayButton.module.css';

function DayButton({ day }) {
    return <button className={styles.btn_day}>Day {day}</button>;
}

export default DayButton;
