import React from 'react';
import styles from './EmptyPage.module.css';
import { Link } from 'react-router-dom';

function EmptyPage() {
    return (
        <div className={styles.content}>
            <h3>잘못된 접근입니다.</h3>
            <h2>404 Page Not Found</h2>
            <Link to="/">
                <button>메인으로 돌아가기</button>
            </Link>
        </div>
    );
}

export default EmptyPage;
