import * as React from 'react';
import { AppBar, Toolbar, IconButton, Typography, makeStyles, Box, Drawer, Button, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Menu, Inbox, Mail, AccountCircle, Dashboard, Settings } from '@material-ui/icons';

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
            <Drawer
                anchor={'left'}
                open={state['left']}
                onClose={toggleDrawer('left', false)}
            >
                <Box
                    sx={{
                        width: 250,
                    }}
                    role="presentation"
                    onClick={toggleDrawer('left', false)}
                    onKeyDown={toggleDrawer('left', false)}
                >
                    <List>
                        <ListItem button key={'Dashboard'}>
                            <ListItemIcon>
                                <Dashboard />
                            </ListItemIcon>
                            <ListItemText primary={'Dashboard'} />
                        </ListItem>
                        <ListItem button key={'Settings'}>
                            <ListItemIcon>
                                <Settings />
                            </ListItemIcon>
                            <ListItemText primary={'Settings'} />
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
            <Drawer
                anchor={'right'}
                open={state['right']}
                onClose={toggleDrawer('right', false)}
            >
                <List>
                    <ListItem button key={'Dashboard'}>
                        <ListItemIcon>
                            <Dashboard />
                        </ListItemIcon>
                        <ListItemText primary={'Dashboard'} />
                    </ListItem>
                </List>
            </Drawer>
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
