import React, { useState } from "react";
import Header from "./components/header/Header";
import Button from "./components/button/Button";
import "./App.css";

function App() {
  const [goodCount, setGoodCount] = useState(0);
  const [neutralCount, setNeutralCount] = useState(0);
  const [badCount, setBadCount] = useState(0);

  const clickHandler = (func, state) => {
    const handler = func(state + 1);
    return handler;
  };

  return (
    <div className="App">
      <Header title="give feedback" />
      <Button handleClick={clickHandler(goodCount, setGoodCount)} text="Good" />
      <Button
        handleClick={clickHandler(neutralCount, setNeutralCount)}
        text="Neutral"
      />
      <Button handleClick={clickHandler(badCount, setBadCount)} text="Good" />
    </div>
  );
}

export default App;
