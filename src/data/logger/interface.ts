export default interface LogInterface {
  /**
   * Type of event being logged
   */
  type: 'medication-intake' | 'mood' | 'sleep' | 'food';

  /**
   * Timestamp associated to this log
   */
  timestamp: Date;

  /**
   * Action being current logged
   */
  action: 'ADD' | 'EDIT' | 'REMOVE' | string;

  /**
   * ID of the object associated to this log
   */
  objectID?: string;

  /**
   * Message associated to this log
   */
  message?: string;
}
