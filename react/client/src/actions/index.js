import tasks from '../api/tasks'
import {
  FETCH_TASK,
  FETCH_TASKS,
  CREATE_TASK,
  EDIT_TASK,
  DELETE_TASK,
  TOGGLE_COMPLETE
} from './types';

export const fetchTask = id => async dispatch => {
  const response = await tasks.get(`/tasks/${id}`)

  dispatch({ type: FETCH_TASK, payload: response.data })
}

export const fetchTasks = () => async dispatch => {
  const response = await tasks.get("/tasks")

  dispatch({ type: FETCH_TASKS, payload: response.data })
}

export const createTask = formValues => async dispatch => {
  const response = await tasks.post("/tasks", formValues)

  dispatch({ type: CREATE_TASK, payload: response.data })
}

export const editTask = (id, formValues) => async dispatch => {
  const response = await tasks.patch(`/tasks/${id}`, formValues)

  dispatch({ type: EDIT_TASK, payload: response.data })
}

export const deleteTask = task => {
  return {
    type: DELETE_TASK,
    task
  };
};

export const toggleComplete = task => {
  return {
    type: TOGGLE_COMPLETE,
    task
  };
};
