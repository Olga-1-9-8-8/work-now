export const capitalizeFirstLetter = (str: string) => {
  return str[0].toUpperCase() + str.slice(1);
};

export const getRightNounWordDeclension = (
  quantity: number,
  word: string,
  wordEndings: string[],
) => {
  const getIndex = () => {
    if (quantity % 10 === 1 && quantity !== 11) return 0;
    if ((quantity > 1 && quantity < 5) || (quantity % 20 > 1 && quantity % 20 < 5)) return 1;
    return 2;
  };

  return `${quantity} ${word}${wordEndings[getIndex()]}`;
};

export const getRightNounYearDeclension = (quantity: string) => {
  if (quantity.at(-1) === "1") return `${quantity} год`;
  return [2, 3, 4].includes(Number(quantity.at(-1))) ? `${quantity} года` : `${quantity} лет`;
};

export const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};
