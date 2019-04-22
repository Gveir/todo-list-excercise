import { FETCH_TASKS, TOGGLE_COMPLETE } from './types';

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
