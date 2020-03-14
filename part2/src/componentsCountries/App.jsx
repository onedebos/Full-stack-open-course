import React, { useState, useEffect } from 'react';
import axios from 'axios';
import uuid from 'uuid';

const App = () => {
  const [country, setCountries] = useState([]);
  const [countryList, setCountryList] = useState([]);
  const [countryData, setCountryData] = useState([]);
  const [selectCountry, setSelectCountry] = useState([]);

  const hook = () => {
    axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
      setCountryList(response.data);
    });
  };
  useEffect(hook, []);

  const inputCountry = (e) => {
    setCountries(e.target.value);
    const check = countryList.filter(searchingFor(country)).map((c) => c.name);
  };

  const displayAfterLength = (arrayLen) => {
    if (arrayLen.length > 10) {
      console.log(arrayLen);
      return <p>Too many results, make your search more specific.</p>;
    }
  };

  function searchingFor(c) {
    return function(x) {
      return (
        x.name.toLowerCase().includes(country.toString().toLowerCase()) || !c
      );
    };
  }

  const getCountryFromList = (countryName) => {
    const cListData = countryList.filter(
      (c) => c.name.toLowerCase() === countryName.toString().toLowerCase(),
    );

    let newCountryObj = {};
    if (cListData.length === 0) {
      newCountryObj = {
        countryName: 'Not found',
      };
    } else if (cListData.length > 10) {
      newCountryObj = {
        countryName: 'Too many matches, specify another filter',
      };
    } else {
      newCountryObj = {
        countryName: cListData.map((cList) => cList.name).toString(),
        countryCapital: cListData.map((cList) => cList.capital).toString(),
        countryPop: cListData.map((cList) => cList.population).toString(),
        countryLanguages: cListData.map((cList) =>
          cList.languages.map((language) => language.name).toString(),
        ),
      };
    }
    setCountryData(countryData.concat(newCountryObj));
  };

  const findCountry = (e) => {
    e.preventDefault();
    const countryName = country;
    getCountryFromList(countryName);
    setCountries('');
  };

  const rows = () =>
    countryData.map((country) => (
      <div key={uuid()}>
        <h2>{country.countryName}</h2>
        <p>Capital: {country.countryCapital}</p>
        <p>Population: {country.countryPop}</p>
        <div>
          <h3>languages</h3>
          {country.countryLanguages}
        </div>
      </div>
    ));

  const runShow = (e) => {
    setSelectCountry(e.target.value.toString());
    console.log(selectCountry);
    getCountryFromList(selectCountry);
    rows();
  };
  return (
    <div>
      <h2>Country Search</h2>
      <form onSubmit={findCountry}>
        find countries
        <input onChange={inputCountry} value={country} />
        <button type="submit">Search</button>
      </form>
      {countryList.filter(searchingFor(country)).map((c) => (
        <div key={uuid()}>
          <p>
            {displayAfterLength(
              countryList.filter(searchingFor(country)).map((c) => c.name),
            )}
            <button onClick={runShow} value={c.name}>
              show
            </button>
          </p>
        </div>
      ))}
    </div>
  );
};

export default App;
