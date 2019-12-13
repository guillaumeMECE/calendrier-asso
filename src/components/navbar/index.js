import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import './style.css';

export default class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Box className="Navbar" boxShadow={3}>
            </Box>
        )
    }
}
