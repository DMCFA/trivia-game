import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Game from "./components/Game";
import Begin from "./components/Begin";

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
