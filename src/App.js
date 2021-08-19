import { Fragment } from "react";
import "./App.css";
import { JokeGen } from "./JokeGen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/" component={JokeGen} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
