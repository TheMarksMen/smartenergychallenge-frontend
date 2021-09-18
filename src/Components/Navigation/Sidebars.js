import * as React from 'react';
import { Drawer, Button, List, ListItem, ListItemIcon, ListItemText, Grid, Box } from '@material-ui/core';
import { AccountCircle, Dashboard, Settings } from '@material-ui/icons';

export default function Sidebars(props) {
    return (
        <>
            <Drawer
                anchor={'left'}
                open={props.state['left']}
                onClose={props.toggle('left', false)}
            >
                <Box
                    sx={{
                        width: 250,
                    }}
                    role="presentation"
                    onClick={props.toggle('left', false)}
                    onKeyDown={props.toggle('left', false)}
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
                open={props.state['right']}
                onClose={props.toggle('right', false)}
            >
                <Box
                    sx={{
                        width: 250,
                    }}
                    role="presentation"
                    onClick={props.toggle('left', false)}
                    onKeyDown={props.toggle('left', false)}
                    p={2}
                >
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={4}
                    >
                        <Grid item>
                            <AccountCircle fontSize="large" />
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="primary">
                                Logout
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Drawer>
        </>
    );
}
