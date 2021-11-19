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

      <img
        src={country.flags.svg}
        alt="flag"
        style={{ maxWidth: "10rem", maxHeight: "10rem" }}
      />
    </>
  );
};

export default CountryDetails;
