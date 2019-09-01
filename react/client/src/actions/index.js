import { FETCH_TASK, FETCH_TASKS, TOGGLE_COMPLETE, DELETE_TASK } from './types';

export const fetchTask = (id) => {
  return {
    type: FETCH_TASK,
    payload: {
      id: id, title: 'Task', completed: false, dueDate: null
    }
  }
}
export const fetchTasks = () => {
  return {
    type: FETCH_TASKS,
    payload: [
      { id: 1, title: 'Task 1', completed: false },
      { id: 2, title: 'Task 2', completed: true },
      {
        id: 3,
        title: 'Task 3',
        completed: true,
        dueDate: new Date(2019, 4, 15)
      }
    ]
  };
};

export const toggleComplete = task => {
  return {
    type: TOGGLE_COMPLETE,
    task
  };
};

export const deleteTask = task => {
  return {
    type: DELETE_TASK,
    task
  };
};
