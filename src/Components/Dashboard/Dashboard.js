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
import SimpleChart from '../SimpleChart/SimpleChart';
import '@fontsource/roboto';

function Dashboard() {
    const data = [
        {
            name: 'January',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'February',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'March',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'April',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'May',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'June',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'July',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

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
                            <SimpleChart data={data}></SimpleChart>
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
