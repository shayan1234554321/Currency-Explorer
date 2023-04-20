/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrencies } from '../redux/currencies/currenciesSlice';
import arrow from '../assets/arrowLeft.svg'
import mic from '../assets/mic.svg'
import setting from '../assets/setting.svg'
import flagImages from '../utility/flags';
import currenciesAndCountries from '../utility/currencyAndCountry.json'
import SingleCountryItem from '../components/SingleCountryItem';
import { useNavigate } from 'react-router-dom';

const TopItem = ({currentCurrency}) => {
  currentCurrency = currentCurrency.toUpperCase()
  const country = currenciesAndCountries.find((country)=> country.currency_code === currentCurrency ) || null
  return (
      <div className='topItem' >
          <div className="flagImageContainer">
              <div className="flagImage">
                  <img src={flagImages[country?.country_code]} alt="flag image" />
              </div>
          </div>
          <div className="details">
              <h2> {country?.country_name} </h2>
              <h4>{country?.currency_name}</h4>
              <h4>{country?.country_continent}</h4>
          </div>
      </div>
  )
}

const SingleCurrency = () => {

  const { currentCurrency , currencies , loading } = useSelector((state)=> state.currencies )
  const dispatch = useDispatch()
  const [countries , setCountries] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    dispatch(getCurrencies(currentCurrency))
  },[dispatch , currentCurrency])

  useEffect(()=>{
    if(currencies){
      let temp = []
      const code = currencies[currentCurrency]
      for(let key in code){
        key = key.toUpperCase()
        const country = currenciesAndCountries.find((element)=> element.currency_code === key)
        if(country){
          key = key.toLowerCase()
          temp.push({
              ...country,
              currency_value: code[key]
          })
        }
      }
      setCountries(temp)
    }
  },[currencies])

  const handleBack = () => {
    navigate("/")
  }

  return (
    <div className='singleCurrency' >
      <nav>
        <div className="left" onClick={handleBack} ><img src={arrow} height="25" alt="left arrow" /></div>
        <h4>
            Base Currency: {currentCurrency.toUpperCase()}
        </h4>
        <div className="iconsContainer">
            <img src={mic} alt="mic" className="icon" />
            <img src={setting} alt="setting" className="icon" />
        </div>
      </nav>
      <TopItem currentCurrency={currentCurrency} />
      <div className="countryItemsHeader">Exchange To Other Countries Currency</div>
      <div className="singleCountriesContainer">
        {(countries.length > 0)? 
          countries.map((country)=>(
            <SingleCountryItem country={country} key={country.country_code}/>
          )):
          <div>
            Loading
          </div>
        }
      </div>
    </div>
  )
};

export default SingleCurrency;
