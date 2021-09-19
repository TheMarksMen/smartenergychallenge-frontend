import React, { useState } from 'react';
import {
    Menu,
    MenuItem,
    Fab
} from '@mui/material';
import '@fontsource/roboto';
import Chart from '../Charts/Chart';
import AreaChart from '../Charts/AreaChartComponent';
import { powerData } from './Stud';
import GridLayout from 'react-grid-layout';
import { Add } from '@mui/icons-material';

function Dashboard() {
    const [layout, setLayout] = useState([{i: '0', x: 6, y: 0, w: 6, h: 4}]);
    const [gridElements, setGridElements] = useState([
        <div key="0">
            <Chart>
                <AreaChart data={powerData} />
            </Chart>
        </div>
    ]);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const addChart = () => {
        setGridElements([
            ...gridElements,
            <div key={gridElements.length}>
                <Chart>
                    <AreaChart data={powerData} />
                </Chart>
            </div>
        ]);
        setLayout([
            {i: layout.length, x: 0, y: 0, w:6, h:4 }
        ])
        handleClose();
    };

    return (
        <div className="App">
            <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
                { gridElements }
            </GridLayout>

            <Fab
                onClick={handleClick}
                style = {{
                    position: 'absolute',
                    bottom: 20,
                    right: 20 
                }}
            >
                <Add />
            </Fab>
            <div>
                <Menu
                    id="positioned-menu"
                    aria-labelledby="positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    }}
                >
                    <MenuItem onClick={addChart}>Power</MenuItem>
                    <MenuItem onClick={addChart}>Peak Voltage</MenuItem>
                    <MenuItem onClick={addChart}>RMS Current</MenuItem>
                    <MenuItem onClick={addChart}>Real Time</MenuItem>
                </Menu>
            </div>
        </div>
    );
}

export default Dashboard;
