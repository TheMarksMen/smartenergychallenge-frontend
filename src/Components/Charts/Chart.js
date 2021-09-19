import * as React from 'react';
import { AreaChart, CartesianGrid, Tooltip, Area, XAxis, YAxis, Legend } from 'recharts';
import { Box, Paper, Grid, Button, Menu, MenuItem, Typography } from '@mui/material';
import { useTheme } from '@mui/styles';

function Chart(props) {
    const theme = useTheme();
    const [anchor, setAnchor] = React.useState(null);
    const [option, setOption] = React.useState('Power');

    const handleClick = (event) => {
        setAnchor(event.currentTarget);
    };

    const handleListItemClick = (event) => {
        setOption(event.currentTarget.textContent);
    };

    const handleClose = () => {
        setAnchor(null);
    };

    return (
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
                    { props.children } 
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
    );
}

export default Chart;
