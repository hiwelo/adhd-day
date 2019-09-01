import { v4 as uuid } from 'uuid';

import { reducer } from './reducer';
import { ADD, EDIT, MedicationIntake, REMOVE } from './types';

const initialState: MedicationIntake[] = [];

const mockIntake = {
  medicationId: 'testMedicationId',
  timestamp: new Date(),
};

const mockIntakes = [
  {
    ...mockIntake,
    intakeId: uuid(),
  },
  {
    ...mockIntake,
    intakeId: uuid(),
  },
];

describe('Medication Intake – Reducer', () => {
  it('should initiate the state', () => {
    const state = reducer();

    expect(state).toStrictEqual([]);
  });

  it('should add new intake to the state', () => {
    const state = reducer(initialState, {
      type: ADD,
      payload: {
        ...mockIntake,
      },
    });
    const lastIntake = state[state.length - 1];

    expect(lastIntake).toMatchObject(mockIntake);
    expect(lastIntake).toHaveProperty('intakeId');
  });

  it('should update the requested intake', () => {
    const oldState = mockIntakes;
    const newState = reducer(mockIntakes, {
      type: EDIT,
      payload: {
        ...oldState[0],
        medicationId: 'testId',
      },
    });

    expect(oldState).not.toBe(newState);
    expect(newState[0].medicationId).toBe('testId');
    expect(oldState[0].intakeId).toBe(newState[0].intakeId);
  });

  it('should delete the requested intake', () => {
    const state = reducer(mockIntakes, { type: ADD, payload: mockIntake });
    const firstIntake = state[0];
    const lastIntake = state[state.length - 1];
    const postDeletionState = reducer(state, {
      type: REMOVE,
      meta: {
        intakeId: lastIntake.intakeId,
      },
    });

    expect(postDeletionState).toContain(firstIntake);
    expect(postDeletionState).not.toContain(lastIntake);
  });
});
