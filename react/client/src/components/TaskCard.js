import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import { toggleComplete, deleteTask } from '../actions';

const styles = () => ({
  card: {
    margin: '8px 0'
  },
  cardContent: {
    padding: '4px'
  },
  titleCompleted: {
    textDecoration: 'line-through'
  }
});

class TaskCard extends React.Component {
  onTaskCompleteClicked = () => {
    this.props.toggleComplete(this.props.task);
  };
  onTaskDeleteClicked = () => {
    this.props.deleteTask(this.props.task);
  };

  render() {
    const { task, classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Grid
            container
            spacing={0}
            alignItems="flex-start"
            direction="column"
          >
            <Grid
              item
              container
              justify="flex-start"
              alignItems="center"
              direction="row"
            >
              <Grid item>
                <IconButton
                  id="task-completed"
                  color="primary"
                  onClick={() => this.onTaskCompleteClicked()}
                >
                  <Icon fontSize="large">
                    {task.completed ? 'check_box' : 'check_box_outline_blank'}
                  </Icon>
                </IconButton>
              </Grid>
              <Grid item>
                <Typography
                  className={task.completed ? classes.titleCompleted : ''}
                  variant="h6"
                  color="textPrimary"
                >
                  {task.title}
                </Typography>
              </Grid>
            </Grid>
            {task.dueDate && (
              <Grid item container direction="row">
                <Grid item />
                <Grid item>
                  <Typography variant="body2">
                    Due date: {task.dueDate.toLocaleDateString()}
                  </Typography>
                </Grid>
              </Grid>
            )}
          </Grid>
        </CardContent>
        <CardActions>
          <Grid container direction="row" justify="flex-end" spacing={0}>
            <Grid item>
              <IconButton id="task-edit">
                <Icon fontSize="small">edit</Icon>
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                id="task-delete"
                color="secondary"
                onClick={this.onTaskDeleteClicked}
              >
                <Icon fontSize="small">delete</Icon>
              </IconButton>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    );
  }
}

export default compose(
  withStyles(styles),
  connect(
    null,
    { toggleComplete, deleteTask }
  )
)(TaskCard);
