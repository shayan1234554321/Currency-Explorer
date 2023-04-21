import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from '../redux/store';
import CountryItem from '../components/CountryItem';
import SingleCountryItem from '../components/SingleCountryItem';

const mockSingleCountryItem = {
  country_name: 'Pakistan',
  currency_value: 1,
  currency_code: 'pkr',
};

const mockCountryItem = {
  country_name: 'Pakistan',
  country_code: 'pk',
  currency_name: 'pakistani rupees',
  currency_value: 1,
  currency_code: 'pkr',
};

describe('Renders without crashing', (() => {
  it('CountryItem to Match Snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/currency" Component={<CountryItem country={mockCountryItem} />} />
          </Routes>
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('SingleCountryItem to Match Snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/currency" Component={<SingleCountryItem country={mockSingleCountryItem} />} />
          </Routes>
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
}));
