export interface ScheduledIntakeInterface {
  /**
   * Medication dosage for this intake
   */
  strength: string;

  /**
   * Scheduled time for this intake
   */
  scheduledTime: Date;
}

export interface IntakeWindowInterface {
  /**
   * Intake timeframe start
   */
  start: Date;

  /**
   * Intake timeframe end
   */
  end: Date;

  /**
   *
   */
  days: Array<
    | 'Monday'
    | 'Tuesday'
    | 'Wednesday'
    | 'Thursday'
    | 'Friday'
    | 'Saturday'
    | 'Sunday'
  >;
}

export default interface MedicationInterface {
  /**
   * Name of the medication
   */
  name: string;

  /**
   * UniqID for this medication
   */
  uniqID: string;

  /**
   * Intake timing for this medication
   */
  timing?: 'on-demand' | 'interval' | 'fixed';

  /**
   * Intake schedule for this medication, if timing is fixed
   */
  schedule?: ScheduledIntakeInterface[];

  /**
   * Internal in seconds between two intakes, for timing is based on intervals
   */
  interval?: number;

  /**
   * Interval time window where medication intakes are allowed, for timing based on intervals
   */
  intervalWindow?: IntakeWindowInterface[];

  /**
   * Daily maximum intake for 'on-demand' and 'interval'-based timings
   */
  dailyIntake?: number;
}
