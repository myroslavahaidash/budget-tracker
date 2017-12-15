import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { Route, IndexRoute } from 'react-router-dom';
import configureStore from './store/configureStore';
import App from './components/App.jsx';
import { HomePage } from './components/HomePage.jsx';
import { StatisticPage } from './components/StatisticPage.jsx';


const store = configureStore();
const history = createHistory();

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history = {history}>
            <App/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

