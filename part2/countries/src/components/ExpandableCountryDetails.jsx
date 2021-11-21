import React, { useState } from "react";
import CountryDetails from "./CountryDetails";
const ExpandableCountryDetails = ({ country }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <p>
        {country.name.common}{" "}
        <button onClick={() => setExpanded(!expanded)}>
          {expanded ? "close" : "show"}
        </button>
      </p>
      {expanded ? <CountryDetails country={country} /> : ""}
    </div>
  );
};

export default ExpandableCountryDetails;
