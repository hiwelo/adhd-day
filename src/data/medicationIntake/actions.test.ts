import { addIntake, editIntake, removeIntake } from './actions';
import { ADD, EDIT, REMOVE } from './types';

const mockIntake = {
  medicationId: 'testMedicationId',
  timestamp: new Date(),
};

describe('Medication Intake – Actions', () => {
  it('should create an action to add an intake', () => {
    const expectedAction = {
      type: ADD,
      payload: mockIntake,
    };

    expect(addIntake(mockIntake)).toEqual(expectedAction);
  });

  it('should create an action to update an intake', () => {
    const expectedAction = {
      type: EDIT,
      payload: mockIntake,
    };

    expect(editIntake(mockIntake)).toEqual(expectedAction);
  });

  it('should create an action to delete an intake', () => {
    const intakeId = 'testId';
    const expectedAction = {
      type: REMOVE,
      meta: {
        intakeId,
      },
    };

    expect(removeIntake(intakeId)).toEqual(expectedAction);
  });
});
