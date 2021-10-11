import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

const App = () => {
  return (
    <div>
      Hi Tehere
      <SeasonDisplay />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
