import { Notifications } from 'expo';
import {
  LocalNotification,
  LocalNotificationId,
} from 'expo/build/Notifications/Notifications.types';

interface SchedulingOptions {
  time?: Date | number;
  repeat?: 'minute' | 'hour' | 'day' | 'week' | 'month' | 'year';
  intervalMs?: number;
}

export const scheduleNotification = async (
  notification: LocalNotification,
  scheduling: SchedulingOptions = {},
): Promise<LocalNotificationId> => {
  return Notifications.scheduleLocalNotificationAsync(notification, scheduling);
};
