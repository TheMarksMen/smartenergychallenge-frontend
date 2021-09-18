import * as React from 'react';
import {
    Divider,
    Drawer,
    Button,
    List,
    ListItemIcon,
    ListItemText,
    ListItemButton,
    Grid,
    Box,
    Typography,
} from '@mui/material';
import {
    AccountCircle,
    Dashboard,
    Settings,
    DeviceHub,
    Add,
    GitHub
} from '@mui/icons-material';

export default function Sidebars(props) {
    return (
        <React.Fragment>
            {/* Left hand menu for routes */}
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
                        <ListItemButton key={'Dashboard'}>
                            <ListItemIcon>
                                <Dashboard />
                            </ListItemIcon>
                            <ListItemText primary={'Dashboard'} />
                        </ListItemButton>
                        <ListItemButton key={'Settings'}>
                            <ListItemIcon>
                                <Settings />
                            </ListItemIcon>
                            <ListItemText primary={'Settings'} />
                        </ListItemButton>
                        <ListItemButton key={'GitHub'}>
                            <ListItemIcon>
                                <GitHub />
                            </ListItemIcon>
                            <ListItemText primary={'View on GitHub'} />
                        </ListItemButton>
                    </List>
                </Box>
            </Drawer>

            {/* Right hand user panel */}
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
                        spacing={2}
                    >
                        <Grid item>
                            <Box 
                                height="100%"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                flexDirection="column"
                            >
                                <AccountCircle fontSize="large" />
                                <Typography variant="h6">
                                    Alexander Bailey
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Typography 
                                variant="h6" 
                                css={{
                                    margin: '0', 
                                    padding: '0'
                                }}
                            >
                                Devices
                            </Typography>
                        </Grid>
                        <Grid item>
                            <List>
                                <Divider />
                                <ListItemButton>
                                    <ListItemIcon>
                                        <DeviceHub />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={'Prototype Device'}
                                    />
                                </ListItemButton>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <Add />
                                    </ListItemIcon>
                                    <ListItemText primary={'Add an Item'} />
                                </ListItemButton>
                            </List>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="primary">
                                Logout
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Drawer>
        </React.Fragment>
    );
}
