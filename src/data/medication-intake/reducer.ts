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
  action: MedicationIntakeAction,
): MedicationIntake[] => {
  switch (action.type) {
    case ADD: {
      return [
        ...state,
        {
          ...action.payload,
          intakeId: action.payload.intakeId || uuid(),
        },
      ];
    }

    case EDIT: {
      return uniqBy([action.payload, ...state], item => item.intakeId);
    }

    case REMOVE: {
      return filter(state, item => item.intakeId !== action.meta.intakeId);
    }

    default:
      return state;
  }
};
