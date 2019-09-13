import React from "react";
import "./App.css";

import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import Todo from "./Todo";
import Doing from "./Doing";
import Done from "./Done";

function App() {
  return (
    <div id="MainContainer">
      <div className="uk-width-1-1@s uk-text-center uk-margin-top">
        <h1>My Kaban App</h1>
      </div>
      <hr />

      <div className="uk-flex uk-flex-center Content">
        <div className="Section"><Todo /></div>
        <div className="Section"><Doing /></div>
        <div className="Section"><Done /></div>
      </div>
    </div>
  );
}

export default App;
