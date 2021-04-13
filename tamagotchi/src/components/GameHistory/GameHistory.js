import React from "react";
import "./index.scss";
import store from "../../MobxStore/store";

function GameHistory() {
  return (
    <div className="game-history">
      <div className="game-history__list">
        {store.actionsHistory.length === 0 && (
          <span>Вы не произвели ещё ни одного действия</span>
        )}
        {store.actionsHistory.length > 0 &&
          store.actionsHistory.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
      </div>
    </div>
  );
}

export default GameHistory;
