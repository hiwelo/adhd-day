import { combineReducers } from 'redux';
import { reducer as loggerReducer } from './logger/reducer';
import { reducer as medicationReducer } from './medication/reducer';
import { reducer as medicationIntakeReducer } from './medicationIntake/reducer';
import { reducer as userReducer } from './user/reducer';

export const reducer = combineReducers({
  logger: loggerReducer,
  medication: medicationReducer,
  medicationIntake: medicationIntakeReducer,
  user: userReducer,
});
