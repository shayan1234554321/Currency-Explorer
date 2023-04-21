import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Main from './pages/index';
import SingleCurrency from './pages/singleCurrency';
import {
  SetUsdCountries,
  getUsdCurrencies,
} from './redux/currencies/currenciesSlice';
import currenciesAndCountries from './utility/currencyAndCountry.json';
import HandleDesktop from './components/handleDesktop';

function App() {
  const dispatch = useDispatch();
  const { usdCurrencies } = useSelector((state) => state.currencies);

  useEffect(() => {
    dispatch(getUsdCurrencies());
  }, [dispatch]);

  useEffect(() => {
    if (usdCurrencies) {
      const temp = [];
      const code = usdCurrencies.usd;
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
      }
      dispatch(SetUsdCountries(temp));
    }
  }, [usdCurrencies]);

  return (
    <BrowserRouter>
      <HandleDesktop>
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/currency" exact element={<SingleCurrency />} />
        </Routes>
      </HandleDesktop>
    </BrowserRouter>
  );
}

export default App;
