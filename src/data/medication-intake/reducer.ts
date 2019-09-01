import { filter, uniqBy } from 'lodash';
import { v4 as uuid } from 'uuid';

import {
  ADD,
  EDIT,
  REMOVE,
  MedicationIntake,
  MedicationIntakeAction,
} from './types';

const INITIAL_STATE: MedicationIntake[] = [];

export const reducer = (
  state = INITIAL_STATE,
  action?: MedicationIntakeAction,
): MedicationIntake[] => {
  const request = action || {
    type: '',
  };

  switch (request.type) {
    case ADD: {
      return [
        ...state,
        {
          ...request.payload,
          intakeId: request.payload.intakeId || uuid(),
        },
      ];
    }

    case EDIT: {
      return uniqBy([request.payload, ...state], item => item.intakeId);
    }

    case REMOVE: {
      return filter(state, item => item.intakeId !== request.meta.intakeId);
    }

    default:
      return state;
  }
};
