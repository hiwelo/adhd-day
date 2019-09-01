import Permissions from 'expo-permissions';

type PermissionStatus =
  | typeof Permissions.PermissionStatus.UNDETERMINED
  | typeof Permissions.PermissionStatus.GRANTED
  | typeof Permissions.PermissionStatus.DENIED;

type PermissionTypes =
  | typeof Permissions.NOTIFICATIONS
  | typeof Permissions.USER_FACING_NOTIFICATIONS;

/**
 * Checks if the user granted permission for us to use the requested system.
 * If undefined, we're asking the user to grant us permission.
 */
export const getPermission = async (
  type: PermissionTypes,
): Promise<PermissionStatus> => {
  const { status } = await Permissions.getAsync(type);

  // early-termination if not undefined
  if (status !== Permissions.PermissionStatus.UNDETERMINED) return status;

  const { status: response } = await Permissions.askAsync(type);

  return response;
};
