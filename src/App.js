import React from "react";
import { Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";
import Portal from "./components/portal";
import "./app.css";

library.add(faStroopwafel);

const App = () => (
  <div>
    <Route path="/" exact component={Portal} />
  </div>
);

export default App;
