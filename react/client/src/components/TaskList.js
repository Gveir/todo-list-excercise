import React from 'react';
import { connect } from 'react-redux';

import { fetchTasks } from '../actions';
import TaskCard from './TaskCard';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchTasks();
  }

  renderTasks = () => {
    return this.props.tasks.map(task => {
      return <TaskCard key={task.id} task={task} />;
    });
  };

  render() {
    return (
      <div>
        <h1>Tasks</h1>
        <div>{this.renderTasks()}</div>
      </div>
    );
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
)(StreamList);
