import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/main.css';

//* React Components
import BtHeader from './components/BtHeader/BtHeader';
import SearchButton from './components/SearchButton/SearchButton';
import BtFooter from './components/BtFooter/BtFooter';
import SearchBar from './components/SearchBar/SearchBar';

ReactDOM.render(
  <React.StrictMode>
    <BtHeader />
    <SearchBar />
    <SearchButton />
    <BtFooter />
  </React.StrictMode>,
  document.getElementById('root')
);
