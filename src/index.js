import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router, 
    Switch,
    Route,
    Link
} from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@mui/material/styles';
import { indigo, red } from '@mui/material/colors';

import './index.css';
import Dashboard from './Components/Dashboard/Dashboard';
import SettingsPage from './Components/SettingsPage/SettingsPage';
import Navbar from './Components/Navigation/Navbar';
import reportWebVitals from './reportWebVitals';

const theme = createMuiTheme();

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Router>
                <Navbar />
                <Route exact path="/">
                    <Dashboard />
                </Route>
                <Route path="/settings">
                    <SettingsPage />
                </Route>
            </Router>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
