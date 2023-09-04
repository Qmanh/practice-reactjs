import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {BrowserRouter} from "react-router-dom";
import ErrorBoundary from './components/ErrorBoundary/Error';

import store from './redux/store';
import {Provider} from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    
    <BrowserRouter>
      <ErrorBoundary>
        <App/>
      </ErrorBoundary>
    </BrowserRouter>
    
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);