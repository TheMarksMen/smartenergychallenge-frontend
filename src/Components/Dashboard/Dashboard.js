import React from 'react';
import {
    Paper,
    Grid,
    Box,
    ThemeProvider,
    Typography,
    Button,
    MenuItem,
    Menu,
} from '@mui/material';
import SimpleChart from '../Charts/LineChartComponent';
import { powerData } from './Stud';
import '@fontsource/roboto';

function Dashboard() {
    const [anchor, setAnchor] = React.useState(null);
    const [option, setOption] = React.useState('Power');



    const handleClick = (event) => {
        setAnchor(event.currentTarget);
    };

    const handleListItemClick = (event) => {
        setOption(event.currentTarget.textContent);
        console.log(event.currentTarget);
    };

    const handleClose = () => {
        setAnchor(null);
    };

    return (
        <div className="App">
            <Grid
                container
                justifyContent="center"
                spacing={5}
                justify="center"
                direction="row"
                style={{ minHeight: '80vh', marginTop: '5vh' }}
            >
                <Box display="inline-block">
                    <Paper style={{ padding: '3em', height: '' }}>
                        <Grid
                            container
                            justifyContent="center"
                            spacing={5}
                            justify="center"
                            direction="column-reverse"
                        >
                            <Button
                                aria-controls="simple-menu"
                                aria-haspopup="true"
                                onClick={handleClick}
                            >
                                Select Value
                            </Button>
                            <SimpleChart data={powerData}></SimpleChart>
                            <Menu
                                id="menu"
                                anchorEl={anchor}
                                keepMounted
                                open={Boolean(anchor)}
                                onClose={handleClose}
                            >
                                <MenuItem
                                    onClick={(e) => {
                                        handleClose(e);
                                        handleListItemClick(e);
                                    }}
                                >
                                    Power
                                </MenuItem>
                                <MenuItem
                                    onClick={(e) => {
                                        handleClose(e);
                                        handleListItemClick(e);
                                    }}
                                >
                                    Peak Voltage
                                </MenuItem>
                                <MenuItem
                                    onClick={(e) => {
                                        handleClose(e);
                                        handleListItemClick(e);
                                    }}
                                >
                                    RMS Current
                                </MenuItem>
                            </Menu>
                            <Typography align="center" variant="h4">
                                {option}
                            </Typography>
                        </Grid>
                    </Paper>
                </Box>
            </Grid>
        </div>
    );
}

export default Dashboard;
