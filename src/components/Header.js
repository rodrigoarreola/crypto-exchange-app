import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      {/* Logo or Branding (Text) */}
      <Link to="/">
        <div style={{ color: 'white', fontSize: '20px' }}>Crypto Exchange Rate App</div>
      </Link>
      

      {/* Navigation Menu */}
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ marginLeft: 'auto' }}>
        {/* Quick Start */}
        <Menu.Item key="1">
          <Link to="/quick-start">Quick Start</Link>
        </Menu.Item>

        {/* Docs */}
        <Menu.Item key="2">
          <Link to="/docs">Docs</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default AppHeader;