import React, { useState, createContext } from 'react';
import { request, gql } from 'graphql-request'
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

function Dashboard() {
    const theme = useTheme();
    const powerDataContext = createContext([]);
    const voltageDataContext = createContext([]);
    const currentDataContext = createContext([]);

    const [powerData, setPowerData] = useState([]);
    const [voltageData, setVoltageData] = useState([]);
    const [currentData, setCurrentData] = useState([]);
    
    const [layout, setLayout] = useState([{i: '0', x: 6, y: 0, w: 5, h: 3}]);
    const [gridElements, setGridElements] = useState([
        <div key="0">
            <powerDataContext.Provider value={powerData}>
                <Chart>
                    <AreaChart key={powerData} title='Power (W)' color={theme.palette.secondary.main} data={powerData} />
                </Chart>
            </powerDataContext.Provider>
        </div>
    ]);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleAddClick = (event) => {
        setAnchorEl(event.currentTarget);
        getData();
    };
    const handleAddClose = () => {
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
                        <Chart key={voltageData}>
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

        handleAddClose();
    };

    const query = gql`
    {
        samples(userID: "eX7xoLyBLAtnA0tpUcwZ") {
            created
            peakVoltage
            RMSCurrent
            avgPower
        }
    }
    `
    const getData = () => {
        request('http://localhost:4000/graphql', query).then((data) => {
            setPowerData(data.samples.map(d => {
                return {
                    name: d.created, 
                    pv: d.avgPower
                }
            }))
            setVoltageData(data.samples.map(d => {
                return {
                    created: d.created, 
                    data: d.peakVoltage
                }
            }))
            setCurrentData(data.samples.map(d => {
                return {
                    created: d.created, 
                    data: d.RMSCurrent
                }
            }))
            console.log(data)
        }, reason => {
            console.error(reason)
        })
        setGridElements([
            ...gridElements
        ])
    }

    return (
        <div className="App">
            <GridSystem layout={{lg: layout}}>
                <div key="0">
                    <powerDataContext.Provider value={powerData}>
                        <Chart>
                            <AreaChart key={powerData} title='Power (W)' color={theme.palette.secondary.main} data={powerData} />
                        </Chart>
                    </powerDataContext.Provider>
                </div>
            </GridSystem>

            <Fab
                onClick={handleAddClick}
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
                    onClose={handleAddClose}
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
