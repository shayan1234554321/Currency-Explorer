import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import flagImages from '../utility/flags';
import arrow from '../assets/arrow.svg';
import { SetCurrentCurrency } from '../redux/currencies/currenciesSlice';

const CountryItem = ({ country }) => {
  const {
    country_name: countryName,
    country_code: countryCode,
    currency_name: currencyName,
    currency_value: currencyValue,
    currency_code: currencyCode,
  } = country;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick() {
    const code = currencyCode.toLowerCase();
    dispatch(SetCurrentCurrency(code));
    navigate('/currency');
  }

  return (
    <button type="button" className="countryItem" onClick={handleClick}>
      <div className="visit">
        <img src={arrow} alt="" />
      </div>
      <div className="details">
        <h2>{countryName}</h2>
        <h4>{currencyName}</h4>
        <h4>
          {Math.round(currencyValue * 1000) / 1000}
          {' '}
          {currencyCode}
        </h4>
      </div>
      <div className="imageContainer">
        <img src={flagImages[countryCode]} alt="" />
      </div>
    </button>
  );
};

CountryItem.propTypes = {
  country: PropTypes.shape({
    country_name: PropTypes.string.isRequired,
    country_code: PropTypes.string.isRequired,
    currency_name: PropTypes.string.isRequired,
    currency_value: PropTypes.number.isRequired,
    currency_code: PropTypes.string.isRequired,
  }).isRequired,
};

export default CountryItem;
