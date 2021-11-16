import React, { useState, useEffect } from "react";
import PhoneBookEntry from "./components/PhoneBookEntry";
import "./App.css";

function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "321-321321-2" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const [personsToShow, setPersonsToShow] = useState([
    { name: "Arto Hellas", number: "321-321321-2" },
  ]);

  useEffect(() => {
    setPersonsToShow(persons);
  }, [persons]);

  const handleNameInputChange = (e) => {
    setNewName(e.target.value);
  };
  const handleNumberInputChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleFilterInputChange = (e) => {
    //TODO: Find cause for delayed update of displayed entries when filtering.
    setNameFilter(e.target.value, executeFilter());
  };

  const executeFilter = () => {
    setPersonsToShow(persons.filter((p) => p.name.includes(nameFilter)));
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

  const seed = () => {
    setPersons([
      { name: "Arto Hellas", number: "040-123456", id: 1 },
      { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
      { name: "Dan Abramov", number: "12-43-234345", id: 3 },
      { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
    ]);
  };

  return (
    <div className="App">
      <h2>Phonebook</h2>
      <div>
        <p>
          Filter shown with:{" "}
          <span>
            <input type="text" onChange={handleFilterInputChange} />
          </span>
        </p>
      </div>
      <h2>Add new entry</h2>
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
      <button onClick={seed}>Add Test Data</button>
      <h2>Numbers</h2>
      {personsToShow.map((p) => (
        <PhoneBookEntry person={p} />
      ))}
    </div>
  );
}

export default App;
