import {Component} from "react";
import { v4 } from 'uuid';
import ColorList from './ColorList'
import AddColorForm from "./AddColorForm"
import React from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: []
        }

        this.rateColor = this.rateColor.bind(this);
        this.removeColor = this.removeColor.bind(this);
        this.addColor = this.addColor.bind(this);
    }

    rateColor(id, rating) {
        const colors = this.state.colors.map(color => {
            (color.id !== id) ? color : {...color, rating}
        })

        this.setState({colors})
    }

    removeColor(id) {
        const colors = this.state.colors.map(color => color.id != id);
        this.setState(colors);
    }

    addColor(title, color) {
        const colors = [
            ...this.state.colors,
            {
                id: v4(),
                title,
                color,
                rating: 0
            }
        ]
        this.setState({colors});
    }

    render() {
        const {colors} = this.state;
        const {addColor, rateColor, removeColor} = this

        return (
            <div className="app">
                <AddColorForm onNewColor = {this.addColor}/>
                <ColorList colors = {colors}
                           onRate = {this.rateColor}
                           removeColor = {this.removeColor}/>
            </div>
        )
    }
}