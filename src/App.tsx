import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import Index from "./views/Index";
import CharactersList from "./views/CharactersList";
import Character from "./views/Character";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/index" render={(props: any) => <Index {...props} />} />
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
