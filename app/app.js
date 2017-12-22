import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/App/App';


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

render(App);

if (module.hot) {
    module.hot.accept('./components/App/App', function () {
        let NextApp = require('./components/App/App').default;
        render(NextApp);
    })
}


