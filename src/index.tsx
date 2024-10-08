import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import './firebase'
import "./utils/i118Lang";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

const rootElem = document.getElementById('root')

if (rootElem){
  const root = ReactDOM.createRoot(rootElem);
  root.render(
      <BrowserRouter>
        <Provider store={store}>
          <App/>
        </Provider>
      </BrowserRouter>
  );
}

// reportWebVitals();

