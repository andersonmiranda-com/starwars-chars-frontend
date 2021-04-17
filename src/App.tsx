import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "./App.scss";

import Index from "./views/Index";
import CharactersList from "./views/CharactersList";
import Character from "./views/Character";

function App() {
  return (
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
  );
}

export default App;
