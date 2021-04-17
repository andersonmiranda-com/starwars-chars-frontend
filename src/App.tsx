import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import Home from "./views/Home/index";
import CharactersList from "./views/CharactersList/index";
import Character from "./views/Character/index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/index" render={(props: any) => <Home {...props} />} />
          <Route
            path="/characters"
            render={(props: any) => <CharactersList {...props} />}
          />
          <Route
            path="/character/:charId"
            render={(props: any) => <Character {...props} />}
          />
          <Redirect to="/index" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
