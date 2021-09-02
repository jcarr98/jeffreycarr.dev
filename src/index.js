import { Grommet } from 'grommet';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const theme = {
  global: {
    colors: {
        main: '#da5555',
        text: '#ffffff'
    }
}
}

ReactDOM.render(
  <React.StrictMode>
    <Grommet full theme={theme}>
      <App />
    </Grommet>
  </React.StrictMode>,
  document.getElementById('root')
);
