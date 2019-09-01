import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab'
import Icon from '@material-ui/core/Icon'

import { fetchTasks } from '../../actions';
import TaskCard from './TaskCard';

const styles = theme => ({
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
});

class TaskList extends React.Component {
  componentDidMount() {
    this.props.fetchTasks();
  }

  renderTasks = () => {
    return this.props.tasks.map(task => {
      return <TaskCard key={task.id} task={task} />;
    });
  };

  render() {
    const { classes } = this.props
    return <React.Fragment>
      {this.renderTasks()}
      <Fab className={classes.absolute} color='primary' href='/new'>
        <Icon fontSize="large">add</Icon>
      </Fab>
    </React.Fragment>
  }
}

const mapStateToProps = state => {
  return {
    tasks: Object.values(state.tasks)
  };
};

export default connect(
  mapStateToProps,
  { fetchTasks }
)(withStyles(styles)(TaskList));
