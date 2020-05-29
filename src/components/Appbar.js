import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles, Toolbar,IconButton,Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor:"#161625",
      color:"#bdbdbd"
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      justifyItems:"center",
      textAlign:"center"
    },
  }));


function Appbar(props) {
    const classes = useStyles();

    return (
        <>
            <AppBar position="sticky" className = {classes.root}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          RIT Assignments Tracker
          </Typography>
        </Toolbar>
      </AppBar>
        </>
    );
}

export default Appbar;