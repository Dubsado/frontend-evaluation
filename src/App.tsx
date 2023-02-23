import React, { useEffect } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Counter</h1>
      <div className="counter">
        <div className="counter__display">0</div>
        <div className="counter__buttons">
          <button className="counter__button">-</button>
          <button className="counter__button">+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
