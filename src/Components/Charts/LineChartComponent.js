import * as React from 'react';
import { LineChart, CartesianGrid, Line, XAxis, YAxis } from 'recharts';
import { Box, Paper, Grid, Button, Menu, MenuItem, Typography } from '@mui/material';
import { useTheme } from '@mui/styles';

function LineChartComponent(props) {
    const theme = useTheme();
    const { data } = props;
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
                        <LineChart width={500} height={300} data={data}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                            <Line
                                type="monotone"
                                dataKey="pv"
                                stroke={theme.palette.secondary.main}
                            />
                        </LineChart>
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

export default LineChartComponent;
