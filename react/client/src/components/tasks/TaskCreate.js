import React from 'react';

import TaskForm from './TaskForm';

const newTask = {
  title: '',
  isCompleted: false,
  dueDate: null
};

const TaskCreate = () => {
  return <TaskForm task={newTask} />;
};

export default TaskCreate;
