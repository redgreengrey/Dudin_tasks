import Nav from "./components/Nav";
import Home from "./pages/Home";
import Game from "./pages/Game";
import GameHistory from "./pages/GameHistory";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route path="/game" component={Game} />
          <Route path="/game-history" component={GameHistory} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
