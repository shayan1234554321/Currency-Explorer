/* eslint-disable */
import React from 'react';
import { useSelector } from 'react-redux';
import mic from '../assets/mic.svg'
import setting from '../assets/setting.svg'
import flagImages from '../utility/flags';
import CountryItem from '../components/CountryItem';

const TopItem = ({usdCountries}) => {
    const UnitedStates = usdCountries?.find((country)=> country.country_name === "United States America" ) || null

    return (
        <div className='topItem' >
            <div className="flagImageContainer">
                <div className="flagImage">
                    <img src={flagImages[UnitedStates?.country_code]} alt="flag image" />
                </div>
            </div>
            <div className="details">
                <h2> {UnitedStates?.country_name} </h2>
                <h4>{UnitedStates?.currency_name}</h4>
                <h4>{UnitedStates?.country_continent}</h4>
            </div>
        </div>
    )
}

const Main = () => {
    const { usdCountries } = useSelector((state)=> state.currencies )
    return (
        <div className='container' >
            <nav>
                <div className="left"></div>
                <h4>
                    Base Currency: USD
                </h4>
                <div className="iconsContainer">
                    <img src={mic} alt="mic" className="icon" />
                    <img src={setting} alt="setting" className="icon" />
                </div>
            </nav>
            <TopItem usdCountries={usdCountries} />
            <div className="countryItemsHeader">Exchange To Other Countries Currency</div>
            <div className="countriesContainer">
                {usdCountries?.map((country)=>(
                    <CountryItem country={country} key={country.country_code}/>
                ))}
            </div>
        </div>
    );
};

export default Main;