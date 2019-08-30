import { filter, uniqBy } from 'lodash';
import uniqid from 'uniqid';

import {
  ADD,
  EDIT,
  REMOVE,
  MedicationAdherence,
  MedicationIntakeAction,
} from './types';

const INITIAL_STATE: MedicationAdherence = {
  intakes: [],
};

export const reducer = (
  state = INITIAL_STATE,
  action: MedicationIntakeAction,
): MedicationAdherence => {
  switch (action.type) {
    case ADD: {
      return {
        ...state,
        intakes: [
          ...state.intakes,
          {
            ...action.payload,
            intakeId: action.payload.intakeId || uniqid(),
          },
        ],
      };
    }

    case EDIT: {
      return {
        ...state,
        intakes: uniqBy(
          [action.payload, ...state.intakes],
          item => item.intakeId,
        ),
      };
    }

    case REMOVE: {
      return {
        ...state,
        intakes: filter(
          state.intakes,
          item => item.intakeId !== action.meta.intakeId,
        ),
      };
    }

    default:
      return state;
  }
};
