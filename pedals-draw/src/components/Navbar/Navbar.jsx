import React from "react";
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Typography } from '@material-ui/core';

import logo from '../../assets/logo.svg'
import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles;
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="tmp" height="25px" className={classes.image}/>
                        pedalsDraw
                    </Typography>
                    <div className={classes.grow}></div>
                    <div className={classes.button}>
                        <IconButton aria-label="show cart items" color="inherit">
                            <Badge badgeContent={2} color="secondary">
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
}


export default Navbar;