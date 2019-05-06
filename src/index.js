import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import load from "./reducers/load";
import users from './reducers/users';
import tweets from './reducers/tweets';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import logger from "./middleware/logger";
const store = createStore(
    combineReducers({
        load,
        users,
        tweets
    }),
    applyMiddleware(thunk, logger)
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)