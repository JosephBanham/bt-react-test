import React from "react";
import './styles/css/main.css';
import SearchPage from "./components/SearchPage/SearchPage";
import PageHeader from "./components/PageHeader/PageHeader";
import PageFooter from "./components/PageFooter/PageFooter";

export default function App() {
  return (
    <div className="App">
        <PageHeader />
        <SearchPage />
        <PageFooter />
    </div>
  );
}