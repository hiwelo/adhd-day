import { addLog, removeLog } from './actions';
import { ADD, LOG_APP, REMOVE, Log, LOG_ACTION_ADD } from './types';

const mockLog: Log = {
  type: LOG_APP,
  timestamp: new Date(),
  action: LOG_ACTION_ADD,
  message: 'Log system test',
  logId: 'testId',
};

describe('Logger — Actions', () => {
  it('should create an action to log a message', () => {
    const expectedAction = {
      type: ADD,
      payload: mockLog,
    };

    expect(addLog(mockLog)).toEqual(expectedAction);
  });

  it('should create an action to remove an existing log', () => {
    const expectedAction = {
      type: REMOVE,
      meta: {
        logId: mockLog.logId,
      },
    };

    expect(removeLog(mockLog.logId)).toEqual(expectedAction);
  });
});
