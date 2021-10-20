import React, { useState, useEffect } from 'react';
import { request, gql } from 'graphql-request';
import { Typography, Box, Grid, TextareaAutosize, Button } from "@mui/material";
import { useTheme } from "@mui/styles"

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

export default function SettingsPage(props) {
    const theme = useTheme();

    const [powerData, setPowerData] = useState();
    const [voltageData, setVoltageData] = useState();
    const [currentData, setCurrentData] = useState();

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
    }

    useEffect(() => {
        getData();
    }, []);

    console.log(theme)

    return (
        <Grid 
            container
            alignItems="center"
            justifyContent="center"
            spacing={4}     
            style = {{
                color: theme.palette.text.primary
            }}
        >
            <Grid item >
                <Box 
                    sx={{
                        p: 4,
                        width: '80%'
                    }} 
                >
                    <Typography variant="h3">
                        Settings
                    </Typography>
                    <Button 
                        color='primary' 
                        variant='contained' 
                        style={{
                            margin: "1em 0",
                        }}
                        onClick={() => {
                            props.setDark(!props.dark);
                        }} 
                    >
                        Toggle Theme 
                    </Button>

                    <Typography variant="h5">
                        Power Data
                    </Typography>
                   <TextareaAutosize
                        maxRows={4}
                        aria-label="power-data"
                        defaultValue={JSON.stringify(powerData)}
                        style={{
                            width: '30em',
                            height: '10em'
                        }}
                    />

                    <Typography variant="h5">
                        Voltage Data
                    </Typography>
                   <TextareaAutosize
                        maxRows={4}
                        aria-label="power-data"
                        defaultValue={JSON.stringify(voltageData)}
                        style={{
                            width: '30em',
                            height: '10em'
                        }}
                    />

                    <Typography variant="h5">
                        Current Data
                    </Typography>
                   <TextareaAutosize
                        maxRows={4}
                        aria-label="power-data"
                        defaultValue={JSON.stringify(currentData)}
                        style={{
                            width: '30em',
                            height: '10em'
                        }}
                    />
                </Box>
            </Grid>
        </Grid>
    )
}