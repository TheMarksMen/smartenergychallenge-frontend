import * as React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Menu, AccountCircle } from '@mui/icons-material';
import Sidebars from './Sidebars';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

function Navbar() {
    const c = useStyles();

    const [state, setState] = React.useState({
        left: false,
        right: false,
    });

    // toggles given side drawer
    const toggleDrawer = (anchor, open) => (event) => {
        if ( // Open with shift or tab
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
 

    return (
        <div className={c.root}>
            <Sidebars state={state} toggle={toggleDrawer}/>            
            <AppBar position="static">
                <Toolbar>
                    <IconButton onClick={toggleDrawer('left', true)} edge="start" color="inherit" aria-label="menu">
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" className={c.title}>
                        Smart Energy Challenge
                    </Typography>
                    <IconButton onClick={toggleDrawer('right', true)} edge="end" color="inherit" aria-label="profile">
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;
