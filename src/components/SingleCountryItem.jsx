import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import arrow from '../assets/arrow.svg';
import { SetCurrentCurrency } from '../redux/currencies/currenciesSlice';

const SingleCountryItem = ({ country }) => {
  const {
    country_name: countryName,
    currency_value: currencyValue,
    currency_code: currencyCode,
  } = country;
  const dispatch = useDispatch();
  const handleCountryClick = () => {
    const code = currencyCode.toLowerCase();
    dispatch(SetCurrentCurrency(code));
  };

  return (
    <button type="button" className="SingleCountryItem" onClick={handleCountryClick}>
      <h4>{countryName}</h4>
      <div className="right">
        <h3>
          {Math.round(currencyValue * 1000) / 1000}
          {' '}
          {currencyCode}
        </h3>
        <img src={arrow} alt="left arrow" />
      </div>
    </button>
  );
};

SingleCountryItem.propTypes = {
  country: PropTypes.shape({
    country_name: PropTypes.string.isRequired,
    currency_value: PropTypes.number.isRequired,
    currency_code: PropTypes.string.isRequired,
  }).isRequired,
};

export default SingleCountryItem;
