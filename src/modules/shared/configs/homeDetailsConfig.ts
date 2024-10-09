import { LanguageType } from "./internationalization/InternationalizationConfig";

interface HomeDetailsItemPoint {
  index: number;
  title: string;
}

export type HomeDetailsItem = {
  title: string;
  description?: string;
  items: HomeDetailsItemPoint[];
};

export type HomeDetailsItems = Record<LanguageType, HomeDetailsItem[]>;

export const homeDetailsConfig: HomeDetailsItems = {
  ru: [
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
        {
          index: 4,
          title: "Покажите, что вы соответствуете тому, что они ищут в стажере.",
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
  ],
  de: [
    {
      title: "Praktikum",
      description: "Was ist ein Praktikum und wie lange dauert es?",
      items: [
        {
          index: 1,
          title:
            "Ein Praktikum ist eine Phase der Berufserfahrung, die über einen festen Zeitraum von einer Woche bis zu 12 Monaten dauert.",
        },
        {
          index: 2,
          title:
            "Sommerpraktika dauern in der Regel während der Sommerferien – normalerweise zwei oder drei Monate.",
        },
        {
          index: 3,
          title: "Sommerpraktika sind sowohl bei Studenten als auch bei Absolventen beliebt.",
        },
        {
          index: 4,
          title:
            "Sommerpraktika dauern lange genug, damit Sie einen Eindruck von der Arbeit bekommen und wertvolle Fähigkeiten erwerben können.",
        },
      ],
    },
    {
      title: "Wie bewirbt man sich um ein Praktikum?",
      items: [
        {
          index: 1,
          title:
            "Der Bewerbungsprozess kann so wettbewerbsfähig sein wie die Bewerbung um eine Festanstellung.",
        },
        {
          index: 2,
          title: "Versuchen Sie, sich mindestens sechs Monate im Voraus zu bewerben.",
        },
        {
          index: 3,
          title: "Zeigen Sie, dass Sie Wissen und Motivation haben.",
        },
        {
          index: 4,
          title:
            "Beschreiben Sie, was Sie dem Unternehmen anbieten können und betonen Sie, warum Sie genau in diesem Unternehmen arbeiten möchten.",
        },
      ],
    },
    {
      title: "Was erwarten Arbeitgeber?",
      items: [
        {
          index: 1,
          title: "Arbeitgeber erwarten nicht unbedingt vorherige Berufserfahrung.",
        },
        {
          index: 2,
          title:
            "Arbeitgeber werden fragen, welche Erfahrungen und Fähigkeiten Sie durch Ihre Ausbildung erworben haben.",
        },
        {
          index: 3,
          title:
            "Einige Arbeitgeber erwarten, Praktikanten aus ihrem Pool für feste Stellen einzustellen.",
        },
        {
          index: 4,
          title: "Zeigen Sie, dass Sie das sind, wonach sie in einem Praktikanten suchen.",
        },
      ],
    },
    {
      title: "Was sind die Vorteile eines Praktikums?",
      items: [
        {
          index: 1,
          title:
            "Erleichterung des Übergangs von der Ausbildung zur Arbeit, Verbesserung von Fähigkeiten und Wissen.",
        },
        {
          index: 2,
          title: "Verbesserung Ihres Verständnisses für einen bestimmten Job oder eine Branche.",
        },
        {
          index: 3,
          title: "Verschaffung nützlicher Kontakte in der Branche.",
        },
        {
          index: 4,
          title:
            "Einblick in andere Rollen zu geben, die Sie möglicherweise zuvor nicht in Betracht gezogen haben.",
        },
        {
          index: 5,
          title:
            "Hilfe beim Verständnis, wie Organisationen arbeiten und mit welchen Herausforderungen sie konfrontiert sind.",
        },
        {
          index: 6,
          title:
            "Bereitstellung realer Arbeitsbeispiele, die Sie bei zukünftigen Vorstellungsgesprächen verwenden können.",
        },
      ],
    },
  ],
  en: [
    {
      title: "Internship",
      description: "What is an internship and how long does it last?",
      items: [
        {
          index: 1,
          title:
            "An internship is a period of work experience lasting for a fixed period of time from a week to 12 months.",
        },
        {
          index: 2,
          title:
            "Summer internships typically last during the summer break—usually two or three months.",
        },
        {
          index: 3,
          title: "Summer internships are popular among both students and graduates.",
        },
        {
          index: 4,
          title:
            "Summer internships last long enough for you to get a taste of work and gain valuable skills.",
        },
      ],
    },
    {
      title: "How to apply for an internship?",
      items: [
        {
          index: 1,
          title: "The application process can be as competitive as applying for a permanent job.",
        },
        {
          index: 2,
          title: "Try to apply at least six months in advance.",
        },
        {
          index: 3,
          title: "Demonstrate that you have knowledge and motivation.",
        },
        {
          index: 4,
          title:
            "Describe what you can offer the company and emphasize why you want to work specifically at this company.",
        },
      ],
    },
    {
      title: "What do employers expect?",
      items: [
        {
          index: 1,
          title: "Employers do not expect previous work experience.",
        },
        {
          index: 2,
          title: "Employers will ask what experience and skills you gained through your education.",
        },
        {
          index: 3,
          title: "Some employers expect to hire interns from their pool for permanent positions.",
        },
        {
          index: 4,
          title: "Show that you match what they are looking for in an intern.",
        },
      ],
    },
    {
      title: "What are the benefits of an internship?",
      items: [
        {
          index: 1,
          title: "Easing the transition from study to work, enhancing skills and knowledge.",
        },
        {
          index: 2,
          title: "Improving your understanding of a specific job or industry.",
        },
        {
          index: 3,
          title: "Providing you with useful contacts in the industry.",
        },
        {
          index: 4,
          title: "Showing you other roles that you may not have considered before.",
        },
        {
          index: 5,
          title:
            "Helping you gain insight into how organizations operate and the challenges they face.",
        },
        {
          index: 6,
          title:
            "Providing you with real-world examples of work that you can use in future interviews.",
        },
      ],
    },
  ],
};
