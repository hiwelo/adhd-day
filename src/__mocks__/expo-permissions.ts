const Permissions = jest.genMockFromModule('expo-permissions') as any;

Permissions.getAsync = jest.fn(() => Promise.resolve()) as any;
Permissions.askAsync = jest.fn(() => Promise.resolve()) as any;

export default Permissions;
