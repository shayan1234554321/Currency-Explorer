/* eslint-disable */
import React from 'react'
import arrow from '../assets/arrow.svg'
import { useDispatch } from 'react-redux'
import { SetCurrentCurrency } from '../redux/currencies/currenciesSlice'

const SingleCountryItem = ({country}) => {

  const { country_name , currency_value , currency_code } = country
  const dispatch = useDispatch()
  const handleCountryClick = () => {
    const code = currency_code.toLowerCase()
    dispatch(SetCurrentCurrency(code))
  }

  return (
    <div className='SingleCountryItem' onClick={handleCountryClick}>
        <h4>{country_name}</h4>
        <div className="right">
            <h3>{Math.round(currency_value * 1000) / 1000} {currency_code}</h3>
            <img src={arrow} alt="left arrow" />
        </div>
    </div>
  )
}

export default SingleCountryItem