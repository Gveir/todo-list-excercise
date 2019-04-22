import _ from 'lodash';

import { FETCH_TASKS, TOGGLE_COMPLETE } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case TOGGLE_COMPLETE:
      const { task } = action;
      return {
        ...state,
        ..._.mapKeys([{ ...task, completed: !task.completed }], 'id')
      };
    default:
      return state;
  }
};
