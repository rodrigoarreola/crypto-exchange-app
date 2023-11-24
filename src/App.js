import React, { useState, useEffect } from 'react';
import ExchangeForm from './components/ExchangeForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import './App.css'; 

import AppHeader from './components/Header';
import QuickStartPage from './components/QuickStartPage';
import DocsPage from './components/DocsPage';

const { Content } = Layout;

const App = () => {
  const [result, setResult] = useState('');
  const [cryptoCoins, setCryptoCoins] = useState([]);
  const [fiatCoins, setFiatCoins] = useState([]);

  const apiKey = '897BAD1E-7934-4C1F-9CB7-1386720156DC'; 
  const apiUrl = 'https://rest.coinapi.io/v1/assets';

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl, { headers: { 'X-CoinAPI-Key': apiKey } });
      const data = await response.json();

      if (data.length > 0) {
        const cryptoCoins = data.filter((coin) => coin.type_is_crypto === 1); //.slice(0, 20);
        const fiatCoins = data.filter((coin) => coin.type_is_crypto !== 1); //.slice(0, 20);

        setCryptoCoins(cryptoCoins);
        setFiatCoins(fiatCoins);
      } else {
        console.error('Error fetching coins data.');
      }
    } catch (error) {
      console.error('Error fetching coins data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getExchangeRate = (cryptoCurrency, traditionalCurrency) => {
    const url = `https://rest.coinapi.io/v1/exchangerate/${cryptoCurrency}/${traditionalCurrency}`;

    fetch(url, {
      headers: {
        'X-CoinAPI-Key': apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.hasOwnProperty('rate')) {
          const exchangeRate = data.rate;
          setResult(`The exchange rate from ${cryptoCurrency} to ${traditionalCurrency} is: ${exchangeRate}`);
        } else {
          setResult(`Error: ${data.error}`);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setResult('Error fetching data. Please try again.');
      });
  };

  const HomePage = () => (
    <div className="homepage-container">
      <div className="background-image">
        <h1>Crypto Exchange Rate App</h1>
      </div>
      <div className="App app-container">
        <ExchangeForm getExchangeRate={getExchangeRate} cryptoCoins={cryptoCoins} fiatCoins={fiatCoins} />
        <p id="result">{result}</p>
      </div>
    </div>
  );

  return (
    <Router>
      <Layout>
        <AppHeader />

        <Content>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quick-start" element={<QuickStartPage />} />
            <Route path="/docs" element={<DocsPage />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
};

export default App;
