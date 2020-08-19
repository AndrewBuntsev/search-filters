import React, { Component } from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import styles from './styles.module.css';


export default class Expander extends Component {
    state = {
        expanded: true
    };

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.chevron} onClick={() => this.setState(state => ({ expanded: !state.expanded }))}>
                    {this.state.expanded ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
                </div>
                <div className={styles.contentWithHeader}>
                    <span className={styles.header}>{this.props.header}</span>
                    <div className={styles.content}>
                        {this.state.expanded && this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}






