import store from 'store';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Theme, { MUITheme } from './Theme/Theme';

ReactDOM.render(
  <React.StrictMode>
    <MUITheme>
      <Theme>
        <Provider store={store}>
          <App />
        </Provider>
      </Theme>
    </MUITheme>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
