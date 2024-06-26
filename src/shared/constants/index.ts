import { type HistoricalSubject } from "../types"

export const historicalSubjects: HistoricalSubject[] = [
  {
    index: 1,
    name: "Кино",
    value: "cinema",
    interval: [1985, 2007],
    events: [
      {
        date: 1985,
        description:
          "В этот период появилось множество новых жанров кино, включая научную фантастику, триллеры, фэнтези и драмы.",
      },
      {
        date: 1991,
        description:
          "Киноиндустрия использовала компьютерную графику в фильмах, таких как 'Терминатор 2: Судный день' и 'Бешеные псы'.",
      },
      {
        date: 1997,
        description:
          "Выход 'Титаника' Джеймса Кэмерона, ставшего на тот момент самым кассовым фильмом в истории кинематографа.",
      },
      {
        date: 1999,
        description:
          "Премьера 'Матрицы' братьев Вачовски, представившей зрителям уникальный сюжет и революционные спецэффекты.",
      },
      {
        date: 2003,
        description:
          "Вышли фильмы-блокбастеры, такие как 'Убить Билла' и 'Пираты Карибского моря', привлекшие миллионы зрителей.",
      },
      {
        date: 2007,
        description:
          "С развитием цифровой съемки и постпроизводства качество фильмов улучшилось благодаря новым технологиям.",
      },
    ],
  },
  {
    index: 2,
    name: "Медицина",
    value: "medicine",
    interval: [1996, 2013],
    events: [
      {
        date: 1996,
        description:
          "Клонирование овцы Долли, первого успешно склонированного млекопитающего, открыло новые перспективы в генетике и медицине.",
      },
      {
        date: 2001,
        description:
          "Публикация первой версии генома человека в рамках проекта Human Genome Project, что привело к революции в молекулярной медицине и генетике.",
      },
      {
        date: 2003,
        description:
          "Завершение проекта Human Genome Project с опубликованием полной последовательности человеческого генома.",
      },
      {
        date: 2005,
        description:
          "Одобрение вакцины против вируса папилломы человека (HPV) для предотвращения рака шейки матки.",
      },
      {
        date: 2008,
        description:
          "Запуск исследования кризпандемического гриппа H1N1 и масштабной кампании вакцинации для борьбы с пандемией.",
      },
      {
        date: 2013,
        description:
          "Открытие новых перспектив в генетическом лечении благодаря CRISPR исследованиям.",
      },
    ],
  },
  {
    index: 3,
    name: "Спорт",
    value: "Sport",
    interval: [2005, 2020],
    events: [
      {
        date: 2015,
        description:
          "Запуск серии турниров по покеру, включая World Series of Poker, которая привлекла международное внимание к профессиональному игровому спорту",
      },
      {
        date: 2008,
        description:
          "Введение технологии голевой линии (goal-line technology) в футболе для определения забитых голов, повышая точность решений арбитров",
      },
      {
        date: 2012,
        description:
          "Официальное включение женского бокса в программу летних Олимпийских игр в Лондоне, открывая новые возможности для женщин в этом спорте.",
      },
      {
        date: 2014,
        description:
          "Легендарный боксер Флойд Мэйуэзер-младший объявляет о своем выходе на пенсию, завершая великолепную карьеру без поражений",
      },
      {
        date: 2020,
        description:
          "Отмена летних Олимпийских игр в Токио из-за пандемии COVID-19, что привело к историческому сдвигу календаря Олимпийских игр",
      },
    ],
  },
  {
    index: 4,
    name: "Наука",
    value: "science",
    interval: [2015, 2022],
    events: [
      {
        date: 2015,
        description:
          "Обнаружение гравитационных волн — историческое подтверждение теории Эйнштейна о кривизне пространства-времени.",
      },
      {
        date: 2016,
        description:
          "Редактирование генома с помощью CRISPR — революционная технология для точного изменения ДНК.",
      },
      {
        date: 2017,
        description:
          "Обнаружение планеты TRAPPIST-1 — открытие системы экзопланет, где условия могут быть благоприятными для жизни.",
      },
      {
        date: 2019,
        description:
          "Первое изображение черной дыры — прямое визуальное подтверждение теорий общей теории относительности.",
      },
      {
        date: 2020,
        description:
          "Разработка вакцин против COVID-19 — создание эффективных препаратов для борьбы с пандемией.",
      },
      {
        date: 2022,
        description:
          "Прогресс в квантовых вычислениях — достижения в создании квантовых компьютеров и алгоритмов.",
      },
    ],
  },
]
