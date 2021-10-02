import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Start from "./components/Start";
import Game from "./components/Game";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Start}></Route>
      </Switch>
      <Switch>
        <Route path="/game" component={Game}></Route>
      </Switch>
    </Router>
  );
}

export default App;
