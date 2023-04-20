/* eslint-disable */
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Main from './pages/index';
import SingleCurrency from './pages/singleCurrency';
import { SetUsdCountries, getUsdCurrencies } from './redux/currencies/currenciesSlice';
import currenciesAndCountries from './utility/currencyAndCountry.json'

function App() {
  const dispatch = useDispatch();
  const { usdCurrencies } = useSelector((state)=> state.currencies )

  useEffect(() => {
    dispatch(getUsdCurrencies());
  }, [dispatch]);

  useEffect(() => {
    if(usdCurrencies){
      let temp = []
      const code = usdCurrencies.usd
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
      dispatch(SetUsdCountries(temp))
    }
  }, [usdCurrencies]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/currency" exact element={<SingleCurrency />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
