export const formatPhoneNumber = (phoneNumber: string) => {
  const cleanPhone = phoneNumber.replaceAll(/\D/g, "");
  return `${cleanPhone.startsWith("7") ? "" : "7"}${cleanPhone}`;
};

export const maskPhoneNumber = (phoneNumber: string) => {
  return `${phoneNumber.slice(0, 1)} (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7, 9)}-${phoneNumber.slice(9, 11)}`;
};
