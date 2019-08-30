import MedicationInterface, {
  ScheduledIntakeInterface,
} from '../medication/interface';

// Describes data containers

export interface MedicationAdherence {
  /**
   * List all intakes for the current users
   */
  intakes: MedicationIntake[];
}

export interface MedicationIntake {
  /**
   * ID of this intake
   */
  intakeId: string;

  /**
   * ID of the related medication
   */
  medicationId: MedicationInterface['uniqID'];

  /**
   * Timestamp of the intake
   */
  timestamp: Date;

  /**
   * Status for this intake
   *    - true: taken
   *    - false: missed
   *    - undefined: waiting for information
   */
  status?: boolean;

  /**
   * Strength of the intake (if different from expected)
   */
  strength?: ScheduledIntakeInterface['strength'];
}

// Describes reducer's actions

export const ADD = 'medication-intake/ADD';
export const EDIT = 'medication-intake/EDIT';
export const REMOVE = 'medication-intake/REMOVE';

interface AddMedicationIntake {
  type: typeof ADD;

  /**
   * MedicationIntake to add to the current MedicationAdherence
   */
  payload: MedicationIntake;
}

interface UpdateMedicationIntake {
  type: typeof EDIT;

  /**
   * MedicationIntake to update in the current MedicationAdherence
   * MedicationIntake['intakeId'] should stay the same
   */
  payload: MedicationIntake;
}

interface RemoveMedicationIntake {
  type: typeof REMOVE;

  /**
   * MedicationIntake to remove from the current MedicationAdherence
   */
  meta: {
    intakeId: MedicationIntake['intakeId'];
  };
}

export type MedicationIntakeAction =
  | AddMedicationIntake
  | UpdateMedicationIntake
  | RemoveMedicationIntake;
