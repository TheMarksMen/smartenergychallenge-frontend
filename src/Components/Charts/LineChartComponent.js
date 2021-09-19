import * as React from 'react';
import { LineChart, CartesianGrid, Line, XAxis, YAxis } from 'recharts';
import { useTheme } from '@mui/styles';

function LineChartComponent(props) {
    const theme = useTheme();
    const { data } = props;
    return (
        <LineChart width={500} height={300} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line
                type="monotone"
                dataKey="pv"
                stroke={theme.palette.secondary.main}
            />
        </LineChart>
    );
}

export default LineChartComponent;
