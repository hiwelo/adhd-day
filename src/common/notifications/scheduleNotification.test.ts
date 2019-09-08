import { Notifications } from 'expo';
import {
  LocalNotification,
  LocalNotificationId,
} from 'expo/build/Notifications/Notifications.types';

import { scheduleNotification } from './scheduleNotification';

jest.mock('expo');

const scheduleLocalNotificationAsync = Notifications.scheduleLocalNotificationAsync as any;
const testNotificationId: LocalNotificationId = 'testId';
const testNotification: LocalNotification = {
  title: 'Notification test',
  body: 'Notification to test the script',
};

describe('Utilities – scheduleNotification', () => {
  it('should schedule a new notification', async () => {
    scheduleLocalNotificationAsync.mockImplementation(() => {
      return testNotificationId;
    });

    expect(await scheduleNotification(testNotification)).toBe(
      testNotificationId,
    );
  });
});
