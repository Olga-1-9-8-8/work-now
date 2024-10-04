export const formatCurrency = (
  value: number,
  locale: string = "ru-RU",
  currency: string = "RUB",
) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
};
