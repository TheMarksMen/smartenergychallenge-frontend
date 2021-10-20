import * as React from 'react';
import { AreaChart, CartesianGrid, Tooltip, Area, XAxis, YAxis } from 'recharts';
import { useTheme } from '@mui/styles'

function AreaChartComponent(props) {
    const theme = useTheme();
    return (
        <AreaChart 
            width={400} height={200} data={props.data}
            margin={{ 
                top: 10, 
                right: 30, 
                left: 0, 
                bottom: 0 
            }}
        >
            <defs>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={ props.color ? props.color : '#DF2935' } stopOpacity={0.8}/>
                    <stop offset="95%" stopColor={  props.color ? props.color : '#DF2935' } stopOpacity={0}/>
                </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis label={{ stroke: theme.palette.text.primary, fill: theme.palette.text.primary, value: props.title, position: 'insideLeft', angle:-90, offset: 14}}/>
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip/>
            <Area name={ props.title } type="monotone" dataKey={ props.title === "Power (W)" ?  "pv" : props.title === "Peak Voltage (mV)" ? "vv" : props.title === "RMS Current (mA)" ? "iv" : "pv"} stroke={ props.color } fillOpacity={.2} fill={ props.color }/>
        </AreaChart>
    );
}

export default AreaChartComponent;