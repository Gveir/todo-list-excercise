import React from 'react';
import { Router, Route } from 'react-router-dom';
import MomentUtils from '@date-io/moment';

import { withStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import orange from '@material-ui/core/colors/orange';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import history from '../history';
import ApplicationBar from './ApplicationBar';
import TaskList from './tasks/TaskList';
import TaskCreate from './tasks/TaskCreate';
import TaskEdit from './tasks/TaskEdit';

const styles = () => ({
  root: {
    maxWidth: 1024,
    margin: 'auto'
  }
});

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: orange
  }
});

const App = ({ classes }) => {
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <Router history={history}>
            <Route path="/" component={ApplicationBar} />
            <Route path="/" exact component={TaskList} />
            <Route path="/new" exact component={TaskCreate} />
            <Route path="/edit/:id" exact component={TaskEdit} />
          </Router>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </div>
  );
};

export default withStyles(styles)(App);
