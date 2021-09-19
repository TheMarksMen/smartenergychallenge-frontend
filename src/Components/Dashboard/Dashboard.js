import React from 'react';
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
    const layout = [
      {i: 'c', x: 6, y: 0, w: 6, h: 4},
    ];

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="App">
            <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
                <div key="c">
                    <Chart>
                        <AreaChart data={powerData} />
                    </Chart>
                </div>
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
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
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
                    <MenuItem onClick={handleClose}>Power</MenuItem>
                    <MenuItem onClick={handleClose}>Peak Voltage</MenuItem>
                    <MenuItem onClick={handleClose}>RMS Current</MenuItem>
                    <MenuItem onClick={handleClose}>Real Time</MenuItem>
                </Menu>
            </div>
        </div>
    );
}

export default Dashboard;
