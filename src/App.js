import React from "react";
import ReactDOM from "react-dom";
import Details from "./Details";
import { Link, Router } from "@reach/router";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
