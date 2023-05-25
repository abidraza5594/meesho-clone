import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main';
import {BrowserRouter} from "react-router-dom"
import { Provider } from 'react-redux';
import store from './store/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter>
    <Main />
  </BrowserRouter>
  </Provider>
);

