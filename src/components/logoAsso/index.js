import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    root: {
        borderRadius: '50%',
        display: 'inline-block',
        width: 'auto',
        alignItems: 'center',
        margin: theme.spacing(1),
        '& > *': {
            // margin: theme.spacing(1),
        },
    },
    orange: {
        color: '#fff',
        backgroundColor: deepOrange[500],
        alignSelf: 'center',
    },
    purple: {
        color: '#fff',
        backgroundColor: deepPurple[500],
    },
}));

export default function LetterAvatars() {
    const classes = useStyles();

    return (
        <Box className={classes.root} boxShadow={2}>
            <Avatar className={classes.orange}>NL</Avatar>
        </Box>
    );
}