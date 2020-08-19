import React, { Component } from 'react';
import styles from './styles.module.css';

export default class Header extends Component {
    render() {
        return (

            <div className={styles.container}>
                <span className={styles.filters}>ФИЛЬТРЫ</span>
                <span className={styles.clean}>Очистить</span>
            </div>

        );
    }
}






