import React, { Component } from 'react';
import styles from './styles.module.css';
import Expander from '../common/Expander/Expander';
import Slider from '../common/Slider/Slider';
import CommonCriteria from './CommonCriteria/CommonCriteria';
import Contacts from './Contacts/Contacts';
import Header from './Header/Header';



export default class SearchCriteriaPanel extends Component {
    state = {
        ageExpanded: true,
        expExpanded: true,
        expLastExpanded: true,
    };

    render() {

        return (
            <div className={styles.container}>

                <Header />

                <CommonCriteria />

                <Expander header='Возраст'>
                    <Slider min={0} max={8} marks={[{ value: 0, label: '0' }, { value: 1, label: '18' }, { value: 2, label: '20' }, { value: 3, label: '25' }, { value: 4, label: '30' }, { value: 5, label: '35' }, { value: 6, label: '40' }, { value: 7, label: '50' }, { value: 8, label: '60+' }]} />
                </Expander>

                <Expander header='Опыт работы'>
                    <Slider min={0} max={8} marks={[{ value: 0, label: '0' }, { value: 1, label: '1' }, { value: 2, label: '2' }, { value: 3, label: '3' }, { value: 4, label: '4' }, { value: 5, label: '5' }, { value: 6, label: '7' }, { value: 7, label: '10' }, { value: 8, label: '15+' }]} />
                </Expander>

                <Expander header='Опыт работы на последнем месте'>
                    <Slider min={0} max={8} marks={[{ value: 0, label: '0' }, { value: 1, label: '1' }, { value: 2, label: '2' }, { value: 3, label: '3' }, { value: 4, label: '4' }, { value: 5, label: '5' }, { value: 6, label: '7' }, { value: 7, label: '10' }, { value: 8, label: '15+' }]} />
                </Expander>

                <Contacts />

            </div>
        );
    }
}






