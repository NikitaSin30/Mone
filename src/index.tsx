import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import './shared/firebase/firebase'

const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
