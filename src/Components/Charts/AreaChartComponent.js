import * as React from 'react';
import { AreaChart, CartesianGrid, Tooltip, Area, XAxis, YAxis, Legend } from 'recharts';
import { useTheme } from '@mui/styles';

function AreaChartComponent(props) {
    const theme = useTheme();
    const { data } = props;
    return (
        <AreaChart 
            width={500} height={300} data={data}
            margin={{ 
                top: 10, 
                right: 30, 
                left: 0, 
                bottom: 0 
            }}
        >
        <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={ theme.palette.secondary.main } stopOpacity={0.8}/>
                <stop offset="95%" stopColor={ theme.palette.secondary.main } stopOpacity={0}/>
            </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis label={{ value: 'Power (W)', position: 'insideLeft', angle:-90}}/>
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="pv" stroke={ theme.palette.secondary.main } fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
    );
}

export default AreaChartComponent;