export const capitalizeFirstLetter = (str: string) => {
  return str[0].toUpperCase() + str.slice(1);
};

export const getQuantityDiapasonString = (number: number) => {
  switch (true) {
    case number === 0: {
      return 0;
    }
    case number < 5: {
      return "Меньше пяти";
    }
    case number < 10: {
      return "Меньше десяти";
    }
    case number < 20: {
      return "Меньше двадцати";
    }
    case number < 40: {
      return "Меньше сорока";
    }
    case number < 100: {
      return "Меньше ста";
    }
    case number >= 100: {
      return "Больше ста";
    }
    case number > 1000: {
      return "Больше тысячи";
    }
    default: {
      return "Не известное количество";
    }
  }
};

export const getRightNounWordDeclension = (
  quantity: number,
  word: string,
  wordEndings: string[],
) => {
  const getIndex = () => {
    if (quantity % 10 === 1 && quantity !== 11) return 0;
    if (quantity > 1 && quantity < 5) return 1;
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
