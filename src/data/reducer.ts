import { combineReducers } from 'redux';
import { reducer as medicationReducer } from './medication/reducer';
import { reducer as userReducer } from './user/reducer';

export const reducer = combineReducers({
  medication: medicationReducer,
  user: userReducer,
});
