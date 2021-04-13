import "./index.scss";
import StatsItem from "../StatsItem";
import ControlsItem from "../ControlsItem";
import GameOver from "../GameOver";

import store from "../../MobxStore/store";
import { observer } from "mobx-react";

const Game = observer(function () {
  let hunger = function () {
    return store.actionsList.hunger.score;
  };

  let hp = function () {
    return store.actionsList.hp.score;
  };

  let drinking = function () {
    return store.actionsList.drinking.score;
  };

  let tiredness = function () {
    return store.actionsList.tiredness.score;
  };

  const handleEat = () => {
    store.eat();
  };

  const handleDrink = () => {
    store.drink();
  };

  const handleRelax = () => {
    store.relax();
  };

  const handleDoSome = () => {
    store.doSome();
  };

  if (store.isHpLow) {
    return <GameOver />;
  }

  return (
    <div className="game-wrapper">
      <div className="game">
        <div className="stats">
          <StatsItem label="Здоровье" color="#e74c3c" width={hp()} />
          <StatsItem label="Жажда" color="#3498DB" width={drinking()} />
          <StatsItem label="Голод" color="#E67E22" width={hunger()} />
          <StatsItem label="Усталость" color="#95A5A6" width={tiredness()} />
        </div>
        <div className="controls">
          <ControlsItem
            onClick={handleEat}
            label="есть"
            color="#e74c3c"
            hoverColor="#C0392B"
          />
          <ControlsItem
            onClick={handleDrink}
            label="пить"
            color="#3498DB"
            hoverColor="#2980B9"
          />
          <ControlsItem
            onClick={handleRelax}
            label="отдыхать"
            color="#E67E22"
            hoverColor="#D35400"
          />
          <ControlsItem
            onClick={handleDoSome}
            label="работать"
            color="#95A5A6"
            hoverColor="#7F8C8D"
          />
        </div>
      </div>
    </div>
  );
});

export default Game;
