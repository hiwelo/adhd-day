import { Log } from './logger/types';
import { Prescriptions } from './medication/types';
import { MedicationIntake } from './medicationIntake/types';
import { User } from './user/types';

export interface AppData {
  logger: Log[];
  medication: Prescriptions;
  medicationIntake: MedicationIntake[];
  user: User;
}
