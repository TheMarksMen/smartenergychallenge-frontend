import React, { useState } from 'react';
import {
    Menu,
    MenuItem,
    Fab
} from '@mui/material';
import { Add } from '@mui/icons-material';
import { useTheme } from '@mui/styles';
import '@fontsource/roboto';
import Chart from '../Charts/Chart';
import AreaChart from '../Charts/AreaChartComponent';
import GridSystem from './GridSystem';
import { powerData, voltageData, currentData } from './Stud';

function Dashboard() {
    const theme = useTheme();
    const [layout, setLayout] = useState([{i: '0', x: 6, y: 0, w: 5, h: 3}]);
    const [gridElements, setGridElements] = useState([
        <div key="0">
            <Chart>
                <AreaChart title='Power (W)' color={theme.palette.secondary.main} data={powerData} />
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

    const addChart = (event) => {
        let target = event.currentTarget.textContent;

        switch (target) {
            case 'Power':
                setGridElements([
                    ...gridElements,
                    <div key={gridElements.length}>
                        <Chart>
                            <AreaChart title='Power (W)' color={theme.palette.secondary.main} data={powerData} />
                        </Chart>
                    </div>
                ]);
                setLayout([
                    ...layout,
                    {i: layout.length, x: 0, y: 0, w:6, h:4 }
                ]);
                break;

            case 'Peak Voltage':
                setGridElements([
                    ...gridElements,
                    <div key={gridElements.length}>
                        <Chart>
                            <AreaChart title='Peak Voltage (mV)' color={theme.palette.primary.main} data={voltageData} />
                        </Chart>
                    </div>
                ]);
                setLayout([
                    ...layout,
                    {i: layout.length, x: 0, y: 0, w:6, h:4 }
                ]);
                break;

            case 'RMS Current':
                setGridElements([
                    ...gridElements,
                    <div key={gridElements.length}>
                        <Chart>
                            <AreaChart title='RMS Current (mA)' color={theme.palette.success.main} data={currentData} />
                        </Chart>
                    </div>
                ]);
                setLayout([
                    ...layout,
                    {i: layout.length, x: 0, y: 0, w:6, h:4 }
                ]);
                break;
        
            default:
                break;
        }


        handleClose();
    };

    return (
        <div className="App">
            <GridSystem layout={{lg: layout}}>
                { gridElements }
            </GridSystem>

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
