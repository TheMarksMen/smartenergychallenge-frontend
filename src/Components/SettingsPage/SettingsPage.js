import React from 'react';
import { Typography, Box, Grid, TextareaAutosize } from "@mui/material";
import { voltageData, powerData, currentData } from '../../data';

export default function SettingsPage() {
    return (
        <Grid 
            container
            alignItems="center"
            justifyContent="center"
            spacing={4}     
        >
            <Grid item>
                <Box 
                    sx={{
                        p: 4,
                        width: '80%'
                    }} 
                >
                    <Typography variant="h3">
                        Settings
                    </Typography>

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