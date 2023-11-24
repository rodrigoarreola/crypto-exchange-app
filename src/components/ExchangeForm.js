import React, { useState, useEffect } from 'react';
import { Button, Select, Row, Col } from 'antd'; // Import Ant Design components
import 'antd/dist/antd.css'; // Import Ant Design styles

const { Option } = Select;

const ExchangeForm = ({ getExchangeRate, cryptoCoins, fiatCoins}) => {
  const [cryptoCurrency, setCryptoCurrency] = useState('');
  const [traditionalCurrency, setTraditionalCurrency] = useState('');

  const handleGetExchangeRate = () => {
    getExchangeRate(cryptoCurrency.toUpperCase(), traditionalCurrency.toUpperCase());
  };


  return (
    <div className='exchangeContainer'>
       <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8} lg={8} xl={8}>
          <label id="cryptoCurrency">Cryptocurrency:</label>
          <Select
            showSearch
            style={{ width: '100%' }}
            placeholder="Select Cryptocurrency"
            value={cryptoCurrency}
            onChange={(value) => setCryptoCurrency(value)}
            
          >
            {cryptoCoins.map((crypto) => (
              <Option key={crypto.asset_id} value={crypto.asset_id}>
                {crypto.name} ({crypto.asset_id})
              </Option>
            ))}
          </Select>
        </Col>

        <Col xs={24} sm={12} md={8} lg={8} xl={8}>
          <label id="traditionalCurrency">Traditional Currency:</label>
          <Select
            showSearch
            style={{ width: '100%'  }}
            placeholder="Select Currency"
            value={traditionalCurrency}
            onChange={(value) => setTraditionalCurrency(value)}
          >
            {fiatCoins.map((fiatCoin) => (
              <Option key={fiatCoin.asset_id} value={fiatCoin.asset_id}>
                {fiatCoin.name} ({fiatCoin.asset_id})
              </Option>
            ))}
          </Select>
        </Col>

        <Col xs={24} sm={12} md={8} lg={8} xl={8}>
          <label style={{ visibility: 'hidden' }}>Hidden Label</label>
          <Button type="primary" style={{ width: '100%' }} onClick={handleGetExchangeRate}>
            Get Exchange Rate
          </Button>
        </Col>
      </Row>
    </div>
    
  );
};

export default ExchangeForm;