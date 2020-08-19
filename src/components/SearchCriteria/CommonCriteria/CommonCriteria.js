import React, { Component } from 'react';
import styles from './styles.module.css';
import CheckBox from '../../common/CheckBox/CheckBox';
import Expander from '../../common/Expander/Expander';


export default class CommonCriteria extends Component {
    render() {
        return (

            <Expander header='Общие'>
                <div className={styles.criteriaContainer}>
                    <CheckBox>
                        <div className={styles.columnText}>
                            <span>Скрывать профили, </span>
                            <div className={styles.rowText}>
                                <span>просмотренные за </span>
                                <input />
                                <span>дней</span>
                            </div>
                        </div>


                    </CheckBox>
                    <CheckBox text={'Профили со спорной локацией'} />
                    <CheckBox text={'Профили без комментариев'} />
                    <CheckBox text={'Профили, отобранные в папки мои команды'} />
                </div>
            </Expander>
        );
    }
}






