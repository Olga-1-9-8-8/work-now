import { UniversalItemsWithTitleType } from "../types";

export type SearchConfigType = {
  position: UniversalItemsWithTitleType;
  city: UniversalItemsWithTitleType;
  username: UniversalItemsWithTitleType;
};

export const searchConfig: SearchConfigType = {
  position: {
    title: "Должность",
    items: [
      {
        title: "Топ-менеджер",
        value: "Топ-менеджер",
      },
      {
        title: "Руководитель среднего звена",
        value: "Руководитель среднего звена",
      },
      {
        title: "Руководитель низшего звена",
        value: "Руководитель низшего звена",
      },
      {
        title: "Инженер",
        value: "Инженер",
      },
      {
        title: "Технолог",
        value: "Технолог",
      },
      {
        title: "Конструктор",
        value: "Конструктор",
      },
      {
        title: "Экономист",
        value: "Экономист",
      },
      {
        title: "Официант",
        value: "Официант",
      },
      {
        title: "Кулинар",
        value: "Кулинар",
      },
      {
        title: "Финансист",
        value: "Финансист",
      },
      {
        title: "Бухгалтер",
        value: "Бухгалтер",
      },
      {
        title: "Юрист",
        value: "Юрист",
      },
      {
        title: "Аналитик",
        value: "Аналитик",
      },
      {
        title: "Консультант",
        value: "Консультант",
      },
      {
        title: "Программист",
        value: "Программист",
      },
      {
        title: "Системный администратор",
        value: "Системный администратор",
      },
      {
        title: "Аналитик данных",
        value: "Аналитик данных",
      },
      {
        title: "Секретарь",
        value: "Секретарь",
      },
      {
        title: "Офис-менеджер",
        value: "Офис-менеджер",
      },
      {
        title: "Ассистент",
        value: "Ассистент",
      },
      {
        title: "Делопроизводитель",
        value: "Делопроизводитель",
      },
      {
        title: "Архивариус",
        value: "Архивариус",
      },
      {
        title: "Табельщик",
        value: "Табельщик",
      },
      {
        title: "Оператор",
        value: "Оператор",
      },
      {
        title: "Диспетчер",
        value: "Диспетчер",
      },
      {
        title: "Дежурный",
        value: "Дежурный",
      },
      {
        title: "Станочник",
        value: "Станочник",
      },
      {
        title: "Слесарь",
        value: "Слесарь",
      },
      {
        title: "Сборщик",
        value: "Сборщик",
      },
      {
        title: "Водитель",
        value: "Водитель",
      },
      {
        title: "Грузчик",
        value: "Грузчик",
      },
      {
        title: "Экспедитор",
        value: "Экспедитор",
      },
      {
        title: "Электрик",
        value: "Электрик",
      },
      {
        title: "Сантехник",
        value: "Сантехник",
      },
      {
        title: "Ремонтник",
        value: "Ремонтник",
      },
      {
        title: "Ученый",
        value: "Ученый",
      },
      {
        title: "Исследователь",
        value: "Исследователь",
      },
      {
        title: "Разработчик",
        value: "Разработчик",
      },
      {
        title: "Лаборант",
        value: "Лаборант",
      },
      {
        title: "Техник",
        value: "Техник",
      },
      {
        title: "Испытатель",
        value: "Испытатель",
      },
      {
        title: "Врач",
        value: "Врач",
      },
      {
        title: "Медсестра",
        value: "Медсестра",
      },
      {
        title: "Фармацевт",
        value: "Фармацевт",
      },
      {
        title: "Санитар",
        value: "Санитар",
      },
      {
        title: "Регистратор",
        value: "Регистратор",
      },
      {
        title: "Учитель",
        value: "Учитель",
      },
      {
        title: "Преподаватель",
        value: "Преподаватель",
      },
      {
        title: "Воспитатель",
        value: "Воспитатель",
      },
      {
        title: "Методист",
        value: "Методист",
      },
      {
        title: "Тьютор",
        value: "Тьютор",
      },
      {
        title: "Педагог-организатор",
        value: "Педагог-организатор",
      },
      {
        title: "Художник",
        value: "Художник",
      },
      {
        title: "Актер",
        value: "Актер",
      },
      {
        title: "Музыкант",
        value: "Музыкант",
      },
      {
        title: "Режиссер",
        value: "Режиссер",
      },
      {
        title: "Журналист",
        value: "Журналист",
      },
      {
        title: "Копирайтер",
        value: "Копирайтер",
      },
      {
        title: "Блогер",
        value: "Блогер",
      },
      {
        title: "Дизайнер",
        value: "Дизайнер",
      },
      {
        title: "Фотограф",
        value: "Фотограф",
      },
      {
        title: "Маркетолог",
        value: "Маркетолог",
      },
      {
        title: "Специалист по PR",
        value: "Специалист по PR",
      },
      {
        title: "Менеджер по продажам",
        value: "Менеджер по продажам",
      },
      {
        title: "Менеджер по продукту",
        value: "Менеджер по продукту",
      },
      {
        title: "Специалист по рекламе",
        value: "Специалист по рекламе",
      },
      {
        title: "Аналитик рынка",
        value: "Аналитик рынка",
      },
      {
        title: "Специалист по SEO",
        value: "Специалист по SEO",
      },
      {
        title: "Специалист по контенту",
        value: "Специалист по контенту",
      },
      {
        title: "Тренер",
        value: "Тренер",
      },
      {
        title: "Коуч",
        value: "Коуч",
      },
      {
        title: "Специалист по обучению",
        value: "Специалист по обучению",
      },
      {
        title: "Служитель",
        value: "Служитель",
      },
      {
        title: "Кассир",
        value: "Кассир",
      },
      {
        title: "Супервайзер",
        value: "Супервайзер",
      },
      {
        title: "Специалист по качеству",
        value: "Специалист по качеству",
      },
      {
        title: "Менеджер по логистике",
        value: "Менеджер по логистике",
      },
      {
        title: "Специалист по закупкам",
        value: "Специалист по закупкам",
      },
      {
        title: "Специалист по охране труда",
        value: "Специалист по охране труда",
      },
      {
        title: "Эколог",
        value: "Эколог",
      },
      {
        title: "Финансовый аналитик",
        value: "Финансовый аналитик",
      },
      {
        title: "Кредитный аналитик",
        value: "Кредитный аналитик",
      },
      {
        title: "Аудитор",
        value: "Аудитор",
      },
      {
        title: "Специалист по внутреннему контролю",
        value: "Специалист по внутреннему контролю",
      },
      {
        title: "Специалист по налогам",
        value: "Специалист по налогам",
      },
      {
        title: "Специалист по страхованию",
        value: "Специалист по страхованию",
      },
      {
        title: "Специалист по инвестициям",
        value: "Специалист по инвестициям",
      },
      {
        title: "Сетевой администратор",
        value: "Сетевой администратор",
      },
      {
        title: "Разработчик ПО",
        value: "Разработчик ПО",
      },
      {
        title: "Веб-разработчик",
        value: "Веб-разработчик",
      },
      {
        title: "Мобильный разработчик",
        value: "Мобильный разработчик",
      },
      {
        title: "Тестировщик",
        value: "Тестировщик",
      },
      {
        title: "Специалист по кибербезопасности",
        value: "Специалист по кибербезопасности",
      },
      {
        title: "Специалист по базам данных",
        value: "Специалист по базам данных",
      },
      {
        title: "Системный аналитик",
        value: "Системный аналитик",
      },
      {
        title: "UX/UI дизайнер",
        value: "UX/UI дизайнер",
      },
      {
        title: "Графический дизайнер",
        value: "Графический дизайнер",
      },
      {
        title: "Иллюстратор",
        value: "Иллюстратор",
      },
      {
        title: "Аниматор",
        value: "Аниматор",
      },
      {
        title: "Модель",
        value: "Модель",
      },
      {
        title: "Сценарист",
        value: "Сценарист",
      },
      {
        title: "Редактор",
        value: "Редактор",
      },
      {
        title: "Корректор",
        value: "Корректор",
      },
      {
        title: "Специалист по PR-кампаниям",
        value: "Специалист по PR-кампаниям",
      },
      {
        title: "Специалист по социальным медиа",
        value: "Специалист по социальным медиа",
      },
      {
        title: "Специалист по связям с общественностью",
        value: "Специалист по связям с общественностью",
      },
      {
        title: "Специалист по коммуникациям",
        value: "Специалист по коммуникациям",
      },
      {
        title: "Специалист по внутренним коммуникациям",
        value: "Специалист по внутренним коммуникациям",
      },
      {
        title: "Специалист по внешним коммуникациям",
        value: "Специалист по внешним коммуникациям",
      },
      {
        title: "Клиентский менеджер",
        value: "Клиентский менеджер",
      },
      {
        title: "Специалист по клиентскому обслуживанию",
        value: "Специалист по клиентскому обслуживанию",
      },
      {
        title: "Специалист по работе с клиентами",
        value: "Специалист по работе с клиентами",
      },
      {
        title: "Специалист по поддержке пользователей",
        value: "Специалист по поддержке пользователей",
      },
      {
        title: "Специалист по технической поддержке",
        value: "Специалист по технической поддержке",
      },
      {
        title: "Специалист по сервису",
        value: "Специалист по сервису",
      },
      {
        title: "Специалист по ремонту",
        value: "Специалист по ремонту",
      },
      {
        title: "Специалист по установке",
        value: "Специалист по установке",
      },
      {
        title: "Специалист по обслуживанию",
        value: "Специалист по обслуживанию",
      },
      {
        title: "Специалист по продажам",
        value: "Специалист по продажам",
      },
      {
        title: "Специалист по дистрибуции",
        value: "Специалист по дистрибуции",
      },
      {
        title: "Специалист по франчайзингу",
        value: "Специалист по франчайзингу",
      },
      {
        title: "Специалист по маркетинговым исследованиям",
        value: "Специалист по маркетинговым исследованиям",
      },
      {
        title: "Специалист по товарным запасам",
        value: "Специалист по товарным запасам",
      },
      {
        title: "Специалист по управлению запасами",
        value: "Специалист по управлению запасами",
      },
      {
        title: "Специалист по логистическим операциям",
        value: "Специалист по логистическим операциям",
      },
      {
        title: "Специалист по таможенному оформлению",
        value: "Специалист по таможенному оформлению",
      },
      {
        title: "Специалист по международным перевозкам",
        value: "Специалист по международным перевозкам",
      },
      {
        title: "Специалист по внутренним перевозкам",
        value: "Специалист по внутренним перевозкам",
      },
      {
        title: "Специалист по складским операциям",
        value: "Специалист по складским операциям",
      },
      {
        title: "Специалист по транспортной логистике",
        value: "Специалист по транспортной логистике",
      },
      {
        title: "Специалист по грузоперевозкам",
        value: "Специалист по грузоперевозкам",
      },
      {
        title: "Специалист по таможенным вопросам",
        value: "Специалист по таможенным вопросам",
      },
      {
        title: "Специалист по международной торговле",
        value: "Специалист по международной торговле",
      },
      {
        title: "Специалист по внешнеэкономической деятельности",
        value: "Специалист по внешнеэкономической деятельности",
      },
      {
        title: "Специалист по контрактам",
        value: "Специалист по контрактам",
      },
      {
        title: "Специалист по правовым вопросам",
        value: "Специалист по правовым вопросам",
      },
      {
        title: "Специалист по корпоративному праву",
        value: "Специалист по корпоративному праву",
      },
      {
        title: "Специалист по трудовому праву",
        value: "Специалист по трудовому праву",
      },
      {
        title: "Специалист по семейному праву",
        value: "Специалист по семейному праву",
      },
      {
        title: "Специалист по уголовному праву",
        value: "Специалист по уголовному праву",
      },
      {
        title: "Специалист по административному праву",
        value: "Специалист по административному праву",
      },
      {
        title: "Специалист по гражданскому праву",
        value: "Специалист по гражданскому праву",
      },
      {
        title: "Специалист по международному праву",
        value: "Специалист по международному праву",
      },
      {
        title: "Специалист по правам человека",
        value: "Специалист по правам человека",
      },
      {
        title: "Специалист по правам собственности",
        value: "Специалист по правам собственности",
      },
      {
        title: "Специалист по правам интеллектуальной собственности",
        value: "Специалист по правам интеллектуальной собственности",
      },
      {
        title: "Специалист по правам потребителей",
        value: "Специалист по правам потребителей",
      },
      {
        title: "Специалист по правам детей",
        value: "Специалист по правам детей",
      },
      {
        title: "Специалист по правам женщин",
        value: "Специалист по правам женщин",
      },
      {
        title: "Специалист по правам мигрантов",
        value: "Специалист по правам мигрантов",
      },
      {
        title: "Специалист по правам инвалидов",
        value: "Специалист по правам инвалидов",
      },
      {
        title: "Специалист по правам пожилых людей",
        value: "Специалист по правам пожилых людей",
      },
    ],
  },
  city: {
    title: "Регион",
    items: [
      {
        title: "Республика Адыгея",
        value: "01",
      },
      {
        title: "Республика Алтай",
        value: "04",
      },
      {
        title: "Алтайский край",
        value: "22",
      },
      {
        title: "Амурская область",
        value: "28",
      },
      {
        title: "Архангельская область",
        value: "29",
      },
      {
        title: "Астраханская область",
        value: "30",
      },
      {
        title: "Республика Башкортостан",
        value: "02",
      },
      {
        title: "Белгородская область",
        value: "31",
      },
      {
        title: "Брянская область",
        value: "32",
      },
      {
        title: "Бурятия",
        value: "03",
      },
      {
        title: "Владимирская область",
        value: "33",
      },
      {
        title: "Волгоградская область",
        value: "34",
      },
      {
        title: "Воронежская область",
        value: "36",
      },
      {
        title: "Города федерального подчинения",
        value: "77",
      },
      {
        title: "Ивановская область",
        value: "37",
      },
      {
        title: "Иркутская область",
        value: "38",
      },
      {
        title: "Кабардино-Балкарская Республика",
        value: "07",
      },
      {
        title: "Калининградская область",
        value: "39",
      },
      {
        title: "Калужская область",
        value: "40",
      },
      {
        title: "Камчатский край",
        value: "41",
      },
      {
        title: "Карачаево-Черкесская Республика",
        value: "09",
      },
      {
        title: "Кемеровская область",
        value: "42",
      },
      {
        title: "Кировская область",
        value: "43",
      },
      {
        title: "Костромская область",
        value: "44",
      },
      {
        title: "Краснодарский край",
        value: "23",
      },
      {
        title: "Красноярский край",
        value: "24",
      },
      {
        title: "Курганская область",
        value: "45",
      },
      {
        title: "Курская область",
        value: "46",
      },
      {
        title: "Ленинградская область",
        value: "47",
      },
      {
        title: "Липецкая область",
        value: "48",
      },
      {
        title: "Магаданская область",
        value: "49",
      },
      {
        title: "Республика Марий Эл",
        value: "10",
      },
      {
        title: "Республика Мордовия",
        value: "11",
      },
      {
        title: "Москва",
        value: "77",
      },
      {
        title: "Московская область",
        value: "50",
      },
      {
        title: "Мурманская область",
        value: "51",
      },
      {
        title: "Нижегородская область",
        value: "52",
      },
      {
        title: "Новгородская область",
        value: "53",
      },
      {
        title: "Новосибирская область",
        value: "54",
      },
      {
        title: "Омская область",
        value: "55",
      },
      {
        title: "Оренбургская область",
        value: "56",
      },
      {
        title: "Орловская область",
        value: "57",
      },
      {
        title: "Пензенская область",
        value: "58",
      },
      {
        title: "Пермский край",
        value: "59",
      },
      {
        title: "Приморский край",
        value: "60",
      },
      {
        title: "Псковская область",
        value: "61",
      },
      {
        title: "Ростовская область",
        value: "62",
      },
      {
        title: "Рязанская область",
        value: "63",
      },
      {
        title: "Самарская область",
        value: "64",
      },
      {
        title: "Саратовская область",
        value: "65",
      },
      {
        title: "Сахалинская область",
        value: "66",
      },
      {
        title: "Свердловская область",
        value: "66",
      },
      {
        title: "Смоленская область",
        value: "67",
      },
      {
        title: "Ставропольский край",
        value: "26",
      },
      {
        title: "Тамбовская область",
        value: "68",
      },
      {
        title: "Тверская область",
        value: "69",
      },
      {
        title: "Томская область",
        value: "70",
      },
      {
        title: "Тульская область",
        value: "71",
      },
      {
        title: "Тюменская область",
        value: "72",
      },
      {
        title: "Ульяновская область",
        value: "73",
      },
      {
        title: "Челябинская область",
        value: "74",
      },
      {
        title: "Забайкальский край",
        value: "75",
      },
      {
        title: "Чувашская Республика",
        value: "12",
      },
      {
        title: "Ямало-Ненецкий автономный округ",
        value: "86",
      },
      {
        title: "Ярославская область",
        value: "76",
      },
    ],
  },
  username: {
    title: "Компания",
    isVacancyOnly: true,
    items: [
      {
        title: "Сбербанк",
        value: "Сбербанк",
      },
      {
        title: "Роснефть",
        value: "Роснефть",
      },
      {
        title: "Газпром",
        value: "Газпром",
      },
      {
        title: "Лукойл",
        value: "Лукойл",
      },
      {
        title: "Тортик",
        value: "Тортик",
      },
      {
        title: "Магнит",
        value: "Магнит",
      },
      {
        title: "Почта России",
        value: "Почта России",
      },
      {
        title: "РЖД",
        value: "РЖД",
      },
      {
        title: "Ростелеком",
        value: "Ростелеком",
      },
      {
        title: "X5 Retail Group",
        value: "X5 Retail Group",
      },
      {
        title: "Норильский никель",
        value: "Норильский никель",
      },
      {
        title: "Полюс",
        value: "Полюс",
      },
      {
        title: "Северсталь",
        value: "Северсталь",
      },
      {
        title: "Аэрофлот",
        value: "Аэрофлот",
      },
      {
        title: "Татнефть",
        value: "Татнефть",
      },
      {
        title: "МТС",
        value: "МТС",
      },
      {
        title: "Мегафон",
        value: "Мегафон",
      },
      {
        title: "Аcron",
        value: "Аcron",
      },
      {
        title: "Иркут",
        value: "Иркут",
      },
      {
        title: "Алроса",
        value: "Алроса",
      },
      {
        title: "Сургутнефтегаз",
        value: "Сургутнефтегаз",
      },
      {
        title: "ФосАгро",
        value: "ФосАгро",
      },
      {
        title: "Транснефть",
        value: "Транснефть",
      },
      {
        title: "КамАЗ",
        value: "КамАЗ",
      },
      {
        title: "РТС",
        value: "РТС",
      },
      {
        title: "Энергия",
        value: "Энергия",
      },
      {
        title: "Сибур",
        value: "Сибур",
      },
      {
        title: "Группа ГАЗ",
        value: "Группа ГАЗ",
      },
      {
        title: "Агрохолдинг Степь",
        value: "Агрохолдинг Степь",
      },
      {
        title: "Агро-Инвест",
        value: "Агро-Инвест",
      },
      {
        title: "Мосэнерго",
        value: "Мосэнерго",
      },
      {
        title: "ТГК-1",
        value: "ТГК-1",
      },
      {
        title: "РусГидро",
        value: "РусГидро",
      },
      {
        title: "Татэнерго",
        value: "Татэнерго",
      },
      {
        title: "Ленэнерго",
        value: "Ленэнерго",
      },
      {
        title: "Газпромбанк",
        value: "Газпромбанк",
      },
      {
        title: "ЦентрТелеком",
        value: "ЦентрТелеком",
      },
      {
        title: "Кировский завод",
        value: "Кировский завод",
      },
      {
        title: "Группа ЛСР",
        value: "Группа ЛСР",
      },
      {
        title: "Технониколь",
        value: "Технониколь",
      },
    ],
  },
};
