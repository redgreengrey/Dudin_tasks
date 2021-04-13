const FOOD = [
  {
    label: "яблоко",
    points: 1,
  },
  {
    label: "суп",
    points: 2,
  },
  {
    label: "гречку",
    points: 2,
  },
  {
    label: "поп-корн",
    points: -1,
  },
  {
    label: "гамбургер",
    points: -1,
  },
  {
    label: "чипсы",
    points: -2,
  },
];

const DRINKS = [
  {
    label: "сок",
    points: 1,
  },
  {
    label: "чай",
    points: 2,
  },
  {
    label: "воды",
    points: 2,
  },
  {
    label: "газировки",
    points: -1,
  },
  {
    label: "вино",
    points: -5,
  },
  {
    label: "уксус",
    points: -10,
  },
];

const DEEDS = [
  {
    label: "уборкой",
    points: 1,
  },
  {
    label: "программированием",
    points: 2,
  },
  {
    label: "сольфеджио",
    points: 2,
  },
  {
    label: "карате",
    points: -1,
  },
];

const RELAXATION = [
  {
    label: "поиграл в видеоигры",
    points: 1,
  },
  {
    label: "поспал",
    points: 2,
  },
  {
    label: "смотрел кино",
    points: 2,
  },
  {
    label: "сходил на пляж",
    points: -1,
  },
];

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

export { FOOD, DEEDS, DRINKS, RELAXATION, randomInteger };
