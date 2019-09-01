import { filter } from 'lodash';
import { v4 as uuid } from 'uuid';

import { ADD, REMOVE, Log, LogActions } from './types';

const INITIAL_STATE: Log[] = [];

export const reducer = (state = INITIAL_STATE, action?: LogActions): Log[] => {
  const request = action || { type: '' };

  switch (request.type) {
    case ADD:
      return [
        ...state,
        {
          ...request.payload,
          logId: request.payload.logId || uuid(),
        },
      ];

    case REMOVE:
      return filter(state, item => item.logId !== request.meta.logId);

    default:
      return state;
  }
};
