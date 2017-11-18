import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import reducer from './reducers';
import ShortWords from './components/ShortWords';

const store = createStore(
  reducer,
  applyMiddleware(createLogger()),
);

render(
  <Provider store={store}>
    <ShortWords />
  </Provider>,
  document.querySelector('#main'),
);
