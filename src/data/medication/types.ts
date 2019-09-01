export interface Medication {
  /**
   * Medication's name
   */
  name: string;

  /**
   * Medication ID
   */
  medicationId?: string;

  /**
   * Intake mode for this medication
   */
  mode?: 'on-demand' | 'interval' | 'fixed';

  /**
   * Intake configuration
   */
  configuration?: OnDemandIntake | IntervalIntake | FixedIntake;
}

export interface IntakeWindow {
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

export interface ScheduledIntake {
  /**
   * Medication dosage for this intake
   */
  strength: string;

  /**
   * Scheduled time for this intake
   */
  scheduledTime: Date;
}

interface OnDemandIntake {
  /**
   * Daily maximum intake
   */
  dailyIntake: number;
}

interface IntervalIntake {
  /**
   * Daily maximum intake
   */
  dailyIntake: number;

  /**
   * Interval in seconds between two intakes
   */
  interval: number;

  /**
   * Time window where medication intakes are allowed
   */
  intervalWindow: IntakeWindow[];
}

interface FixedIntake {
  schedule: ScheduledIntake[];
}

export interface Prescriptions {
  /**
   * List of all medication for the current user
   */
  medications: Medication[];
}

// Describes reducer's actions

export const ADD = 'medication/ADD';
export const UPDATE = 'medication/UPDATE';
export const REMOVE = 'medication/REMOVE';

interface AddMedication {
  type: typeof ADD;

  /**
   * Added medication information
   */
  payload: Medication;
}

interface UpdateMedication {
  type: typeof UPDATE;

  /**
   * Updated Medication object, keeping the same medicationId
   */
  payload: Medication;
}

interface RemoveMedication {
  type: typeof REMOVE;

  /**
   * ID of the medication to remove
   */
  meta: {
    medicationId: Medication['medicationId'];
  };
}

export type MedicationAction =
  | AddMedication
  | UpdateMedication
  | RemoveMedication;
