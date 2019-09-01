import React from 'react';

import TaskForm from './TaskForm';

const newTask = {
  title: '',
  completed: false,
  dueDate: null
};

const TaskCreate = () => {
  return <TaskForm task={newTask} />;
};

export default TaskCreate;
