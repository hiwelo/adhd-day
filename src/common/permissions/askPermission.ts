import Permissions, {
  PermissionStatus,
  PermissionType,
} from 'expo-permissions';

const PERMISSION_GRANTED = 'granted';

export const askPermission = async (
  type: PermissionType,
): Promise<PermissionStatus> => {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions[type],
  );
  let finalStatus = existingStatus;

  if (existingStatus !== PERMISSION_GRANTED) {
    const { status } = await Permissions.askAsync(Permissions[type]);
    finalStatus = status;
  }

  return finalStatus;
};
