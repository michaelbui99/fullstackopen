import React, { useState, useEffect } from "react";
import PhoneBookEntry from "./components/PhoneBookEntry";
import "./App.css";

function App() {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const handleNameInputChange = (e) => {
    setNewName(e.target.value);
  };

  const addName = (e) => {
    e.preventDefault();
    let newPerson = {
      name: newName,
    };

    if (newName === "" || newName === null) {
      return;
    }

    let alreadyAdded = false;
    persons.forEach((p) => {
      if (p.name === newName) {
        window.alert(`${newName} is already added to the phonebook`);
        alreadyAdded = true;
        return;
      }
    });

    if (alreadyAdded) {
      return;
    }

    setPersons(persons.concat(newPerson));
    console.log(persons);
  };

  return (
    <div className="App">
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input type="text" onChange={handleNameInputChange} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((p) => (
        <PhoneBookEntry person={p} />
      ))}
    </div>
  );
}

export default App;
