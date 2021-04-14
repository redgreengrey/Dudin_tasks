import React from "react";
import { useHistory } from "react-router-dom";
import "./index.scss";

function Home() {
  let history = useHistory();

  let handleClick = () => {
    history.push("/game");
  };

  return (
    <main className="home">
      <h1>Это приложение напоминающее игру тамагочи</h1>
      <h3>Нажмите на вкладку игра или нажмите кнопку снизу</h3>
      <div>
        <button onClick={handleClick} className="home-btn">
          к игре
        </button>
      </div>
    </main>
  );
}

export default Home;
