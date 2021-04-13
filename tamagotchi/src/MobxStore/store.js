import { makeAutoObservable } from "mobx";
import {
  FOOD,
  DRINKS,
  DEEDS,
  RELAXATION,
  randomInteger,
} from "../utils/helpers";

class Store {
  actionsList = {
    hp: {
      score: 50,
    },
    hunger: {
      score: 50,
    },
    drinking: {
      score: 50,
    },
    tiredness: {
      score: 50,
    },
    historyList: [],
  };

  constructor() {
    makeAutoObservable(this);
  }

  get isHpLow() {
    return this.actionsList.hp.score <= 0;
  }

  get actionsHistory() {
    return this.actionsList.historyList;
  }

  eat() {
    const randomPosition = randomInteger(0, FOOD.length - 1);
    const randomScore = randomInteger(2, 5);
    this.actionsList.historyList.push(`поел ${FOOD[randomPosition].label}`);
    this.actionsList.hunger.score = this.actionsList.hunger.score - 10;
    this.actionsList.hp.score = this.actionsList.hp.score + randomScore;
  }

  drink() {
    const randomPosition = randomInteger(0, DRINKS.length - 1);
    const randomScore = randomInteger(1, 3);
    this.actionsList.historyList.push(`выпил ${DRINKS[randomPosition].label}`);
    this.actionsList.drinking.score = this.actionsList.drinking.score - 10;
    this.actionsList.hp.score = this.actionsList.hp.score + randomScore;
  }

  relax() {
    const randomPosition = randomInteger(0, RELAXATION.length - 1);
    const randomScore = randomInteger(1, 10);
    const randomTirednessScore = randomInteger(10, 20);
    this.actionsList.historyList.push(RELAXATION[randomPosition].label);
    this.actionsList.drinking.score =
      this.actionsList.drinking.score + randomScore;
    this.actionsList.hunger.score = this.actionsList.hunger.score + randomScore;
    this.actionsList.hp.score = this.actionsList.hp.score + randomScore;
    this.actionsList.tiredness.score =
      this.actionsList.tiredness.score - randomTirednessScore;
  }

  doSome() {
    const { tiredness, hunger, drinking, hp, historyList } = this.actionsList;
    const randomPosition = randomInteger(0, DEEDS.length - 1);
    const randomTirednessScore = randomInteger(20, 30);
    const randomHungerScore = randomInteger(1, 5);
    const randomHpScore = randomInteger(5, 10);

    historyList.push(`занялся ${DEEDS[randomPosition].label}`);
    tiredness.score = tiredness.score + randomTirednessScore;
    drinking.score = drinking.score + randomHungerScore;
    hunger.score = hunger.score + randomHungerScore;
    hp.score = hp.score - randomHpScore;
  }
}

const store = new Store();

export default store;
