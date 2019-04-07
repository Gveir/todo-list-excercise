import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
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
        <Typography variant="h6" color="textPrimary" gutterBottom>
          {task.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(TaskCard);
