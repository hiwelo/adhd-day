import { ADD, UPDATE, REMOVE, MedicationAction, Medication } from './types';

export const addMedication = (payload: Medication): MedicationAction => {
  return { type: ADD, payload };
};

export const updateMedication = (payload: Medication): MedicationAction => {
  return { type: UPDATE, payload };
};

export const removeMedication = (
  medicationId: Medication['medicationId'],
): MedicationAction => {
  return { type: REMOVE, meta: { medicationId } };
};
