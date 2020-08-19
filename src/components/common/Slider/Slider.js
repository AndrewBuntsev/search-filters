import React, { Component } from 'react';
import MUISlider from '@material-ui/core/Slider';
import styles from './styles.module.css';


export default class Slider extends Component {
    render() {
        return <MUISlider
            defaultValue={0}
            aria-labelledby="discrete-slider-custom"
            valueLabelDisplay="off"
            marks={this.props.marks}
            min={this.props.min}
            max={this.props.max}
        />
    }
}






