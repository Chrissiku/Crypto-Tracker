/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable quotes */
import { Routes, Route } from "react-router-dom";
import "./App.css";
import CryptoPage from "./Components/CryptosPage";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact="true" element={<CryptoPage />} />
      </Routes>
    </>
  );
}

export default App;
