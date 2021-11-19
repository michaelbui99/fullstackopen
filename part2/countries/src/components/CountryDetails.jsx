const CountryDetails = ({ country }) => {
  return (
    <>
      <h2>{country.name.common}</h2>
      <p>{country.capital[0]}</p>
      <h3>Languages:</h3>
      <ul>
        {Object.entries(country.languages).map((l) => (
          <li>{l[1]}</li>
        ))}
      </ul>
    </>
  );
};

export default CountryDetails;
