import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='https://github.com/reyleal27/goit-react-hw-07-phonebook.git/'>
       <App />
    </BrowserRouter>
   
  </React.StrictMode>
);
