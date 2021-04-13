import "./index.scss";

function GameOver() {
  return (
    <div className="game-over">
      <div className="skull">&#9760;</div>
      <h2 className="game-over__header">игра оконченаа</h2>
      <h3>Обновите страницу чтобы начать заново</h3>
    </div>
  );
}

export default GameOver;
