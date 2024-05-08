export type UserSearchItem = {
  title: string;
  value?: string;
};

export type UserSearchItems = {
  title: string;
  items: UserSearchItem[];
};

export const userSearchConfig: UserSearchItems[] = [
  {
    title: "Вакансии по должности",
    items: [
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
  },
  {
    title: "Вакансии по регионам",
    items: [
      {
        title: "Карелия",
        value: "10",
      },
      {
        title: "Москва",
        value: "50",
      },
      {
        title: "Ленинградская область",
        value: "47",
      },
      {
        title: "Мурманская область",
        value: "51",
      },
      {
        title: "Байконур ",
        value: "94",
      },
      {
        title: "Смоленская область",
        value: "67",
      },
      {
        title: "Краснодарский край",
        value: "23",
      },
      {
        title: "Забайкальский край",
        value: "75",
      },
    ],
  },
  {
    title: "Вакансии по компаниям",
    items: [
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
        title: "X5Group",
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
  },

  {
    title: "Популярная работа",
    items: [
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
        title: "X5",
      },
    ],
  },
];
