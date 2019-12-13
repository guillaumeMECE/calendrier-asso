import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import './style.css';

export default class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Box className="Navbar" boxShadow={3}>
                <Grid container spacing={0}>
                    <Grid item xs={4} >
                        <img className="favicon" src={process.env.PUBLIC_URL + 'logo_ece.png'} alt="Default" />
                    </Grid>
                    <Grid item xs={4}>
                        <Box className="title" letterSpacing={2} m={1}>
                            Calendrier Associatif
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        )
    }
}
