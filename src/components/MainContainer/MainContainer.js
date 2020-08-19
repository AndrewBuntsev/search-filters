import React, { Component } from 'react';

import styles from './styles.module.css';
import TopPanel from '../TopPanel/TopPanel';
import SearchCriteriaPanel from '../SearchCriteria/SearchCriteriaPanel';
import MainContent from '../MainContent/MainContent';


export default class MainContainer extends Component {
    render() {
        return (
            <div className={styles.container}>
                <TopPanel />
                <div className={styles.middleContainer}>
                    <SearchCriteriaPanel />
                    <MainContent />
                </div>
            </div>
        );
    }
}






