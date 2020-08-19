import React, { Component } from 'react';
import CheckBox from '../../common/CheckBox/CheckBox';
import Expander from '../../common/Expander/Expander';

export default class Contacts extends Component {
    render() {
        return (
            <Expander header='Доступные контакты'>
                <CheckBox subtext='205'>
                    <Expander header='С указанием контактов'>
                        <CheckBox text='Емейл' subtext='205' />
                        <CheckBox text='Телефон' subtext='36' />
                        <CheckBox text='Адрес' subtext='7' />
                    </Expander>
                </CheckBox>
            </Expander>

        );
    }
}






