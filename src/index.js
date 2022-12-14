import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HistoryRouter history={createBrowserHistory()}>
      <App />      
    </HistoryRouter>
  </React.StrictMode>
)