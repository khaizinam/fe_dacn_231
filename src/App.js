import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./pages/s01/s01.component.css";
import { SCREEN } from "./shared/constants/router.constant";

function App() {
  const listRouter = [];
  Object.keys(SCREEN).forEach((key, index) => {
    listRouter.push(
      <Route key={`router-${index}`} exact path={SCREEN[key].path}>
        {SCREEN[key].component}
      </Route>
    );
  });
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>{listRouter}</Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
