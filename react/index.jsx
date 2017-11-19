import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

import reducer from './reducers';
import ShortWords from './components/ShortWords';

const middleware = [];
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware),
);

render(
  <Provider store={store}>
    <ShortWords />
  </Provider>,
  document.querySelector('#main'),
);
