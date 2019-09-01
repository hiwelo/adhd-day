import { filter, uniqBy } from 'lodash';
import { v4 as uuid } from 'uuid';

import { ADD, UPDATE, REMOVE, Prescriptions, MedicationAction } from './types';

const INITIAL_STATE: Prescriptions = {
  medications: [],
};

export const reducer = (state = INITIAL_STATE, action?: MedicationAction) => {
  const request = action || { type: '' };

  switch (request.type) {
    case ADD:
      return {
        ...state,
        medications: [
          ...state.medications,
          {
            ...request.payload,
            medicationId: request.payload.medicationId || uuid(),
          },
        ],
      };

    case UPDATE:
      return {
        ...state,
        medications: uniqBy(
          [request.payload, ...state.medications],
          item => item.medicationId,
        ),
      };

    case REMOVE: {
      return {
        ...state,
        medications: filter(
          state.medications,
          item => item.medicationId !== request.meta.medicationId,
        ),
      };
    }

    default:
      return state;
  }
};
