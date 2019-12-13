import React, { Component } from 'react';
import LogoAsso from '../logoAsso';
import CardEvent from '../cardEvent';
import './style.css';

export default class Event extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="Event">
                <div className="timeline" />
                <LogoAsso />
                <CardEvent />
            </div>
        )
    }
}
