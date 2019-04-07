import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

const styles = () => ({
  card: {
    margin: '8px 0'
  }
});

const TaskCard = ({ task, classes }) => {
  return (
    <Card className={classes.card}>
      <CardContent>
        <Checkbox
          id="task-completed"
          checked={task.completed}
          color="primary"
          className={classes.checkbox}
        />
        <Typography variant="h6" color="textPrimary" gutterBottom>
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
};

export default withStyles(styles)(TaskCard);
