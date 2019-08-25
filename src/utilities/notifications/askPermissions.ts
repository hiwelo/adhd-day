import * as Permissions from 'expo-permissions';

/**
 * Checks if the user granted permission for us to use Notifications.
 * If not, we're asking the user to grant us permission.
 */
export const askPermissions = async (): Promise<boolean> => {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS,
  );
  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  if (finalStatus !== 'granted') {
    return false;
  }

  return true;
};
