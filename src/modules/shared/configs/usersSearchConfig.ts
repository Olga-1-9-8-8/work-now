export type UserSearchItem = {
  title: string;
  href: string;
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
        href: "text=Вожатый",
      },
      {
        title: "Водитель",
        href: "text=Вожатый",
      },
      {
        title: "Официант",
        href: "text=Вожатый",
      },
      {
        title: "Учитель",
        href: "text=Вожатый",
      },
      {
        title: "Менеджер ",
        href: "text=Вожатый",
      },
      {
        title: "Администратор",
        href: "text=Вожатый",
      },
      {
        title: "Курьер",
        href: "text=Вожатый",
      },
      {
        title: "Продавец",
        href: "text=Вожатый",
      },
    ],
  },
  {
    title: "Вакансии по регионам",
    items: [
      {
        title: "Карелия",
        href: "10",
      },
      {
        title: "Республика Алтай",
        href: "10",
      },
      {
        title: "Ленинградская область",
        href: "47",
      },
      {
        title: "Мурманская область",
        href: "51",
      },
      {
        title: "Байконур ",
        href: "94",
      },
      {
        title: "Смоленская область",
        href: "67",
      },
      {
        title: "Краснодарский край",
        href: "23",
      },
      {
        title: "Забайкальский край",
        href: "75",
      },
    ],
  },
  {
    title: "Вакансии по компаниям",
    items: [
      {
        title: "Сбербанк",
        href: "text=Сбербанк",
      },
      {
        title: "Роснефть",
        href: "text=Роснефть",
      },
      {
        title: "Газпром",
        href: "text=Газпром",
      },
      {
        title: "X5Group",
        href: "text=X5Group",
      },
      {
        title: "Магнит",
        href: "text=Магнит",
      },
      {
        title: "ПИК",
        href: "text=ПИК",
      },
      {
        title: "Русгидро",
        href: "text=Русгидро",
      },
      {
        title: "Полюс",
        href: "text=Полюс",
      },
    ],
  },

  {
    title: "Популярная работа",
    items: [
      {
        title: "Сбербанк",
        href: "text=Сбербанк",
      },
      {
        title: "Менеджер",
        href: "text=Менеджер",
      },
      {
        title: "Газпром",
        href: "text=Газпром",
      },
      {
        title: "Курьер",
        href: "text=Курьер",
      },
      {
        title: "Магнит",
        href: "text=Магнит",
      },
      {
        title: "Официант",
        href: "text=Официант",
      },
      {
        title: "Вожатый",
        href: "text=Вожатый",
      },
      {
        title: "X5",
        href: "text=X5",
      },
    ],
  },
];
