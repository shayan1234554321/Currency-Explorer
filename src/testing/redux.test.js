import reducer, {
  getCurrencies, getUsdCurrencies, SetCurrentCurrency, SetUsdCountries,
} from '../redux/currencies/currenciesSlice';

describe('currencies reducer', () => {
  const initialState = {
    currencies: [],
    usdCountries: [],
    usdCurrencies: [],
    loading: false,
    currentCurrency: null,
  };

  it('should handle initial state', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle SetCurrentCurrency', () => {
    const payload = 'USD';
    const nextState = reducer(initialState, SetCurrentCurrency(payload));
    expect(nextState.currentCurrency).toEqual(payload);
  });

  it('should handle SetUsdCountries', () => {
    const payload = ['US', 'Canada', 'Mexico'];
    const nextState = reducer(initialState, SetUsdCountries(payload));
    expect(nextState.usdCountries).toEqual(payload);
  });

  it('should handle getCurrencies.pending', () => {
    const nextState = reducer(initialState, getCurrencies.pending());
    expect(nextState.loading).toEqual(true);
  });

  it('should handle getCurrencies.fulfilled', () => {
    const payload = [{ code: 'EUR', name: 'Euro' }, { code: 'JPY', name: 'Japanese Yen' }];
    const nextState = reducer(initialState, getCurrencies.fulfilled(payload));
    expect(nextState.loading).toEqual(false);
    expect(nextState.currencies).toEqual(payload);
  });

  it('should handle getUsdCurrencies.pending', () => {
    const nextState = reducer(initialState, getUsdCurrencies.pending());
    expect(nextState.loading).toEqual(true);
  });

  it('should handle getUsdCurrencies.fulfilled', () => {
    const payload = [{ code: 'GBP', name: 'British Pound' }, { code: 'CAD', name: 'Canadian Dollar' }];
    const nextState = reducer(initialState, getUsdCurrencies.fulfilled(payload));
    expect(nextState.loading).toEqual(false);
    expect(nextState.usdCurrencies).toEqual(payload);
  });
});
