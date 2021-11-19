import React, { useState, useEffect } from "react";
import CountryDetails from "./components/CountryDetails";
import "./App.css";
import axios from "axios";
function App() {
  const URL = "https://restcountries.com/v3.1/all";
  const [countryInput, setCountryInput] = useState("");
  const [fetchedCountries, setFetchedCountries] = useState([]);
  const [countriesToShow, setCountriesToShow] = useState([]);
  const handleCountrInputChange = (e) => {
    setCountryInput(e.target.value, filterCountries());
  };

  useEffect(() => {
    async function fetchData() {
      let countries = await axios.get(URL);
      setFetchedCountries(countries.data);
    }
    fetchData();
  }, []);

  const filterCountries = () => {
    let filteredCountries = fetchedCountries.filter((c) =>
      c.name.common.includes(countryInput)
    );
    console.log({ filteredCountries });
    setCountriesToShow(filteredCountries);
  };

  return (
    <div className="App">
      <p>Find countries</p>
      <input type="text" onChange={handleCountrInputChange} />
      {countriesToShow.length > 0 && countriesToShow.length !== 1 ? (
        countriesToShow.length > 10 ? (
          "Too many matches, specify another filter"
        ) : (
          countriesToShow.map((c) => <p key={c.cca2}>{c.name.common}</p>)
        )
      ) : countriesToShow.length === 1 ? (
        <CountryDetails country={countriesToShow[0]} />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
