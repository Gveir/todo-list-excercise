import _ from 'lodash';

import { FETCH_TASK, FETCH_TASKS, TOGGLE_COMPLETE, DELETE_TASK } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_TASK:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_TASK:
      return _.omit(state, action.task.id);
    case TOGGLE_COMPLETE:
      const { task } = action;
      return {
        ...state,
        ..._.mapKeys([{ ...task, isCompleted: !task.isCompleted }], 'id')
      };
    default:
      return state;
  }
};
