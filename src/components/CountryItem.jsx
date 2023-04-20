/* eslint-disable */
import React from 'react'
import flagImages from '../utility/flags';
import arrow from '../assets/arrow.svg'
import { useDispatch } from 'react-redux';
import { SetCurrentCurrency } from '../redux/currencies/currenciesSlice';
import { useNavigate } from 'react-router-dom';

const CountryItem = ({country}) => {

  const { country_name , country_code , currency_name , currency_value , currency_code } = country
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleClick(){
    const code = currency_code.toLowerCase()
    dispatch(SetCurrentCurrency(code))
    navigate("/currency")
  }

  return (
    <div className='countryItem' onClick={handleClick}>
        <div className="visit">
            <img src={arrow} alt="" />
        </div>
        <div className="details">
            <h2>{country_name}</h2>
            <h4>{currency_name}</h4>
            <h4>{Math.round(currency_value * 1000) / 1000} {currency_code}</h4>
        </div>
        <div className="imageContainer">
            <img src={flagImages[country_code]} alt="" />
        </div>
    </div>
  )
}

export default CountryItem