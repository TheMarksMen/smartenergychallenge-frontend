import React from 'react';
import {
    Grid,
} from '@mui/material';
import '@fontsource/roboto';
import Chart from '../Charts/Chart';
import AreaChart from '../Charts/AreaChartComponent';
import { powerData } from './Stud';

function Dashboard() {
    return (
        <div className="App">
            <Grid
                container
                justifyContent="center"
                spacing={5}
                justify="center"
                direction="row"
                style={{ minHeight: '80vh', marginTop: '5vh' }}
            >
                <Chart>
                    <AreaChart data={powerData} />
                </Chart>
            </Grid>
        </div>
    );
}

export default Dashboard;
