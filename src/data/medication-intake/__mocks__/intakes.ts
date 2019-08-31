import { v4 as uuid } from 'uuid';
import mockIntake from './intake';

export default [
  {
    ...mockIntake,
    intakeId: uuid(),
  },
  {
    ...mockIntake,
    intakeId: uuid(),
  },
];
