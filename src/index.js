import React from "react";
import ReactDOM from "react-dom";
import IndexPage from "./pages/IndexPage/IndexPage";

import "./styles.css";

function App() {
  return (
    <div className="grid">
      <div className="corner-piece" />
      <div className="top-bar" />
      <div className="side-bar" />
      <div className="main-content">
        <IndexPage />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
