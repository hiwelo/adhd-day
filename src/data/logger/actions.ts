import { ADD, REMOVE, Log, LogActions } from './types';

export const addLog = (payload: Log): LogActions => {
  return { type: ADD, payload };
};

export const removeLog = (logId: Log['logId']): LogActions => {
  return { type: REMOVE, meta: { logId } };
};
