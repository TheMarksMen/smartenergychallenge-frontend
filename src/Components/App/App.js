import Navbar from '../Navbar/Navbar';
import { Paper, Grid, Box, ThemeProvider, Typography } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import { blue, indigo, red } from '@material-ui/core/colors';
import SimpleChart from '../SimpleChart/SimpleChart';
import '@fontsource/roboto';

const theme = createTheme({
    palette: {
        primary: {
            main: indigo[700],
        },
        secondary: {
            main: red[900],
        },
    },
    typography: {
        // Use the system font instead of the default Roboto font.
        fontFamily: ['"Roboto"', 'sans-serif'].join(','),
    },
});

function App() {
    const data = [
        {
            name: 'January',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'February',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'March',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'April',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'May',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'June',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'July',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Navbar />
                <Grid
                    container
                    justifyContent="center"
                    spacing={5}
                    justify="center"
                    direction="row"
                    style={{ minHeight: '80vh', marginTop: '5vh' }}
                >
                    <Box display="inline-block">
                        <Paper style={{ padding: '3em', height: '' }}>
                            <Typography
                                variant="h4"
                                align="center"
                                style={{ marginBottom: '1.5em' }}
                            >
                                Power
                            </Typography>
                            <SimpleChart data={data}></SimpleChart>
                        </Paper>
                    </Box>
                </Grid>
            </ThemeProvider>
        </div>
    );
}

export default App;
