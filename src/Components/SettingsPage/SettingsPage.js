import React from 'react';
import { Typography, Box, Grid } from "@mui/material";

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
                </Box>
            </Grid>
        </Grid>
    )
}