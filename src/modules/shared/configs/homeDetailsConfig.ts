interface HomeDetailsItemPoint {
  index: number;
  title: string;
}

export type HomeDetailsItem = {
  title: string;
  description?: string;
  items: HomeDetailsItemPoint[];
};

export type HomeDetailsItems = HomeDetailsItem[];

export const homeDetailsConfig: HomeDetailsItems = [
  {
    title: "Стажировка",
    description: "Что такое стажировка и сколько она длится",
    items: [
      {
        index: 1,
        title:
          "Стажировка — это период опыта работы, продолжающийся в течение фиксированного периода времени от недели до 12 месяцев",
      },
      {
        index: 2,
        title:
          "Летние стажировки, как правило, длятся во время летних каникул — обычно два или три месяца.",
      },
      {
        index: 3,
        title: "Летние стажировки, популярные как среди студентов, так и среди выпускников",
      },
      {
        index: 4,
        title:
          "Летние стажировки — длятся достаточно долго, чтобы вы могли почувствовать вкус работы и приобрести ценные навыки",
      },
    ],
  },

  {
    title: "Как подать заявку на стажировку?",
    items: [
      {
        index: 1,
        title:
          "Процесс подачи заявления может быть таким же конкурентным, как и подача заявления на постоянную работу",
      },
      {
        index: 2,
        title: "Постарайтесь подать заявку как минимум за шесть месяцев вперед.",
      },
      {
        index: 3,
        title: "Продемонстрируйте, что у вас есть знания и мотивация",
      },
      {
        index: 4,
        title:
          "Опишите, что вы можете предложить компании подчеркните, почему вы хотите работать именно в этой компании",
      },
      {
        index: 5,
        title: "Покажите, что вы соответствуете тому, что они ищут в стажере.",
      },
    ],
  },
  {
    title: "Что ожидают работодатели?",
    items: [
      {
        index: 1,
        title: "Работодатели не ожидают наличия предыдущего опыта работы",
      },
      {
        index: 2,
        title:
          "Работодатели спросят, какой опыт и навыки вы приобрели благодаря получению образования.",
      },
      {
        index: 3,
        title:
          "Некоторые работодатели ожидают нанять на постоянные должности из своего резерва стажеров",
      },
    ],
  },
  {
    title: "Каковы преимущества стажировки?",
    items: [
      {
        index: 1,
        title: "Облегчение перехода от учебы к работе, повышение навыков и знаний",
      },
      {
        index: 2,
        title: "Улучшение своего понимания конкретной работы или отрасли",
      },

      {
        index: 3,
        title: "Предоставление вам полезных контактов в отрасли",
      },
      {
        index: 4,
        title: "Показ вам других ролей,которые вы, возможно, раньше не рассматривали",
      },
      {
        index: 5,
        title:
          "Помощь получить представление о том, как работают организации и с какими проблемами они сталкиваются",
      },
      {
        index: 6,
        title:
          "Предоставление вам реальных примеров работы, которые вы сможете использовать на будущих собеседованиях.",
      },
    ],
  },
];