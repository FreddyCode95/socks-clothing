import React from 'react';
import {render} from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { Provider }  from 'react-redux';

import App from './App';
import { store } from "./store/store";

import './index.scss';
import {CartProvider} from "./contexts/cartContext";



const rootElement = document.getElementById('root');
render(
  <React.StrictMode>
      <Provider store={store}>
          <CartProvider>
          <BrowserRouter>
              <App />
          </BrowserRouter>
          </CartProvider>
      </Provider>
  </React.StrictMode>,
  rootElement
);
