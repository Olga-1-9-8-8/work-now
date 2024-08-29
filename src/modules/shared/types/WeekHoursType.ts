export const weekHoursTypes = ["40", "30", "20", "10"] as const;

export type WeekHoursType = (typeof weekHoursTypes)[number];
