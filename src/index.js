import { Grommet } from 'grommet';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const theme = {
  global: {
    font: {
      family: "Oxygen"
    },
    colors: {
      main: '#da5555',
      secondary: '#4d4d4d',
      mainText: '#ffffff',
      secondaryText: '#000000',
      placeholder: '#ffffff'
    },
    elevation: {
      dark: {
        none: 'none',
        // You can override the values for box-shadow here.
        xsmall: '0px 2px 2px rgba(218, 85, 85, 1.00)',
        small: '0px 4px 4px rgba(218, 85, 85, 1.00)',
        medium: '0px 6px 8px rgba(218, 85, 85, 1.00)',
        large: '0px 8px 16px rgba(218, 85, 85, 1.00)',
        xlarge: '0px 12px 24px rgba(218, 85, 85, 1.00)',
      },
    },
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Grommet full theme={theme} background="#333333">
      <App />
    </Grommet>
  </React.StrictMode>,
  document.getElementById('root')
);
