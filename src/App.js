import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Dashboard from './Components/Dashboard/Dashboard';
import SettingsPage from './Components/SettingsPage/SettingsPage';
import Navbar from './Components/Navigation/Navbar';

function App() {
    const [dark, setDark] = useState(false);

    const theme = createTheme({
        palette: {
            mode: dark ? 'dark' : 'light',
            primary: {
                main: '#152349',
            },
            secondary: {
                main: '#DF2935',
            },
            info: {
                main: '#3F88C5',
            },
            error: {
                main: '#FF6666',
            },
            success: {
                main: '#5B7553',
            }
        },
    });

    console.log(dark);

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Navbar />
                <Route exact path="/">
                    <Dashboard />
                </Route>
                <Route path="/settings">
                    <SettingsPage dark={dark} setDark={setDark} />
                </Route>
            </Router>
        </ThemeProvider>
    )
}

export default App