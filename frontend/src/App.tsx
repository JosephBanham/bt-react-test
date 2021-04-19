/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import './styles/css/main.css';
import SearchPage from "./components/SearchPage/SearchPage";
import BtHeader from "./components/BtHeader/BtHeader";
import BtFooter from "./components/BtFooter/BtFooter";

export default function App() {
  return (
    <div className="App">
        <BtHeader />
        <SearchPage />
        <BtFooter />
    </div>
  );
}