import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#25BEC8',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#FD6864',
      contrastText: '#FFFFFF'
    }
  },
  typography: {
    fontFamily: [
      'Avenir',
      'Montserrat',
      'Helvetica Neue'
    ].join(', ')
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Dashboard} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
