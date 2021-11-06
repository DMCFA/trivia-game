import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Game from "./features/game/Game";
import Begin from "./features/Begin";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Begin}></Route>
      </Switch>
      <Switch>
        <Route path="/game" component={Game}></Route>
      </Switch>
    </Router>
  );
}

export default App;
