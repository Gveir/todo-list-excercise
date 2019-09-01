import React from 'react';
import { connect } from "react-redux";

import { fetchTask } from '../../actions'
import TaskForm from './TaskForm';

class TaskEdit extends React.Component {
  componentDidMount() {
    this.props.fetchTask(this.props.match.params.id)
  }

  render() {
    return <TaskForm task={this.props.task} />;
  };
}

const mapStateToProps = (state, ownProps) => {
  return { task: state.tasks[ownProps.match.params.id] }
}
export default connect(mapStateToProps, { fetchTask })(TaskEdit);
