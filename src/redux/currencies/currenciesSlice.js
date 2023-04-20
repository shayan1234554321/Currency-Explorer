import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import currencyAPI from '../../utility/secret';

const initialState = {
  currencies: [],
  usdCountries: [],
  usdCurrencies: [],
  loading: false,
  currentCurrency: null,
};

export const getCurrencies = createAsyncThunk('Get Currencies', async (currencyCode) => {
  const API = currencyAPI(currencyCode);
  const response = await axios.get(API);
  return response.data;
});

export const getUsdCurrencies = createAsyncThunk('Get USD Currencies', async () => {
  const API = currencyAPI('usd');
  const response = await axios.get(API);
  return response.data;
});

export const counterSlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {
    SetCurrentCurrency: (state, { payload }) => ({ ...state, currentCurrency: payload }),
    SetUsdCountries: (state, { payload }) => ({ ...state, usdCountries: payload }),
  },
  extraReducers: (builder) => {
    builder.addCase(getCurrencies.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(getCurrencies.fulfilled, (state, { payload }) => ({
      ...state,
      loading: false,
      currencies: payload,
    }));
    builder.addCase(getUsdCurrencies.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(getUsdCurrencies.fulfilled, (state, { payload }) => ({
      ...state,
      loading: false,
      usdCurrencies: payload,
    }));
  },
});

export const { SetCurrentCurrency, SetUsdCountries } = counterSlice.actions;

export default counterSlice.reducer;
