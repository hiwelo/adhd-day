import {
  ADD,
  EDIT,
  REMOVE,
  MedicationIntake,
  MedicationIntakeAction,
} from './types';

export const addIntake = (
  payload: MedicationIntake,
): MedicationIntakeAction => {
  return { type: ADD, payload };
};

export const editIntake = (
  payload: MedicationIntake,
): MedicationIntakeAction => {
  return { type: EDIT, payload };
};

export const removeIntake = (
  payload: MedicationIntake,
): MedicationIntakeAction => {
  return { type: REMOVE, payload };
};
