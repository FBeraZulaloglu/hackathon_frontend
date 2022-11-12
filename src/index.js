import React from 'react';
import ReactDOM from 'react-dom';

//import {ContextProvider} from './contexts/ContextProvider';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    {/* <ContextProvider>
    </ContextProvider> */}
      <App />
  </React.StrictMode>,
  document.getElementById('root'),
);