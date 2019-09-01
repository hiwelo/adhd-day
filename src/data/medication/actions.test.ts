import { addMedication, updateMedication, removeMedication } from './actions';
import { ADD, UPDATE, REMOVE, Medication } from './types';

const mockMedication: Medication = {
  name: 'Concerta LP',
  mode: 'on-demand',
  configuration: {
    dailyIntake: 1,
  },
};

describe('Medication — Actions', () => {
  it('should create an action to add a medication', () => {
    const expectedAction = {
      type: ADD,
      payload: mockMedication,
    };

    expect(addMedication(mockMedication)).toEqual(expectedAction);
  });

  it('should create an action to update a medication', () => {
    const expectedAction = {
      type: UPDATE,
      payload: mockMedication,
    };

    expect(updateMedication(mockMedication)).toEqual(expectedAction);
  });

  it('should create an action to delete a medication', () => {
    const expectedAction = {
      type: REMOVE,
      meta: {
        medicationId: mockMedication.medicationId,
      },
    };

    expect(removeMedication(mockMedication.medicationId)).toEqual(
      expectedAction,
    );
  });
});
