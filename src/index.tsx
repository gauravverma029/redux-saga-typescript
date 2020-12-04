import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { Store } from 'redux';

import './tailwind.output.css';

const store: Store = configureStore();

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

