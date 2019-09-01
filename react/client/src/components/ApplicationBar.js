import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Icon,
  IconButton,
  Link,
  Toolbar,
  Typography
} from '@material-ui/core';

const styles = () => ({
  title: {
    flexGrow: 1
  }
});

const renderAddButton = () => {
  return (
    <IconButton color="inherit" href="/new">
      <Icon fontSize="large">add</Icon>
    </IconButton>
  );
};

const ApplicationBar = ({ classes, location }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.title}>
          <Link href="/" color="inherit">
            Tasks
          </Link>
        </Typography>
        {location.pathname !== '/new' && renderAddButton()}
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(ApplicationBar);
