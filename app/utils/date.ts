import { GREETING_THROTTLE } from "@/constants";

export const getDateKey = () => {
  const currentDate = new Date();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const day = currentDate.getDate().toString().padStart(2, '0');
  return month + '-' + day;
}

export const getUnixTimestamp = () => {
  return Math.floor(Date.now() / 1000);
};

export const getSecondsSince = (timestamp: number) => {
  return getUnixTimestamp() - timestamp;
};

export const getCoolDownPeriod = (timestamp: number) => {
  return GREETING_THROTTLE - getSecondsSince(timestamp);
}

export const isThrottled = (timestamp: number) => {
  return getSecondsSince(timestamp) < GREETING_THROTTLE;
}