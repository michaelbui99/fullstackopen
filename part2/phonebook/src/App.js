import React, { useState, useEffect } from "react";
import PhoneBookEntry from "./components/PhoneBookEntry";
import "./App.css";

function App() {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const handleNameInputChange = (e) => {
    setNewName(e.target.value);
  };
  const handleNumberInputChange = (e) => {
    setNewNumber(e.target.value);
  };

  const addPerson = (e) => {
    e.preventDefault();
    let newPerson = {
      name: newName,
      number: newNumber,
    };

    if (newName === "" || newName === null) {
      return;
    }

    let alreadyAdded = false;
    persons.forEach((p) => {
      if (p.name === newPerson.name) {
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
      <form onSubmit={addPerson}>
        <div>
          name: <input type="text" onChange={handleNameInputChange} />
        </div>
        <div>
          number: <input type="text" onChange={handleNumberInputChange} />
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
