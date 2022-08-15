import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import Test from "./pages/Test";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/test" component={Test} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
