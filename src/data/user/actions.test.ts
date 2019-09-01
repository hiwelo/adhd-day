import { resetUser, setUser } from './actions';
import { EMPTY, SET } from './types';

describe('User – Actions', () => {
  it('should create an action to empty the current user', () => {
    const expectedAction = {
      type: EMPTY,
    };

    expect(resetUser()).toEqual(expectedAction);
  });

  it('should create an action to set the current user', () => {
    const user = {
      name: 'Test name',
    };
    const expectedAction = {
      type: SET,
      payload: user,
    };

    expect(setUser(user)).toEqual(expectedAction);
  });
});
