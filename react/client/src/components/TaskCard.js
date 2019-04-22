import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import { toggleComplete } from '../actions';

const styles = () => ({
  card: {
    margin: '8px 0'
  },
  titleCompleted: {
    textDecoration: 'line-through'
  }
});

class TaskCard extends React.Component {
  onTaskCompleteClicked = () => {
    this.props.toggleComplete(this.props.task);
  };

  render() {
    const { task, classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <IconButton
            id="task-completed"
            color="primary"
            onClick={() => this.onTaskCompleteClicked()}
          >
            <Icon fontSize="large">
              {task.completed ? 'check_box' : 'check_box_outline_blank'}
            </Icon>
          </IconButton>
          <Typography
            className={task.completed ? classes.titleCompleted : ''}
            variant="h6"
            color="textPrimary"
            gutterBottom
          >
            {task.title}
          </Typography>
          {task.dueDate && (
            <Typography variant="body2">
              Due date: {task.dueDate.toLocaleDateString()}
            </Typography>
          )}
        </CardContent>
      </Card>
    );
  }
}

export default compose(
  withStyles(styles),
  connect(
    null,
    { toggleComplete }
  )
)(TaskCard);
