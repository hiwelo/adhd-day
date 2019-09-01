// Defines the possible kind of logs

export const LOG_APP = 'app';
export const LOG_FOOD = 'food';
export const LOG_INTAKE = 'medication-intake';
export const LOG_MOOD = 'mood';
export const LOG_SLEEP = 'sleep';

// Defines possible kind of actions

export const LOG_ACTION_ADD = 'log/add';
export const LOG_ACTION_UPDATE = 'log/update';
export const LOG_ACTION_DELETE = 'log/delete';
export const LOG_ACTION_ERROR = 'log/error';

// Defines the Log related interfaces

export interface Log {
  /**
   * Type of event being logged
   */
  type: LogType;

  /**
   * Timestamp associated to this log
   */
  timestamp: Date;

  /**
   * Action being current logged
   */
  action: LogAction;

  /**
   * Message associated to this log
   */
  message: string;

  /**
   * ID of the current log
   */
  logId?: string;

  /**
   * ID of the object associated to this log
   */
  objectID?: string;
}

export type LogType =
  | typeof LOG_APP
  | typeof LOG_FOOD
  | typeof LOG_INTAKE
  | typeof LOG_MOOD
  | typeof LOG_SLEEP;

export type LogAction =
  | typeof LOG_ACTION_ADD
  | typeof LOG_ACTION_DELETE
  | typeof LOG_ACTION_ERROR
  | typeof LOG_ACTION_UPDATE;

// Describes reducer's actions

export const ADD = 'log/ADD';
export const REMOVE = 'log/REMOVE';

interface AddLog {
  type: typeof ADD;

  /**
   * Added log information
   */
  payload: Log;
}

interface RemoveLog {
  type: typeof REMOVE;

  /**
   * UniqID of the log to remove
   */
  meta: {
    logId: Log['logId'];
  };
}

export type LogActions = AddLog | RemoveLog;
