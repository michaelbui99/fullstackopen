const CountryDetails = ({ country, weatherDetails }) => {
  return (
    <>
      <h2>{country.name.common}</h2>
      <p>{country.capital[0]}</p>
      <h3>Languages:</h3>
      <ul>
        {country.languages !== null
          ? Object.entries(country.languages).map((l) => <li>{l[1]}</li>)
          : ""}
      </ul>

      <img
        src={country.flags.svg}
        alt="flag"
        style={{ maxWidth: "10rem", maxHeight: "10rem" }}
      />

      {weatherDetails !== null || weatherDetails !== undefined? 
      <>
      <h3>Weather in {country.capital[0]}</h3>
      <p><strong>Temperature: </strong>{weatherDetails.current.temparature} Celcius</p>
      <img src={weatherDetails.current.weather_icons[0]} alt="weather icon" />
        <p><strong>Wind: </strong> {weatherDetails.current.wind_speed} mph direction {weatherDetails.current.wind_dir}</p>
      </>
    
    :""}
    </>
  );
};

export default CountryDetails;
