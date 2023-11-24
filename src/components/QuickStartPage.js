import React from 'react';

const QuickStartPage = () => (
  <div className='generalContainer'>
    <h1>Quick Start Guide</h1>
    <p>
      Welcome to the Quick Start guide for the Crypto Exchange Rate App! Follow the steps below to get started quickly.
    </p>

    <p>
      <strong>Introduction:</strong>
      <br />
      Welcome to the Crypto Exchange Rate App! This application allows you to quickly and easily check real-time exchange rates between cryptocurrencies and traditional currencies.  Key features include:
    </p>

    <ul>
      <li> Instantly view exchange rates. </li>
      <li> Choose from a variety of cryptocurrencies and traditional currencies.</li>
      <li>User-friendly interface for seamless navigation.</li>
    </ul>

    <h2>Prerequisites:</h2>
    <p>
      Before you begin, ensure you have the following prerequisites:
      <br />
      - Node.js and npm installed on your machine. <a href='https://nodejs.org/' target='_blank'>Install Node.js</a> 
    </p>

    <h2>Installation:</h2>
    <p>
      Follow these steps to install the Crypto Exchange Rate App:
      <br />
      1. Clone the repository from GitHub:
      <br />
      <code>git clone https://github.com/your-username/crypto-exchange-app.git</code>
      <br />
      2. Navigate to the project directory:
      <br />
      <code>cd crypto-exchange-app</code>
      <br />
      3. Install dependencies:
      <br />
      <code>npm install</code>
    </p>

    <h2>Configuration:</h2>
    <p>
      - Set your API key in the configuration file.  `src/App.js`
    </p>

    <h2>Usage:</h2>
    <p>
      To launch and use the application, run the following command:
      <br />
      <code>npm start</code>
      <br />
      Open your web browser and go to <a href='http://localhost:3000' target='_blank'>http://localhost:3000</a> to access the application.
    </p>

    <h2>User Interface:</h2>
    <p>The user interface is intuitive and easy to use. Key features include:</p>
    <ul>
      <li>Dropdowns to select cryptocurrencies and traditional currencies.</li>
      <li>Real-time exchange rate display.</li>
      <li>Responsive layout for a seamless experience on various devices.</li>
    </ul>

    <h2>Testing:</h2>
    <p>Ensure the application is working as expected by trying the following:</p>
    <ul>
      <li>Select different cryptocurrencies and traditional currencies.</li>
      <li>Verify that the exchange rate updates in real-time.</li>
    </ul>
    

    <h2>Conclusion:</h2>
    <p>
      Thank you for choosing the Crypto Exchange Rate App! We hope you find it useful. For further information, refer to the documentation and explore the project repository. Happy exchanging!
    </p>
  </div>
);

export default QuickStartPage;
