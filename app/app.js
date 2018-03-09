import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppContainer from './containers/AppContainer';

import 'normalize.css';


const store = configureStore();
const history = createHistory();

const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Component/>
            </ConnectedRouter>
        </Provider>,
        document.getElementById('root')
    );
};

render(AppContainer);

if (module.hot) {
    module.hot.accept('./containers/AppContainer', function () {
        let NextApp = require('./containers/AppContainer').default;
        render(NextApp);
    })
}


