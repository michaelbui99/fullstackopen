import React, { useState } from "react";
import Button from "./components/button/Button";
import "./App.css";

function App() {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Uint8Array(10));
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const selectNewAnecdote = () => {
    let newAnecdoteIdx = Math.floor(Math.random() * anecdotes.length);
    setSelected(newAnecdoteIdx);
  };

  const vote = (index) => {
    const newVotes = [...votes];
    newVotes[index] += 1;
    setVotes(newVotes);
    console.log({ votes });
  };

  const getHighestVotedAnecdoteIndex = () => {
    return votes.indexOf(Math.max(...votes));
  };

  return (
    <div className="App">
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>{`has ${
        votes[selected] === undefined ? 0 : votes[selected]
      } votes`}</p>
      <div
        className="button-container"
        style={{ display: "flex", gap: "1rem" }}
      >
        <Button text="next anecdote" handleClick={selectNewAnecdote} sty />
        <Button text="vote" handleClick={() => vote(selected)} />
      </div>

      <h2>Anecdotes with the most votes</h2>
      <p>{anecdotes[getHighestVotedAnecdoteIndex()]}</p>
    </div>
  );
}

export default App;
