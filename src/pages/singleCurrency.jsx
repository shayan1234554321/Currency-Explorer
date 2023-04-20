import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getCurrencies } from '../redux/currencies/currenciesSlice';
import arrow from '../assets/arrowLeft.svg';
import mic from '../assets/mic.svg';
import setting from '../assets/setting.svg';
import flagImages from '../utility/flags';
import currenciesAndCountries from '../utility/currencyAndCountry.json';
import SingleCountryItem from '../components/SingleCountryItem';

const TopItem = ({ currentCurrency }) => {
  const upperCaseCurrency = currentCurrency.toUpperCase();
  const country = currenciesAndCountries.find(
    (country) => country.currency_code === upperCaseCurrency,
  ) || null;
  return (
    <div className="topItem">
      <div className="flagImageContainer">
        <div className="flagImage">
          <img src={flagImages[country?.country_code]} alt="flag" />
        </div>
      </div>
      <div className="details">
        <h2>
          {' '}
          {country?.country_name}
          {' '}
        </h2>
        <h4>{country?.currency_name}</h4>
        <h4>{country?.country_continent}</h4>
      </div>
    </div>
  );
};

TopItem.propTypes = {
  currentCurrency: PropTypes.string.isRequired,
};

const SingleCurrency = () => {
  const { currentCurrency, currencies } = useSelector(
    (state) => state.currencies,
  );
  const dispatch = useDispatch();
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCurrencies(currentCurrency));
  }, [dispatch, currentCurrency]);

  useEffect(() => {
    if (currencies) {
      const temp = [];
      const code = currencies[currentCurrency];
      if (code) {
        Object.keys(code).forEach((key) => {
          const upperKey = key.toUpperCase();
          const country = currenciesAndCountries.find(
            (element) => element.currency_code === upperKey,
          );
          if (country) {
            temp.push({
              ...country,
              currency_value: code[key],
            });
          }
        });
        setCountries(temp);
      }
    }
  }, [currencies]);

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="singleCurrency">
      <nav>
        <button
          type="button"
          className="left"
          onClick={handleBack}
          onKeyDown={(event) => {
            if (event.key === 'Backspace') {
              handleBack();
            }
          }}
        >
          <img src={arrow} height="25" alt="left arrow" />
        </button>
        <h4>
          Base Currency:
          {currentCurrency.toUpperCase()}
        </h4>
        <div className="iconsContainer">
          <img src={mic} alt="mic" className="icon" />
          <img src={setting} alt="setting" className="icon" />
        </div>
      </nav>
      <TopItem currentCurrency={currentCurrency} />
      <div className="countryItemsHeader">
        Exchange To Other Countries Currency
      </div>
      <div className="singleCountriesContainer">
        {countries.length > 0 ? (
          countries.map((country) => (
            <SingleCountryItem country={country} key={country.country_code} />
          ))
        ) : (
          <div>Loading</div>
        )}
      </div>
    </div>
  );
};

export default SingleCurrency;
