import React, { useState } from "react";
import Header from "./components/header/Header";
import Button from "./components/button/Button";
import Statistics from "./components/statistics/Statistics";
import "./App.css";

//Current exercise is 1.10 unicafe part 1d
function App() {
  const [goodCount, setGoodCount] = useState(0);
  const [neutralCount, setNeutralCount] = useState(0);
  const [badCount, setBadCount] = useState(0);

  const clickHandler = (func, state) => {
    const handler = () => func(state + 1);
    return handler;
  };

  return (
    <div className="App">
      <Header title="give feedback" />
      <Button handleClick={clickHandler(setGoodCount, goodCount)} text="Good" />
      <Button
        handleClick={clickHandler(setNeutralCount, neutralCount)}
        text="Neutral"
      />
      <Button handleClick={clickHandler(setBadCount, badCount)} text="Bad" />
      <Statistics
        goodCount={goodCount}
        neutralCount={neutralCount}
        badCount={badCount}
      />
    </div>
  );
}

export default App;
