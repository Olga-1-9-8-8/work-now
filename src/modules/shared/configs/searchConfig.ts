import { UniversalItemsWithTitleType } from "../types";

export type SearchConfigType = {
  position: UniversalItemsWithTitleType;
  city: UniversalItemsWithTitleType;
  company: UniversalItemsWithTitleType;
};

export const searchConfig: SearchConfigType = {
  position: {
    title: "по должности",
    items: [
      { title: "Вожатый" },
      { title: "Водитель" },
      { title: "Официант" },
      { title: "Учитель" },
      { title: "Менеджер" },
      { title: "Администратор" },
      { title: "Курьер" },
      { title: "Продавец" },
    ],
  },
  city: {
    title: "по регионам",
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
  company: {
    title: "по компаниям",
    isVacancyOnly: true,
    items: [
      { title: "Сбербанк" },
      { title: "Роснефть" },
      { title: "Газпром" },
      { title: "X5Group" },
      { title: "Магнит" },
      { title: "ПИК" },
      { title: "Русгидро" },
      { title: "Полюс" },
    ],
  },
};
