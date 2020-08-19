import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './styles.module.css';



export default class TopPanel extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.textInput}>
                    <TextField id="outlined-basic" label="" variant="outlined" style={{ width: '64vw' }} />
                </div>
            </div>
        );
    }
}






