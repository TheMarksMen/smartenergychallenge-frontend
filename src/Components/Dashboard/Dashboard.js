import React from 'react';
import {
    Grid,
} from '@mui/material';
import '@fontsource/roboto';
import Chart from '../Charts/Chart';
import AreaChart from '../Charts/AreaChartComponent';
import { powerData } from './Stud';
import GridLayout from 'react-grid-layout';

function Dashboard() {
    const layout = [
      {i: 'c', x: 4, y: 0, w: 1, h: 2}
    ];

    return (
        <div className="App">
            <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>

                <div key="c">
                    <Chart>
                        <AreaChart data={powerData} />
                    </Chart>
                </div>
            </GridLayout>
        </div>
    );
}

export default Dashboard;
