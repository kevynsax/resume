import React, {Component} from "react";
import "./slider.scss"

interface SliderProps {
    percentage: number;
}

export default class Slider extends Component<SliderProps>{
    render() {
        return (
            <div className="slider">
                <div style={{"width": `${this.props.percentage * 100}%`}} className="fulfillment">&nbsp;</div>
            </div>
        );
    }
}