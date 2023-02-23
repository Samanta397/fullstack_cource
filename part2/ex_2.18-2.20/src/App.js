import {useEffect, useState} from "react";
import CountriesList from "./components/CountriesList/CountriesList";
import Country from "./components/Country/Country";
import countriesService from './services/countries'

function App() {
  const [countries, setCountries] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value)
  }

  useEffect(() => {
    if (searchValue) {
      countriesService
        .getByName(searchValue)
        .then(data => setCountries(data))
    }
  }, [searchValue]);

  const displayResult = (countriesArr) => {
    if (!countriesArr) {
      return null
    }

    if (countriesArr.length > 10) {
      return 'Too many matches, specify another filter'
    } else if (countriesArr.length <= 10 && countriesArr.length !== 1) {
      return <CountriesList countries={countriesArr}/>
    } else if (countriesArr.length === 1) {
      return <Country country={countriesArr[0]}/>
    }
  }


  return (
    <div>
      find countries: <input value={searchValue} onChange={handleSearchChange}/>
      <div>
        {displayResult(countries)}
      </div>
    </div>
  )
}

export default App;
