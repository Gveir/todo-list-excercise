import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import TaskList from './TaskList';

const styles = () => ({
  root: {
    maxWidth: 1024,
    margin: 'auto'
  },
  title: {
    flexGrow: 1
  }
});

const App = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.title}>
            Tasks
          </Typography>
          <IconButton color="inherit">
            <Icon fontSize="large">add</Icon>
          </IconButton>
        </Toolbar>
      </AppBar>
      <TaskList />
    </div>
  );
};

export default withStyles(styles)(App);
