import { reducer } from './reducer';
import { EMPTY, SET, User } from './types';

const initialState: User = {
  name: undefined,
};

const testUser: User = {
  name: 'Test User',
};

describe('User – Reducer', () => {
  it('should initiate the state', () => {
    const state = reducer();

    expect(state).toStrictEqual(initialState);
  });

  it('should set new information', () => {
    const state = reducer(initialState, {
      type: SET,
      payload: testUser,
    });

    expect(state).toMatchObject(testUser);
  });

  it('should empty the current user', () => {
    const state = reducer(testUser, {
      type: EMPTY,
    });

    expect(state).not.toMatchObject(testUser);
  });
});
