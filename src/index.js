import React from 'react';
import ReactDOM from 'react-dom';


import ThemeProvider from './context/ThemeProvider';
import App from '@containers/App';
import '@styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);