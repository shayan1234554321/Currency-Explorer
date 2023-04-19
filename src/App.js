/* eslint-disable */
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/index';
import SingleCurrency from './pages/singleCurrency';

function App() {
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
