import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import appReducer from '../reducers/appReducer';

const history = createHistory();
const middleware = routerMiddleware(history);

export default function configureStore(){
    return createStore(
        appReducer,
        compose(
            applyMiddleware(middleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
}