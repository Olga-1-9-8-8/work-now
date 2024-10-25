import { UniversalItemsWithTitleType } from "../types";
import { LanguageType } from "./internationalization/InternationalizationConfig";

export const searchConfigTypes = ["position", "cities", "username"] as const;

export type SearchConfigTypes = (typeof searchConfigTypes)[number];

export type SearchConfigType = Record<SearchConfigTypes, UniversalItemsWithTitleType>;
export type SearchConfigItems = Record<LanguageType, SearchConfigType>;

export const searchConfig: SearchConfigItems = {
  ru: {
    position: {
      title: "Должность",
      items: [
        {
          title: "Топ менеджер",
          value: "топ менеджер",
        },
        {
          title: "Руководитель среднего звена",
          value: "руководитель среднего звена",
        },
        {
          title: "Руководитель низшего звена",
          value: "руководитель низшего звена",
        },
        {
          title: "Инженер",
          value: "инженер",
        },
        {
          title: "Технолог",
          value: "технолог",
        },
        {
          title: "Конструктор",
          value: "конструктор",
        },
        {
          title: "Экономист",
          value: "экономист",
        },
        {
          title: "Официант",
          value: "официант",
        },
        {
          title: "Кулинар",
          value: "кулинар",
        },
        {
          title: "Финансист",
          value: "финансист",
        },
        {
          title: "Бухгалтер",
          value: "бухгалтер",
        },
        {
          title: "Юрист",
          value: "юрист",
        },
        {
          title: "Аналитик",
          value: "аналитик",
        },
        {
          title: "Консультант",
          value: "консультант",
        },
        {
          title: "Программист",
          value: "программист",
        },
        {
          title: "Системный администратор",
          value: "системный администратор",
        },
        {
          title: "Аналитик данных",
          value: "аналитик данных",
        },
        {
          title: "Секретарь",
          value: "секретарь",
        },
        {
          title: "Офис менеджер",
          value: "офис менеджер",
        },
        {
          title: "Ассистент",
          value: "ассистент",
        },
        {
          title: "Делопроизводитель",
          value: "делопроизводитель",
        },
        {
          title: "Архивариус",
          value: "архивариус",
        },
        {
          title: "Табельщик",
          value: "табельщик",
        },
        {
          title: "Оператор",
          value: "оператор",
        },
        {
          title: "Диспетчер",
          value: "диспетчер",
        },
        {
          title: "Дежурный",
          value: "дежурный",
        },
        {
          title: "Станочник",
          value: "станочник",
        },
        {
          title: "Слесарь",
          value: "слесарь",
        },
        {
          title: "Сборщик",
          value: "сборщик",
        },
        {
          title: "Водитель",
          value: "водитель",
        },
        {
          title: "Грузчик",
          value: "грузчик",
        },
        {
          title: "Экспедитор",
          value: "экспедитор",
        },
        {
          title: "Электрик",
          value: "электрик",
        },
        {
          title: "Сантехник",
          value: "сантехник",
        },
        {
          title: "Ремонтник",
          value: "ремонтник",
        },
        {
          title: "Ученый",
          value: "ученый",
        },
        {
          title: "Исследователь",
          value: "исследователь",
        },
        {
          title: "Разработчик",
          value: "разработчик",
        },
        {
          title: "Лаборант",
          value: "лаборант",
        },
        {
          title: "Техник",
          value: "техник",
        },
        {
          title: "Испытатель",
          value: "испытатель",
        },
        {
          title: "Врач",
          value: "врач",
        },
        {
          title: "Медсестра",
          value: "медсестра",
        },
        {
          title: "Фармацевт",
          value: "фармацевт",
        },
        {
          title: "Санитар",
          value: "санитар",
        },
        {
          title: "Регистратор",
          value: "регистратор",
        },
        {
          title: "Учитель",
          value: "учитель",
        },
        {
          title: "Преподаватель",
          value: "преподаватель",
        },
        {
          title: "Воспитатель",
          value: "воспитатель",
        },
        {
          title: "Методист",
          value: "методист",
        },
        {
          title: "Тьютор",
          value: "тьютор",
        },
        {
          title: "Педагог организатор",
          value: "педагог организатор",
        },
        {
          title: "Художник",
          value: "художник",
        },
        {
          title: "Актер",
          value: "актер",
        },
        {
          title: "Музыкант",
          value: "музыкант",
        },
        {
          title: "Режиссер",
          value: "режиссер",
        },
        {
          title: "Журналист",
          value: "журналист",
        },
        {
          title: "Копирайтер",
          value: "копирайтер",
        },
        {
          title: "Блогер",
          value: "блогер",
        },
        {
          title: "Дизайнер",
          value: "дизайнер",
        },
        {
          title: "Фотограф",
          value: "фотограф",
        },
        {
          title: "Маркетолог",
          value: "маркетолог",
        },
        {
          title: "Специалист по PR",
          value: "специалист по pr",
        },
        {
          title: "Менеджер по продажам",
          value: "менеджер по продажам",
        },
        {
          title: "Менеджер по продукту",
          value: "менеджер по продукту",
        },
        {
          title: "Специалист по рекламе",
          value: "специалист по рекламе",
        },
        {
          title: "Аналитик рынка",
          value: "аналитик рынка",
        },
        {
          title: "Специалист по SEO",
          value: "специалист по seo",
        },
        {
          title: "Специалист по контенту",
          value: "специалист по контенту",
        },
        {
          title: "Тренер",
          value: "тренер",
        },
        {
          title: "Коуч",
          value: "коуч",
        },
        {
          title: "Специалист по обучению",
          value: "специалист по обучению",
        },
        {
          title: "Служитель",
          value: "служитель",
        },
        {
          title: "Кассир",
          value: "кассир",
        },

        {
          title: "Супервайзер",
          value: "супервайзер",
        },
        {
          title: "Специалист по качеству",
          value: "специалист по качеству",
        },
        {
          title: "Менеджер по логистике",
          value: "менеджер по логистике",
        },
        {
          title: "Специалист по закупкам",
          value: "специалист по закупкам",
        },
        {
          title: "Специалист по охране труда",
          value: "специалист по охране труда",
        },
        {
          title: "Эколог",
          value: "эколог",
        },
        {
          title: "Финансовый аналитик",
          value: "финансовый аналитик",
        },
        {
          title: "Кредитный аналитик",
          value: "кредитный аналитик",
        },
        {
          title: "Аудитор",
          value: "аудитор",
        },
        {
          title: "Специалист по внутреннему контролю",
          value: "специалист по внутреннему контролю",
        },
        {
          title: "Специалист по налогам",
          value: "специалист по налогам",
        },
        {
          title: "Специалист по страхованию",
          value: "специалист по страхованию",
        },
        {
          title: "Специалист по инвестициям",
          value: "специалист по инвестициям",
        },
        {
          title: "Сетевой администратор",
          value: "сетевой администратор",
        },
        {
          title: "Разработчик ПО",
          value: "разработчик по",
        },
        {
          title: "Веб разработчик",
          value: "веб разработчик",
        },
        {
          title: "Мобильный разработчик",
          value: "мобильный разработчик",
        },
        {
          title: "Тестировщик",
          value: "тестировщик",
        },
        {
          title: "Специалист по кибербезопасности",
          value: "специалист по кибербезопасности",
        },
        {
          title: "Специалист по базам данных",
          value: "специалист по базам данных",
        },
        {
          title: "Системный аналитик",
          value: "системный аналитик",
        },
        {
          title: "UX/UI дизайнер",
          value: "ux/ui дизайнер",
        },
        {
          title: "Графический дизайнер",
          value: "графический дизайнер",
        },
        {
          title: "Иллюстратор",
          value: "иллюстратор",
        },
        {
          title: "Аниматор",
          value: "аниматор",
        },
        {
          title: "Модель",
          value: "модель",
        },
        {
          title: "Сценарист",
          value: "сценарист",
        },
        {
          title: "Редактор",
          value: "редактор",
        },
        {
          title: "Корректор",
          value: "корректор",
        },
        {
          title: "Специалист по PR кампаниям",
          value: "специалист по pr кампаниям",
        },
        {
          title: "Специалист по социальным медиа",
          value: "специалист по социальным медиа",
        },
        {
          title: "Специалист по связям с общественностью",
          value: "специалист по связям с общественностью",
        },
        {
          title: "Специалист по коммуникациям",
          value: "специалист по коммуникациям",
        },
        {
          title: "Специалист по внутренним коммуникациям",
          value: "специалист по внутренним коммуникациям",
        },
        {
          title: "Специалист по внешним коммуникациям",
          value: "специалист по внешним коммуникациям",
        },
        {
          title: "Клиентский менеджер",
          value: "клиентский менеджер",
        },
        {
          title: "Специалист по клиентскому обслуживанию",
          value: "специалист по клиентскому обслуживанию",
        },

        {
          title: "Специалист по работе с клиентами",
          value: "специалист по работе с клиентами",
        },
        {
          title: "Специалист по поддержке пользователей",
          value: "специалист по поддержке пользователей",
        },
        {
          title: "Специалист по технической поддержке",
          value: "специалист по технической поддержке",
        },
        {
          title: "Специалист по сервису",
          value: "специалист по сервису",
        },
        {
          title: "Специалист по ремонту",
          value: "специалист по ремонту",
        },
        {
          title: "Специалист по установке",
          value: "специалист по установке",
        },
        {
          title: "Специалист по обслуживанию",
          value: "специалист по обслуживанию",
        },
        {
          title: "Специалист по продажам",
          value: "специалист по продажам",
        },
        {
          title: "Специалист по дистрибуции",
          value: "специалист по дистрибуции",
        },
        {
          title: "Специалист по франчайзингу",
          value: "специалист по франчайзингу",
        },
        {
          title: "Специалист по маркетинговым исследованиям",
          value: "специалист по маркетинговым исследованиям",
        },
        {
          title: "Специалист по товарным запасам",
          value: "специалист по товарным запасам",
        },
        {
          title: "Специалист по управлению запасами",
          value: "специалист по управлению запасами",
        },
        {
          title: "Специалист по логистическим операциям",
          value: "специалист по логистическим операциям",
        },
        {
          title: "Специалист по таможенному оформлению",
          value: "специалист по таможенному оформлению",
        },
        {
          title: "Специалист по международным перевозкам",
          value: "специалист по международным перевозкам",
        },
        {
          title: "Специалист по внутренним перевозкам",
          value: "специалист по внутренним перевозкам",
        },
        {
          title: "Специалист по складским операциям",
          value: "специалист по складским операциям",
        },
        {
          title: "Специалист по транспортной логистике",
          value: "специалист по транспортной логистике",
        },
        {
          title: "Специалист по грузоперевозкам",
          value: "специалист по грузоперевозкам",
        },
        {
          title: "Специалист по таможенным вопросам",
          value: "специалист по таможенным вопросам",
        },
        {
          title: "Специалист по международной торговле",
          value: "специалист по международной торговле",
        },
        {
          title: "Специалист по внешнеэкономической деятельности",
          value: "специалист по внешнеэкономической деятельности",
        },
        {
          title: "Специалист по контрактам",
          value: "специалист по контрактам",
        },
        {
          title: "Специалист по правовым вопросам",
          value: "специалист по правовым вопросам",
        },
        {
          title: "Специалист по корпоративному праву",
          value: "специалист по корпоративному праву",
        },
        {
          title: "Специалист по трудовому праву",
          value: "специалист по трудовому праву",
        },
        {
          title: "Специалист по семейному праву",
          value: "специалист по семейному праву",
        },
        {
          title: "Специалист по уголовному праву",
          value: "специалист по уголовному праву",
        },
        {
          title: "Специалист по административному праву",
          value: "специалист по административному праву",
        },
        {
          title: "Специалист по гражданскому праву",
          value: "специалист по гражданскому праву",
        },
        {
          title: "Специалист по международному праву",
          value: "специалист по международному праву",
        },
        {
          title: "Специалист по правам человека",
          value: "специалист по правам человека",
        },
        {
          title: "Специалист по правам собственности",
          value: "специалист по правам собственности",
        },
        {
          title: "Специалист по правам интеллектуальной собственности",
          value: "специалист по правам интеллектуальной собственности",
        },
        {
          title: "Специалист по правам потребителей",
          value: "специалист по правам потребителей",
        },
        {
          title: "Специалист по правам детей",
          value: "специалист по правам детей",
        },
        {
          title: "Специалист по правам женщин",
          value: "специалист по правам женщин",
        },
        {
          title: "Специалист по правам мигрантов",
          value: "специалист по правам мигрантов",
        },
        {
          title: "Специалист по правам инвалидов",
          value: "специалист по правам инвалидов",
        },
        {
          title: "Специалист по правам пожилых людей",
          value: "специалист по правам пожилых людей",
        },
      ],
    },
    cities: {
      title: "Регион",
      items: [
        {
          title: "Москва",
          value: "москва",
        },
        {
          title: "Московская область",
          value: "московская область",
        },
        {
          title: "Санкт Петербург",
          value: "санкт петербург",
        },
        {
          title: "Ленинградская область",
          value: "ленинградская область",
        },
        {
          title: "Республика Адыгея",
          value: "республика адыгея",
        },
        {
          title: "Республика Алтай",
          value: "республика алтай",
        },
        {
          title: "Алтайский край",
          value: "алтайский край",
        },
        {
          title: "Амурская область",
          value: "амурская область",
        },
        {
          title: "Архангельская область",
          value: "архангельская область",
        },
        {
          title: "Астраханская область",
          value: "астраханская область",
        },
        {
          title: "Республика Башкортостан",
          value: "республика башкортостан",
        },
        {
          title: "Белгородская область",
          value: "белгородская область",
        },
        {
          title: "Брянская область",
          value: "брянская область",
        },
        {
          title: "Бурятия",
          value: "бурятия",
        },
        {
          title: "Владимирская область",
          value: "владимирская область",
        },
        {
          title: "Волгоградская область",
          value: "волгоградская область",
        },
        {
          title: "Воронежская область",
          value: "воронежская область",
        },
        {
          title: "Города федерального подчинения",
          value: "города федерального подчинения",
        },
        {
          title: "Ивановская область",
          value: "ивановская область",
        },
        {
          title: "Иркутская область",
          value: "иркутская область",
        },
        {
          title: "Кабардино-Балкарская Республика",
          value: "кабардино-балкарская республика",
        },
        {
          title: "Калининградская область",
          value: "калининградская область",
        },
        {
          title: "Калужская область",
          value: "калужская область",
        },
        {
          title: "Камчатский край",
          value: "камчатский край",
        },
        {
          title: "Карачаево-Черкесская Республика",
          value: "карачево-черкесская республика",
        },
        {
          title: "Кемеровская область",
          value: "кемеровская область",
        },
        {
          title: "Кировская область",
          value: "кировская область",
        },
        {
          title: "Костромская область",
          value: "костромская область",
        },
        {
          title: "Краснодарский край",
          value: "краснодарский край",
        },
        {
          title: "Красноярский край",
          value: "красноярский край",
        },
        {
          title: "Курганская область",
          value: "курганская область",
        },
        {
          title: "Курская область",
          value: "курская область",
        },

        {
          title: "Липецкая область",
          value: "липецкая область",
        },
        {
          title: "Магаданская область",
          value: "магаданская область",
        },
        {
          title: "Республика Марий Эл",
          value: "республика марий эл",
        },
        {
          title: "Республика Мордовия",
          value: "республика мордовия",
        },

        {
          title: "Мурманская область",
          value: "мурманская область",
        },
        {
          title: "Нижегородская область",
          value: "нижегородская область",
        },
        {
          title: "Новгородская область",
          value: "новгородская область",
        },
        {
          title: "Новосибирская область",
          value: "новосибирская область",
        },
        {
          title: "Омская область",
          value: "омская область",
        },
        {
          title: "Оренбургская область",
          value: "оренбургская область",
        },
        {
          title: "Орловская область",
          value: "орловская область",
        },
        {
          title: "Пензенская область",
          value: "пензенская область",
        },
        {
          title: "Пермский край",
          value: "пермский край",
        },
        {
          title: "Приморский край",
          value: "приморский край",
        },
        {
          title: "Псковская область",
          value: "псковская область",
        },
        {
          title: "Ростовская область",
          value: "ростовская область",
        },
        {
          title: "Рязанская область",
          value: "рязанская область",
        },
        {
          title: "Самарская область",
          value: "самарская область",
        },
        {
          title: "Саратовская область",
          value: "саратовская область",
        },
        {
          title: "Сахалинская область",
          value: "сахалинская область",
        },
        {
          title: "Свердловская область",
          value: "свердловская область",
        },
        {
          title: "Смоленская область",
          value: "смоленская область",
        },
        {
          title: "Ставропольский край",
          value: "ставропольский край",
        },
        {
          title: "Тамбовская область",
          value: "тамбовская область",
        },
        {
          title: "Тверская область",
          value: "тверская область",
        },
        {
          title: "Томская область",
          value: "томская область",
        },
        {
          title: "Тульская область",
          value: "тульская область",
        },
        {
          title: "Тюменская область",
          value: "тюменская область",
        },
        {
          title: "Ульяновская область",
          value: "ульяновская область",
        },
        {
          title: "Челябинская область",
          value: "челябинская область",
        },
        {
          title: "Забайкальский край",
          value: "забайкальский край",
        },
        {
          title: "Чувашская Республика",
          value: "чувашская республика",
        },
        {
          title: "Ямало-Ненецкий автономный округ",
          value: "ямало-ненецкий автономный округ",
        },
        {
          title: "Ярославская область",
          value: "ярославская область",
        },
      ],
    },
    username: {
      title: "Компания",
      isVacancyOnly: true,
      items: [
        {
          title: "Сбербанк",
          value: "сбербанк",
        },
        {
          title: "Роснефть",
          value: "роснефть",
        },
        {
          title: "Газпром",
          value: "газпром",
        },
        {
          title: "Лукойл",
          value: "лукойл",
        },
        {
          title: "Тортик",
          value: "тортик",
        },
        {
          title: "Магнит",
          value: "магнит",
        },
        {
          title: "Почта России",
          value: "почта россии",
        },
        {
          title: "РЖД",
          value: "ржд",
        },
        {
          title: "Ростелеком",
          value: "ростелеком",
        },
        {
          title: "X5 Retail Group",
          value: "x5 retail group",
        },
        {
          title: "Норильский никель",
          value: "норильский никель",
        },
        {
          title: "Полюс",
          value: "полюс",
        },
        {
          title: "Северсталь",
          value: "северсталь",
        },
        {
          title: "Аэрофлот",
          value: "аэрофлот",
        },
        {
          title: "Татнефть",
          value: "татнефть",
        },
        {
          title: "МТС",
          value: "мтс",
        },
        {
          title: "Мегафон",
          value: "мегафон",
        },
        {
          title: "Аcron",
          value: "акрон",
        },
        {
          title: "Иркут",
          value: "иркут",
        },
        {
          title: "Алроса",
          value: "алроса",
        },
        {
          title: "Сургутнефтегаз",
          value: "сургутнефтегаз",
        },
        {
          title: "ФосАгро",
          value: "фосагро",
        },
        {
          title: "Транснефть",
          value: "транснефть",
        },
        {
          title: "КамАЗ",
          value: "камаз",
        },
        {
          title: "РТС",
          value: "ртс",
        },
        {
          title: "Энергия",
          value: "энергия",
        },
        {
          title: "Сибур",
          value: "сибур",
        },
        {
          title: "Группа ГАЗ",
          value: "группа газ",
        },
        {
          title: "Агрохолдинг Степь",
          value: "агрохолдинг степь",
        },
        {
          title: "Агро-Инвест",
          value: "агро-инвест",
        },
        {
          title: "Мосэнерго",
          value: "мосэнерго",
        },
        {
          title: "ТГК-1",
          value: "тгк-1",
        },
        {
          title: "РусГидро",
          value: "русгидро",
        },
        {
          title: "Татэнерго",
          value: "татэнерго",
        },
        {
          title: "Ленэнерго",
          value: "ленэнерго",
        },
        {
          title: "Газпромбанк",
          value: "газпромбанк",
        },
        {
          title: "ЦентрТелеком",
          value: "центртелеком",
        },
        {
          title: "Кировский завод",
          value: "кировский завод",
        },
        {
          title: "Группа ЛСР",
          value: "группа лср",
        },
        {
          title: "Технониколь",
          value: "технониколь",
        },
      ],
    },
  },
  en: {
    position: {
      title: "Position",
      items: [
        {
          title: "Top Manager",
          value: "top manager",
        },
        {
          title: "Middle Management Leader",
          value: "middle management leader",
        },
        {
          title: "Lower Management Leader",
          value: "lower management leader",
        },
        {
          title: "Engineer",
          value: "engineer",
        },
        {
          title: "Technologist",
          value: "technologist",
        },
        {
          title: "Designer",
          value: "designer",
        },
        {
          title: "Economist",
          value: "economist",
        },
        {
          title: "Waiter",
          value: "waiter",
        },
        {
          title: "Cook",
          value: "cook",
        },
        {
          title: "Financier",
          value: "financier",
        },
        {
          title: "Accountant",
          value: "accountant",
        },
        {
          title: "Lawyer",
          value: "lawyer",
        },
        {
          title: "Analyst",
          value: "analyst",
        },
        {
          title: "Consultant",
          value: "consultant",
        },
        {
          title: "Programmer",
          value: "programmer",
        },
        {
          title: "System Administrator",
          value: "system administrator",
        },
        {
          title: "Data Analyst",
          value: "data analyst",
        },
        {
          title: "Secretary",
          value: "secretary",
        },
        {
          title: "Office Manager",
          value: "office manager",
        },
        {
          title: "Assistant",
          value: "assistant",
        },
        {
          title: "Document Manager",
          value: "document manager",
        },
        {
          title: "Archivist",
          value: "archivist",
        },
        {
          title: "Timekeeper",
          value: "timekeeper",
        },
        {
          title: "Operator",
          value: "operator",
        },
        {
          title: "Dispatcher",
          value: "dispatcher",
        },
        {
          title: "Duty Officer",
          value: "duty officer",
        },
        {
          title: "Machinist",
          value: "machinist",
        },
        {
          title: "Locksmith",
          value: "locksmith",
        },
        {
          title: "Assembler",
          value: "assembler",
        },
        {
          title: "Driver",
          value: "driver",
        },
        {
          title: "Loader",
          value: "loader",
        },
        {
          title: "Freight Forwarder",
          value: "freight forwarder",
        },
        {
          title: "Electrician",
          value: "electrician",
        },
        {
          title: "Plumber",
          value: "plumber",
        },
        {
          title: "Repairman",
          value: "repairman",
        },
        {
          title: "Scientist",
          value: "scientist",
        },
        {
          title: "Researcher",
          value: "researcher",
        },
        {
          title: "Developer",
          value: "developer",
        },
        {
          title: "Laboratory Technician",
          value: "laboratory technician",
        },
        {
          title: "Technician",
          value: "technician",
        },
        {
          title: "Tester",
          value: "tester",
        },
        {
          title: "Doctor",
          value: "doctor",
        },
        {
          title: "Nurse",
          value: "nurse",
        },
        {
          title: "Pharmacist",
          value: "pharmacist",
        },
        {
          title: "Sanitary Worker",
          value: "sanitary worker",
        },
        {
          title: "Registrar",
          value: "registrar",
        },
        {
          title: "Teacher",
          value: "teacher",
        },
        {
          title: "Instructor",
          value: "instructor",
        },
        {
          title: "Educator",
          value: "educator",
        },
        {
          title: "Methodologist",
          value: "methodologist",
        },
        {
          title: "Tutor",
          value: "tutor",
        },
        {
          title: "Organizer Teacher",
          value: "organizer teacher",
        },
        {
          title: "Artist",
          value: "artist",
        },
        {
          title: "Actor",
          value: "actor",
        },
        {
          title: "Musician",
          value: "musician",
        },
        {
          title: "Director",
          value: "director",
        },
        {
          title: "Journalist",
          value: "journalist",
        },
        {
          title: "Copywriter",
          value: "copywriter",
        },
        {
          title: "Blogger",
          value: "blogger",
        },
        {
          title: "Photographer",
          value: "photographer",
        },
        {
          title: "Marketer",
          value: "marketer",
        },
        {
          title: "PR Specialist",
          value: "pr specialist",
        },
        {
          title: "Sales Manager",
          value: "sales manager",
        },
        {
          title: "Product Manager",
          value: "product manager",
        },
        {
          title: "Advertising Specialist",
          value: "advertising specialist",
        },
        {
          title: "Market Analyst",
          value: "market analyst",
        },
        {
          title: "SEO Specialist",
          value: "seo specialist",
        },
        {
          title: "Content Specialist",
          value: "content specialist",
        },
        {
          title: "Trainer",
          value: "trainer",
        },
        {
          title: "Coach",
          value: "coach",
        },
        {
          title: "Training Specialist",
          value: "training specialist",
        },
        {
          title: "Clergy",
          value: "clergy",
        },
        {
          title: "Cashier",
          value: "cashier",
        },
        {
          title: "Supervisor",
          value: "supervisor",
        },
        {
          title: "Quality Specialist",
          value: "quality specialist",
        },
        {
          title: "Logistics Manager",
          value: "logistics manager",
        },
        {
          title: "Procurement Specialist",
          value: "procurement specialist",
        },
        {
          title: "Occupational Safety Specialist",
          value: "occupational safety specialist",
        },
        {
          title: "Ecologist",
          value: "ecologist",
        },
        {
          title: "Financial Analyst",
          value: "financial analyst",
        },
        {
          title: "Credit Analyst",
          value: "credit analyst",
        },
        {
          title: "Auditor",
          value: "auditor",
        },
        {
          title: "Internal Control Specialist",
          value: "internal control specialist",
        },
        {
          title: "Tax Specialist",
          value: "tax specialist",
        },
        {
          title: "Insurance Specialist",
          value: "insurance specialist",
        },
        {
          title: "Investment Specialist",
          value: "investment specialist",
        },
        {
          title: "Network Administrator",
          value: "network administrator",
        },
        {
          title: "Software Developer",
          value: "software developer",
        },
        {
          title: "Web Developer",
          value: "web developer",
        },
        {
          title: "Mobile Developer",
          value: "mobile developer",
        },
        {
          title: "Cybersecurity Specialist",
          value: "cybersecurity specialist",
        },
        {
          title: "Database Specialist",
          value: "database specialist",
        },
        {
          title: "Systems Analyst",
          value: "systems analyst",
        },
        {
          title: "UX/UI Designer",
          value: "ux/ui designer",
        },
        {
          title: "Graphic Designer",
          value: "graphic designer",
        },
        {
          title: "Illustrator",
          value: "illustrator",
        },
        {
          title: "Animator",
          value: "animator",
        },
        {
          title: "Model",
          value: "model",
        },
        {
          title: "Screenwriter",
          value: "screenwriter",
        },
        {
          title: "Editor",
          value: "editor",
        },
        {
          title: "Proofreader",
          value: "proofreader",
        },
        {
          title: "PR Campaign Specialist",
          value: "pr campaign specialist",
        },
        {
          title: "Social Media Specialist",
          value: "social media specialist",
        },
        {
          title: "Public Relations Specialist",
          value: "public relations specialist",
        },
        {
          title: "Communications Specialist",
          value: "communications specialist",
        },
        {
          title: "Internal Communications Specialist",
          value: "internal communications specialist",
        },
        {
          title: "External Communications Specialist",
          value: "external communications specialist",
        },
        {
          title: "Client Manager",
          value: "client manager",
        },
        {
          title: "Customer Service Specialist",
          value: "customer service specialist",
        },
        {
          title: "User Support Specialist",
          value: "user support specialist",
        },
        {
          title: "Technical Support Specialist",
          value: "technical support specialist",
        },
        {
          title: "Service Specialist",
          value: "service specialist",
        },
        {
          title: "Repair Specialist",
          value: "repair specialist",
        },
        {
          title: "Installation Specialist",
          value: "installation specialist",
        },
        {
          title: "Maintenance Specialist",
          value: "maintenance specialist",
        },
        {
          title: "Sales Specialist",
          value: "sales specialist",
        },
        {
          title: "Distribution Specialist",
          value: "distribution specialist",
        },
        {
          title: "Franchise Specialist",
          value: "franchise specialist",
        },
        {
          title: "Market Research Specialist",
          value: "market research specialist",
        },
        {
          title: "Inventory Specialist",
          value: "inventory specialist",
        },
        {
          title: "Stock Management Specialist",
          value: "stock management specialist",
        },
        {
          title: "Logistics Operations Specialist",
          value: "logistics operations specialist",
        },
        {
          title: "Customs Clearance Specialist",
          value: "customs clearance specialist",
        },
        {
          title: "International Shipping Specialist",
          value: "international shipping specialist",
        },
        {
          title: "Domestic Shipping Specialist",
          value: "domestic shipping specialist",
        },
        {
          title: "Warehouse Operations Specialist",
          value: "warehouse operations specialist",
        },
        {
          title: "Transport Logistics Specialist",
          value: "transport logistics specialist",
        },
        {
          title: "Freight Forwarding Specialist",
          value: "freight forwarding specialist",
        },
        {
          title: "Customs Issues Specialist",
          value: "customs issues specialist",
        },
        {
          title: "International Trade Specialist",
          value: "international trade specialist",
        },
        {
          title: "Foreign Economic Activity Specialist",
          value: "foreign economic activity specialist",
        },
        {
          title: "Contracts Specialist",
          value: "contracts specialist",
        },
        {
          title: "Legal Issues Specialist",
          value: "legal issues specialist",
        },
        {
          title: "Corporate Law Specialist",
          value: "corporate law specialist",
        },
        {
          title: "Labor Law Specialist",
          value: "labor law specialist",
        },
        {
          title: "Family Law Specialist",
          value: "family law specialist",
        },
        {
          title: "Criminal Law Specialist",
          value: "criminal law specialist",
        },
        {
          title: "Administrative Law Specialist",
          value: "administrative law specialist",
        },
        {
          title: "Civil Law Specialist",
          value: "civil law specialist",
        },
        {
          title: "International Law Specialist",
          value: "international law specialist",
        },
        {
          title: "Human Rights Specialist",
          value: "human rights specialist",
        },
        {
          title: "Property Rights Specialist",
          value: "property rights specialist",
        },
        {
          title: "Intellectual Property Rights Specialist",
          value: "intellectual property rights specialist",
        },
        {
          title: "Consumer Rights Specialist",
          value: "consumer rights specialist",
        },
        {
          title: "Children's Rights Specialist",
          value: "children's rights specialist",
        },
        {
          title: "Women's Rights Specialist",
          value: "women's rights specialist",
        },
        {
          title: "Migrant Rights Specialist",
          value: "migrant rights specialist",
        },
        {
          title: "Disability Rights Specialist",
          value: "disability rights specialist",
        },
        {
          title: "Elderly Rights Specialist",
          value: "elderly rights specialist",
        },
      ],
    },
    cities: {
      title: "Cities",
      items: [
        {
          title: "London",
          value: "london",
        },
        {
          title: "Sydney",
          value: "sydney",
        },
        {
          title: "Toronto",
          value: "toronto",
        },
        {
          title: "Dublin",
          value: "dublin",
        },
        {
          title: "Auckland",
          value: "auckland",
        },
        {
          title: "Vancouver",
          value: "vancouver",
        },
        {
          title: "Melbourne",
          value: "melbourne",
        },
        {
          title: "Los Angeles",
          value: "los angeles",
        },
        {
          title: "New York City",
          value: "new york city",
        },
        {
          title: "Chicago",
          value: "chicago",
        },
        {
          title: "Houston",
          value: "houston",
        },
        {
          title: "Philadelphia",
          value: "philadelphia",
        },
        {
          title: "Cape Town",
          value: "cape town",
        },
        {
          title: "Brisbane",
          value: "brisbane",
        },
        {
          title: "Edinburgh",
          value: "edinburgh",
        },
        {
          title: "Manchester",
          value: "manchester",
        },
        {
          title: "Belfast",
          value: "belfast",
        },
        {
          title: "Wellington",
          value: "wellington",
        },
        {
          title: "Ottawa",
          value: "ottawa",
        },
        {
          title: "Calgary",
          value: "calgary",
        },
        {
          title: "Montreal",
          value: "montreal",
        },
        {
          title: "Glasgow",
          value: "glasgow",
        },
        {
          title: "Nottingham",
          value: "nottingham",
        },
        {
          title: "Liverpool",
          value: "liverpool",
        },
        {
          title: "Birmingham",
          value: "birmingham",
        },
        {
          title: "San Francisco",
          value: "san francisco",
        },
        {
          title: "Phoenix",
          value: "phoenix",
        },
        {
          title: "Dallas",
          value: "dallas",
        },
        {
          title: "San Diego",
          value: "san diego",
        },
        {
          title: "Austin",
          value: "austin",
        },
        {
          title: "Atlanta",
          value: "atlanta",
        },
        {
          title: "Seattle",
          value: "seattle",
        },
        {
          title: "Virginia Beach",
          value: "virginia beach",
        },
        {
          title: "Tucson",
          value: "tucson",
        },
        {
          title: "Milwaukee",
          value: "milwaukee",
        },
        {
          title: "Portland",
          value: "portland",
        },
        {
          title: "Cleveland",
          value: "cleveland",
        },
        {
          title: "Omaha",
          value: "omaha",
        },
        {
          title: "Raleigh",
          value: "raleigh",
        },
        {
          title: "Salt Lake City",
          value: "salt lake city",
        },
        {
          title: "Bristol",
          value: "bristol",
        },
        {
          title: "Cardiff",
          value: "cardiff",
        },
        {
          title: "St. Davids",
          value: "st davids",
        },
        {
          title: "Wells",
          value: "wells",
        },
        {
          title: "Lichfield",
          value: "lichfield",
        },
        {
          title: "Durham",
          value: "durham",
        },
        {
          title: "Salisbury",
          value: "salisbury",
        },
        {
          title: "Ripon",
          value: "ripon",
        },
        {
          title: "Bangor",
          value: "bangor",
        },
        {
          title: "Perth",
          value: "perth",
        },
        {
          title: "Lisburn",
          value: "lisburn",
        },
        {
          title: "Ely",
          value: "ely",
        },
        {
          title: "Inverness",
          value: "inverness",
        },
        {
          title: "Truro",
          value: "truro",
        },
        {
          title: "Basingstoke",
          value: "basingstoke",
        },
        {
          title: "Scarborough",
          value: "scarborough",
        },
        {
          title: "Chichester",
          value: "chichester",
        },
        {
          title: "St. Albans",
          value: "st albans",
        },
        {
          title: "Ballarat",
          value: "ballarat",
        },
        {
          title: "Geelong",
          value: "geelong",
        },
        {
          title: "Wagga Wagga",
          value: "wagga wagga",
        },
        {
          title: "Bendigo",
          value: "bendigo",
        },
        {
          title: "Kamloops",
          value: "kamloops",
        },
        {
          title: "Nanaimo",
          value: "nanaimo",
        },
        {
          title: "Red Deer",
          value: "red deer",
        },
        {
          title: "Saskatoon",
          value: "saskatoon",
        },
        {
          title: "Lethbridge",
          value: "lethbridge",
        },
        {
          title: "Burlington",
          value: "burlington",
        },
        {
          title: "Kingston",
          value: "kingston",
        },
        {
          title: "Peterborough",
          value: "peterborough",
        },
        {
          title: "St. Catharines",
          value: "st catharines",
        },
        {
          title: "Guelph",
          value: "guelph",
        },
        {
          title: "Fredericton",
          value: "fredericton",
        },
        {
          title: "Charlottetown",
          value: "charlottetown",
        },
        {
          title: "Bunbury",
          value: "bunbury",
        },
        {
          title: "Mackay",
          value: "mackay",
        },
        {
          title: "Toowoomba",
          value: "toowoomba",
        },
        {
          title: "Launceston",
          value: "launceston",
        },
        {
          title: "Wollongong",
          value: "wollongong",
        },
        {
          title: "Hobart",
          value: "hobart",
        },
        {
          title: "Dunedin",
          value: "dunedin",
        },
      ],
    },
    username: {
      title: "Company",
      isVacancyOnly: true,
      items: [
        {
          title: "Microsoft",
          value: "microsoft",
        },
        {
          title: "Apple",
          value: "apple",
        },
        {
          title: "Amazon",
          value: "amazon",
        },
        {
          title: "Google",
          value: "google",
        },
        {
          title: "Facebook",
          value: "facebook",
        },
        {
          title: "IBM",
          value: "ibm",
        },
        {
          title: "Coca-Cola",
          value: "coca-cola",
        },
        {
          title: "Procter and Gamble",
          value: "procter and gamble",
        },
        {
          title: "Unilever",
          value: "unilever",
        },
        {
          title: "Tesla",
          value: "tesla",
        },
        {
          title: "Berkshire Hathaway",
          value: "berkshire hathaway",
        },
        {
          title: "Walmart",
          value: "walmart",
        },
        {
          title: "Visa",
          value: "visa",
        },
        {
          title: "Pfizer",
          value: "pfizer",
        },
        {
          title: "ExxonMobil",
          value: "exxonmobil",
        },
        {
          title: "Chevron",
          value: "chevron",
        },
        {
          title: "PepsiCo",
          value: "pepsico",
        },
        {
          title: "AbbVie",
          value: "abbvie",
        },
        {
          title: "Oracle",
          value: "oracle",
        },
        {
          title: "Intel",
          value: "intel",
        },
        {
          title: "Salesforce",
          value: "salesforce",
        },
        {
          title: "Netflix",
          value: "netflix",
        },
        {
          title: "Nike",
          value: "nike",
        },
        {
          title: "McDonald's",
          value: "mcdonalds",
        },
        {
          title: "Walt Disney",
          value: "walt disney",
        },
        {
          title: "ATT",
          value: "att",
        },
        {
          title: "Cisco Systems",
          value: "cisco systems",
        },
        {
          title: "Lockheed Martin",
          value: "lockheed martin",
        },
        {
          title: "3M",
          value: "3m",
        },
        {
          title: "American Express",
          value: "american express",
        },
        {
          title: "Goldman Sachs",
          value: "goldman sachs",
        },
        {
          title: "Adobe",
          value: "adobe",
        },
        {
          title: "Airbus",
          value: "airbus",
        },
        {
          title: "Bain and Company",
          value: "bain and company",
        },
        {
          title: "Atlassian",
          value: "atlassian",
        },
        {
          title: "Siemens",
          value: "siemens",
        },
        {
          title: "SAP",
          value: "sap",
        },
        {
          title: "Nokia",
          value: "nokia",
        },
        {
          title: "Daimler AG",
          value: "daimler ag",
        },
        {
          title: "Renault",
          value: "renault",
        },
        {
          title: "Samsung",
          value: "samsung",
        },
        {
          title: "L'Oréal",
          value: "l'oreal",
        },
        {
          title: "Nestlé",
          value: "nestle",
        },
        {
          title: "Sony",
          value: "sony",
        },
        {
          title: "Hewlett Packard Enterprise (HPE)",
          value: "hewlett packard enterprise",
        },
        {
          title: "Dell Technologies",
          value: "dell technologies",
        },
        {
          title: "General Electric (GE)",
          value: "general electric",
        },
        {
          title: "Ford Motor Company",
          value: "ford motor company",
        },
        {
          title: "American Airlines",
          value: "american airlines",
        },
        {
          title: "United Airlines",
          value: "united airlines",
        },
        {
          title: "Marriott International",
          value: "marriott international",
        },
        {
          title: "Hilton Worldwide",
          value: "hilton worldwide",
        },
        {
          title: "Spotify",
          value: "spotify",
        },
        {
          title: "Lyft",
          value: "lyft",
        },
        {
          title: "Airbnb",
          value: "airbnb",
        },
        {
          title: "Snap Inc.",
          value: "snap inc.",
        },
        {
          title: "Pinterest",
          value: "pinterest",
        },
        {
          title: "Square",
          value: "square",
        },
        {
          title: "Zoom Video Communications",
          value: "zoom video communications",
        },
        {
          title: "Slack Technologies",
          value: "slack technologies",
        },
        {
          title: "Shopify",
          value: "shopify",
        },
        {
          title: "Dropbox",
          value: "dropbox",
        },
        {
          title: "Trello",
          value: "trello",
        },
        {
          title: "Yelp",
          value: "yelp",
        },
        {
          title: "Reddit",
          value: "reddit",
        },
        {
          title: "Etsy",
          value: "etsy",
        },
        {
          title: "Wayfair",
          value: "wayfair",
        },
        {
          title: "Zillow",
          value: "zillow",
        },
        {
          title: "Grubhub",
          value: "grubhub",
        },
        {
          title: "Instacart",
          value: "instacart",
        },
        {
          title: "Robinhood",
          value: "robinhood",
        },
        {
          title: "Coinbase",
          value: "coinbase",
        },
      ],
    },
  },
  de: {
    position: {
      title: "Position",
      items: [
        {
          title: "Top-Manager",
          value: "top-manager",
        },
        {
          title: "Führungskraft auf mittlerer Ebene",
          value: "führungskraft auf mittlerer ebene",
        },
        {
          title: "Führungskraft auf niedriger Ebene",
          value: "führungskraft auf niedriger ebene",
        },
        {
          title: "Ingenieur",
          value: "ingenieur",
        },
        {
          title: "Technologe",
          value: "technologe",
        },
        {
          title: "Konstrukteur",
          value: "konstrukteur",
        },
        {
          title: "Ökonom",
          value: "ökonom",
        },
        {
          title: "Kellner",
          value: "kellner",
        },
        {
          title: "Koch",
          value: "koch",
        },
        {
          title: "Finanzexperte",
          value: "finanzexperte",
        },
        {
          title: "Buchhalter",
          value: "buchhalter",
        },
        {
          title: "Jurist",
          value: "jurist",
        },
        {
          title: "Analytiker",
          value: "analytiker",
        },
        {
          title: "Berater",
          value: "berater",
        },
        {
          title: "Programmierer",
          value: "programmierer",
        },
        {
          title: "Systemadministrator",
          value: "systemadministrator",
        },
        {
          title: "Datenanalyst",
          value: "datenanalyst",
        },
        {
          title: "Sekretär",
          value: "sekretär",
        },
        {
          title: "Büromanager",
          value: "büromanager",
        },
        {
          title: "Assistent",
          value: "assistent",
        },
        {
          title: "Dokumentenverwalter",
          value: "dokumentenverwalter",
        },
        {
          title: "Archivist",
          value: "archivist",
        },
        {
          title: "Zeitnehmer",
          value: "zeitnehmer",
        },
        {
          title: "Operator",
          value: "operator",
        },
        {
          title: "Dispatcher",
          value: "dispatcher",
        },
        {
          title: "Wachmann",
          value: "wachmann",
        },
        {
          title: "Maschinist",
          value: "maschinist",
        },
        {
          title: "Schlosser",
          value: "schlosser",
        },
        {
          title: "Montierer",
          value: "montierer",
        },
        {
          title: "Fahrer",
          value: "fahrer",
        },
        {
          title: "Lader",
          value: "lader",
        },
        {
          title: "Spediteur",
          value: "spediteur",
        },
        {
          title: "Elektriker",
          value: "elektriker",
        },
        {
          title: "Installateur",
          value: "installateur",
        },
        {
          title: "Reparateur",
          value: "reparateur",
        },
        {
          title: "Wissenschaftler",
          value: "wissenschaftler",
        },
        {
          title: "Forscher",
          value: "forscher",
        },
        {
          title: "Entwickler",
          value: "entwickler",
        },
        {
          title: "Laborant",
          value: "laborant",
        },
        {
          title: "Techniker",
          value: "techniker",
        },
        {
          title: "Prüfer",
          value: "prüfer",
        },
        {
          title: "Arzt",
          value: "arzt",
        },
        {
          title: "Krankenschwester",
          value: "krankenschwester",
        },
        {
          title: "Pharmazeut",
          value: "pharmazeut",
        },
        {
          title: "Sanitäter",
          value: "sanitäter",
        },
        {
          title: "Registrar",
          value: "registrar",
        },
        {
          title: "Lehrer",
          value: "lehrer",
        },
        {
          title: "Dozent",
          value: "dozent",
        },
        {
          title: "Erzieher",
          value: "erzieher",
        },
        {
          title: "Methodologe",
          value: "methodologe",
        },
        {
          title: "Tutor",
          value: "tutor",
        },
        {
          title: "Organisationspädagoge",
          value: "organisationspädagoge",
        },
        {
          title: "Künstler",
          value: "künstler",
        },
        {
          title: "Schauspieler",
          value: "schauspieler",
        },
        {
          title: "Musiker",
          value: "musiker",
        },
        {
          title: "Regisseur",
          value: "regisseur",
        },
        {
          title: "Journalist",
          value: "journalist",
        },
        {
          title: "Texter",
          value: "texter",
        },
        {
          title: "Blogger",
          value: "blogger",
        },
        {
          title: "Fotograf",
          value: "fotograf",
        },
        {
          title: "Marketingexperte",
          value: "marketingexperte",
        },
        {
          title: "PR-Spezialist",
          value: "pr-spezialist",
        },
        {
          title: "Vertriebsmanager",
          value: "vertriebsmanager",
        },
        {
          title: "Produktmanager",
          value: "produktmanager",
        },
        {
          title: "Werbespezialist",
          value: "werbespezialist",
        },
        {
          title: "Marktforscher",
          value: "marktforscher",
        },
        {
          title: "SEO-Spezialist",
          value: "seo-spezialist",
        },
        {
          title: "Content-Spezialist",
          value: "content-spezialist",
        },
        {
          title: "Trainer",
          value: "trainer",
        },
        {
          title: "Coach",
          value: "coach",
        },
        {
          title: "Schulungsspezialist",
          value: "schulungsspezialist",
        },

        {
          title: "Dienstleister",
          value: "dienstleister",
        },

        {
          title: "Kassierer",
          value: "kassierer",
        },

        {
          title: "Supervisor",
          value: "supervisor",
        },
        {
          title: "Qualitätsspezialist",
          value: "qualitätsspezialist",
        },
        {
          title: "Logistikmanager",
          value: "logistikmanager",
        },
        {
          title: "Einkaufsspezialist",
          value: "einkaufsspezialist",
        },
        {
          title: "Sicherheitsspezialist",
          value: "sicherheitsspezialist",
        },
        {
          title: "Ökologe",
          value: "ökologe",
        },
        {
          title: "Finanzanalyst",
          value: "finanzanalyst",
        },
        {
          title: "Kreditanalyst",
          value: "kreditanalyst",
        },
        {
          title: "Spezialist für interne Kontrolle",
          value: "spezialist für interne kontrolle",
        },
        {
          title: "Steuerspezialist",
          value: "steuerspezialist",
        },
        {
          title: "Versicherungsspezialist",
          value: "versicherungsspezialist",
        },
        {
          title: "Investitionsspezialist",
          value: "investitionsspezialist",
        },
        {
          title: "Netzwerkadministrator",
          value: "netzwerkadministrator",
        },
        {
          title: "Softwareentwickler",
          value: "softwareentwickler",
        },
        {
          title: "Webentwickler",
          value: "webentwickler",
        },
        {
          title: "Mobiler Entwickler",
          value: "mobiler entwickler",
        },
        {
          title: "Cybersecurity-Spezialist",
          value: "cybersecurity-spezialist",
        },
        {
          title: "Datenbankspezialist",
          value: "datenbankspezialist",
        },
        {
          title: "Systemanalytiker",
          value: "systemanalytiker",
        },
        {
          title: "UX/UI-Designer",
          value: "ux/ui-designer",
        },
        {
          title: "Grafikdesigner",
          value: "grafikdesigner",
        },
        {
          title: "Illustrator",
          value: "illustrator",
        },
        {
          title: "Animator",
          value: "animator",
        },
        {
          title: "Drehbuchautor",
          value: "drehbuchautor",
        },
        {
          title: "Redakteur",
          value: "redakteur",
        },
        {
          title: "Korrektor",
          value: "korrektor",
        },
        {
          title: "PR-Kampagnen-Spezialist",
          value: "pr-kampagnen-spezialist",
        },
        {
          title: "Social Media-Spezialist",
          value: "social media-spezialist",
        },
        {
          title: "Öffentlichkeitsarbeit-Spezialist",
          value: "öffentlichkeitsarbeit-spezialist",
        },
        {
          title: "Kommunikationsspezialist",
          value: "kommunikationsspezialist",
        },
        {
          title: "Interner Kommunikationsspezialist",
          value: "interner kommunikationsspezialist",
        },
        {
          title: "Externer Kommunikationsspezialist",
          value: "externer kommunikationsspezialist",
        },
        {
          title: "Kundenmanager",
          value: "kundenmanager",
        },
        {
          title: "Kundenservice-Spezialist",
          value: "kundenservice-spezialist",
        },
        {
          title: "Kundenbetreuer",
          value: "kundenbetreuer",
        },
        {
          title: "Benutzersupport-Spezialist",
          value: "benutzersupport-spezialist",
        },
        {
          title: "Technischer Support-Spezialist",
          value: "technischer support-spezialist",
        },
        {
          title: "Servicemitarbeiter",
          value: "servicemitarbeiter",
        },
        {
          title: "Reparatur-Spezialist",
          value: "reparatur-spezialist",
        },
        {
          title: "Installationsspezialist",
          value: "installationsspezialist",
        },
        {
          title: "Wartungsspezialist",
          value: "wartungsspezialist",
        },
        {
          title: "Vertriebsspezialist",
          value: "vertriebsspezialist",
        },
        {
          title: "Vertriebsspezialist für Distribution",
          value: "vertriebsspezialist für distribution",
        },
        {
          title: "Franchise-Spezialist",
          value: "franchise-spezialist",
        },
        {
          title: "Marktforschungsspezialist",
          value: "marktforschungsspezialist",
        },
        {
          title: "Bestandsmanagement-Spezialist",
          value: "bestandsmanagement-spezialist",
        },
        {
          title: "Lagerverwaltungsspezialist",
          value: "lagerverwaltungsspezialist",
        },
        {
          title: "Logistikoperationsspezialist",
          value: "logistikoperationsspezialist",
        },
        {
          title: "Zollabfertigungsspezialist",
          value: "zollabfertigungsspezialist",
        },
        {
          title: "Spezialist für internationale Transporte",
          value: "spezialist für internationale transporte",
        },
        {
          title: "Spezialist für nationale Transporte",
          value: "spezialist für nationale transporte",
        },
        {
          title: "Lagerbetriebs-Spezialist",
          value: "lagerbetriebs-spezialist",
        },
        {
          title: "Transportlogistik-Spezialist",
          value: "transportlogistik-spezialist",
        },
        {
          title: "Fracht-Spezialist",
          value: "fracht-spezialist",
        },
        {
          title: "Zollsachbearbeitungsspezialist",
          value: "zollsachbearbeitungsspezialist",
        },
        {
          title: "Internationale Handels-Spezialisten",
          value: "internationale handels-spezialisten",
        },
        {
          title: "Spezialisten für Außenwirtschaft",
          value: "spezialisten für außenwirtschaft",
        },
        {
          title: "Vertrags-Spezialisten",
          value: "vertrags-spezialisten",
        },
        {
          title: "Rechtsfragen-Specialist",
          value: "rechtsfragen-specialist",
        },
        {
          title: "Spezialisten für Unternehmensrecht",
          value: "spezialisten für unternehmensrecht",
        },
        {
          title: "Arbeitsrecht-Specialist",
          value: "arbeitsrecht-specialist",
        },
        {
          title: "Familienrecht-Specialist",
          value: "familienrecht-specialist",
        },
        {
          title: "Strafrecht-Specialist",
          value: "strafrecht-specialist",
        },
        {
          title: "Verwaltungsrecht-Specialist",
          value: "verwaltungsrecht-specialist",
        },
        {
          title: "Zivilrecht-Specialist",
          value: "zivilrecht-specialist",
        },
        {
          title: "Internationales Recht-Specialist",
          value: "internationales recht-specialist",
        },
        {
          title: "Menschenrechts-Specialist",
          value: "menschenrechts-specialist",
        },
        {
          title: "Eigentumsrechte-Specialist",
          value: "eigentumsrechte-specialist",
        },
        {
          title: "Intellectual Property Rights Specialist",
          value: "intellectual property rights specialist",
        },
        {
          title: "Verbraucherrechte-Specialist",
          value: "verbraucherrechte-specialist",
        },
        {
          title: "Kinderrechte-Specialist",
          value: "kinderrechte-specialist",
        },
        {
          title: "Frauenrechte-Specialist",
          value: "frauenrechte-specialist",
        },
        {
          title: "MigrantInnenrechte-Specialist",
          value: "migrantinnenrechte-specialist",
        },
        {
          title: "Behindertenrechte-Specialist",
          value: "behindertenrechte-specialist",
        },
        {
          title: "Seniorenrechte-Specialist",
          value: "seniorenrechte-specialist",
        },
      ],
    },
    cities: {
      title: "Städte",
      items: [
        {
          title: "Berlin",
          value: "berlin",
        },
        {
          title: "Hamburg",
          value: "hamburg",
        },
        {
          title: "München",
          value: "muenchen",
        },
        {
          title: "Frankfurt am Main",
          value: "frankfurt-am-main",
        },
        {
          title: "Stuttgart",
          value: "stuttgart",
        },
        {
          title: "Düsseldorf",
          value: "duesseldorf",
        },
        {
          title: "Leipzig",
          value: "leipzig",
        },
        {
          title: "Dresden",
          value: "dresden",
        },
        {
          title: "Hannover",
          value: "hannover",
        },
        {
          title: "Nürnberg",
          value: "nuernberg",
        },
        {
          title: "Bremen",
          value: "bremen",
        },
        {
          title: "Münster",
          value: "muenster",
        },
        {
          title: "Köln",
          value: "koeln",
        },
        {
          title: "Dortmund",
          value: "dortmund",
        },
        {
          title: "Essen",
          value: "essen",
        },
        {
          title: "Duisburg",
          value: "duisburg",
        },
        {
          title: "Bochum",
          value: "bochum",
        },
        {
          title: "Wuppertal",
          value: "wuppertal",
        },
        {
          title: "Bielefeld",
          value: "bielefeld",
        },
        {
          title: "Bonn",
          value: "bonn",
        },
        {
          title: "Mannheim",
          value: "mannheim",
        },
        {
          title: "Karlsruhe",
          value: "karlsruhe",
        },
        {
          title: "Gelsenkirchen",
          value: "gelsenkirchen",
        },
        {
          title: "Chemnitz",
          value: "chemnitz",
        },
        {
          title: "Augsburg",
          value: "augsburg",
        },
        {
          title: "Braunschweig",
          value: "braunschweig",
        },
        {
          title: "Aachen",
          value: "aachen",
        },
        {
          title: "Oldenburg",
          value: "oldenburg",
        },
        {
          title: "Heidelberg",
          value: "heidelberg",
        },
        {
          title: "Potsdam",
          value: "potsdam",
        },
        {
          title: "Regensburg",
          value: "regensburg",
        },
        {
          title: "Wiesbaden",
          value: "wiesbaden",
        },
        {
          title: "Zürich",
          value: "zuerich",
        },
        {
          title: "Genf",
          value: "genf",
        },
        {
          title: "Basel",
          value: "basel",
        },
        {
          title: "Lausanne",
          value: "lausanne",
        },
        {
          title: "Bern",
          value: "bern",
        },
        {
          title: "Winterthur",
          value: "winterthur",
        },
        {
          title: "Luzern",
          value: "luzern",
        },
        {
          title: "St. Gallen",
          value: "st-gallen",
        },
        {
          title: "Lugano",
          value: "lugano",
        },
        {
          title: "Uster",
          value: "uster",
        },
        {
          title: "La Chaux-de-Fonds",
          value: "la-chaux-de-fonds",
        },
        {
          title: "Neuchâtel",
          value: "neuchatel",
        },
        {
          title: "Fribourg",
          value: "fribourg",
        },
        {
          title: "Schaffhausen",
          value: "schaffhausen",
        },
        {
          title: "Zug",
          value: "zug",
        },
        {
          title: "Graz",
          value: "graz",
        },
        {
          title: "Linz",
          value: "linz",
        },
        {
          title: "Innsbruck",
          value: "innsbruck",
        },
        {
          title: "Biel/Bienne",
          value: "biel-bienne",
        },
        {
          title: "Freiburg im Breisgau",
          value: "freiburg-im-breisgau",
        },
        {
          title: "Koblenz",
          value: "koblenz",
        },
        {
          title: "Zwickau",
          value: "zwickau",
        },
        {
          title: "Erlangen",
          value: "erlangen",
        },
        {
          title: "Cottbus",
          value: "cottbus",
        },
        {
          title: "Hildesheim",
          value: "hildesheim",
        },
        {
          title: "Trier",
          value: "trier",
        },
        {
          title: "Ulm",
          value: "ulm",
        },
        {
          title: "Würzburg",
          value: "wuerzburg",
        },
        {
          title: "Darmstadt",
          value: "darmstadt",
        },
        {
          title: "Klagenfurt am Wörthersee",
          value: "klagenfurt-am-woerthersee",
        },
        {
          title: "Villach",
          value: "villach",
        },
        {
          title: "Wels",
          value: "wels",
        },
        {
          title: "Sankt Pölten",
          value: "sankt-poelten",
        },
        {
          title: "Dornbirn",
          value: "dornbirn",
        },
        {
          title: "Wiener Neustadt",
          value: "wiener-neustadt",
        },
        {
          title: "Feldkirch",
          value: "feldkirch",
        },
        {
          title: "Bregenz",
          value: "bregenz",
        },
        {
          title: "Leoben",
          value: "leoben",
        },
        {
          title: "Krems an der Donau",
          value: "krems-an-der-donau",
        },
        {
          title: "Amstetten",
          value: "amstetten",
        },
        {
          title: "Mödling",
          value: "moedling",
        },
        {
          title: "Lustenau",
          value: "lustenau",
        },
        {
          title: "Neunkirchen",
          value: "neunkirchen",
        },
        {
          title: "Steyr",
          value: "steyr",
        },
        {
          title: "Wolfsberg",
          value: "wolfsberg",
        },
        {
          title: "Baden bei Wien",
          value: "baden-bei-wien",
        },
        {
          title: "Klosterneuburg",
          value: "klosterneuburg",
        },
        {
          title: "Traun",
          value: "traun",
        },
        {
          title: "Leonding",
          value: "leonding",
        },
        {
          title: "Kapfenberg",
          value: "kapfenberg",
        },
        {
          title: "Hallein",
          value: "hallein",
        },
        {
          title: "Braunau am Inn",
          value: "braunau-am-inn",
        },
        {
          title: "Spittal an der Drau",
          value: "spittal-an-der-drau",
        },
        {
          title: "Traiskirchen",
          value: "traiskirchen",
        },
        {
          title: "Sankt Veit an der Glan",
          value: "sankt-veit-an-der-glan",
        },
        {
          title: "Schaan",
          value: "schaan",
        },
        {
          title: "Vaduz",
          value: "vaduz",
        },
        {
          title: "Triesen",
          value: "triesen",
        },
        {
          title: "Balzers",
          value: "balzers",
        },
        {
          title: "Eschen",
          value: "eschen",
        },
        {
          title: "Mauren",
          value: "mauren",
        },
        {
          title: "Triesenberg",
          value: "triesenberg",
        },
        {
          title: "Ruggell",
          value: "ruggell",
        },
        {
          title: "Gamprin",
          value: "gamprin",
        },
        {
          title: "Schellenberg",
          value: "schellenberg",
        },
        {
          title: "Eisenstadt",
          value: "eisenstadt",
        },
        {
          title: "Gmunden",
          value: "gmunden",
        },
        {
          title: "Mistelbach",
          value: "mistelbach",
        },
        {
          title: "Pöchlarn",
          value: "poechlarn",
        },
        {
          title: "Ried im Innkreis",
          value: "ried-im-innkreis",
        },
        {
          title: "Salzburg",
          value: "salzburg",
        },
        {
          title: "Sankt Johann im Pongau",
          value: "sankt-johann-im-pongau",
        },
        {
          title: "Schwechat",
          value: "schwechat",
        },
        {
          title: "Tulln an der Donau",
          value: "tulln-an-der-donau",
        },
        {
          title: "Vöcklabruck",
          value: "voecklabruck",
        },
        {
          title: "Zeltweg",
          value: "zeltweg",
        },
        {
          title: "Luxembourg City",
          value: "luxembourg-city",
        },
        {
          title: "Esch-sur-Alzette",
          value: "esch-sur-alzette",
        },
        {
          title: "Differdange",
          value: "differdange",
        },
        {
          title: "Dudelange",
          value: "dudelange",
        },
        {
          title: "Ettelbruck",
          value: "ettelbruck",
        },
        {
          title: "Diekirch",
          value: "diekirch",
        },
        {
          title: "Grevenmacher",
          value: "grevenmacher",
        },
        {
          title: "Echternach",
          value: "echternach",
        },
        {
          title: "Vianden",
          value: "vianden",
        },
        {
          title: "Wiltz",
          value: "wiltz",
        },
        {
          title: "Remich",
          value: "remich",
        },
        {
          title: "Rumelange",
          value: "rumelange",
        },
        {
          title: "Hesperange",
          value: "hesperange",
        },
        {
          title: "Sandweiler",
          value: "sandweiler",
        },
        {
          title: "Mamer",
          value: "mamer",
        },
        {
          title: "Contern",
          value: "contern",
        },
        {
          title: "Kehlen",
          value: "kehlen",
        },
        {
          title: "Bettendorf",
          value: "bettendorf",
        },
        {
          title: "Pétange",
          value: "petange",
        },
        {
          title: "Esch-sur-Sûre",
          value: "esch-sur-sure",
        },
        {
          title: "Schuttrange",
          value: "schuttrange",
        },
        {
          title: "Mondercange",
          value: "mondercange",
        },
      ],
    },
    username: {
      title: "Unternehmen",
      isVacancyOnly: true,
      items: [
        {
          title: "SAP",
          value: "sap",
        },
        {
          title: "Siemens",
          value: "siemens",
        },
        {
          title: "Allianz",
          value: "allianz",
        },
        {
          title: "Nestlé",
          value: "nestle",
        },
        {
          title: "Bayer",
          value: "bayer",
        },
        {
          title: "Volkswagen",
          value: "volkswagen",
        },
        {
          title: "Zalando",
          value: "zalando",
        },
        {
          title: "Lufthansa",
          value: "lufthansa",
        },
        {
          title: "BMW",
          value: "bmw",
        },
        {
          title: "Daimler AG",
          value: "daimler",
        },
        {
          title: "Adidas",
          value: "adidas",
        },
        {
          title: "BASF",
          value: "basf",
        },
        {
          title: "Deutsche Telekom",
          value: "deutsche_telekom",
        },
        {
          title: "Freenet AG",
          value: "freenet",
        },
        {
          title: "TUI AG",
          value: "tui",
        },
        {
          title: "Henkel",
          value: "henkel",
        },
        {
          title: "Porsche",
          value: "porsche",
        },
        {
          title: "Merck Group",
          value: "merck",
        },
        {
          title: "Infineon Technologies",
          value: "infineon",
        },
        {
          title: "RWE AG",
          value: "rwe",
        },
        {
          title: "Thyssenkrupp AG",
          value: "thyssenkrupp",
        },
        {
          title: "KION Group AG",
          value: "kion",
        },
        {
          title: "Continental AG",
          value: "continental",
        },
        {
          title: "E.ON SE",
          value: "eon",
        },
        {
          title: "Bayerische Motoren Werke (BMW)",
          value: "bmw_group",
        },
        {
          title: "Zalando SE",
          value: "zalando_se",
        },
        {
          title: "ProSiebenSat.1 Media SE",
          value: "prosiebensat1",
        },
        {
          title: "Scout24 AG",
          value: "scout24",
        },
        {
          title: "Wirecard AG",
          value: "wirecard",
        },
        {
          title: "Beiersdorf AG",
          value: "beiersdorf",
        },
        {
          title: "Schaeffler AG",
          value: "schaeffler",
        },
        {
          title: "Fraport AG",
          value: "fraport",
        },
        {
          title: "Brenntag AG",
          value: "brenntag",
        },
        {
          title: "Evonik Industries",
          value: "evonik",
        },
        {
          title: "Stada Arzneimittel AG",
          value: "stada",
        },
        {
          title: "Leoni AG",
          value: "leoni",
        },
        {
          title: "K+S Aktiengesellschaft",
          value: "ks",
        },
        {
          title: "Rheinmetall AG",
          value: "rheinmetall",
        },
        {
          title: "Hannover Rück SE",
          value: "hannover_rueck",
        },
        {
          title: "Carl Zeiss AG",
          value: "zeiss",
        },
        {
          title: "Wacker Chemie AG",
          value: "wacker",
        },
        {
          title: "Lanxess AG",
          value: "lanxess",
        },
        {
          title: "Daimler Truck AG",
          value: "daimler_truck",
        },
        {
          title: "ArcelorMittal",
          value: "arcelormittal",
        },
        {
          title: "CVC Capital Partners",
          value: "cvc_capital_partners",
        },
        {
          title: "SES S.A.",
          value: "ses",
        },
        {
          title: "Millicom",
          value: "millicom",
        },
        {
          title: "Foyer S.A.",
          value: "foyer",
        },
        {
          title: "Ceratizit",
          value: "ceratizit",
        },
        {
          title: "PTLuxembourg",
          value: "ptluxembourg",
        },
        {
          title: "Swiss Re",
          value: "swiss_re",
        },
      ],
    },
  },
};
