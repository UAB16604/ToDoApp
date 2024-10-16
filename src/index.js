// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './index.css';
import App from './App';

function Root() {
  const theme = store.getState().theme;

  return (
    <React.StrictMode>
      <Provider store={store}>
        <div className={theme}>
          <App />
        </div>
      </Provider>
    </React.StrictMode>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));