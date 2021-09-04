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
        secondary: '#dcdcdc',
        mainText: '#ffffff',
        secondaryText: '#000000'
    }
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
