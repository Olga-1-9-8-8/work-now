export type UserSearchItem = {
  title: string;
  code?: number;
};

export type UserSearchItems = {
  positions: UserSearchItem[];
  regions: UserSearchItem[];
  companies: UserSearchItem[];
  popular: UserSearchItem[];
};

export const userSearchConfig: UserSearchItems = {
  positions: [
    {
      title: "Вожатый",
    },
    {
      title: "Водитель",
    },
    {
      title: "Официант",
    },
    {
      title: "Учитель",
    },
    {
      title: "Менеджер ",
    },
    {
      title: "Администратор",
    },
    {
      title: "Курьер",
    },
    {
      title: "Продавец",
    },
  ],
  regions: [
    {
      title: "Карелия",
      code: 10,
    },
    {
      title: "Республика Алтай",
      code: 10,
    },
    {
      title: "Ленинградская область",
      code: 47,
    },
    {
      title: "Мурманская область",
      code: 51,
    },
    {
      title: "Байконур ",
      code: 94,
    },
    {
      title: "Смоленская область",
      code: 67,
    },
    {
      title: "Краснодарский край",
      code: 23,
    },
    {
      title: "Забайкальский край",
      code: 75,
    },
  ],
  companies: [
    {
      title: "Сбербанк",
    },
    {
      title: "Роснефть",
    },
    {
      title: "Газпром",
    },
    {
      title: "X5 Group",
    },
    {
      title: "Магнит",
    },
    {
      title: "ПИК",
    },
    {
      title: "Русгидро",
    },
    {
      title: "Полюс",
    },
  ],

  popular: [
    {
      title: "Сбербанк",
    },
    {
      title: "Менеджер",
    },
    {
      title: "Газпром",
    },
    {
      title: "Курьер",
    },
    {
      title: "Магнит",
    },
    {
      title: "Официант",
    },
    {
      title: "Вожатый",
    },
    {
      title: "X5 Group",
    },
  ],
};
