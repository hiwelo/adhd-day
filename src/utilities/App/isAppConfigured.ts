import { store } from '../../store';

/**
 * Checks whether the application is already configured or not.
 * 
 * This check is based on having or not a name for the user
 */
export default () => {
  const { user } = store.getState().data;

  return user.name !== undefined;
};
