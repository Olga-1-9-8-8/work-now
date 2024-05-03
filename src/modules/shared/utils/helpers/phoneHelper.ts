export const formatPhoneNumber = (phoneNumber: string) => {
  const cleanPhone = phoneNumber.replaceAll(/\D/g, "");
  return `${cleanPhone.startsWith("7") ? "" : "7"}${cleanPhone}`;
};
