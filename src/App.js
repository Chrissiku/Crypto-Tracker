import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import CryptoPage from './Components/CryptosPage';
import SingleCrypto from './Components/SingleCrypto';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/*" exact="true" element={<CryptoPage />} />
        <Route path=":cryptoId" exact="true" element={<SingleCrypto />} />
      </Routes>
    </>
  );
}

export default App;
