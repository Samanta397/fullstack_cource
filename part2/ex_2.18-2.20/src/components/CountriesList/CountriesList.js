import React, {useState} from 'react';

const CountriesList = ({countries}) => {
  const [countryView, setCountryView] = useState({name: '', flag: ''});

  if (!countries) {
    return null;
  }

  const handleCountryClick = (name, flag) => {
    setCountryView({name, flag})
  }

  return (
    <div>
      {countries.map(country => (
        <div key={country.name.common}>
          <span>{country.name.common}</span>
          {
            country.name.common === countryView.name
            ? <span>{countryView.flag}</span>
            : null
          }
          <button
            onClick={() => handleCountryClick(country.name.common,country.flag)}
          >show</button>
        </div>
      ))}
    </div>
  );
};

export default CountriesList;