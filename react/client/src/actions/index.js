import { FETCH_TASKS } from './types';

export const fetchTasks = () => {
  return {
    type: FETCH_TASKS,
    payload: [
      { id: 1, title: 'Task 1', completed: false },
      { id: 2, title: 'Task 2', completed: true }
    ]
  };
};
