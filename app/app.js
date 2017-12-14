import React from 'react';
import ReactDOM from 'react-dom';
import { syncHystoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import configureStore from './store/configureStore';

const store = configureStore();

const history = syncHystoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
        </Router>
    </Provider>
);

