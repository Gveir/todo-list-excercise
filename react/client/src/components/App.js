import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import TaskList from './TaskList';

const styles = () => ({
  root: {
    maxWidth: 1024,
    margin: 'auto'
  }
});

const App = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Tasks
          </Typography>
        </Toolbar>
      </AppBar>
      <TaskList />
    </div>
  );
};

export default withStyles(styles)(App);
