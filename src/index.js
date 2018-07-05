import {applyMiddleware, createStore} from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import App from './components/App';
import './styles/main.css';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render((
    <Provider store={store}>
        <App/>
    </Provider>
), document.getElementById('root'));
