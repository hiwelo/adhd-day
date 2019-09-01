import { v4 as uuid } from 'uuid';

import { reducer } from './reducer';
import { ADD, UPDATE, REMOVE, Medication, Prescriptions } from './types';

const mockMedication: Medication = {
  name: 'Concerta LP',
  mode: 'on-demand',
  configuration: {
    dailyIntake: 1,
  },
};

const mockPrescription: Prescriptions = {
  medications: [
    {
      ...mockMedication,
      medicationId: uuid(),
    },
  ],
};

const initialState: Prescriptions = {
  medications: [],
};

describe('Medications — Reducer', () => {
  it('should initiate the state', () => {
    const state = reducer(undefined);

    expect(state).toStrictEqual(initialState);
  });

  it('should add new medication to the prescriptions', () => {
    const { medications } = reducer(initialState, {
      type: ADD,
      payload: {
        ...mockMedication,
      },
    });
    const [medication] = medications;

    expect(medications).toHaveLength(1);
    expect(medication).toMatchObject(mockMedication);
    expect(medication).toHaveProperty('medicationId');
  });

  it('should update the requested medication', () => {
    const { medications: currentMedications } = mockPrescription;
    const [currentMedication] = currentMedications;
    const { medications: updatedMedications } = reducer(mockPrescription, {
      type: UPDATE,
      payload: {
        ...currentMedication,
        name: 'Ritaline',
      },
    });
    const [updatedMedication] = updatedMedications;

    expect(updatedMedications).not.toBe(currentMedications);
    expect(currentMedication.medicationId).toBe(updatedMedication.medicationId);
    expect(updatedMedication.name).toBe('Ritaline');
  });

  it('should delete the requested intake', () => {
    const { medications: currentMedications } = mockPrescription;
    const [medication] = currentMedications;
    const { medications } = reducer(mockPrescription, {
      type: REMOVE,
      meta: {
        medicationId: medication.medicationId,
      },
    });

    expect(medications).toHaveLength(0);
  });
});
