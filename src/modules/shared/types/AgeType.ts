const titles = {
  young: "от 14-17 лет",
  youngAdults: "от 18-35 лет",
  adults: "от 36-50 лет",
  middleAge: "от 51-67 лет",
  olderAge: "от 68-90 лет",
};

export const ageTypes = ["young", "youngAdults", "adults", "middleAge", "olderAge"] as const;

export type AgeType = (typeof ageTypes)[number];

export const getAgeTitle = (value: AgeType) => titles[value];

export const getAgeValue = (value: number) => {
  if (value <= 17) return "young";
  if (value <= 35) return "youngAdults";
  if (value <= 50) return "adults";
  if (value <= 67) return "middleAge";
  return "olderAge";
};
