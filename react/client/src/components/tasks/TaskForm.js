import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, CircularProgress, Grid, Icon, TextField, Toolbar } from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  button: {
    marginLeft: theme.spacing(1)
  },
  spinnerContainer: {
    paddingTop: theme.spacing(8)
  }
}));

const renderSpinner = (classes) => {
  return <Grid
    alignItems='center'
    className={classes.spinnerContainer}
    container
    direction='row'
    justify='center'
  >
    <CircularProgress />
  </Grid>
}

const renderForm = (task, classes) => {

  return (
    <React.Fragment>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          autoFocus
          fullWidth
          id="title"
          label="Task title"
          margin="normal"
          required
          value={task.title}
          variant="outlined"
        />
        <KeyboardDatePicker
          clearable
          format="YYYY/MM/DD"
          id="due-date"
          inputVariant="outlined"
          KeyboardButtonProps={{
            'aria-label': 'change date'
          }}
          label="Due date"
          margin="normal"
          value={task.dueDate}
        />
      </form>
      <Toolbar>
        <Grid container direction="row" justify="flex-end" spacing={0}>
          <Button
            className={classes.button}
            color="primary"
            id="save"
            variant="contained"
          >
            <Icon>save</Icon>Save
          </Button>
          <Button
            className={classes.button}
            color="secondary"
            href="/"
            id="cancel"
            variant="outlined"
          >
            <Icon>cancel</Icon>Cancel
          </Button>
        </Grid>
      </Toolbar>
    </React.Fragment>
  );
}

const TaskForm = ({ task }) => {
  const classes = useStyles();
  return task ? renderForm(task, classes) : renderSpinner(classes)
};

export default TaskForm;
