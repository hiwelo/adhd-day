import MedicationInterface, {
  ScheduledIntakeInterface,
} from '../medication/interface';

export default interface MedicationIntakeInterface {
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
