import { v4 as uuid } from 'uuid';

import { reducer } from './reducer';
import { Log, LOG_APP, LOG_ACTION_ADD, ADD, REMOVE } from './types';

const mockLog: Log = {
  type: LOG_APP,
  timestamp: new Date(),
  action: LOG_ACTION_ADD,
  message: 'Log system test',
};

const initialState = [];

const mockState = [
  {
    ...mockLog,
    logId: uuid(),
  },
];

describe('Logger — Reducer', () => {
  it('should initiate the state', () => {
    expect(reducer(undefined)).toStrictEqual(initialState);
  });

  it('should add new log to the logger', () => {
    const state = reducer(initialState, {
      type: ADD,
      payload: mockLog,
    });
    const [log] = state;

    expect(state).toHaveLength(1);
    expect(log).toMatchObject(mockLog);
    expect(log).toHaveProperty('logId');
  });

  it('should remove a requeted log from the logger', () => {
    // we add a uniqId for the test log of our logger
    mockState[0].logId = uuid();

    // we get our test log
    const [log] = mockState;

    // we ask for the deletion of our test log
    const updatedState = reducer(mockState, {
      type: REMOVE,
      meta: {
        logId: log.logId,
      },
    });

    expect(updatedState).toHaveLength(0);
  });
});
