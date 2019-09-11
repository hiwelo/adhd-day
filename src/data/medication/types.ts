export const MEDICATION_MODE_ON_DEMAND = 'on-demand';
export const MEDICATION_MODE_INTERVAL = 'interval';
export const MEDICATION_MODE_FIXED = 'fixed';

export const MEDICATION_MODE_READABLE = {};
MEDICATION_MODE_READABLE[MEDICATION_MODE_ON_DEMAND] = 'On-demand medication';
MEDICATION_MODE_READABLE[MEDICATION_MODE_INTERVAL] = 'Interval-based schedule';
MEDICATION_MODE_READABLE[MEDICATION_MODE_FIXED] = 'Fixed schedule';

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
  mode?:
    | typeof MEDICATION_MODE_ON_DEMAND
    | typeof MEDICATION_MODE_INTERVAL
    | typeof MEDICATION_MODE_FIXED;

  configuration?: OnDemandIntake | IntervalIntake | FixedIntake;
}

export interface OnDemandMedication extends Medication {
  mode: typeof MEDICATION_MODE_ON_DEMAND;
  configuration?: OnDemandIntake;
}

export interface IntervalMedication extends Medication {
  mode: typeof MEDICATION_MODE_INTERVAL;
  configuration?: IntervalIntake;
}

export interface FixedMedication extends Medication {
  mode: typeof MEDICATION_MODE_FIXED;
  configuration?: FixedIntake;
}

export type MedicationTypes =
  | OnDemandMedication
  | IntervalMedication
  | FixedMedication;

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
  dailyIntake?: number;
}

interface IntervalIntake {
  /**
   * Daily maximum intake
   */
  dailyIntake?: number;

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
