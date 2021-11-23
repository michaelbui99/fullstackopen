import React, { useState, useEffect } from "react";
import PhoneBookEntry from "./components/PhoneBookEntry";
import SearchFilter from "./components/search-filter/SearchFilter";
import NewEntryInput from "./components/new-entry-input/NewEntryInput";
import "./App.css";

function App() {
  const personService = require("./services/PersonService").default;
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "321-321321-2" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const [personsToShow, setPersonsToShow] = useState([
    { name: "Arto Hellas", number: "321-321321-2" },
  ]);
  const service = personService();
  useEffect(() => {
    fetchAllPersons();
  }, []);

  const fetchAllPersons = async () => {
    const allPersons = await service.getAll();
    console.log({ allPersons });
    setPersonsToShow(allPersons);
  };

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
      <SearchFilter handleFilterInputChange={handleFilterInputChange} />
      <h2>Add new entry</h2>
      <NewEntryInput
        handleNameInputChange={handleNameInputChange}
        handleNumberInputChange={handleNumberInputChange}
        onSubmit={addPerson}
      />
      <button onClick={seed}>Add Test Data</button>
      <h2>Numbers</h2>
      {personsToShow.map((p) => (
        <PhoneBookEntry person={p} />
      ))}
    </div>
  );
}

export default App;
