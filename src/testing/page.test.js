import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from '../redux/store';
import Main from '../pages/index';
import SingleCurrency from '../pages/singleCurrency';

describe('Renders without crashing', (() => {
  it('Main renders without crashing', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Main />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('SingleCurrency renders without crashing', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/currency" Component={<SingleCurrency />} />
          </Routes>
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
}));
