import "./index.scss";
import StatsItem from "../../components/StatsItem";
import ControlsItem from "../../components/ControlsItem";
import GameOver from "../../components/GameOver";

import store from "../../MobxStore/store";
import { observer } from "mobx-react";

import { getStatsList, getControlsList } from "../../utils/helpers";

const Game = observer(function () {
  const statsList = getStatsList(store);
  const controlsList = getControlsList(store);

  if (store.isHpLow) {
    return <GameOver />;
  }

  return (
    <div className="game-wrapper">
      <div className="game">
        <div className="stats">
          {statsList.map((item) => {
            return (
              <StatsItem
                key={item.label}
                label={item.label}
                color={item.color}
                width={item.width()}
              />
            );
          })}
        </div>
        <div className="controls">
          {controlsList.map((control) => {
            return (
              <ControlsItem
                key={control.label}
                onClick={control.action}
                label={control.label}
                color={control.color}
                hoverColor={control.hoverColor}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
});

export default Game;
