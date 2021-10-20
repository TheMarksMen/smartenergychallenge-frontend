import * as React from 'react';
import { AreaChart, CartesianGrid, Tooltip, Area, XAxis, YAxis, Legend } from 'recharts';
import { Box, Paper, Grid, Button, Menu, MenuItem, Typography } from '@mui/material';
import { useTheme } from '@mui/styles';

function Chart(props) {
    const theme = useTheme();
    return (
        <Box display="inline-block">
            <Paper style={{ padding: '1em'}}>
                { props.children }   
            </Paper>
        </Box>
    );
}

export default Chart;
