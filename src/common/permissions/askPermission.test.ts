import Permissions from 'expo-permissions';

import { askPermission } from './askPermission';

jest.mock('expo-permissions');

const getAsync = Permissions.getAsync as any;
const askAsync = Permissions.askAsync as any;

describe('Utilities — askPermission', () => {
  it('should request user for permission if undetermined', async () => {
    getAsync.mockImplementation(() => {
      return { status: Permissions.PermissionStatus.UNDETERMINED };
    });

    askAsync.mockImplementation(() => {
      return { status: Permissions.PermissionStatus.GRANTED };
    });

    expect(await askPermission(Permissions.NOTIFICATIONS)).toBe(
      Permissions.PermissionStatus.GRANTED,
    );

    askAsync.mockImplementation(() => {
      return { status: Permissions.PermissionStatus.DENIED };
    });

    expect(await askPermission(Permissions.NOTIFICATIONS)).toBe(
      Permissions.PermissionStatus.DENIED,
    );
  });

  it('should return denied if the permission is not granted', async () => {
    getAsync.mockImplementation(() => {
      return { status: Permissions.PermissionStatus.DENIED };
    });

    expect(await askPermission(Permissions.NOTIFICATIONS)).toBe(
      Permissions.PermissionStatus.DENIED,
    );
  });

  it('should return granted if the permission is already granted', async () => {
    getAsync.mockImplementation(() => {
      return { status: Permissions.PermissionStatus.GRANTED };
    });

    expect(await askPermission(Permissions.NOTIFICATIONS)).toBe(
      Permissions.PermissionStatus.GRANTED,
    );
  });
});
