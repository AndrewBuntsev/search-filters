import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import styles from './styles.module.css';


export default class CheckBox extends Component {
    state = {
        checked: false
    };

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.checkbox}>
                    <Checkbox
                        checked={this.state.checked}
                        onChange={() => this.setState(state => ({ checked: !state.checked }))}
                        color="primary"
                    />
                </div>
                <span className={styles.text}>{this.props.text}</span>
                {this.props.children}
                {this.props.subtext && <span className={styles.subtext}>{this.props.subtext}</span>}
            </div>);
    }
}






