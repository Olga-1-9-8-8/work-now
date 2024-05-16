export const scheduleTypes = ["fullDay", "scheduleShift", "flexible", "remote"] as const;

export type ScheduleType = (typeof scheduleTypes)[number];
