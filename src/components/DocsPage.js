import React from 'react';

const DocsPage = () => (
  <div className='generalContainer'>
    <h1>Application Requirements and Configuration Guide</h1>

    <h2>System Requirements:</h2>
    <ul>
        <li><strong>Operating System:</strong> Windows, macOS, Linux</li>
        <li><strong>Processor:</strong> Minimum dual-core processor</li>
        <li><strong>RAM:</strong> Minimum 4 GB</li>
        <li><strong>Disk Space:</strong> Minimum 10 GB</li>
    </ul>

    <h2>Development Environment:</h2>
    <ul>
        <li><strong>Code Editor:</strong> Choose one from Visual Studio Code, Atom, or Sublime Text.</li>
        <li><strong>Version Control System:</strong> Git</li>
        <li><strong>Programming Languages:</strong> JavaScript (Node.js)</li>
        <li><strong>Frameworks:</strong> React (version 16.0 or higher)</li>
    </ul>

    <h2>Dependencies:</h2>
    <ul>
        <li><strong>React:</strong> ^16.0.0</li>
        <li><strong>React Router:</strong> ^5.0.0</li>
        <li><strong>Axios:</strong> ^0.21.0</li>
        <li><strong>Ant Design:</strong> ^4.0.0</li>
    </ul>

    <h2>Installation Steps:</h2>
    <ol>
        <li>Clone the repository: <code>git clone https://github.com/your-username/your-app.git</code></li>
        <li>Navigate to the project directory: <code>cd your-app</code></li>
        <li>Install dependencies: <code>npm install</code></li>
    </ol>

    <h2>Configuration:</h2>
    <p><strong>Environment Variables:</strong> Create a <code>.env</code> file with necessary environment variables. Refer to the <code>.env.example</code> file.</p>

    <h2>API Keys and Secrets:</h2>
    <p>If your application uses external APIs, obtain API keys and add them to the configuration.</p>

    <h2>Build Process:</h2>
    <ol>
        <li>Build the application: <code>npm run build</code></li>
        <li>Transpile code if necessary: <code>npm run transpile</code></li>
    </ol>

    <h2>Run and Test:</h2>
    <ol>
        <li>Run the application: <code>npm start</code></li>
        <li>Open the browser and navigate to <code>http://localhost:3000</code></li>
    </ol>

    <h2>Deployment:</h2>
    <ol>
        <li>Configure deployment settings in the deployment configuration file.</li>
        <li>Deploy the application using the deployment script: <code>npm run deploy</code></li>
    </ol>

    <h2>Troubleshooting:</h2>
    <ul>
        <li><strong>Common Issues and Solutions:</strong></li>
        <ul>
            <li>If encountering issues during installation, ensure that Node.js and npm are properly installed.</li>
            <li>Check for typos in configuration files.</li>
        </ul>
        <li><strong>Additional Support:</strong> Visit our <a href="https://community.example.com">community forum</a> for additional help.</li>
    </ul>

    <h2>Contributing:</h2>
    <p>We welcome contributions! Follow our <a href="CONTRIBUTING.md">contribution guidelines</a> to get started.</p>

    <h2>License:</h2>
    <p>This project is licensed under the <a href="LICENSE">MIT License</a>.</p>

    <h2>Contact Information:</h2>
    <p>For support or inquiries, contact us at <a href="mailto:support@example.com">support@example.com</a>.</p>

    <p><a href="https://docs.example.com">Documentation</a> | <a href="https://community.example.com">Community Forum</a></p>
  </div>
);

export default DocsPage;