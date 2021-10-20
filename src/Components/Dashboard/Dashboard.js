import React, { useState, createContext, useEffect } from 'react';
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
    const [gridElements, setGridElements] = useState(["Power"]);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleAddClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleAddClose = () => {
        setAnchorEl(null);
    };

    const generateGridElements = () => {
        return gridElements.map((e, i) => {
            switch (e) {
                case "Power":
                    return (
                        <div key={i}>
                            <powerDataContext.Provider value={powerData}>
                                <Chart>
                                    <AreaChart key={powerData} title='Power (W)' color={theme.palette.secondary.main} data={powerData} />
                                </Chart>
                            </powerDataContext.Provider>
                        </div>
                    )

                case "Voltage":
                    return (
                        <div key={i}>
                            <voltageDataContext.Provider value={voltageData}>
                                <Chart>
                                    <AreaChart key={voltageData} title='Voltage (V)' color={theme.palette.primary.main} data={voltageData} />
                                </Chart>
                            </voltageDataContext.Provider>
                        </div>
                    )

                case "Current":
                    return (
                        <div key={i}>
                            <currentDataContext.Provider value={currentData}>
                                <Chart>
                                    <AreaChart key={currentData} title='Current (mA)' color={theme.palette.success.main} data={currentData} />
                                </Chart>
                            </currentDataContext.Provider>
                        </div>
                    )
            
                default:
                    break;
            }

        })
    };

    const addChart = (event) => {
        let target = event.currentTarget.textContent;

        switch (target) {
            case 'Power':
                setGridElements([
                    ...gridElements,
                    'Power'
                ]);
                break;

            case 'Peak Voltage':
                setGridElements([
                    ...gridElements,
                    'Voltage'
                ]);
                break;

            case 'RMS Current':
                setGridElements([
                    ...gridElements,
                    "Current"
                ]);
                break;
        
            default:
                break;
        }

        setLayout([
            ...layout,
            {i: layout.length, x: 0, y: 0, w:6, h:4 }
        ]);

        handleAddClose();
    };

    const query = gql`
    {
        samples(userID: "r6pPcyHAzJkFvPzqdlMC") {
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
                const date = new Date(d.created)
                return {
                    name: date.toLocaleTimeString('en-NZ'), 
                    date: date,
                    pv: d.avgPower
                }
            }).sort(function(a, b) {
                return a.date - b.date;
            }))
            setVoltageData(data.samples.map(d => {
                const date = new Date(d.created)
                return {
                    name: date.toLocaleTimeString('en-NZ'), 
                    date: date,
                    pv: d.peakVoltage
                }
            }).sort(function(a, b) {
                return a.date - b.date;
            }))
            setCurrentData(data.samples.map(d => {
                const date = new Date(d.created)
                return {
                    name: date.toLocaleTimeString('en-NZ'), 
                    date: date,
                    pv: d.RMSCurrent
                }
            }).sort(function(a, b) {
                return a.date - b.date;
            }))
        }, reason => {
            console.error(reason)
        })
        setGridElements([
            ...gridElements
        ])
    }

    useEffect(() => {getData(); setInterval(getData, 50000)}, [])

    return (
        <div className="App">
            <GridSystem layout={{lg: layout}}>
                { generateGridElements() }
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
