import React from 'react';
import Weather from "../Weather/Weather";

const Country = ({country}) => {
  const name = country.name.common,
        capital = country.capital[0],
        area = country.area,
        languages = country.languages,
        flagSrc = country.flags.png;

  return (
    <>
      <h2>{name}</h2>
      <p>Capital: {capital}</p>
      <p>Area: {area}</p>
      <br/>
      <b>Languages:</b>
      <ul>
        {Object.entries(languages).map(([key, value]) => (
          <li key={key}>{value}</li>
        ))}
      </ul>
      <img src={flagSrc} alt="Flag"/>

      <Weather capitalName={capital}/>
    </>
  );
};

export default Country;